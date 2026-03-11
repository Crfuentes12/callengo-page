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
  LayoutTemplate,
  DollarSign,
  HeadphonesIcon,
  GitMerge,
  CalendarCheck,
  Database,
  PhoneCall,
  Users,
  Layers,
  Building2,
} from "lucide-react";

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://callengo.com/compare/synthflow",
      url: "https://callengo.com/compare/synthflow",
      name: "Callengo vs Synthflow: Full Comparison 2026",
      description:
        "A detailed comparison of Callengo and Synthflow covering pricing, CRM integrations, outbound templates, and setup complexity. Updated March 2026.",
      inLanguage: "en-US",
      dateModified: "2026-03-11",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://callengo.com" },
          { "@type": "ListItem", position: 2, name: "Compare", item: "https://callengo.com/compare" },
          { "@type": "ListItem", position: 3, name: "Callengo vs Synthflow", item: "https://callengo.com/compare/synthflow" },
        ],
      },
    },
    {
      "@type": "Article",
      "@id": "https://callengo.com/compare/synthflow#article",
      headline: "Callengo vs Synthflow: Which AI Voice Platform Should Your Business Choose in 2026?",
      datePublished: "2026-03-01",
      dateModified: "2026-03-11",
      author: { "@type": "Organization", name: "Callengo", url: "https://callengo.com" },
      publisher: {
        "@type": "Organization",
        name: "Callengo",
        url: "https://callengo.com",
        logo: { "@type": "ImageObject", url: "https://callengo.com/callengo-logo.svg" },
      },
      mainEntityOfPage: "https://callengo.com/compare/synthflow",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does Synthflow cost per minute?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Synthflow charges $0.09 per minute for its voice engine, plus $0.02 to $0.05 per minute for the LLM, plus $0.02 per minute for telephony. That puts the effective cost at $0.13 to $0.16 per minute for a standard stack. Monthly plans start at $29 for 50 included minutes. Callengo's plans cover everything from $0.17 to $0.29 per minute overage with a single all-in rate, no component stacking.",
          },
        },
        {
          "@type": "Question",
          name: "Does Synthflow have outbound call templates for lead qualification or appointment confirmation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Synthflow has a visual drag-and-drop builder but no pre-built vertical templates for lead qualification, appointment confirmation, or data validation. You build the call script, logic, and follow-up rules from scratch. Callengo ships with three production-ready outbound agents for exactly those workflows.",
          },
        },
        {
          "@type": "Question",
          name: "What CRM integrations does Synthflow support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Synthflow integrates natively with HubSpot, Salesforce, Pipedrive, Zoho CRM, and ActiveCampaign, plus specialty verticals like AthenaOne, Dentrix, and ServiceTitan. It also connects to 200+ tools via Zapier, Make, and webhooks. Callengo integrates natively with HubSpot, Salesforce, Pipedrive, Zoho CRM, Microsoft Dynamics 365, and Clio, with direct field mapping and automatic CRM writes after each call.",
          },
        },
        {
          "@type": "Question",
          name: "Is Synthflow better suited for agencies or direct business users?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Synthflow has a strong agency focus: its white-label product starts at $2,000 per month, and its GoHighLevel integration makes it popular with marketing agencies. For direct business users who want outbound automation for their own sales or ops team, Callengo is more purpose-built for that workflow.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to set up a campaign in Synthflow vs Callengo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A simple Synthflow agent can be built in one to two days using the visual builder. More complex workflows with custom logic, CRM mappings, and follow-up rules typically take one to two weeks. Callengo's template-based setup takes under 15 minutes: pick an agent, connect your CRM, upload contacts, and launch.",
          },
        },
      ],
    },
  ],
};

