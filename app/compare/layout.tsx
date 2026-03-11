import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "Callengo vs %s — Full Comparison | Callengo",
    default: "Compare Callengo — AI Phone Agent Alternatives & Competitors",
  },
  description:
    "Compare Callengo with Bland AI, Vapi, Retell AI, Synthflow, Dialpad, and more. See pricing, features, integrations, and setup complexity side by side to find the best AI phone automation platform for your business.",
  keywords: [
    "Callengo alternatives",
    "Callengo vs Bland AI",
    "Callengo vs Vapi",
    "Callengo vs Retell AI",
    "Callengo vs Synthflow",
    "Callengo vs Dialpad",
    "AI voice agent comparison",
    "best AI phone agent platform",
    "Bland AI alternative",
    "Vapi alternative",
    "Retell AI alternative",
    "AI calling software comparison",
    "outbound call automation comparison",
  ],
  openGraph: {
    title: "Compare Callengo — AI Phone Agent Alternatives",
    description:
      "See how Callengo compares to Bland AI, Vapi, Retell AI, and more. No-code setup, three pre-built agents, transparent pricing.",
    type: "website",
    locale: "en_US",
    siteName: "Callengo",
    images: [
      {
        url: "/callengo-logo.png",
        width: 512,
        height: 512,
        alt: "Callengo — AI Phone Agents for Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare Callengo — AI Phone Agent Alternatives",
    description:
      "Side-by-side comparisons of Callengo vs. the top AI voice automation platforms.",
    images: ["/callengo-logo.png"],
  },
  alternates: {
    canonical: "https://callengo.com/compare",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://callengo.com/compare",
      url: "https://callengo.com/compare",
      name: "Compare Callengo — AI Phone Agent Alternatives",
      description:
        "Side-by-side comparisons of Callengo vs. the top AI voice automation platforms: Bland AI, Vapi, Retell AI, Synthflow, and Dialpad.",
      isPartOf: { "@id": "https://callengo.com/#website" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://callengo.com" },
        { "@type": "ListItem", position: 2, name: "Compare", item: "https://callengo.com/compare" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Callengo vs. Competitors",
      numberOfItems: 5,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Callengo vs Bland AI", url: "https://callengo.com/compare/bland-ai" },
        { "@type": "ListItem", position: 2, name: "Callengo vs Vapi", url: "https://callengo.com/compare/vapi" },
        { "@type": "ListItem", position: 3, name: "Callengo vs Retell AI", url: "https://callengo.com/compare/retell-ai" },
        { "@type": "ListItem", position: 4, name: "Callengo vs Synthflow", url: "https://callengo.com/compare/synthflow" },
        { "@type": "ListItem", position: 5, name: "Callengo vs Dialpad", url: "https://callengo.com/compare/dialpad" },
      ],
    },
  ],
};

export default function CompareLayout({
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
