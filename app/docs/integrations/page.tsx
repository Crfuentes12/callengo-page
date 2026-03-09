"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Plug,
  Calendar,
  Video,
  MessageSquare,
  BarChart3,
  Workflow,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Shield,
  Database,
  Globe,
  Search,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════
   INTEGRATION CARDS DATA
   ═══════════════════════════════════════════════════════════════════ */

const categoryIcons: Record<string, React.ElementType> = {
  Calendar: Calendar,
  Video: Video,
  CRM: Database,
  Communication: MessageSquare,
  Productivity: BarChart3,
  Automation: Workflow,
};

const categoryColors: Record<string, string> = {
  Calendar: "bg-blue-500",
  Video: "bg-purple-500",
  CRM: "bg-emerald-500",
  Communication: "bg-amber-500",
  Productivity: "bg-pink-500",
  Automation: "bg-slate-600",
};

const categoryBadgeColors: Record<string, string> = {
  Calendar: "bg-blue-50 text-blue-700",
  Video: "bg-purple-50 text-purple-700",
  CRM: "bg-emerald-50 text-emerald-700",
  Communication: "bg-amber-50 text-amber-700",
  Productivity: "bg-pink-50 text-pink-700",
  Automation: "bg-slate-50 text-slate-700",
};

type IntegrationCard = {
  name: string;
  slug: string;
  category: string;
  tagline: string;
  initial: string;
  comingSoon?: boolean;
};

const integrations: IntegrationCard[] = [
  /* Calendar */
  {
    name: "Google Calendar",
    slug: "google-calendar",
    category: "Calendar",
    tagline: "Sync appointments and availability in real time",
    initial: "G",
  },
  {
    name: "Outlook Calendar",
    slug: "outlook-calendar",
    category: "Calendar",
    tagline: "Two-way calendar sync with Microsoft 365",
    initial: "O",
  },
  {
    name: "SimplyBook.me",
    slug: "simplybook-me",
    category: "Calendar",
    tagline: "Sync bookings and availability with SimplyBook.me",
    initial: "S",
  },

  /* Video */
  {
    name: "Google Meet",
    slug: "google-meet",
    category: "Video",
    tagline: "Auto-generate Meet links for confirmed appointments",
    initial: "G",
  },
  {
    name: "Zoom",
    slug: "zoom",
    category: "Video",
    tagline: "Create Zoom meetings when appointments are confirmed",
    initial: "Z",
  },
  {
    name: "Microsoft Teams",
    slug: "microsoft-teams",
    category: "Video",
    tagline: "Schedule Teams meetings from call outcomes",
    initial: "M",
  },

  /* CRM */
  {
    name: "HubSpot",
    slug: "hubspot",
    category: "CRM",
    tagline: "Push call outcomes and lead scores to HubSpot contacts",
    initial: "H",
  },
  {
    name: "Salesforce",
    slug: "salesforce",
    category: "CRM",
    tagline: "Enterprise-grade CRM integration with custom field mapping",
    initial: "S",
  },
  {
    name: "Pipedrive",
    slug: "pipedrive",
    category: "CRM",
    tagline: "Update deals and contacts in Pipedrive automatically",
    initial: "P",
  },
  {
    name: "Zoho CRM",
    slug: "zoho-crm",
    category: "CRM",
    tagline: "Sync call data and lead status with Zoho CRM",
    initial: "Z",
  },
  {
    name: "Microsoft Dynamics 365",
    slug: "microsoft-dynamics-365",
    category: "CRM",
    tagline: "Bi-directional sync with Dynamics 365 entities",
    initial: "D",
  },

  /* Communication */
  {
    name: "Slack",
    slug: "slack",
    category: "Communication",
    tagline: "Get real-time call notifications and summaries in Slack",
    initial: "S",
  },

  /* Productivity */
  {
    name: "Google Sheets",
    slug: "google-sheets",
    category: "Productivity",
    tagline: "Export call results directly to Google Sheets",
    initial: "G",
  },
  {
    name: "Clio",
    slug: "clio",
    category: "Productivity",
    tagline: "Legal practice management — sync client and matter data",
    initial: "C",
  },

  /* Automation */
  {
    name: "Stripe",
    slug: "stripe",
    category: "Automation",
    tagline: "Trigger calls based on Stripe payment events",
    initial: "S",
  },
  {
    name: "Zapier",
    slug: "zapier",
    category: "Automation",
    tagline: "Connect Callengo to 5,000+ apps with Zapier",
    initial: "Z",
    comingSoon: true,
  },
];

const categoryOrder = [
  "All",
  "Calendar",
  "Video",
  "CRM",
  "Communication",
  "Productivity",
  "Automation",
];

/* ═══════════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════════ */

