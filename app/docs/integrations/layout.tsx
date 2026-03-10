import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrations | Callengo Documentation",
  description:
    "Complete guide to all 16 Callengo integrations: Google Calendar, Outlook, Zoom, Google Meet, Microsoft Teams, HubSpot, Salesforce, Pipedrive, Zoho CRM, Dynamics 365, Clio, Slack, Google Sheets, SimplyBook.me, Stripe, and Webhooks. Setup instructions, synced fields, plans, and use cases.",
  openGraph: {
    title: "Callengo Integrations: Full Setup & Configuration Guide",
    description:
      "Connect Callengo to your calendar, CRM, video conferencing, and automation tools. Step-by-step setup, data sync details, and plan requirements for every integration.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Callengo Integrations: Full Setup & Configuration Guide",
    description:
      "Connect Callengo to your calendar, CRM, video conferencing, and automation tools. Step-by-step setup, data sync details, and plan requirements for every integration.",
  },
  keywords: [
    "Callengo integrations",
    "Google Calendar integration",
    "Outlook Calendar integration",
    "Zoom integration",
    "Google Meet integration",
    "Microsoft Teams integration",
    "HubSpot integration",
    "Salesforce integration",
    "Pipedrive integration",
    "Zoho CRM integration",
    "Microsoft Dynamics 365 integration",
    "Clio integration",
    "Slack integration",
    "Google Sheets integration",
    "SimplyBook.me integration",
    "Stripe integration",
    "Webhooks",
    "AI calling platform integrations",
    "CRM calling automation",
  ],
};

export default function IntegrationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
