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

const plannedIntegrations = [
  {
    name: "Salesforce",
    description: "Sync contacts, update records, and trigger campaigns automatically",
    status: "In Development",
    eta: "Q2 2026",
  },
  {
    name: "HubSpot",
    description: "Bi-directional sync with contacts, deals, and custom properties",
    status: "In Development",
    eta: "Q2 2026",
  },
  {
    name: "Pipedrive",
    description: "Automate lead qualification and deal updates",
    status: "Planned",
    eta: "Q3 2026",
  },
  {
    name: "Zoho CRM",
    description: "Full integration with modules and workflows",
    status: "Planned",
    eta: "Q3 2026",
  },
  {
    name: "Google Calendar",
    description: "Sync appointments for automatic confirmation calls",
    status: "In Development",
    eta: "Q2 2026",
  },
  {
    name: "Calendly",
    description: "Trigger confirmation calls for new bookings",
    status: "Planned",
    eta: "Q3 2026",
  },
  {
    name: "Zapier",
    description: "Connect with 5,000+ apps through Zapier automations",
    status: "Planned",
    eta: "Q2 2026",
  },
  {
    name: "Make (Integromat)",
    description: "Advanced workflow automation scenarios",
    status: "Planned",
    eta: "Q3 2026",
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
      "Receive real-time notifications when calls complete. Build custom integrations with your existing tools.",
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
    status: "In Progress",
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
    status: "Coming Soon",
    items: [
      "Salesforce integration",
      "HubSpot integration",
      "Google Calendar sync",
      "Zapier connector",
    ],
  },
  {
    phase: "Phase 4",
    title: "Enterprise Features",
    status: "Planned",
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
                Native CRM integrations are coming soon. Here's what we're building
                and how you can connect Callengo to your tools today.
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
              className="bg-amber-50 border border-amber-200 rounded-2xl p-8 mb-12"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Coming in 2026</h2>
                  <p className="text-slate-600 mb-4">
                    We're actively developing native CRM integrations as part of our product
                    roadmap. Our engineering team is working on Salesforce and HubSpot
                    integrations, with more platforms to follow.
                  </p>
                  <p className="text-slate-600">
                    We're also in the process of securing additional funding to accelerate
                    development and expand our integration ecosystem. If you have specific
                    integration requirements, please reach out to our team.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">What's Available Today</h2>
              <p className="text-lg text-slate-600 mb-8">
                While we build native integrations, you can connect Callengo to your
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
                    className="bg-white rounded-2xl border border-slate-200 p-6"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                      <capability.icon className="w-6 h-6 text-slate-600" />
                    </div>
                    <h3 className="font-semibold mb-2">{capability.title}</h3>
                    <p className="text-slate-600 text-sm">{capability.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Planned Integrations */}
        <section className="section bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Planned Integrations</h2>
              <p className="text-lg text-slate-600">
                Here's what we're building. Timelines are estimates and subject to change
                as we prioritize based on customer demand.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {plannedIntegrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl border border-slate-200 p-6"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold">{integration.name}</h3>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        integration.status === "In Development"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {integration.status}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm mb-3">{integration.description}</p>
                  <p className="text-xs text-slate-400">Expected: {integration.eta}</p>
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
              <p className="text-lg text-slate-600">
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
                      ? "bg-green-50 border-green-200"
                      : phase.status === "In Progress"
                      ? "bg-blue-50 border-blue-200"
                      : "bg-white border-slate-200"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-sm font-bold text-slate-400">
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
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {phase.status}
                    </span>
                  </div>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-slate-600"
                      >
                        <Check
                          className={`w-4 h-4 ${
                            phase.status === "Completed"
                              ? "text-green-600"
                              : "text-slate-400"
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
        <section className="section bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Bell className="w-12 h-12 text-slate-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Need a Specific Integration?</h2>
              <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
                We prioritize integrations based on customer demand. Let us know what
                tools you need to connect, and we'll factor it into our roadmap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors"
                >
                  Request an Integration
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 bg-white text-slate-900 font-semibold rounded-full hover:bg-slate-50 transition-colors"
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
                You don't need to wait for native integrations. Import your contacts via
                CSV and start automating your calls right away.
              </p>
              <Link
                href="/signup"
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
