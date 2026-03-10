import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Callengo Usage Agreement",
  description:
    "Callengo terms of service: usage agreement, billing terms, acceptable use policy, and service level commitments for AI phone automation platform.",
  keywords: [
    "Callengo terms of service",
    "Callengo usage agreement",
    "SaaS terms",
    "AI phone agent terms",
    "billing terms",
  ],
  openGraph: {
    title: "Terms of Service - Callengo",
    description:
      "Terms and conditions governing the use of Callengo AI phone automation services.",
    type: "website",
  },
  alternates: {
    canonical: "https://callengo.com/terms",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://callengo.com/terms",
      url: "https://callengo.com/terms",
      name: "Callengo Terms of Service",
      description: "Terms and conditions for using Callengo services.",
      isPartOf: { "@id": "https://callengo.com/#website" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://callengo.com" },
        { "@type": "ListItem", position: 2, name: "Terms of Service", item: "https://callengo.com/terms" },
      ],
    },
  ],
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
