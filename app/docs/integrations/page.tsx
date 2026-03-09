"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Calendar,
  Video,
  BarChart3,
  Webhook,
  ArrowRight,
  Search,
  Check,
  ExternalLink,
  Table2,
  MessageSquare,
  CreditCard,
  CalendarDays,
} from "lucide-react";

const categories = [
  { id: "all", label: "All", count: 16 },
  { id: "calendar", label: "Calendar", count: 3 },
  { id: "crm", label: "CRM", count: 5 },
  { id: "video", label: "Video", count: 3 },
  { id: "productivity", label: "Productivity", count: 3 },
  { id: "payments", label: "Payments", count: 1 },
  { id: "automation", label: "Automation", count: 1 },
];

interface Integration {
  name: string;
  description: string;
  category: string;
  icon: React.ElementType;
  plan: string;
  status: "available" | "coming-soon";
  features: string[];
  syncedData: string[];
  setupTime: string;
}

const integrations: Integration[] = [
  {
    name: "Google Calendar",
    description: "Two-way sync appointments, automatically block time slots, and update availability in real-time.",
    category: "calendar",
    icon: Calendar,
    plan: "Free",
    status: "available",
    features: ["Two-way sync", "Auto slot blocking", "Multi-calendar support", "Real-time availability"],
    syncedData: ["Appointments", "Availability", "Attendee info", "Reminders"],
    setupTime: "2 min",
  },
  {
    name: "Outlook Calendar",
    description: "Sync with Microsoft 365 calendars for seamless appointment management across your organization.",
    category: "calendar",
    icon: Calendar,
    plan: "Growth",
    status: "available",
    features: ["Two-way sync", "Shared calendar support", "Teams integration", "Organization-wide"],
    syncedData: ["Appointments", "Room bookings", "Attendees", "Reminders"],
    setupTime: "3 min",
  },
  {
    name: "SimplyBook.me",
    description: "Connect your booking system to automate appointment confirmations and reduce no-shows.",
    category: "calendar",
    icon: CalendarDays,
    plan: "Business",
    status: "available",
    features: ["Booking sync", "Auto-confirmations", "Cancellation handling", "Wait-list management"],
    syncedData: ["Bookings", "Customer data", "Services", "Staff schedules"],
    setupTime: "5 min",
  },
  {
    name: "Zoom",
    description: "Automatically create and attach Zoom meeting links to confirmed appointments.",
    category: "video",
    icon: Video,
    plan: "Growth",
    status: "available",
    features: ["Auto link creation", "Meeting scheduling", "Calendar attachment", "Reminder inclusion"],
    syncedData: ["Meeting links", "Duration", "Host info", "Dial-in numbers"],
    setupTime: "2 min",
  },
  {
    name: "Google Meet",
    description: "Generate Google Meet links for confirmed appointments automatically.",
    category: "video",
    icon: Video,
    plan: "Growth",
    status: "available",
    features: ["Auto link generation", "Calendar integration", "Workspace support", "Guest access"],
    syncedData: ["Meeting links", "Calendar events", "Attendees"],
    setupTime: "2 min",
  },
  {
    name: "Microsoft Teams",
    description: "Create Teams meetings for appointments confirmed through Callengo calls.",
    category: "video",
    icon: Video,
    plan: "Business",
    status: "available",
    features: ["Auto meeting creation", "Channel integration", "Organization SSO", "Recording support"],
    syncedData: ["Meeting links", "Teams channels", "Attendees", "Recordings"],
    setupTime: "3 min",
  },
  {
    name: "HubSpot",
    description: "Sync verified contacts, call logs, and lead scores directly into HubSpot CRM.",
    category: "crm",
    icon: BarChart3,
    plan: "Business",
    status: "available",
    features: ["Contact sync", "Call logging", "Deal updates", "Custom properties", "Workflow triggers"],
    syncedData: ["Contacts", "Call transcripts", "Lead scores", "Deal stages", "Custom fields"],
    setupTime: "5 min",
  },
  {
    name: "Salesforce",
    description: "Enterprise-grade integration with full Salesforce CRM data sync and automation.",
    category: "crm",
    icon: BarChart3,
    plan: "Teams",
    status: "available",
    features: ["Full object sync", "Custom field mapping", "Flow triggers", "Report integration", "Sandbox support"],
    syncedData: ["Leads", "Contacts", "Accounts", "Opportunities", "Activities", "Custom objects"],
    setupTime: "10 min",
  },
  {
    name: "Pipedrive",
    description: "Push verified data and qualified leads directly into your Pipedrive pipeline.",
    category: "crm",
    icon: BarChart3,
    plan: "Business",
    status: "available",
    features: ["Deal creation", "Contact updates", "Activity logging", "Pipeline automation"],
    syncedData: ["Persons", "Organizations", "Deals", "Activities", "Notes"],
    setupTime: "5 min",
  },
  {
    name: "Zoho CRM",
    description: "Integrate call results, lead scores, and contact data with Zoho CRM modules.",
    category: "crm",
    icon: BarChart3,
    plan: "Teams",
    status: "available",
    features: ["Module sync", "Blueprint triggers", "Custom fields", "Multi-org support"],
    syncedData: ["Leads", "Contacts", "Accounts", "Deals", "Call logs"],
    setupTime: "7 min",
  },
  {
    name: "Dynamics 365",
    description: "Full Microsoft Dynamics 365 integration for enterprise contact and opportunity management.",
    category: "crm",
    icon: BarChart3,
    plan: "Teams",
    status: "available",
    features: ["Entity sync", "Power Automate triggers", "Custom entities", "Multi-environment"],
    syncedData: ["Contacts", "Accounts", "Opportunities", "Activities", "Custom entities"],
    setupTime: "10 min",
  },
  {
    name: "Clio",
    description: "Legal practice management integration for law firms using Callengo for client communications.",
    category: "crm",
    icon: BarChart3,
    plan: "Teams",
    status: "available",
    features: ["Matter sync", "Contact management", "Activity logging", "Billing integration"],
    syncedData: ["Contacts", "Matters", "Activities", "Calendar entries"],
    setupTime: "7 min",
  },
  {
    name: "Slack",
    description: "Get real-time notifications in Slack channels for call completions, hot leads, and alerts.",
    category: "productivity",
    icon: MessageSquare,
    plan: "Growth",
    status: "available",
    features: ["Channel notifications", "DM alerts", "Hot lead pings", "Daily summaries", "Custom triggers"],
    syncedData: ["Call results", "Lead scores", "Alerts", "Daily reports"],
    setupTime: "2 min",
  },
  {
    name: "Google Sheets",
    description: "Export call results, verified data, and reports directly to Google Sheets for analysis.",
    category: "productivity",
    icon: Table2,
    plan: "Growth",
    status: "available",
    features: ["Auto export", "Custom templates", "Scheduled reports", "Shared sheets"],
    syncedData: ["Call logs", "Verified contacts", "Lead scores", "Campaign results"],
    setupTime: "3 min",
  },
  {
    name: "Stripe",
    description: "Process payments and manage billing for appointment deposits and service fees.",
    category: "payments",
    icon: CreditCard,
    plan: "Business",
    status: "available",
    features: ["Payment collection", "Deposit handling", "Refund management", "Invoice sync"],
    syncedData: ["Payments", "Invoices", "Customer data", "Refunds"],
    setupTime: "5 min",
  },
  {
    name: "Webhooks",
    description: "Connect Callengo to any system with custom webhooks for full event-driven automation.",
    category: "automation",
    icon: Webhook,
    plan: "Growth",
    status: "available",
    features: ["Custom endpoints", "Event filtering", "Retry logic", "Payload mapping", "HMAC verification"],
    syncedData: ["All events", "Call data", "Contact updates", "Custom payloads"],
    setupTime: "5 min",
  },
];

