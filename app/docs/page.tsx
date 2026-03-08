"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Book,
  Code,
  Zap,
  Settings,
  Webhook,
  Shield,
  ArrowRight,
  Phone,
  Database,
  Calendar,
  Users,
  BarChart3,
  FileText,
  Upload,
  Download,
  Clock,
  Check,
  Volume2,
  ChevronRight,
  Link as LinkIcon,
} from "lucide-react";

const docCategories = [
  {
    title: "Getting Started",
    description: "Learn the basics and set up your first campaign in minutes.",
    icon: Zap,
    articles: [
      { title: "Quick Start Guide", href: "/help/quick-start" },
      { title: "Creating Your First Campaign", href: "#first-campaign" },
      { title: "Understanding Call Results", href: "#call-results" },
      { title: "Best Practices", href: "#best-practices" },
    ],
  },
  {
    title: "Agent Configuration",
    description: "Configure and customize your calling agents for optimal results.",
    icon: Settings,
    articles: [
      { title: "Agent Types Overview", href: "#agent-types" },
      { title: "Script Customization", href: "#scripts" },
      { title: "Voice and Language Settings", href: "#voice-settings" },
      { title: "Call Scheduling", href: "#scheduling" },
    ],
  },
  {
    title: "Data Management",
    description: "Import, export, and manage your contact data effectively.",
    icon: Book,
    articles: [
      { title: "Importing Contacts", href: "#importing" },
      { title: "Data Formats", href: "#data-formats" },
      { title: "Field Mapping", href: "#field-mapping" },
      { title: "Export Results", href: "#export" },
    ],
  },
  {
    title: "Data Export",
    description: "Export your data and connect with your existing tools.",
    icon: Webhook,
    articles: [
      { title: "CRM Integrations", href: "/help/crm-integrations" },
      { title: "CSV/Excel Export", href: "#export" },
      { title: "Webhooks & Automations", href: "#webhooks" },
      { title: "Custom Workflows", href: "#custom-integrations" },
    ],
  },
  {
    title: "Integrations",
    description: "Connect Callengo with your calendar, CRM, video, and communication tools.",
    icon: Zap,
    articles: [
      { title: "All Integrations", href: "/docs/integrations" },
      { title: "Calendar Sync", href: "/docs/integrations#calendar" },
      { title: "CRM Connections", href: "/docs/integrations#crm" },
      { title: "Webhooks", href: "/docs/integrations#webhooks" },
    ],
  },
  {
    title: "Analytics & Reporting",
    description: "Understand your call performance and extract insights.",
    icon: BarChart3,
    articles: [
      { title: "Dashboard Overview", href: "#dashboard" },
      { title: "Call Analytics", href: "#analytics" },
      { title: "AI Analysis", href: "#ai-analysis" },
      { title: "Exporting Reports", href: "#reports" },
    ],
  },
  {
    title: "Security & Compliance",
    description: "Learn about our security practices and compliance certifications.",
    icon: Shield,
    articles: [
      { title: "Data Security", href: "#security" },
      { title: "TCPA Compliance", href: "#tcpa" },
      { title: "GDPR", href: "#gdpr" },
      { title: "Do-Not-Call Lists", href: "#dnc" },
    ],
  },
];

const agents = [
  {
    title: "Data Validation Agent",
    slug: "data-validation",
    icon: Database,
    description: "Verify and update contact information in your database",
    capabilities: [
      "Phone number verification",
      "Email validation and updates",
      "Address confirmation",
      "Business status verification",
      "Decision maker identification",
      "Automatic follow-ups for no-answers",
    ],
    outcomes: [
      "Fully Verified",
      "Research Needed",
      "No Answer",
      "Wrong Number",
      "Number Disconnected",
      "Voicemail Left",
      "For Callback",
    ],
  },
  {
    title: "Appointment Confirmation Agent",
    slug: "appointment-confirmation",
    icon: Calendar,
    description: "Reduce no-shows by confirming appointments automatically",
    capabilities: [
      "24-48 hour advance confirmation calls",
      "Rescheduling support during the call",
      "Cancellation handling",
      "Multi-attempt outreach",
      "Calendar synchronization",
      "Custom confirmation scripts",
    ],
    outcomes: [
      "Confirmed",
      "Rescheduled",
      "Cancelled",
      "No Answer",
      "Voicemail Left",
      "Callback Requested",
    ],
  },
  {
    title: "Lead Qualification Agent",
    slug: "lead-qualification",
    icon: Zap,
    description: "Score and rank leads so your team focuses on buyers, not browsers",
    capabilities: [
      "BANT qualification methodology",
      "Custom qualification questions",
      "Lead scoring and ranking (0-100)",
      "Hot/warm/cold lead classification",
      "CRM updates with scores and notes",
      "Warm handoff for high-score leads",
    ],
    outcomes: [
      "Hot Lead (80-100)",
      "Warm Lead (50-79)",
      "Cold Lead (0-49)",
      "Callback Requested",
      "No Answer",
      "Not Interested",
    ],
  },
];

