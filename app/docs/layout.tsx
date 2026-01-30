import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Everything you need to get started with Callengo. Guides, API reference, integrations, and best practices.",
  openGraph: {
    title: "Callengo Documentation",
    description:
      "Complete documentation for setting up and using Callengo to automate your calling campaigns.",
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
