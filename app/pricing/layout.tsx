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
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does the Callengo free plan work?",
          acceptedAnswer: { "@type": "Answer", text: "You get 15 one-time minutes to test Callengo with no credit card required. This includes full access to 1 AI agent, basic analytics, CSV import, and core integrations." },
        },
        {
          "@type": "Question",
          name: "What counts as a call minute in Callengo?",
          acceptedAnswer: { "@type": "Answer", text: "Only the actual connected call duration counts toward your minutes. Failed connections, busy signals, and voicemails under 30 seconds are not billed." },
        },
        {
          "@type": "Question",
          name: "Can I upgrade or downgrade my Callengo plan anytime?",
          acceptedAnswer: { "@type": "Answer", text: "Yes, you can change your plan at any time. Upgrades take effect immediately with prorated billing. Downgrades take effect at the end of your current billing cycle." },
        },
        {
          "@type": "Question",
          name: "What happens if I exceed my monthly call minutes?",
          acceptedAnswer: { "@type": "Answer", text: "You'll be charged the per-minute overage rate for your plan: $0.29/min (Starter), $0.26/min (Growth), $0.23/min (Business), $0.20/min (Teams), $0.17/min (Enterprise)." },
        },
        {
          "@type": "Question",
          name: "Does Callengo offer annual billing discounts?",
          acceptedAnswer: { "@type": "Answer", text: "Yes! Annual billing saves 12%, equivalent to 2 months free. For example, the Business plan goes from $299/mo to $263/mo when billed annually." },
        },
        {
          "@type": "Question",
          name: "Which CRM integrations are included in Callengo?",
          acceptedAnswer: { "@type": "Answer", text: "Core integrations (Google Calendar, Meet, Zoom, Stripe, Sheets) are included on all plans. CRM integrations like HubSpot, Pipedrive, Salesforce, Zoho, and Dynamics 365 are available on higher-tier plans." },
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
