import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance - Data Protection, TCPA & Security Standards",
  description:
    "Callengo compliance overview: GDPR, CCPA, TCPA, HIPAA-aligned data handling, SOC 2 controls, end-to-end encryption, and consent management for AI phone automation.",
  keywords: [
    "Callengo compliance",
    "TCPA compliance AI calls",
    "GDPR AI phone agents",
    "CCPA compliance",
    "HIPAA phone automation",
    "SOC 2 compliance",
    "AI calling regulations",
    "data protection AI calls",
    "consent management automation",
    "call recording compliance",
  ],
  openGraph: {
    title: "Callengo Compliance - Data Protection & Regulatory Standards",
    description:
      "How Callengo ensures GDPR, CCPA, TCPA, and HIPAA-aligned compliance for AI-powered phone automation.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Callengo Compliance",
    description:
      "Data protection, TCPA compliance, and security standards for AI phone automation.",
  },
  alternates: {
    canonical: "https://callengo.com/compliance",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://callengo.com/compliance",
      url: "https://callengo.com/compliance",
      name: "Callengo Compliance",
      description:
        "Compliance and data protection standards for Callengo AI phone agents.",
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
          name: "Compliance",
          item: "https://callengo.com/compliance",
        },
      ],
    },
  ],
};

export default function ComplianceLayout({
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
