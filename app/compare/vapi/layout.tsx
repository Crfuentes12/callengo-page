import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vapi",
  description:
    "Callengo vs Vapi: a detailed comparison for 2026. Vapi advertises $0.05/min but the real cost runs $0.30 to $0.33/min when you add STT, LLM, and TTS vendors. See how pricing, setup time, integrations, and outbound use cases compare before you decide.",
  keywords: [
    "Callengo vs Vapi",
    "Vapi alternative",
    "Vapi pricing 2026",
    "Vapi review",
    "Vapi hidden costs",
    "best Vapi alternative",
    "AI voice agent comparison",
    "no-code AI calling software",
    "outbound call automation",
    "lead qualification AI",
    "appointment confirmation AI",
    "Vapi vs Callengo",
    "Vapi competitors",
    "AI phone agent platform",
  ],
  openGraph: {
    title: "Callengo vs Vapi: Full Comparison 2026",
    description:
      "Vapi's $0.05/min rate becomes $0.30+ once you add voice, LLM, and STT vendors. Compare real pricing, features, and setup experience vs Callengo.",
    type: "article",
    locale: "en_US",
    siteName: "Callengo",
    publishedTime: "2026-03-01",
    modifiedTime: "2026-03-11",
    authors: ["Callengo"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Callengo vs Vapi: Full Comparison 2026",
    description:
      "Real pricing, features, integrations, and setup time compared. Which AI voice platform is right for your business team?",
  },
  alternates: {
    canonical: "https://callengo.com/compare/vapi",
  },
};

export default function CallengoVsVapiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
