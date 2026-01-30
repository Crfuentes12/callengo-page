import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Callengo - AI-Powered Phone Calls at Scale",
  description:
    "Automate your phone calls with hyper-realistic AI voices. Verify data, confirm appointments, and qualify leads 24/7. The most effective way to scale your outreach.",
  keywords: [
    "AI phone calls",
    "automated calling",
    "lead qualification",
    "appointment confirmation",
    "data validation",
    "AI voice agents",
    "sales automation",
  ],
  authors: [{ name: "Callengo" }],
  openGraph: {
    title: "Callengo - AI-Powered Phone Calls at Scale",
    description:
      "Automate your phone calls with hyper-realistic AI voices. Verify data, confirm appointments, and qualify leads 24/7.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Callengo - AI-Powered Phone Calls at Scale",
    description:
      "Automate your phone calls with hyper-realistic AI voices. Verify data, confirm appointments, and qualify leads 24/7.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
