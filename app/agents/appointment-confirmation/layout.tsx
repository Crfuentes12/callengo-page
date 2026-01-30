import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Appointment Confirmation",
  description:
    "Reduce no-shows by up to 60%. Callengo confirms appointments automatically, reschedules when needed, and fills your calendar with people who actually show up.",
  openGraph: {
    title: "Appointment Confirmation - Callengo",
    description:
      "Stop losing revenue to no-shows. Automated appointment confirmation that actually works.",
  },
};

export default function AppointmentConfirmationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
