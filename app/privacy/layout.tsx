import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Callengo collects, uses, and protects your personal information. Your privacy matters to us.",
  openGraph: {
    title: "Privacy Policy - Callengo",
    description:
      "Our commitment to protecting your privacy and personal data.",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
