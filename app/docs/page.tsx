"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Book,
  Zap,
  Settings,
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
  Megaphone,
  CreditCard,
  Plug,
  PlayCircle,
  Video,
  MessageSquare,
  Grid3X3,
  Workflow,
  ExternalLink,
  Mail,
} from "lucide-react";

/* ─────────────────────────── Sidebar nav ─────────────────────────── */

const sidebarLinks = [
  { label: "Getting Started", href: "#getting-started", icon: PlayCircle },
  { label: "AI Agents", href: "#agents", icon: Zap },
  { label: "Voice Library", href: "#voices", icon: Volume2 },
  { label: "Data Import & Export", href: "#data", icon: Upload },
  { label: "Integrations", href: "#integrations", icon: Plug },
  { label: "Plans & Limits", href: "#plans", icon: CreditCard },
  { label: "Campaign Management", href: "#campaigns", icon: Megaphone },
  { label: "Analytics & Reporting", href: "#analytics", icon: BarChart3 },
];

/* ─────────────────────────── Agent data ──────────────────────────── */

const agents = [
  {
    title: "Data Validation Agent",
    icon: Database,
    description:
      "Verify and update contact information in your database through automated outbound calls. Ideal for keeping CRM data accurate and reducing bounce rates.",
    useCases: [
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
    icon: Calendar,
    description:
      "Reduce no-shows by automatically confirming appointments 24-48 hours in advance. Handles rescheduling and cancellation on the spot.",
    useCases: [
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
    icon: Zap,
    description:
      "Score and rank leads so your team focuses on buyers, not browsers. Uses BANT methodology and custom questions to classify leads automatically.",
    useCases: [
      "BANT qualification methodology",
      "Custom qualification questions",
      "Lead scoring and ranking (0-100)",
      "Hot / warm / cold classification",
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

/* ─────────────────────────── Voice data ──────────────────────────── */

const voiceCategories = [
  { language: "American English", count: 30, popular: ["Maya", "Ryan", "Nat", "Mason", "Jane"] },
  { language: "British English", count: 22, popular: ["Alice", "Emily", "Oscar", "Sophie", "Lucas"] },
  { language: "Australian English", count: 7, popular: ["Charlotte", "Jack"] },
  { language: "Spanish", count: 4, popular: ["Helena", "Rosa", "Mariam"] },
  { language: "French", count: 7, popular: ["Juliette", "Pierre", "Anna"] },
  { language: "German", count: 2, popular: ["Hans", "Klaus"] },
  { language: "Portuguese", count: 3, popular: ["Beatriz", "Miguel"] },
  { language: "Italian", count: 2, popular: ["Giulia", "Marco"] },
];

/* ─────────────────────────── Data formats ────────────────────────── */

const dataFormats = [
  { format: "CSV", extension: ".csv", description: "Comma-separated values — most common format" },
  { format: "Excel", extension: ".xlsx, .xls", description: "Microsoft Excel spreadsheets" },
  { format: "JSON", extension: ".json", description: "JavaScript Object Notation" },
  { format: "XML", extension: ".xml", description: "Extensible Markup Language" },
  { format: "TXT", extension: ".txt", description: "Tab or comma delimited text files" },
];

const contactFields = [
  { field: "phone_number", description: "Phone number to call (auto-normalized)", required: true },
  { field: "contact_name", description: "Name of the person to contact", required: false },
  { field: "company_name", description: "Business or organization name", required: false },
  { field: "email", description: "Email address", required: false },
  { field: "address", description: "Street address", required: false },
  { field: "city", description: "City name", required: false },
  { field: "state", description: "State or province", required: false },
  { field: "zip_code", description: "Postal or ZIP code", required: false },
  { field: "tags", description: "Custom tags for segmentation", required: false },
  { field: "custom_fields", description: "Any additional custom data", required: false },
];

/* ─────────────────────────── Integrations ────────────────────────── */

type Integration = {
  name: string;
  description: string;
  category: string;
  minPlan: string;
  logo: string;
};

const integrations: Integration[] = [
  // Calendar
  { name: "Google Calendar", description: "Sync appointments and availability in real time", category: "Calendar", minPlan: "Starter", logo: "/integrations/calendar.png" },
  { name: "Outlook Calendar", description: "Two-way calendar sync with Microsoft 365", category: "Calendar", minPlan: "Starter", logo: "/integrations/outlook.png" },
  // Video
  { name: "Google Meet", description: "Auto-generate Meet links for confirmed appointments", category: "Video", minPlan: "Starter", logo: "/integrations/meets.png" },
  { name: "Zoom", description: "Create Zoom meetings when appointments are confirmed", category: "Video", minPlan: "Starter", logo: "/integrations/zoom.png" },
  { name: "Microsoft Teams", description: "Schedule Teams meetings from call outcomes", category: "Video", minPlan: "Business", logo: "/integrations/teams.png" },
  // CRM
  { name: "HubSpot", description: "Push call outcomes and lead scores to HubSpot contacts", category: "CRM", minPlan: "Business", logo: "/integrations/hubspot.png" },
  { name: "Pipedrive", description: "Update deals and contacts in Pipedrive automatically", category: "CRM", minPlan: "Business", logo: "/integrations/pipedrive.png" },
  { name: "Zoho CRM", description: "Sync call data and lead status with Zoho CRM", category: "CRM", minPlan: "Business", logo: "/integrations/zoho.png" },
  { name: "Salesforce", description: "Enterprise-grade Salesforce integration with custom field mapping", category: "CRM", minPlan: "Teams", logo: "/integrations/salesforce.png" },
  { name: "Microsoft Dynamics 365", description: "Bi-directional sync with Dynamics 365 entities", category: "CRM", minPlan: "Teams", logo: "/integrations/dynamics.png" },
  { name: "Clio", description: "Legal practice management — sync client and matter data", category: "CRM", minPlan: "Teams", logo: "/integrations/clio.png" },
  // Communication
  { name: "Slack", description: "Get real-time call notifications and summaries in Slack channels", category: "Communication", minPlan: "Starter", logo: "/integrations/slack.png" },
  // Productivity
  { name: "Google Sheets", description: "Export call results directly to Google Sheets", category: "Productivity", minPlan: "Starter", logo: "/integrations/sheets.png" },
  { name: "SimplyBook.me", description: "Sync bookings and availability with SimplyBook.me", category: "Productivity", minPlan: "Business", logo: "/integrations/simplybook.png" },
  { name: "Stripe", description: "Trigger calls based on Stripe payment events", category: "Productivity", minPlan: "Business", logo: "/integrations/stripe.png" },
  // Automation
  { name: "Webhooks", description: "Send real-time POST requests to any URL when calls complete", category: "Automation", minPlan: "Business", logo: "/integrations/webhooks.png" },
];

const integrationCategoryOrder = ["Calendar", "Video", "CRM", "Communication", "Productivity", "Automation"];

const categoryColors: Record<string, string> = {
  Calendar: "bg-blue-100 text-blue-700",
  Video: "bg-purple-100 text-purple-700",
  CRM: "bg-emerald-100 text-emerald-700",
  Communication: "bg-amber-100 text-amber-700",
  Productivity: "bg-pink-100 text-pink-700",
  Automation: "bg-slate-100 text-slate-700",
};

const planBadgeColors: Record<string, string> = {
  Starter: "bg-gray-100 text-gray-700",
  Business: "bg-blue-50 text-blue-700",
  Teams: "bg-indigo-50 text-indigo-700",
  Enterprise: "bg-violet-50 text-violet-700",
};

/* ─────────────────────────── Plans V4 ────────────────────────────── */

const plans = [
  { name: "Free", price: "$0", annual: "$0", minutes: "15 min (one-time)", agents: "1", users: "1", maxCall: "3 min", popular: false },
  { name: "Starter", price: "$99/mo", annual: "$87/mo", minutes: "250/month", agents: "1", users: "1", maxCall: "5 min", popular: false },
  { name: "Growth", price: "$179/mo", annual: "$157/mo", minutes: "500/month", agents: "3", users: "2", maxCall: "7 min", popular: false },
  { name: "Business", price: "$299/mo", annual: "$263/mo", minutes: "1,000/month", agents: "Unlimited", users: "3", maxCall: "10 min", popular: true },
  { name: "Teams", price: "$649/mo", annual: "$571/mo", minutes: "3,000/month", agents: "Unlimited", users: "5 ($79/extra)", maxCall: "15 min", popular: false },
  { name: "Enterprise", price: "Starting $1,499/mo", annual: "Custom", minutes: "Custom", agents: "Unlimited", users: "Custom", maxCall: "Custom", popular: false },
];

const addOns = [
  { name: "Dedicated Number", price: "$15/mo", description: "Your own dedicated phone number for caller ID consistency" },
  { name: "Recording Vault", price: "$12/mo", description: "Extended call recording storage with search and playback" },
  { name: "Calls Booster", price: "$35 / 500 min", description: "Top up calling minutes anytime without changing your plan" },
];

/* ─────────────────────────── Webhook sample ──────────────────────── */

const webhookPayload = `{
  "event": "call.completed",
  "call_id": "clg_8f3a2b1c-d4e5-6789-abcd-ef0123456789",
  "campaign_id": "cmp_a1b2c3d4",
  "status": "completed",
  "call_length_seconds": 142,
  "answered_by": "human",
  "contact": {
    "phone_number": "+14155551234",
    "contact_name": "Jane Smith",
    "company_name": "Acme Corp"
  },
  "analysis": {
    "outcome": "Verified",
    "extracted_data": {
      "email_confirmed": true,
      "new_phone": null,
      "notes": "Contact confirmed all details."
    },
    "sentiment": "positive"
  },
  "recording_url": "https://recordings.callengo.com/clg_8f3a2b1c.mp3",
  "transcript_url": "https://recordings.callengo.com/clg_8f3a2b1c.txt",
  "timestamp": "2026-03-08T14:32:10Z"
}`;

/* ═════════════════════════════════════════════════════════════════════
   COMPONENT
   ═════════════════════════════════════════════════════════════════════ */

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("getting-started");
  const [integrationFilter, setIntegrationFilter] = useState<string>("All");
  const contentRef = useRef<HTMLDivElement>(null);

  // Auto-scroll sidebar based on scroll position
  useEffect(() => {
    const sectionIds = sidebarLinks.map(l => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const filteredIntegrations =
    integrationFilter === "All"
      ? integrations
      : integrations.filter((i) => i.category === integrationFilter);

  return (
    <>
      <Header />
      <main className="relative overflow-hidden" style={{ fontFamily: "var(--font-body)" }}>
        {/* ────────── Hero ────────── */}
        <section className="pt-32 pb-16 relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <Book className="w-5 h-5 text-electric" />
                <span className="text-sm font-medium text-foreground-tertiary uppercase tracking-wider">
                  Documentation
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                Callengo Documentation
              </h1>
              <p className="text-xl text-foreground-secondary leading-relaxed">
                Everything you need to set up, configure, and get the most out of
                your AI-powered calling campaigns.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ────────── Body: Sidebar + Content ────────── */}
        <div className="max-w-7xl mx-auto px-6 py-16 flex gap-12">
          {/* Sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <nav className="sticky top-8 space-y-1">
              {sidebarLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveSection(link.href.replace("#", ""))}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "bg-background-tertiary font-semibold text-foreground"
                      : "text-foreground-secondary hover:text-foreground hover:bg-background-secondary"
                  }`}
                >
                  <link.icon className="w-4 h-4 flex-shrink-0" />
                  {link.label}
                </a>
              ))}

              <div className="pt-6 mt-6 border-t border-border">
                <p className="text-xs text-foreground-tertiary mb-2 px-3">Need help?</p>
                <a
                  href="mailto:support@callengo.com"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-foreground-secondary hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  support@callengo.com
                </a>
              </div>
            </nav>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0 space-y-20">
            {/* ═══════════ 1. Getting Started ═══════════ */}
            <section id="getting-started">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">Getting Started</h2>
                <p className="text-foreground-secondary text-lg mb-8 max-w-2xl">
                  Go from sign-up to your first completed call in under five
                  minutes. Here is the recommended workflow.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      step: "1",
                      title: "Create your account",
                      text: "Sign up at app.callengo.com. The Free plan gives you 15 minutes to explore the platform.",
                    },
                    {
                      step: "2",
                      title: "Import contacts",
                      text: "Upload a CSV, Excel, JSON, XML, or TXT file. Callengo normalizes phone numbers and deduplicates automatically.",
                    },
                    {
                      step: "3",
                      title: "Choose an AI agent",
                      text: "Select Data Validation, Appointment Confirmation, or Lead Qualification. Customize the script and voice.",
                    },
                    {
                      step: "4",
                      title: "Launch your campaign",
                      text: "Set scheduling preferences, review your settings, and hit Start. Monitor results in real-time from the dashboard.",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="border border-border rounded-xl p-6 hover:shadow-sm transition-shadow"
                    >
                      <div className="w-8 h-8 rounded-full bg-electric text-white flex items-center justify-center text-sm font-bold mb-4">
                        {item.step}
                      </div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-foreground-secondary leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href="https://app.callengo.com/auth/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary rounded-full"
                  >
                    Create free account
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </section>

            {/* ═══════════ 2. AI Agents ═══════════ */}
            <section id="agents">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">AI Agents</h2>
                <p className="text-foreground-secondary text-lg mb-8 max-w-2xl">
                  Callengo offers three specialized agent types, each designed to
                  solve a specific business problem. Pick the one that matches
                  your use case.
                </p>
              </motion.div>

              <div className="space-y-8">
                {agents.map((agent, idx) => (
                  <motion.div
                    key={agent.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="border border-border rounded-xl p-8"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                        <agent.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold mb-1">{agent.title}</h3>
                        <p className="text-foreground-secondary mb-6">
                          {agent.description}
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground-tertiary mb-3">
                              Capabilities
                            </h4>
                            <ul className="space-y-2">
                              {agent.useCases.map((uc) => (
                                <li
                                  key={uc}
                                  className="flex items-start gap-2 text-sm text-foreground-secondary"
                                >
                                  <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  {uc}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground-tertiary mb-3">
                              Call Outcomes
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {agent.outcomes.map((o) => (
                                <span
                                  key={o}
                                  className="px-3 py-1 bg-background-tertiary text-foreground-secondary text-xs rounded-full"
                                >
                                  {o}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ═══════════ 3. Voice Library ═══════════ */}
            <section id="voices">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">Voice Library</h2>
                <p className="text-foreground-secondary text-lg mb-8 max-w-2xl">
                  Choose from 77+ professional AI voices across 6 languages.
                  Every voice is tuned for natural, professional conversations.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {voiceCategories.map((cat, idx) => (
                  <motion.div
                    key={cat.language}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.04 }}
                    className="border border-border rounded-xl p-5"
                  >
                    <h3 className="font-semibold mb-1">{cat.language}</h3>
                    <p className="text-xs text-foreground-tertiary mb-3">
                      {cat.count} voices available
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.popular.map((v) => (
                        <span
                          key={v}
                          className="px-2 py-0.5 bg-background-tertiary text-foreground-secondary text-xs rounded-full"
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-6 bg-background-secondary rounded-xl p-5"
              >
                <h4 className="font-semibold mb-1">Background Audio</h4>
                <p className="text-foreground-secondary text-sm">
                  All calls include subtle office background sounds to create a
                  natural, professional atmosphere. This increases trust and
                  reduces the perception of talking to a robot.
                </p>
              </motion.div>
            </section>

            {/* ═══════════ 4. Data Import & Export ═══════════ */}
            <section id="data">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">Data Import &amp; Export</h2>
                <p className="text-foreground-secondary text-lg mb-8 max-w-2xl">
                  Import contacts from any system using standard file formats.
                  Callengo normalizes phone numbers, removes duplicates, and maps
                  fields automatically.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Supported formats */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="border border-border rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold mb-5">Supported Formats</h3>
                  <div className="space-y-4">
                    {dataFormats.map((f) => (
                      <div key={f.format} className="flex items-start gap-4">
                        <div className="w-14 h-9 rounded-lg bg-background-tertiary flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-foreground-secondary">
                            {f.format}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">{f.extension}</p>
                          <p className="text-xs text-foreground-secondary">
                            {f.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Contact fields */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 }}
                  className="border border-border rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold mb-5">Contact Fields</h3>
                  <div className="space-y-3">
                    {contactFields.map((f) => (
                      <div
                        key={f.field}
                        className="flex items-start justify-between gap-3"
                      >
                        <div>
                          <code className="text-sm bg-background-tertiary px-2 py-0.5 rounded">
                            {f.field}
                          </code>
                          <p className="text-xs text-foreground-secondary mt-1">
                            {f.description}
                          </p>
                        </div>
                        {f.required && (
                          <span className="text-xs text-red-600 font-medium whitespace-nowrap">
                            Required
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>

            {/* ═══════════ 5. Integrations ═══════════ */}
            <section id="integrations">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">Integrations</h2>
                <p className="text-foreground-secondary text-lg mb-8 max-w-2xl">
                  Connect Callengo to the tools you already use. All 16
                  integrations are configured directly from your dashboard —
                  no coding required.{" "}
                  <Link href="/integrations" className="text-electric hover:underline font-medium">
                    Explore all integrations &rarr;
                  </Link>
                </p>
              </motion.div>

              {/* Category filter */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["All", ...integrationCategoryOrder].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setIntegrationFilter(cat)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      integrationFilter === cat
                        ? "bg-electric text-white"
                        : "bg-background-secondary text-foreground-secondary hover:bg-background-tertiary"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Integration cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredIntegrations.map((intg, idx) => (
                  <motion.div
                    key={intg.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.03 }}
                    className="border border-border rounded-xl p-5 hover:shadow-sm transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-background-secondary flex items-center justify-center overflow-hidden flex-shrink-0">
                          <Image src={intg.logo} alt={intg.name} width={28} height={28} className="object-contain" />
                        </div>
                        <h4 className="font-semibold text-sm">{intg.name}</h4>
                      </div>
                      <span className="flex items-center gap-1 text-[10px] font-medium text-green-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                        Active
                      </span>
                    </div>
                    <p className="text-xs text-foreground-secondary mb-4 leading-relaxed">
                      {intg.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                          categoryColors[intg.category] || "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {intg.category}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                          planBadgeColors[intg.minPlan] || "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {intg.minPlan}+
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Webhook payload example */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-10 border border-border rounded-xl overflow-hidden"
              >
                <div className="px-6 py-4 border-b border-border bg-background-secondary">
                  <h4 className="font-semibold text-sm">
                    Webhook Payload Example
                  </h4>
                  <p className="text-xs text-foreground-secondary mt-1">
                    When a call completes, Callengo sends a POST request to your
                    configured URL with the following JSON body.
                  </p>
                </div>
                <div
                  className="p-6 overflow-x-auto text-sm font-mono leading-relaxed"
                  style={{ background: "#0f172a", color: "rgba(255,255,255,0.8)" }}
                >
                  <pre>{webhookPayload}</pre>
                </div>
              </motion.div>

              <div className="mt-8">
                <Link
                  href="/integrations"
                  className="btn btn-primary rounded-full"
                >
                  View full integrations documentation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </section>

            {/* ═══════════ 6. Plans & Limits ═══════════ */}
            <section id="plans">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">Plans &amp; Limits</h2>
                <p className="text-foreground-secondary text-lg mb-8 max-w-2xl">
                  Reference table for every tier. Visit the{" "}
                  <Link href="/pricing" className="underline hover:text-foreground">
                    pricing page
                  </Link>{" "}
                  for a full comparison.
                </p>
              </motion.div>

              {/* Pricing table */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-border rounded-xl overflow-hidden"
              >
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-background-secondary border-b border-border">
                      <tr>
                        <th className="text-left px-5 py-3 font-semibold">Plan</th>
                        <th className="text-left px-5 py-3 font-semibold">Price</th>
                        <th className="text-left px-5 py-3 font-semibold">Annual</th>
                        <th className="text-left px-5 py-3 font-semibold">Minutes</th>
                        <th className="text-left px-5 py-3 font-semibold">Agents</th>
                        <th className="text-left px-5 py-3 font-semibold">Users</th>
                        <th className="text-left px-5 py-3 font-semibold">Max/Call</th>
                      </tr>
                    </thead>
                    <tbody>
                      {plans.map((plan) => (
                        <tr
                          key={plan.name}
                          className={`border-b border-border last:border-0 ${
                            plan.popular ? "bg-blue-50/40" : ""
                          }`}
                        >
                          <td className="px-5 py-3 font-medium whitespace-nowrap">
                            {plan.name}
                            {plan.popular && (
                              <span className="ml-2 text-[10px] bg-secondary text-white px-2 py-0.5 rounded-full font-semibold">
                                Popular
                              </span>
                            )}
                          </td>
                          <td className="px-5 py-3">{plan.price}</td>
                          <td className="px-5 py-3">{plan.annual}</td>
                          <td className="px-5 py-3">{plan.minutes}</td>
                          <td className="px-5 py-3">{plan.agents}</td>
                          <td className="px-5 py-3">{plan.users}</td>
                          <td className="px-5 py-3">{plan.maxCall}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Add-ons */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <h3 className="text-lg font-bold mb-4">Add-ons</h3>
                <div className="grid sm:grid-cols-3 gap-5">
                  {addOns.map((addon) => (
                    <div
                      key={addon.name}
                      className="border border-border rounded-xl p-5"
                    >
                      <h4 className="font-semibold text-sm mb-1">{addon.name}</h4>
                      <p className="text-foreground font-bold text-lg mb-2">
                        {addon.price}
                      </p>
                      <p className="text-xs text-foreground-secondary leading-relaxed">
                        {addon.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://app.callengo.com/auth/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary rounded-full"
                >
                  Start for free
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/pricing"
                  className="btn btn-secondary rounded-full"
                >
                  View full pricing comparison
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </section>

            {/* ═══════════ 7. Campaign Management ═══════════ */}
            <section id="campaigns">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">Campaign Management</h2>
                <p className="text-foreground-secondary text-lg mb-8 max-w-2xl">
                  Campaigns are the core unit of work in Callengo. Each campaign
                  targets a list of contacts with a specific AI agent and
                  configuration.
                </p>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    title: "Creating a Campaign",
                    text: "From the dashboard, click New Campaign. Give it a name, select an AI agent type, and choose a contact list. You can create lists from imported data or pick from existing segments.",
                  },
                  {
                    title: "Configuring the Agent",
                    text: "Customize the call script, set the voice and language, adjust the maximum call duration, and define call outcomes that match your workflow. Preview the agent before launching.",
                  },
                  {
                    title: "Scheduling & Throttling",
                    text: "Set calling hours (respecting time zones), choose weekday/weekend preferences, and configure the number of concurrent calls. Callengo automatically paces outreach to stay within your plan limits.",
                  },
                  {
                    title: "Monitoring & Pausing",
                    text: "Once a campaign is running, the live dashboard shows real-time call statuses, answer rates, and outcome breakdowns. Pause, resume, or stop a campaign at any time.",
                  },
                  {
                    title: "Retries & Follow-ups",
                    text: "Configure automatic retry rules for unanswered calls. Set the number of attempts, delay between retries, and alternate contact numbers if available.",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="border border-border rounded-xl p-6"
                  >
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-foreground-secondary leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ═══════════ 8. Analytics & Reporting ═══════════ */}
            <section id="analytics">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">Analytics &amp; Reporting</h2>
                <p className="text-foreground-secondary text-lg mb-8 max-w-2xl">
                  Understand your calling performance at a glance with built-in
                  dashboards, exportable reports, and AI-powered insights.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  {
                    title: "Campaign Dashboard",
                    text: "Real-time overview of active campaigns including calls made, answer rates, average call duration, and outcome distribution.",
                  },
                  {
                    title: "Call-Level Detail",
                    text: "Drill into individual calls to see full transcripts, AI analysis, sentiment scores, and extracted data fields.",
                  },
                  {
                    title: "Outcome Breakdown",
                    text: "Visualize how calls resolved — verified, rescheduled, no answer, hot leads, and more — with filterable charts.",
                  },
                  {
                    title: "Time & Cost Analysis",
                    text: "Track minutes consumed, cost-per-contact, and cost-per-outcome to optimize your budget across campaigns.",
                  },
                  {
                    title: "Export & Sharing",
                    text: "Download reports as CSV or PDF. Push analytics data to Google Sheets or your CRM via integrations.",
                  },
                  {
                    title: "AI Insights",
                    text: "Callengo surfaces patterns across calls — common objections, optimal call times, and script performance comparisons.",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.04 }}
                    className="border border-border rounded-xl p-6"
                  >
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-foreground-secondary leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ────────── CTA ────────── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl gradient-bg p-12 md:p-20"
            >
              <div className="absolute inset-0 overflow-hidden opacity-90">
                <div className="absolute -top-1/4 right-[-10%] w-3/5 h-[120%] bg-gradient-to-br from-white/40 via-[#8B96C8]/35 to-[#6070E0]/25 rounded-full blur-2xl animate-[ctaLava1_35s_ease-in-out_infinite]" />
                <div className="absolute -bottom-1/3 left-[-10%] w-1/2 h-full bg-gradient-to-br from-[#8B96C8]/40 via-white/25 to-[#4F5FE8]/25 rounded-full blur-2xl animate-[ctaLava2_42s_ease-in-out_infinite]" />
                <div className="absolute top-[10%] left-[30%] w-2/5 h-4/5 bg-gradient-to-br from-white/30 via-[#1DB87A]/18 to-[#8B96C8]/20 rounded-full blur-2xl animate-[ctaLava3_38s_ease-in-out_infinite]" />
                <div className="absolute top-[-15%] left-[50%] w-1/3 h-[90%] bg-gradient-to-br from-[#6070E0]/30 via-white/20 to-[#8B96C8]/25 rounded-full blur-2xl animate-[ctaLava4_48s_ease-in-out_infinite]" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E2D6B]/40 via-[#1E2D6B]/15 to-transparent" />
              <div className="relative z-10 max-w-3xl">
                <h3 className="text-2xl font-semibold mb-3 text-white">Need more help?</h3>
                <p className="text-white/70 mb-6 max-w-md" style={{ fontFamily: "var(--font-body)" }}>
                  Our support team is ready to assist you with any questions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://app.callengo.com/auth/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-white text-primary hover:bg-white/90 px-8 py-4 font-semibold rounded-xl"
                  >
                    Get Started Free
                  </a>
                  <a
                    href="mailto:support@callengo.com"
                    className="btn border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl"
                  >
                    Contact Support
                  </a>
                </div>
              </div>
              <style jsx>{`
                @keyframes ctaLava1 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  33% { transform: translate(-30px, 25px) scale(1.06); }
                  66% { transform: translate(20px, -20px) scale(0.95); }
                }
                @keyframes ctaLava2 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  40% { transform: translate(30px, -25px) scale(1.08); }
                  70% { transform: translate(-20px, 30px) scale(0.94); }
                }
                @keyframes ctaLava3 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  50% { transform: translate(25px, -15px) scale(1.05); }
            @keyframes ctaLava4 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              35% { transform: translate(-20px, 30px) scale(1.06); }
              65% { transform: translate(30px, -15px) scale(0.95); }
            }
                }
              `}</style>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