const voiceCategories = [
  { language: "American English", count: 30, popular: ["Maya", "Ryan", "Nat", "Mason", "Jane"] },
  { language: "British English", count: 22, popular: ["Alice", "Emily", "Oscar", "Sophie", "Lucas"] },
  { language: "Australian English", count: 7, popular: ["Charlotte", "Jack"] },
  { language: "Spanish", count: 4, popular: ["Helena", "Rosa", "Mariam"] },
  { language: "French", count: 7, popular: ["Juliette", "Pierre", "Anna"] },
  { language: "German", count: 2, popular: ["Hans", "Klaus"] },
];

const importFormats = [
  { format: "CSV", extension: ".csv", description: "Comma-separated values, most common format" },
  { format: "Excel", extension: ".xlsx, .xls", description: "Microsoft Excel spreadsheets" },
];

const exportFormats = [
  { format: "CSV", extension: ".csv", description: "Export call results and contact data" },
  { format: "Excel", extension: ".xlsx", description: "Export with formatting and multiple sheets" },
];

const contactFields = [
  { field: "company_name", description: "Business or organization name", required: false },
  { field: "phone_number", description: "Phone number to call (auto-normalized)", required: true },
  { field: "contact_name", description: "Name of the person to contact", required: false },
  { field: "email", description: "Email address", required: false },
  { field: "address", description: "Street address", required: false },
  { field: "city", description: "City name", required: false },
  { field: "state", description: "State or province", required: false },
  { field: "zip_code", description: "Postal or ZIP code", required: false },
  { field: "tags", description: "Custom tags for segmentation", required: false },
  { field: "custom_fields", description: "Any additional custom fields", required: false },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    minutes: "15 (one-time)",
    agents: "1",
    users: "1",
    maxDuration: "3 min",
    overage: "N/A",
  },
  {
    name: "Starter",
    price: "$99/mo",
    minutes: "300/month",
    agents: "2",
    users: "1",
    maxDuration: "5 min",
    overage: "$0.45/min",
  },
  {
    name: "Growth",
    price: "$179/mo",
    minutes: "600/month",
    agents: "5",
    users: "2",
    maxDuration: "7 min",
    overage: "$0.38/min",
  },
  {
    name: "Business",
    price: "$299/mo",
    minutes: "1,200/month",
    agents: "Unlimited",
    users: "5",
    maxDuration: "10 min",
    overage: "$0.32/min",
    popular: true,
  },
  {
    name: "Teams",
    price: "$649/mo",
    minutes: "2,250/month",
    agents: "Unlimited",
    users: "10 ($69/extra)",
    maxDuration: "15 min",
    overage: "$0.28/min",
  },
  {
    name: "Enterprise",
    price: "From $1,499+/mo",
    minutes: "6,000/month",
    agents: "Unlimited",
    users: "Unlimited",
    maxDuration: "30 min",
    overage: "Custom",
  },
];

const automationTools = [
  {
    name: "Zapier",
    description: "Connect Callengo webhook to 5,000+ apps",
    icon: Zap,
  },
  {
    name: "Make (Integromat)",
    description: "Build complex automation workflows",
    icon: LinkIcon,
  },
  {
    name: "n8n",
    description: "Self-hosted automation with full control",
    icon: Code,
  },
];

