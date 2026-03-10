import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - How Callengo Protects Your Data",
  description:
    "Callengo privacy policy: how we collect, use, store, and protect your personal information. GDPR and CCPA compliant. Data encryption, retention policies, and your rights.",
  keywords: [
    "Callengo privacy policy",
    "data protection AI calls",
    "GDPR compliance",
    "CCPA compliance",
    "call recording privacy",
    "AI phone agent privacy",
  ],
  openGraph: {
    title: "Privacy Policy - Callengo",
    description:
      "How Callengo collects, uses, and protects your personal information. GDPR and CCPA compliant.",
    type: "website",
  },
  alternates: {
    canonical: "https://callengo.com/privacy",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://callengo.com/privacy",
      url: "https://callengo.com/privacy",
      name: "Callengo Privacy Policy",
      description: "How Callengo collects, uses, and protects your personal information.",
      isPartOf: { "@id": "https://callengo.com/#website" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://callengo.com" },
        { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://callengo.com/privacy" },
      ],
    },
  ],
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