/* ─── Data ─── */
const featureRows = [
  { feature: "Setup time", callengo: "Under 15 minutes", synthflow: "1–2 days (basic) to 2+ weeks (complex)", callengoPro: true },
  { feature: "Pre-built outbound templates", callengo: "3 vertical agents", synthflow: "None (build from scratch)", callengoPro: true },
  { feature: "Lead Qualification Agent", callengo: "BANT scoring included", synthflow: "Must build manually", callengoPro: true },
  { feature: "Appointment Confirmation Agent", callengo: "Full logic included", synthflow: "Must build manually", callengoPro: true },
  { feature: "Data Validation Agent", callengo: "CRM writes included", synthflow: "Must build manually", callengoPro: true },
  { feature: "Follow-up automation", callengo: "Up to unlimited, by plan", synthflow: "Must configure manually", callengoPro: true },
  { feature: "No-show auto-retry", callengo: "Yes (Growth and above)", synthflow: "Must configure manually", callengoPro: true },
  { feature: "Voicemail detection", callengo: "Smart detection (Starter+)", synthflow: "Yes, built in", callengoPro: false },
  { feature: "Inbound call handling", callengo: "Outbound focus", synthflow: "Yes, primary use case", callengoPro: false },
  { feature: "Visual workflow builder", callengo: "Guided setup per agent", synthflow: "Full drag-and-drop", callengoPro: false },
  { feature: "HubSpot", callengo: "Native (Business+)", synthflow: "Native", callengoPro: false },
  { feature: "Salesforce", callengo: "Native (Teams+)", synthflow: "Native", callengoPro: false },
  { feature: "Pipedrive", callengo: "Native (Business+)", synthflow: "Native", callengoPro: false },
  { feature: "Zoho CRM", callengo: "Native (Business+)", synthflow: "Native", callengoPro: false },
  { feature: "Clio (legal)", callengo: "Native (Business+)", synthflow: "Not available", callengoPro: true },
  { feature: "Microsoft Dynamics 365", callengo: "Native (Teams+)", synthflow: "Not native", callengoPro: true },
  { feature: "Calendar sync", callengo: "Google, Outlook, Zoom, SimplyBook.me", synthflow: "Google, Microsoft, Cal.com", callengoPro: false },
  { feature: "Pricing model", callengo: "Flat monthly + all-in overage", synthflow: "Monthly plan + component PAYG", callengoPro: true },
  { feature: "Starter plan price", callengo: "$99/mo, 300 min", synthflow: "$29/mo, 50 min", callengoPro: false },
  { feature: "Monthly cost cap", callengo: "Yes, predictable by plan", synthflow: "Yes, but overages component-billed", callengoPro: true },
  { feature: "Overage rate (per min)", callengo: "$0.17–$0.29 (all-in)", synthflow: "$0.13–$0.16+ (stacked)", callengoPro: false },
  { feature: "White-label option", callengo: "Contact sales", synthflow: "$2,000/mo", callengoPro: false },
  { feature: "Agency sub-accounts", callengo: "Enterprise plan", synthflow: "Yes, GoHighLevel integration", callengoPro: false },
  { feature: "Free trial", callengo: "15 min, no card required", synthflow: "7 days, build free, pay to deploy", callengoPro: false },
  { feature: "HIPAA compliant", callengo: "Yes", synthflow: "Yes", callengoPro: false },
  { feature: "SOC 2 certified", callengo: "Yes", synthflow: "SOC 2 Type II", callengoPro: false },
  { feature: "PCI DSS", callengo: "Yes", synthflow: "Yes", callengoPro: false },
  { feature: "Uptime SLA", callengo: "Enterprise SLA", synthflow: "99.99% (in-house telephony)", callengoPro: false },
  { feature: "Support", callengo: "Email and onboarding, paid plans", synthflow: "Email and documentation", callengoPro: false },
];

const synthflowPlans = [
  { name: "Starter", price: "$29/mo", minutes: "50", concurrent: "5", overage: "~$0.13/min" },
  { name: "Pro", price: "$375/mo", minutes: "2,000", concurrent: "25", overage: "~$0.13/min" },
  { name: "Growth", price: "$750/mo", minutes: "4,000", concurrent: "50", overage: "~$0.12/min" },
  { name: "Agency", price: "$1,250/mo", minutes: "6,000", concurrent: "100+", overage: "Custom" },
];

const callengoPlans = [
  { name: "Free", price: "$0", minutes: "15 (one-time)", concurrent: "1", overage: "Blocked" },
  { name: "Starter", price: "$99/mo", minutes: "300", concurrent: "2", overage: "$0.29/min" },
  { name: "Growth", price: "$179/mo", minutes: "600", concurrent: "3", overage: "$0.26/min" },
  { name: "Business", price: "$299/mo", minutes: "1,200", concurrent: "5", overage: "$0.23/min" },
  { name: "Teams", price: "$649/mo", minutes: "2,250", concurrent: "10", overage: "$0.20/min" },
  { name: "Enterprise", price: "$1,499/mo", minutes: "6,000", concurrent: "Unlimited", overage: "$0.17/min" },
];

