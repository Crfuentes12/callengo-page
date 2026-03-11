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
  Globe,
} from "lucide-react";

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://callengo.com/compare/vapi",
      url: "https://callengo.com/compare/vapi",
      name: "Callengo vs Vapi: Full Comparison 2026",
      description:
        "A detailed comparison of Callengo and Vapi covering real pricing, features, integrations, setup complexity, and outbound use cases. Updated March 2026.",
      inLanguage: "en-US",
      dateModified: "2026-03-11",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://callengo.com" },
          { "@type": "ListItem", position: 2, name: "Compare", item: "https://callengo.com/compare" },
          { "@type": "ListItem", position: 3, name: "Callengo vs Vapi", item: "https://callengo.com/compare/vapi" },
        ],
      },
    },
    {
      "@type": "Article",
      "@id": "https://callengo.com/compare/vapi#article",
      headline: "Callengo vs Vapi: Which AI Voice Platform Should Your Business Choose in 2026?",
      description:
        "An in-depth comparison of Callengo and Vapi covering real pricing (including STT, LLM, and TTS vendor costs), feature sets, CRM integrations, outbound use cases, and setup experience.",
      datePublished: "2026-03-01",
      dateModified: "2026-03-11",
      author: { "@type": "Organization", name: "Callengo", url: "https://callengo.com" },
      publisher: {
        "@type": "Organization",
        name: "Callengo",
        url: "https://callengo.com",
        logo: { "@type": "ImageObject", url: "https://callengo.com/callengo-logo.svg" },
      },
      mainEntityOfPage: "https://callengo.com/compare/vapi",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Vapi really cost $0.05 per minute?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Vapi charges $0.05/min for its own transport layer, but you also pay separately for a speech-to-text provider, an LLM provider, and a text-to-speech provider. When you add these together using typical vendors like OpenAI and ElevenLabs, the real cost runs $0.30 to $0.33 per minute. Callengo uses a single flat overage rate from $0.17 to $0.29/min with everything included.",
          },
        },
        {
          "@type": "Question",
          name: "Does Vapi have outbound calling templates?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vapi offers four templates, all focused on inbound use cases: appointment setter, customer support, Q&A, and an NPC game demo. There are no pre-built outbound templates for lead qualification, data validation, or appointment confirmation. Callengo ships with three production-ready outbound agents built specifically for these workflows.",
          },
        },
        {
          "@type": "Question",
          name: "Can non-technical teams use Vapi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not easily. Vapi is designed for engineering teams. Production deployments typically require 4 to 6 weeks of development work to configure STT, LLM, and TTS vendors, build call flows, handle webhooks, and integrate with existing tools. Callengo is designed specifically for non-technical business teams and can be set up in under 15 minutes.",
          },
        },
        {
          "@type": "Question",
          name: "What CRM integrations does Callengo have vs Vapi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Callengo integrates natively with HubSpot, Salesforce, Pipedrive, Zoho CRM, Microsoft Dynamics 365, and Clio, plus Google Calendar, Outlook, Zoom, Slack, Google Sheets, SimplyBook.me, and Zapier/Make/n8n. Vapi connects to apps via Zapier, Make, and webhooks, with native connections to HubSpot, Google Calendar, Google Sheets, Slack, and Notion. Callengo's integrations auto-map fields and handle CRM writes automatically; Vapi's require API configuration.",
          },
        },
        {
          "@type": "Question",
          name: "Is Vapi HIPAA compliant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vapi offers HIPAA compliance as an add-on at $1,000 per month extra. Callengo includes HIPAA compliance as part of its standard platform without additional fees.",
          },
        },
      ],
    },
  ],
};

