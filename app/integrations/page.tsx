"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedBlobs from "../components/AnimatedBlobs";
import {
  Calendar,
  Video,
  MessageSquare,
  Database,
  Webhook,
  CreditCard,
  Sheet,
  ArrowRight,
  Check,
  Building2,
} from "lucide-react";

type Category = "all" | "calendar" | "video" | "crm" | "communication" | "productivity" | "other";

interface Integration {
  name: string;
  description: string;
  category: Category;
  icon: typeof Calendar;
  minPlan: string;
  features: string[];
  status: "live" | "beta";
}

const integrations: Integration[] = [
  {
    name: "Google Calendar",
    description: "Sync appointments, check availability, and automatically create or reschedule events based on call outcomes.",
    category: "calendar",
    icon: Calendar,
    minPlan: "Free",
    features: ["Two-way sync", "Availability checks", "Auto-create events", "Reschedule from calls"],
    status: "live",
  },
  {
    name: "Outlook Calendar",
    description: "Full integration with Microsoft Outlook calendars for enterprise scheduling workflows.",
    category: "calendar",
    icon: Calendar,
    minPlan: "Growth",
    features: ["Two-way sync", "Room booking", "Recurring events", "Teams integration"],
    status: "live",
  },
  {
    name: "Google Meet",
    description: "Automatically generate and share Google Meet links when scheduling appointments via calls.",
    category: "video",
    icon: Video,
    minPlan: "Starter",
    features: ["Auto-generate links", "Include in confirmations", "Calendar integration"],
    status: "live",
  },
  {
    name: "Zoom",
    description: "Create Zoom meeting links automatically and include them in appointment confirmations.",
    category: "video",
    icon: Video,
    minPlan: "Growth",
    features: ["Auto-generate links", "Meeting settings", "Waiting room config"],
    status: "live",
  },
  {
    name: "Microsoft Teams",
    description: "Generate Teams meeting links and integrate with your organization's Microsoft ecosystem.",
    category: "video",
    icon: Video,
    minPlan: "Business",
    features: ["Auto-generate links", "Channel notifications", "Azure AD integration"],
    status: "live",
  },
  {
    name: "Slack",
    description: "Get real-time notifications about call outcomes, qualified leads, and important events directly in Slack.",
    category: "communication",
    icon: MessageSquare,
    minPlan: "Growth",
    features: ["Real-time notifications", "Channel routing", "Custom alerts", "Lead alerts"],
    status: "live",
  },
  {
    name: "SimplyBook.me",
    description: "Sync your booking system with Callengo for seamless appointment management and confirmation calls.",
    category: "calendar",
    icon: Calendar,
    minPlan: "Business",
    features: ["Booking sync", "Availability checks", "Auto-confirmations"],
    status: "live",
  },
  {
    name: "Webhooks",
    description: "Send real-time call data to any endpoint. Build custom integrations with your existing tools and workflows.",
    category: "other",
    icon: Webhook,
    minPlan: "Business",
    features: ["Real-time events", "Custom payloads", "Retry logic", "Event filtering"],
    status: "live",
  },
  {
    name: "HubSpot",
    description: "Sync contacts, log call activities, update deal stages, and trigger workflows based on call outcomes.",
    category: "crm",
    icon: Database,
    minPlan: "Business",
    features: ["Contact sync", "Activity logging", "Deal updates", "Workflow triggers"],
    status: "live",
  },
  {
    name: "Pipedrive",
    description: "Push qualified leads directly into your Pipedrive pipeline with full call context and extracted data.",
    category: "crm",
    icon: Database,
    minPlan: "Business",
    features: ["Lead creation", "Pipeline sync", "Activity logging", "Custom fields"],
    status: "live",
  },
  {
    name: "Zoho CRM",
    description: "Integrate with Zoho CRM to sync contacts, log calls, and update records automatically.",
    category: "crm",
    icon: Database,
    minPlan: "Teams",
    features: ["Contact sync", "Call logging", "Module mapping", "Blueprint triggers"],
    status: "live",
  },
  {
    name: "Salesforce",
    description: "Enterprise-grade Salesforce integration with full object mapping, triggers, and reporting.",
    category: "crm",
    icon: Database,
    minPlan: "Teams",
    features: ["Object mapping", "Task creation", "Lead conversion", "Custom objects"],
    status: "live",
  },
  {
    name: "Microsoft Dynamics 365",
    description: "Connect with Dynamics 365 for comprehensive customer data synchronization and workflow automation.",
    category: "crm",
    icon: Database,
    minPlan: "Teams",
    features: ["Entity sync", "Activity logging", "Workflow triggers", "Power Automate"],
    status: "live",
  },
  {
    name: "Clio",
    description: "Purpose-built integration for law firms using Clio. Sync client data and log call activities.",
    category: "crm",
    icon: Building2,
    minPlan: "Enterprise",
    features: ["Client sync", "Matter linking", "Activity logging", "Billing integration"],
    status: "live",
  },
  {
    name: "Google Sheets",
    description: "Export call results, extracted data, and analytics directly to Google Sheets for custom reporting.",
    category: "productivity",
    icon: Sheet,
    minPlan: "Teams",
    features: ["Auto-export results", "Custom templates", "Scheduled exports", "Shared sheets"],
    status: "live",
  },
  {
    name: "Stripe",
    description: "Process payments and verify billing information during calls. Perfect for collections and invoicing.",
    category: "other",
    icon: CreditCard,
    minPlan: "Teams",
    features: ["Payment verification", "Invoice status", "Subscription checks", "Payment links"],
    status: "live",
  },
];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All Integrations" },
  { value: "calendar", label: "Calendar" },
  { value: "video", label: "Video" },
  { value: "crm", label: "CRM" },
  { value: "communication", label: "Communication" },
  { value: "productivity", label: "Productivity" },
  { value: "other", label: "Other" },
];

