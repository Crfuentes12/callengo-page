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
  twitter: {
    card: "summary_large_image",
    title: "Callengo Integrations — 16+ Native Connections",
    description:
      "Connect Callengo AI phone agents with Salesforce, HubSpot, Google Calendar, Zoom, Slack, and more.",
  },
  alternates: {
    canonical: "https://callengo.com/integrations",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://callengo.com/integrations",
      url: "https://callengo.com/integrations",
      name: "Callengo Integrations",
      description:
        "16+ native integrations with CRMs, calendars, video conferencing, and automation tools.",
      isPartOf: { "@id": "https://callengo.com/#website" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://callengo.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Integrations",
          item: "https://callengo.com/integrations",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Callengo Integration Partners",
      numberOfItems: 16,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Google Calendar", url: "https://callengo.com/integrations/google-calendar" },
        { "@type": "ListItem", position: 2, name: "Google Meet", url: "https://callengo.com/integrations/google-meet" },
        { "@type": "ListItem", position: 3, name: "Zoom", url: "https://callengo.com/integrations/zoom" },
        { "@type": "ListItem", position: 4, name: "Google Sheets", url: "https://callengo.com/integrations/google-sheets" },
        { "@type": "ListItem", position: 5, name: "Stripe", url: "https://callengo.com/integrations/stripe" },
        { "@type": "ListItem", position: 6, name: "Slack", url: "https://callengo.com/integrations/slack" },
        { "@type": "ListItem", position: 7, name: "SimplyBook.me", url: "https://callengo.com/integrations/simplybook-me" },
        { "@type": "ListItem", position: 8, name: "Webhooks", url: "https://callengo.com/integrations/webhooks" },
        { "@type": "ListItem", position: 9, name: "Microsoft Outlook", url: "https://callengo.com/integrations/outlook-calendar" },
        { "@type": "ListItem", position: 10, name: "Microsoft Teams", url: "https://callengo.com/integrations/microsoft-teams" },
        { "@type": "ListItem", position: 11, name: "HubSpot", url: "https://callengo.com/integrations/hubspot" },
        { "@type": "ListItem", position: 12, name: "Pipedrive", url: "https://callengo.com/integrations/pipedrive" },
        { "@type": "ListItem", position: 13, name: "Zoho CRM", url: "https://callengo.com/integrations/zoho-crm" },
        { "@type": "ListItem", position: 14, name: "Clio", url: "https://callengo.com/integrations/clio" },
        { "@type": "ListItem", position: 15, name: "Salesforce", url: "https://callengo.com/integrations/salesforce" },
        { "@type": "ListItem", position: 16, name: "Microsoft Dynamics 365", url: "https://callengo.com/integrations/microsoft-dynamics-365" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do Callengo integrations work?",
          acceptedAnswer: { "@type": "Answer", text: "Callengo connects to your tools through OAuth or API key authentication. Data flows automatically between Callengo and your CRM, calendar, or communication tools when calls complete." },
        },
        {
          "@type": "Question",
          name: "Can I integrate Callengo with my CRM?",
          acceptedAnswer: { "@type": "Answer", text: "Yes! Callengo integrates natively with HubSpot, Pipedrive (Business+), Salesforce, Zoho CRM, Dynamics 365 (Teams+), and Clio (Enterprise). Webhooks support Zapier, Make, and n8n for other systems." },
        },
        {
          "@type": "Question",
          name: "Which integrations are available on the free plan?",
          acceptedAnswer: { "@type": "Answer", text: "The free plan includes Google Calendar, Google Meet, Zoom, Stripe, and Google Sheets." },
        },
        {
          "@type": "Question",
          name: "Does Callengo support webhooks?",
          acceptedAnswer: { "@type": "Answer", text: "Yes, webhooks are available on Starter+ plans. Callengo sends POST requests to any URL when events occur, compatible with Zapier, Make, and n8n." },
        },
        {
          "@type": "Question",
          name: "Can Callengo sync with Google Calendar and Outlook?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Google Calendar is on all plans, Outlook on Business+. Both support two-way sync with real-time availability checking." },
        },
      ],
    },
  ],
};

export default function IntegrationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