const featureRows = [
  { feature: "Setup time", callengo: "Under 15 minutes", vapi: "4 to 6 weeks (developer required)", callengoPro: true },
  { feature: "Technical expertise required", callengo: "None", vapi: "Developer required", callengoPro: true },
  { feature: "Pre-built outbound templates", callengo: "3 vertical agents", vapi: "None (4 inbound-only templates)", callengoPro: true },
  { feature: "Lead Qualification Agent", callengo: "BANT scoring included", vapi: "Custom build required", callengoPro: true },
  { feature: "Appointment Confirmation Agent", callengo: "Full logic included", vapi: "Custom build required", callengoPro: true },
  { feature: "Data Validation Agent", callengo: "CRM writes included", vapi: "Custom build required", callengoPro: true },
  { feature: "Follow-up automation", callengo: "Up to unlimited, by plan", vapi: "Custom code required", callengoPro: true },
  { feature: "No-show auto-retry", callengo: "Yes (Growth and above)", vapi: "Custom code required", callengoPro: true },
  { feature: "Voicemail detection", callengo: "Smart detection (Starter+)", vapi: "Basic, via webhook", callengoPro: true },
  { feature: "Calendar sync", callengo: "Google, Outlook, Zoom, SimplyBook.me", vapi: "Google Calendar via webhook", callengoPro: true },
  { feature: "HubSpot integration", callengo: "Native (Business+)", vapi: "Via Zapier or webhook", callengoPro: true },
  { feature: "Salesforce integration", callengo: "Native (Teams+)", vapi: "Via Zapier or webhook", callengoPro: true },
  { feature: "Pipedrive integration", callengo: "Native (Business+)", vapi: "Not native", callengoPro: true },
  { feature: "Clio integration (legal)", callengo: "Native (Business+)", vapi: "Not available", callengoPro: true },
  { feature: "Base per-minute cost", callengo: "$0.17 to $0.29/min (all-in)", vapi: "$0.05/min + separate STT, LLM, TTS", callengoPro: true },
  { feature: "Effective per-minute cost", callengo: "$0.17 to $0.29/min flat", vapi: "$0.30 to $0.33/min with vendors", callengoPro: true },
  { feature: "HIPAA compliance", callengo: "Included", vapi: "$1,000/month add-on", callengoPro: true },
  { feature: "Vendor management", callengo: "None required", vapi: "Manage STT, LLM, TTS separately", callengoPro: true },
  { feature: "Free tier", callengo: "15 min free, always", vapi: "$10 credit (one-time)", callengoPro: false },
  { feature: "Language support", callengo: "English (US, UK, AU)", vapi: "100+ languages", callengoPro: false },
  { feature: "Concurrency", callengo: "1 to unlimited, by plan", vapi: "10 calls (Enterprise for unlimited)", callengoPro: false },
  { feature: "SOC 2 certified", callengo: "Yes", vapi: "Yes", callengoPro: false },
  { feature: "Live call transfer to human", callengo: "Yes", vapi: "Yes", callengoPro: false },
  { feature: "Multi-agent workflows", callengo: "Campaign-level automation", vapi: "Multi-agent squads (developer config)", callengoPro: false },
  { feature: "Voice providers", callengo: "4 curated voices", vapi: "9+ providers (ElevenLabs, Azure, etc.)", callengoPro: false },
  { feature: "Dedicated support", callengo: "Email and onboarding on paid plans", vapi: "Discord and email on paid plans", callengoPro: false },
  { feature: "Daily volume cap", callengo: "None", vapi: "10 concurrent (Enterprise for more)", callengoPro: true },
];

const callengoPlans = [
  { name: "Free", price: "$0", minutes: "15 (one-time)", concurrent: "1", overage: "Blocked" },
  { name: "Starter", price: "$99/mo", minutes: "300", concurrent: "2", overage: "$0.29/min" },
  { name: "Growth", price: "$179/mo", minutes: "600", concurrent: "3", overage: "$0.26/min" },
  { name: "Business", price: "$299/mo", minutes: "1,200", concurrent: "5", overage: "$0.23/min" },
  { name: "Teams", price: "$649/mo", minutes: "2,250", concurrent: "10", overage: "$0.20/min" },
  { name: "Enterprise", price: "$1,499/mo", minutes: "6,000", concurrent: "Unlimited", overage: "$0.17/min" },
];

