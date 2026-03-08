"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  ChevronRight,
  Database,
  Zap,
  Clock,
  Code,
  ArrowRight,
  Check,
  Bell,
} from "lucide-react";

const crmIntegrations = [
  {
    name: "HubSpot",
    description: "Bi-directional sync with contacts, deals, and custom properties",
    status: "Live",
    plan: "Business+",
  },
  {
    name: "Pipedrive",
    description: "Automate lead qualification and deal updates",
    status: "Live",
    plan: "Business+",
  },
  {
    name: "Salesforce",
    description: "Sync contacts, update records, and trigger campaigns automatically",
    status: "Live",
    plan: "Teams+",
  },
  {
    name: "Zoho CRM",
    description: "Full integration with modules and workflows",
    status: "Live",
    plan: "Teams+",
  },
  {
    name: "Microsoft Dynamics 365",
    description: "Enterprise-grade CRM sync with contacts, leads, and opportunities",
    status: "Live",
    plan: "Teams+",
  },
  {
    name: "Clio",
    description: "Legal practice management integration for client and matter sync",
    status: "Live",
    plan: "Enterprise",
  },
];

const currentCapabilities = [
  {
    title: "CSV/Excel Import & Export",
    description:
      "Import contacts from any system via CSV, Excel, or JSON. Export results back to update your CRM manually.",
    icon: Database,
  },
  {
    title: "Webhooks",
    description:
      "Receive real-time notifications when calls complete. Build custom integrations with your existing tools. Available on Business+ plans.",
    icon: Zap,
  },
  {
    title: "REST API",
    description:
      "Full API access for developers to integrate Callengo with any system. Available on Teams and Enterprise plans.",
    icon: Code,
  },
];

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Foundation",
    status: "Completed",
    items: [
      "Core calling engine",
      "AI analysis and transcription",
      "CSV/Excel import/export",
      "Basic webhooks",
    ],
  },
  {
    phase: "Phase 2",
    title: "Developer Tools",
    status: "Completed",
    items: [
      "Public REST API",
      "Webhook enhancements",
      "API documentation",
      "Developer portal",
    ],
  },
  {
    phase: "Phase 3",
    title: "Native CRM Integrations",
    status: "Completed",
    items: [
      "HubSpot & Pipedrive (Business+)",
      "Salesforce, Zoho CRM & Dynamics 365 (Teams+)",
      "Clio (Enterprise)",
      "Webhooks for custom integrations (Business+)",
    ],
  },
  {
    phase: "Phase 4",
    title: "Enterprise Features",
    status: "In Progress",
    items: [
      "SSO/SAML authentication",
      "Custom integrations",
      "Advanced security",
      "Dedicated infrastructure",
    ],
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
              <h1 className="text-display-sm mb-6">CRM Integrations</h1>
              <p className="text-xl text-white/80 max-w-2xl">
                Native CRM integrations are now live. Connect Callengo directly to
                your favorite CRM and streamline your workflows.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Current Status */}
        <section className="section">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-accent/10 border border-green-200 rounded-2xl p-8 mb-12"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-accent-dark" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">CRM Integrations Are Live</h2>
                  <p className="text-foreground-secondary mb-4">
                    Native CRM integrations are now available across our Business, Teams, and
                    Enterprise plans. Connect Callengo directly to HubSpot, Pipedrive,
                    Salesforce, Zoho CRM, Microsoft Dynamics 365, and Clio.
                  </p>
                  <p className="text-foreground-secondary">
                    Need a custom integration? Webhooks are available on Business+ plans,
                    allowing you to build tailored workflows with any system. Our REST API
                    is also available for full programmatic access.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Integration Tools</h2>
              <p className="text-lg text-foreground-secondary mb-8">
                In addition to native CRM integrations, connect Callengo to your
                existing tools using these methods.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-16">
                {currentCapabilities.map((capability, index) => (
                  <motion.div
                    key={capability.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl border border-border p-6"
                  >
                    <div className="w-12 h-12 rounded-xl bg-background-tertiary flex items-center justify-center mb-4">
                      <capability.icon className="w-6 h-6 text-foreground-secondary" />
                    </div>
                    <h3 className="font-semibold mb-2">{capability.title}</h3>
                    <p className="text-foreground-secondary text-sm">{capability.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Planned Integrations */}
        <section className="section bg-background-secondary">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Available CRM Integrations</h2>
              <p className="text-lg text-foreground-secondary">
                Native integrations are live and ready to use. Each integration is
                available on the plans listed below.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {crmIntegrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl border border-border p-6"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold">{integration.name}</h3>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                      {integration.status}
                    </span>
                  </div>
                  <p className="text-foreground-secondary text-sm mb-3">{integration.description}</p>
                  <p className="text-xs text-foreground-tertiary">Available on: {integration.plan}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="section">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Integration Roadmap</h2>
              <p className="text-lg text-foreground-secondary">
                Our development roadmap for integrations and connectivity features.
              </p>
            </motion.div>

            <div className="space-y-6">
              {roadmapPhases.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-2xl border p-8 ${
                    phase.status === "Completed"
                      ? "bg-accent/10 border-green-200"
                      : phase.status === "In Progress"
                      ? "bg-secondary/10 border-blue-200"
                      : "bg-white border-border"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-sm font-bold text-foreground-tertiary">
                        {phase.phase}
                      </span>
                      <h3 className="text-xl font-bold">{phase.title}</h3>
                    </div>
                    <span
                      className={`px-3 py-1 text-sm font-medium rounded-full ${
                        phase.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : phase.status === "In Progress"
                          ? "bg-blue-100 text-blue-700"
                          : phase.status === "Coming Soon"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-background-tertiary text-foreground-secondary"
                      }`}
                    >
                      {phase.status}
                    </span>
                  </div>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-foreground-secondary"
                      >
                        <Check
                          className={`w-4 h-4 ${
                            phase.status === "Completed"
                              ? "text-accent-dark"
                              : "text-foreground-tertiary"
                          }`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Request Integration */}
        <section className="section bg-background-secondary">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Bell className="w-12 h-12 text-foreground-tertiary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Need a Specific Integration?</h2>
              <p className="text-lg text-foreground-secondary mb-8 max-w-xl mx-auto">
                We prioritize integrations based on customer demand. Let us know what
                tools you need to connect, and we'll factor it into our roadmap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-semibold rounded-full hover:bg-dark-light transition-colors"
                >
                  Request an Integration
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex items-center justify-center px-8 py-4 border border-border bg-white text-foreground font-semibold rounded-full hover:bg-background-secondary transition-colors"
                >
                  View API Documentation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

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
                Start using Callengo today
              </h2>
              <p className="text-white/80 mb-8 max-w-lg mx-auto">
                Connect your CRM and start automating your calls right away.
                Native integrations are ready to go on Business+ plans and above.
              </p>
              <Link
                href="https://app.callengo.com/auth/signup"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
