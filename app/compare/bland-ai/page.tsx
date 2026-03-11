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
  Code2,
  LayoutTemplate,
  TrendingUp,
  DollarSign,
  HeadphonesIcon,
  GitMerge,
  CalendarCheck,
  Database,
  PhoneCall,
  Users,
} from "lucide-react";

/* ─── Schema Markup ─── */
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://callengo.com/compare/bland-ai",
      url: "https://callengo.com/compare/bland-ai",
      name: "Callengo vs Bland AI: Full Comparison 2026",
      description:
        "A detailed comparison of Callengo and Bland AI covering pricing, features, integrations, setup complexity, and real-world use cases. Find out which AI voice automation platform is right for your business in 2026.",
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
        "An in-depth comparison of Callengo and Bland AI covering pricing plans, per-minute rates, hidden fees, CRM integrations, setup experience, and ideal use cases. Updated for 2026.",
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
            text: "It depends on usage. Bland AI's Build plan starts at $299/month at $0.12/min, but adds per-call minimums ($0.015/call), transfer fees ($0.025 to $0.05/min), and SMS fees ($0.02/message). Callengo's Business plan is also $299/month with a flat $0.23/min overage rate and no per-call or per-SMS fees. For structured outbound campaigns, Callengo's total cost is typically lower and always more predictable.",
          },
        },
        {
          "@type": "Question",
          name: "Does Callengo require coding to set up?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Callengo is entirely no-code. You select one of three pre-built agent templates, connect your CRM, upload your contact list, and launch. Bland AI requires developers to build call flows using their Pathways builder and API, involving JavaScript nodes, webhook configuration, and technical infrastructure work.",
          },
        },
        {
          "@type": "Question",
          name: "Which platform is better for appointment confirmation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Callengo has a dedicated Appointment Confirmation Agent with pre-built logic for confirmations, reschedules, no-show retry, and calendar sync with Google Calendar, Outlook, and SimplyBook.me. Bland AI is a generic infrastructure layer that requires you to build this entire workflow from scratch.",
          },
        },
        {
          "@type": "Question",
          name: "What CRM integrations does Callengo offer vs Bland AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Callengo integrates natively with HubSpot, Salesforce, Pipedrive, Zoho CRM, Microsoft Dynamics 365, and Clio, plus Google Calendar, Outlook, Zoom, Slack, Google Sheets, SimplyBook.me, and Zapier/Make/n8n. Bland AI offers native HubSpot, Salesforce, and Zendesk integrations, with additional connectivity through Zapier and Pipedream.",
          },
        },
        {
          "@type": "Question",
          name: "What are Bland AI's hidden costs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Beyond the per-minute rate, Bland AI charges $0.015 per outbound call attempt (even if it fails), $0.025 to $0.05 per minute for live call transfers, $0.02 per SMS message, and $0.02 per 100 characters for text-to-speech on paid plans. These fees can increase the effective cost per campaign by 40 to 60 percent compared to what the headline rate suggests.",
          },
        },
      ],
    },
  ],
};

