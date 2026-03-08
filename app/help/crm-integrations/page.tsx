"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  ChevronRight,
  Database,
  Zap,
  Code,
  ArrowRight,
  Check,
  Calendar,
  Video,
  MessageSquare,
  Shield,
} from "lucide-react";

const integrationCategories = [
  {
    title: "CRM Integrations",
    icon: Database,
    integrations: [
      {
        name: "HubSpot",
        description: "Bi-directional sync with contacts, deals, and custom properties. Automatic activity logging from call outcomes.",
        auth: "OAuth 2.0",
        features: ["Contact sync", "Deal management", "Activity logging", "Custom properties"],
      },
      {
        name: "Salesforce",
        description: "Full lead, contact, and opportunity management. Custom object support with real-time sync.",
        auth: "OAuth 2.0",
        features: ["Lead management", "Opportunity tracking", "Custom objects", "Real-time sync"],
      },
    ],
  },
  {
    title: "Calendar Integrations",
    icon: Calendar,
    integrations: [
      {
        name: "Google Calendar",
        description: "Bi-directional calendar sync with automatic timezone handling and real-time event management.",
        auth: "OAuth 2.0",
        features: ["Event sync", "Timezone handling", "Real-time updates", "Availability checking"],
      },
      {
        name: "Microsoft Outlook",
        description: "Exchange Online support with calendar event management and meeting scheduling.",
        auth: "OAuth 2.0",
        features: ["Calendar sync", "Meeting scheduling", "Exchange support", "Event management"],
      },
      {
        name: "Calendly",
        description: "Event type mapping with automatic booking from call outcomes and availability checking.",
        auth: "OAuth 2.0",
        features: ["Event mapping", "Auto booking", "Availability sync", "Webhook triggers"],
      },
      {
        name: "SimplyBook.me",
        description: "Appointment booking with service mapping and staff assignment capabilities.",
        auth: "REST API",
        features: ["Appointment booking", "Service mapping", "Staff assignment", "Availability sync"],
      },
    ],
  },
  {
    title: "Video Conferencing",
    icon: Video,
    integrations: [
      {
        name: "Zoom",
        description: "Automatic meeting link generation with calendar integration and recording support.",
        auth: "OAuth 2.0",
        features: ["Meeting creation", "Link generation", "Calendar sync", "Recording support"],
      },
      {
        name: "Google Meet",
        description: "Google Workspace integration with instant meeting creation and calendar sync.",
        auth: "OAuth 2.0",
        features: ["Instant meetings", "Calendar sync", "Workspace integration", "Link sharing"],
      },
      {
        name: "Microsoft Teams",
        description: "Teams meeting scheduling with channel notifications and presence detection.",
        auth: "OAuth 2.0",
        features: ["Meeting scheduling", "Channel notifications", "Presence detection", "Calendar sync"],
      },
    ],
  },
  {
    title: "Communication",
    icon: MessageSquare,
    integrations: [
      {
        name: "Twilio",
        description: "SMS notifications, call forwarding, and enhanced voice capabilities.",
        auth: "API Key",
        features: ["SMS notifications", "Call forwarding", "Voice capabilities", "Number management"],
      },
      {
        name: "SendGrid",
        description: "Transactional emails, follow-up sequences, and template management.",
        auth: "API Key",
        features: ["Email delivery", "Follow-up sequences", "Template management", "Analytics"],
      },
      {
        name: "WhatsApp Business",
        description: "Message templates, follow-up messaging, and media support via Meta platform.",
        auth: "OAuth 2.0",
        features: ["Message templates", "Follow-up messages", "Media support", "Business profiles"],
      },
      {
        name: "Slack",
        description: "Channel notifications, call summaries, team alerts, and workflow triggers.",
        auth: "OAuth 2.0",
        features: ["Channel notifications", "Call summaries", "Team alerts", "Workflow triggers"],
      },
    ],
  },
];

const developerTools = [
  {
    title: "Webhooks",
    description:
      "Receive real-time notifications for 12 event types including call completions, campaign updates, and data changes. Secured with HMAC-SHA256 signing.",
    icon: Zap,
  },
  {
    title: "REST API",
    description:
      "Full API access for developers to integrate Callengo with any system. Available on Teams and Enterprise plans.",
    icon: Code,
  },
  {
    title: "Security",
    description:
      "All integrations use OAuth 2.0 or API key authentication. Data is encrypted in transit and at rest.",
    icon: Shield,
  },
];

export default function CRMIntegrationsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="gradient-bg text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/help"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                Back to Help Center
              </Link>
              <h1 className="text-display-sm mb-6">Integrations Guide</h1>
              <p className="text-xl text-white/80 max-w-2xl">
                Callengo connects with your existing tools through 16+ native integrations
                across CRM, calendar, video conferencing, and communication platforms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Developer Tools */}
        <section className="section">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Developer Tools</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                {developerTools.map((tool, index) => (
                  <motion.div
                    key={tool.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl border border-slate-200 p-6"
                  >
                    <div className="w-12 h-12 rounded-xl gradient-bg-subtle flex items-center justify-center mb-4">
                      <tool.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{tool.title}</h3>
                    <p className="text-slate-600 text-sm">{tool.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Integration Categories */}
        {integrationCategories.map((category, catIndex) => (
          <section
            key={category.title}
            className={catIndex % 2 === 0 ? "section surface-arctic" : "section"}
          >
            <div className="max-w-4xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-2">
                  <category.icon className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-4">
                {category.integrations.map((integration, index) => (
                  <motion.div
                    key={integration.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-2xl border border-slate-200 p-6"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-lg">{integration.name}</h3>
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
                        {integration.auth}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm mb-4">{integration.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {integration.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600"
                        >
                          <Check className="w-3 h-3 text-accent" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="section">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="gradient-bg rounded-3xl p-12 text-center text-white"
            >
              <h2 className="text-3xl font-bold mb-4">
                Ready to connect your tools?
              </h2>
              <p className="text-white/80 mb-8 max-w-lg mx-auto">
                Start your free trial and connect Callengo with your existing CRM,
                calendar, and communication tools in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-colors"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/docs/integrations"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
                >
                  View All Integrations
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
