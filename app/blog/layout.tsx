import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, strategies, and best practices for reducing no-shows, improving data quality, and accelerating lead response times.",
  openGraph: {
    title: "Callengo Blog",
    description:
      "Expert insights on appointment confirmation, data validation, and lead qualification.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
