"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnimatedBlobs from "../../components/AnimatedBlobs";
import { trackFreeTrialClick } from "@/app/lib/analytics";
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
  Gauge,
} from "lucide-react";

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://callengo.com/compare/retell-ai",
      url: "https://callengo.com/compare/retell-ai",
      name: "Callengo vs Retell AI: Full Comparison 2026",
      description:
        "A detailed comparison of Callengo and Retell AI covering real pricing, features, CRM integrations, outbound use cases, and setup complexity. Updated March 2026.",
      inLanguage: "en-US",
      dateModified: "2026-03-11",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://callengo.com" },
          { "@type": "ListItem", position: 2, name: "Compare", item: "https://callengo.com/compare" },
          { "@type": "ListItem", position: 3, name: "Callengo vs Retell AI", item: "https://callengo.com/compare/retell-ai" },
        ],
      },
    },
    {
      "@type": "Article",
      "@id": "https://callengo.com/compare/retell-ai#article",
      headline: "Callengo vs Retell AI: Which AI Voice Platform Should Your Business Choose in 2026?",
      description:
        "An in-depth comparison of Callengo and Retell AI covering pricing, CRM integrations, outbound templates, setup time, and use cases. Updated March 2026.",
      datePublished: "2026-03-01",
      dateModified: "2026-03-11",
      author: { "@type": "Organization", name: "Callengo", url: "https://callengo.com" },
      publisher: {
        "@type": "Organization",
        name: "Callengo",
        url: "https://callengo.com",
        logo: { "@type": "ImageObject", url: "https://callengo.com/callengo-logo.svg" },
      },
      mainEntityOfPage: "https://callengo.com/compare/retell-ai",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does Retell AI actually cost per minute?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Retell AI's base infrastructure costs $0.055 per minute. On top of that, you pay separately for telephony ($0.015/min via Twilio), text-to-speech ($0.015 to $0.040/min depending on provider), and the LLM you choose (GPT-4o at $0.040/min, Claude Sonnet at $0.080/min). The effective all-in cost for a typical stack runs $0.145 to $0.25 per minute. Callengo's overage rates cover everything from $0.17 to $0.29 per minute, with no separate vendor bills.",
          },
        },
        {
          "@type": "Question",
          name: "Does Retell AI have outbound calling templates?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Retell AI offers seven workflow templates, but they are focused on inbound customer service scenarios. There are no pre-built templates for outbound lead qualification, appointment confirmation, or data validation. Callengo ships with three production-ready outbound agents designed specifically for those workflows.",
          },
        },
        {
          "@type": "Question",
          name: "Can non-technical teams use Retell AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Retell AI has a visual builder that can get a basic agent running in about 30 minutes, but anything beyond simple prompts requires coding: fallback logic, CRM field mapping, function calling, and webhook configuration. Most production deployments need engineering support. Callengo is fully no-code and designed for ops managers, sales directors, and practice administrators.",
          },
        },
        {
          "@type": "Question",
          name: "What CRM integrations does Callengo have vs Retell AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Retell AI integrates natively with HubSpot, Salesforce, and Zendesk, with webhook-based connections to Make, n8n, and Zapier. Callengo integrates natively with HubSpot, Salesforce, Pipedrive, Zoho CRM, Microsoft Dynamics 365, and Clio, plus Google Calendar, Outlook, Zoom, SimplyBook.me, Slack, Google Sheets, and Zapier/Make/n8n. Callengo's integrations automatically map fields and handle CRM writes without middleware.",
          },
        },
        {
          "@type": "Question",
          name: "Is Retell AI HIPAA compliant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Retell AI offers HIPAA compliance with a BAA available. It is also SOC 2 Type 1 and Type 2 certified, GDPR compliant, and PCI DSS compliant. Callengo is also HIPAA compliant. Both platforms meet enterprise security requirements for healthcare use cases.",
          },
        },
        {
          "@type": "Question",
          name: "Does Retell AI charge per concurrent call?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Retell AI includes 20 free concurrent calls. Beyond that, each additional active concurrent call costs $8 per month. For businesses scaling from 20 to 100 concurrent calls, that adds $640 per month in concurrency fees alone, on top of all per-minute usage costs. Callengo's concurrent call limits are set by plan tier, with no separate per-slot fee.",
          },
        },
      ],
    },
  ],
};

