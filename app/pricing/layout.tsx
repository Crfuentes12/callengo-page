import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - AI Phone Agent Plans & Pricing",
  description:
    "Callengo pricing starts at $0/month with 15 free minutes. Plans from $99 to $1,499/month for automated appointment confirmations, data validation, and lead qualification. No hidden fees, annual billing saves 12%.",
  keywords: [
    "Callengo pricing",
    "AI phone agent pricing",
    "automated calling plans",
    "business phone automation cost",
    "appointment confirmation pricing",
    "data validation pricing",
    "lead qualification pricing",
    "AI voice agent plans",
    "CRM automation pricing",
    "Callengo free plan",
    "Callengo enterprise plan",
  ],
  openGraph: {
    title: "Callengo Pricing - Plans Starting at $0/month",
    description:
      "Simple, transparent pricing for AI phone agents. Start free with 15 minutes, upgrade when you see ROI. Plans from $99 to enterprise.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Callengo Pricing - Plans Starting at $0/month",
    description:
      "Simple, transparent pricing for AI phone agents. Start free, upgrade when you see ROI.",
  },
  alternates: {
    canonical: "https://callengo.com/pricing",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://callengo.com/pricing",
      url: "https://callengo.com/pricing",
      name: "Callengo Pricing",
      description:
        "AI phone agent plans starting at $0/month. Transparent pricing with no hidden fees.",
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
          name: "Pricing",
          item: "https://callengo.com/pricing",
        },
      ],
    },
    {
      "@type": "Product",
      name: "Callengo AI Phone Agents",
      description:
        "AI-powered phone automation for appointment confirmations, data validation, and lead qualification.",
      brand: { "@type": "Organization", name: "Callengo" },
      offers: [
        {
          "@type": "Offer",
          name: "Free",
          price: "0",
          priceCurrency: "USD",
          description: "15 free minutes, 1 AI agent, basic analytics",
          url: "https://app.callengo.com/auth/signup",
        },
        {
          "@type": "Offer",
          name: "Starter",
          price: "99",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "99",
            priceCurrency: "USD",
            billingDuration: "P1M",
          },
          description: "250 min/month, 1 AI agent, Slack + SimplyBook.me",
          url: "https://app.callengo.com/auth/signup",
        },
        {
          "@type": "Offer",
          name: "Growth",
          price: "179",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "179",
            priceCurrency: "USD",
            billingDuration: "P1M",
          },
          description: "500 min/month, 3 AI agents, automatic follow-ups",
          url: "https://app.callengo.com/auth/signup",
        },
        {
          "@type": "Offer",
          name: "Business",
          price: "299",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "299",
            priceCurrency: "USD",
            billingDuration: "P1M",
          },
          description:
            "1,000 min/month, unlimited agents, HubSpot + Pipedrive CRM",
          url: "https://app.callengo.com/auth/signup",
        },
        {
          "@type": "Offer",
          name: "Teams",
          price: "649",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "649",
            priceCurrency: "USD",
            billingDuration: "P1M",
          },
          description:
            "3,000 min/month, Salesforce + Dynamics 365, user permissions",
          url: "https://app.callengo.com/auth/signup",
        },
        {
          "@type": "Offer",
          name: "Enterprise",
          price: "1499",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "1499",
            priceCurrency: "USD",
            billingDuration: "P1M",
          },
          description:
            "Custom minutes, unlimited agents, dedicated support, SLA guarantees",
          url: "https://callengo.com/contact",
        },
      ],
    },
  ],
};

export default function PricingLayout({
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
