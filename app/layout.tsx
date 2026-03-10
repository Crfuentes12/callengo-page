import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Callengo - AI-Powered Phone Agents for Business",
    template: "%s | Callengo",
  },
  description:
    "Stop losing revenue to no-shows, bad data, and unqualified leads. Callengo's AI phone agents automate appointment confirmations, data validation, and lead qualification with 16+ integrations.",
  keywords: [
    "AI phone agents",
    "appointment confirmation",
    "data validation",
    "lead qualification",
    "automated phone calls",
    "CRM integration",
    "sales automation",
    "reduce no-shows",
    "voice AI",
    "business automation",
  ],
  authors: [{ name: "Callengo" }],
  creator: "Callengo",
  metadataBase: new URL("https://callengo.com"),
  openGraph: {
    title: "Callengo - AI-Powered Phone Agents for Business",
    description:
      "AI phone agents that handle appointment confirmations, data validation, and lead qualification. 16+ integrations, 77+ voices.",
    type: "website",
    locale: "en_US",
    siteName: "Callengo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Callengo - AI-Powered Phone Agents for Business",
    description:
      "AI phone agents that handle appointment confirmations, data validation, and lead qualification.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://callengo.com/#organization",
                  name: "Callengo",
                  url: "https://callengo.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://callengo.com/callengo-logo.svg",
                  },
                  description:
                    "AI phone agents that automate appointment confirmations, data validation, and lead qualification for businesses.",
                  foundingDate: "2025",
                  founder: {
                    "@type": "Person",
                    name: "Chris Fuentes",
                    jobTitle: "CEO & Founder",
                    sameAs: "https://www.linkedin.com/in/cristopher-fuentes/",
                  },
                  sameAs: [
                    "https://www.linkedin.com/company/callengo",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://callengo.com/#website",
                  url: "https://callengo.com",
                  name: "Callengo",
                  publisher: {
                    "@id": "https://callengo.com/#organization",
                  },
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://callengo.com/#software",
                  name: "Callengo",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web",
                  description:
                    "AI-powered phone automation platform for appointment confirmations, data validation, and lead qualification.",
                  offers: [
                    {
                      "@type": "Offer",
                      name: "Free",
                      price: "0",
                      priceCurrency: "USD",
                    },
                    {
                      "@type": "Offer",
                      name: "Starter",
                      price: "99",
                      priceCurrency: "USD",
                      billingIncrement: "P1M",
                    },
                    {
                      "@type": "Offer",
                      name: "Growth",
                      price: "179",
                      priceCurrency: "USD",
                      billingIncrement: "P1M",
                    },
                    {
                      "@type": "Offer",
                      name: "Business",
                      price: "299",
                      priceCurrency: "USD",
                      billingIncrement: "P1M",
                    },
                    {
                      "@type": "Offer",
                      name: "Teams",
                      price: "649",
                      priceCurrency: "USD",
                      billingIncrement: "P1M",
                    },
                    {
                      "@type": "Offer",
                      name: "Enterprise",
                      price: "1499",
                      priceCurrency: "USD",
                      billingIncrement: "P1M",
                    },
                  ],
                  featureList: [
                    "AI Appointment Confirmation",
                    "AI Data Validation",
                    "AI Lead Qualification",
                    "CRM Integration (Salesforce, HubSpot, Pipedrive, Zoho, Clio, Dynamics 365)",
                    "Calendar Sync (Google Calendar, Outlook)",
                    "Video Meeting Links (Zoom, Google Meet, Teams)",
                    "Slack Notifications",
                    "Webhook Automation",
                    "Multi-language Voice AI",
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
