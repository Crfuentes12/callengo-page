import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Callengo - AI Phone Automation Company",
  description:
    "Callengo is an AI-powered phone automation platform founded by Chris Fuentes. We help businesses reduce no-shows, validate CRM data, and qualify leads with intelligent voice agents. Learn about our mission, values, and team.",
  keywords: [
    "about Callengo",
    "AI phone automation company",
    "Chris Fuentes Callengo",
    "Callengo founder",
    "AI voice agent company",
    "phone automation startup",
    "appointment confirmation software",
    "CRM data validation",
    "lead qualification platform",
    "business automation company",
  ],
  openGraph: {
    title: "About Callengo - AI Phone Automation Company",
    description:
      "Learn how Callengo helps businesses recover lost revenue with AI phone agents for appointment confirmations, data validation, and lead qualification.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Callengo - AI Phone Automation Company",
    description:
      "Learn how Callengo helps businesses recover lost revenue with AI phone agents.",
  },
  alternates: {
    canonical: "https://callengo.com/about",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://callengo.com/about",
      url: "https://callengo.com/about",
      name: "About Callengo",
      description:
        "Callengo is an AI-powered phone automation platform that handles appointment confirmations, data validation, and lead qualification.",
      isPartOf: { "@id": "https://callengo.com/#website" },
      mainEntity: { "@id": "https://callengo.com/#organization" },
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
          name: "About",
          item: "https://callengo.com/about",
        },
      ],
    },
  ],
};

export default function AboutLayout({
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
