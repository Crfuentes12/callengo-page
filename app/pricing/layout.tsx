import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for Callengo. Start free, upgrade when you see the ROI. No hidden fees, no surprises.",
  openGraph: {
    title: "Callengo Pricing",
    description:
      "Invest in results, not promises. Simple pricing plans that scale with your business.",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