/* ─── Data ─── */
const featureRows = [
  { feature: "Setup time", callengo: "Under 15 minutes", blandai: "Days to weeks", callengoPro: true },
  { feature: "Technical expertise required", callengo: "None", blandai: "Developer required", callengoPro: true },
  { feature: "Pre-built agent templates", callengo: "3 vertical agents", blandai: "None, build from scratch", callengoPro: true },
  { feature: "Lead Qualification Agent", callengo: "BANT scoring included", blandai: "Custom build required", callengoPro: true },
  { feature: "Appointment Confirmation Agent", callengo: "Full logic included", blandai: "Custom build required", callengoPro: true },
  { feature: "Data Validation Agent", callengo: "CRM writes included", blandai: "Custom build required", callengoPro: true },
  { feature: "Follow-up automation", callengo: "Up to unlimited, by plan", blandai: "Custom code required", callengoPro: true },
  { feature: "No-show auto-retry", callengo: "Yes (Growth and above)", blandai: "Custom code required", callengoPro: true },
  { feature: "Voicemail detection", callengo: "Smart detection (Starter+)", blandai: "Basic detection", callengoPro: true },
  { feature: "Calendar sync", callengo: "Google, Outlook, Zoom, SimplyBook.me", blandai: "Via custom webhook or API", callengoPro: true },
  { feature: "HubSpot native integration", callengo: "Business and above", blandai: "Yes", callengoPro: false },
  { feature: "Salesforce native integration", callengo: "Teams and above", blandai: "Yes", callengoPro: false },
  { feature: "Pipedrive integration", callengo: "Business and above", blandai: "Not native", callengoPro: true },
  { feature: "Clio integration (legal)", callengo: "Business and above", blandai: "Not available", callengoPro: true },
  { feature: "Slack notifications", callengo: "Starter and above", blandai: "Yes", callengoPro: false },
  { feature: "Zapier / Make / n8n", callengo: "Starter and above", blandai: "Zapier and Pipedream", callengoPro: false },
  { feature: "Per-call minimum fee", callengo: "None", blandai: "$0.015 per call", callengoPro: true },
  { feature: "Transfer surcharge", callengo: "None", blandai: "$0.025 to $0.05/min", callengoPro: true },
  { feature: "SMS fees", callengo: "None", blandai: "$0.02 per message", callengoPro: true },
  { feature: "Predictable monthly cap", callengo: "Yes, plan-based", blandai: "No, usage compounds", callengoPro: true },
  { feature: "Free tier", callengo: "15 min free, always", blandai: "Free tier, 100 calls/day cap", callengoPro: false },
  { feature: "Live call transfer to human", callengo: "Yes", blandai: "Yes", callengoPro: false },
  { feature: "Voice cloning / custom voices", callengo: "4 curated voices", blandai: "Up to 15 clones (Scale plan)", callengoPro: false },
  { feature: "SOC 2 / HIPAA compliance", callengo: "Yes", blandai: "Yes", callengoPro: false },
  { feature: "Concurrent call limits", callengo: "1 to unlimited, by plan", blandai: "10 to 100, by plan", callengoPro: false },
  { feature: "Call recording retention", callengo: "30 days (12 months with add-on)", blandai: "Varies", callengoPro: false },
  { feature: "Dedicated support", callengo: "Email and onboarding on paid plans", blandai: "Community Discord only", callengoPro: true },
  { feature: "Daily call volume cap", callengo: "None", blandai: "100 to 5,000 per day, by plan", callengoPro: true },
];

const callengoPlans = [
  { name: "Free", price: "$0", minutes: "15 (one-time)", concurrent: "1", overage: "Blocked", maxDuration: "3 min" },
  { name: "Starter", price: "$99/mo", minutes: "300", concurrent: "2", overage: "$0.29/min", maxDuration: "3 min" },
  { name: "Growth", price: "$179/mo", minutes: "600", concurrent: "3", overage: "$0.26/min", maxDuration: "4 min" },
  { name: "Business", price: "$299/mo", minutes: "1,200", concurrent: "5", overage: "$0.23/min", maxDuration: "5 min" },
  { name: "Teams", price: "$649/mo", minutes: "2,250", concurrent: "10", overage: "$0.20/min", maxDuration: "6 min" },
  { name: "Enterprise", price: "$1,499/mo", minutes: "6,000", concurrent: "Unlimited", overage: "$0.17/min", maxDuration: "Unlimited" },
];

const blandaiPlans = [
  { name: "Start", price: "Free", perMin: "$0.14/min", dailyCap: "100 calls/day", concurrent: "10" },
  { name: "Build", price: "$299/mo", perMin: "$0.12/min", dailyCap: "2,000 calls/day", concurrent: "50" },
  { name: "Scale", price: "$499/mo", perMin: "$0.11/min", dailyCap: "5,000 calls/day", concurrent: "100" },
  { name: "Enterprise", price: "Custom", perMin: "Negotiated", dailyCap: "Custom", concurrent: "Custom" },
];

const callengoAdvantages = [
  {
    icon: LayoutTemplate,
    title: "Three agents, ready to launch",
    body: "Callengo ships with three production-ready agents: lead qualification with BANT scoring, appointment confirmation with auto-retry logic, and data validation with live CRM writes. Each comes with a tested call script, structured follow-up rules, and field mappings. Configuration takes minutes, not weeks.",
  },
  {
    icon: DollarSign,
    title: "Pricing you can actually budget",
    body: "Bland AI adds a $0.015 per-call minimum on every outbound attempt, whether it connects or not. It also charges $0.025 to $0.05 per minute on transfers, $0.02 per SMS, and TTS character fees on paid plans. Callengo uses a single overage rate per minute, with no per-call fees and no SMS charges. On a 1,000-call campaign, the difference adds up fast.",
  },
  {
    icon: Code2,
    title: "No developer. Not now, not ever.",
    body: "Bland AI's Pathways builder requires a developer to write call logic, handle webhooks, configure CRM field mappings, and test edge cases like voicemail detection and timeout rules. With Callengo, you connect your CRM via OAuth, upload a contact list, pick an agent, and launch. Your ops manager can run it without filing a single engineering ticket.",
  },
  {
    icon: GitMerge,
    title: "Every step automated, not just the call",
    body: "After a call ends, Callengo writes the outcome to your CRM, books or confirms calendar events, triggers follow-up calls for no-answers, and sends Slack alerts for hot leads or urgent reschedule requests. Building this same pipeline in Bland AI means writing each integration manually through their API.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support from people, not a Discord",
    body: "Bland AI's main support channel is a community Discord, where response time depends entirely on who's around. On Callengo paid plans, support comes from the Callengo team directly: onboarding guidance, call script help, and CRM troubleshooting. Enterprise customers get dedicated account management.",
  },
  {
    icon: Shield,
    title: "Built for specific verticals, not a blank canvas",
    body: "Bland AI gives developers maximum flexibility. Callengo gives healthcare clinics, sales teams, law firms, and service businesses a platform shaped around their specific workflows. That includes a native Clio integration for legal practices and a SimplyBook.me connection for service businesses, both of which would require custom API development in Bland AI.",
  },
];