/* ─── Data ─── */
const featureRows = [
  { feature: "Setup time", callengo: "Under 15 minutes", retell: "30 min (basic) to 48+ hrs (custom)", callengoPro: true },
  { feature: "Technical expertise required", callengo: "None", retell: "Developer needed for custom logic", callengoPro: true },
  { feature: "Pre-built outbound templates", callengo: "3 vertical agents", retell: "None (7 inbound templates)", callengoPro: true },
  { feature: "Lead Qualification Agent", callengo: "BANT scoring included", retell: "Custom build required", callengoPro: true },
  { feature: "Appointment Confirmation Agent", callengo: "Full logic included", retell: "Custom build required", callengoPro: true },
  { feature: "Data Validation Agent", callengo: "CRM writes included", retell: "Custom build required", callengoPro: true },
  { feature: "Follow-up automation", callengo: "Up to unlimited, by plan", retell: "Custom code required", callengoPro: true },
  { feature: "No-show auto-retry", callengo: "Yes (Growth and above)", retell: "Custom code required", callengoPro: true },
  { feature: "Voicemail detection", callengo: "Smart detection (Starter+)", retell: "Available via API config", callengoPro: false },
  { feature: "Calendar sync", callengo: "Google, Outlook, Zoom, SimplyBook.me", retell: "Cal.com native; others via webhook", callengoPro: true },
  { feature: "HubSpot integration", callengo: "Native (Business+)", retell: "Native (Marketplace app)", callengoPro: false },
  { feature: "Salesforce integration", callengo: "Native (Teams+)", retell: "Native", callengoPro: false },
  { feature: "Pipedrive integration", callengo: "Native (Business+)", retell: "Not native", callengoPro: true },
  { feature: "Zoho CRM integration", callengo: "Native (Business+)", retell: "Not native", callengoPro: true },
  { feature: "Clio integration (legal)", callengo: "Native (Business+)", retell: "Not available", callengoPro: true },
  { feature: "Pricing model", callengo: "Flat monthly + single overage rate", retell: "Pay-as-you-go, no monthly cap", callengoPro: true },
  { feature: "Infrastructure cost", callengo: "All-in overage rate", retell: "$0.055/min (base only)", callengoPro: true },
  { feature: "Effective cost per minute", callengo: "$0.17 to $0.29/min (all-in)", retell: "$0.145 to $0.25/min (with vendors)", callengoPro: false },
  { feature: "Concurrency fee", callengo: "Included in plan tier", retell: "$8/month per call above 20 free", callengoPro: true },
  { feature: "Per-dial fee (outbound)", callengo: "None", retell: "$0.005 per dial (batch calls)", callengoPro: true },
  { feature: "Branded caller ID fee", callengo: "None", retell: "$0.10 per outbound call", callengoPro: true },
  { feature: "Monthly cost cap", callengo: "Yes, predictable by plan", retell: "No cap, pure usage-based", callengoPro: true },
  { feature: "Free tier", callengo: "15 min free, always", retell: "$10 credit, ~60 min one-time", callengoPro: false },
  { feature: "HIPAA compliant", callengo: "Yes", retell: "Yes (with BAA)", callengoPro: false },
  { feature: "SOC 2 certified", callengo: "Yes", retell: "SOC 2 Type 1 and Type 2", callengoPro: false },
  { feature: "PCI DSS compliant", callengo: "Yes", retell: "Yes", callengoPro: false },
  { feature: "Voice latency", callengo: "Optimized for conversation", retell: "~620ms avg; 280ms with Cartesia", callengoPro: false },
  { feature: "Dedicated support", callengo: "Email and onboarding on paid plans", retell: "Discord and email", callengoPro: false },
];

