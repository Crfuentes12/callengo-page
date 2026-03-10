import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "AI Appointment Confirmation Agent - Reduce No-Shows by 60%",
  description:
    "Callengo's Appointment Confirmation Agent automatically calls patients and clients 24-48 hours before appointments. Confirm, reschedule, or detect cancellations with AI. Reduce no-shows by up to 60%. Integrates with Google Calendar, Outlook, SimplyBook.me, and more.",
  keywords: [
    "appointment confirmation agent",
    "reduce no-shows",
    "automated appointment reminders",
    "AI appointment confirmation",
    "patient reminder calls",
    "no-show reduction",
    "appointment rescheduling AI",
    "calendar confirmation automation",
    "healthcare no-shows",
    "automated patient calls",
    "Callengo appointment confirmation",
    "AI reminder calls",
  ],
  openGraph: {
    title: "AI Appointment Confirmation Agent - Reduce No-Shows by 60%",
    description:
      "Stop losing revenue to no-shows. Callengo confirms appointments automatically, reschedules when needed, and fills your calendar with people who actually show up.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Appointment Confirmation Agent by Callengo",
    description:
      "Reduce no-shows by 60% with automated confirmation calls. AI that confirms, reschedules, and retries.",
  },
  alternates: {
    canonical: "https://callengo.com/agents/appointment-confirmation",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Callengo Appointment Confirmation Agent",
      applicationCategory: "BusinessApplication",
      description:
        "AI phone agent that automatically confirms appointments, handles rescheduling, detects cancellations, and retries no-shows. Reduces no-show rates by up to 60%.",
      operatingSystem: "Web",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "0",
        highPrice: "1499",
        priceCurrency: "USD",
        offerCount: 6,
      },
      featureList: [
        "Automated confirmation calls 24-48h before appointments",
        "Real-time rescheduling during calls",
        "Cancellation detection and slot backfilling",
        "No-show auto-retry",
        "Calendar sync (Google Calendar, Outlook, SimplyBook.me)",
        "Video meeting link generation (Zoom, Meet, Teams)",
        "Multi-attempt outreach with smart timing",
        "Real-time status updates",
      ],
      provider: { "@id": "https://callengo.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://callengo.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "AI Agents",
          item: "https://callengo.com/agents",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Appointment Confirmation",
          item: "https://callengo.com/agents/appointment-confirmation",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much can the Appointment Confirmation Agent reduce no-shows?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Businesses using Callengo's Appointment Confirmation Agent typically see a 40-60% reduction in no-shows. The AI calls contacts 24-48 hours before their appointment, confirms attendance, and handles rescheduling on the spot.",
          },
        },
        {
          "@type": "Question",
          name: "Can the agent reschedule appointments during the call?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. If a contact cannot make their appointment, the AI agent offers available time slots and reschedules directly during the call. The updated appointment is automatically synced to your calendar (Google Calendar, Outlook, or SimplyBook.me).",
          },
        },
        {
          "@type": "Question",
          name: "What happens if the patient doesn't answer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The agent can leave a voicemail and automatically schedule callback attempts. On Growth+ plans, smart retry logic determines the optimal time to call back based on historical answer patterns.",
          },
        },
      ],
    },
  ],
};

export default function AppointmentConfirmationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
