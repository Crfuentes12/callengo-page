import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bland AI",
  description:
    "Callengo vs Bland AI: a detailed, objective comparison for 2026. See pricing plans, per-minute rates, hidden fees, CRM integrations, setup complexity, and ideal use cases. Find out whether Bland AI or Callengo is the right AI phone automation platform for your business team.",
  keywords: [
    "Callengo vs Bland AI",
    "Bland AI alternative",
    "Bland AI pricing 2026",
    "Bland AI review",
    "Bland AI competitors",
    "best Bland AI alternative",
    "AI voice agent comparison",
    "AI phone automation platform",
    "no-code AI calling software",
    "outbound call automation",
    "lead qualification AI",
    "appointment confirmation AI",
    "data validation AI agent",
    "Bland AI features",
    "Bland AI limitations",
  ],
  openGraph: {
    title: "Callengo vs Bland AI — Full Comparison 2026",
    description:
      "Business automation vs. developer infrastructure. A detailed comparison of pricing, features, integrations, and setup experience. Updated March 2026.",
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
    title: "Callengo vs Bland AI — Full Comparison 2026",
    description:
      "Detailed pricing, features, integrations, and setup comparison. Which AI voice platform is right for your business?",
        images: ["/callengo-logo.png"],
  },
  alternates: {
    canonical: "https://callengo.com/compare/bland-ai",
  },
  other: {
    "article:published_time": "2026-03-01",
    "article:modified_time": "2026-03-11",
    "article:author": "Callengo",
    "article:section": "Product Comparisons",
    "article:tag": "Bland AI, AI Voice Agents, Comparison, Pricing, Features",
  },
};

export default function CallengoVsBlandAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
