//callengo-page/app/blog/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - AI Phone Automation Insights & Best Practices",
  description:
    "Expert insights on reducing no-shows, improving CRM data quality, and accelerating lead response times. Strategies and best practices for AI phone automation, appointment confirmation, and lead qualification.",
  keywords: [
    "Callengo blog",
    "AI phone automation blog",
    "reduce no-shows",
    "appointment confirmation tips",
    "data validation best practices",
    "lead qualification strategies",
    "CRM data quality",
    "sales automation insights",
    "business phone automation",
    "AI calling best practices",
  ],
  openGraph: {
    title: "Callengo Blog - AI Phone Automation Insights",
    description:
      "Expert insights on appointment confirmation, data validation, and lead qualification. Strategies that help businesses recover revenue.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Callengo Blog - AI Phone Automation Insights",
    description:
      "Expert insights on appointment confirmation, data validation, and lead qualification.",
  },
  alternates: {
    canonical: "https://callengo.com/blog",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://callengo.com/blog",
      url: "https://callengo.com/blog",
      name: "Callengo Blog",
      description:
        "Insights, strategies, and best practices for AI phone automation, reducing no-shows, and improving sales efficiency.",
      publisher: { "@id": "https://callengo.com/#organization" },
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
          name: "Blog",
          item: "https://callengo.com/blog",
        },
      ],
    },
  ],
};

export default function BlogLayout({
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
