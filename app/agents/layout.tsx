import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Callengo AI Agents",
    default: "AI Phone Agents - Callengo Solutions",
  },
  description:
    "Callengo AI phone agents automate appointment confirmations, CRM data validation, and lead qualification. Purpose-built voice agents that call, verify, and update your data automatically.",
  keywords: [
    "AI phone agents",
    "Callengo agents",
    "appointment confirmation agent",
    "data validation agent",
    "lead qualification agent",
    "AI voice agents",
    "automated calling agents",
    "CRM automation agents",
  ],
  openGraph: {
    title: "Callengo AI Phone Agents",
    description:
      "Three purpose-built AI agents that call your contacts, qualify leads, verify data, and confirm appointments.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Callengo AI Phone Agents",
    description:
      "Three purpose-built AI agents for appointment confirmations, data validation, and lead qualification.",
  },
  alternates: {
    canonical: "https://callengo.com/agents",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://callengo.com/agents",
      url: "https://callengo.com/agents",
      name: "Callengo AI Phone Agents",
      description:
        "Three purpose-built AI phone agents for appointment confirmation, data validation, and lead qualification.",
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
          name: "AI Agents",
          item: "https://callengo.com/agents",
        },
      ],
    },
  ],
};

export default function AgentsLayout({
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