const callengoPlans = [
  { name: "Free", price: "$0", minutes: "15 (one-time)", concurrent: "1", overage: "Blocked" },
  { name: "Starter", price: "$99/mo", minutes: "300", concurrent: "2", overage: "$0.29/min" },
  { name: "Growth", price: "$179/mo", minutes: "600", concurrent: "3", overage: "$0.26/min" },
  { name: "Business", price: "$299/mo", minutes: "1,200", concurrent: "5", overage: "$0.23/min" },
  { name: "Teams", price: "$649/mo", minutes: "2,250", concurrent: "10", overage: "$0.20/min" },
  { name: "Enterprise", price: "$1,499/mo", minutes: "6,000", concurrent: "Unlimited", overage: "$0.17/min" },
];

const retellCosts = [
  { component: "Voice infrastructure", cost: "$0.055/min", note: "Base rate only" },
  { component: "Telephony (Retell via Twilio)", cost: "$0.015/min", note: "Paid separately" },
  { component: "Text-to-speech (standard)", cost: "$0.015/min", note: "Paid separately; ElevenLabs $0.040/min" },
  { component: "LLM (e.g. GPT-4o)", cost: "$0.040–$0.080/min", note: "Varies by model; billed separately" },
  { component: "Batch call fee", cost: "$0.005 per dial", note: "Per outbound call attempt" },
  { component: "Branded caller ID", cost: "$0.10 per call", note: "Per outbound call" },
  { component: "Extra concurrent calls", cost: "$8/month per slot", note: "Above 20 free" },
  { component: "Effective total (typical stack)", cost: "$0.145–$0.25/min", note: "All components combined" },
];

const callengoAdvantages = [
  {
    icon: LayoutTemplate,
    title: "Three outbound agents, ready to run",
    body: "Retell AI's seven templates are built for inbound customer service. None of them cover outbound lead qualification, appointment confirmation, or data validation. Callengo ships with exactly those three agents, each with a tested call script, structured follow-up rules, and CRM field mappings already set up. You pick one and launch.",
  },
  {
    icon: DollarSign,
    title: "One bill, no surprises",
    body: "Retell AI is fully pay-as-you-go. You pay per-minute for infrastructure, then separately for telephony, TTS, your chosen LLM, and batch call fees. Concurrency above 20 slots costs an extra $8 per month per active call. Branded caller ID adds $0.10 per outbound call. Callengo has one overage rate per minute, everything included. If you run 800 calls a month, you know what it costs before the month starts.",
  },
  {
    icon: Code2,
    title: "Your ops team can run it, not just your dev team",
    body: "Retell AI's visual builder can deploy a simple agent in 30 minutes, but custom logic, CRM field mappings, fallback handling, and function calling all require coding. Most production deployments need engineering time. Callengo is fully no-code from campaign creation to CRM sync. An ops manager or practice administrator can set up, launch, and review campaigns without filing a single engineering ticket.",
  },
  {
    icon: GitMerge,
    title: "Full-loop automation, not just the call",
    body: "After a call ends, Callengo writes the outcome to your CRM, books or updates calendar events, schedules follow-up calls for no-answers, handles voicemail drops, and sends Slack alerts for hot leads or urgent reschedule requests. In Retell AI, each of these steps requires a separate webhook or function call that you configure and maintain. The gap is the difference between a tool and a complete workflow.",
  },
  {
    icon: Shield,
    title: "More native CRM connections",
    body: "Retell AI integrates natively with HubSpot, Salesforce, and Zendesk. Callengo adds Pipedrive, Zoho CRM, Microsoft Dynamics 365, and Clio for legal firms, all with native field mapping. For teams using Pipedrive as their primary CRM or law firms on Clio, Callengo is the only option with a real native integration rather than a Zapier workaround.",
  },
  {
    icon: HeadphonesIcon,
    title: "Predictable costs at every volume level",
    body: "Retell AI's concurrency pricing adds $8 per month for every concurrent call slot above 20. A team running 50 concurrent calls simultaneously pays an extra $240 per month in concurrency fees alone, before any per-minute usage. Callengo's concurrent call limits are defined by plan tier with no additional per-slot charges, so your costs scale by plan upgrade, not by an accumulating fee for each active line.",
  },
];

