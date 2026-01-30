import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Validation",
  description:
    "Stop wasting time on outdated contacts. Callengo validates phone numbers, emails, and addresses so your CRM stays accurate and your team stays productive.",
  openGraph: {
    title: "Data Validation - Callengo",
    description:
      "Keep your CRM data accurate. Validate contact information automatically and improve campaign effectiveness.",
  },
};

export default function DataValidationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
