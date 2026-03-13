/**
 * Smartlead Webhook Handler
 *
 * Receives events from Smartlead (EMAIL_OPEN, EMAIL_REPLY, EMAIL_LINK_CLICK)
 * and syncs activity to HubSpot CRM contacts.
 *
 * Security: add ?key=YOUR_SECRET to the webhook URL in Smartlead settings.
 * Then set SMARTLEAD_WEBHOOK_KEY in your env vars (Vercel + .env.local).
 *
 * Webhook URL to use in Smartlead:
 *   https://callengo.com/api/webhooks/smartlead?key=YOUR_SECRET_KEY
 */

import { NextRequest, NextResponse } from 'next/server'

const HUBSPOT_TOKEN = process.env.HUBSPOT_PRIVATE_APP_TOKEN
const WEBHOOK_KEY = process.env.SMARTLEAD_WEBHOOK_KEY

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SmartleadPayload {
  event_type?: string
  type?: string // some Smartlead versions use 'type' instead of 'event_type'
  // Lead identifiers
  lead_email?: string
  email?: string
  // Lead info
  first_name?: string
  lead_first_name?: string
  last_name?: string
  lead_last_name?: string
  company_name?: string
  company?: string
  phone?: string
  website?: string
  linkedin_profile?: string
  // Campaign info
  campaign_id?: number | string
  campaign_name?: string
  seq_number?: number
  // Reply-specific
  reply_message?: string
  reply_text?: string
  // Click-specific
  clicked_url?: string
  // Meta
  timestamp?: string
  created_at?: string
}

// ---------------------------------------------------------------------------
// HubSpot helpers
// ---------------------------------------------------------------------------

