"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Plug,
  Calendar,
  Video,
  MessageSquare,
  BarChart3,
  Workflow,
  Check,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Settings,
  Shield,
  AlertTriangle,
  Users,
  CreditCard,
  Zap,
  Database,
  Globe,
  RefreshCw,
  BookOpen,
  Code,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════
   INTEGRATION DATA — FULL & COMPLETE
   ═══════════════════════════════════════════════════════════════════ */

const categoryIcons: Record<string, React.ElementType> = {
  Calendar: Calendar,
  Video: Video,
  CRM: Database,
  Communication: MessageSquare,
  Productivity: BarChart3,
  Automation: Workflow,
};

const categoryColors: Record<string, string> = {
  Calendar: "bg-blue-100 text-blue-700",
  Video: "bg-purple-100 text-purple-700",
  CRM: "bg-emerald-100 text-emerald-700",
  Communication: "bg-amber-100 text-amber-700",
  Productivity: "bg-pink-100 text-pink-700",
  Automation: "bg-slate-100 text-slate-700",
};

const categoryBorderColors: Record<string, string> = {
  Calendar: "border-blue-200",
  Video: "border-purple-200",
  CRM: "border-emerald-200",
  Communication: "border-amber-200",
  Productivity: "border-pink-200",
  Automation: "border-slate-200",
};

const planBadgeColors: Record<string, string> = {
  Starter: "bg-gray-100 text-gray-700",
  Business: "bg-blue-50 text-blue-700",
  Teams: "bg-indigo-50 text-indigo-700",
  Enterprise: "bg-violet-50 text-violet-700",
};

type IntegrationDetail = {
  name: string;
  category: string;
  minPlan: string;
  tagline: string;
  whatItDoes: string;
  setup: string[];
  syncedData: string[];
  useCases: string[];
  limitations: string[];
};

