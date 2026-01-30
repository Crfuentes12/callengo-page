import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lead Qualification",
  description:
    "Respond to leads in minutes, not hours. Callengo qualifies leads instantly, scores them based on your criteria, and routes hot prospects to your sales team.",
  openGraph: {
    title: "Lead Qualification - Callengo",
    description:
      "Qualify leads faster. Instant response, intelligent scoring, and seamless handoff to your sales team.",
  },
};

export default function LeadQualificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
