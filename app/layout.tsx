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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