const integrations: IntegrationDetail[] = [
  /* ─── Calendar ─── */
  {
    name: "Google Calendar",
    category: "Calendar",
    minPlan: "Starter",
    tagline: "Sync appointments and availability in real time",
    whatItDoes:
      "Connects your Google Calendar with Callengo so that confirmed, rescheduled, or cancelled appointments are instantly reflected on your calendar. Callengo reads your availability to avoid double-booking and can create new calendar events automatically when an Appointment Confirmation agent confirms a meeting.",
    setup: [
      "Go to Settings > Integrations in your Callengo dashboard.",
      "Click Connect next to Google Calendar.",
      "Sign in with your Google account and grant Callengo permission to read and write calendar events.",
      "Select which calendar(s) you want Callengo to sync with (you can choose multiple).",
      "Configure default event duration, buffer time between meetings, and working hours.",
      "Save the configuration. A test event will be created to confirm the connection.",
    ],
    syncedData: [
      "Event title (uses campaign or contact name)",
      "Event date and time (start & end)",
      "Event description (includes call summary and outcome)",
      "Attendee email (from contact record)",
      "Location or video meeting link (if video integration is also active)",
      "Event status (confirmed, tentative, cancelled)",
      "Callengo call ID and campaign reference in event notes",
      "Custom reminders (configurable per campaign)",
    ],
    useCases: [
      "Appointment confirmation campaigns that auto-update your personal or team calendar.",
      "Checking real-time availability before offering appointment slots during calls.",
      "Automatically blocking time for rescheduled appointments.",
      "Syncing confirmed appointments to a shared team calendar.",
    ],
    limitations: [
      "Supports Google Workspace and personal Gmail accounts.",
      "Maximum of 10 calendars per Callengo account.",
      "Sync latency is typically under 5 seconds but may take up to 30 seconds during peak usage.",
      "All-day events are not created automatically; only timed events are supported.",
      "Recurring event creation is not supported — each appointment is a standalone event.",
    ],
  },
  {
    name: "Outlook Calendar",
    category: "Calendar",
    minPlan: "Starter",
    tagline: "Two-way calendar sync with Microsoft 365",
    whatItDoes:
      "Provides a bidirectional sync between your Microsoft Outlook calendar and Callengo. When the AI agent confirms, reschedules, or cancels an appointment, the corresponding calendar event is created, updated, or removed in Outlook. Callengo also reads your Outlook calendar to check availability in real time.",
    setup: [
      "Go to Settings > Integrations in your Callengo dashboard.",
      "Click Connect next to Outlook Calendar.",
      "Sign in with your Microsoft 365 or Outlook.com account.",
      "Grant Callengo the required permissions (Calendars.ReadWrite).",
      "Choose the Outlook calendar(s) to sync. Shared calendars are supported if you have write access.",
      "Set event defaults: duration, color category, reminder minutes.",
      "Click Test Connection — a sample event will appear in your Outlook.",
    ],
    syncedData: [
      "Event subject (campaign name + contact name)",
      "Start and end date/time with time zone",
      "Body/description with call transcript summary",
      "Attendees (contact email if available)",
      "Location field (physical address or video link)",
      "Categories/labels (mapped from Callengo campaign tags)",
      "Sensitivity level (normal by default)",
      "Free/busy status (set to Busy for confirmed events)",
    ],
    useCases: [
      "Enterprise teams using Microsoft 365 who need real-time calendar updates from AI calling campaigns.",
      "Medical or legal offices syncing appointment confirmations with shared Outlook calendars.",
      "Sales teams checking Outlook availability before the AI agent offers meeting slots.",
      "Syncing cancelled or rescheduled appointments back to Outlook automatically.",
    ],
    limitations: [
      "Requires Microsoft 365 Business, Enterprise, or a personal Outlook.com account.",
      "Shared mailbox calendars require the user to have explicit write permissions.",
      "Sync interval is near real-time (under 10 seconds) for single events; bulk sync may take up to 60 seconds.",
      "On-premises Exchange servers are not supported — only cloud-based Microsoft 365.",
      "Maximum of 10 calendars per Callengo account.",
    ],
  },

  /* ─── Video ─── */
  {
    name: "Google Meet",
    category: "Video",
    minPlan: "Starter",
    tagline: "Auto-generate Meet links for confirmed appointments",
    whatItDoes:
      "When a Callengo AI agent confirms an appointment, a unique Google Meet link is automatically generated and attached to the calendar event. The link is also included in any confirmation email or SMS sent to the contact. This eliminates the manual step of creating meeting links.",
    setup: [
      "Ensure your Google Calendar integration is already connected.",
      "Go to Settings > Integrations and click Connect next to Google Meet.",
      "Authorize Callengo to create Meet conferences on your behalf.",
      "In your campaign settings, enable 'Auto-generate video link' and select Google Meet as the provider.",
      "Optionally configure whether the link should be included in the call script (so the agent can read it out).",
      "Save. All future confirmed appointments will include a Meet link.",
    ],
    syncedData: [
      "Google Meet URL (unique per appointment)",
      "Conference ID",
      "Dial-in phone number and PIN (for phone-based join)",
      "Meeting link embedded in calendar event",
      "Meeting link included in confirmation notifications (email/SMS)",
    ],
    useCases: [
      "Telehealth practices confirming patient video consultations.",
      "Sales teams scheduling discovery calls with qualified leads.",
      "Consulting firms setting up client meetings after AI-driven outreach.",
      "Educational institutions confirming virtual tutoring sessions.",
    ],
    limitations: [
      "Requires an active Google Calendar integration.",
      "The Google account must have Google Meet enabled (it is enabled by default on most Workspace plans).",
      "Meet links expire after the event ends; no persistent room links are generated.",
      "Recording of the Google Meet session itself is not managed by Callengo.",
      "Free Gmail accounts may have participant limits imposed by Google.",
    ],
  },
  {
    name: "Zoom",
    category: "Video",
    minPlan: "Starter",
    tagline: "Create Zoom meetings when appointments are confirmed",
    whatItDoes:
      "Automatically creates a Zoom meeting whenever a Callengo Appointment Confirmation agent confirms a booking. The Zoom link, meeting ID, and passcode are attached to the calendar event and can be shared with the contact via email, SMS, or during the call itself.",
    setup: [
      "Go to Settings > Integrations and click Connect next to Zoom.",
      "Sign in with your Zoom account (requires Zoom Pro, Business, or Enterprise).",
      "Grant Callengo permissions to create and manage meetings on your behalf.",
      "In your campaign settings, enable 'Auto-generate video link' and select Zoom.",
      "Configure Zoom meeting defaults: waiting room on/off, host video on/off, participant video on/off, auto-recording preference.",
      "Save. Confirmed appointments will now include a Zoom link.",
    ],
    syncedData: [
      "Zoom meeting URL",
      "Meeting ID",
      "Meeting passcode",
      "Dial-in numbers (international)",
      "Host join URL (separate from participant link)",
      "Meeting duration (mapped from appointment length)",
      "Waiting room and security settings",
      "Calendar event with embedded Zoom details",
    ],
    useCases: [
      "B2B sales teams scheduling demo calls with qualified leads.",
      "Healthcare providers setting up virtual patient consultations.",
      "Financial advisors booking client review meetings.",
      "Real estate agents scheduling virtual property tours.",
    ],
    limitations: [
      "Requires Zoom Pro, Business, or Enterprise — Zoom Basic (free) does not support API meeting creation.",
      "Meeting duration limits apply based on your Zoom plan.",
      "Callengo does not manage Zoom webinars — only standard meetings.",
      "If Zoom rate limits are hit (100 meetings/day for Pro), meeting creation may be delayed.",
      "Zoom cloud recording settings must be configured in your Zoom admin, not in Callengo.",
    ],
  },
  {
    name: "Microsoft Teams",
    category: "Video",
    minPlan: "Business",
    tagline: "Schedule Teams meetings from call outcomes",
    whatItDoes:
      "Automatically creates a Microsoft Teams online meeting when a Callengo agent confirms an appointment. The Teams meeting link is added to the Outlook calendar event and included in notifications sent to the contact. Ideal for enterprises standardized on the Microsoft ecosystem.",
    setup: [
      "Ensure your Outlook Calendar integration is connected first.",
      "Go to Settings > Integrations and click Connect next to Microsoft Teams.",
      "Sign in with your Microsoft 365 account (requires a Teams license).",
      "Grant Callengo permission to create online meetings (OnlineMeetings.ReadWrite).",
      "In your campaign settings, enable 'Auto-generate video link' and select Microsoft Teams.",
      "Configure Teams meeting options: lobby bypass for known contacts, auto-admit, presenter permissions.",
      "Save. Confirmed appointments will now include a Teams join link.",
    ],
    syncedData: [
      "Teams meeting join URL",
      "Meeting ID and passcode",
      "Dial-in conferencing number and conference ID (if Audio Conferencing license is active)",
      "Outlook calendar event with embedded Teams link",
      "Meeting chat thread (auto-created by Teams)",
      "Organizer and attendee details",
    ],
    useCases: [
      "Enterprise organizations using Microsoft 365 end-to-end.",
      "Government and regulated industries that require Teams for compliant video meetings.",
      "Large sales teams scheduling follow-up calls with prospects.",
      "Internal HR teams scheduling candidate interviews after AI phone screening.",
    ],
    limitations: [
      "Requires Microsoft 365 with a Teams license (E1, E3, E5, or Business Basic and above).",
      "Audio Conferencing add-on is needed for dial-in phone numbers.",
      "On-premises Skype for Business is not supported.",
      "Meeting policies set by your Teams admin (e.g., who can bypass the lobby) override Callengo settings.",
      "Available on Business plan and above.",
    ],
  },

  /* ─── CRM ─── */
  {
    name: "HubSpot",
    category: "CRM",
    minPlan: "Business",
    tagline: "Push call outcomes and lead scores to HubSpot contacts",
    whatItDoes:
      "Syncs call data from Callengo directly into your HubSpot CRM. After each call, Callengo creates or updates a contact record, logs a call activity, and updates custom properties such as lead score, call outcome, and sentiment. This keeps your sales team informed without manual data entry.",
    setup: [
      "Go to Settings > Integrations and click Connect next to HubSpot.",
      "Sign in with your HubSpot account (Marketing Hub or Sales Hub, Starter and above).",
      "Grant Callengo access to contacts, companies, deals, and engagements.",
      "Map Callengo fields to HubSpot contact properties. Default mappings are pre-configured for phone, email, name, and company.",
      "Create custom HubSpot properties for Callengo-specific fields: callengo_lead_score, callengo_call_outcome, callengo_sentiment, callengo_last_call_date.",
      "Enable 'Auto-create contacts' if you want Callengo to create new HubSpot contacts for numbers not already in your CRM.",
      "Choose which HubSpot pipeline and deal stage to use for qualified leads (optional).",
      "Save and run a test sync to verify data flow.",
    ],
    syncedData: [
      "Contact: first name, last name, phone, email, company",
      "Call activity: date, duration, recording URL, transcript URL",
      "Call outcome (mapped to a custom property)",
      "Lead score (0-100, mapped to a custom property)",
      "Sentiment analysis (positive, neutral, negative)",
      "Extracted data fields (email confirmed, new phone, notes)",
      "Campaign name and ID",
      "Deal creation or stage update for qualified leads",
      "Timeline event with call summary",
    ],
    useCases: [
      "Sales teams using HubSpot CRM who want AI-qualified leads pushed directly into their pipeline.",
      "Marketing teams tracking campaign call outcomes alongside email and ad metrics.",
      "Customer success teams logging verification calls in HubSpot contact timelines.",
      "Automated deal creation when a lead scores above a configurable threshold.",
    ],
    limitations: [
      "Requires HubSpot Marketing Hub or Sales Hub (Starter or above). HubSpot Free CRM is supported but with limited custom properties.",
      "Custom property creation must be done manually in HubSpot before mapping.",
      "API rate limits: HubSpot allows 100 requests per 10 seconds per account. Bulk campaigns may be throttled.",
      "Two-way sync (HubSpot to Callengo) is read-only: Callengo can read HubSpot data to enrich call scripts but does not pull contact updates back automatically.",
      "File attachments (e.g., call recordings) are logged as URLs, not uploaded to HubSpot file storage.",
    ],
  },
  {
    name: "Pipedrive",
    category: "CRM",
    minPlan: "Business",
    tagline: "Update deals and contacts in Pipedrive automatically",
    whatItDoes:
      "Pushes call outcomes from Callengo into Pipedrive, updating person records, creating activities, and moving deals through pipeline stages based on call results. If a lead is qualified during a call, Callengo can automatically create a new deal in your chosen pipeline.",
    setup: [
      "Go to Settings > Integrations and click Connect next to Pipedrive.",
      "Sign in with your Pipedrive account (Essential plan or above).",
      "Generate a Pipedrive API token or authorize via OAuth.",
      "Map Callengo contact fields to Pipedrive person fields (name, phone, email, organization).",
      "Select the pipeline and stage for new deals created by Callengo.",
      "Configure which call outcomes should trigger deal creation, deal stage updates, or activity logging.",
      "Save and run a test call to verify data appears in Pipedrive.",
    ],
    syncedData: [
      "Person: name, phone numbers, email, organization",
      "Activity: call type, subject, duration, outcome notes",
      "Deal: title, value (if available), pipeline stage",
      "Custom fields: lead score, call outcome, sentiment",
      "Notes: call summary, transcript link, recording link",
      "Activity marked as done with outcome label",
    ],
    useCases: [
      "Small and mid-sized sales teams using Pipedrive to track deals from first contact to close.",
      "Automated deal creation when the AI agent identifies a hot lead.",
      "Logging all outbound call activities in Pipedrive for complete pipeline visibility.",
      "Moving deals to the next stage when appointments are confirmed.",
    ],
    limitations: [
      "Requires Pipedrive Essential plan or above.",
      "Custom fields in Pipedrive must be created before mapping in Callengo.",
      "Pipedrive API rate limit: 100 requests per 2 seconds. Very large campaigns may experience short delays.",
      "Organization (company) records are matched by name; duplicates may occur if naming conventions differ.",
      "Pipedrive products/product attachments are not synced.",
    ],
  },
  {
    name: "Zoho CRM",
    category: "CRM",
    minPlan: "Business",
    tagline: "Sync call data and lead status with Zoho CRM",
    whatItDoes:
      "Integrates Callengo with Zoho CRM to push call outcomes, update lead and contact records, and log call activities. Callengo can update lead status, add notes, and trigger Zoho workflows based on call results.",
    setup: [
      "Go to Settings > Integrations and click Connect next to Zoho CRM.",
      "Sign in with your Zoho account (Standard edition or above).",
      "Authorize Callengo to access Leads, Contacts, Accounts, Activities, and Notes modules.",
      "Map Callengo fields to Zoho CRM fields. Default mappings include phone, email, name, and company.",
      "Configure lead status mapping: define which Callengo call outcomes map to which Zoho lead statuses.",
      "Enable automatic note creation for call summaries.",
      "Optionally set up Zoho workflow triggers based on Callengo-updated fields.",
      "Save and test with a sample call.",
    ],
    syncedData: [
      "Lead/Contact: first name, last name, phone, mobile, email, company",
      "Lead status update (mapped from call outcome)",
      "Call activity: subject, call type (outbound), duration, result",
      "Notes: call summary, extracted data, transcript link",
      "Custom fields: lead score, sentiment, campaign ID",
      "Account (company) association",
      "Tags from Callengo campaigns",
    ],
    useCases: [
      "Businesses using Zoho CRM for lead management who want AI-driven outreach results synced automatically.",
      "Call center operations logging verification call results in Zoho for compliance.",
      "Marketing teams updating lead status in Zoho based on phone qualification results.",
      "Triggering Zoho workflows (e.g., send a follow-up email) based on call outcome fields updated by Callengo.",
    ],
    limitations: [
      "Requires Zoho CRM Standard edition or above. Zoho Free edition has limited API access.",
      "Zoho API rate limits: 15,000 requests per day (Standard) to 50,000 (Enterprise). Plan campaigns accordingly.",
      "Custom modules are not supported — only standard Leads, Contacts, Accounts, Activities, and Notes.",
      "Zoho CRM Plus or Zoho One may require separate authorization for each app in the suite.",
      "Blueprint (Zoho process automation) transitions are not directly triggered — use workflow rules instead.",
    ],
  },
  {
    name: "Salesforce",
    category: "CRM",
    minPlan: "Teams",
    tagline: "Enterprise-grade Salesforce integration with custom field mapping",
    whatItDoes:
      "Provides a deep, enterprise-grade integration with Salesforce. Callengo creates and updates Leads, Contacts, and Accounts, logs call activities as Tasks, and can update Opportunity stages. Custom field mapping allows you to push any Callengo data point into any Salesforce field. Supports Salesforce validation rules, record types, and page layouts.",
    setup: [
      "Go to Settings > Integrations and click Connect next to Salesforce.",
      "Sign in with your Salesforce account (Professional, Enterprise, or Unlimited edition).",
      "Authorize the Callengo Connected App in Salesforce (admin approval may be required).",
      "Map Callengo fields to Salesforce object fields. Use the visual field mapper to drag-and-drop mappings.",
      "Configure Lead assignment rules: specify the owner, lead source, and record type for new Leads created by Callengo.",
      "Set up Task creation rules: define task subject, priority, status, and related-to object for logged calls.",
      "Optionally map call outcomes to Opportunity stages for pipeline automation.",
      "Configure which Salesforce record types and page layouts to use.",
      "Enable sandbox mode for testing before going live.",
      "Save, test in sandbox, then switch to production.",
    ],
    syncedData: [
      "Lead: name, phone, email, company, title, lead source, status, description",
      "Contact: name, phone, email, mailing address, account association",
      "Account: name, phone, website, industry",
      "Task: subject, description, priority, status, due date, call duration, call outcome",
      "Opportunity: stage update, amount, close date (optional)",
      "Custom fields: lead score, sentiment, campaign ID, transcript URL, recording URL",
      "Chatter post with call summary (optional)",
      "Campaign member status update (if using Salesforce Campaigns)",
    ],
    useCases: [
      "Enterprise sales teams with complex Salesforce configurations needing seamless AI calling integration.",
      "Salesforce-first organizations wanting automated lead qualification and data validation at scale.",
      "Companies using Salesforce Campaigns to track multi-channel outreach including AI phone calls.",
      "Regulated industries (finance, healthcare) requiring complete call activity logging in Salesforce for compliance.",
    ],
    limitations: [
      "Requires Salesforce Professional edition or above. Essentials edition has limited API access.",
      "Salesforce API daily limits apply: 15,000 (Professional) to 100,000+ (Unlimited). Monitor usage in Salesforce Setup.",
      "Salesforce Connected App must be approved by a Salesforce admin.",
      "Complex validation rules in Salesforce may block Callengo updates — test thoroughly in sandbox first.",
      "Person Accounts are supported but require additional field mapping configuration.",
      "Available on Teams plan and above due to the complexity of the integration.",
    ],
  },
  {
    name: "Microsoft Dynamics 365",
    category: "CRM",
    minPlan: "Teams",
    tagline: "Bi-directional sync with Dynamics 365 entities",
    whatItDoes:
      "Enables bidirectional data sync between Callengo and Microsoft Dynamics 365. Callengo pushes call outcomes, creates and updates Contacts, Leads, and Accounts, logs phone call activities, and can update Opportunity stages. Dynamics 365 data can also be pulled into Callengo to enrich call scripts with customer context.",
    setup: [
      "Go to Settings > Integrations and click Connect next to Microsoft Dynamics 365.",
      "Sign in with your Dynamics 365 account (Sales Professional or Enterprise).",
      "Register Callengo as an application in your Azure Active Directory (admin may need to approve).",
      "Grant Callengo permissions to read and write Contacts, Leads, Accounts, Activities, and Opportunities.",
      "Map Callengo fields to Dynamics 365 entity attributes using the visual mapper.",
      "Configure business process flow stage mappings for automated stage transitions.",
      "Set up phone call activity creation rules: subject, direction, duration, outcome.",
      "Test the connection with a sample record sync.",
      "Save and activate the integration.",
    ],
    syncedData: [
      "Contact: full name, phone, email, address, company",
      "Lead: topic, name, phone, email, rating, status",
      "Account: name, phone, website, industry, address",
      "Phone Call Activity: subject, direction, duration, description, outcome",
      "Opportunity: topic, stage, estimated revenue, close date",
      "Custom attributes: lead score, sentiment, campaign reference",
      "Notes: call summary, transcript link, recording link",
      "Timeline entry with full call details",
    ],
    useCases: [
      "Enterprise organizations standardized on Microsoft Dynamics 365 for CRM.",
      "Companies using Dynamics 365 business process flows that want AI calling outcomes to advance pipeline stages.",
      "Customer service teams logging verification and confirmation calls as activities in Dynamics.",
      "Government contractors and regulated entities using Dynamics 365 with strict data residency requirements.",
    ],
    limitations: [
      "Requires Dynamics 365 Sales Professional or Enterprise. Team Member licenses have read-only API access.",
      "Azure AD app registration is required and needs admin consent.",
      "Dynamics 365 API throttling: 6,000 requests per 5-minute window per user. Bulk operations are batched automatically.",
      "On-premises Dynamics CRM (non-cloud) is not supported.",
      "Custom entities are supported but require manual mapping configuration.",
      "Available on Teams plan and above.",
    ],
  },
  {
    name: "Clio",
    category: "CRM",
    minPlan: "Teams",
    tagline: "Legal practice management — sync client and matter data",
    whatItDoes:
      "Connects Callengo with Clio, the leading legal practice management software. Callengo can sync call outcomes with Clio Contacts and Matters, log call activities as Communications, and update Matter status. Designed for law firms that use AI calling for appointment confirmations, client intake follow-ups, and case status updates.",
    setup: [
      "Go to Settings > Integrations and click Connect next to Clio.",
      "Sign in with your Clio account (Clio Manage, Boutique, or Elite).",
      "Authorize Callengo to access Contacts, Matters, Communications, and Activities in Clio.",
      "Map Callengo contact fields to Clio Contact fields (name, phone, email, company).",
      "Configure Communication logging: set the type (Phone Call), description template, and associated Matter.",
      "Set up rules for which call outcomes should create follow-up tasks in Clio.",
      "Save and test with a sample contact from your Clio account.",
    ],
    syncedData: [
      "Contact: name, phone numbers, email addresses, company/organization",
      "Matter: name, status, description, responsible attorney",
      "Communication: type (phone call), subject, date, duration, body (call summary)",
      "Activity: follow-up tasks created based on call outcome",
      "Notes: attached to the relevant Matter with call details",
      "Custom fields: call outcome, sentiment, Callengo campaign reference",
      "Time entry (optional): auto-log billable time for the call duration",
    ],
    useCases: [
      "Law firms confirming client appointments and depositions with AI calling.",
      "Legal intake teams qualifying potential clients by phone and syncing results to Clio Matters.",
      "Firms validating client contact information across their Clio database.",
      "Automated follow-up task creation in Clio when calls result in action items.",
    ],
    limitations: [
      "Requires Clio Manage (Boutique, Solo, or Elite). Clio Grow (standalone) is not supported — only Clio Manage.",
      "Time entry auto-logging requires the firm to configure billing rates in Clio first.",
      "Clio API rate limits: 60 requests per minute. Large batch operations are queued.",
      "Document management features in Clio are not accessible from Callengo.",
      "Only standard Clio fields are mapped by default; custom fields require manual configuration.",
      "Available on Teams plan and above.",
    ],
  },

  /* ─── Communication ─── */
  {
    name: "Slack",
    category: "Communication",
    minPlan: "Starter",
    tagline: "Get real-time call notifications and summaries in Slack channels",
    whatItDoes:
      "Sends real-time notifications to your Slack workspace whenever a Callengo call completes. Each notification includes the contact name, call outcome, duration, sentiment, and a link to the full transcript. You can configure notifications per campaign and per channel, so different teams get relevant updates.",
    setup: [
      "Go to Settings > Integrations and click Connect next to Slack.",
      "Click 'Add to Slack' and sign in to your Slack workspace.",
      "Choose which Slack channel(s) should receive notifications. You can select different channels for different campaigns.",
      "Configure the notification format: choose between a compact summary or a detailed card with all call data.",
      "Set up filters: optionally only send notifications for specific outcomes (e.g., only hot leads, only no-answers).",
      "Enable or disable notification sound/mention for urgent outcomes.",
      "Save. Notifications will start flowing as soon as calls complete.",
    ],
    syncedData: [
      "Contact name and phone number",
      "Call outcome (e.g., Verified, Hot Lead, No Answer)",
      "Call duration in seconds",
      "Sentiment analysis (positive, neutral, negative)",
      "Campaign name",
      "Link to full call transcript",
      "Link to call recording",
      "Extracted data summary (key fields from the call)",
      "Lead score (if Lead Qualification agent was used)",
    ],
    useCases: [
      "Sales managers getting instant Slack alerts when a hot lead is identified by the AI agent.",
      "Operations teams monitoring data validation campaigns in a dedicated Slack channel.",
      "Customer success managers receiving appointment confirmation results in real time.",
      "Executive dashboards: pipe call summaries to a leadership Slack channel for high-level visibility.",
    ],
    limitations: [
      "Requires a Slack workspace with the ability to install apps (workspace admin may need to approve).",
      "Slack free plan limits message history to 90 days; older notifications may not be searchable.",
      "File attachments (recordings, transcripts) are shared as links, not uploaded directly to Slack.",
      "Maximum of 20 Slack channels per Callengo account.",
      "Slack rate limits (1 message per second per channel) are respected automatically.",
    ],
  },

  /* ─── Productivity ─── */
  {
    name: "Google Sheets",
    category: "Productivity",
    minPlan: "Starter",
    tagline: "Export call results directly to Google Sheets",
    whatItDoes:
      "Automatically exports call results from Callengo campaigns into a Google Sheets spreadsheet. Each completed call adds a new row with all relevant data points. You can use this for reporting, analysis, sharing results with stakeholders who do not have Callengo access, or as a lightweight data warehouse.",
    setup: [
      "Go to Settings > Integrations and click Connect next to Google Sheets.",
      "Sign in with your Google account and grant Callengo permission to create and edit spreadsheets.",
      "Choose whether to create a new spreadsheet or use an existing one.",
      "If using an existing spreadsheet, select the spreadsheet and the specific sheet (tab).",
      "Map Callengo data fields to spreadsheet columns. A default mapping is provided and can be customized.",
      "Configure whether to append new rows after each call or batch-update at the end of each campaign run.",
      "Save. A header row will be created in the spreadsheet based on your field mapping.",
    ],
    syncedData: [
      "Contact name, phone number, email, company",
      "Call date and time",
      "Call duration (seconds)",
      "Call outcome",
      "Sentiment analysis",
      "Lead score (if applicable)",
      "Extracted data fields (all custom fields)",
      "Transcript URL",
      "Recording URL",
      "Campaign name and ID",
      "Agent type (Data Validation, Appointment Confirmation, Lead Qualification)",
      "Notes and follow-up actions",
    ],
    useCases: [
      "Marketing teams creating campaign performance reports in Sheets for stakeholder review.",
      "Small businesses using Google Sheets as a lightweight CRM.",
      "Data analysts pulling call data into Sheets for pivot tables, charts, and dashboards.",
      "Sharing call results with clients or partners who need spreadsheet access without Callengo login.",
    ],
    limitations: [
      "Google Sheets has a limit of 10 million cells per spreadsheet. Very large campaigns should use multiple sheets.",
      "Real-time append has a slight delay (1-3 seconds) per row.",
      "Formatting (colors, fonts) is not applied automatically — only raw data is written.",
      "Google Sheets API rate limit: 100 requests per 100 seconds per user.",
      "Formulas in existing cells are not overwritten, but adjacent data may shift if column mapping changes.",
    ],
  },
  {
    name: "SimplyBook.me",
    category: "Productivity",
    minPlan: "Business",
    tagline: "Sync bookings and availability with SimplyBook.me",
    whatItDoes:
      "Connects Callengo with SimplyBook.me to sync bookings and availability. When the AI agent confirms an appointment, a booking is created in SimplyBook.me. Callengo also reads SimplyBook.me availability to offer open time slots during calls. Ideal for service businesses using SimplyBook.me as their booking system.",
    setup: [
      "Go to Settings > Integrations and click Connect next to SimplyBook.me.",
      "Enter your SimplyBook.me company login, API key, and secret key (found in SimplyBook.me Settings > API).",
      "Select which services and providers to sync with Callengo campaigns.",
      "Map appointment types in Callengo to SimplyBook.me services.",
      "Configure default booking settings: duration, buffer time, cancellation policy.",
      "Enable 'Read availability' so the AI agent can offer open slots during calls.",
      "Save and test by creating a sample booking through Callengo.",
    ],
    syncedData: [
      "Booking: service, provider, date, time, duration",
      "Client: name, phone, email",
      "Booking status: confirmed, cancelled, rescheduled",
      "Availability: open time slots per service and provider",
      "Custom booking fields (mapped from Callengo contact fields)",
      "Booking confirmation number",
      "Notes attached to the booking",
    ],
    useCases: [
      "Salons, spas, and wellness businesses confirming appointments with AI calling.",
      "Medical practices using SimplyBook.me for patient scheduling.",
      "Professional services firms (accountants, consultants) syncing call-confirmed meetings.",
      "Fitness studios confirming class bookings and managing cancellations.",
    ],
    limitations: [
      "Requires SimplyBook.me Premium plan or above for API access.",
      "SimplyBook.me API rate limits: 100 requests per minute.",
      "Group bookings and recurring bookings are not supported — only single bookings.",
      "Custom SimplyBook.me forms beyond basic fields require manual mapping.",
      "SimplyBook.me promotions, coupons, and membership features are not managed by Callengo.",
    ],
  },
  {
    name: "Stripe",
    category: "Productivity",
    minPlan: "Business",
    tagline: "Trigger calls based on Stripe payment events",
    whatItDoes:
      "Listens for Stripe payment events (successful payments, failed payments, subscription changes) and triggers Callengo campaigns automatically. For example, you can call customers after a failed payment to verify their information, or call new subscribers to confirm their onboarding appointment.",
    setup: [
      "Go to Settings > Integrations and click Connect next to Stripe.",
      "Sign in with your Stripe account.",
      "Grant Callengo read access to customers, charges, subscriptions, and invoices.",
      "Configure event triggers: choose which Stripe events should launch Callengo calls.",
      "Map Stripe customer fields to Callengo contact fields (name, phone, email).",
      "Select the Callengo campaign and AI agent to use for each trigger.",
      "Set up filters: optionally limit triggers by amount, currency, product, or subscription plan.",
      "Configure delay: set how long after the Stripe event the call should be placed (e.g., 1 hour, 24 hours).",
      "Save and test with a Stripe test-mode event.",
    ],
    syncedData: [
      "Customer: name, phone, email",
      "Payment: amount, currency, status, payment method",
      "Subscription: plan name, status, current period start/end",
      "Invoice: number, amount due, due date, status",
      "Charge: ID, amount, outcome, failure reason (if failed)",
      "Event type (e.g., payment_intent.succeeded, invoice.payment_failed)",
      "Stripe customer ID (stored in Callengo for reference)",
    ],
    useCases: [
      "SaaS companies calling customers after failed subscription payments to recover revenue.",
      "E-commerce businesses confirming high-value orders by phone.",
      "Subscription businesses calling new customers to schedule onboarding sessions.",
      "Membership organizations verifying contact details after first payment.",
    ],
    limitations: [
      "Requires a Stripe account with API access (all paid Stripe accounts).",
      "Stripe test-mode events are supported for testing but will not trigger actual calls.",
      "The customer record in Stripe must include a phone number for Callengo to place a call.",
      "Stripe webhooks have a retry policy; duplicate events are deduplicated by Callengo.",
      "Refund events are not currently supported as triggers.",
      "Payment amounts and currency data are read-only in Callengo — no payment processing is done.",
    ],
  },

  /* ─── Automation ─── */
  {
    name: "Webhooks",
    category: "Automation",
    minPlan: "Business",
    tagline: "Send real-time POST requests to any URL when calls complete",
    whatItDoes:
      "Sends an HTTP POST request with a JSON payload to any URL you configure whenever a call completes or reaches a specific outcome. Webhooks are the most flexible integration — you can use them to connect Callengo with any system, including custom applications, Zapier, Make (Integromat), n8n, or your own backend API.",
    setup: [
      "Go to Settings > Integrations and click Configure next to Webhooks.",
      "Click Add Webhook Endpoint.",
      "Enter the destination URL (must be HTTPS).",
      "Choose which events should trigger the webhook: call.completed, call.failed, call.no_answer, campaign.completed, or all events.",
      "Optionally add a secret key for webhook signature verification (HMAC-SHA256).",
      "Configure retry policy: number of retries (0-5) and retry interval (30s, 1m, 5m, 15m).",
      "Optionally add custom HTTP headers (e.g., Authorization, X-API-Key).",
      "Save and use the Test button to send a sample payload to your endpoint.",
      "Verify that your endpoint responds with a 2xx status code within 30 seconds.",
    ],
    syncedData: [
      "event — the event type (call.completed, call.failed, etc.)",
      "call_id — unique Callengo call identifier",
      "campaign_id — the campaign this call belongs to",
      "status — call status (completed, failed, no_answer, voicemail)",
      "call_length_seconds — duration of the call",
      "answered_by — human, voicemail, or machine",
      "contact — object with phone_number, contact_name, company_name, email, and custom fields",
      "analysis — object with outcome, extracted_data, sentiment, and lead_score",
      "recording_url — URL to the call recording (MP3)",
      "transcript_url — URL to the call transcript (TXT)",
      "timestamp — ISO 8601 timestamp of the event",
    ],
    useCases: [
      "Connecting Callengo to Zapier, Make, or n8n for no-code workflow automation.",
      "Pushing call results to a custom data warehouse or business intelligence tool.",
      "Triggering follow-up emails, SMS messages, or actions in your own backend system.",
      "Building custom dashboards that consume Callengo webhook data in real time.",
      "Integrating with CRMs or tools that Callengo does not have a native integration for.",
    ],
    limitations: [
      "Endpoint must be HTTPS — plain HTTP URLs are not supported.",
      "Response timeout: your endpoint must respond within 30 seconds or the delivery is marked as failed.",
      "Payload size: maximum 256 KB per webhook payload.",
      "Maximum of 10 webhook endpoints per Callengo account.",
      "Failed deliveries are retried according to your retry policy; after all retries are exhausted, the event is logged but not re-sent.",
      "Webhook logs are retained for 30 days in the Callengo dashboard.",
      "Available on Business plan and above.",
    ],
  },
];

