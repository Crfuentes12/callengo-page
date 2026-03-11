import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "Callengo vs %s — Full Comparison | Callengo",
    default: "Compare Callengo — AI Phone Agent Alternatives & Competitors",
  },
  description:
    "Compare Callengo with Bland AI, Vapi, Retell AI, Synthflow, Aircall, and more. See pricing, features, integrations, and setup complexity side by side to find the best AI phone automation platform for your business.",
  keywords: [
    "Callengo alternatives",
    "Callengo vs Bland AI",
    "Callengo vs Vapi",
    "AI voice agent comparison",
    "best AI phone agent platform",
    "Bland AI alternative",
    "Vapi alternative",
    "Retell AI alternative",
    "AI calling software comparison",
    "outbound call automation comparison",
  ],
  openGraph: {
    title: "Compare Callengo — AI Phone Agent Alternatives",
    description:
      "See how Callengo compares to Bland AI, Vapi, Retell AI, and more. No-code setup, three pre-built agents, transparent pricing.",
    type: "website",
    locale: "en_US",
    siteName: "Callengo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare Callengo — AI Phone Agent Alternatives",
    description:
      "Side-by-side comparisons of Callengo vs. the top AI voice automation platforms.",
  },
  alternates: {
    canonical: "https://callengo.com/compare",
  },
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
