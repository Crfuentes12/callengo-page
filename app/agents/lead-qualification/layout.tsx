import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Lead Qualification Agent - Score & Qualify Leads Automatically",
  description:
    "Callengo's Lead Qualification Agent calls leads using the BANT framework (Budget, Authority, Need, Timeline), scores them hot/warm/cold, and schedules meetings with qualified prospects. Respond to leads in minutes, not hours. Integrates with Salesforce, HubSpot, Pipedrive, and more.",
  keywords: [
    "lead qualification agent",
    "AI lead scoring",
    "BANT qualification",
    "automated lead qualification",
    "lead response time",
    "AI SDR",
    "sales qualification automation",
    "hot lead scoring",
    "lead routing automation",
    "AI sales development",
    "Callengo lead qualification",
    "inbound lead qualification",
  ],
  openGraph: {
    title: "AI Lead Qualification Agent - Score & Qualify Leads Automatically",
    description:
      "Respond to leads in minutes, not hours. Callengo qualifies leads using BANT, scores them automatically, and routes hot prospects to your sales team.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Lead Qualification Agent by Callengo",
    description:
      "Qualify leads in minutes with AI. BANT scoring, automated routing, and CRM sync.",
  },
  alternates: {
    canonical: "https://callengo.com/agents/lead-qualification",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Callengo Lead Qualification Agent",
      applicationCategory: "BusinessApplication",
      description:
        "AI phone agent that qualifies leads using the BANT framework, scores them hot/warm/cold, and schedules meetings with qualified prospects. Reduces lead response time from hours to minutes.",
      operatingSystem: "Web",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "0",
        highPrice: "1499",
        priceCurrency: "USD",
        offerCount: 6,
      },
      featureList: [
        "BANT framework qualification (Budget, Authority, Need, Timeline)",
        "Hot/warm/cold lead scoring",
        "Automatic meeting scheduling with qualified prospects",
        "CRM sync (Salesforce, HubSpot, Pipedrive, Zoho)",
        "Video meeting link generation (Zoom, Meet, Teams)",
        "Lead routing based on score",
        "Instant response to inbound leads",
        "Conversational AI with natural dialogue",
      ],
      provider: { "@id": "https://callengo.com/#organization" },
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
          name: "AI Agents",
          item: "https://callengo.com/agents",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Lead Qualification",
          item: "https://callengo.com/agents/lead-qualification",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does the Lead Qualification Agent score leads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The agent uses the BANT framework (Budget, Authority, Need, Timeline) during a natural AI conversation. Each criterion is scored, and the lead receives an overall hot/warm/cold rating. Scoring criteria can be customized to match your sales process.",
          },
        },
        {
          "@type": "Question",
          name: "Can the agent schedule meetings with qualified leads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. When a lead qualifies as hot, the agent offers available time slots and schedules a meeting directly during the call. Meeting links (Zoom, Google Meet, or Microsoft Teams) are generated automatically and sent to both parties.",
          },
        },
        {
          "@type": "Question",
          name: "How fast does the agent respond to new leads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The agent can call new leads within minutes of import. Research shows leads contacted within 5 minutes are 9x more likely to convert. Callengo eliminates the delay between lead capture and first contact.",
          },
        },
      ],
    },
  ],
};

export default function LeadQualificationLayout({
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
