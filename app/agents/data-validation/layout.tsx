import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Data Validation Agent - Verify CRM Contacts Automatically",
  description:
    "Callengo's Data Validation Agent automatically calls contacts to verify phone numbers, emails, addresses, and job titles. Keep your CRM data accurate, reduce bounce rates, and improve campaign effectiveness. Integrates with Salesforce, HubSpot, Pipedrive, and more.",
  keywords: [
    "data validation agent",
    "CRM data validation",
    "contact verification automation",
    "phone number verification",
    "email validation AI",
    "CRM data quality",
    "database cleanup",
    "contact data accuracy",
    "AI data verification",
    "automated contact validation",
    "CRM data decay",
    "Callengo data validation",
  ],
  openGraph: {
    title: "AI Data Validation Agent - Verify CRM Contacts Automatically",
    description:
      "Stop wasting time on outdated contacts. Callengo validates phone numbers, emails, and addresses so your CRM stays accurate and your team stays productive.",
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
    title: "AI Data Validation Agent by Callengo",
    description:
      "Automatically verify and update CRM contacts with AI phone calls. Reduce data decay by 90%.",
        images: ["/callengo-logo.png"],
  },
  alternates: {
    canonical: "https://callengo.com/agents/data-validation",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Callengo Data Validation Agent",
      applicationCategory: "BusinessApplication",
      description:
        "AI phone agent that automatically calls contacts to verify and update CRM data including phone numbers, emails, addresses, and job titles.",
      operatingSystem: "Web",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "0",
        highPrice: "1499",
        priceCurrency: "USD",
        offerCount: 6,
      },
      featureList: [
        "Automated phone number verification",
        "Email address validation",
        "Physical address updates",
        "Job title confirmation",
        "CRM auto-sync (Salesforce, HubSpot, Pipedrive, Zoho)",
        "Disconnected number detection",
        "Callback scheduling for unavailable contacts",
        "Batch processing for large databases",
      ],
      provider: { "@id": "https://callengo.com/#organization" },
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
        {
          "@type": "ListItem",
          position: 3,
          name: "Data Validation",
          item: "https://callengo.com/agents/data-validation",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does the Data Validation Agent verify contacts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The agent places automated phone calls to contacts in your database, verifying their current phone number, email address, physical address, and job title through a natural AI conversation. Verified data is automatically synced back to your CRM.",
          },
        },
        {
          "@type": "Question",
          name: "How often should I run data validation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CRM data decays at approximately 30% per year (Gartner). We recommend running validation quarterly for active databases, or monthly for high-volume sales teams. Callengo makes it easy to schedule recurring validation campaigns.",
          },
        },
        {
          "@type": "Question",
          name: "Which CRMs does the Data Validation Agent integrate with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The agent integrates natively with Salesforce, HubSpot, Pipedrive, Zoho CRM, Microsoft Dynamics 365, and Clio. You can also use Google Sheets, CSV import/export, or webhooks (Zapier, Make, n8n) for any other system.",
          },
        },
      ],
    },
  ],
};

export default function DataValidationLayout({
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
