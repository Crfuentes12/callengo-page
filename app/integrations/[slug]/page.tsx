import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Check,
  Settings,
  BookOpen,
  RefreshCw,
  Zap,
  AlertTriangle,
  CreditCard,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════
   INTEGRATION DATA — FULL & COMPLETE
   ═══════════════════════════════════════════════════════════════════ */

type IntegrationDetail = {
  name: string;
  slug: string;
  category: string;
  minPlan: string;
  tagline: string;
  initial: string;
  logo: string;
  color: string;
  whatItDoes: string;
  setup: string[];
  syncedData: string[];
  useCases: string[];
  limitations: string[];
};

const integrations: IntegrationDetail[] = [
  {
    name: "Google Calendar",
    slug: "google-calendar",
    category: "Calendar",
    minPlan: "Starter",
    tagline: "Sync appointments and availability in real time",
    initial: "G",
    logo: "/integrations/calendar.png",
    color: "bg-blue-500",
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
      "Recurring event creation is not supported. Each appointment is a standalone event.",
    ],
  },
  {
    name: "Outlook Calendar",
    slug: "outlook-calendar",
    category: "Calendar",
    minPlan: "Starter",
    tagline: "Two-way calendar sync with Microsoft 365",
    initial: "O",
    logo: "/integrations/outlook.png",
    color: "bg-blue-500",
    whatItDoes:
      "Provides a bidirectional sync between your Microsoft Outlook calendar and Callengo. When the AI agent confirms, reschedules, or cancels an appointment, the corresponding calendar event is created, updated, or removed in Outlook. Callengo also reads your Outlook calendar to check availability in real time.",
    setup: [
      "Go to Settings > Integrations in your Callengo dashboard.",
      "Click Connect next to Outlook Calendar.",
      "Sign in with your Microsoft 365 or Outlook.com account.",
      "Grant Callengo the required permissions (Calendars.ReadWrite).",
      "Choose the Outlook calendar(s) to sync. Shared calendars are supported if you have write access.",
      "Set event defaults: duration, color category, reminder minutes.",
      "Click Test Connection. A sample event will appear in your Outlook.",
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
      "On-premises Exchange servers are not supported. Only cloud-based Microsoft 365.",
      "Maximum of 10 calendars per Callengo account.",
    ],
  },
  {
    name: "SimplyBook.me",
    slug: "simplybook-me",
    category: "Calendar",
    minPlan: "Business",
    tagline: "Sync bookings and availability with SimplyBook.me",
    initial: "S",
    logo: "/integrations/simplybook.png",
    color: "bg-blue-500",
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
      "Group bookings and recurring bookings are not supported. Only single bookings.",
      "Custom SimplyBook.me forms beyond basic fields require manual mapping.",
      "SimplyBook.me promotions, coupons, and membership features are not managed by Callengo.",
    ],
  },
  {
    name: "Google Meet",
    slug: "google-meet",
    category: "Video",
    minPlan: "Starter",
    tagline: "Auto-generate Meet links for confirmed appointments",
    initial: "G",
    logo: "/integrations/meets.png",
    color: "bg-purple-500",
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
    slug: "zoom",
    category: "Video",
    minPlan: "Starter",
    tagline: "Create Zoom meetings when appointments are confirmed",
    initial: "Z",
    logo: "/integrations/zoom.png",
    color: "bg-purple-500",
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
      "Requires Zoom Pro, Business, or Enterprise. Zoom Basic (free) does not support API meeting creation.",
      "Meeting duration limits apply based on your Zoom plan.",
      "Callengo does not manage Zoom webinars. Only standard meetings are supported.",
      "If Zoom rate limits are hit (100 meetings/day for Pro), meeting creation may be delayed.",
      "Zoom cloud recording settings must be configured in your Zoom admin, not in Callengo.",
    ],
  },
  {
    name: "Microsoft Teams",
    slug: "microsoft-teams",
    category: "Video",
    minPlan: "Business",
    tagline: "Schedule Teams meetings from call outcomes",
    initial: "M",
    logo: "/integrations/teams.png",
    color: "bg-purple-500",
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
  {
    name: "HubSpot",
    slug: "hubspot",
    category: "CRM",
    minPlan: "Business",
    tagline: "Push call outcomes and lead scores to HubSpot contacts",
    initial: "H",
    logo: "/integrations/hubspot.png",
    color: "bg-emerald-500",
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
    name: "Salesforce",
    slug: "salesforce",
    category: "CRM",
    minPlan: "Teams",
    tagline: "Enterprise-grade Salesforce integration with custom field mapping",
    initial: "S",
    logo: "/integrations/salesforce.png",
    color: "bg-emerald-500",
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
      "Complex validation rules in Salesforce may block Callengo updates. Test thoroughly in sandbox first.",
      "Person Accounts are supported but require additional field mapping configuration.",
      "Available on Teams plan and above due to the complexity of the integration.",
    ],
  },
  {
    name: "Pipedrive",
    slug: "pipedrive",
    category: "CRM",
    minPlan: "Business",
    tagline: "Update deals and contacts in Pipedrive automatically",
    initial: "P",
    logo: "/integrations/pipedrive.png",
    color: "bg-emerald-500",
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
    slug: "zoho-crm",
    category: "CRM",
    minPlan: "Business",
    tagline: "Sync call data and lead status with Zoho CRM",
    initial: "Z",
    logo: "/integrations/zoho.png",
    color: "bg-emerald-500",
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
      "Custom modules are not supported. Only standard Leads, Contacts, Accounts, Activities, and Notes.",
      "Zoho CRM Plus or Zoho One may require separate authorization for each app in the suite.",
      "Blueprint (Zoho process automation) transitions are not directly triggered. Use workflow rules instead.",
    ],
  },
  {
    name: "Microsoft Dynamics 365",
    slug: "microsoft-dynamics-365",
    category: "CRM",
    minPlan: "Teams",
    tagline: "Bi-directional sync with Dynamics 365 entities",
    initial: "D",
    logo: "/integrations/dynamics.png",
    color: "bg-emerald-500",
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
    name: "Slack",
    slug: "slack",
    category: "Communication",
    minPlan: "Starter",
    tagline: "Get real-time call notifications and summaries in Slack channels",
    initial: "S",
    logo: "/integrations/slack.png",
    color: "bg-amber-500",
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
  {
    name: "Google Sheets",
    slug: "google-sheets",
    category: "Productivity",
    minPlan: "Starter",
    tagline: "Export call results directly to Google Sheets",
    initial: "G",
    logo: "/integrations/sheets.png",
    color: "bg-pink-500",
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
      "Formatting (colors, fonts) is not applied automatically. Only raw data is written.",
      "Google Sheets API rate limit: 100 requests per 100 seconds per user.",
      "Formulas in existing cells are not overwritten, but adjacent data may shift if column mapping changes.",
    ],
  },
  {
    name: "Clio",
    slug: "clio",
    category: "Productivity",
    minPlan: "Teams",
    tagline: "Legal practice management. Sync client and matter data",
    initial: "C",
    logo: "/integrations/clio.png",
    color: "bg-pink-500",
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
      "Requires Clio Manage (Boutique, Solo, or Elite). Clio Grow (standalone) is not supported, only Clio Manage.",
      "Time entry auto-logging requires the firm to configure billing rates in Clio first.",
      "Clio API rate limits: 60 requests per minute. Large batch operations are queued.",
      "Document management features in Clio are not accessible from Callengo.",
      "Only standard Clio fields are mapped by default; custom fields require manual configuration.",
      "Available on Teams plan and above.",
    ],
  },
  {
    name: "Stripe",
    slug: "stripe",
    category: "Automation",
    minPlan: "Business",
    tagline: "Trigger calls based on Stripe payment events",
    initial: "S",
    logo: "/integrations/stripe.png",
    color: "bg-slate-600",
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
      "Payment amounts and currency data are read-only in Callengo. No payment processing is done.",
    ],
  },
  {
    name: "Webhooks",
    slug: "webhooks",
    category: "Automation",
    minPlan: "Business",
    tagline: "Send real-time POST requests to any URL when calls complete",
    initial: "W",
    logo: "/integrations/webhooks.png",
    color: "bg-slate-600",
    whatItDoes:
      "Callengo sends a JSON POST request to your configured URL every time a call completes. This lets you build custom integrations with any system that can receive HTTP requests: your own backend, Zapier, Make.com, or any other automation tool. The payload includes all call data: outcome, sentiment, transcript, recording URL, extracted fields, and more.",
    setup: [
      "Go to Settings > Integrations and click Connect next to Webhooks.",
      "Enter your webhook endpoint URL (must be HTTPS).",
      "Optionally add a secret key for payload signature verification (HMAC-SHA256).",
      "Select which events should trigger the webhook: call completed, campaign finished, or both.",
      "Configure the payload format: choose which fields to include or send the full payload.",
      "Set retry policy: Callengo retries failed deliveries up to 3 times with exponential backoff.",
      "Save and send a test webhook to verify your endpoint receives the payload.",
    ],
    syncedData: [
      "Call ID and campaign ID",
      "Contact: name, phone, email, company, custom fields",
      "Call outcome, sentiment, lead score",
      "Call duration (seconds)",
      "Transcript (full text or URL)",
      "Recording URL",
      "Extracted data fields (all custom fields defined in the campaign)",
      "Appointment details (if applicable): date, time, video link",
      "Timestamp (ISO 8601)",
      "Event type: call.completed or campaign.finished",
    ],
    useCases: [
      "Building custom integrations with internal systems or databases.",
      "Triggering workflows in Make.com, n8n, or other iPaaS tools.",
      "Sending call data to a data warehouse for analytics.",
      "Creating custom notification systems (email, SMS, push) based on call outcomes.",
    ],
    limitations: [
      "Your endpoint must return a 2xx HTTP status code within 10 seconds or the delivery is considered failed.",
      "Maximum payload size is 1 MB per webhook event.",
      "Webhooks are sent asynchronously. There is no guaranteed ordering of events.",
      "If your endpoint is down, Callengo retries 3 times over 15 minutes before marking the delivery as failed.",
      "Webhook logs are retained for 30 days in the Callengo dashboard.",
      "Available on Business plan and above.",
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════════
   generateStaticParams
   ═══════════════════════════════════════════════════════════════════ */

export function generateStaticParams() {
  return integrations.map((intg) => ({ slug: intg.slug }));
}

/* ═══════════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════════ */

export default async function IntegrationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const integration = integrations.find((i) => i.slug === slug);

  if (!integration) {
    notFound();
  }

  const planBadgeColors: Record<string, string> = {
    Starter: "bg-gray-100 text-gray-700",
    Business: "bg-blue-50 text-blue-700",
    Teams: "bg-indigo-50 text-indigo-700",
    Enterprise: "bg-violet-50 text-violet-700",
  };

  const categoryBadgeColors: Record<string, string> = {
    Calendar: "bg-blue-50 text-blue-700",
    Video: "bg-purple-50 text-purple-700",
    CRM: "bg-emerald-50 text-emerald-700",
    Communication: "bg-amber-50 text-amber-700",
    Productivity: "bg-pink-50 text-pink-700",
    Automation: "bg-slate-50 text-slate-700",
  };

  const relatedIntegrations = integrations
    .filter((i) => i.category === integration.category && i.slug !== integration.slug)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main style={{ fontFamily: "var(--font-body)" }} className="bg-background">
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-6">
            <div>
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 mb-8">
                <Link
                  href="/integrations"
                  className="flex items-center gap-1.5 text-sm font-medium text-foreground-tertiary hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  All Integrations
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-foreground-tertiary" />
                <span className="text-sm font-medium text-electric">
                  {integration.name}
                </span>
              </div>

              {/* Title block */}
              <div className="flex items-start gap-5 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-background-secondary flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <Image src={integration.logo} alt={integration.name} width={52} height={52} className="object-contain" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryBadgeColors[integration.category]}`}
                    >
                      {integration.category}
                    </span>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${planBadgeColors[integration.minPlan]}`}
                    >
                      {integration.minPlan}+ plan
                    </span>
                  </div>
                  <h1
                    className="text-3xl md:text-4xl font-bold text-foreground"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {integration.name}
                  </h1>
                  <p className="text-lg text-foreground-secondary mt-2">
                    {integration.tagline}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            {/* What it does */}
            <div className="border border-border rounded-xl p-8 bg-white">
              <h2
                className="text-xl font-bold text-foreground mb-4 flex items-center gap-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <BookOpen className="w-5 h-5 text-electric" />
                What It Does
              </h2>
              <p className="text-foreground-secondary leading-relaxed text-base">
                {integration.whatItDoes}
              </p>
            </div>

            {/* Setup instructions */}
            <div className="border border-border rounded-xl p-8 bg-white">
              <h2
                className="text-xl font-bold text-foreground mb-6 flex items-center gap-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <Settings className="w-5 h-5 text-electric" />
                Setup Instructions
              </h2>
              <ol className="space-y-4">
                {integration.setup.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-foreground-secondary leading-relaxed pt-1">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Synced data */}
            <div className="border border-border rounded-xl p-8 bg-white">
              <h2
                className="text-xl font-bold text-foreground mb-6 flex items-center gap-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <RefreshCw className="w-5 h-5 text-electric" />
                Synced Data Fields
              </h2>
              <ul className="space-y-3">
                {integration.syncedData.map((field, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-foreground-secondary"
                  >
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{field}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Plan requirement */}
            <div className="border border-border rounded-xl p-6 bg-background-secondary">
              <div className="flex items-center gap-4">
                <CreditCard className="w-6 h-6 text-electric flex-shrink-0" />
                <div>
                  <p className="text-foreground font-semibold">
                    Plan Requirement
                  </p>
                  <p className="text-sm text-foreground-secondary mt-1">
                    This integration is available on the{" "}
                    <span className="font-semibold text-electric">
                      {integration.minPlan}
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
            </div>

            {/* Use cases */}
            <div className="border border-border rounded-xl p-8 bg-white">
              <h2
                className="text-xl font-bold text-foreground mb-6 flex items-center gap-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <Zap className="w-5 h-5 text-electric" />
                Common Use Cases
              </h2>
              <ul className="space-y-3">
                {integration.useCases.map((uc, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-foreground-secondary"
                  >
                    <ChevronRight className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" />
                    <span>{uc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Limitations */}
            <div className="border border-border rounded-xl p-8 bg-white">
              <h2
                className="text-xl font-bold text-foreground mb-6 flex items-center gap-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <AlertTriangle className="w-5 h-5 text-foreground-tertiary" />
                Limitations &amp; Notes
              </h2>
              <ul className="space-y-3">
                {integration.limitations.map((lim, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-foreground-secondary"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground-tertiary flex-shrink-0 mt-2.5" />
                    <span>{lim}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related integrations */}
            {relatedIntegrations.length > 0 && (
              <div>
                <h2
                  className="text-xl font-bold text-foreground mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Related {integration.category} Integrations
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {relatedIntegrations.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/integrations/${rel.slug}`}
                      className="group border border-border rounded-xl p-5 bg-white hover:shadow-lg hover:border-electric/30 transition-all"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-background-secondary flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                          <Image src={rel.logo} alt={rel.name} width={32} height={32} className="object-contain" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm text-foreground">{rel.name}</h3>
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${planBadgeColors[rel.minPlan]}`}>
                            {rel.minPlan}+
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-foreground-secondary leading-relaxed">{rel.tagline}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="relative overflow-hidden rounded-3xl gradient-bg p-12 md:p-20">
              <div className="absolute inset-0 overflow-hidden opacity-90">
                <div className="absolute -top-1/4 right-[-10%] w-3/5 h-[120%] bg-gradient-to-br from-white/40 via-[#8B96C8]/35 to-[#6070E0]/25 rounded-full blur-2xl animate-[ctaLava1_22s_ease-in-out_infinite]" />
                <div className="absolute -bottom-1/3 left-[-10%] w-1/2 h-full bg-gradient-to-br from-[#8B96C8]/40 via-white/25 to-[#4F5FE8]/25 rounded-full blur-2xl animate-[ctaLava2_28s_ease-in-out_infinite]" />
                <div className="absolute top-[10%] left-[30%] w-2/5 h-4/5 bg-gradient-to-br from-white/30 via-[#1DB87A]/18 to-[#8B96C8]/20 rounded-full blur-2xl animate-[ctaLava3_25s_ease-in-out_infinite]" />
                <div className="absolute top-[-15%] left-[50%] w-1/3 h-[90%] bg-gradient-to-br from-[#6070E0]/30 via-white/20 to-[#8B96C8]/25 rounded-full blur-2xl animate-[ctaLava4_30s_ease-in-out_infinite]" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E2D6B]/40 via-[#1E2D6B]/15 to-transparent" />

              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h2
                  className="text-3xl md:text-4xl font-bold text-white mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Ready to connect {integration.name}?
                </h2>
                <p className="text-lg text-white/70 mb-10">
                  Start your free trial and set up {integration.name} in
                  minutes. No coding required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://app.callengo.com/auth/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-white text-primary hover:bg-white/90 px-8 py-4 font-semibold rounded-xl"
                  >
                    Get Started Free
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <Link
                    href="/integrations"
                    className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    All Integrations
                  </Link>
                </div>
              </div>

              <style dangerouslySetInnerHTML={{ __html: `
                @keyframes ctaLava1 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  20% { transform: translate(-50px, 40px) scale(1.12); }
                  50% { transform: translate(30px, -35px) scale(0.9); }
                  75% { transform: translate(-20px, -15px) scale(1.05); }
                }
                @keyframes ctaLava2 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  25% { transform: translate(45px, -40px) scale(1.15); }
                  55% { transform: translate(-30px, 45px) scale(0.88); }
                  80% { transform: translate(15px, -10px) scale(1.08); }
                }
                @keyframes ctaLava3 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  30% { transform: translate(40px, -30px) scale(1.1); }
                  65% { transform: translate(-35px, 25px) scale(0.92); }
                }
                @keyframes ctaLava4 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  20% { transform: translate(-30px, 40px) scale(1.1); }
                  50% { transform: translate(40px, -25px) scale(0.9); }
                  75% { transform: translate(-15px, -20px) scale(1.06); }
                }
              ` }} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
