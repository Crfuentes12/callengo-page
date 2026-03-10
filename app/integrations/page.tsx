"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Plug,
  Calendar,
  Video,
  MessageSquare,
  BarChart3,
  Workflow,
  Database,
  ArrowRight,
  Check,
  Shield,
  Globe,
  Search,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════ */

const categoryIcons: Record<string, React.ElementType> = {
  Calendar: Calendar,
  Video: Video,
  CRM: Database,
  Communication: MessageSquare,
  Productivity: BarChart3,
  Automation: Workflow,
};

const categoryBadgeColors: Record<string, string> = {
  Calendar: "bg-blue-50 text-blue-700 border-blue-100",
  Video: "bg-purple-50 text-purple-700 border-purple-100",
  CRM: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Communication: "bg-amber-50 text-amber-700 border-amber-100",
  Productivity: "bg-pink-50 text-pink-700 border-pink-100",
  Automation: "bg-slate-50 text-slate-700 border-slate-100",
};

type IntegrationCard = {
  name: string;
  slug: string;
  category: string;
  tagline: string;
  logo: string;
  minPlan: string;
  features: string[];
  status: "live" | "beta";
  comingSoon?: boolean;
};

const integrations: IntegrationCard[] = [
  {
    name: "Google Calendar",
    slug: "google-calendar",
    category: "Calendar",
    tagline: "Sync appointments and availability in real time",
    logo: "/integrations/calendar.png",
    minPlan: "Free",
    features: ["Two-way sync", "Availability checks", "Auto-create events", "Reschedule from calls"],
    status: "live",
  },
  {
    name: "Outlook Calendar",
    slug: "outlook-calendar",
    category: "Calendar",
    tagline: "Two-way calendar sync with Microsoft 365",
    logo: "/integrations/outlook.png",
    minPlan: "Growth",
    features: ["Two-way sync", "Room booking", "Recurring events", "Teams integration"],
    status: "live",
  },
  {
    name: "SimplyBook.me",
    slug: "simplybook-me",
    category: "Calendar",
    tagline: "Sync bookings and availability with SimplyBook.me",
    logo: "/integrations/simplybook.png",
    minPlan: "Business",
    features: ["Booking sync", "Availability checks", "Auto-confirmations"],
    status: "live",
  },
  {
    name: "Google Meet",
    slug: "google-meet",
    category: "Video",
    tagline: "Auto-generate Meet links for confirmed appointments",
    logo: "/integrations/meets.png",
    minPlan: "Starter",
    features: ["Auto-generate links", "Include in confirmations", "Calendar integration"],
    status: "live",
  },
  {
    name: "Zoom",
    slug: "zoom",
    category: "Video",
    tagline: "Create Zoom meetings when appointments are confirmed",
    logo: "/integrations/zoom.png",
    minPlan: "Growth",
    features: ["Auto-generate links", "Meeting settings", "Waiting room config"],
    status: "live",
  },
  {
    name: "Microsoft Teams",
    slug: "microsoft-teams",
    category: "Video",
    tagline: "Schedule Teams meetings from call outcomes",
    logo: "/integrations/teams.png",
    minPlan: "Business",
    features: ["Auto-generate links", "Channel notifications", "Azure AD integration"],
    status: "live",
  },
  {
    name: "HubSpot",
    slug: "hubspot",
    category: "CRM",
    tagline: "Push call outcomes and lead scores to HubSpot contacts",
    logo: "/integrations/hubspot.png",
    minPlan: "Business",
    features: ["Contact sync", "Activity logging", "Deal updates", "Workflow triggers"],
    status: "live",
  },
  {
    name: "Salesforce",
    slug: "salesforce",
    category: "CRM",
    tagline: "Enterprise-grade CRM integration with custom field mapping",
    logo: "/integrations/salesforce.png",
    minPlan: "Teams",
    features: ["Object mapping", "Task creation", "Lead conversion", "Custom objects"],
    status: "live",
  },
  {
    name: "Pipedrive",
    slug: "pipedrive",
    category: "CRM",
    tagline: "Update deals and contacts in Pipedrive automatically",
    logo: "/integrations/pipedrive.png",
    minPlan: "Business",
    features: ["Lead creation", "Pipeline sync", "Activity logging", "Custom fields"],
    status: "live",
  },
  {
    name: "Zoho CRM",
    slug: "zoho-crm",
    category: "CRM",
    tagline: "Sync call data and lead status with Zoho CRM",
    logo: "/integrations/zoho.png",
    minPlan: "Teams",
    features: ["Contact sync", "Call logging", "Module mapping", "Blueprint triggers"],
    status: "live",
  },
  {
    name: "Microsoft Dynamics 365",
    slug: "microsoft-dynamics-365",
    category: "CRM",
    tagline: "Bi-directional sync with Dynamics 365 entities",
    logo: "/integrations/dynamics.png",
    minPlan: "Teams",
    features: ["Entity sync", "Activity logging", "Workflow triggers", "Power Automate"],
    status: "live",
  },
  {
    name: "Clio",
    slug: "clio",
    category: "CRM",
    tagline: "Legal practice management. Sync client and matter data",
    logo: "/integrations/clio.png",
    minPlan: "Enterprise",
    features: ["Client sync", "Matter linking", "Activity logging", "Billing integration"],
    status: "live",
  },
  {
    name: "Slack",
    slug: "slack",
    category: "Communication",
    tagline: "Get real-time call notifications and summaries in Slack",
    logo: "/integrations/slack.png",
    minPlan: "Growth",
    features: ["Real-time notifications", "Channel routing", "Custom alerts", "Lead alerts"],
    status: "live",
  },
  {
    name: "Google Sheets",
    slug: "google-sheets",
    category: "Productivity",
    tagline: "Export call results directly to Google Sheets",
    logo: "/integrations/sheets.png",
    minPlan: "Teams",
    features: ["Auto-export results", "Custom templates", "Scheduled exports", "Shared sheets"],
    status: "live",
  },
  {
    name: "Stripe",
    slug: "stripe",
    category: "Automation",
    tagline: "Trigger calls based on Stripe payment events",
    logo: "/integrations/stripe.png",
    minPlan: "Teams",
    features: ["Payment verification", "Invoice status", "Subscription checks", "Payment links"],
    status: "live",
  },
  {
    name: "Zapier",
    slug: "zapier",
    category: "Automation",
    tagline: "Connect Callengo to 5,000+ apps with Zapier",
    logo: "/integrations/zoho.png",
    minPlan: "Business",
    features: [],
    status: "beta",
    comingSoon: true,
  },
];

