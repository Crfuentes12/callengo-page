import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal - Privacy Policy, Terms of Service & Compliance",
  description:
    "Callengo legal hub: access our privacy policy, terms of service, and compliance documentation. Transparent policies for AI phone automation services.",
  keywords: [
    "Callengo legal",
    "Callengo privacy policy",
    "Callengo terms of service",
    "AI phone agent legal",
    "SaaS legal documents",
  ],
  openGraph: {
    title: "Legal - Callengo",
    description:
      "Privacy policy, terms of service, and compliance documentation for Callengo.",
    type: "website",
  },
  alternates: {
    canonical: "https://callengo.com/legal",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://callengo.com/legal",
      url: "https://callengo.com/legal",
      name: "Callengo Legal",
      description: "Legal documentation for Callengo services.",
      isPartOf: { "@id": "https://callengo.com/#website" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://callengo.com" },
        { "@type": "ListItem", position: 2, name: "Legal", item: "https://callengo.com/legal" },
      ],
    },
  ],
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
