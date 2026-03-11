import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center - Callengo Support & FAQ",
  description:
    "Find answers to common questions about Callengo AI phone agents. Get support for account setup, call configuration, CRM integrations, billing, TCPA compliance, and more.",
  keywords: [
    "Callengo help center",
    "Callengo support",
    "Callengo FAQ",
    "AI phone agent help",
    "Callengo troubleshooting",
    "CRM integration help",
    "TCPA compliance help",
    "call configuration support",
    "Callengo account setup",
    "billing support",
  ],
  openGraph: {
    title: "Callengo Help Center - Support & FAQ",
    description:
      "Get help with Callengo. FAQs, support channels, and resources for AI phone agent setup and configuration.",
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
    title: "Callengo Help Center",
    description:
      "Find answers and get support for Callengo AI phone agents.",
        images: ["/callengo-logo.png"],
  },
  alternates: {
    canonical: "https://callengo.com/help",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://callengo.com/help",
      url: "https://callengo.com/help",
      name: "Callengo Help Center",
      description:
        "Frequently asked questions and support resources for Callengo AI phone agents.",
      isPartOf: { "@id": "https://callengo.com/#website" },
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I get started with Callengo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sign up for a free account, import your contacts, and create your first campaign. Our quick start guide walks you through each step.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if a call goes to voicemail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Callengo can leave a customized voicemail message and schedule a callback attempt. You can configure voicemail handling in your campaign settings.",
          },
        },
        {
          "@type": "Question",
          name: "Can I customize the call scripts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, you can fully customize scripts for each campaign type. Our script editor supports dynamic fields, conditional logic, and multiple languages.",
          },
        },
        {
          "@type": "Question",
          name: "How are call minutes calculated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Minutes are calculated based on the actual duration of connected calls. Failed connections, busy signals, and voicemails under 30 seconds are not counted.",
          },
        },
        {
          "@type": "Question",
          name: "Is Callengo compliant with TCPA regulations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Callengo is designed with compliance in mind. We support Do-Not-Call list scrubbing, time zone restrictions, and consent management.",
          },
        },
        {
          "@type": "Question",
          name: "Can I integrate Callengo with my CRM?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! Callengo integrates natively with HubSpot and Pipedrive on Business+ plans, and Salesforce, Zoho, and Dynamics 365 on Teams+ plans. You can also export all data as CSV, Excel, or JSON.",
          },
        },
      ],
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
          name: "Help Center",
          item: "https://callengo.com/help",
        },
      ],
    },
  ],
};

export default function HelpLayout({
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