const categoryOrder = ["All", "Calendar", "Video", "CRM", "Communication", "Productivity", "Automation"];
const planOrder = ["Free", "Starter", "Growth", "Business", "Teams", "Enterprise"];

/* ═══════════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════════ */

export default function IntegrationsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = integrations.filter((intg) => {
    const matchesCategory = activeCategory === "All" || intg.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      intg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      intg.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />
      <main className="pt-24 relative overflow-hidden">
        {/* ────────── Hero ────────── */}
        <section className="bg-background pb-8">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="badge badge-electric mb-6">16+ Integrations</div>
              <h1 className="text-display-sm mb-6">
                Connect Callengo to your{" "}
                <span className="gradient-text">entire stack</span>
              </h1>
              <p className="text-xl text-foreground-secondary">
                From calendars to CRMs, Callengo integrates with the tools your
                team already uses. No code required.
              </p>
              <div className="flex items-center justify-center gap-6 mt-8">
                <span className="flex items-center gap-2 text-sm text-foreground-tertiary">
                  <Plug className="w-4 h-4 text-electric" />
                  16 integrations
                </span>
                <span className="flex items-center gap-2 text-sm text-foreground-tertiary">
                  <Globe className="w-4 h-4 text-electric" />
                  6 categories
                </span>
                <span className="flex items-center gap-2 text-sm text-foreground-tertiary">
                  <Shield className="w-4 h-4 text-electric" />
                  Enterprise-ready
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ────────── Search + Category Filter (Sticky) ────────── */}
        <section className="border-b border-border sticky top-0 bg-white/95 backdrop-blur-sm z-30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-4">
              {/* Search */}
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground-tertiary" />
                <input
                  type="text"
                  placeholder="Search integrations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-foreground-tertiary focus:outline-none focus:ring-2 focus:ring-electric/20 focus:border-electric transition-colors"
                />
              </div>
              {/* Category pills */}
              <div className="flex items-center gap-2 overflow-x-auto flex-1 scrollbar-hide">
                {categoryOrder.map((cat) => {
                  const Icon = cat !== "All" ? categoryIcons[cat] : Plug;
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap border ${
                        isActive
                          ? "gradient-bg text-white border-transparent shadow-sm"
                          : "bg-white text-foreground-secondary border-border hover:border-electric/30 hover:bg-electric/5"
                      }`}
                    >
                      {Icon && <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : ""}`} />}
                      {cat}
                      {cat !== "All" && (
                        <span className={`text-[10px] ${isActive ? "text-white/70" : "text-foreground-tertiary"}`}>
                          {integrations.filter((i) => i.category === cat).length}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ────────── Integration Grid ────────── */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((intg, idx) => (
              <motion.div
                key={intg.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03, duration: 0.4 }}
              >
                {intg.comingSoon ? (
                  <div className="relative bg-white border border-border rounded-xl p-6 h-full flex flex-col opacity-70">
                    <div className="absolute top-4 right-4">
                      <span className="text-[10px] font-semibold uppercase tracking-wider bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                        Coming Soon
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-background-secondary flex items-center justify-center mb-4 overflow-hidden">
                      <Image src={intg.logo} alt={intg.name} width={40} height={40} className="object-contain" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>
                      {intg.name}
                    </h3>
                    <p className="text-sm text-foreground-secondary leading-relaxed flex-1">
                      {intg.tagline}
                    </p>
                    <div className="mt-4 pt-4 border-t border-border">
                      <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${categoryBadgeColors[intg.category]}`}>
                        {intg.category}
                      </span>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={`/integrations/${intg.slug}`}
                    className="group bg-white border border-border rounded-xl p-6 h-full flex flex-col hover:shadow-lg hover:border-electric/30 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 rounded-xl bg-background-secondary flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden">
                        <Image src={intg.logo} alt={intg.name} width={40} height={40} className="object-contain" />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide"
                          style={{
                            background: intg.status === "live" ? "rgba(29, 184, 122, 0.1)" : "rgba(79, 95, 232, 0.1)",
                            color: intg.status === "live" ? "var(--color-accent)" : "var(--color-electric)",
                          }}
                        >
                          {intg.status}
                        </span>
                        <span className="text-[10px] font-medium text-foreground-tertiary px-2 py-0.5 rounded-full bg-background-secondary">
                          {intg.minPlan}+
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1.5" style={{ fontFamily: "var(--font-display)" }}>
                      {intg.name}
                    </h3>
                    <p className="text-sm text-foreground-secondary leading-relaxed mb-4 flex-1">
                      {intg.tagline}
                    </p>
                    {intg.features.length > 0 && (
                      <div className="space-y-1.5 mb-4">
                        {intg.features.slice(0, 3).map((f) => (
                          <div key={f} className="flex items-center gap-2 text-xs">
                            <Check className="w-3 h-3 text-accent-dark flex-shrink-0" />
                            <span className="text-foreground-secondary">{f}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                      <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${categoryBadgeColors[intg.category]}`}>
                        {intg.category}
                      </span>
                      <span className="text-sm font-medium text-electric flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                )}
              </motion.div>
            ))}

            {/* Webhooks card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: filtered.length * 0.03, duration: 0.4 }}
              className={activeCategory !== "All" && activeCategory !== "Automation" ? "hidden" : ""}
            >
              <Link
                href="/integrations/webhooks"
                className="group bg-white border border-border rounded-xl p-6 h-full flex flex-col hover:shadow-lg hover:border-electric/30 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-background-secondary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform overflow-hidden">
                  <Image src="/integrations/webhooks.png" alt="Webhooks" width={40} height={40} className="object-contain" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1.5" style={{ fontFamily: "var(--font-display)" }}>
                  Webhooks
                </h3>
                <p className="text-sm text-foreground-secondary leading-relaxed flex-1">
                  Send real-time POST requests to any URL when calls complete.
                </p>
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full border bg-slate-50 text-slate-700 border-slate-100">
                    Automation
                  </span>
                  <span className="text-sm font-medium text-electric flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Empty state */}
          {filtered.length === 0 && !(activeCategory === "All" || activeCategory === "Automation") && (
            <div className="text-center py-16">
              <Search className="w-12 h-12 text-foreground-tertiary mx-auto mb-4" />
              <p className="text-lg font-medium text-foreground mb-2">No integrations found</p>
              <p className="text-sm text-foreground-secondary">Try a different search term or category.</p>
            </div>
          )}
        </section>

        {/* ────────── Plan Access Matrix ────────── */}
        <section className="section bg-background-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-semibold mb-4">Integration access by plan</h2>
              <p className="text-foreground-secondary">
                See which integrations are available on each plan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-x-auto bg-white rounded-2xl border border-border p-1"
            >
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-medium text-foreground-secondary text-sm">Integration</th>
                    {planOrder.map((plan) => (
                      <th key={plan} className="text-center py-4 px-3 font-medium text-sm">
                        {plan}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {integrations.filter(i => !i.comingSoon).map((integration) => (
                    <tr key={integration.name} className="border-b border-border/50 last:border-0">
                      <td className="py-3 px-4 text-sm text-foreground font-medium">{integration.name}</td>
                      {planOrder.map((plan) => {
                        const planIdx = planOrder.indexOf(plan);
                        const minIdx = planOrder.indexOf(integration.minPlan);
                        const included = planIdx >= minIdx;
                        return (
                          <td key={plan} className="text-center py-3 px-3">
                            {included ? (
                              <Check className="w-4 h-4 text-accent-dark mx-auto" />
                            ) : (
                              <span className="text-foreground-tertiary/30">-</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* ────────── Webhook Preview ────────── */}
        <section className="section bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-semibold mb-4">Build custom integrations</h2>
              <p className="text-foreground-secondary">
                Use webhooks to connect Callengo with any tool in your stack.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-navy rounded-2xl p-6 overflow-hidden"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
                <span className="text-white/40 text-xs font-mono ml-2">webhook-payload.json</span>
              </div>
              <pre className="text-sm text-white/80 font-mono overflow-x-auto leading-relaxed">
{`{
  "event": "call.completed",
  "call_id": "call_abc123",
  "agent": "data-validation",
  "duration_seconds": 44,
  "outcome": "information_updated",
  "extracted_data": {
    "contact_name": "Mike Marshall",
    "email": "mike.marshall@example.com",
    "company": "TechCorp Solutions"
  },
  "next_actions": [
    "update_crm_record",
    "send_confirmation_email"
  ]
}`}
              </pre>
            </motion.div>
          </div>
        </section>

        {/* ────────── CTA ────────── */}
        <section className="section bg-background-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
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
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                  Ready to connect your tools?
                </h2>
                <p className="text-xl text-white/70 mb-10 max-w-xl">
                  Start your free trial and configure integrations in minutes. No
                  coding required. Everything is set up from your dashboard.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://app.callengo.com/auth/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-white text-primary hover:bg-white/90 px-8 py-4 font-semibold rounded-xl"
                  >
                    Get Started Free
                    <ArrowRight className="w-5 h-5" />
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
                  33% { transform: translate(-35px, 30px) scale(1.08); }
                  66% { transform: translate(25px, -25px) scale(0.93); }
                }
                @keyframes ctaLava2 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  40% { transform: translate(35px, -30px) scale(1.1); }
                  70% { transform: translate(-25px, 35px) scale(0.92); }
                }
                @keyframes ctaLava3 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  50% { transform: translate(30px, -20px) scale(1.07); }
                }
                @keyframes ctaLava4 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  35% { transform: translate(-20px, 30px) scale(1.06); }
                  65% { transform: translate(30px, -15px) scale(0.95); }
                }
              `}</style>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
