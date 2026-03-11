import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Callengo",
  description:
    "Contact the Callengo team for sales inquiries, technical support, partnership opportunities, or demo requests. Reach us at sales@callengo.com or support@callengo.com. We respond within 24 hours.",
  keywords: [
    "contact Callengo",
    "Callengo support",
    "Callengo sales",
    "AI phone agent demo",
    "Callengo partnership",
    "Callengo email",
    "business automation demo",
    "AI calling demo",
  ],
  openGraph: {
    title: "Contact Callengo - Sales, Support & Partnerships",
    description:
      "Have questions about AI phone agents? Contact our team for demos, custom plans, or technical support.",
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
    title: "Contact Callengo",
    description:
      "Get in touch with the Callengo team for demos, support, and partnerships.",
        images: ["/callengo-logo.png"],
  },
  alternates: {
    canonical: "https://callengo.com/contact",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://callengo.com/contact",
      url: "https://callengo.com/contact",
      name: "Contact Callengo",
      description:
        "Get in touch with the Callengo team for sales, support, demos, or partnerships.",
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
          name: "Contact",
          item: "https://callengo.com/contact",
        },
      ],
    },
  ],
};

export default function ContactLayout({
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
