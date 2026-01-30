import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Legal information about Callengo services including privacy policy and terms of service.",
  openGraph: {
    title: "Legal - Callengo",
    description:
      "Important legal information about using Callengo services.",
  },
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