const vapiCosts = [
  { component: "Vapi transport", cost: "$0.05/min", note: "Base rate only" },
  { component: "Speech-to-text (e.g. Deepgram)", cost: "$0.01–$0.04/min", note: "Paid separately" },
  { component: "LLM (e.g. GPT-4o)", cost: "$0.10–$0.15/min", note: "Paid separately" },
  { component: "Text-to-speech (e.g. ElevenLabs)", cost: "$0.10–$0.12/min", note: "Paid separately" },
  { component: "Total effective cost", cost: "$0.30–$0.33/min", note: "With typical vendors" },
];

const callengoAdvantages = [
  {
    icon: LayoutTemplate,
    title: "Three agents built for outbound, ready to use",
    body: "Vapi offers four templates, all designed for inbound conversations. There are no outbound templates for lead qualification, appointment confirmation, or data validation. Callengo ships with exactly those three agents, each with a tested call script, smart follow-up logic, and CRM field mappings already configured.",
  },
  {
    icon: DollarSign,
    title: "One price. No vendor math required.",
    body: "Vapi's $0.05/min rate only covers its own transport layer. You pay separately for a speech-to-text provider, an LLM, and a text-to-speech provider. Using typical vendors like Deepgram, GPT-4o, and ElevenLabs, the real cost runs $0.30 to $0.33 per minute. Callengo's overage rate includes everything. $0.23/min on Business. Full stop.",
  },
  {
    icon: Code2,
    title: "No developer. Minutes, not months.",
    body: "Vapi production deployments typically take 4 to 6 weeks. You need to select and configure STT, LLM, and TTS vendors, build call flow logic, write webhook handlers, set up CRM field mappings, and test edge cases. Callengo removes all of that. Connect your CRM via OAuth, pick your agent, upload your contacts, and launch. Most teams are running their first campaign the same day.",
  },
  {
    icon: GitMerge,
    title: "Full-loop automation, no assembly required",
    body: "After a call ends, Callengo writes the outcome to your CRM, books calendar events, triggers follow-up calls, handles voicemails, and sends Slack alerts. In Vapi, each of these requires a separate webhook or tool call that you configure and maintain yourself. The difference is the difference between a product and a platform.",
  },
  {
    icon: Shield,
    title: "HIPAA included, not invoiced separately",
    body: "Vapi charges $1,000 per month extra for HIPAA compliance. For healthcare practices, this adds $12,000 per year before you've run a single call. Callengo includes HIPAA compliance as standard. For medical offices, dental practices, and health services businesses, this is a meaningful cost difference.",
  },
  {
    icon: HeadphonesIcon,
    title: "Deep integrations for the CRMs you already use",
    body: "Vapi connects to third-party tools via Zapier, Make, and webhooks, which means you're responsible for mapping fields, handling errors, and maintaining the integration when APIs change. Callengo integrates natively with HubSpot, Salesforce, Pipedrive, Zoho, Dynamics 365, and Clio, with automatic field mapping and no middleware to maintain.",
  },
];

