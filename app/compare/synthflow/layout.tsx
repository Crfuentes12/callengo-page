import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Synthflow",
  description:
    "Callengo vs Synthflow: a detailed comparison for 2026. Synthflow is a no-code voice builder starting at $29/month with component-based billing across voice engine, LLM, and telephony. See how outbound templates, CRM integrations, and predictable pricing compare.",
  keywords: [
    "Callengo vs Synthflow",
    "Synthflow alternative",
    "Synthflow pricing 2026",
    "Synthflow review",
    "Synthflow competitors",
    "best Synthflow alternative",
    "AI voice agent comparison",
    "no-code AI calling platform",
    "outbound call automation",
    "lead qualification AI",
    "appointment confirmation software",
    "Synthflow vs Callengo",
    "AI phone agent for business",
  ],
  openGraph: {
    title: "Callengo vs Synthflow: Full Comparison 2026",
    description:
      "Synthflow is a no-code voice builder for inbound and outbound calls. Callengo ships with three specialized outbound agents and flat monthly pricing. Full comparison of pricing, templates, CRM integrations, and setup time.",
    type: "article",
    locale: "en_US",
    siteName: "Callengo",
    publishedTime: "2026-03-01",
    modifiedTime: "2026-03-11",
    authors: ["Callengo"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Callengo vs Synthflow: Full Comparison 2026",
    description:
      "Real pricing, outbound templates, CRM integrations, and setup time compared. Which AI voice platform fits your business?",
  },
  alternates: {
    canonical: "https://callengo.com/compare/synthflow",
  },
};

export default function CallengoVsSynthflowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
