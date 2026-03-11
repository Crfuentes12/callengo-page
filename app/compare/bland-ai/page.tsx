"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnimatedBlobs from "../../components/AnimatedBlobs";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  AlertTriangle,
  Zap,
  Shield,
  Clock,
  Users,
  Code2,
  LayoutTemplate,
  TrendingUp,
  DollarSign,
  HeadphonesIcon,
  GitMerge,
  CalendarCheck,
  Database,
  PhoneCall,
} from "lucide-react";

/* ─── Schema Markup (JSON-LD) ─── */
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://callengo.com/compare/bland-ai",
      url: "https://callengo.com/compare/bland-ai",
      name: "Callengo vs Bland AI — Full Comparison 2026",
      description:
        "A detailed comparison of Callengo and Bland AI: pricing, features, integrations, setup complexity, and real-world use cases. Find out which AI voice automation platform is right for your business in 2026.",
      inLanguage: "en-US",
      dateModified: "2026-03-11",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://callengo.com" },
          { "@type": "ListItem", position: 2, name: "Compare", item: "https://callengo.com/compare" },
          { "@type": "ListItem", position: 3, name: "Callengo vs Bland AI", item: "https://callengo.com/compare/bland-ai" },
        ],
      },
    },
    {
      "@type": "Article",
      "@id": "https://callengo.com/compare/bland-ai#article",
      headline: "Callengo vs Bland AI: Which AI Phone Agent Platform Should You Choose in 2026?",
      description:
        "An in-depth, objective comparison of Callengo and Bland AI covering pricing plans, per-minute rates, hidden fees, feature sets, CRM integrations, setup experience, and ideal use cases. Updated for 2026.",
      datePublished: "2026-03-01",
      dateModified: "2026-03-11",
      author: { "@type": "Organization", name: "Callengo", url: "https://callengo.com" },
      publisher: {
        "@type": "Organization",
        name: "Callengo",
        url: "https://callengo.com",
        logo: { "@type": "ImageObject", url: "https://callengo.com/callengo-logo.svg" },
      },
      mainEntityOfPage: "https://callengo.com/compare/bland-ai",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Callengo cheaper than Bland AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on your usage pattern. Bland AI's Build plan starts at $299/month with a $0.12/min rate, but adds per-call minimums ($0.015/call), transfer fees ($0.025–$0.05/min), and SMS fees ($0.02/message). Callengo's Business plan is also $299/month with a flat $0.23/min overage rate and no per-call or per-SMS fees. For businesses running structured outbound campaigns, Callengo's total cost is typically lower and always more predictable.",
          },
        },
        {
          "@type": "Question",
          name: "Does Callengo require coding to set up?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Callengo is entirely no-code. You select one of three pre-built agent templates, connect your CRM, upload your contact list, and launch. Bland AI, by contrast, requires developers to build call flows using their Pathways builder and API, which involves JavaScript execution nodes, webhook configuration, and technical infrastructure setup.",
          },
        },
        {
          "@type": "Question",
          name: "Which platform is better for appointment confirmation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Callengo has a dedicated Appointment Confirmation Agent with pre-built logic for confirmations, reschedules, no-show retry, and calendar sync (Google Calendar, Outlook, SimplyBook.me). Bland AI is a generic infrastructure layer that requires you to build this entire workflow from scratch using their API.",
          },
        },
        {
          "@type": "Question",
          name: "What CRM integrations does Callengo offer compared to Bland AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Callengo offers native integrations with HubSpot, Salesforce, Pipedrive, Zoho CRM, Microsoft Dynamics 365, and Clio (legal), plus Google Calendar, Outlook, Zoom, Slack, Google Sheets, SimplyBook.me, and Zapier/Make/n8n webhooks. Bland AI offers native HubSpot, Salesforce, and Zendesk integrations, with additional connectivity through Zapier and Pipedream.",
          },
        },
        {
          "@type": "Question",
          name: "What are Bland AI's hidden costs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Beyond the per-minute rate, Bland AI charges a $0.015 minimum per outbound call (even if it fails), $0.025–$0.05/min for live call transfers, $0.02 per SMS message, and $0.02 per 100 characters for text-to-speech on paid plans. These ancillary fees can significantly increase the effective cost per campaign compared to what the headline per-minute rate suggests.",
          },
        },
      ],
    },
  ],
};