const synthflowCosts = [
  { component: "Voice engine", cost: "$0.09/min", note: "Synthflow base" },
  { component: "Telephony (managed)", cost: "$0.02/min", note: "Synthflow network" },
  { component: "LLM (GPT-4o mini)", cost: "$0.02/min", note: "Paid separately" },
  { component: "LLM (GPT-4o)", cost: "$0.05/min", note: "Paid separately" },
  { component: "Performance routing (optional)", cost: "$0.04/min", note: "Add-on" },
  { component: "Effective total (standard)", cost: "$0.13–$0.16/min", note: "All components combined" },
];

const callengoAdvantages = [
  {
    icon: LayoutTemplate,
    title: "Three outbound agents you can run today",
    body: "Synthflow's visual builder is genuinely no-code, but there are no pre-built templates for outbound lead qualification, appointment confirmation, or data validation. You start with a blank canvas and build the call script, qualification logic, retry rules, and CRM field mappings yourself. Callengo ships with all three agents tested and ready. Pick one, connect your CRM, and your first campaign goes out the same day.",
  },
  {
    icon: DollarSign,
    title: "Predictable pricing at every volume",
    body: "Synthflow bills separately for its voice engine, LLM, and telephony. The starter plan's $29 price covers just 50 minutes; the real cost per minute only becomes clear when you add all three billing lines. Callengo's overage rate covers everything: voice, telephony, processing, and CRM writes. You see one number per minute, and your monthly plan already includes a block of minutes. No math required before you launch a campaign.",
  },
  {
    icon: GitMerge,
    title: "Follow-up automation is already built in",
    body: "After a call ends in Synthflow, you configure what happens next: a webhook to update your CRM, another trigger for follow-up calls, a separate condition for scheduling. In Callengo, follow-up sequences, CRM writes, calendar updates, voicemail drops, and Slack alerts are part of the agent workflow, not separate integrations to wire together. The operational logic ships with the product.",
  },
  {
    icon: Shield,
    title: "Clio and Dynamics 365 for specialized teams",
    body: "Synthflow integrates with HubSpot, Salesforce, Pipedrive, and Zoho, which covers most teams. But legal firms on Clio and larger organizations on Microsoft Dynamics 365 are not supported. Callengo includes native Clio integration on Business plans and above, and native Dynamics 365 on Teams and above, with direct field mapping without Zapier.",
  },
  {
    icon: HeadphonesIcon,
    title: "Built for outbound, not balanced for inbound",
    body: "Synthflow is a balanced inbound and outbound platform. Its features, templates, and default workflows reflect that balance. Callengo is an outbound specialist: every agent, every follow-up rule, and every CRM integration was designed around the goal of proactively reaching contacts and logging structured outcomes. If your team's primary need is outbound campaigns, Callengo does exactly that without the overhead of an inbound platform.",
  },
  {
    icon: Users,
    title: "Designed for ops teams, not agencies",
    body: "Synthflow has a strong agency market with GoHighLevel integration and a $2,000-per-month white-label offering. That is valuable if you are an agency managing voice AI for clients. Callengo is built for internal teams: the sales manager who wants qualified leads, the practice administrator who wants confirmed appointments, the data ops lead who wants a clean CRM. The product flows are optimized for running campaigns, not for sub-account management.",
  },
];

const crossLinks = [
  { name: "Bland AI", slug: "bland-ai", logo: "/logos/bland-ai.png", desc: "AI voice infrastructure" },
  { name: "Vapi", slug: "vapi", logo: "/logos/vapi.png", desc: "Developer-first voice API" },
  { name: "Retell AI", slug: "retell-ai", logo: "/logos/retell-ai.png", desc: "Low-latency voice SDK" },
  { name: "Dialpad", slug: "dialpad", logo: "/logos/dialpad.png", desc: "Cloud phone system with AI" },
];

