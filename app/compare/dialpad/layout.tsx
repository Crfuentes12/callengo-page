import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dialpad",
  description:
    "Callengo vs Dialpad: a detailed comparison for 2026. Dialpad is a cloud phone system with AI transcription and coaching starting at $15 per user per month. Callengo is an autonomous outbound AI platform. See how their pricing models, use cases, and CRM integrations compare.",
  keywords: [
    "Callengo vs Dialpad",
    "Dialpad alternative",
    "Dialpad pricing 2026",
    "Dialpad review",
    "Dialpad competitors",
    "AI calling platform vs cloud phone system",
    "outbound AI agents vs dialpad",
    "autonomous outbound calling software",
    "lead qualification AI vs Dialpad",
    "Dialpad vs Callengo",
    "AI phone agent for sales teams",
    "replace Dialpad with AI",
  ],
  openGraph: {
    title: "Callengo vs Dialpad: Full Comparison 2026",
    description:
      "Dialpad helps human reps communicate better. Callengo runs outbound call campaigns without any human on the line. Full comparison of pricing models, use cases, and CRM integrations.",
    type: "article",
    locale: "en_US",
    siteName: "Callengo",
    publishedTime: "2026-03-01",
    modifiedTime: "2026-03-11",
    authors: ["Callengo"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Callengo vs Dialpad: Full Comparison 2026",
    description:
      "Per-user cloud phone system vs per-minute autonomous AI agents. Which model fits your outbound workflow?",
  },
  alternates: {
    canonical: "https://callengo.com/compare/dialpad",
  },
};

export default function CallengoVsDialpadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