export default function DocsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="gradient-bg text-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-display-sm mb-6">Documentation</h1>
              <p className="text-xl text-white/80">
                Complete reference guide for Callengo. Learn how to set up, configure, and
                optimize your AI-powered calling campaigns.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-6">Quick Navigation</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {docCategories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                    className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                      <category.icon className="w-6 h-6 text-slate-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                    <p className="text-slate-600 text-sm mb-4">{category.description}</p>
                    <ul className="space-y-2">
                      {category.articles.map((article) => (
                        <li key={article.title}>
                          <Link
                            href={article.href}
                            className="text-sm text-slate-600 hover:text-slate-900 hover:underline flex items-center gap-1 group"
                          >
                            <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                            {article.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Agent Types */}
        <section id="agent-types" className="section bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">AI Agent Types</h2>
              <p className="text-lg text-slate-600 max-w-3xl">
                Callengo offers three specialized AI agents, each designed to solve a specific
                business problem. Choose the agent that matches your primary use case.
              </p>
            </motion.div>

            <div className="space-y-8">
              {agents.map((agent, index) => (
                <motion.div
                  key={agent.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-slate-200 p-8"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                      <agent.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{agent.title}</h3>
                      <p className="text-slate-600 mb-6">{agent.description}</p>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold mb-3">Capabilities</h4>
                          <ul className="space-y-2">
                            {agent.capabilities.map((cap) => (
                              <li key={cap} className="flex items-start gap-2 text-sm text-slate-600">
                                <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                {cap}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Call Outcomes</h4>
                          <div className="flex flex-wrap gap-2">
                            {agent.outcomes.map((outcome) => (
                              <span
                                key={outcome}
                                className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full"
                              >
                                {outcome}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <Link
                          href={`/agents/${agent.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:underline"
                        >
                          Learn more about this agent
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Voice Library */}
        <section id="voice-settings" className="section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <Volume2 className="w-8 h-8 text-slate-600" />
                <h2 className="text-3xl font-bold">Voice Library</h2>
              </div>
              <p className="text-lg text-slate-600 max-w-3xl">
                Choose from 77+ professional AI voices across multiple languages and accents.
                Each voice is designed to sound natural and professional.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {voiceCategories.map((category, index) => (
                <motion.div
                  key={category.language}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl border border-slate-200 p-6"
                >
                  <h3 className="font-semibold mb-2">{category.language}</h3>
                  <p className="text-sm text-slate-500 mb-4">{category.count} voices available</p>
                  <div className="flex flex-wrap gap-2">
                    {category.popular.map((voice) => (
                      <span
                        key={voice}
                        className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                      >
                        {voice}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 bg-slate-50 rounded-2xl p-6"
            >
              <h4 className="font-semibold mb-2">Background Audio</h4>
              <p className="text-slate-600 text-sm">
                All calls include subtle office background sounds to create a natural, professional
                atmosphere. This increases trust and reduces the perception of talking to a robot.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Data Import & Export */}
        <section id="data-formats" className="section bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <Upload className="w-8 h-8 text-slate-600" />
                <h2 className="text-3xl font-bold">Data Import & Export</h2>
              </div>
              <p className="text-lg text-slate-600 max-w-3xl">
                Import contacts using CSV or Excel files. Callengo automatically normalizes phone
                numbers, removes duplicates, and maps fields. Export your call results in the same
                formats.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-slate-200 p-8"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Upload className="w-5 h-5 text-slate-600" />
                  <h3 className="text-xl font-bold">Import Formats</h3>
                </div>
                <div className="space-y-4">
                  {importFormats.map((format) => (
                    <div key={format.format} className="flex items-start gap-4">
                      <div className="w-16 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-slate-600">{format.format}</span>
                      </div>
                      <div>
                        <p className="font-medium">{format.extension}</p>
                        <p className="text-sm text-slate-600">{format.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="bg-white rounded-2xl border border-slate-200 p-8"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Download className="w-5 h-5 text-slate-600" />
                  <h3 className="text-xl font-bold">Export Formats</h3>
                </div>
                <div className="space-y-4">
                  {exportFormats.map((format) => (
                    <div key={format.format} className="flex items-start gap-4">
                      <div className="w-16 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-slate-600">{format.format}</span>
                      </div>
                      <div>
                        <p className="font-medium">{format.extension}</p>
                        <p className="text-sm text-slate-600">{format.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl border border-slate-200 p-8 lg:row-span-1"
              >
                <h3 className="text-xl font-bold mb-6">Contact Fields</h3>
                <div className="space-y-3">
                  {contactFields.map((field) => (
                    <div key={field.field} className="flex items-start justify-between gap-4">
                      <div>
                        <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                          {field.field}
                        </code>
                        <p className="text-sm text-slate-600 mt-1">{field.description}</p>
                      </div>
                      {field.required && (
                        <span className="text-xs text-red-600 font-medium flex-shrink-0">Required</span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Plans Reference */}
        <section id="plans" className="section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-slate-600" />
                <h2 className="text-3xl font-bold">Plans & Limits</h2>
              </div>
              <p className="text-lg text-slate-600 max-w-3xl">
                Reference table for plan limits and features. See the{" "}
                <Link href="/pricing" className="underline hover:text-slate-900">
                  pricing page
                </Link>{" "}
                for full details.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="text-left px-6 py-4 font-semibold">Plan</th>
                      <th className="text-left px-6 py-4 font-semibold">Price</th>
                      <th className="text-left px-6 py-4 font-semibold">Minutes</th>
                      <th className="text-left px-6 py-4 font-semibold">Agents</th>
                      <th className="text-left px-6 py-4 font-semibold">Users</th>
                      <th className="text-left px-6 py-4 font-semibold">Max Duration</th>
                      <th className="text-left px-6 py-4 font-semibold">Overage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plans.map((plan) => (
                      <tr
                        key={plan.name}
                        className={`border-b border-slate-100 ${
                          plan.popular ? "bg-blue-50" : ""
                        }`}
                      >
                        <td className="px-6 py-4 font-medium">
                          {plan.name}
                          {plan.popular && (
                            <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                              Popular
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4">{plan.price}</td>
                        <td className="px-6 py-4">{plan.minutes}</td>
                        <td className="px-6 py-4">{plan.agents}</td>
                        <td className="px-6 py-4">{plan.users}</td>
                        <td className="px-6 py-4">{plan.maxDuration}</td>
                        <td className="px-6 py-4">{plan.overage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Webhooks & Automations */}
        <section id="webhooks" className="section bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <Webhook className="w-8 h-8 text-slate-600" />
                <h2 className="text-3xl font-bold">Webhooks & Automations</h2>
              </div>
              <p className="text-lg text-slate-600 max-w-3xl">
                Callengo sends a webhook POST request to your configured URL when a call completes,
                allowing you to automate workflows with your favorite tools. Available on Business
                plans and above.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-slate-200 p-8"
              >
                <h3 className="text-xl font-bold mb-4">Webhook Payload</h3>
                <p className="text-slate-600 mb-6">
                  When a call completes, Callengo sends a POST request to the webhook URL you
                  configure in your dashboard. The payload includes all call data, transcripts,
                  and AI analysis results.
                </p>
                <div className="bg-slate-900 rounded-xl p-4 text-sm font-mono text-slate-300 overflow-x-auto">
                  <pre>{`POST /your-webhook-url
{
  "call_id": "uuid",
  "status": "completed",
  "call_length": 180,
  "answered_by": "human",
  "recording_url": "https://...",
  "transcripts": [...],
  "analysis": {
    "outcome": "Verified",
    "extractedData": {...},
    "sentiment": "positive"
  }
}`}</pre>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl border border-slate-200 p-8"
              >
                <h3 className="text-xl font-bold mb-4">Automation Tools</h3>
                <p className="text-slate-600 mb-6">
                  Use Callengo webhooks with popular automation platforms to connect your call
                  results to CRMs, spreadsheets, notifications, and thousands of other apps.
                </p>
                <div className="space-y-4">
                  {automationTools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-start gap-4 p-4 rounded-xl bg-slate-50"
                    >
                      <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                        <tool.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{tool.name}</h4>
                        <p className="text-sm text-slate-600">{tool.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link
                    href="/docs/integrations#webhooks"
                    className="btn-primary inline-flex items-center gap-2 cursor-pointer"
                  >
                    View integration guides
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Help CTA */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="gradient-bg rounded-3xl p-8 md:p-12 text-center text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Need more help?</h3>
              <p className="text-white/70 mb-6 max-w-md mx-auto">
                Our support team is ready to assist you with any questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/help"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold bg-white text-primary rounded-full hover:bg-white/90 transition-colors cursor-pointer"
                >
                  Visit Help Center
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold border border-white/30 text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Contact Support
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