const integrationCategoryOrder = [
  "Calendar",
  "Video",
  "CRM",
  "Communication",
  "Productivity",
  "Automation",
];

/* ─── Webhook payload example ─── */
const webhookPayload = `{
  "event": "call.completed",
  "call_id": "clg_8f3a2b1c-d4e5-6789-abcd-ef0123456789",
  "campaign_id": "cmp_a1b2c3d4",
  "status": "completed",
  "call_length_seconds": 142,
  "answered_by": "human",
  "contact": {
    "phone_number": "+14155551234",
    "contact_name": "Jane Smith",
    "company_name": "Acme Corp",
    "email": "jane@acme.com",
    "custom_fields": {
      "account_id": "ACC-12345",
      "region": "West"
    }
  },
  "analysis": {
    "outcome": "Verified",
    "extracted_data": {
      "email_confirmed": true,
      "new_phone": null,
      "address_updated": false,
      "notes": "Contact confirmed all details. Prefers email communication."
    },
    "sentiment": "positive",
    "lead_score": 85
  },
  "recording_url": "https://recordings.callengo.com/clg_8f3a2b1c.mp3",
  "transcript_url": "https://recordings.callengo.com/clg_8f3a2b1c.txt",
  "timestamp": "2026-03-08T14:32:10Z"
}`;