const crossLinks = [
  { name: "Bland AI", slug: "bland-ai", logo: "/bland.png", desc: "AI voice infrastructure" },
  { name: "Vapi", slug: "vapi", logo: "/vapi.svg", desc: "Developer-first voice API" },
  { name: "Synthflow", slug: "synthflow", logo: "/synthflow.svg", desc: "No-code voice builder" },
  { name: "Dialpad", slug: "dialpad", logo: "/dialpad.svg", desc: "Cloud phone system with AI" },
];

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
            onClick={() => trackFreeTrialClick("compare_retell_ai")}
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

export default function CallengoVsRetellAI() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
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
              <span className="text-foreground">Callengo vs Retell AI</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-6">
                  Updated March 2026
                </span>
                <h1 className="text-display-sm mb-5">
                  Callengo vs Retell AI
                  <br />
                  <span className="gradient-text">Outbound automation vs. latency-optimized API</span>
                </h1>
                <p className="text-lg text-foreground-secondary leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
                  Retell AI is one of the fastest voice AI APIs on the market, with latency as low as 280ms and a strong compliance story. It is also a developer-first infrastructure platform with no pre-built outbound templates and a usage-based pricing model that adds separate fees for LLMs, TTS, concurrency, and branded caller ID. Callengo is the alternative for teams that want outbound automation running today, not after weeks of engineering work.
                </p>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Setup time", callengo: "< 15 min", retell: "30 min to 48+ hrs" },
                    { label: "Outbound agents", callengo: "3 built in", retell: "Build your own" },
                    { label: "Monthly cost cap", callengo: "Yes, by plan", retell: "No cap" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white rounded-xl border border-border p-4">
                      <p className="text-xs text-foreground-tertiary mb-2 font-medium" style={{ fontFamily: "var(--font-body)" }}>{stat.label}</p>
                      <p className="text-xs text-foreground-tertiary mb-0.5" style={{ fontFamily: "var(--font-body)" }}>Callengo</p>
                      <p className="font-bold text-sm text-accent">{stat.callengo}</p>
                      <p className="text-xs text-foreground-tertiary mt-2 mb-0.5" style={{ fontFamily: "var(--font-body)" }}>Retell AI</p>
                      <p className="font-semibold text-sm text-foreground-secondary">{stat.retell}</p>
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
                        <img
                          src="/retell.svg"
                          alt="Retell AI"
                          className="w-14 h-14 object-contain"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                        />
                      </div>
                      <span className="text-sm font-semibold">Retell AI</span>
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

        {/* Overview */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-6">
                    Overview
                  </span>
                  <h2 className="text-3xl font-semibold mb-6">Two different approaches to voice AI</h2>
                  <div className="space-y-4 text-foreground-secondary leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    <p>
                      Retell AI was built for speed. Its proprietary turn-taking model and Cartesia TTS integration achieve average latency around 620ms, with some deployments hitting 280ms, which puts it among the fastest voice AI platforms available today. It also carries a strong compliance stack: HIPAA with BAA, SOC 2 Type 1 and Type 2, GDPR, and PCI DSS. For engineering teams building latency-sensitive voice products, those are meaningful numbers.
                    </p>
                    <p>
                      The pricing model is pure pay-as-you-go. There is no monthly plan and no cost cap. You pay $0.055 per minute for the Retell infrastructure, then separately for telephony ($0.015/min via Twilio), your TTS provider ($0.015 to $0.040/min), and your LLM of choice (GPT-4o adds $0.040/min, Claude Sonnet adds $0.080/min). Each additional concurrent call slot above the 20 included for free costs $8 per month. Outbound campaigns using branded caller ID add $0.10 per call. A $0.005 fee applies per dial on batch call campaigns.
                    </p>
                    <p>
                      Callengo works from a completely different starting point. It was designed for the operations manager who needs to stop no-shows, the sales director who wants leads qualified automatically, and the practice administrator who wants a clean contact database without involving engineering. You choose one of three pre-built agents, connect your CRM, upload contacts, and launch. The full monthly cost is predictable before the month starts.
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-4">
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl border border-border p-6">
                  <p className="text-xs font-semibold text-foreground-tertiary uppercase tracking-wider mb-3" style={{ fontFamily: "var(--font-body)" }}>Retell AI is best for</p>
                  <ul className="space-y-2">
                    {["Developer teams with engineering bandwidth", "Latency-critical voice products", "Inbound customer service automation", "Custom LLM and TTS provider configurations"].map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>
                        <Code2 className="w-3.5 h-3.5 text-foreground-tertiary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-electric/5 border border-electric/20 rounded-2xl p-6">
                  <p className="text-xs font-semibold text-electric uppercase tracking-wider mb-3" style={{ fontFamily: "var(--font-body)" }}>Callengo is best for</p>
                  <ul className="space-y-2">
                    {["Ops and sales teams, no code required", "Outbound lead qualification and data cleanup", "Healthcare and appointment confirmation", "Predictable monthly costs with no surprises"].map(item => (
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

        <InlineCTA
          text="Three outbound agents, no developer required, first campaign live in 15 minutes."
          cta="Try Callengo free"
        />

        {/* Pricing */}
        <section className="section relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">
                Pricing
              </span>
              <h2 className="text-3xl font-semibold mb-3">What Retell AI really costs when you add everything up</h2>
              <p className="text-lg text-foreground-secondary max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
                Retell AI's $0.055/min base rate is just the starting point. Real costs stack up across infrastructure, telephony, TTS, LLM, and per-call fees, all billed separately.
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
                      <p className="text-xs text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>Flat monthly with a single all-in overage rate</p>
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
                      No per-dial fees · No concurrency charges · No LLM or TTS bills · 12% off annual
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Retell AI cost breakdown */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="bg-white rounded-2xl border border-border overflow-hidden">
                  <div className="px-6 py-5 bg-background-secondary border-b border-border flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-foreground-tertiary/10 flex items-center justify-center">
                      <Code2 className="w-4 h-4 text-foreground-tertiary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Retell AI Cost Breakdown</h3>
                      <p className="text-xs text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>Pay-as-you-go with multiple stacked fees</p>
                    </div>
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
                        {retellCosts.map((row, i) => (
                          <tr key={row.component} className={`border-b border-border last:border-0 ${i === retellCosts.length - 1 ? "bg-amber-50" : i % 2 === 0 ? "bg-background-secondary/30" : ""}`}>
                            <td className={`px-5 py-3 font-semibold text-sm ${i === retellCosts.length - 1 ? "text-amber-800" : ""}`}>{row.component}</td>
                            <td className={`px-5 py-3 font-bold ${i === retellCosts.length - 1 ? "text-amber-700" : "text-foreground-secondary"}`} style={{ fontFamily: "var(--font-body)" }}>{row.cost}</td>
                            <td className="px-5 py-3 text-xs text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>{row.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="px-6 py-4 bg-amber-50 border-t border-amber-200">
                    <p className="text-xs text-amber-700 font-semibold" style={{ fontFamily: "var(--font-body)" }}>
                      No monthly cap · $8/month per extra concurrent call · $0.10/call branded caller ID
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Cost callout */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-900 mb-3">The concurrency fee problem</h3>
                  <div className="space-y-3 text-amber-800 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    <p>
                      Retell AI includes 20 concurrent calls for free. Every slot above that costs $8 per month. A business running 50 concurrent calls pays $240 per month in concurrency fees alone, before a single minute of usage. At 100 concurrent calls, that's $640 per month in concurrency fees on top of all per-minute costs.
                    </p>
                    <p>
                      For outbound campaigns where you want to maximize throughput across a contact list, concurrent call limits are a direct constraint on speed. Callengo's concurrent call limits are set by plan tier with no per-slot fee. The Teams plan includes 10 concurrent calls at $649 per month total. The Enterprise plan has no limit.
                    </p>
                    <p>
                      Add the $0.10 branded caller ID fee on each outbound call, the $0.005 per-dial fee for batch campaigns, and Retell AI's effective cost for outbound campaigns rises significantly above what the base per-minute rate suggests.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <InlineCTA
          text="Callengo: flat monthly pricing, no concurrency fees, no per-dial charges."
          cta="See all pricing plans"
        />

        {/* Feature matrix */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">
                Feature comparison
              </span>
              <h2 className="text-3xl font-semibold">Callengo vs Retell AI: feature by feature</h2>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-background-secondary">
                      <th className="text-left px-6 py-4 font-semibold w-2/5">Feature</th>
                      <th className="text-left px-6 py-4 font-semibold text-electric w-[30%]">Callengo</th>
                      <th className="text-left px-6 py-4 font-semibold text-foreground-secondary w-[30%]">Retell AI</th>
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
                            {row.retell}
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

        {/* What Retell AI does well */}
        <section className="section relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-border text-foreground-secondary bg-background-secondary mb-6">
                    Fair assessment
                  </span>
                  <h2 className="text-3xl font-semibold mb-6">Where Retell AI genuinely excels</h2>
                  <div className="space-y-4 text-foreground-secondary leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    <p>
                      Retell AI's latency numbers are among the best in the industry. Using Cartesia as the TTS provider, latency regularly comes in under 300ms end-to-end, and the platform's proprietary turn-taking model makes conversations feel more natural than most alternatives. For use cases where conversational quality is a primary concern, such as customer service agents handling complex inbound calls, this is a meaningful technical advantage.
                    </p>
                    <p>
                      The compliance stack is also notably complete. Retell AI holds SOC 2 Type 1 and Type 2 certifications, HIPAA with BAA, GDPR with DPA, and PCI DSS. The PCI DSS certification in particular is rare in this space and opens Retell AI to payment-processing use cases that most voice AI platforms cannot support.
                    </p>
                    <p>
                      Retell AI also handles inbound calls well. It supports live call transfers to human agents, knowledge base integration via streaming RAG, real-time function calling for mid-call API access, and timezone-aware scheduling for outbound campaigns. For engineering teams building complex inbound call routing workflows, these capabilities are genuinely useful and production-grade.
                    </p>
                    <p>
                      The platform's flexibility with voice and LLM providers is another real strength. You can combine ElevenLabs voices with Claude Haiku for a cost-efficient stack, or use OpenAI voices with GPT-4o for maximum capability, depending on what your use case requires. That configurability is useful when you have specific quality or cost targets.
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
                {[
                  { icon: Gauge, label: "~620ms avg latency", desc: "Cartesia deployments achieve 280ms end-to-end" },
                  { icon: Shield, label: "SOC 2 + HIPAA + PCI DSS", desc: "Full compliance stack including PCI for payments" },
                  { icon: TrendingUp, label: "Flexible voice stack", desc: "Mix ElevenLabs, Cartesia, OpenAI, Deepgram voices" },
                  { icon: Code2, label: "Real-time function calling", desc: "Mid-call API access for bookings, lookups, payments" },
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

        {/* Why Callengo */}
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
                    <p className="text-foreground-secondary text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{adv.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <InlineCTA
          text="Callengo includes follow-up automation, CRM writes, and calendar sync with every plan."
          cta="Start your free trial"
        />

        {/* Use cases */}
        <section className="section relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">
                Use cases
              </span>
              <h2 className="text-3xl font-semibold mb-3">Which platform fits which job?</h2>
              <p className="text-lg text-foreground-secondary max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
                Retell AI and Callengo overlap on compliance and some integrations, but diverge completely on templates, pricing structure, and who can actually operate the platform.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: CalendarCheck,
                  useCase: "Appointment confirmation and no-show reduction",
                  winner: "callengo",
                  analysis: "Callengo's Appointment Confirmation Agent calls contacts before their scheduled appointments, handles live reschedules on the call, retries no-answers automatically, and updates your calendar without any manual follow-up. Retell AI has no pre-built template for this workflow. Building it from scratch requires writing the conversation logic, configuring the calendar integration, and handling retry rules via API.",
                },
                {
                  icon: PhoneCall,
                  useCase: "Outbound lead qualification",
                  winner: "callengo",
                  analysis: "Callengo's Lead Qualification Agent runs BANT-based qualification calls, scores leads, books meetings for qualified contacts, and syncs results to HubSpot, Salesforce, Pipedrive, or Zoho. Retell AI's templates are all inbound-focused. Outbound lead qualification in Retell AI requires building the entire workflow, including the BANT structure, lead scoring logic, calendar booking, and CRM field mapping, from scratch.",
                },
                {
                  icon: Database,
                  useCase: "CRM data validation and database hygiene",
                  winner: "callengo",
                  analysis: "Callengo's Data Validation Agent calls contacts to verify names, emails, job titles, and phone numbers, then writes verified or flagged status back to your CRM automatically. There is no equivalent in Retell AI. Building a data validation workflow there means designing the conversation flow, writing the field verification logic, and wiring up webhook-based CRM writes from the ground up.",
                },
                {
                  icon: Gauge,
                  useCase: "Latency-critical inbound customer service",
                  winner: "retell",
                  analysis: "For inbound customer service where conversation feel matters, Retell AI's sub-300ms latency with Cartesia and its proprietary turn-taking model are genuine advantages. If your business needs a customer-facing phone agent that handles complex inbound queries and must feel as natural as possible, Retell AI's infrastructure is built for that.",
                },
                {
                  icon: Code2,
                  useCase: "Payment processing via voice",
                  winner: "retell",
                  analysis: "Retell AI holds PCI DSS compliance, which opens it to voice-based payment collection use cases. This is a genuinely rare certification in the AI voice space and one Callengo does not currently match. For fintech teams or debt collection workflows that require voice agents to handle card data, Retell AI is the appropriate choice.",
                },
                {
                  icon: Users,
                  useCase: "Non-technical teams needing outbound automation now",
                  winner: "callengo",
                  analysis: "Retell AI's visual builder gets you to a basic agent in about 30 minutes, but anything beyond a simple prompt requires coding. Callengo is designed for ops managers, practice administrators, and sales directors who need outbound automation running today without a developer. The setup is guided, CRM connections are native, and the agents come with call scripts already written.",
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
                      {uc.winner === "callengo" ? "Callengo recommended" : "Retell AI preferred"}
                    </span>
                    <p className="text-foreground-secondary text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{uc.analysis}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final verdict */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">
                Final verdict
              </span>
              <h2 className="text-3xl font-semibold mb-6">The bottom line</h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
                <p className="text-foreground-secondary leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  Retell AI is a technically impressive platform with some of the best latency numbers in the AI voice space, a complete compliance stack that includes PCI DSS, and a pay-as-you-go model that suits engineering teams building custom voice products. If your team has the bandwidth to build and maintain a custom stack, Retell AI gives you the tools to do it well.
                </p>
                <p className="text-foreground-secondary leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  The cost structure is the main practical concern for business teams. With no monthly cap and fees stacking across infrastructure, telephony, LLM, TTS, concurrency, and per-dial charges, the total bill for an outbound campaign is genuinely hard to predict until after you run it. The $8-per-slot concurrency fee adds up quickly as campaigns scale.
                </p>
                <p className="text-foreground-secondary leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  Callengo is the answer for teams that want outbound results without that complexity. Three agents, one monthly price, native CRM sync, and no engineering time required. If the goal is fewer no-shows, more qualified leads, or a cleaner contact database, Callengo gets you there faster and at a predictable cost.
                </p>
              </motion.div>

              <div className="grid gap-4">
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-electric/5 border border-electric/20 rounded-2xl p-7">
                  <h3 className="font-bold text-electric mb-4">Choose Callengo if...</h3>
                  <ul className="space-y-2.5">
                    {[
                      "You want outbound automation this week",
                      "Your team has no developer time to allocate",
                      "You need appointment confirmation, lead qualification, or data validation out of the box",
                      "You use Pipedrive, Zoho, Clio, or SimplyBook.me",
                      "You want to know your monthly cost before the month starts",
                      "You need follow-up automation and CRM sync without building them",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white border border-border rounded-2xl p-7">
                  <h3 className="font-bold text-foreground-secondary mb-4">Consider Retell AI if...</h3>
                  <ul className="space-y-2.5">
                    {[
                      "You have a developer team to build and maintain the voice stack",
                      "Sub-300ms latency is a hard technical requirement",
                      "You need PCI DSS compliance for payment use cases",
                      "You are building a custom inbound customer service agent",
                      "You want to mix and match your own LLM and TTS providers",
                      "Your use case requires knowledge base RAG with auto-sync",
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

        {/* FAQ */}
        <section className="section relative z-10">
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
                  q: "How much does Retell AI actually cost per minute?",
                  a: "Retell AI's base infrastructure rate is $0.055 per minute. Add telephony at $0.015/min, standard TTS at $0.015/min, and GPT-4o at $0.040/min, and the effective cost comes to around $0.125 to $0.145 per minute for a basic stack. Use ElevenLabs for TTS ($0.040/min) or Claude Sonnet as the LLM ($0.080/min) and the rate climbs to $0.20 or higher. Callengo's overage rates include everything from $0.17 to $0.29 per minute, with no separate vendor bills.",
                },
                {
                  q: "Does Retell AI charge extra for concurrent calls?",
                  a: "Yes. Retell AI includes 20 free concurrent calls. Each additional concurrent call slot costs $8 per month. A team running 50 concurrent calls simultaneously would pay $240 per month in concurrency fees on top of per-minute costs. At 100 concurrent calls, that's $640 per month in concurrency fees alone. Callengo's concurrent limits are defined by plan with no additional per-slot charge.",
                },
                {
                  q: "Can I use Retell AI without a developer?",
                  a: "You can deploy a basic agent using Retell AI's visual builder in about 30 minutes, but anything beyond a simple prompt requires code. CRM field mapping, fallback logic, function calling, and webhook configuration all need engineering work. Callengo is fully no-code from setup to campaign launch.",
                },
                {
                  q: "What outbound templates does Retell AI offer?",
                  a: "Retell AI offers seven workflow templates, but they are all built around inbound customer service scenarios. There are no templates for outbound lead qualification, appointment confirmation, or data validation. Callengo ships with three production-ready agents built specifically for those outbound workflows.",
                },
                {
                  q: "Is Retell AI suitable for healthcare appointment confirmation?",
                  a: "Retell AI is HIPAA compliant with a BAA available, so it meets the compliance requirement for healthcare. However, there is no pre-built appointment confirmation template. You would need to build the confirmation flow, the reschedule logic, the no-show retry rules, and the calendar integration from scratch. Callengo's Appointment Confirmation Agent handles all of this out of the box.",
                },
                {
                  q: "Can I migrate from Retell AI to Callengo?",
                  a: "Yes. Migration typically involves connecting your CRM via OAuth, selecting the relevant agent template, and launching your first campaign. The Callengo team assists Business and Teams plan customers through the migration process. Your CRM data and contact records stay in place since Callengo reads from and writes to the same CRM.",
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
        <section className="section relative z-10 bg-background-secondary">
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
        <section className="section relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl gradient-bg p-12 md:p-20">
              <div className="absolute inset-0 overflow-hidden opacity-90">
                <div className="absolute -top-1/4 right-[-10%] w-3/5 h-[120%] bg-gradient-to-br from-white/20 via-[#8B96C8]/15 to-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-1/3 left-[-10%] w-1/2 h-full bg-gradient-to-br from-[#8B96C8]/20 via-white/12 to-[#4F5FE8]/10 rounded-full blur-3xl" />
              </div>
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-semibold text-white mb-5">
                  Ready to run your first campaign today?
                </h2>
                <p className="text-xl text-white/70 mb-10" style={{ fontFamily: "var(--font-body)" }}>
                  Start with 15 free minutes. No credit card, no developers, no per-dial fees. Your first outbound campaign in under 15 minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://app.callengo.com/auth/signup" onClick={() => trackFreeTrialClick("compare_retell_ai")} className="inline-flex items-center justify-center gap-2 bg-white text-deep-indigo hover:bg-white/90 px-8 py-4 rounded-xl font-semibold transition-colors">
                    Start free — 15 min included
                    <ArrowRight className="w-5 h-5" />
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
