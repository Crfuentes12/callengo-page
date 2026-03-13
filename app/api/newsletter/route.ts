import { NextRequest, NextResponse } from 'next/server'

const HUBSPOT_TOKEN = process.env.HUBSPOT_PRIVATE_APP_TOKEN

export async function POST(request: NextRequest) {
  if (!HUBSPOT_TOKEN) {
    console.error('HUBSPOT_PRIVATE_APP_TOKEN is not set')
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 })
  }

  let email: string
  try {
    const body = await request.json()
    email = (body.email ?? '').trim().toLowerCase()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  // Basic email validation
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'A valid email address is required' }, { status: 400 })
  }

  try {
    // 1. Search for existing contact by email
    const searchRes = await fetch(
      'https://api.hubapi.com/crm/v3/objects/contacts/search',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${HUBSPOT_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          filterGroups: [
            {
              filters: [
                { propertyName: 'email', operator: 'EQ', value: email },
              ],
            },
          ],
          limit: 1,
          properties: ['hs_object_id', 'lifecyclestage'],
        }),
      }
    )

    if (!searchRes.ok) {
      throw new Error(`HubSpot search failed: ${searchRes.status}`)
    }

    const searchData = await searchRes.json()

    const properties: Record<string, string> = {
      email,
      // Only update lifecyclestage to subscriber if they don't already have a more advanced stage.
      // HubSpot won't downgrade existing contacts — it respects the hierarchy automatically
      // when using the Contacts API directly, but we set it for new contacts.
      lifecyclestage: 'subscriber',
      // Mark as opted-in for marketing emails (GDPR-friendly: user explicitly subscribed)
      hs_marketable_status: 'true',
    }

    if (searchData.results && searchData.results.length > 0) {
      // Contact already exists — update with newsletter opt-in
      const contactId = searchData.results[0].id as string

      const updateRes = await fetch(
        `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${HUBSPOT_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ properties }),
        }
      )

      if (!updateRes.ok) {
        throw new Error(`HubSpot update failed: ${updateRes.status}`)
      }
    } else {
      // New contact — create
      const createRes = await fetch(
        'https://api.hubapi.com/crm/v3/objects/contacts',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${HUBSPOT_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ properties }),
        }
      )

      if (!createRes.ok) {
        const errBody = await createRes.json().catch(() => ({}))
        // If it's a duplicate contact error (409), it's fine — ignore
        if (createRes.status !== 409) {
          throw new Error(`HubSpot create failed: ${createRes.status} — ${JSON.stringify(errBody)}`)
        }
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Subscription failed. Please try again.' },
      { status: 500 }
    )
  }
}
