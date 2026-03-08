import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Callengo - Stop No-Shows. Fix Bad Data. Close More Deals.",
    template: "%s | Callengo",
  },
  description:
    "Stop losing revenue to no-shows, bad data, and unqualified leads. Callengo automates appointment confirmations, data validation, and lead qualification so your team can focus on closing deals.",
  keywords: [
    "reduce no-shows",
    "appointment confirmation",
    "data validation",
    "lead qualification",
    "automated phone calls",
    "CRM data quality",
    "sales automation",
    "appointment reminders",
    "AI phone calls",
    "calendar integrations",
  ],
  authors: [{ name: "Callengo" }],
  creator: "Callengo",
  metadataBase: new URL("https://callengo.com"),
  openGraph: {
    title: "Callengo - Stop No-Shows. Fix Bad Data. Close More Deals.",
    description:
      "Stop losing revenue to no-shows, bad data, and unqualified leads. Let your team focus on closing deals.",
    type: "website",
    locale: "en_US",
    siteName: "Callengo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Callengo - Stop No-Shows. Fix Bad Data. Close More Deals.",
    description:
      "Stop losing revenue to no-shows, bad data, and unqualified leads. Let your team focus on closing deals.",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
