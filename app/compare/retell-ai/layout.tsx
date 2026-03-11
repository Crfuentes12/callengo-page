import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retell AI",
  description:
    "Callengo vs Retell AI: a detailed comparison for 2026. Retell AI charges $0.055/min for infrastructure, then bills LLM, TTS, and telephony separately, pushing the effective cost to $0.145 per minute and above. See how pricing, setup time, outbound templates, and CRM integrations compare.",
  keywords: [
    "Callengo vs Retell AI",
    "Retell AI alternative",
    "Retell AI pricing 2026",
    "Retell AI review",
    "Retell AI competitors",
    "best Retell AI alternative",
    "AI voice agent comparison",
    "no-code AI calling software",
    "outbound call automation",
    "lead qualification AI agent",
    "appointment confirmation AI",
    "data validation AI agent",
    "Retell AI vs Callengo",
    "AI phone agent platform",
  ],
  openGraph: {
    title: "Callengo vs Retell AI: Full Comparison 2026",
    description:
      "Retell AI is a powerful developer API with sub-second latency. Callengo is a no-code outbound platform with three ready-to-use agents and predictable monthly pricing. Full comparison inside.",
    type: "article",
    locale: "en_US",
    siteName: "Callengo",
    publishedTime: "2026-03-01",
    modifiedTime: "2026-03-11",
    authors: ["Callengo"],
    images: [
      {
        url: "/callengo-logo.png",
        width: 512,
        height: 512,
        alt: "Callengo — AI Phone Agents for Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Callengo vs Retell AI: Full Comparison 2026",
    description:
      "Real pricing, features, integrations, and setup time compared. Which AI voice platform is right for your business team?",
        images: ["/callengo-logo.png"],
  },
  other: {
    "article:published_time": "2026-03-01",
    "article:modified_time": "2026-03-11",
    "article:author": "Callengo",
    "article:section": "Product Comparisons",
    "article:tag": "Retell AI, AI Voice Agents, Comparison, Pricing, Features",
  },
  alternates: {
    canonical: "https://callengo.com/compare/retell-ai",
  },
};

export default function CallengoVsRetellAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
