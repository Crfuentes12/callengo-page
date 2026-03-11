import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Tools - ROI Calculator, Call Scripts & Templates",
  description:
    "Free business tools from Callengo: ROI calculator for AI phone agents, call script generator, BANT lead scoring template, and TCPA compliance checklist. No account required.",
  keywords: [
    "Callengo free tools",
    "ROI calculator AI phone agents",
    "call script generator",
    "lead scoring template BANT",
    "TCPA compliance checklist",
    "free business tools",
    "sales automation tools",
    "appointment confirmation scripts",
    "outbound calling templates",
  ],
  openGraph: {
    title: "Free Tools by Callengo - ROI Calculator, Scripts & Templates",
    description:
      "Free resources to optimize outbound calls, qualify leads faster, and stay TCPA compliant. No account required.",
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
    card: "summary",
    title: "Free Tools by Callengo",
    description:
      "Free ROI calculator, call scripts, lead scoring templates, and compliance checklists.",
        images: ["/callengo-logo.png"],
  },
  alternates: {
    canonical: "https://callengo.com/free-tools",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://callengo.com/free-tools",
      url: "https://callengo.com/free-tools",
      name: "Free Business Tools by Callengo",
      description:
        "Free ROI calculator, call script generator, BANT lead scoring template, and TCPA compliance checklist.",
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
          name: "Free Tools",
          item: "https://callengo.com/free-tools",
        },
      ],
    },
  ],
};

export default function FreeToolsLayout({
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
