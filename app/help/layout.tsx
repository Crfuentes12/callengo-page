import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center",
  description:
    "Find answers to common questions, get support, and learn how to get the most out of Callengo.",
  openGraph: {
    title: "Callengo Help Center",
    description:
      "Get help with Callengo. FAQs, support channels, and resources to solve any issue.",
  },
};

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