const planOrder = ["Free", "Starter", "Growth", "Business", "Teams", "Enterprise"];

export default function IntegrationsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered =
    activeCategory === "all"
      ? integrations
      : integrations.filter((i) => i.category === activeCategory);

  return (
    <>
      <Header />
      <main className="pt-24 relative overflow-hidden">
        <AnimatedBlobs />
        {/* Hero */}
        <section className="section bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
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
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.value
                      ? "gradient-bg text-white"
                      : "bg-background-secondary text-foreground-secondary hover:text-foreground border border-border"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Integration Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((integration, index) => {
                const Icon = integration.icon;
                return (
                  <motion.div
                    key={integration.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-background border border-border rounded-2xl p-6 hover:border-border-dark transition-all"
                    style={{ boxShadow: "var(--shadow-sm)" }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/8 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className="text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide"
                          style={{
                            background: integration.status === "live"
                              ? "rgba(29, 184, 122, 0.12)"
                              : "rgba(79, 95, 232, 0.12)",
                            color: integration.status === "live"
                              ? "var(--color-accent)"
                              : "var(--color-electric)",
                            border: `1px solid ${integration.status === "live" ? "rgba(29, 184, 122, 0.2)" : "rgba(79, 95, 232, 0.2)"}`,
                          }}
                        >
                          {integration.status}
                        </span>
                        <span
                          className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                          style={{
                            background: "rgba(79, 95, 232, 0.08)",
                            color: "var(--color-secondary)",
                            border: "1px solid rgba(79, 95, 232, 0.12)",
                          }}
                        >
                          {integration.minPlan}+
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {integration.name}
                    </h3>
                    <p className="text-sm text-foreground-secondary mb-4 leading-relaxed">
                      {integration.description}
                    </p>

                    <div className="space-y-1.5">
                      {integration.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-xs">
                          <Check className="w-3.5 h-3.5 text-accent-dark flex-shrink-0" />
                          <span className="text-foreground-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Plan Access Matrix */}
        <section className="section bg-background-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Integration access by plan</h2>
              <p className="text-foreground-secondary">
                See which integrations are available on each plan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-x-auto"
            >
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 pr-4 font-medium text-foreground-secondary text-sm">Integration</th>
                    {planOrder.map((plan) => (
                      <th key={plan} className="text-center py-4 px-3 font-medium text-sm">
                        {plan}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {integrations.map((integration) => (
                    <tr key={integration.name} className="border-b border-border-light">
                      <td className="py-3 pr-4 text-sm text-foreground">{integration.name}</td>
                      {planOrder.map((plan) => {
                        const planIdx = planOrder.indexOf(plan);
                        const minIdx = planOrder.indexOf(integration.minPlan);
                        const included = planIdx >= minIdx;
                        return (
                          <td key={plan} className="text-center py-3 px-3">
                            {included ? (
                              <Check className="w-4 h-4 text-accent-dark mx-auto" />
                            ) : (
                              <span className="text-foreground-tertiary/40">—</span>
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

        {/* Webhook Documentation Preview */}
        <section className="section bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Build custom integrations</h2>
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
  "quality_score": 7,
  "extracted_data": {
    "contact_name": "Mike Marshall",
    "email": "mike.marshall@example.com",
    "company": "TechCorp Solutions"
  },
  "fields_updated": [
    {
      "field": "contact_name",
      "old_value": "John Smith",
      "new_value": "Mike Marshall"
    }
  ],
  "next_actions": [
    "update_crm_record",
    "send_confirmation_email"
  ]
}`}
              </pre>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-background-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="gradient-bg rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden"
            >
              {/* Internal lava lamp */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute" style={{ width: "55%", height: "110%", top: "-25%", right: "-10%", background: "conic-gradient(from 200deg, rgba(255,255,255,0.22), rgba(139,150,200,0.15), rgba(255,255,255,0.08), rgba(255,255,255,0.22))", filter: "blur(55px)", borderRadius: "40% 60% 55% 45% / 55% 40% 60% 45%", animation: "ctaLava1 16s ease-in-out infinite" }} />
                <div className="absolute" style={{ width: "50%", height: "90%", bottom: "-30%", left: "-5%", background: "conic-gradient(from 60deg, rgba(139,150,200,0.25), rgba(255,255,255,0.12), rgba(79,95,232,0.10), rgba(139,150,200,0.25))", filter: "blur(50px)", borderRadius: "55% 45% 40% 60% / 40% 55% 45% 60%", animation: "ctaLava2 20s ease-in-out infinite" }} />
                <div className="absolute" style={{ width: "35%", height: "70%", top: "15%", left: "40%", background: "conic-gradient(from 140deg, rgba(255,255,255,0.18), rgba(29,184,122,0.06), rgba(255,255,255,0.10), rgba(255,255,255,0.18))", filter: "blur(45px)", borderRadius: "45% 55% 50% 50% / 60% 40% 55% 45%", animation: "ctaLava3 14s ease-in-out infinite" }} />
              </div>
              <style jsx>{`
                @keyframes ctaLava1 { 0%, 100% { transform: translate(0, 0) scale(1); border-radius: 40% 60% 55% 45% / 55% 40% 60% 45%; } 25% { transform: translate(-40px, 30px) scale(1.12); border-radius: 55% 45% 40% 60% / 45% 55% 50% 50%; } 50% { transform: translate(-20px, 60px) scale(0.94); border-radius: 45% 55% 60% 40% / 60% 45% 40% 55%; } 75% { transform: translate(35px, 20px) scale(1.06); border-radius: 50% 50% 45% 55% / 40% 60% 55% 45%; } }
                @keyframes ctaLava2 { 0%, 100% { transform: translate(0, 0) scale(1); border-radius: 55% 45% 40% 60% / 40% 55% 45% 60%; } 30% { transform: translate(40px, -30px) scale(1.10); border-radius: 40% 60% 55% 45% / 55% 40% 60% 45%; } 60% { transform: translate(20px, -50px) scale(1.18); border-radius: 50% 50% 45% 55% / 60% 40% 50% 50%; } }
                @keyframes ctaLava3 { 0%, 100% { transform: translate(0, 0) scale(1); border-radius: 45% 55% 50% 50% / 60% 40% 55% 45%; } 33% { transform: translate(30px, -20px) scale(1.18); border-radius: 55% 45% 40% 60% / 45% 55% 50% 50%; } 66% { transform: translate(-20px, 30px) scale(0.88); border-radius: 40% 60% 55% 45% / 55% 40% 60% 45%; } }
              `}</style>
              <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to connect your tools?
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Start with our free plan and connect Google Calendar immediately.
                Upgrade anytime to unlock more integrations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://app.callengo.com/auth/signup"
                  className="btn bg-white text-primary hover:bg-white/90 px-8 py-4 font-semibold"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/pricing"
                  className="btn border border-white/30 text-white hover:bg-white/10 px-8 py-4"
                >
                  View Pricing
                </Link>
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
