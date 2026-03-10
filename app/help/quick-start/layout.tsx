import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quick Start Guide - Get Started with Callengo in 5 Minutes",
  description:
    "Step-by-step guide to set up your first Callengo AI phone campaign. Create your account, import contacts, configure an agent, make your first test call, and launch a campaign in minutes.",
  keywords: [
    "Callengo quick start",
    "Callengo setup guide",
    "how to use Callengo",
    "AI phone agent setup",
    "first campaign setup",
    "Callengo getting started",
    "import contacts Callengo",
    "configure AI agent",
    "launch calling campaign",
  ],
  openGraph: {
    title: "Quick Start Guide - Get Started with Callengo in 5 Minutes",
    description:
      "From signup to your first AI phone campaign in 5 minutes. Step-by-step onboarding guide.",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Callengo Quick Start Guide",
    description: "Set up your first AI phone campaign in 5 minutes.",
  },
  alternates: {
    canonical: "https://callengo.com/help/quick-start",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "@id": "https://callengo.com/help/quick-start",
      url: "https://callengo.com/help/quick-start",
      name: "How to Get Started with Callengo AI Phone Agents",
      description:
        "Step-by-step guide to create your account, import contacts, configure an AI agent, and launch your first calling campaign.",
      totalTime: "PT5M",
      step: [
        { "@type": "HowToStep", position: 1, name: "Create Your Account", text: "Sign up with your email and verify your account. You get 15 free minutes with no credit card required." },
        { "@type": "HowToStep", position: 2, name: "Import Your Contacts", text: "Upload contacts via CSV, Google Sheets, or enter them manually. Map fields like name, phone, email." },
        { "@type": "HowToStep", position: 3, name: "Select an AI Agent", text: "Choose from Data Validation, Appointment Confirmation, or Lead Qualification agents." },
        { "@type": "HowToStep", position: 4, name: "Configure Your Campaign", text: "Set the call script, voice, schedule, and campaign parameters." },
        { "@type": "HowToStep", position: 5, name: "Make a Test Call", text: "Run a test call to your own phone to hear the AI agent in action." },
        { "@type": "HowToStep", position: 6, name: "Launch Your Campaign", text: "Go live. Monitor results in the real-time dashboard." },
      ],
      publisher: { "@id": "https://callengo.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://callengo.com" },
        { "@type": "ListItem", position: 2, name: "Help Center", item: "https://callengo.com/help" },
        { "@type": "ListItem", position: 3, name: "Quick Start", item: "https://callengo.com/help/quick-start" },
      ],
    },
  ],
};

export default function QuickStartLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
