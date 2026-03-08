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
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