const crossLinks = [
  { name: "Vapi", slug: "vapi", logo: "/logos/vapi.png", desc: "Developer-first voice API" },
  { name: "Retell AI", slug: "retell-ai", logo: "/logos/retell-ai.png", desc: "Low-latency voice SDK" },
  { name: "Synthflow", slug: "synthflow", logo: "/logos/synthflow.png", desc: "No-code voice builder" },
  { name: "Dialpad", slug: "dialpad", logo: "/logos/dialpad.png", desc: "Cloud phone system with AI" },
];

/* ─── Inline CTA component ─── */
function InlineCTA({ text, cta }: { text: string; cta: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-12"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-electric/5 border border-electric/20 rounded-2xl px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground-secondary text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
            {text}
          </p>
          <a
            href="https://app.callengo.com/auth/signup"
            className="shrink-0 inline-flex items-center gap-2 bg-electric text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-electric/90 transition-colors"
          >
            {cta}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function CallengoVsBlandAI() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <Header />
      <main className="pt-24 relative overflow-hidden">
        <AnimatedBlobs />

        {/* ─── Hero ─── */}
        <section className="section relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-foreground-tertiary mb-8" style={{ fontFamily: "var(--font-body)" }}>
              <Link href="/" className="hover:text-electric transition-colors">Home</Link>
              <span>/</span>
              <Link href="/compare" className="hover:text-electric transition-colors">Compare</Link>
              <span>/</span>
              <span className="text-foreground">Callengo vs Bland AI</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-6">
                  Updated March 2026
                </span>
                <h1 className="text-display-sm mb-5">
                  Callengo vs Bland AI
                  <br />
                  <span className="gradient-text">Business platform vs. developer API</span>
                </h1>
                <p
                  className="text-lg text-foreground-secondary leading-relaxed mb-8"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Both platforms use AI to automate phone calls. But what they deliver to a business team is fundamentally different. Bland AI is a programmable voice API for developers. Callengo is a ready-to-use automation platform for sales, ops, and clinical teams. This comparison breaks down the real differences in pricing, features, setup time, and business outcomes.
                </p>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Setup time", callengo: "< 15 min", blandai: "Days to weeks" },
                    { label: "Plan price", callengo: "$299/mo", blandai: "$299/mo" },
                    { label: "Developers needed", callengo: "None", blandai: "Required" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white rounded-xl border border-border p-4">
                      <p className="text-xs text-foreground-tertiary mb-2 font-medium" style={{ fontFamily: "var(--font-body)" }}>{stat.label}</p>
                      <p className="text-xs text-foreground-tertiary mb-0.5" style={{ fontFamily: "var(--font-body)" }}>Callengo</p>
                      <p className="font-bold text-sm text-accent">{stat.callengo}</p>
                      <p className="text-xs text-foreground-tertiary mt-2 mb-0.5" style={{ fontFamily: "var(--font-body)" }}>Bland AI</p>
                      <p className="font-semibold text-sm text-foreground-secondary">{stat.blandai}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right: logo comparison placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="bg-white rounded-2xl border border-dashed border-border p-10 flex flex-col items-center justify-center gap-6 min-h-[280px]">
                  <div className="flex items-center gap-8 w-full justify-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-20 h-20 rounded-2xl bg-background-secondary border border-border flex items-center justify-center overflow-hidden">
                        <img
                          src="/callengo-logo.svg"
                          alt="Callengo"
                          className="w-14 h-14 object-contain"
                        />
                      </div>
                      <span className="text-sm font-semibold">Callengo</span>
                    </div>
                    <span className="text-3xl font-bold text-foreground-tertiary">vs</span>
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-20 h-20 rounded-2xl bg-background-secondary border border-border flex items-center justify-center overflow-hidden">
                        <img
                          src="/logos/bland-ai.png"
                          alt="Bland AI"
                          className="w-14 h-14 object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                      </div>
                      <span className="text-sm font-semibold">Bland AI</span>
                    </div>
                  </div>
                  <p className="text-xs text-foreground-tertiary text-center" style={{ fontFamily: "var(--font-body)" }}>
                    Full comparison: pricing, features, integrations, and use cases
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Executive Overview ─── */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-6">
                    Overview
                  </span>
                  <h2 className="text-3xl font-semibold mb-6">What these platforms actually do, and for whom</h2>

                  <div className="space-y-5 text-foreground-secondary leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    <p>
                      Bland AI is one of the most capable AI voice infrastructure platforms on the market. It gives developers a programmable layer to build voice agents on top of, with a visual call flow builder called Pathways, server-side JavaScript execution during live calls, SIP routing, and webhook-based CRM integration. As of early 2026, Bland AI charges $0.12 to $0.14 per minute depending on plan, plus a $0.015 minimum fee per outbound call attempt, transfer surcharges, SMS fees, and TTS character costs.
                    </p>
                    <p>
                      The platform is powerful. It is also built for developers, and the two things are not unrelated. The flexibility that makes Bland AI useful for technical teams is exactly what makes it impractical for business teams without engineering resources.
                    </p>
                    <p>
                      Callengo started from a different question: how does a VP of Sales, a clinic manager, or an ops director automate outbound calls without involving engineering? The answer is three purpose-built agents: Lead Qualification, Appointment Confirmation, and Data Validation. Each ships with a proven call script, structured outcome logic, follow-up rules, voicemail handling, CRM field mappings, and calendar sync. You connect your CRM via OAuth, upload a contact list, pick an agent, and launch.
                    </p>
                    <p>
                      Pricing is straightforward. Flat monthly plans from $99 to $1,499 include a set number of minutes, with a single overage rate ranging from $0.17 to $0.29 per minute. No per-call fees, no SMS surcharges, no surprises.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar insight cards */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-2xl border border-border p-6"
                >
                  <p className="text-xs font-semibold text-foreground-tertiary uppercase tracking-wider mb-3" style={{ fontFamily: "var(--font-body)" }}>Bland AI is best for</p>
                  <ul className="space-y-2">
                    {["Developer-led teams", "Custom voice applications", "High-volume enterprise builds", "Bring-your-own Twilio setups"].map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>
                        <Code2 className="w-3.5 h-3.5 text-foreground-tertiary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-electric/5 border border-electric/20 rounded-2xl p-6"
                >
                  <p className="text-xs font-semibold text-electric uppercase tracking-wider mb-3" style={{ fontFamily: "var(--font-body)" }}>Callengo is best for</p>
                  <ul className="space-y-2">
                    {["Sales and ops teams", "Healthcare and clinics", "Real estate and legal", "No-code setup required"].map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Inline CTA 1 */}
        <InlineCTA
          text="Running outbound calls without a developer? Callengo is ready in 15 minutes."
          cta="Try free, no card needed"
        />

        {/* ─── Pricing ─── */}
        <section className="section relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">
                Pricing
              </span>
              <h2 className="text-3xl font-semibold mb-3">What you actually pay</h2>
              <p className="text-lg text-foreground-secondary max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
                Both platforms have a per-minute cost at their core, but Bland AI layers several additional fees on top that significantly change the effective cost per campaign.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 mb-10">
              {/* Callengo */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="bg-white rounded-2xl border border-electric/30 overflow-hidden shadow-lg">
                  <div className="px-6 py-5 bg-electric/5 border-b border-electric/20 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-electric/10 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-electric" />
                    </div>
                    <div>
                      <h3 className="font-bold">Callengo Plans</h3>
                      <p className="text-xs text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>Flat monthly + single overage rate</p>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left px-5 py-3 text-xs font-semibold text-foreground-tertiary uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Plan</th>
                          <th className="text-left px-5 py-3 text-xs font-semibold text-foreground-tertiary uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Price</th>
                          <th className="text-left px-5 py-3 text-xs font-semibold text-foreground-tertiary uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Minutes</th>
                          <th className="text-left px-5 py-3 text-xs font-semibold text-foreground-tertiary uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Overage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {callengoPlans.map((plan, i) => (
                          <tr key={plan.name} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-background-secondary/30" : ""}`}>
                            <td className="px-5 py-3 font-semibold">{plan.name}</td>
                            <td className="px-5 py-3 text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>{plan.price}</td>
                            <td className="px-5 py-3 text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>{plan.minutes}</td>
                            <td className="px-5 py-3">
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
                      No per-call fees · No transfer surcharges · No SMS fees · 12% off with annual billing
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Bland AI */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="bg-white rounded-2xl border border-border overflow-hidden">
                  <div className="px-6 py-5 bg-background-secondary border-b border-border flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-foreground-tertiary/10 flex items-center justify-center">
                      <Code2 className="w-4 h-4 text-foreground-tertiary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Bland AI Plans</h3>
                      <p className="text-xs text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>Per-minute plus multiple ancillary fees</p>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left px-5 py-3 text-xs font-semibold text-foreground-tertiary uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Plan</th>
                          <th className="text-left px-5 py-3 text-xs font-semibold text-foreground-tertiary uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Price</th>
                          <th className="text-left px-5 py-3 text-xs font-semibold text-foreground-tertiary uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>/min rate</th>
                          <th className="text-left px-5 py-3 text-xs font-semibold text-foreground-tertiary uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Daily cap</th>
                        </tr>
                      </thead>
                      <tbody>
                        {blandaiPlans.map((plan, i) => (
                          <tr key={plan.name} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-background-secondary/30" : ""}`}>
                            <td className="px-5 py-3 font-semibold">{plan.name}</td>
                            <td className="px-5 py-3 text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>{plan.price}</td>
                            <td className="px-5 py-3 text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>{plan.perMin}</td>
                            <td className="px-5 py-3 text-foreground-secondary text-xs" style={{ fontFamily: "var(--font-body)" }}>{plan.dailyCap}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="px-6 py-4 bg-amber-50 border-t border-amber-200">
                    <p className="text-xs text-amber-700 font-semibold" style={{ fontFamily: "var(--font-body)" }}>
                      Plus: $0.015/call min · $0.025–$0.05/min transfers · $0.02/SMS · $0.02/100 chars TTS
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
                  <h3 className="text-lg font-semibold text-amber-900 mb-3">Understanding Bland AI's additional fees</h3>
                  <div className="space-y-3 text-amber-800 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    <p>
                      The $0.12/min rate on Bland AI's Build plan is not your actual cost per campaign. Every outbound call attempt costs a $0.015 minimum, whether it connects or not. On a typical list where 45% of numbers go unanswered, you're paying that flat fee on nearly half your campaign.
                    </p>
                    <p>
                      If any calls transfer to a human agent, add $0.025 to $0.05 per minute on top of the call rate. Any SMS follow-ups cost $0.02 each. On a 1,000-call campaign with 450 no-answers, 100 transfers, and 200 SMS follow-ups, the true cost on the Build plan can be 40 to 60 percent higher than the headline rate suggests.
                    </p>
                    <p className="font-semibold">
                      Callengo has one overage rate. That's the entire bill.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Inline CTA 2 */}
        <InlineCTA
          text="Callengo includes 300 to 6,000 minutes per month with zero per-call or SMS fees."
          cta="See all pricing plans"
        />

        {/* ─── Feature Matrix ─── */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">
                Feature comparison
              </span>
              <h2 className="text-3xl font-semibold">Callengo vs Bland AI: feature by feature</h2>
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
                      <th className="text-left px-6 py-4 font-semibold w-2/5">Feature</th>
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
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-border text-foreground-secondary bg-background-secondary mb-6">
                    Fair assessment
                  </span>
                  <h2 className="text-3xl font-semibold mb-6">Where Bland AI genuinely excels</h2>
                  <div className="space-y-4 text-foreground-secondary leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    <p>
                      Bland AI deserves credit for what it is. Its Pathways builder lets developers construct complex conditional call trees with server-side JavaScript execution nodes that can hit third-party APIs, query databases, or trigger business logic in real time during a call. For teams building novel voice applications that don't fit pre-defined templates, that flexibility is genuinely valuable.
                    </p>
                    <p>
                      Voice quality and latency are also competitive. Average response time runs around 800ms, which is fast enough for natural-feeling conversation at scale. Voice cloning capabilities go up to 15 custom voices on the Scale plan, useful for brands that need a consistent voice identity or specific regional accents.
                    </p>
                    <p>
                      For high-volume developers, the Scale plan at $499/month with 100 concurrent calls and a 5,000/day limit offers strong infrastructure value. Enterprises with existing Twilio or SIP setups also benefit from Bland AI's bring-your-own-telephony support, which removes transfer surcharges and gives full carrier control.
                    </p>
                    <p>
                      These advantages are real. They just apply to a very specific buyer: a technical team with the engineering resources to build and maintain a custom voice stack.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {[
                  { icon: Code2, label: "Pathways builder", desc: "Visual call flow with conditional branches and JS execution" },
                  { icon: TrendingUp, label: "Voice cloning", desc: "Up to 15 custom voice clones on Scale plan" },
                  { icon: Users, label: "High concurrency", desc: "Up to 100 concurrent calls on Scale plan" },
                  { icon: Shield, label: "SOC 2 + HIPAA", desc: "Enterprise-grade compliance certifications" },
                ].map(item => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="bg-background-secondary rounded-xl border border-border p-5 flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white border border-border flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-foreground-secondary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{item.label}</p>
                        <p className="text-xs text-foreground-tertiary mt-0.5" style={{ fontFamily: "var(--font-body)" }}>{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Why Callengo ─── */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">
                Why Callengo
              </span>
              <h2 className="text-3xl font-semibold max-w-2xl">Where Callengo pulls ahead for business teams</h2>
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
                    transition={{ duration: 0.4, delay: index * 0.07 }}
                    className="bg-white rounded-2xl border border-border p-7 relative overflow-hidden group hover:border-electric/20 transition-colors"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-11 h-11 rounded-xl bg-electric/10 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-electric" />
                    </div>
                    <h3 className="text-base font-semibold mb-3">{adv.title}</h3>
                    <p className="text-foreground-secondary text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                      {adv.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Inline CTA 3 */}
        <InlineCTA
          text="Callengo comes with lead qualification, appointment confirmation, and data validation built in."
          cta="Start your free trial"
        />

        {/* ─── Use Cases ─── */}
        <section className="section relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">
                Use cases
              </span>
              <h2 className="text-3xl font-semibold mb-3">Which platform fits which use case?</h2>
              <p className="text-lg text-foreground-secondary max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
                The right choice depends almost entirely on whether your team is building a custom voice product or running a business workflow.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: CalendarCheck,
                  useCase: "Appointment confirmation and no-show reduction",
                  winner: "callengo",
                  analysis: "Callengo's Appointment Confirmation Agent handles this workflow end to end. It calls contacts 24 to 48 hours before scheduled appointments, handles live reschedules, triggers retry calls for no-answers, and updates your calendar automatically. Building this in Bland AI requires writing the confirmation logic, the reschedule conversation, the retry rules, and the calendar API integration from scratch.",
                },
                {
                  icon: PhoneCall,
                  useCase: "Outbound lead qualification with BANT scoring",
                  winner: "callengo",
                  analysis: "Callengo's Lead Qualification Agent runs structured BANT calls, scores leads as hot, warm, or cold, books meetings directly into your calendar for qualified prospects, and syncs scores and notes to HubSpot, Salesforce, Pipedrive, or Zoho. Bland AI can technically be configured for this, but requires building the entire conversation flow, calendar integration, and CRM sync through custom API development.",
                },
                {
                  icon: Database,
                  useCase: "CRM data validation and database hygiene",
                  winner: "callengo",
                  analysis: "Callengo's Data Validation Agent calls contacts to verify emails, phone numbers, job titles, and company information, then writes verified or flagged status directly to the relevant CRM fields. Wrong-number detection, unavailability handling, and scheduled callback logic are all included. Reproducing this in Bland AI is a significant custom development project.",
                },
                {
                  icon: Code2,
                  useCase: "Custom voice application development",
                  winner: "blandai",
                  analysis: "If you need to build something beyond a pre-defined template, like a sophisticated inbound routing system, a multi-step IVR with a proprietary database, or a custom voice feature embedded in your own product, Bland AI's API and Pathways builder give you the control to do it.",
                },
                {
                  icon: TrendingUp,
                  useCase: "Very high volume outbound, 10,000+ calls per day",
                  winner: "blandai",
                  analysis: "Bland AI's Scale plan supports 100 concurrent calls and 5,000 per day, with Enterprise tiers going higher. For organizations with engineering teams running very high-volume campaigns with custom call logic, Bland AI's raw infrastructure throughput may be the better fit.",
                },
                {
                  icon: Users,
                  useCase: "Non-technical teams in sales, ops, or healthcare",
                  winner: "callengo",
                  analysis: "If your team does not include developers, Bland AI is not a realistic production option. Callengo is designed specifically for ops managers, sales directors, and practice managers who need to deploy automation in hours. The guided setup, pre-built templates, and direct support make Callengo the only practical option for this buyer.",
                },
              ].map((uc, index) => {
                const Icon = uc.icon;
                return (
                  <motion.div
                    key={uc.useCase}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.07 }}
                    className="bg-white rounded-2xl border border-border p-7 relative overflow-hidden"
                  >
                    <div className={`absolute top-0 left-0 w-full h-1 ${uc.winner === "callengo" ? "bg-gradient-to-r from-electric to-electric/30" : "bg-gradient-to-r from-foreground-tertiary/40 to-transparent"}`} />
                    <div className="w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-electric" />
                    </div>
                    <h3 className="font-semibold text-sm mb-2">{uc.useCase}</h3>
                    <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4 ${uc.winner === "callengo" ? "bg-electric/10 text-electric" : "bg-foreground-tertiary/10 text-foreground-secondary"}`}>
                      {uc.winner === "callengo" ? "Callengo recommended" : "Bland AI preferred"}
                    </span>
                    <p className="text-foreground-secondary text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                      {uc.analysis}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── Setup Deep Dive ─── */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-6">
                  Setup experience
                </span>
                <h2 className="text-3xl font-semibold mb-6">The real cost of "developer required"</h2>
                <div className="space-y-4 text-foreground-secondary leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  <p>
                    The time-to-value gap between these two platforms is not measured in features. It's measured in weeks and engineering hours.
                  </p>
                  <p>
                    Setting up a production-ready outbound campaign in Bland AI means building and testing a Pathways flow for all call outcomes (connected, no-answer, voicemail, wrong number), writing webhook handlers, building CRM field mapping code, creating follow-up scheduling logic, configuring calendar booking flows, and deploying the whole infrastructure. For an experienced developer, that's two to four weeks. For a team without voice API experience, it often means hiring a contractor.
                  </p>
                  <p>
                    Callengo removes all of this. You connect your CRM via OAuth, choose your agent template, set the call timing and follow-up rules, upload your contact list, and launch. Most users finish their first campaign setup in under 15 minutes.
                  </p>
                  <p>
                    The integration depth also matters for regulated industries. Callengo's native Clio integration for law firms and SimplyBook.me integration for service businesses are pre-configured and opinionated. They understand the data models of those tools. Bland AI would need custom API development for each.
                  </p>
                </div>
              </motion.div>

              {/* Setup steps comparison */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl border border-electric/20 p-6">
                    <h3 className="font-semibold text-sm text-electric mb-4">Callengo setup: 4 steps</h3>
                    <ol className="space-y-3">
                      {["Connect your CRM via OAuth (guided)", "Choose an agent template", "Set timing, voice, and follow-up rules", "Upload contacts and launch"].map((step, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>
                          <span className="w-6 h-6 rounded-full bg-electric/10 text-electric text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                    <p className="text-xs text-accent font-semibold mt-4">Average time: under 15 minutes</p>
                  </div>
                  <div className="bg-white rounded-2xl border border-border p-6">
                    <h3 className="font-semibold text-sm text-foreground-secondary mb-4">Bland AI setup: multiple phases</h3>
                    <ol className="space-y-3">
                      {["Design Pathways call flow with branching logic", "Write JavaScript execution nodes for mid-call logic", "Build webhook handlers for call outcomes", "Code CRM field mappings and sync logic", "Configure follow-up scheduling system", "Test, debug, and deploy infrastructure"].map((step, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>
                          <span className="w-6 h-6 rounded-full bg-background-secondary border border-border text-foreground-tertiary text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                    <p className="text-xs text-amber-600 font-semibold mt-4">Average time: 2 to 4 weeks with an experienced developer</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Final Verdict ─── */}
        <section className="section relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">
                Final verdict
              </span>
              <h2 className="text-3xl font-semibold mb-6">The bottom line for 2026</h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
                <p className="text-foreground-secondary leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  Bland AI is a serious platform built for developers who need infrastructure-level control over voice AI. If you are an engineer building a custom voice product, a high-volume call center with an in-house development team, or a tech company embedding voice automation into a proprietary platform, Bland AI's flexibility justifies its complexity.
                </p>
                <p className="text-foreground-secondary leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  Callengo is built for a fundamentally different buyer. If you lead a sales team, manage a healthcare practice, or run operations for a service business, Callengo is the more direct, more affordable, and faster-to-value path. You get three production-tested agents, a no-code setup, deep CRM integration, and one transparent per-minute overage rate.
                </p>
                <p className="text-foreground-secondary leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  At the same $299/month price point, Callengo Business includes 1,200 minutes, 5 concurrent calls, native CRM integrations, smart voicemail detection, follow-up automation, and calendar sync. Bland AI Build includes a $0.12/min rate, 50 concurrent calls, and an API you still need to build on. For a business team, the comparison is not close.
                </p>
              </motion.div>

              <div className="grid gap-4">
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-electric/5 border border-electric/20 rounded-2xl p-7">
                  <h3 className="font-bold text-electric mb-4">Choose Callengo if...</h3>
                  <ul className="space-y-2.5">
                    {[
                      "You need automation running within the week",
                      "Your team has no developers available",
                      "You want appointment confirmation, lead qualification, or data validation built in",
                      "You use HubSpot, Pipedrive, Zoho, Clio, or SimplyBook.me",
                      "You want one predictable monthly bill",
                      "You want follow-up automation and CRM sync included",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-background-secondary border border-border rounded-2xl p-7">
                  <h3 className="font-bold text-foreground-secondary mb-4">Consider Bland AI if...</h3>
                  <ul className="space-y-2.5">
                    {[
                      "You have a dedicated developer team",
                      "You need fully custom conversation logic",
                      "You're building an embedded voice product",
                      "You need voice cloning at scale (15+ voices)",
                      "You have existing Twilio or SIP infrastructure",
                      "You need 50+ concurrent calls and 2,000+ calls per day",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>
                        <Clock className="w-4 h-4 text-foreground-tertiary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">
                FAQ
              </span>
              <h2 className="text-3xl font-semibold">Frequently asked questions</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  q: "Is Callengo cheaper than Bland AI for a typical outbound campaign?",
                  a: "For most structured outbound campaigns, yes. Bland AI's Build plan appears cheaper at $0.12/min vs Callengo's $0.23/min overage, but Bland AI adds $0.015 per call attempt, $0.025 to $0.05/min on transfers, and $0.02 per SMS. Callengo's Business plan also includes 1,200 minutes in the flat fee. For a team running 500 to 800 calls per month, Callengo's all-in cost is typically lower once all fees are counted.",
                },
                {
                  q: "Can I migrate from Bland AI to Callengo?",
                  a: "Yes. Migration typically involves connecting your CRM via OAuth, reviewing the relevant agent template, and launching a new campaign. Your contact history and CRM data are preserved since Callengo reads from and writes to the same CRM records. Business and Teams plan customers get migration support from the Callengo team.",
                },
                {
                  q: "Does Callengo have an API like Bland AI?",
                  a: "Callengo is primarily a no-code platform and is not designed as a raw voice infrastructure API. For programmatic access, Callengo supports webhook outputs and integrates with Zapier, Make, and n8n. If your use case requires deep API-level control over conversation logic, Bland AI is likely a better technical fit.",
                },
                {
                  q: "What languages does Callengo support vs Bland AI?",
                  a: "Callengo's standard plans support English-language campaigns across North America and English-speaking markets. Bland AI's standard plans are also primarily English, with additional language support through enterprise arrangements. If multilingual support is a core requirement, verify current availability with both vendors.",
                },
                {
                  q: "Which platform is better for healthcare no-show reduction?",
                  a: "Callengo. The Appointment Confirmation Agent is purpose-built for healthcare workflows: it calls patients before appointments, handles live reschedules on the spot, retries no-answers automatically, and updates your calendar. It also integrates natively with SimplyBook.me. Bland AI would require building this entire workflow from scratch.",
                },
                {
                  q: "Does Callengo work with Clio for law firms?",
                  a: "Yes. Callengo has a native Clio integration on Business plans and above, which allows law firms to run appointment confirmation and data validation campaigns that sync directly with their matter management workflows. This is not available in Bland AI.",
                },
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="bg-white rounded-2xl border border-border p-7"
                >
                  <h3 className="font-semibold text-sm mb-3">{faq.q}</h3>
                  <p className="text-foreground-secondary text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Cross-links ─── */}
        <section className="section relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <h2 className="text-2xl font-semibold">Compare Callengo with other platforms</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {crossLinks.map((comp) => (
                <Link
                  key={comp.slug}
                  href={`/compare/${comp.slug}`}
                  className="bg-white rounded-xl border border-border p-5 hover:border-electric/30 hover:shadow-md transition-all group flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-background-secondary border border-border flex items-center justify-center overflow-hidden shrink-0">
                    <img
                      src={comp.logo}
                      alt={comp.name}
                      className="w-6 h-6 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm group-hover:text-electric transition-colors truncate">{comp.name}</p>
                    <p className="text-xs text-foreground-tertiary truncate" style={{ fontFamily: "var(--font-body)" }}>{comp.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-foreground-tertiary group-hover:text-electric transition-colors shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-6xl mx-auto px-6">
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

              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-semibold text-white mb-5">
                  Ready to see the difference for your business?
                </h2>
                <p className="text-xl text-white/70 mb-10" style={{ fontFamily: "var(--font-body)" }}>
                  Start with 15 free minutes. No credit card, no developers, no commitment. Set up your first campaign in under 15 minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://app.callengo.com/auth/signup"
                    className="inline-flex items-center justify-center gap-2 bg-white text-deep-indigo hover:bg-white/90 px-8 py-4 rounded-xl font-semibold transition-colors"
                  >
                    Start free — 15 min included
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="/pricing"
                    className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl transition-colors"
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