/* ─── Feature comparison data ─── */
const featureRows = [
  { feature: "Setup time", callengo: "< 15 minutes", blandai: "Days to weeks", callengoPro: true },
  { feature: "Technical expertise required", callengo: "None", blandai: "Developer required", callengoPro: true },
  { feature: "Pre-built agent templates", callengo: "3 vertical agents", blandai: "None (build from scratch)", callengoPro: true },
  { feature: "Lead Qualification Agent", callengo: "Yes — BANT-based scoring", blandai: "Custom build required", callengoPro: true },
  { feature: "Appointment Confirmation Agent", callengo: "Yes — full logic included", blandai: "Custom build required", callengoPro: true },
  { feature: "Data Validation Agent", callengo: "Yes — CRM verified writes", blandai: "Custom build required", callengoPro: true },
  { feature: "Follow-up automation", callengo: "Up to Unlimited (by plan)", blandai: "Custom code required", callengoPro: true },
  { feature: "No-show auto-retry", callengo: "Yes (Growth+)", blandai: "Custom code required", callengoPro: true },
  { feature: "Voicemail detection", callengo: "Smart detection (Starter+)", blandai: "Basic detection", callengoPro: true },
  { feature: "Calendar sync", callengo: "Google, Outlook, Zoom, SimplyBook.me", blandai: "Via custom webhook/API", callengoPro: true },
  { feature: "HubSpot native integration", callengo: "Business+ plans", blandai: "Yes", callengoPro: false },
  { feature: "Salesforce native integration", callengo: "Teams+ plans", blandai: "Yes", callengoPro: false },
  { feature: "Pipedrive integration", callengo: "Business+ plans", blandai: "Not native", callengoPro: true },
  { feature: "Clio (legal) integration", callengo: "Business+ plans", blandai: "Not available", callengoPro: true },
  { feature: "Slack notifications", callengo: "Starter+", blandai: "Yes", callengoPro: false },
  { feature: "Zapier / Make / n8n", callengo: "Starter+", blandai: "Yes (Zapier, Pipedream)", callengoPro: false },
  { feature: "Per-call minimum fee", callengo: "None", blandai: "$0.015/call", callengoPro: true },
  { feature: "Transfer surcharge", callengo: "None", blandai: "$0.025–$0.05/min", callengoPro: true },
  { feature: "SMS fees", callengo: "None", blandai: "$0.02/message", callengoPro: true },
  { feature: "Monthly price cap", callengo: "Yes — predictable plans", blandai: "No — usage compounds", callengoPro: true },
  { feature: "Free tier", callengo: "15 min free, always", blandai: "Free tier (100 calls/day cap)", callengoPro: false },
  { feature: "Live call transfer to human", callengo: "Yes", blandai: "Yes", callengoPro: false },
  { feature: "Voice cloning / custom voices", callengo: "4 curated voices", blandai: "Up to 15 clones (Scale plan)", callengoPro: false },
  { feature: "SOC 2 / HIPAA compliance", callengo: "Yes", blandai: "Yes", callengoPro: false },
  { feature: "Concurrent call limits", callengo: "1–Unlimited (by plan)", blandai: "10–100 (by plan)", callengoPro: false },
  { feature: "Call recording retention", callengo: "30 days (12 mo. with add-on)", blandai: "Varies", callengoPro: false },
  { feature: "Dedicated support", callengo: "Email + onboarding (paid plans)", blandai: "Community Discord only", callengoPro: true },
  { feature: "Daily call volume cap", callengo: "None", blandai: "100–5,000/day (by plan)", callengoPro: true },
];

/* ─── Why Callengo cards ─── */
const callengoAdvantages = [
  {
    icon: LayoutTemplate,
    title: "Three agents, zero setup time",
    body: "Callengo ships with three production-ready agents that cover the most common outbound use cases in B2B and healthcare: lead qualification with BANT scoring, appointment confirmation with auto-retry logic, and data validation with live CRM writes. Each agent comes with a tested call script, structured follow-up rules, and CRM field mappings that take minutes to configure — not weeks of API development.",
  },
  {
    icon: DollarSign,
    title: "Pricing you can actually forecast",
    body: "Bland AI's per-minute model is deceptively complex. You pay the base rate per minute, plus $0.015 per outbound attempt (even failed ones), plus transfer surcharges of up to $0.05 per minute if you route calls to a human agent, plus $0.02 per SMS, plus TTS character fees on paid plans. Callengo uses a single, transparent overage rate — from $0.17/min on Enterprise to $0.29/min on Starter — with no per-call minimums, no transfer surcharges, and no SMS fees. For a 500-call campaign, the difference in what you actually pay can be significant.",
  },
  {
    icon: Code2,
    title: "No developer needed — ever",
    body: "Bland AI's Pathways builder and API require a developer to build call logic, handle webhooks, write JavaScript mid-call execution nodes, configure CRM field mappings, and test edge cases like voicemail detection and call timeouts. Callengo eliminates all of this. You connect your CRM through a guided OAuth flow, upload or sync your contact list, select the agent type, and press launch. Your sales ops manager or practice manager can run the entire platform without filing a single engineering ticket.",
  },
  {
    icon: GitMerge,
    title: "Full-loop automation out of the box",
    body: "A completed call is just the beginning. Callengo automatically writes outcomes to your CRM (contact status, extracted data fields, notes), books or confirms calendar events, triggers follow-up calls for no-answers, leaves voicemails when appropriate, and escalates hot leads or urgent reschedule requests via Slack notification. Assembling this same pipeline in Bland AI requires building each of these integrations manually through their API — a substantial engineering investment that most businesses simply can't afford.",
  },
  {
    icon: HeadphonesIcon,
    title: "Real support when you need it",
    body: "Bland AI's primary support channel is a community Discord server, where response times and answer quality depend on community availability. For paid Callengo plans, support is handled by the Callengo team directly, including onboarding guidance, call script optimization, and CRM integration troubleshooting. For Enterprise customers, dedicated account management is included. When you're running hundreds of calls per day, having a support team you can reach matters.",
  },
  {
    icon: Shield,
    title: "Built for business verticals, not just developers",
    body: "Bland AI's platform is designed around flexibility for technical teams building novel voice applications. Callengo is designed around specific business outcomes: reducing healthcare no-show rates, cleaning CRM databases for sales teams, qualifying inbound and outbound leads for SDR organizations, and confirming service appointments for field operations teams. Every default, every template, every integration option has been shaped by the real needs of these verticals — including a Clio integration purpose-built for law firms and a SimplyBook.me connection for service-based businesses.",
  },
];

