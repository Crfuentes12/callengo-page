import type { Metadata } from "next";

const integrationMeta: Record<string, { title: string; description: string }> = {
  "google-calendar": {
    title: "Google Calendar Integration",
    description:
      "Sync appointments and availability between Callengo and Google Calendar in real time. Setup guide, synced fields, and use cases.",
  },
  "outlook-calendar": {
    title: "Outlook Calendar Integration",
    description:
      "Two-way calendar sync between Callengo and Microsoft Outlook 365. Setup instructions, synced data, and plan requirements.",
  },
  "simplybook-me": {
    title: "SimplyBook.me Integration",
    description:
      "Sync bookings and availability between Callengo and SimplyBook.me. Setup guide, synced fields, and use cases for service businesses.",
  },
  "google-meet": {
    title: "Google Meet Integration",
    description:
      "Auto-generate Google Meet links for confirmed appointments in Callengo. Setup instructions and synced data details.",
  },
  zoom: {
    title: "Zoom Integration",
    description:
      "Automatically create Zoom meetings when Callengo confirms appointments. Setup guide, meeting settings, and plan requirements.",
  },
  "microsoft-teams": {
    title: "Microsoft Teams Integration",
    description:
      "Schedule Microsoft Teams meetings from Callengo call outcomes. Setup instructions for Microsoft 365 enterprise environments.",
  },
  hubspot: {
    title: "HubSpot Integration",
    description:
      "Push call outcomes, lead scores, and sentiment data from Callengo into HubSpot CRM. Complete setup and field mapping guide.",
  },
  salesforce: {
    title: "Salesforce Integration",
    description:
      "Enterprise-grade Salesforce integration with custom field mapping, Lead/Contact/Account sync, and Opportunity stage automation.",
  },
  pipedrive: {
    title: "Pipedrive Integration",
    description:
      "Update Pipedrive deals, contacts, and activities automatically from Callengo call outcomes. Setup and configuration guide.",
  },
  "zoho-crm": {
    title: "Zoho CRM Integration",
    description:
      "Sync call data and lead status between Callengo and Zoho CRM. Setup instructions, field mappings, and workflow triggers.",
  },
  "microsoft-dynamics-365": {
    title: "Microsoft Dynamics 365 Integration",
    description:
      "Bi-directional sync between Callengo and Dynamics 365 entities. Setup guide for Contacts, Leads, Activities, and Opportunities.",
  },
  slack: {
    title: "Slack Integration",
    description:
      "Get real-time call notifications and summaries in Slack channels. Configure per-campaign notifications and outcome filters.",
  },
  "google-sheets": {
    title: "Google Sheets Integration",
    description:
      "Export Callengo call results directly to Google Sheets. Setup guide for automated reporting and data analysis.",
  },
  clio: {
    title: "Clio Integration",
    description:
      "Legal practice management integration — sync Callengo call outcomes with Clio Contacts, Matters, and Communications.",
  },
  stripe: {
    title: "Stripe Integration",
    description:
      "Trigger Callengo calling campaigns based on Stripe payment events. Setup guide for payment-driven call automation.",
  },
  zapier: {
    title: "Zapier Integration",
    description:
      "Connect Callengo to 5,000+ apps with Zapier. Build no-code workflows that trigger campaigns and push call results anywhere.",
  },
};

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const meta = integrationMeta[params.slug];

  if (!meta) {
    return {
      title: "Integration | Callengo Documentation",
      description: "Callengo integration setup guide and documentation.",
    };
  }

  return {
    title: `${meta.title} | Callengo Documentation`,
    description: meta.description,
    openGraph: {
      title: `${meta.title} — Callengo`,
      description: meta.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${meta.title} — Callengo`,
      description: meta.description,
    },
  };
}

export default function IntegrationSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
