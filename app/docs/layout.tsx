import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation - Callengo Setup Guide & Reference",
  description:
    "Complete documentation for Callengo AI phone agents. Setup guides, agent configuration, voice library, data import/export, CRM integrations, campaign management, and analytics reference.",
  keywords: [
    "Callengo documentation",
    "Callengo setup guide",
    "AI phone agent documentation",
    "Callengo API",
    "CRM integration guide",
    "campaign setup guide",
    "voice AI configuration",
    "Callengo quick start",
    "data import export",
    "call analytics documentation",
  ],
  openGraph: {
    title: "Callengo Documentation - Setup & Reference Guide",
    description:
      "Everything you need to get started with Callengo. Guides for AI agents, integrations, campaigns, and analytics.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Callengo Documentation",
    description:
      "Complete documentation for setting up and using Callengo AI phone agents.",
  },
  alternates: {
    canonical: "https://callengo.com/docs",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TechArticle",
      "@id": "https://callengo.com/docs",
      url: "https://callengo.com/docs",
      name: "Callengo Documentation",
      description:
        "Complete documentation for Callengo AI phone agents. Setup guides, integrations, campaigns, and analytics.",
      publisher: { "@id": "https://callengo.com/#organization" },
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
          name: "Documentation",
          item: "https://callengo.com/docs",
        },
      ],
    },
  ],
};

export default function DocsLayout({
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