const planOrder = ["Free", "Growth", "Business", "Teams", "Enterprise"];

function getPlanColor(plan: string) {
  switch (plan) {
    case "Free":
      return "bg-accent/10 text-accent-dark";
    case "Growth":
      return "bg-electric/10 text-electric";
    case "Business":
      return "bg-secondary/10 text-secondary";
    case "Teams":
      return "bg-deep-indigo/10 text-deep-indigo";
    case "Enterprise":
      return "bg-foreground/10 text-foreground";
    default:
      return "bg-foreground/10 text-foreground";
  }
}

export default function IntegrationsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const filtered = integrations.filter((i) => {
    const matchesCategory = activeCategory === "all" || i.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      i.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      i.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden bg-background py-16 md:py-20">
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-border bg-background-secondary text-xs font-medium text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>
                <Webhook className="w-3.5 h-3.5" />
                {integrations.length} integrations available
              </div>
              <h1 className="text-display-sm text-foreground mb-5">
                Connect your <span className="text-electric">entire stack</span>
              </h1>
              <p className="text-lg text-foreground-secondary max-w-xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
                Callengo integrates with the tools you already use — calendars, CRMs,
                video conferencing, and more. Set up in minutes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters + Search */}
        <section className="section bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
              {/* Category tabs */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                      activeCategory === cat.id
                        ? "bg-electric text-white"
                        : "bg-background-secondary text-foreground-secondary hover:text-foreground"
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {cat.label}
                    <span className="ml-1.5 text-xs opacity-60">{cat.count}</span>
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground-tertiary" />
                <input
                  type="text"
                  placeholder="Search integrations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((integration, idx) => {
                const Icon = integration.icon;
                const isExpanded = expandedCard === integration.name;
                return (
                  <motion.div
                    key={integration.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.03 }}
                    className="group rounded-xl border border-border bg-white hover:border-electric/30 hover:shadow-lg transition-all"
                  >
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-electric/8 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-electric" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground text-sm">{integration.name}</h3>
                            <span className={`inline-block mt-0.5 text-xs font-medium px-2 py-0.5 rounded-full ${getPlanColor(integration.plan)}`}>
                              {integration.plan}+
                            </span>
                          </div>
                        </div>
                        <span className="text-xs text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>
                          {integration.setupTime} setup
                        </span>
                      </div>
                      <p className="text-sm text-foreground-secondary leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                        {integration.description}
                      </p>

                      {/* Feature pills */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {integration.features.slice(0, 3).map((f) => (
                          <span key={f} className="text-xs px-2 py-0.5 rounded-full bg-background-secondary text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>
                            {f}
                          </span>
                        ))}
                        {integration.features.length > 3 && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-background-secondary text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>
                            +{integration.features.length - 3}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => setExpandedCard(isExpanded ? null : integration.name)}
                        className="text-xs font-medium text-electric hover:text-secondary-dark transition-colors cursor-pointer"
                      >
                        {isExpanded ? "Show less" : "View details"}
                      </button>
                    </div>

                    {/* Expanded details */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="border-t border-border px-5 py-4 bg-background-secondary/50"
                      >
                        <div className="mb-3">
                          <div className="text-xs font-medium text-foreground-tertiary uppercase tracking-wider mb-2">
                            Synced Data
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {integration.syncedData.map((d) => (
                              <span key={d} className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded bg-white border border-border text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>
                                <Check className="w-3 h-3 text-accent-dark" />
                                {d}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="text-xs font-medium text-foreground-tertiary uppercase tracking-wider mb-2">
                            All Features
                          </div>
                          <ul className="space-y-1">
                            {integration.features.map((f) => (
                              <li key={f} className="flex items-center gap-2 text-xs text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>
                                <Check className="w-3 h-3 text-accent-dark flex-shrink-0" />
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="text-xs text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>
                          Available on <span className="font-medium text-foreground-secondary">{integration.plan}</span> plan and above
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <p className="text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>
                  No integrations match your search. Try a different term.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Plan comparison */}
        <section className="section bg-background-secondary">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Integrations by <span className="text-electric">plan</span>
              </h2>
              <p className="text-foreground-secondary max-w-lg mx-auto" style={{ fontFamily: "var(--font-body)" }}>
                Every plan includes core integrations. Upgrade for enterprise CRMs and advanced automation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-4">
              {[
                { plan: "Free", integrations: ["Google Calendar"], note: "Get started" },
                { plan: "Growth", integrations: ["Outlook Calendar", "Zoom", "Google Meet", "Slack", "Google Sheets", "Webhooks"], note: "Most popular" },
                { plan: "Business", integrations: ["Microsoft Teams", "HubSpot", "Pipedrive", "SimplyBook.me", "Stripe"], note: "For teams" },
                { plan: "Teams", integrations: ["Salesforce", "Zoho CRM", "Dynamics 365", "Clio"], note: "Enterprise CRMs" },
              ].map((tier, idx) => (
                <motion.div
                  key={tier.plan}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="rounded-xl border border-border bg-white p-5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-foreground">{tier.plan}</h3>
                    <span className="text-xs text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>{tier.note}</span>
                  </div>
                  <ul className="space-y-2">
                    {tier.integrations.map((name) => (
                      <li key={name} className="flex items-center gap-2 text-sm text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>
                        <Check className="w-3.5 h-3.5 text-accent-dark flex-shrink-0" />
                        {name}
                      </li>
                    ))}
                  </ul>
                  {idx > 0 && (
                    <p className="mt-3 text-xs text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>
                      + all {planOrder[idx - 1]} integrations
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-background">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-deep-indigo rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid-dark opacity-30" />
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  Ready to connect your tools?
                </h3>
                <p className="text-white/50 mb-6 max-w-md mx-auto" style={{ fontFamily: "var(--font-body)" }}>
                  Start free with Google Calendar included. Upgrade anytime to unlock more integrations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://app.callengo.com/auth/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold bg-white text-deep-indigo rounded-full hover:bg-white/90 transition-colors"
                  >
                    Get Started Free
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="/pricing"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors"
                  >
                    Compare Plans
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