/* ─── Pricing comparison data ─── */
const callengoPlans = [
  { name: "Free", price: "$0", calls: "~10", minutes: "15 (one-time)", concurrent: "1", overage: "Blocked", maxDuration: "3 min" },
  { name: "Starter", price: "$99/mo", calls: "~200", minutes: "300", concurrent: "2", overage: "$0.29/min", maxDuration: "3 min" },
  { name: "Growth", price: "$179/mo", calls: "~400", minutes: "600", concurrent: "3", overage: "$0.26/min", maxDuration: "4 min" },
  { name: "Business", price: "$299/mo", calls: "~800", minutes: "1,200", concurrent: "5", overage: "$0.23/min", maxDuration: "5 min" },
  { name: "Teams", price: "$649/mo", calls: "~1,500", minutes: "2,250", concurrent: "10", overage: "$0.20/min", maxDuration: "6 min" },
  { name: "Enterprise", price: "$1,499/mo", calls: "~4,000+", minutes: "6,000", concurrent: "Unlimited", overage: "$0.17/min", maxDuration: "Unlimited" },
];

const blandaiPlans = [
  { name: "Start", price: "Free", perMin: "$0.14/min", dailyCap: "100 calls/day", concurrent: "10", clones: "1" },
  { name: "Build", price: "$299/mo", perMin: "$0.12/min", dailyCap: "2,000 calls/day", concurrent: "50", clones: "5" },
  { name: "Scale", price: "$499/mo", perMin: "$0.11/min", dailyCap: "5,000 calls/day", concurrent: "100", clones: "15" },
  { name: "Enterprise", price: "Custom", perMin: "Negotiated", dailyCap: "Custom", concurrent: "Custom", clones: "Custom" },
];

