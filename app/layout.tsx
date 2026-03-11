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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Callengo - AI-Powered Phone Agents for Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Callengo - AI-Powered Phone Agents for Business",
    description:
      "AI phone agents that handle appointment confirmations, data validation, and lead qualification.",
    images: ["/og-image.png"],
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MXFGV52S');`,
          }}
        />
        {/* End Google Tag Manager */}
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
                  legalName: "Callengo",
                  url: "https://callengo.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://callengo.com/callengo-logo.svg",
                    width: 512,
                    height: 512,
                  },
                  image: "https://callengo.com/callengo-logo.svg",
                  description:
                    "Callengo is an AI-powered phone automation platform that automates appointment confirmations, CRM data validation, and lead qualification for businesses. Three purpose-built voice agents that call your contacts, verify data, confirm appointments, and qualify leads at scale.",
                  foundingDate: "2025",
                  founder: {
                    "@type": "Person",
                    name: "Chris Fuentes",
                    jobTitle: "CEO & Founder",
                    sameAs: "https://www.linkedin.com/in/cristopher-fuentes/",
                  },
                  numberOfEmployees: {
                    "@type": "QuantitativeValue",
                    minValue: 2,
                    maxValue: 10,
                  },
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      contactType: "sales",
                      email: "sales@callengo.com",
                      availableLanguage: ["English", "Spanish"],
                    },
                    {
                      "@type": "ContactPoint",
                      contactType: "customer support",
                      email: "support@callengo.com",
                      availableLanguage: ["English", "Spanish"],
                    },
                  ],
                  sameAs: [
                    "https://www.linkedin.com/company/callengo",
                  ],
                  knowsAbout: [
                    "AI Phone Agents",
                    "Appointment Confirmation Automation",
                    "CRM Data Validation",
                    "Lead Qualification",
                    "Voice AI Technology",
                    "Business Process Automation",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://callengo.com/#website",
                  url: "https://callengo.com",
                  name: "Callengo",
                  description:
                    "AI-powered phone agents for appointment confirmations, data validation, and lead qualification.",
                  publisher: {
                    "@id": "https://callengo.com/#organization",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate: "https://callengo.com/help?q={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
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
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MXFGV52S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
