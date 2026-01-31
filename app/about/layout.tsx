import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Callengo helps businesses stop losing revenue to no-shows, bad data, and unqualified leads. Learn about our mission to help teams focus on what matters.",
  openGraph: {
    title: "About Callengo",
    description:
      "Learn how Callengo helps businesses recover lost revenue and streamline operations.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