const webhookEvents = [
  {
    event: "call.completed",
    description: "Fired when a call finishes successfully, regardless of outcome.",
  },
  {
    event: "call.failed",
    description: "Fired when a call fails due to a technical error (e.g., carrier issue).",
  },
  {
    event: "call.no_answer",
    description: "Fired when the call rings but is not answered within the timeout period.",
  },
  {
    event: "call.voicemail",
    description: "Fired when the call reaches voicemail and a message is left (or not).",
  },
  {
    event: "campaign.completed",
    description: "Fired when all contacts in a campaign have been called and the campaign ends.",
  },
  {
    event: "campaign.paused",
    description: "Fired when a campaign is paused by the user or by an automated rule.",
  },
];

/* ═══════════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════════ */

export default function IntegrationsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [expandedIntegration, setExpandedIntegration] = useState<string | null>(null);

  const filteredIntegrations =
    activeCategory === "All"
      ? integrations
      : integrations.filter((i) => i.category === activeCategory);

  const toggleIntegration = (name: string) => {
    setExpandedIntegration(expandedIntegration === name ? null : name);
  };

  return (
    <>
      <Header />
      <main style={{ fontFamily: "var(--font-body)" }}>
        {/* ────────── Hero ────────── */}
        <section className="bg-background pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <Link
                  href="/docs"
                  className="flex items-center gap-1.5 text-sm font-medium text-foreground-tertiary hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Documentation
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-foreground-tertiary" />
                <span className="text-sm font-medium text-electric">
                  Integrations
                </span>
              </div>
              <h1
                className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Integrations Guide
              </h1>
              <p
                className="text-xl text-foreground-secondary leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Complete documentation for every Callengo integration. Connect
                your calendar, video conferencing, CRM, communication, and
                productivity tools — all configured from your dashboard, no
                coding required.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <span className="flex items-center gap-2 text-sm text-foreground-tertiary">
                  <Plug className="w-4 h-4 text-electric" />
                  16 integrations
                </span>
                <span className="flex items-center gap-2 text-sm text-foreground-tertiary">
                  <Globe className="w-4 h-4 text-electric" />
                  6 categories
                </span>
                <span className="flex items-center gap-2 text-sm text-foreground-tertiary">
                  <Shield className="w-4 h-4 text-electric" />
                  Enterprise-ready
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ────────── Category navigation ────────── */}
        <section className="border-b border-border sticky top-16 md:top-[72px] bg-background/95 backdrop-blur-sm z-30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-2 py-4 overflow-x-auto">
              {["All", ...integrationCategoryOrder].map((cat) => {
                const Icon = cat !== "All" ? categoryIcons[cat] : Plug;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                      activeCategory === cat
                        ? "bg-foreground text-white"
                        : "bg-background-secondary text-foreground-secondary hover:bg-background-tertiary"
                    }`}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {cat}
                    {cat !== "All" && (
                      <span className="text-xs opacity-70">
                        ({integrations.filter((i) => i.category === cat).length})
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ────────── Integration cards ────────── */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="space-y-6">
            {filteredIntegrations.map((intg, idx) => {
              const isExpanded = expandedIntegration === intg.name;
              const CatIcon = categoryIcons[intg.category] || Plug;

              return (
                <motion.div
                  key={intg.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.03 }}
                  className={`border rounded-xl overflow-hidden transition-all ${
                    isExpanded
                      ? `${categoryBorderColors[intg.category] || "border-border"} shadow-md`
                      : "border-border hover:shadow-sm"
                  }`}
                >
                  {/* Card header — always visible */}
                  <button
                    onClick={() => toggleIntegration(intg.name)}
                    className="w-full text-left p-6 flex items-start gap-5 hover:bg-background-secondary/50 transition-colors"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        categoryColors[intg.category] || "bg-gray-100"
                      }`}
                    >
                      <CatIcon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3
                            className="text-lg font-bold"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {intg.name}
                          </h3>
                          <p className="text-sm text-foreground-secondary mt-1">
                            {intg.tagline}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span
                            className={`px-2.5 py-1 rounded text-xs font-semibold ${
                              categoryColors[intg.category] || "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {intg.category}
                          </span>
                          <span
                            className={`px-2.5 py-1 rounded text-xs font-semibold ${
                              planBadgeColors[intg.minPlan] || "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {intg.minPlan}+
                          </span>
                          <ChevronRight
                            className={`w-5 h-5 text-foreground-tertiary transition-transform ${
                              isExpanded ? "rotate-90" : ""
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* Expanded detail */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-border"
                    >
                      <div className="p-6 space-y-8">
                        {/* What it does */}
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground-tertiary mb-3 flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            What It Does
                          </h4>
                          <p className="text-foreground-secondary leading-relaxed">
                            {intg.whatItDoes}
                          </p>
                        </div>

                        {/* Setup steps */}
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground-tertiary mb-3 flex items-center gap-2">
                            <Settings className="w-4 h-4" />
                            Setup Instructions
                          </h4>
                          <ol className="space-y-3">
                            {intg.setup.map((step, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-foreground text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                  {i + 1}
                                </span>
                                <p className="text-sm text-foreground-secondary leading-relaxed">
                                  {step}
                                </p>
                              </li>
                            ))}
                          </ol>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                          {/* Synced data */}
                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground-tertiary mb-3 flex items-center gap-2">
                              <RefreshCw className="w-4 h-4" />
                              Synced Data
                            </h4>
                            <ul className="space-y-2">
                              {intg.syncedData.map((field, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-sm text-foreground-secondary"
                                >
                                  <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  {field}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Use cases */}
                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground-tertiary mb-3 flex items-center gap-2">
                              <Zap className="w-4 h-4" />
                              Common Use Cases
                            </h4>
                            <ul className="space-y-2">
                              {intg.useCases.map((uc, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-sm text-foreground-secondary"
                                >
                                  <ChevronRight className="w-4 h-4 text-electric flex-shrink-0 mt-0.5" />
                                  {uc}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Limitations */}
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground-tertiary mb-3 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4" />
                            Limitations &amp; Notes
                          </h4>
                          <ul className="space-y-2">
                            {intg.limitations.map((lim, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-foreground-secondary"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-foreground-tertiary flex-shrink-0 mt-2" />
                                {lim}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Plan requirement */}
                        <div className="bg-background-secondary rounded-lg p-4 flex items-center gap-3">
                          <CreditCard className="w-5 h-5 text-electric flex-shrink-0" />
                          <p className="text-sm text-foreground-secondary">
                            <span className="font-semibold text-foreground">
                              Plan requirement:
                            </span>{" "}
                            This integration is available on the{" "}
                            <span className="font-semibold text-electric">
                              {intg.minPlan}
                            </span>{" "}
                            plan and above.{" "}
                            <Link
                              href="/pricing"
                              className="text-electric hover:underline"
                            >
                              View pricing
                            </Link>
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ────────── Webhook deep dive ────────── */}
        <section className="bg-background-secondary py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Workflow className="w-6 h-6 text-electric" />
                <h2
                  className="text-3xl font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Webhooks Deep Dive
                </h2>
              </div>
              <p className="text-foreground-secondary text-lg mb-10 max-w-2xl">
                Webhooks are the most flexible integration in Callengo. Use them
                to connect with any system — Zapier, Make, n8n, custom backends,
                data warehouses, or anything that can receive an HTTP POST.
              </p>
            </motion.div>

            {/* Webhook events table */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-border rounded-xl overflow-hidden bg-background mb-8"
            >
              <div className="px-6 py-4 border-b border-border">
                <h3
                  className="font-semibold text-base"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Available Webhook Events
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-background-secondary border-b border-border">
                    <tr>
                      <th className="text-left px-6 py-3 font-semibold">
                        Event
                      </th>
                      <th className="text-left px-6 py-3 font-semibold">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {webhookEvents.map((evt) => (
                      <tr
                        key={evt.event}
                        className="border-b border-border last:border-0"
                      >
                        <td className="px-6 py-3">
                          <code className="text-sm bg-background-tertiary px-2 py-0.5 rounded font-mono">
                            {evt.event}
                          </code>
                        </td>
                        <td className="px-6 py-3 text-foreground-secondary">
                          {evt.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Webhook payload example */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-border rounded-xl overflow-hidden bg-background mb-8"
            >
              <div className="px-6 py-4 border-b border-border flex items-center justify-between">
                <div>
                  <h3
                    className="font-semibold text-base"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Payload Example
                  </h3>
                  <p className="text-xs text-foreground-secondary mt-1">
                    When a call completes, Callengo sends a POST request to your
                    configured URL with the following JSON body.
                  </p>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-foreground-tertiary">
                  <Code className="w-3.5 h-3.5" />
                  JSON
                </span>
              </div>
              <div
                className="p-6 overflow-x-auto text-sm font-mono leading-relaxed"
                style={{
                  background: "#0f172a",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                <pre>{webhookPayload}</pre>
              </div>
            </motion.div>

            {/* Webhook security */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              <div className="border border-border rounded-xl p-6 bg-background">
                <h4
                  className="font-semibold mb-3 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <Shield className="w-5 h-5 text-electric" />
                  Signature Verification
                </h4>
                <p className="text-sm text-foreground-secondary leading-relaxed mb-4">
                  Every webhook request includes an{" "}
                  <code className="bg-background-tertiary px-1.5 py-0.5 rounded text-xs font-mono">
                    X-Callengo-Signature
                  </code>{" "}
                  header containing an HMAC-SHA256 hash of the request body
                  using your webhook secret key. Always verify this signature
                  on your server before processing the payload.
                </p>
                <div
                  className="p-4 rounded-lg overflow-x-auto text-xs font-mono leading-relaxed"
                  style={{
                    background: "#0f172a",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  <pre>{`// Node.js verification example
const crypto = require('crypto');

function verifySignature(body, signature, secret) {
  const hash = crypto
    .createHmac('sha256', secret)
    .update(body)
    .digest('hex');
  return hash === signature;
}`}</pre>
                </div>
              </div>

              <div className="border border-border rounded-xl p-6 bg-background">
                <h4
                  className="font-semibold mb-3 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <RefreshCw className="w-5 h-5 text-electric" />
                  Retry Policy
                </h4>
                <p className="text-sm text-foreground-secondary leading-relaxed mb-4">
                  If your endpoint returns a non-2xx status code or times out
                  (30-second limit), Callengo will retry the delivery
                  according to your configured retry policy.
                </p>
                <div className="space-y-3">
                  {[
                    { label: "Max retries", value: "0 to 5 (configurable)" },
                    {
                      label: "Retry intervals",
                      value: "30s, 1m, 5m, 15m, 1h",
                    },
                    { label: "Timeout", value: "30 seconds per attempt" },
                    {
                      label: "Deduplication",
                      value: "Each delivery has a unique ID",
                    },
                    { label: "Log retention", value: "30 days" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-foreground-secondary">
                        {item.label}
                      </span>
                      <span className="font-medium text-foreground">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ────────── Plan comparison for integrations ────────── */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Integrations by Plan
            </h2>
            <p className="text-foreground-secondary text-lg mb-8 max-w-2xl">
              See which integrations are available on each plan. Higher-tier
              plans include all integrations from lower tiers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-border rounded-xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-background-secondary border-b border-border">
                  <tr>
                    <th className="text-left px-5 py-3 font-semibold">
                      Integration
                    </th>
                    <th className="text-center px-5 py-3 font-semibold">
                      Starter
                    </th>
                    <th className="text-center px-5 py-3 font-semibold">
                      Business
                    </th>
                    <th className="text-center px-5 py-3 font-semibold">
                      Teams
                    </th>
                    <th className="text-center px-5 py-3 font-semibold">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {integrations.map((intg) => {
                    const planOrder = [
                      "Starter",
                      "Business",
                      "Teams",
                      "Enterprise",
                    ];
                    const minIdx = planOrder.indexOf(intg.minPlan);
                    return (
                      <tr
                        key={intg.name}
                        className="border-b border-border last:border-0"
                      >
                        <td className="px-5 py-3 font-medium whitespace-nowrap">
                          {intg.name}
                          <span
                            className={`ml-2 text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                              categoryColors[intg.category] ||
                              "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {intg.category}
                          </span>
                        </td>
                        {planOrder.map((plan, pIdx) => (
                          <td key={plan} className="px-5 py-3 text-center">
                            {pIdx >= minIdx ? (
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <span className="text-foreground-tertiary">
                                —
                              </span>
                            )}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>
        </section>

        {/* ────────── CTA ────────── */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 pb-16"
        >
          <div className="bg-deep-indigo rounded-2xl p-8 md:p-12 text-center text-white">
            <h3
              className="text-2xl font-bold mb-3 text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to connect your tools?
            </h3>
            <p className="text-white/70 mb-6 max-w-md mx-auto">
              Start your free trial and configure integrations in minutes. No
              coding required — everything is set up from your dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.callengo.com/auth/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-sm"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:support@callengo.com"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
