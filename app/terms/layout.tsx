import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions for using Callengo services. Please read carefully before using our platform.",
  openGraph: {
    title: "Terms of Service - Callengo",
    description:
      "Terms and conditions governing the use of Callengo services.",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