export default function CallengoVsBlandAI() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <Header />
      <main className="pt-24 relative overflow-hidden">
        <AnimatedBlobs />

        {/* ─── Hero ─── */}
        <section className="section relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-foreground-tertiary mb-8" style={{ fontFamily: "var(--font-body)" }}>
              <Link href="/" className="hover:text-electric transition-colors">Home</Link>
              <span>/</span>
              <Link href="/compare" className="hover:text-electric transition-colors">Compare</Link>
              <span>/</span>
              <span className="text-foreground">Callengo vs Bland AI</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-6">
                Updated March 2026
              </span>
              <h1 className="text-display-sm mb-6">
                Callengo vs Bland AI:
                <br />
                <span className="gradient-text">Business automation vs. developer infrastructure</span>
              </h1>
              <p
                className="text-xl text-foreground-secondary leading-relaxed max-w-3xl"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Both platforms use AI to automate phone calls. But what they deliver to a business team is fundamentally different.
                Bland AI gives developers a powerful infrastructure layer to build voice applications from scratch.
                Callengo gives sales, ops, and clinical teams a ready-to-use automation platform that requires zero code,
                ships with purpose-built agents, and connects directly to the CRMs and calendars they already use.
                This guide breaks down the real differences in pricing, features, setup, and outcomes — with no marketing fluff.
              </p>
            </motion.div>

            {/* Quick verdict cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12"
            >
              {[
                { label: "Setup time", callengo: "< 15 min", blandai: "Days–weeks", winner: "callengo" },
                { label: "Comparable plan cost", callengo: "$299/mo (Business)", blandai: "$299/mo (Build)", winner: "tie" },
                { label: "Developers required", callengo: "None", blandai: "Yes", winner: "callengo" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl border border-border p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric/60 to-electric/20" />
                  <p className="text-xs font-semibold text-foreground-tertiary uppercase tracking-wider mb-3" style={{ fontFamily: "var(--font-body)" }}>
                    {stat.label}
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-foreground-tertiary mb-0.5" style={{ fontFamily: "var(--font-body)" }}>Callengo</p>
                      <p className={`font-bold text-sm ${stat.winner === "callengo" ? "text-accent" : "text-foreground"}`}>
                        {stat.callengo}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-foreground-tertiary mb-0.5" style={{ fontFamily: "var(--font-body)" }}>Bland AI</p>
                      <p className={`font-bold text-sm ${stat.winner === "blandai" ? "text-accent" : "text-foreground-secondary"}`}>
                        {stat.blandai}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── Executive Overview ─── */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-6">
                The full picture
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                What these platforms actually do — and for whom
              </h2>

              <div className="space-y-6 text-foreground-secondary text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                <p>
                  Bland AI entered the market as one of the earliest and most capable AI voice infrastructure platforms, offering developers a programmable layer to build voice agents on top of. Its core product is an API and a visual call flow builder called Pathways, which allows technically skilled teams to design branching conversation trees, execute server-side JavaScript mid-call, route to human agents via SIP, and pipe outcomes into CRMs via webhooks. As of early 2026, Bland AI charges $0.12–$0.14/min depending on the plan, plus a $0.015 minimum fee per outbound call attempt, transfer surcharges, SMS fees, and TTS character costs. The result is a platform with substantial power and flexibility — but one that demands a developer to unlock it and whose total cost of ownership is difficult to forecast without careful usage modeling.
                </p>
                <p>
                  Callengo was built from a different starting point. The problem it set out to solve is not "how do we give developers maximum control over voice AI?" but rather "how do we let a VP of Sales, a clinic manager, or an ops director automate their outbound call workflows without involving engineering?" The answer is three purpose-built agents — Lead Qualification, Appointment Confirmation, and Data Validation — each of which ships with a proven call script, structured outcome taxonomy, smart follow-up logic, voicemail handling, CRM field mappings, and calendar sync. You connect your CRM via OAuth, upload a contact list (or sync it from HubSpot, Salesforce, or Pipedrive), pick your agent, and launch. The entire process takes under 15 minutes for most users. Pricing is straightforward: flat monthly plans from $99 to $1,499 with a single per-minute overage rate ranging from $0.17 to $0.29/min — no per-call fees, no SMS surcharges, no surprises.
                </p>
                <p>
                  The comparison is most useful for teams evaluating both platforms. If you are a developer building a custom voice application — a complex inbound routing system, a multi-step conversational agent for a novel use case, or an embedded voice feature for an existing product — Bland AI's infrastructure approach gives you the flexibility you need. If you run a business team and want to automate outbound calls for a specific, repeated workflow (qualifying your leads, confirming your appointments, cleaning your contact database), Callengo will get you to value faster, with less cost, and without any coding. The sections that follow break down each dimension in detail, starting with the pricing structure where the differences are most consequential.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Pricing Comparison ─── */}
        <section className="section relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">
                Pricing breakdown
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                What you actually pay — with and without the fine print
              </h2>
              <p
                className="text-lg text-foreground-secondary leading-relaxed max-w-3xl"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Both platforms have a per-minute cost at their core, but Bland AI layers several additional fees on top that meaningfully change the effective cost per campaign. Below are the published plan rates for both platforms as of March 2026, followed by a breakdown of Bland AI's ancillary fees and how they compare to Callengo's flat overage model.
              </p>
            </motion.div>

            {/* Two pricing tables side by side */}
            <div className="grid lg:grid-cols-2 gap-8 mb-10">
              {/* Callengo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl border border-electric/30 overflow-hidden shadow-lg">
                  <div className="px-6 py-5 bg-electric/5 border-b border-electric/20 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-electric/10 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-electric" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Callengo Plans</h3>
                      <p className="text-xs text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>Flat monthly + single overage rate</p>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left px-4 py-3 text-xs font-semibold text-foreground-tertiary uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Plan</th>
                          <th className="text-left px-4 py-3 text-xs font-semibold text-foreground-tertiary uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Price</th>
                          <th className="text-left px-4 py-3 text-xs font-semibold text-foreground-tertiary uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Minutes</th>
                          <th className="text-left px-4 py-3 text-xs font-semibold text-foreground-tertiary uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Overage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {callengoPlans.map((plan, i) => (
                          <tr key={plan.name} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-background-secondary/30" : ""}`}>
                            <td className="px-4 py-3 font-semibold">{plan.name}</td>
                            <td className="px-4 py-3 text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>{plan.price}</td>
                            <td className="px-4 py-3 text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>{plan.minutes}</td>
                            <td className="px-4 py-3">
                              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${plan.overage === "Blocked" ? "bg-red-50 text-red-600" : "bg-accent/10 text-accent"}`}>
                                {plan.overage}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="px-6 py-4 bg-accent/5 border-t border-accent/20">
                    <p className="text-xs text-accent font-semibold" style={{ fontFamily: "var(--font-body)" }}>
                      ✓ No per-call fees · No transfer surcharges · No SMS fees · Annual billing saves 12%
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Bland AI */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl border border-border overflow-hidden">
                  <div className="px-6 py-5 bg-background-secondary border-b border-border flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-foreground-tertiary/10 flex items-center justify-center">
                      <Code2 className="w-4 h-4 text-foreground-tertiary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Bland AI Plans</h3>
                      <p className="text-xs text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>Per-minute + multiple ancillary fees</p>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left px-4 py-3 text-xs font-semibold text-foreground-tertiary uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Plan</th>
                          <th className="text-left px-4 py-3 text-xs font-semibold text-foreground-tertiary uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Price</th>
                          <th className="text-left px-4 py-3 text-xs font-semibold text-foreground-tertiary uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>/min rate</th>
                          <th className="text-left px-4 py-3 text-xs font-semibold text-foreground-tertiary uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Daily cap</th>
                        </tr>
                      </thead>
                      <tbody>
                        {blandaiPlans.map((plan, i) => (
                          <tr key={plan.name} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-background-secondary/30" : ""}`}>
                            <td className="px-4 py-3 font-semibold">{plan.name}</td>
                            <td className="px-4 py-3 text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>{plan.price}</td>
                            <td className="px-4 py-3 text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>{plan.perMin}</td>
                            <td className="px-4 py-3 text-foreground-secondary text-xs" style={{ fontFamily: "var(--font-body)" }}>{plan.dailyCap}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="px-6 py-4 bg-amber-50 border-t border-amber-200">
                    <p className="text-xs text-amber-700 font-semibold" style={{ fontFamily: "var(--font-body)" }}>
                      ⚠ Plus: $0.015/call min · $0.025–$0.05/min transfers · $0.02/SMS · $0.02/100 chars TTS
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Hidden costs callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-amber-50 border border-amber-200 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-900 mb-3">Understanding Bland AI's ancillary fees</h3>
                  <p
                    className="text-amber-800 leading-relaxed text-sm mb-4"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    The $0.12/min headline rate on Bland AI's Build plan does not reflect your actual cost per campaign. Every outbound call attempt incurs a $0.015 minimum charge regardless of whether it connects — which means on a contact list where 45% of numbers go unanswered (an industry-typical rate), you are paying that flat fee on nearly half your campaign. If any calls are transferred to a human agent, you pay an additional $0.025 to $0.05 per minute on top of the per-minute call cost. Any SMS follow-up messages are billed at $0.02 each. And if your agent uses text-to-speech with dynamic content, there are per-character TTS fees on paid plans. Running a 1,000-call outbound campaign where 450 don't connect, 100 transfer, and 200 receive follow-up SMS messages, the true cost on the Build plan can be 40–60% higher than the per-minute rate alone would suggest.
                  </p>
                  <p
                    className="text-amber-800 leading-relaxed text-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Callengo's pricing model has no per-call minimums, no transfer fees, and no SMS charges. If you exceed the minutes included in your plan, a single flat overage rate applies — $0.23/min on the Business plan, $0.17/min on Enterprise. That's the entire bill. For teams running recurring campaigns, this predictability is operationally significant: you can budget for a quarter in advance without worrying about usage spikes distorting the numbers.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Feature Matrix ─── */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">
                Feature matrix
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold">
                Callengo vs Bland AI — full feature comparison
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-border overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-background-secondary">
                      <th className="text-left px-6 py-4 font-semibold text-foreground w-2/5">Feature</th>
                      <th className="text-left px-6 py-4 font-semibold text-electric w-[30%]">Callengo</th>
                      <th className="text-left px-6 py-4 font-semibold text-foreground-secondary w-[30%]">Bland AI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {featureRows.map((row, i) => (
                      <tr key={row.feature} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-background-secondary/30"}`}>
                        <td className="px-6 py-4 font-medium text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>{row.feature}</td>
                        <td className="px-6 py-4">
                          <span className={`text-sm font-medium flex items-center gap-1.5 ${row.callengoPro ? "text-accent" : "text-foreground-secondary"}`} style={{ fontFamily: "var(--font-body)" }}>
                            {row.callengoPro && <CheckCircle2 className="w-4 h-4 shrink-0" />}
                            {row.callengo}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>
                          <span className="flex items-center gap-1.5">
                            {row.callengoPro && <XCircle className="w-4 h-4 text-red-400 shrink-0" />}
                            {row.blandai}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── What Bland AI Does Well ─── */}
        <section className="section relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-border text-foreground-secondary bg-background-secondary mb-6">
                Fair assessment
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Where Bland AI genuinely excels
              </h2>
              <div className="space-y-5 text-foreground-secondary text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                <p>
                  Bland AI deserves credit for what it is: a powerful, low-level voice infrastructure platform with serious engineering depth. If your team includes developers who want total control over every turn of a conversation — the logic branching, the voice parameters, the mid-call API executions, the custom memory systems — Bland AI gives you that flexibility in a way that few platforms do. Its Pathways builder allows teams to construct complex conditional call trees with server-side JavaScript execution nodes that can hit third-party APIs, query databases, or trigger business logic in real time during a call. For teams building novel voice applications that don't fit pre-defined templates, this is genuinely valuable.
                </p>
                <p>
                  Bland AI's voice quality and latency infrastructure are also notable. The platform has invested heavily in reducing the response time between the AI and the caller, with average latency around 800ms — competitive for the category and sufficient for natural-feeling conversations at scale. Their voice cloning capabilities (up to 15 custom clones on the Scale plan) are among the most flexible available, allowing teams to create branded voice identities or match specific regional accents. For organizations building consumer-facing voice experiences where brand voice matters, this flexibility has real value.
                </p>
                <p>
                  For high-volume developers — companies running tens of thousands of calls per day — Bland AI's Scale plan at $499/mo with 100 concurrent calls and a 5,000/day limit offers strong infrastructure economics at that price point. Enterprises with their own telephony infrastructure (Twilio, SIP) also benefit from Bland AI's bring-your-own-telephony support, which eliminates transfer surcharges and gives them maximum control over carrier costs. These advantages are real and relevant — for the right buyer.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Why Callengo ─── */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">
                Why Callengo
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold max-w-2xl">
                Where Callengo pulls decisively ahead — for business teams
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {callengoAdvantages.map((adv, index) => {
                const Icon = adv.icon;
                return (
                  <motion.div
                    key={adv.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="bg-white rounded-2xl border border-border p-8 relative overflow-hidden group hover:border-electric/20 transition-colors"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-electric" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{adv.title}</h3>
                    <p
                      className="text-foreground-secondary text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {adv.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── Use Case Analysis ─── */}
        <section className="section relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">
                Use cases
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Which platform fits which use case?
              </h2>
              <p className="text-lg text-foreground-secondary max-w-3xl leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                The right choice depends almost entirely on whether your team is building a custom voice product or running a business workflow. Here's how specific use cases map to each platform.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: CalendarCheck,
                  useCase: "Appointment confirmation & no-show reduction",
                  winner: "callengo",
                  analysis: "Callengo's Appointment Confirmation Agent is purpose-built for this workflow. It calls contacts 24–48 hours before scheduled appointments, handles reschedules on the spot, triggers automatic retry calls for no-answers, and updates your calendar (Google, Outlook, or SimplyBook.me) with the confirmed or rescheduled status. Reproducing this in Bland AI requires building the confirmation logic, the reschedule conversation, the no-show retry rules, and the calendar integration API calls from scratch — a multi-week development project. For healthcare clinics, service businesses, and professional services firms, Callengo is the clear choice for this use case.",
                },
                {
                  icon: PhoneCall,
                  useCase: "Outbound lead qualification (BANT scoring)",
                  winner: "callengo",
                  analysis: "Callengo's Lead Qualification Agent runs structured BANT-based qualification calls, scores leads hot/warm/cold, books meetings directly into your calendar for qualified prospects, and syncs scores and notes back to HubSpot, Salesforce, Pipedrive, or Zoho CRM. Bland AI can technically be configured to do this, but requires building the conversation flow, integrating the calendar booking, mapping CRM fields, and handling the post-call data sync through custom API development. For SDR-heavy organizations and SaaS sales teams, Callengo's ready-to-deploy lead qualification agent delivers measurable results without a single line of code.",
                },
                {
                  icon: Database,
                  useCase: "CRM data validation & database hygiene",
                  winner: "callengo",
                  analysis: "Data validation is one of the most underserved workflows in outbound automation. Callengo's Data Validation Agent calls contacts to verify email addresses, phone numbers, job titles, and company information, then writes verified or flagged status directly back to the relevant CRM fields. It handles wrong-number detection, contact unavailability, and scheduled callback logic automatically. For real estate teams, financial services firms, and any organization with a large contact database that degrades over time, this agent alone can justify the Callengo subscription.",
                },
                {
                  icon: Code2,
                  useCase: "Custom voice application development",
                  winner: "blandai",
                  analysis: "If you need to build something that doesn't fit a pre-defined template — a sophisticated inbound routing system, a multi-step interactive voice response that integrates with a proprietary database, or a custom voice agent for an embedded product — Bland AI's API gives you the control to do it. The Pathways builder, custom JavaScript nodes, and SIP integration make it a strong foundation for developer-led voice application projects.",
                },
                {
                  icon: TrendingUp,
                  useCase: "High-volume enterprise outbound (10K+ calls/day)",
                  winner: "blandai",
                  analysis: "Bland AI's Scale plan supports 100 concurrent calls and 5,000 calls per day, with Enterprise tiers going beyond that on custom pricing. For organizations running very high-volume outbound campaigns who also have the engineering resources to build and maintain the call logic, Bland AI's infrastructure can handle the throughput. Callengo's Enterprise plan supports unlimited concurrent calls and is designed for high-volume B2B use cases, but at the extreme enterprise scale with custom call logic, Bland AI's raw infrastructure flexibility may be preferred.",
                },
                {
                  icon: Users,
                  useCase: "Non-technical business teams (ops, sales, clinical)",
                  winner: "callengo",
                  analysis: "This is the clearest differentiation. If your team does not include developers and you cannot allocate engineering resources to building, testing, and maintaining a voice automation stack, Bland AI is not a realistic option for production use. Callengo is designed specifically for operations managers, sales directors, practice managers, and marketing teams who need to deploy automation in hours, not months. The guided setup, pre-built templates, no-code CRM connections, and direct support make Callengo the only practical option for this buyer.",
                },
              ].map((uc, index) => {
                const Icon = uc.icon;
                return (
                  <motion.div
                    key={uc.useCase}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="bg-white rounded-2xl border border-border p-7 relative overflow-hidden"
                  >
                    <div className={`absolute top-0 left-0 w-full h-1 ${uc.winner === "callengo" ? "bg-gradient-to-r from-electric to-electric/30" : "bg-gradient-to-r from-foreground-tertiary/40 to-transparent"}`} />
                    <div className="w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-electric" />
                    </div>
                    <h3 className="font-semibold text-base mb-2">{uc.useCase}</h3>
                    <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4 ${uc.winner === "callengo" ? "bg-electric/10 text-electric" : "bg-foreground-tertiary/10 text-foreground-secondary"}`}>
                      {uc.winner === "callengo" ? "✓ Callengo recommended" : "◈ Bland AI preferred"}
                    </span>
                    <p
                      className="text-foreground-secondary text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {uc.analysis}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── Setup & Integration Deep Dive ─── */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-6">
                Setup & integrations
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                The real cost of "developer required" vs. no-code
              </h2>
              <div className="space-y-6 text-foreground-secondary text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                <p>
                  The time-to-value gap between Callengo and Bland AI is not measured in features — it's measured in weeks and engineering hours. Setting up a production-ready outbound campaign in Bland AI requires building and testing a Pathways call flow (branching logic for connected calls, no-answers, voicemails, and wrong numbers), writing webhook handlers to receive call completion data, building CRM integration code to parse and write outcome fields, creating follow-up scheduling logic for contacts who didn't answer, configuring calendar booking flows for qualified leads or rescheduled appointments, and deploying and monitoring the entire infrastructure. For an experienced developer, this might take two to four weeks. For an organization without in-house voice API experience, it often means hiring a contractor or agency — adding thousands of dollars to the cost before you've run a single campaign.
                </p>
                <p>
                  Callengo's setup flow is designed to eliminate all of this. You create an account, connect your CRM via OAuth (a guided, point-and-click process for HubSpot, Salesforce, Pipedrive, Zoho, or Clio), choose your agent template (Lead Qualification, Appointment Confirmation, or Data Validation), configure the agent parameters (call timing, follow-up rules, voice, language), upload your contact list or sync it from your CRM, and launch the campaign. The system handles voicemail detection, retry scheduling, CRM writes, calendar events, and Slack notifications automatically — there's nothing to build. Most users complete their first campaign setup in under 15 minutes.
                </p>
                <p>
                  Callengo's integration depth also deserves specific attention in the context of vertical markets. The native Clio integration, purpose-built for law firms, allows legal practices to run appointment confirmation and data validation campaigns that sync directly with their matter management workflows — something that would require custom API development in Bland AI. Similarly, the SimplyBook.me integration for service-based businesses (clinics, salons, fitness studios, home services) handles the full appointment confirmation and reschedule cycle without requiring any Zapier intermediate steps. These aren't generic webhook connections — they're opinionated, pre-configured integrations that understand the data models of specific business tools.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Compliance ─── */}
        <section className="section relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-6">
                Compliance & security
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Both platforms are enterprise-grade on compliance
              </h2>
              <div className="space-y-5 text-foreground-secondary text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                <p>
                  Callengo and Bland AI are both SOC 2 and HIPAA compliant, which is the baseline requirement for any healthcare or financial services use case. Both platforms support GDPR-compliant data handling for European deployments, and both maintain call recordings with configurable retention policies. Callengo includes automatic DNC (Do Not Call) list checking and TCPA compliance features within the platform, meaning campaigns respect opt-out lists and time-of-day restrictions without requiring manual configuration. Both platforms encrypt call data in transit and at rest.
                </p>
                <p>
                  One compliance dimension where Callengo has an advantage for regulated industries is the Clio integration for legal firms. Because Clio is the dominant practice management platform for law firms across North America, having a pre-built, compliant integration that understands client matter relationships (rather than just contact records) makes Callengo significantly more useful for legal sector deployments than a generic voice infrastructure layer that would need to be custom-integrated with Clio's API.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Final Verdict ─── */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-6">
                Final verdict
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                The bottom line for 2026
              </h2>
              <div className="space-y-6 text-foreground-secondary text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                <p>
                  Bland AI is a serious platform built for developers who need infrastructure-level control over voice AI. If you are an engineer building a custom voice product, a high-volume call center with an in-house development team, or a tech company embedding voice automation into a proprietary platform, Bland AI's flexibility justifies its complexity. The Pathways builder, custom JavaScript execution, SIP support, and voice cloning capabilities are genuine differentiators at the infrastructure layer.
                </p>
                <p>
                  Callengo is built for a fundamentally different buyer. If you lead a sales team and want your SDRs talking only to qualified prospects, if you manage a healthcare practice and want to cut your no-show rate by half, or if you run operations for a service business and want to eliminate the manual effort of appointment confirmation and database hygiene — Callengo is the more direct, more affordable, and faster-to-value path. You don't need developers, you don't need to build a call flow, and you don't need to figure out the best BANT script for your industry. You get three production-tested agents, a no-code setup experience, deep CRM integration, and a single transparent per-minute overage rate.
                </p>
                <p>
                  When comparing at the same $299/month price point — Callengo Business vs. Bland AI Build — Callengo includes 1,200 minutes, 5 concurrent calls, native CRM integrations, smart voicemail detection, follow-up automation, calendar sync, and no ancillary fees. Bland AI Build includes a per-minute rate ($0.12) you pay as you go, 50 concurrent calls, and an API you need to build on. For a business team, the comparison isn't close. For a developer team building at scale with custom needs, Bland AI's higher concurrency limits and infrastructure control may win. The right tool depends entirely on who's using it — and what they need to get done.
                </p>
              </div>

              {/* Summary verdict boxes */}
              <div className="grid md:grid-cols-2 gap-5 mt-10">
                <div className="bg-electric/5 border border-electric/20 rounded-2xl p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-electric/10 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-electric" />
                    </div>
                    <h3 className="font-bold text-electric">Choose Callengo if…</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {[
                      "You need automation running within the week",
                      "Your team has no developers to dedicate to the project",
                      "You want appointment confirmation, lead qualification, or data validation out of the box",
                      "You use HubSpot, Pipedrive, Zoho, Clio, or SimplyBook.me",
                      "You want one predictable monthly bill with no per-call fees",
                      "You want follow-up automation, voicemail handling, and CRM sync included",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-background-secondary border border-border rounded-2xl p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-foreground-tertiary/10 flex items-center justify-center">
                      <Code2 className="w-4 h-4 text-foreground-secondary" />
                    </div>
                    <h3 className="font-bold text-foreground-secondary">Consider Bland AI if…</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {[
                      "You have a dedicated developer team to build call flows",
                      "You need a fully custom conversation logic that no template covers",
                      "You're building an embedded voice product, not running campaigns",
                      "You need voice cloning at scale (15+ custom voices)",
                      "You have existing Twilio or SIP infrastructure to leverage",
                      "Your use case requires 50+ concurrent calls and 2,000+ calls/day",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>
                        <Clock className="w-4 h-4 text-foreground-tertiary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="section relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-6">
                FAQ
              </span>
              <h2 className="text-3xl font-semibold mb-8">
                Frequently asked questions
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Is Callengo cheaper than Bland AI for a typical outbound campaign?",
                    a: "For most structured outbound campaigns (lead qualification, appointment confirmation, data validation), yes. Bland AI's per-minute rate appears lower on paper ($0.12/min on Build vs. Callengo's $0.23/min Business overage), but Bland AI adds a $0.015 per-call minimum, $0.025–$0.05/min transfer fees, and $0.02/SMS that substantially increase the effective rate. Callengo's Business plan also includes 1,200 minutes in the flat fee, so you only pay overage if you exceed that. For a team running 500–800 calls per month, Callengo's all-in cost is typically lower than Bland AI's Build plan once all ancillary fees are counted.",
                  },
                  {
                    q: "Can I migrate from Bland AI to Callengo?",
                    a: "Yes. If you have been running campaigns on Bland AI, migrating to Callengo typically involves connecting your CRM (HubSpot, Salesforce, Pipedrive, Zoho, or Clio) via OAuth, reviewing the relevant agent template, and launching a new campaign. Your contact history and CRM data are preserved since Callengo reads from and writes to the same CRM records. Callengo's team can assist with the migration for Business and Teams plan customers.",
                  },
                  {
                    q: "Does Callengo have an API like Bland AI?",
                    a: "Callengo is primarily a no-code platform and is not designed as a raw voice infrastructure API. For teams who need programmatic access, Callengo supports webhook outputs for campaign events and integrates with Zapier, Make, and n8n for custom automation flows. If your use case requires deeply custom API-level control over conversation logic, Bland AI's infrastructure approach is likely a better technical fit.",
                  },
                  {
                    q: "How does Callengo handle the calls that Bland AI provides the infrastructure for?",
                    a: "Callengo uses enterprise-grade AI voice infrastructure to deliver calls through its platform. The key difference is the layer at which you interact with it: Callengo abstracts the infrastructure complexity into a no-code campaign management experience, while Bland AI exposes that infrastructure directly to developers. You get the same quality of AI-driven conversations with Callengo, but without needing to build or maintain the underlying call logic.",
                  },
                  {
                    q: "What languages does Callengo support compared to Bland AI?",
                    a: "Callengo's standard plans support English-language campaigns across North America and major English-speaking markets. Bland AI's standard plans are also primarily English, with additional language support available through enterprise arrangements. If multilingual support across a wide range of languages is a core requirement, verify current language availability with both vendors before committing.",
                  },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white rounded-2xl border border-border p-7"
                  >
                    <h3 className="font-semibold text-base mb-3">{faq.q}</h3>
                    <p className="text-foreground-secondary text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                      {faq.a}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Other comparisons ─── */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-semibold">Compare Callengo with other platforms</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "Vapi", slug: "vapi", desc: "AI voice infrastructure API" },
                { name: "Retell AI", slug: "retell-ai", desc: "Low-latency voice SDK" },
                { name: "Synthflow", slug: "synthflow", desc: "No-code voice builder" },
                { name: "Air AI", slug: "air-ai", desc: "Conversational AI sales" },
                { name: "Thoughtly", slug: "thoughtly", desc: "AI call center platform" },
                { name: "Aircall", slug: "aircall", desc: "Cloud phone system" },
                { name: "Dialpad AI", slug: "dialpad", desc: "AI-powered cloud comms" },
                { name: "JustCall", slug: "justcall", desc: "AI sales dialer" },
              ].map((comp) => (
                <Link
                  key={comp.slug}
                  href={`/compare/${comp.slug}`}
                  className="bg-white rounded-xl border border-border p-5 hover:border-electric/30 hover:shadow-md transition-all group flex items-center justify-between"
                >
                  <div>
                    <p className="font-semibold text-sm group-hover:text-electric transition-colors">{comp.name}</p>
                    <p className="text-xs text-foreground-tertiary mt-0.5" style={{ fontFamily: "var(--font-body)" }}>{comp.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-foreground-tertiary group-hover:text-electric transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="section relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl gradient-bg p-12 md:p-20"
            >
              <div className="absolute inset-0 overflow-hidden opacity-90">
                <div className="absolute -top-1/4 right-[-10%] w-3/5 h-[120%] bg-gradient-to-br from-white/20 via-[#8B96C8]/15 to-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-1/3 left-[-10%] w-1/2 h-full bg-gradient-to-br from-[#8B96C8]/20 via-white/12 to-[#4F5FE8]/10 rounded-full blur-3xl" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E2D6B]/40 via-[#1E2D6B]/15 to-transparent" />

              <div className="relative z-10 max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
                  Ready to see the difference
                  <br />
                  for your business?
                </h2>
                <p
                  className="text-xl text-white/70 mb-10 max-w-xl"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Start with 15 free minutes — no credit card, no developers, no commitment. Set up your first AI-powered campaign in under 15 minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://app.callengo.com/auth/signup"
                    className="inline-flex items-center gap-2 bg-white text-deep-indigo hover:bg-white/90 px-8 py-4 rounded-xl font-semibold transition-colors"
                  >
                    Start free — 15 min included
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="/pricing"
                    className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl transition-colors"
                  >
                    View pricing plans
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
