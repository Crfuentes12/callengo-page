import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Callengo Solutions",
    default: "Solutions",
  },
  description:
    "Discover Callengo solutions for appointment confirmation, data validation, and lead qualification.",
};

export default function AgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
