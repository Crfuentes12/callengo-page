import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrations — Connect Callengo with Your CRM, Calendar & Tools",
  description:
    "Callengo integrates with 16+ tools including Salesforce, HubSpot, Google Calendar, Zoom, Slack, and more. Automate AI phone calls with your existing tech stack.",
  keywords: [
    "Callengo integrations",
    "CRM integration",
    "AI phone agent integrations",
    "Salesforce integration",
    "HubSpot integration",
    "Google Calendar sync",
    "Zoom integration",
    "Slack notifications",
    "Pipedrive integration",
    "Zoho CRM",
    "Microsoft Dynamics 365",
    "Clio legal",
    "webhooks automation",
  ],
  openGraph: {
    title: "Callengo Integrations — 16+ Native Connections",
    description:
      "Connect Callengo AI phone agents with Salesforce, HubSpot, Google Calendar, Zoom, Slack, and more. Sync call results, update contacts, and automate workflows.",
    type: "website",
  },
  alternates: {
    canonical: "https://callengo.com/integrations",
  },
};

export default function IntegrationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