function InlineCTA({ text, cta }: { text: string; cta: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="my-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-electric/5 border border-electric/20 rounded-2xl px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground-secondary text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>{text}</p>
          <a href="https://app.callengo.com/auth/signup" className="shrink-0 inline-flex items-center gap-2 bg-electric text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-electric/90 transition-colors">
            {cta} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function CallengoVsSynthflow() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <Header />
      <main className="pt-24 relative overflow-hidden">
        <AnimatedBlobs />

        {/* Hero */}
        <section className="section relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-sm text-foreground-tertiary mb-8" style={{ fontFamily: "var(--font-body)" }}>
              <Link href="/" className="hover:text-electric transition-colors">Home</Link>
              <span>/</span>
              <Link href="/compare" className="hover:text-electric transition-colors">Compare</Link>
              <span>/</span>
              <span className="text-foreground">Callengo vs Synthflow</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-6">Updated March 2026</span>
                <h1 className="text-display-sm mb-5">
                  Callengo vs Synthflow
                  <br />
                  <span className="gradient-text">Outbound specialist vs. all-purpose voice builder</span>
                </h1>
                <p className="text-lg text-foreground-secondary leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
                  Synthflow is a no-code voice agent builder that handles inbound and outbound calls with a visual workflow editor, a broad integration catalog, and a strong agency focus. Callengo is a specialized outbound automation platform with three purpose-built agents for lead qualification, appointment confirmation, and data validation, each with scripts, follow-up logic, and CRM sync already included.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Setup time", callengo: "< 15 min", synthflow: "1–14+ days" },
                    { label: "Outbound agents", callengo: "3 built in", synthflow: "Build your own" },
                    { label: "Billing model", callengo: "Flat monthly", synthflow: "Plan + components" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white rounded-xl border border-border p-4">
                      <p className="text-xs text-foreground-tertiary mb-2 font-medium" style={{ fontFamily: "var(--font-body)" }}>{stat.label}</p>
                      <p className="text-xs text-foreground-tertiary mb-0.5" style={{ fontFamily: "var(--font-body)" }}>Callengo</p>
                      <p className="font-bold text-sm text-accent">{stat.callengo}</p>
                      <p className="text-xs text-foreground-tertiary mt-2 mb-0.5" style={{ fontFamily: "var(--font-body)" }}>Synthflow</p>
                      <p className="font-semibold text-sm text-foreground-secondary">{stat.synthflow}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <div className="bg-white rounded-2xl border border-dashed border-border p-10 flex flex-col items-center justify-center gap-6 min-h-[280px]">
                  <div className="flex items-center gap-8 w-full justify-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-20 h-20 rounded-2xl bg-background-secondary border border-border flex items-center justify-center overflow-hidden">
                        <img src="/callengo-logo.svg" alt="Callengo" className="w-14 h-14 object-contain" />
                      </div>
                      <span className="text-sm font-semibold">Callengo</span>
                    </div>
                    <span className="text-3xl font-bold text-foreground-tertiary">vs</span>
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-20 h-20 rounded-2xl bg-background-secondary border border-border flex items-center justify-center overflow-hidden">
                        <img src="/logos/synthflow.png" alt="Synthflow" className="w-14 h-14 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                      </div>
                      <span className="text-sm font-semibold">Synthflow</span>
                    </div>
                  </div>
                  <p className="text-xs text-foreground-tertiary text-center" style={{ fontFamily: "var(--font-body)" }}>Pricing, templates, integrations, and setup time compared</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-6">Overview</span>
                  <h2 className="text-3xl font-semibold mb-6">Two different products solving different problems</h2>
                  <div className="space-y-4 text-foreground-secondary leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    <p>
                      Synthflow was built to let any team deploy a voice agent without touching code. Its drag-and-drop builder works for both inbound call handling and outbound dialing. The platform runs its own telephony infrastructure with a 99.99% uptime SLA and has processed over 65 million customer calls. For agencies building voice AI for multiple clients, the GoHighLevel integration and $2,000-per-month white-label option make Synthflow a natural choice.
                    </p>
                    <p>
                      The pricing model stacks three separate billing lines: $0.09 per minute for the voice engine, $0.02 to $0.05 per minute for your LLM of choice, and $0.02 per minute for telephony. Monthly plans start at $29 for 50 included minutes and scale to $1,250 for 6,000 minutes on the Agency tier. The annual discount is 17%. Overages on the Pro and Growth plans run $0.13 to $0.12 per minute, which covers all components at those tier rates.
                    </p>
                    <p>
                      Callengo starts from a different premise. Instead of a blank canvas with a visual builder, it ships three agents that are each designed to do one specific job in an outbound campaign. The Lead Qualification Agent runs BANT calls and books meetings. The Appointment Confirmation Agent calls ahead of scheduled appointments and handles live reschedules. The Data Validation Agent verifies contact details and writes results back to your CRM. Each one has the call script, follow-up rules, and CRM mappings already set up.
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-4">
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl border border-border p-6">
                  <p className="text-xs font-semibold text-foreground-tertiary uppercase tracking-wider mb-3" style={{ fontFamily: "var(--font-body)" }}>Synthflow is best for</p>
                  <ul className="space-y-2">
                    {["Agencies building voice AI for clients", "Teams that need inbound and outbound in one tool", "Custom workflows beyond the three standard use cases", "GoHighLevel users and sub-account management"].map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>
                        <Layers className="w-3.5 h-3.5 text-foreground-tertiary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-electric/5 border border-electric/20 rounded-2xl p-6">
                  <p className="text-xs font-semibold text-electric uppercase tracking-wider mb-3" style={{ fontFamily: "var(--font-body)" }}>Callengo is best for</p>
                  <ul className="space-y-2">
                    {["Lead qualification, appointment confirmation, or data validation", "Ops and sales teams with no developer time", "Predictable monthly pricing with one overage rate", "Native Clio, Dynamics 365, or Pipedrive sync"].map(item => (
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

        <InlineCTA text="Three outbound agents ready to launch today, no building required." cta="Try Callengo free" />

        {/* Pricing */}
        <section className="section relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">Pricing</span>
              <h2 className="text-3xl font-semibold mb-3">Synthflow pricing: plans plus component billing</h2>
              <p className="text-lg text-foreground-secondary max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
                Synthflow's monthly plans include a block of minutes, but overages stack voice, LLM, and telephony costs separately. Callengo has one all-in overage rate per minute.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 mb-10">
              {/* Synthflow */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="bg-white rounded-2xl border border-border overflow-hidden">
                  <div className="px-6 py-5 bg-background-secondary border-b border-border flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-foreground-tertiary/10 flex items-center justify-center">
                      <Layers className="w-4 h-4 text-foreground-tertiary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Synthflow Plans</h3>
                      <p className="text-xs text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>Monthly plan + component overage billing</p>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          {["Plan", "Price", "Minutes", "Concurrent", "Overage"].map(h => (
                            <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-foreground-tertiary uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {synthflowPlans.map((plan, i) => (
                          <tr key={plan.name} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-background-secondary/30" : ""}`}>
                            <td className="px-4 py-3 font-semibold">{plan.name}</td>
                            <td className="px-4 py-3 text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>{plan.price}</td>
                            <td className="px-4 py-3 text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>{plan.minutes}</td>
                            <td className="px-4 py-3 text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>{plan.concurrent}</td>
                            <td className="px-4 py-3 text-foreground-secondary font-medium" style={{ fontFamily: "var(--font-body)" }}>{plan.overage}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="px-6 py-4 bg-amber-50 border-t border-amber-200">
                    <p className="text-xs text-amber-700 font-semibold" style={{ fontFamily: "var(--font-body)" }}>Overage stacks voice + LLM + telephony separately · 17% off annual</p>
                  </div>
                </div>

                {/* Component breakdown */}
                <div className="mt-4 bg-white rounded-2xl border border-border overflow-hidden">
                  <div className="px-6 py-4 bg-background-secondary border-b border-border">
                    <h4 className="font-semibold text-sm">Synthflow cost components (PAYG)</h4>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          {["Component", "Cost", "Note"].map(h => (
                            <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-foreground-tertiary uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {synthflowCosts.map((row, i) => (
                          <tr key={row.component} className={`border-b border-border last:border-0 ${i === synthflowCosts.length - 1 ? "bg-amber-50" : i % 2 === 0 ? "bg-background-secondary/30" : ""}`}>
                            <td className={`px-5 py-3 font-semibold text-sm ${i === synthflowCosts.length - 1 ? "text-amber-800" : ""}`}>{row.component}</td>
                            <td className={`px-5 py-3 font-bold ${i === synthflowCosts.length - 1 ? "text-amber-700" : "text-foreground-secondary"}`} style={{ fontFamily: "var(--font-body)" }}>{row.cost}</td>
                            <td className="px-5 py-3 text-xs text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>{row.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>

              {/* Callengo */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="bg-white rounded-2xl border border-electric/30 overflow-hidden shadow-lg">
                  <div className="px-6 py-5 bg-electric/5 border-b border-electric/20 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-electric/10 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-electric" />
                    </div>
                    <div>
                      <h3 className="font-bold">Callengo Plans</h3>
                      <p className="text-xs text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>Flat monthly with one all-in overage rate</p>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          {["Plan", "Price", "Minutes", "Overage"].map(h => (
                            <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-foreground-tertiary uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {callengoPlans.map((plan, i) => (
                          <tr key={plan.name} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-background-secondary/30" : ""}`}>
                            <td className="px-5 py-3 font-semibold">{plan.name}</td>
                            <td className="px-5 py-3 text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>{plan.price}</td>
                            <td className="px-5 py-3 text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>{plan.minutes}</td>
                            <td className="px-5 py-3">
                              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${plan.overage === "Blocked" ? "bg-red-50 text-red-600" : "bg-accent/10 text-accent"}`}>{plan.overage}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="px-6 py-4 bg-accent/5 border-t border-accent/20">
                    <p className="text-xs text-accent font-semibold" style={{ fontFamily: "var(--font-body)" }}>One rate covers everything · No component stacking · 12% off annual</p>
                  </div>
                </div>

                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-4 bg-amber-50 border border-amber-200 rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-amber-900 text-sm mb-2">Watch the Starter plan gap</h4>
                      <p className="text-amber-800 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                        Synthflow's $29 Starter includes only 50 minutes. A single 200-contact outbound campaign at 1.5 min average would use 300 minutes, putting the actual monthly cost at $29 + 250 min overage at $0.13 = around $61. Callengo's $99 Starter includes 300 minutes with no component stacking.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <InlineCTA text="Callengo's $99 Starter includes 300 minutes, no component billing, no surprises." cta="See all pricing plans" />

        {/* Feature matrix */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">Feature comparison</span>
              <h2 className="text-3xl font-semibold">Callengo vs Synthflow: feature by feature</h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-background-secondary">
                      <th className="text-left px-6 py-4 font-semibold w-2/5">Feature</th>
                      <th className="text-left px-6 py-4 font-semibold text-electric w-[30%]">Callengo</th>
                      <th className="text-left px-6 py-4 font-semibold text-foreground-secondary w-[30%]">Synthflow</th>
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
                            {row.synthflow}
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

        {/* Where Synthflow excels */}
        <section className="section relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-border text-foreground-secondary bg-background-secondary mb-6">Fair assessment</span>
                  <h2 className="text-3xl font-semibold mb-6">Where Synthflow genuinely stands out</h2>
                  <div className="space-y-4 text-foreground-secondary leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    <p>
                      Synthflow built its own telephony layer rather than relying entirely on Twilio, which gives it a 99.99% uptime SLA and sub-100ms latency with its global edge routing add-on. That infrastructure is meaningfully different from platforms that simply resell Twilio connectivity and is a real advantage for teams that need reliable, high-volume call throughput.
                    </p>
                    <p>
                      The integration catalog is one of the broadest in this category: 200+ tools covering every major CRM, calendar, payment processor, CCaaS platform, and productivity tool. For teams with complex integration requirements, that breadth is useful. The native connections to vertical CRMs like AthenaOne for healthcare, Dentrix for dental, and ServiceTitan for field service are especially notable and not available in most competitors.
                    </p>
                    <p>
                      Synthflow's agency product is also genuinely built out. The GoHighLevel integration handles sub-account management, and the white-label offering at $2,000 per month covers branding, custom domains, and reseller workflows. For agencies managing voice AI across multiple clients, this is a full-featured offering.
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Shield, label: "99.99% uptime SLA", desc: "In-house telephony, not fully Twilio-dependent" },
                  { icon: Layers, label: "200+ integrations", desc: "Vertical CRMs including AthenaOne, Dentrix, ServiceTitan" },
                  { icon: Building2, label: "Agency-ready", desc: "GoHighLevel, white-label, sub-account management" },
                  { icon: PhoneCall, label: "Inbound + outbound", desc: "Single platform handles both in one workflow" },
                ].map(item => {
                  const Icon = item.icon;
                  return (
                    <motion.div key={item.label} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-background-secondary rounded-xl border border-border p-5 flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white border border-border flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-foreground-secondary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{item.label}</p>
                        <p className="text-xs text-foreground-tertiary mt-0.5" style={{ fontFamily: "var(--font-body)" }}>{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Why Callengo */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">Why Callengo</span>
              <h2 className="text-3xl font-semibold max-w-2xl">Where Callengo pulls ahead for outbound teams</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {callengoAdvantages.map((adv, index) => {
                const Icon = adv.icon;
                return (
                  <motion.div key={adv.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.07 }} className="bg-white rounded-2xl border border-border p-7 relative overflow-hidden group hover:border-electric/20 transition-colors">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-11 h-11 rounded-xl bg-electric/10 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-electric" />
                    </div>
                    <h3 className="text-base font-semibold mb-3">{adv.title}</h3>
                    <p className="text-foreground-secondary text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{adv.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <InlineCTA text="Outbound campaigns running in under 15 minutes, CRM sync included." cta="Start your free trial" />

        {/* Use cases */}
        <section className="section relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">Use cases</span>
              <h2 className="text-3xl font-semibold mb-3">Which platform fits which job?</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: CalendarCheck,
                  useCase: "Appointment confirmation for healthcare or services",
                  winner: "callengo",
                  analysis: "Callengo's Appointment Confirmation Agent calls ahead, handles live reschedules, retries no-answers, and updates your calendar automatically. In Synthflow, building this requires designing the conversation flow, adding the rescheduling branch, configuring calendar webhooks, and setting up retry logic, all from a blank workflow canvas.",
                },
                {
                  icon: PhoneCall,
                  useCase: "Outbound lead qualification",
                  winner: "callengo",
                  analysis: "Callengo's Lead Qualification Agent runs BANT calls, scores leads, books meetings for qualified contacts, and syncs outcomes to HubSpot, Salesforce, Pipedrive, or Zoho. In Synthflow, there is no equivalent template. You build the qualification logic and all downstream automation manually.",
                },
                {
                  icon: Database,
                  useCase: "CRM data validation at scale",
                  winner: "callengo",
                  analysis: "Callengo's Data Validation Agent verifies contact details and writes verified or flagged status back to your CRM. Synthflow has no pre-built workflow for this. The field-by-field verification logic, CRM write conditions, and follow-up callbacks all need custom configuration.",
                },
                {
                  icon: Layers,
                  useCase: "Inbound call handling and call center workflows",
                  winner: "synthflow",
                  analysis: "Synthflow's primary focus is inbound voice automation. Its visual builder, smart call routing, live transfer, and IVR capabilities are built for handling incoming calls. Callengo is outbound-only and does not handle inbound call routing.",
                },
                {
                  icon: Building2,
                  useCase: "Agency managing voice AI for multiple clients",
                  winner: "synthflow",
                  analysis: "Synthflow's white-label product, GoHighLevel integration, and sub-account management are purpose-built for agencies. Callengo is designed for teams deploying outbound AI for their own operations, not for reselling or managing multiple client accounts.",
                },
                {
                  icon: Users,
                  useCase: "Healthcare team with AthenaOne or dental with Dentrix",
                  winner: "synthflow",
                  analysis: "Synthflow has native integrations with AthenaOne and Dentrix that Callengo does not currently offer. For healthcare practices using those specific platforms as their primary EHR, Synthflow's native connection is a meaningful advantage.",
                },
              ].map((uc, index) => {
                const Icon = uc.icon;
                return (
                  <motion.div key={uc.useCase} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.07 }} className="bg-white rounded-2xl border border-border p-7 relative overflow-hidden">
                    <div className={`absolute top-0 left-0 w-full h-1 ${uc.winner === "callengo" ? "bg-gradient-to-r from-electric to-electric/30" : "bg-gradient-to-r from-foreground-tertiary/40 to-transparent"}`} />
                    <div className="w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-electric" />
                    </div>
                    <h3 className="font-semibold text-sm mb-2">{uc.useCase}</h3>
                    <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4 ${uc.winner === "callengo" ? "bg-electric/10 text-electric" : "bg-foreground-tertiary/10 text-foreground-secondary"}`}>
                      {uc.winner === "callengo" ? "Callengo recommended" : "Synthflow preferred"}
                    </span>
                    <p className="text-foreground-secondary text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{uc.analysis}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">FAQ</span>
              <h2 className="text-3xl font-semibold">Frequently asked questions</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  q: "How much does Synthflow actually cost per minute?",
                  a: "The effective cost per minute in Synthflow stacks three billing lines: $0.09 for the voice engine, $0.02 to $0.05 for LLM depending on model, and $0.02 for telephony. That puts the all-in rate at $0.13 to $0.16 per minute for a standard configuration. Callengo's overage rates cover everything from $0.17 to $0.29 per minute with one number.",
                },
                {
                  q: "Does Synthflow have templates for outbound lead qualification or appointment confirmation?",
                  a: "No. Synthflow offers a visual drag-and-drop builder but no pre-built vertical templates for outbound lead qualification, appointment confirmation, or data validation. You design the workflow from scratch. Callengo's three agents include tested scripts and follow-up logic for exactly those use cases.",
                },
                {
                  q: "What CRM integrations does Synthflow support?",
                  a: "Synthflow integrates natively with HubSpot, Salesforce, Pipedrive, Zoho CRM, and ActiveCampaign, plus specialty systems like AthenaOne and Dentrix. It also connects to 200+ tools via Zapier, Make, and webhooks. Callengo integrates natively with HubSpot, Salesforce, Pipedrive, Zoho CRM, Microsoft Dynamics 365, and Clio.",
                },
                {
                  q: "How does Synthflow's white-label work?",
                  a: "Synthflow's white-label product starts at $2,000 per month. It includes custom branding, domain, and sub-account management, and integrates with GoHighLevel for agencies managing multiple clients. Callengo does not have a standalone white-label product at that price point but offers Enterprise plan customization.",
                },
                {
                  q: "Can I use both Synthflow and Callengo?",
                  a: "Yes. Some teams use Synthflow for inbound call handling and Callengo for outbound campaigns. The two products target different parts of the call workflow. If you need both inbound and outbound automation, running them in parallel is a valid approach.",
                },
                {
                  q: "What is the annual discount on Synthflow?",
                  a: "Synthflow offers 17% off any monthly plan when paying annually, equivalent to two months free. Callengo offers a 12% annual discount, also equivalent to approximately two months free.",
                },
              ].map((faq, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="bg-white rounded-2xl border border-border p-7">
                  <h3 className="font-semibold text-sm mb-3">{faq.q}</h3>
                  <p className="text-foreground-secondary text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-links */}
        <section className="section relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <h2 className="text-2xl font-semibold">Compare Callengo with other platforms</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {crossLinks.map((comp) => (
                <Link key={comp.slug} href={`/compare/${comp.slug}`} className="bg-white rounded-xl border border-border p-5 hover:border-electric/30 hover:shadow-md transition-all group flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-background-secondary border border-border flex items-center justify-center overflow-hidden shrink-0">
                    <img src={comp.logo} alt={comp.name} className="w-6 h-6 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
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

        {/* CTA */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl gradient-bg p-12 md:p-20">
              <div className="absolute inset-0 overflow-hidden opacity-90">
                <div className="absolute -top-1/4 right-[-10%] w-3/5 h-[120%] bg-gradient-to-br from-white/20 via-[#8B96C8]/15 to-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-1/3 left-[-10%] w-1/2 h-full bg-gradient-to-br from-[#8B96C8]/20 via-white/12 to-[#4F5FE8]/10 rounded-full blur-3xl" />
              </div>
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-semibold text-white mb-5">Launch your first campaign today</h2>
                <p className="text-xl text-white/70 mb-10" style={{ fontFamily: "var(--font-body)" }}>
                  15 free minutes, no credit card, no builders, no components to configure. Your first outbound campaign running in under 15 minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://app.callengo.com/auth/signup" className="inline-flex items-center justify-center gap-2 bg-white text-deep-indigo hover:bg-white/90 px-8 py-4 rounded-xl font-semibold transition-colors">
                    Start free — 15 min included <ArrowRight className="w-5 h-5" />
                  </a>
                  <a href="/pricing" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl transition-colors">
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