const crossLinks = [
  { name: "Bland AI", slug: "bland-ai", logo: "/bland.png", desc: "AI voice infrastructure" },
  { name: "Retell AI", slug: "retell-ai", logo: "/retell.svg", desc: "Low-latency voice SDK" },
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

export default function CallengoVsVapi() {
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
              <span className="text-foreground">Callengo vs Vapi</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-6">
                  Updated March 2026
                </span>
                <h1 className="text-display-sm mb-5">
                  Callengo vs Vapi
                  <br />
                  <span className="gradient-text">Business platform vs. developer API</span>
                </h1>
                <p className="text-lg text-foreground-secondary leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
                  Vapi advertises $0.05 per minute. The real cost, once you add speech-to-text, an LLM, and a text-to-speech provider, runs $0.30 to $0.33 per minute. Callengo's overage rate covers everything from $0.17 to $0.29 per minute, with three pre-built outbound agents, no developer required, and HIPAA included. This guide breaks down the real differences.
                </p>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Setup time", callengo: "< 15 min", vapi: "4 to 6 weeks" },
                    { label: "Effective cost/min", callengo: "$0.17–$0.29", vapi: "$0.30–$0.33" },
                    { label: "Outbound templates", callengo: "3 agents", vapi: "None" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white rounded-xl border border-border p-4">
                      <p className="text-xs text-foreground-tertiary mb-2 font-medium" style={{ fontFamily: "var(--font-body)" }}>{stat.label}</p>
                      <p className="text-xs text-foreground-tertiary mb-0.5" style={{ fontFamily: "var(--font-body)" }}>Callengo</p>
                      <p className="font-bold text-sm text-accent">{stat.callengo}</p>
                      <p className="text-xs text-foreground-tertiary mt-2 mb-0.5" style={{ fontFamily: "var(--font-body)" }}>Vapi</p>
                      <p className="font-semibold text-sm text-foreground-secondary">{stat.vapi}</p>
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
                          src="/vapi.svg"
                          alt="Vapi"
                          className="w-14 h-14 object-contain"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                        />
                      </div>
                      <span className="text-sm font-semibold">Vapi</span>
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
                  <h2 className="text-3xl font-semibold mb-6">What you're actually comparing</h2>
                  <div className="space-y-4 text-foreground-secondary leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    <p>
                      Vapi is a voice infrastructure API with a modular architecture. You bring your own speech-to-text provider, your own LLM, and your own text-to-speech provider, then use Vapi's transport layer to connect them into a working voice agent. The advertised $0.05/min covers that transport layer only. The actual cost of running a call also includes what you pay each vendor separately.
                    </p>
                    <p>
                      Vapi supports 100+ languages, sub-200ms latency with Cartesia, multi-agent squads for complex workflows, and handles 400,000+ daily calls at enterprise scale. It is a genuinely capable platform for engineering teams building custom voice products. Getting to production takes 4 to 6 weeks and requires developers who know voice APIs.
                    </p>
                    <p>
                      Callengo is built for the opposite buyer. If your team doesn't have developers available, or you simply want to automate outbound calls without building the infrastructure from scratch, Callengo gives you three ready-to-use agents: Lead Qualification, Appointment Confirmation, and Data Validation. You connect your CRM, upload contacts, and launch.
                    </p>
                    <p>
                      Pricing is a flat monthly fee with a single overage rate. HIPAA compliance is included. CRM integrations are native, not webhook-dependent. And there are no vendor fees to track.
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-4">
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl border border-border p-6">
                  <p className="text-xs font-semibold text-foreground-tertiary uppercase tracking-wider mb-3" style={{ fontFamily: "var(--font-body)" }}>Vapi is best for</p>
                  <ul className="space-y-2">
                    {["Developer-led engineering teams", "Custom multilingual voice apps", "BYOM / BYOS / BYOT architectures", "Ultra-low latency requirements"].map(item => (
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
                    {["Sales and ops teams, no devs needed", "Healthcare, legal, real estate", "Predictable all-in pricing", "CRM-connected outbound automation"].map(item => (
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
          text="Zero developer time, three outbound agents ready to launch. Try Callengo free."
          cta="Start free trial"
        />

        {/* Pricing */}
        <section className="section relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">
                Pricing breakdown
              </span>
              <h2 className="text-3xl font-semibold mb-3">Vapi's $0.05/min: what the number hides</h2>
              <p className="text-lg text-foreground-secondary max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
                Vapi's advertised rate only covers the voice transport. Real costs add up quickly once you factor in the vendors you're required to connect.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 mb-10">
              {/* Callengo plans */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="bg-white rounded-2xl border border-electric/30 overflow-hidden shadow-lg">
                  <div className="px-6 py-5 bg-electric/5 border-b border-electric/20 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-electric/10 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-electric" />
                    </div>
                    <div>
                      <h3 className="font-bold">Callengo Plans</h3>
                      <p className="text-xs text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>Flat monthly, single all-in overage rate</p>
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
                      All-in pricing · HIPAA included · No vendor fees to manage · 12% off with annual billing
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Vapi cost breakdown */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="bg-white rounded-2xl border border-border overflow-hidden">
                  <div className="px-6 py-5 bg-background-secondary border-b border-border flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-foreground-tertiary/10 flex items-center justify-center">
                      <Code2 className="w-4 h-4 text-foreground-tertiary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Vapi Real Cost Breakdown</h3>
                      <p className="text-xs text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>Per-minute with typical vendor stack</p>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          {["Component", "Cost/min", "Billed by"].map(h => (
                            <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-foreground-tertiary uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {vapiCosts.map((row, i) => (
                          <tr key={row.component} className={`border-b border-border last:border-0 ${i === vapiCosts.length - 1 ? "bg-amber-50" : i % 2 === 0 ? "bg-background-secondary/30" : ""}`}>
                            <td className={`px-5 py-3 font-semibold ${i === vapiCosts.length - 1 ? "text-amber-800" : ""}`}>{row.component}</td>
                            <td className={`px-5 py-3 font-bold ${i === vapiCosts.length - 1 ? "text-amber-700" : "text-foreground-secondary"}`} style={{ fontFamily: "var(--font-body)" }}>{row.cost}</td>
                            <td className="px-5 py-3 text-xs text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>{row.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="px-6 py-4 bg-amber-50 border-t border-amber-200">
                    <p className="text-xs text-amber-700 font-semibold" style={{ fontFamily: "var(--font-body)" }}>
                      Plus: HIPAA costs $1,000/month extra · Concurrency limited to 10 on standard plans
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-900 mb-3">The $0.05/min rate is not what you pay</h3>
                  <div className="space-y-3 text-amber-800 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    <p>
                      Vapi's pricing page shows $0.05/min, but that only covers Vapi's own transport layer. To run a call, you also need a speech-to-text provider (Deepgram, Assembly AI, or similar), an LLM (GPT-4o, Claude, Gemini), and a text-to-speech provider (ElevenLabs, Azure, Cartesia). Each of those is billed separately by the vendor.
                    </p>
                    <p>
                      With a common stack using GPT-4o and ElevenLabs, the effective all-in rate runs $0.30 to $0.33 per minute. That's actually higher than Callengo's Business plan overage of $0.23/min, which includes everything with no vendor accounts to manage.
                    </p>
                    <p>
                      If your team needs HIPAA compliance, add another $1,000 per month on top of that. Callengo includes HIPAA at no extra cost.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Inline CTA 2 */}
        <InlineCTA
          text="Callengo includes everything: HIPAA, CRM sync, follow-up automation, and all-in per-minute pricing."
          cta="Compare plans"
        />

        {/* Feature Matrix */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">
                Feature comparison
              </span>
              <h2 className="text-3xl font-semibold">Callengo vs Vapi: feature by feature</h2>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-background-secondary">
                      <th className="text-left px-6 py-4 font-semibold w-2/5">Feature</th>
                      <th className="text-left px-6 py-4 font-semibold text-electric w-[30%]">Callengo</th>
                      <th className="text-left px-6 py-4 font-semibold text-foreground-secondary w-[30%]">Vapi</th>
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
                            {row.vapi}
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

        {/* What Vapi Does Well */}
        <section className="section relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-border text-foreground-secondary bg-background-secondary mb-6">
                    Fair assessment
                  </span>
                  <h2 className="text-3xl font-semibold mb-6">Where Vapi genuinely excels</h2>
                  <div className="space-y-4 text-foreground-secondary leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    <p>
                      Vapi's modular architecture is its greatest strength. By letting you bring your own STT, LLM, and TTS providers, Vapi gives engineering teams the flexibility to choose exactly the right model for each component of a call. Want sub-200ms latency? Use Cartesia for TTS. Need GPT-4o for complex reasoning? Plug it in. Need Deepgram for accurate transcription in a noisy environment? Done.
                    </p>
                    <p>
                      Language support is another genuine advantage. Vapi supports 100+ languages with automatic detection, which makes it a strong fit for multinational businesses or products that serve non-English-speaking markets. This is not a capability Callengo currently matches on standard plans.
                    </p>
                    <p>
                      At enterprise scale, Vapi handles 400,000+ daily calls with 99.99% uptime and SOC 2 / GDPR certification. Multi-agent squad configurations let engineering teams build sophisticated routing logic where multiple AI agents hand off calls or work in parallel. For complex, custom voice applications at scale, Vapi's infrastructure is battle-tested.
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
                {[
                  { icon: Globe, label: "100+ languages", desc: "Automatic language detection across global markets" },
                  { icon: TrendingUp, label: "9+ voice providers", desc: "ElevenLabs, Azure, Cartesia, OpenAI, and more" },
                  { icon: Code2, label: "BYOM / BYOS / BYOT", desc: "Bring your own model, STT, and telephony" },
                  { icon: Users, label: "Multi-agent squads", desc: "Multiple AI agents in one coordinated workflow" },
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

        {/* Inline CTA 3 */}
        <InlineCTA
          text="Callengo: three outbound agents, all-in pricing, no developers. See it live."
          cta="Try Callengo free"
        />

        {/* Use Cases */}
        <section className="section relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">
                Use cases
              </span>
              <h2 className="text-3xl font-semibold mb-3">Which platform for which job?</h2>
              <p className="text-lg text-foreground-secondary max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
                The right choice depends on whether your team is building something custom or automating an existing outbound workflow.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: CalendarCheck,
                  useCase: "Appointment confirmation and no-show reduction",
                  winner: "callengo",
                  analysis: "Callengo has a dedicated Appointment Confirmation Agent. It calls contacts before appointments, handles reschedules live, triggers retry calls for no-answers, and updates your calendar automatically. Vapi has no outbound templates and would require building this entire workflow from scratch using its API.",
                },
                {
                  icon: PhoneCall,
                  useCase: "Outbound lead qualification",
                  winner: "callengo",
                  analysis: "Callengo's Lead Qualification Agent runs BANT-based qualification calls, scores leads, books meetings, and syncs to HubSpot, Salesforce, Pipedrive, or Zoho. Vapi's four templates are all inbound-focused. Building an outbound lead qualification flow in Vapi requires custom development across multiple components.",
                },
                {
                  icon: Database,
                  useCase: "CRM database hygiene and data validation",
                  winner: "callengo",
                  analysis: "Callengo's Data Validation Agent calls contacts to verify contact information and writes clean data directly to CRM fields. Vapi does not offer a pre-built data validation workflow. Building one requires configuring the voice stack, writing the conversation logic, and setting up webhook-based CRM writes.",
                },
                {
                  icon: Globe,
                  useCase: "Multilingual customer-facing voice products",
                  winner: "vapi",
                  analysis: "Vapi supports 100+ languages with automatic detection, making it the clear choice for consumer products that need to serve global audiences. Callengo's standard plans cover English-speaking markets. For multilingual outbound at scale, Vapi's infrastructure approach has a real advantage.",
                },
                {
                  icon: Code2,
                  useCase: "Custom voice application development",
                  winner: "vapi",
                  analysis: "If you need to build a novel voice application with custom logic, your own LLM, and a specific STT provider, Vapi's modular architecture gives you that flexibility. Callengo is a finished product for specific use cases, not a platform for building new ones.",
                },
                {
                  icon: Users,
                  useCase: "Non-technical ops and sales teams",
                  winner: "callengo",
                  analysis: "Vapi requires a developer to reach production. Callengo is designed for ops managers, practice administrators, and sales directors who need to run outbound campaigns without involving engineering. The setup is guided, the CRM connections are native, and support comes from the Callengo team directly.",
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
                      {uc.winner === "callengo" ? "Callengo recommended" : "Vapi preferred"}
                    </span>
                    <p className="text-foreground-secondary text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{uc.analysis}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final Verdict */}
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
                  Vapi is a capable infrastructure platform for engineering teams who need maximum flexibility, multilingual support, and the ability to bring their own AI components. If you're building a custom voice product with complex logic and a global audience, Vapi gives you the building blocks to do it.
                </p>
                <p className="text-foreground-secondary leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  But that flexibility has a cost: vendor complexity, a $0.30+ effective per-minute rate, a $1,000/month HIPAA add-on, and a 4 to 6 week development timeline. Most business teams don't need that flexibility. They need automation that runs outbound campaigns, writes back to their CRM, and works today.
                </p>
                <p className="text-foreground-secondary leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  Callengo is the answer for those teams. Three ready-to-run agents, flat monthly pricing with no vendor math, HIPAA included, native CRM integrations, and onboarding support. You don't build it. You launch it.
                </p>
              </motion.div>

              <div className="grid gap-4">
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-electric/5 border border-electric/20 rounded-2xl p-7">
                  <h3 className="font-bold text-electric mb-4">Choose Callengo if...</h3>
                  <ul className="space-y-2.5">
                    {[
                      "You want automation running this week",
                      "Your team has no developers to allocate",
                      "You need outbound agents, not inbound templates",
                      "You want HIPAA compliance included, not billed separately",
                      "You use HubSpot, Pipedrive, Zoho, Clio, or SimplyBook.me",
                      "You want one predictable monthly bill",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white border border-border rounded-2xl p-7">
                  <h3 className="font-bold text-foreground-secondary mb-4">Consider Vapi if...</h3>
                  <ul className="space-y-2.5">
                    {[
                      "You have developers to build and maintain the voice stack",
                      "You need 100+ language support for global markets",
                      "You want to bring your own LLM, STT, and TTS providers",
                      "You're building an embedded voice product, not running campaigns",
                      "Ultra-low latency is a core technical requirement",
                      "You need multi-agent squad logic for complex workflows",
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
                  q: "Does Vapi really cost $0.05 per minute?",
                  a: "No. Vapi's $0.05/min covers its own transport layer only. You also pay separately for a speech-to-text provider, an LLM, and a text-to-speech provider. With a typical stack using GPT-4o and ElevenLabs, the effective all-in rate is $0.30 to $0.33 per minute. Callengo's overage rates range from $0.17 to $0.29/min with everything included.",
                },
                {
                  q: "Can non-technical teams use Vapi for outbound campaigns?",
                  a: "Not easily. Vapi is designed for engineering teams. Getting to a production outbound campaign typically takes 4 to 6 weeks of development work. Callengo is designed for non-technical teams and can be running in under 15 minutes.",
                },
                {
                  q: "Does Vapi have outbound calling templates?",
                  a: "Vapi offers four templates, all focused on inbound conversations: appointment setter, customer support, Q&A, and a game NPC demo. There are no outbound templates for lead qualification, appointment confirmation, or data validation. Callengo ships with exactly those three outbound agents.",
                },
                {
                  q: "How does Callengo's HIPAA compliance compare to Vapi's?",
                  a: "Callengo includes HIPAA compliance as part of its standard platform with no additional fees. Vapi offers HIPAA compliance as a paid add-on at $1,000 per month. For healthcare practices running appointment confirmation campaigns, this is a $12,000/year difference before a single call is made.",
                },
                {
                  q: "Can I migrate from Vapi to Callengo?",
                  a: "Yes. Migration involves connecting your CRM via OAuth, selecting the relevant agent template, and launching your first campaign. The Callengo team assists Business and Teams plan customers through the migration process.",
                },
                {
                  q: "Which platform is better for a healthcare practice?",
                  a: "Callengo. The Appointment Confirmation Agent handles confirmation calls, live reschedules, no-show retries, and calendar updates automatically. HIPAA compliance is included with no add-on fees. Vapi would require building the entire workflow from scratch and paying $1,000/month extra for HIPAA.",
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
                  Ready to skip the setup and start the calls?
                </h2>
                <p className="text-xl text-white/70 mb-10" style={{ fontFamily: "var(--font-body)" }}>
                  Start with 15 free minutes. No credit card, no developers, no vendor accounts. Your first campaign in under 15 minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://app.callengo.com/auth/signup" className="inline-flex items-center justify-center gap-2 bg-white text-deep-indigo hover:bg-white/90 px-8 py-4 rounded-xl font-semibold transition-colors">
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
