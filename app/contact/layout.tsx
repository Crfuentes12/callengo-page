import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Callengo. Our team is ready to help you reduce no-shows, improve data quality, and accelerate lead response.",
  openGraph: {
    title: "Contact Callengo",
    description:
      "Have questions? Contact our team to learn how Callengo can help your business.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