export default function IntegrationsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIntegrations = integrations.filter((intg) => {
    const matchesCategory =
      activeCategory === "All" || intg.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      intg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      intg.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />
      <main style={{ fontFamily: "var(--font-body)" }}>
        {/* ────────── Hero ────────── */}
        <section className="bg-background pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <Link
                  href="/docs"
                  className="flex items-center gap-1.5 text-sm font-medium text-foreground-tertiary hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Documentation
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-foreground-tertiary" />
                <span className="text-sm font-medium text-electric">
                  Integrations
                </span>
              </div>
              <h1
                className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Integrations
              </h1>
              <p
                className="text-xl text-foreground-secondary leading-relaxed max-w-2xl mx-auto"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Connect Callengo to the tools your team already uses. Calendar,
                video, CRM, and more — all configured from your dashboard, no
                coding required.
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

        {/* ────────── Search + Category Tabs ────────── */}
        <section className="border-b border-border sticky top-16 md:top-[72px] bg-background/95 backdrop-blur-sm z-30">
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
              {/* Category tabs */}
              <div className="flex items-center gap-2 overflow-x-auto flex-1 scrollbar-hide">
                {categoryOrder.map((cat) => {
                  const Icon =
                    cat !== "All" ? categoryIcons[cat] : Plug;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                        activeCategory === cat
                          ? "bg-foreground text-white"
                          : "bg-background-secondary text-foreground-secondary hover:bg-background-tertiary"
                      }`}
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      {cat}
                      {cat !== "All" && (
                        <span className="text-xs opacity-70">
                          (
                          {
                            integrations.filter((i) => i.category === cat)
                              .length
                          }
                          )
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
            {filteredIntegrations.map((intg, idx) => (
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
                    <div
                      className={`w-12 h-12 rounded-xl ${categoryColors[intg.category]} flex items-center justify-center mb-4`}
                    >
                      <span className="text-white font-bold text-lg">
                        {intg.initial}
                      </span>
                    </div>
                    <h3
                      className="text-lg font-bold text-foreground mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {intg.name}
                    </h3>
                    <p className="text-sm text-foreground-secondary leading-relaxed flex-1">
                      {intg.tagline}
                    </p>
                    <div className="mt-4 pt-4 border-t border-border">
                      <span
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${categoryBadgeColors[intg.category]}`}
                      >
                        {intg.category}
                      </span>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={`/docs/integrations/${intg.slug}`}
                    className="group bg-white border border-border rounded-xl p-6 h-full flex flex-col hover:shadow-lg hover:border-electric/30 transition-all duration-200"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl ${categoryColors[intg.category]} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}
                    >
                      <span className="text-white font-bold text-lg">
                        {intg.initial}
                      </span>
                    </div>
                    <h3
                      className="text-lg font-bold text-foreground mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {intg.name}
                    </h3>
                    <p className="text-sm text-foreground-secondary leading-relaxed flex-1">
                      {intg.tagline}
                    </p>
                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                      <span
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${categoryBadgeColors[intg.category]}`}
                      >
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
              transition={{
                delay: filteredIntegrations.length * 0.03,
                duration: 0.4,
              }}
              className={
                activeCategory !== "All" && activeCategory !== "Automation"
                  ? "hidden"
                  : ""
              }
            >
              <Link
                href="/docs/integrations/webhooks"
                className="group bg-white border border-border rounded-xl p-6 h-full flex flex-col hover:shadow-lg hover:border-electric/30 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Workflow className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="text-lg font-bold text-foreground mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Webhooks
                </h3>
                <p className="text-sm text-foreground-secondary leading-relaxed flex-1">
                  Send real-time POST requests to any URL when calls complete.
                  Connect with any system.
                </p>
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-50 text-slate-700">
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
          {filteredIntegrations.length === 0 &&
            !(
              activeCategory === "All" || activeCategory === "Automation"
            ) && (
              <div className="text-center py-16">
                <Search className="w-12 h-12 text-foreground-tertiary mx-auto mb-4" />
                <p className="text-lg font-medium text-foreground mb-2">
                  No integrations found
                </p>
                <p className="text-sm text-foreground-secondary">
                  Try a different search term or category.
                </p>
              </div>
            )}
        </section>

        {/* ────────── CTA ────────── */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl gradient-bg p-12 md:p-20"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full opacity-20"
                style={{
                  background: "radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)",
                  animation: "ctaBlobInt1 20s ease-in-out infinite",
                }}
              />
              <div
                className="absolute -bottom-24 -left-24 w-[350px] h-[350px] rounded-full opacity-15"
                style={{
                  background: "radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)",
                  animation: "ctaBlobInt2 25s ease-in-out infinite",
                }}
              />
            </div>

            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Ready to connect your tools?
              </h2>
              <p className="text-lg text-white/70 mb-10">
                Start your free trial and configure integrations in minutes. No
                coding required — everything is set up from your dashboard.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://app.callengo.com/auth/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-white text-primary hover:bg-white/90 px-8 py-4 font-semibold"
                >
                  Get Started Free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a
                  href="mailto:support@callengo.com"
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                  Contact Support
                </a>
              </div>
            </div>
            <style jsx>{`
              @keyframes ctaBlobInt1 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                25% { transform: translate(-40px, 30px) scale(1.15); }
                50% { transform: translate(-20px, 60px) scale(0.95); }
                75% { transform: translate(30px, 20px) scale(1.1); }
              }
              @keyframes ctaBlobInt2 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                30% { transform: translate(40px, -30px) scale(1.1); }
                60% { transform: translate(20px, -50px) scale(1.2); }
              }
            `}</style>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