async function hubspotRequest(path: string, method: string, body?: unknown) {
  const res = await fetch(`https://api.hubapi.com${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${HUBSPOT_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  const data = await res.json().catch(() => ({}))
  return { ok: res.ok, status: res.status, data }
}

async function findContactByEmail(email: string): Promise<string | null> {
  const { ok, data } = await hubspotRequest(
    '/crm/v3/objects/contacts/search',
    'POST',
    {
      filterGroups: [
        { filters: [{ propertyName: 'email', operator: 'EQ', value: email }] },
      ],
      limit: 1,
      properties: ['hs_object_id', 'smartlead_status', 'lifecyclestage'],
    }
  )
  if (ok && data.results?.length > 0) {
    return data.results[0].id as string
  }
  return null
}

async function upsertContact(
  email: string,
  properties: Record<string, string>
): Promise<string | null> {
  const existing = await findContactByEmail(email)

  if (existing) {
    await hubspotRequest(`/crm/v3/objects/contacts/${existing}`, 'PATCH', {
      properties,
    })
    return existing
  }

  // Create new contact
  const { ok, data } = await hubspotRequest('/crm/v3/objects/contacts', 'POST', {
    properties: { email, ...properties },
  })

  if (ok && data.id) return data.id as string
  // Handle 409 duplicate — search again
  if (!ok && data.status === 'error') {
    return await findContactByEmail(email)
  }
  return null
}

async function logContactActivity(
  contactId: string,
  note: string,
  timestamp: string
) {
  await hubspotRequest('/crm/v3/objects/notes', 'POST', {
    properties: {
      hs_note_body: note,
      hs_timestamp: timestamp,
    },
    associations: [
      {
        to: { id: contactId },
        types: [
          { associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 202 },
        ],
      },
    ],
  })
}

async function createDealForContact(
  contactId: string,
  dealName: string,
  campaignName: string,
  note: string
): Promise<string | null> {
  // Create the deal in "MQL — Marketing Qualified" stage
  // (the internal stage ID depends on your pipeline setup in HubSpot)
  // We'll use the stage label lookup approach via pipeline API.
  // For now, use dealstage name — HubSpot will accept internal IDs.
  // You'll need to replace this with your actual stage internal ID.
  // Find it: HubSpot → Settings → Deals → Pipelines → click stage name
  const { ok, data } = await hubspotRequest('/crm/v3/objects/deals', 'POST', {
    properties: {
      dealname: dealName,
      // Use the pipeline internal ID for "Callengo Sales"
      // You can get this from HubSpot Settings → CRM → Deals → Pipelines
      pipeline: 'default',
      // "SQL — Sales Qualified" stage in your Callengo Sales pipeline
      // Replace 'appointmentscheduled' with your actual stage ID if needed
      dealstage: 'appointmentscheduled',
    },
  })

  if (!ok || !data.id) return null
  const dealId = data.id as string

  // Associate deal → contact
  await hubspotRequest(
    `/crm/v4/objects/deals/${dealId}/associations/contacts/${contactId}/types`,
    'PUT',
    [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 3 }]
  )

  // Add context note to deal
  await hubspotRequest('/crm/v3/objects/notes', 'POST', {
    properties: {
      hs_note_body: note,
      hs_timestamp: new Date().toISOString(),
    },
    associations: [
      {
        to: { id: contactId },
        types: [
          { associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 202 },
        ],
      },
      {
        to: { id: dealId },
        types: [
          { associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 214 },
        ],
      },
    ],
  })

  return dealId
}

// ---------------------------------------------------------------------------
// Event handlers
// ---------------------------------------------------------------------------

async function handleEmailOpen(payload: SmartleadPayload) {
  const email = (payload.lead_email ?? payload.email ?? '').toLowerCase().trim()
  if (!email) return

  const contactId = await upsertContact(email, {
    firstname: payload.first_name ?? payload.lead_first_name ?? '',
    lastname: payload.last_name ?? payload.lead_last_name ?? '',
    company: payload.company_name ?? payload.company ?? '',
    smartlead_status: 'in_sequence',
    smartlead_sequence: payload.campaign_name ?? '',
  })

  if (!contactId) return

  const ts = payload.timestamp ?? payload.created_at ?? new Date().toISOString()
  await logContactActivity(
    contactId,
    `📧 Email opened — Smartlead campaign: ${payload.campaign_name ?? 'unknown'}\nSequence step: ${payload.seq_number ?? 'N/A'}`,
    ts
  )
}

async function handleEmailLinkClick(payload: SmartleadPayload) {
  const email = (payload.lead_email ?? payload.email ?? '').toLowerCase().trim()
  if (!email) return

  const contactId = await upsertContact(email, {
    firstname: payload.first_name ?? payload.lead_first_name ?? '',
    lastname: payload.last_name ?? payload.lead_last_name ?? '',
    company: payload.company_name ?? payload.company ?? '',
    smartlead_status: 'in_sequence',
    smartlead_sequence: payload.campaign_name ?? '',
    lifecyclestage: 'lead',
  })

  if (!contactId) return

  const ts = payload.timestamp ?? payload.created_at ?? new Date().toISOString()
  await logContactActivity(
    contactId,
    `🔗 Email link clicked — Smartlead campaign: ${payload.campaign_name ?? 'unknown'}\nURL: ${payload.clicked_url ?? 'N/A'}\nSequence step: ${payload.seq_number ?? 'N/A'}`,
    ts
  )
}

async function handleEmailReply(payload: SmartleadPayload) {
  const email = (payload.lead_email ?? payload.email ?? '').toLowerCase().trim()
  if (!email) return

  const contactId = await upsertContact(email, {
    firstname: payload.first_name ?? payload.lead_first_name ?? '',
    lastname: payload.last_name ?? payload.lead_last_name ?? '',
    company: payload.company_name ?? payload.company ?? '',
    smartlead_status: 'replied',
    smartlead_sequence: payload.campaign_name ?? '',
    lifecyclestage: 'marketingqualifiedlead',
  })

  if (!contactId) return

  const ts = payload.timestamp ?? payload.created_at ?? new Date().toISOString()
  const replyText = payload.reply_message ?? payload.reply_text ?? ''

  // Log reply as activity note
  await logContactActivity(
    contactId,
    `💬 Email replied — Smartlead campaign: ${payload.campaign_name ?? 'unknown'}\nSequence step: ${payload.seq_number ?? 'N/A'}\n\nReply:\n${replyText || '(no reply text captured)'}`,
    ts
  )

  // Create a deal for this contact — they replied = interested
  const companyDisplay =
    payload.company_name ?? payload.company ?? email.split('@')[1] ?? 'Unknown'

  await createDealForContact(
    contactId,
    `${companyDisplay} — Smartlead Reply`,
    payload.campaign_name ?? '',
    `Lead replied to cold email campaign "${payload.campaign_name ?? 'unknown'}". Deal auto-created by webhook.\n\nReply preview:\n${replyText?.substring(0, 300) ?? '—'}`
  )
}

// ---------------------------------------------------------------------------
// Route handler
// ---------------------------------------------------------------------------

export async function POST(request: NextRequest) {
  // Basic key auth via query param
  // Set SMARTLEAD_WEBHOOK_KEY in Vercel env and append ?key=VALUE to the
  // webhook URL in Smartlead settings.
  if (WEBHOOK_KEY) {
    const keyParam = request.nextUrl.searchParams.get('key')
    if (keyParam !== WEBHOOK_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  if (!HUBSPOT_TOKEN) {
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 })
  }

  let payload: SmartleadPayload
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  // Normalize event type (Smartlead can send in different cases/formats)
  const eventType = (
    payload.event_type ??
    payload.type ??
    ''
  )
    .toUpperCase()
    .replace(/\s+/g, '_')

  try {
    switch (eventType) {
      case 'EMAIL_OPEN':
        await handleEmailOpen(payload)
        break
      case 'EMAIL_LINK_CLICK':
      case 'EMAIL_CLICKED':
        await handleEmailLinkClick(payload)
        break
      case 'EMAIL_REPLY':
        await handleEmailReply(payload)
        break
      default:
        // Unknown event — acknowledge but don't process
        console.log(`[Smartlead webhook] Unhandled event type: ${eventType}`)
    }

    return NextResponse.json({ success: true, eventType })
  } catch (error) {
    console.error('[Smartlead webhook] Error processing event:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Smartlead may send GET requests to verify the webhook URL during setup
export async function GET() {
  return NextResponse.json({ ok: true, service: 'Callengo Smartlead Webhook' })
}
