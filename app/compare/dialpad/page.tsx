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
  Zap,
  Shield,
  Clock,
  LayoutTemplate,
  DollarSign,
  GitMerge,
  CalendarCheck,
  Database,
  PhoneCall,
  Users,
  Mic,
  MessageSquare,
  TrendingUp,
  Building2,
} from "lucide-react";

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://callengo.com/compare/dialpad",
      url: "https://callengo.com/compare/dialpad",
      name: "Callengo vs Dialpad: Full Comparison 2026",
      description:
        "A detailed comparison of Callengo and Dialpad covering pricing models, use cases, CRM integrations, and outbound calling capabilities. Updated March 2026.",
      inLanguage: "en-US",
      dateModified: "2026-03-11",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://callengo.com" },
          { "@type": "ListItem", position: 2, name: "Compare", item: "https://callengo.com/compare" },
          { "@type": "ListItem", position: 3, name: "Callengo vs Dialpad", item: "https://callengo.com/compare/dialpad" },
        ],
      },
    },
    {
      "@type": "Article",
      "@id": "https://callengo.com/compare/dialpad#article",
      headline: "Callengo vs Dialpad: Cloud Phone System vs Autonomous Outbound AI Agents",
      datePublished: "2026-03-01",
      dateModified: "2026-03-11",
      author: { "@type": "Organization", name: "Callengo", url: "https://callengo.com" },
      publisher: {
        "@type": "Organization",
        name: "Callengo",
        url: "https://callengo.com",
        logo: { "@type": "ImageObject", url: "https://callengo.com/callengo-logo.svg" },
      },
      mainEntityOfPage: "https://callengo.com/compare/dialpad",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Dialpad make autonomous outbound calls without a human rep?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dialpad's standard product requires a human rep to make calls. Its Power Dialer automates dialing the next number on a list, but a human agent handles the conversation. Dialpad announced an Agentic Power Dialer in October 2025 for autonomous outreach, but it is designed for contact center workflows, not lead qualification or appointment confirmation campaigns. Callengo's agents initiate and conduct entire outbound calls without any human on the line.",
          },
        },
        {
          "@type": "Question",
          name: "How does Dialpad pricing compare to Callengo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dialpad charges per user per month: Connect Standard at $15 per user (annual) and Connect Pro at $25 per user (annual). A 10-person sales team on Connect Pro costs $250 per month, but that gives each rep a phone line and AI-assisted calling tools. Callengo charges per minute used: $99 per month covers 300 minutes of autonomous outbound calls across your entire team, no per-seat fee required.",
          },
        },
        {
          "@type": "Question",
          name: "What AI features does Dialpad include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dialpad includes real-time call transcription, sentiment analysis, automated call summaries, action item extraction, and live coaching suggestions for human reps during calls. These features are powered by DialpadGPT, trained on over 6 billion minutes of business conversations. The AI assists human agents rather than replacing them for outbound tasks.",
          },
        },
        {
          "@type": "Question",
          name: "Can Callengo replace Dialpad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Callengo and Dialpad serve different purposes and are often complementary rather than direct substitutes. Dialpad is a business phone system for human reps to communicate internally and externally. Callengo automates specific outbound workflows like lead qualification, appointment confirmation, and data validation without requiring a human on the call. Teams often use Dialpad for their primary communications and Callengo for their repetitive outbound campaigns.",
          },
        },
        {
          "@type": "Question",
          name: "What CRM integrations does Dialpad support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dialpad integrates natively with Salesforce, HubSpot, Zoho CRM, and Clio. Pipedrive requires Zapier. Callengo integrates natively with HubSpot, Salesforce, Pipedrive, Zoho CRM, Microsoft Dynamics 365, and Clio, with automatic field mapping and CRM writes after each outbound call.",
          },
        },
      ],
    },
  ],
};

/* ─── Data ─── */
const featureRows = [
  { feature: "Primary purpose", callengo: "Autonomous outbound AI calling", dialpad: "Cloud phone system for human reps", callengoPro: false },
  { feature: "Autonomous outbound calls (no human)", callengo: "Yes, core product", dialpad: "No (Power Dialer requires human)", callengoPro: true },
  { feature: "Lead qualification", callengo: "BANT agent, runs without a rep", dialpad: "Rep-assisted with AI coaching", callengoPro: true },
  { feature: "Appointment confirmation", callengo: "Full agent, no human needed", dialpad: "Manual, rep makes each call", callengoPro: true },
  { feature: "Data validation agent", callengo: "Yes, CRM writes included", dialpad: "Not available", callengoPro: true },
  { feature: "Follow-up automation", callengo: "Built in, by plan", dialpad: "Manual or via Zapier", callengoPro: true },
  { feature: "Real-time call transcription", callengo: "Outbound summary included", dialpad: "Yes, powered by DialpadGPT", callengoPro: false },
  { feature: "Sentiment analysis", callengo: "Outcome-based scoring", dialpad: "Yes, real-time during calls", callengoPro: false },
  { feature: "Live coaching for reps", callengo: "N/A (no human rep)", dialpad: "Yes, real-time AI suggestions", callengoPro: false },
  { feature: "Call summaries and action items", callengo: "Structured CRM output", dialpad: "Yes, automated", callengoPro: false },
  { feature: "Power dialer (rep-assisted)", callengo: "Not applicable", dialpad: "Yes, for sales teams", callengoPro: false },
  { feature: "Internal team communications", callengo: "Not applicable", dialpad: "Yes, voice, chat, SMS, video", callengoPro: false },
  { feature: "Pricing model", callengo: "Per-minute, campaign-based", dialpad: "Per user per month", callengoPro: false },
  { feature: "Starting price", callengo: "$99/mo (300 min, any team size)", dialpad: "$15/user/mo (annual, Connect)", callengoPro: false },
  { feature: "10-person team monthly cost", callengo: "$99–$299 (by volume)", dialpad: "$150–$250+ (per user)", callengoPro: false },
  { feature: "Costs scale with", callengo: "Call minutes used", dialpad: "Number of users", callengoPro: false },
  { feature: "CRM: HubSpot", callengo: "Native (Business+)", dialpad: "Native", callengoPro: false },
  { feature: "CRM: Salesforce", callengo: "Native (Teams+)", dialpad: "Native (CTI integration)", callengoPro: false },
  { feature: "CRM: Pipedrive", callengo: "Native (Business+)", dialpad: "Zapier only", callengoPro: true },
  { feature: "CRM: Zoho CRM", callengo: "Native (Business+)", dialpad: "Native", callengoPro: false },
  { feature: "CRM: Clio (legal)", callengo: "Native (Business+)", dialpad: "Native", callengoPro: false },
  { feature: "CRM: Microsoft Dynamics 365", callengo: "Native (Teams+)", dialpad: "Not native", callengoPro: true },
  { feature: "Calendar sync", callengo: "Google, Outlook, Zoom, SimplyBook.me", dialpad: "Google and Outlook (internal)", callengoPro: false },
  { feature: "HIPAA compliant", callengo: "Yes", dialpad: "Yes (with BAA)", callengoPro: false },
  { feature: "SOC 2 certified", callengo: "Yes", dialpad: "SOC 2 Type 2", callengoPro: false },
  { feature: "ISO 27001", callengo: "In progress", dialpad: "ISO 27001, 27017, 27018", callengoPro: false },
  { feature: "Free trial", callengo: "15 min, no card", dialpad: "14 days (Standard/Pro)", callengoPro: false },
];

const dialpadPlans = [
  { name: "Connect Standard", price: "$15/user/mo", note: "Annual; $27/mo monthly" },
  { name: "Connect Pro", price: "$25/user/mo", note: "Annual; $35/mo monthly" },
  { name: "Connect Enterprise", price: "Custom", note: "100+ users minimum" },
  { name: "Sell Tier 1", price: "$39/user/mo", note: "Annual; outbound-focused" },
  { name: "Sell Tier 2", price: "$95/user/mo", note: "Annual; advanced dialing" },
  { name: "Sell Premium", price: "$150/user/mo", note: "Annual; full coaching suite" },
];

const callengoPlans = [
  { name: "Free", price: "$0", minutes: "15 (one-time)", overage: "Blocked" },
  { name: "Starter", price: "$99/mo", minutes: "300", overage: "$0.29/min" },
  { name: "Growth", price: "$179/mo", minutes: "600", overage: "$0.26/min" },
  { name: "Business", price: "$299/mo", minutes: "1,200", overage: "$0.23/min" },
  { name: "Teams", price: "$649/mo", minutes: "2,250", overage: "$0.20/min" },
  { name: "Enterprise", price: "$1,499/mo", minutes: "6,000", overage: "$0.17/min" },
];

const callengoAdvantages = [
  {
    icon: PhoneCall,
    title: "No human rep required on the call",
    body: "Dialpad's Power Dialer speeds up outbound calling, but a rep still handles every conversation. Callengo's agents conduct the entire call: they ask the qualification questions, handle the reschedule request, or verify the contact's details, then write the outcome to your CRM. For repetitive outbound tasks, removing the human from the loop is the entire point.",
  },
  {
    icon: DollarSign,
    title: "Cost scales with call volume, not headcount",
    body: "Dialpad charges per user per month. A 10-person sales team on Connect Pro pays $250 per month whether they make 10 calls or 10,000. Callengo's pricing scales with minutes used. A $99-per-month plan covers 300 minutes of autonomous outbound calls, usable across your entire team with no per-seat fee. As you scale campaigns, you upgrade the plan, not add seats.",
  },
  {
    icon: LayoutTemplate,
    title: "Three outbound workflows ready to run today",
    body: "Dialpad provides tools for human reps: transcription, coaching, and intelligent summaries. Callengo provides autonomous agents for specific outbound jobs: qualifying leads with BANT, confirming appointments, and verifying CRM data. There are no templates or pre-built workflows in Dialpad for running those campaigns without a rep on each call.",
  },
  {
    icon: GitMerge,
    title: "Full campaign automation from first call to CRM write",
    body: "When a Dialpad rep finishes a call, the AI writes the summary and action items. The rep still decides what to do next. Callengo's agents handle the full loop: call the contact, complete the task, update the CRM field, schedule the follow-up call for no-answers, add the calendar event for confirmed bookings, and send a Slack alert for hot leads. There is no manual step between the call and the CRM update.",
  },
  {
    icon: Users,
    title: "No extra cost for larger teams on outbound",
    body: "For outbound campaigns, Dialpad's per-user cost accumulates fast. Five reps on Sell Tier 2 cost $475 per month in seat fees alone. Callengo's Business plan at $299 per month covers unlimited users making autonomous outbound calls within the plan's minute allocation. Outbound automation should cost based on how much work the AI does, not how many people are on your roster.",
  },
  {
    icon: TrendingUp,
    title: "Runs 24 hours a day, seven days a week",
    body: "Dialpad supports the working hours of human reps. Callengo's agents can run campaigns at any time. Appointment confirmation calls can go out in the early morning before the business opens. Data validation campaigns can run overnight to use off-peak rates. Lead qualification calls can run outside of your team's hours. The AI does not need a shift schedule.",
  },
];

const crossLinks = [
  { name: "Bland AI", slug: "bland-ai", logo: "/bland.png", desc: "AI voice infrastructure" },
  { name: "Vapi", slug: "vapi", logo: "/vapi.svg", desc: "Developer-first voice API" },
  { name: "Retell AI", slug: "retell-ai", logo: "/retell.svg", desc: "Low-latency voice SDK" },
  { name: "Synthflow", slug: "synthflow", logo: "/synthflow.svg", desc: "No-code voice builder" },
];

function InlineCTA({ text, cta }: { text: string; cta: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="my-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-electric/5 border border-electric/20 rounded-2xl px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground-secondary text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>{text}</p>
          <a href="https://app.callengo.com/auth/signup" onClick={() => trackFreeTrialClick("compare_dialpad")} className="shrink-0 inline-flex items-center gap-2 bg-electric text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-electric/90 transition-colors">
            {cta} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function CallengoVsDialpad() {
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
              <span className="text-foreground">Callengo vs Dialpad</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-6">Updated March 2026</span>
                <h1 className="text-display-sm mb-5">
                  Callengo vs Dialpad
                  <br />
                  <span className="gradient-text">Autonomous AI agents vs. AI-powered phone system</span>
                </h1>
                <p className="text-lg text-foreground-secondary leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
                  Dialpad is a cloud phone system that helps human reps communicate better with real-time transcription, sentiment analysis, and live coaching. Callengo removes the human from repetitive outbound workflows entirely. These are two fundamentally different products solving two different problems, and understanding that distinction helps you decide which one fits your situation.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Outbound model", callengo: "Fully autonomous", dialpad: "Rep-assisted" },
                    { label: "Pricing basis", callengo: "Per minute used", dialpad: "Per user/month" },
                    { label: "10-user cost", callengo: "$99–$299/mo", dialpad: "$150–$250+/mo" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white rounded-xl border border-border p-4">
                      <p className="text-xs text-foreground-tertiary mb-2 font-medium" style={{ fontFamily: "var(--font-body)" }}>{stat.label}</p>
                      <p className="text-xs text-foreground-tertiary mb-0.5" style={{ fontFamily: "var(--font-body)" }}>Callengo</p>
                      <p className="font-bold text-sm text-accent">{stat.callengo}</p>
                      <p className="text-xs text-foreground-tertiary mt-2 mb-0.5" style={{ fontFamily: "var(--font-body)" }}>Dialpad</p>
                      <p className="font-semibold text-sm text-foreground-secondary">{stat.dialpad}</p>
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
                        <img src="/dialpad.svg" alt="Dialpad" className="w-14 h-14 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                      </div>
                      <span className="text-sm font-semibold">Dialpad</span>
                    </div>
                  </div>
                  <p className="text-xs text-foreground-tertiary text-center" style={{ fontFamily: "var(--font-body)" }}>Two different product categories: autonomous agents vs. AI-assisted communications</p>
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
                  <h2 className="text-3xl font-semibold mb-6">Two different categories of product</h2>
                  <div className="space-y-4 text-foreground-secondary leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    <p>
                      Dialpad is a cloud communications platform. It gives business teams a phone system, team messaging, SMS, video, and contact center tools, all in one place. Its AI layer, built on DialpadGPT trained on over 6 billion minutes of business conversations, adds real-time transcription, sentiment tracking, call summaries, and live coaching suggestions that appear on screen while a rep is mid-call. The product makes human reps faster, more accurate, and better coached.
                    </p>
                    <p>
                      Pricing follows a per-user-per-month model: Connect Standard starts at $15 per user annually, Connect Pro at $25. For outbound-focused sales teams, the Sell product runs $39 to $150 per user per month. A 10-person team on Connect Pro costs $250 per month. A five-person sales team on Sell Tier 2 costs $475 per month in seat fees. Dialpad requires a 14-day trial starting with a credit card and converts to a paid plan automatically.
                    </p>
                    <p>
                      Callengo works from the opposite premise: the AI handles the outbound call itself, without any human on the line. Instead of helping reps do their job better, it removes the rep from tasks that do not require human judgment. Qualifying a lead against a BANT script, confirming whether a patient is coming to their appointment, or verifying a contact's job title and email are all tasks that follow a predictable structure. Callengo's three agents are built to handle those tasks autonomously, write the result to your CRM, and queue the next action.
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-4">
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl border border-border p-6">
                  <p className="text-xs font-semibold text-foreground-tertiary uppercase tracking-wider mb-3" style={{ fontFamily: "var(--font-body)" }}>Dialpad is best for</p>
                  <ul className="space-y-2">
                    {["Business phone system for all team communications", "AI coaching and live transcription for reps", "Inbound support teams and contact centers", "Teams that want one platform for calls, chat, and video"].map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>
                        <Mic className="w-3.5 h-3.5 text-foreground-tertiary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-electric/5 border border-electric/20 rounded-2xl p-6">
                  <p className="text-xs font-semibold text-electric uppercase tracking-wider mb-3" style={{ fontFamily: "var(--font-body)" }}>Callengo is best for</p>
                  <ul className="space-y-2">
                    {["Outbound campaigns without a human on each call", "Lead qualification, appointment confirmation, data validation", "Scaling outbound without adding headcount", "Per-minute pricing that grows with campaign volume, not seats"].map(item => (
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

        <InlineCTA text="Let the AI run your outbound campaigns. No reps required for repetitive calls." cta="Try Callengo free" />

        {/* Pricing */}
        <section className="section relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">Pricing</span>
              <h2 className="text-3xl font-semibold mb-3">Per-user phone system vs. per-minute outbound automation</h2>
              <p className="text-lg text-foreground-secondary max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
                Dialpad costs per user, regardless of how many calls they make. Callengo costs per minute of autonomous calling, regardless of team size.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 mb-10">
              {/* Dialpad */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="bg-white rounded-2xl border border-border overflow-hidden">
                  <div className="px-6 py-5 bg-background-secondary border-b border-border flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-foreground-tertiary/10 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-foreground-tertiary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Dialpad Plans</h3>
                      <p className="text-xs text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>Per user per month (annual pricing shown)</p>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          {["Plan", "Price", "Notes"].map(h => (
                            <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-foreground-tertiary uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {dialpadPlans.map((plan, i) => (
                          <tr key={plan.name} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-background-secondary/30" : ""}`}>
                            <td className="px-5 py-3 font-semibold text-sm">{plan.name}</td>
                            <td className="px-5 py-3 font-bold text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>{plan.price}</td>
                            <td className="px-5 py-3 text-xs text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>{plan.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="px-6 py-4 bg-background-secondary border-t border-border">
                    <p className="text-xs text-foreground-tertiary font-semibold" style={{ fontFamily: "var(--font-body)" }}>Cost grows with every user you add · 12–15% annual discount</p>
                  </div>
                </div>

                <div className="mt-4 bg-white rounded-2xl border border-border p-6">
                  <h4 className="font-semibold text-sm mb-4">Example: 10-person team monthly cost</h4>
                  <div className="space-y-3">
                    {[
                      { label: "Dialpad Connect Pro", cost: "$250/mo", note: "10 users × $25 (annual)" },
                      { label: "Dialpad Sell Tier 2", cost: "$950/mo", note: "10 users × $95 (annual)" },
                      { label: "Callengo Starter (300 min)", cost: "$99/mo", note: "Unlimited users, per-minute" },
                      { label: "Callengo Business (1,200 min)", cost: "$299/mo", note: "Unlimited users, per-minute" },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-medium text-sm">{row.label}</p>
                          <p className="text-xs text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>{row.note}</p>
                        </div>
                        <span className="font-bold text-sm shrink-0">{row.cost}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-foreground-tertiary mt-4 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    Dialpad costs the same whether the team makes 100 or 10,000 calls. Callengo costs more at higher call volumes but includes no per-seat fee.
                  </p>
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
                      <p className="text-xs text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>Per-minute, any team size</p>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          {["Plan", "Price", "Minutes/mo", "Overage"].map(h => (
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
                    <p className="text-xs text-accent font-semibold" style={{ fontFamily: "var(--font-body)" }}>No per-seat fee · Unlimited users · 12% off annual</p>
                  </div>
                </div>

                <div className="mt-4 bg-electric/5 border border-electric/20 rounded-2xl p-6">
                  <h4 className="font-semibold text-sm text-electric mb-3">When Callengo is more cost-effective</h4>
                  <p className="text-sm text-foreground-secondary leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    For outbound campaigns specifically, Callengo's per-minute model is often more efficient than a per-user phone system. A three-person ops team running 800 outbound calls per month does not need $75 to $105 per month in Dialpad seats. They need $299 per month in Callengo minutes, and the AI does all the calling without requiring those three people to be on the phone.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <InlineCTA text="No seats, no reps needed for outbound. Callengo handles the calls." cta="See all pricing plans" />

        {/* Feature matrix */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">Feature comparison</span>
              <h2 className="text-3xl font-semibold">Callengo vs Dialpad: feature by feature</h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-background-secondary">
                      <th className="text-left px-6 py-4 font-semibold w-2/5">Feature</th>
                      <th className="text-left px-6 py-4 font-semibold text-electric w-[30%]">Callengo</th>
                      <th className="text-left px-6 py-4 font-semibold text-foreground-secondary w-[30%]">Dialpad</th>
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
                            {row.dialpad}
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

        {/* Where Dialpad genuinely excels */}
        <section className="section relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-border text-foreground-secondary bg-background-secondary mb-6">Fair assessment</span>
                  <h2 className="text-3xl font-semibold mb-6">Where Dialpad genuinely stands out</h2>
                  <div className="space-y-4 text-foreground-secondary leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    <p>
                      Dialpad's real-time transcription and AI coaching are among the most mature in the category. DialpadGPT was trained on over 6 billion minutes of actual business conversations, which means its call summaries, sentiment detection, and coaching suggestions are tuned to real sales and support language rather than generic text. For managers who want visibility into what their reps are saying and how calls are going in real time, the coaching layer is genuinely useful.
                    </p>
                    <p>
                      Dialpad is also a complete communications platform. Voice, SMS, team messaging, video meetings, and contact center tools all work from one product. Teams that want to consolidate away from separate tools for phone, Slack, and Zoom can do that with Dialpad. That consolidation has real operational value: fewer vendors, one bill, one admin panel.
                    </p>
                    <p>
                      The compliance story is also strong. SOC 2 Type 2 certification, ISO 27001, 27017, and 27018, and HIPAA with BAA available. The ISO certifications in particular go beyond what most AI voice platforms offer and matter for enterprise procurement processes. For legal firms, Dialpad's native Clio integration with call logging and transcription directly in the matter file is a well-built solution.
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Mic, label: "DialpadGPT coaching", desc: "Trained on 6B+ business call minutes, real-time suggestions" },
                  { icon: MessageSquare, label: "Full communications platform", desc: "Voice, chat, SMS, video from one product" },
                  { icon: Shield, label: "ISO 27001/27017/27018", desc: "Enterprise certifications beyond SOC 2 and HIPAA" },
                  { icon: Building2, label: "Native Clio integration", desc: "Call logging and transcripts directly in legal matter files" },
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

        {/* Callengo advantages */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">Why Callengo</span>
              <h2 className="text-3xl font-semibold max-w-2xl">Where Callengo does something Dialpad cannot</h2>
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

        <InlineCTA text="Autonomous outbound agents for lead qualification, appointments, and data cleanup." cta="Start your free trial" />

        {/* Use cases */}
        <section className="section relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">Use cases</span>
              <h2 className="text-3xl font-semibold mb-3">When to use each platform</h2>
              <p className="text-lg text-foreground-secondary max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
                These products are often complementary. Understanding where each one fits helps you decide which to use for which part of your workflow.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: PhoneCall,
                  useCase: "Outbound lead qualification without a rep",
                  winner: "callengo",
                  analysis: "Callengo's Lead Qualification Agent calls leads, runs a BANT conversation, scores the outcome, and books meetings for qualified contacts. No rep dials the number or handles the call. Dialpad's Power Dialer requires a rep to take every call and uses AI to assist them during the conversation.",
                },
                {
                  icon: CalendarCheck,
                  useCase: "Appointment confirmation and no-show reduction",
                  winner: "callengo",
                  analysis: "Callengo calls patients or clients before their appointments, handles live reschedules, retries no-answers automatically, and updates your calendar. Dialpad is a communications tool; there is no pre-built workflow for autonomous appointment confirmation in its product.",
                },
                {
                  icon: Database,
                  useCase: "CRM data validation",
                  winner: "callengo",
                  analysis: "Callengo's Data Validation Agent verifies contact details at scale and writes verified or flagged status directly back to your CRM. Dialpad does not have an autonomous data verification product.",
                },
                {
                  icon: Mic,
                  useCase: "Coaching reps during live sales calls",
                  winner: "dialpad",
                  analysis: "Dialpad's real-time coaching, trained on 6B+ business conversations, gives reps live guidance during calls. This is Dialpad's core strength and one Callengo does not address. If your team makes complex discovery calls that require human judgment and benefit from real-time coaching, Dialpad is the right tool.",
                },
                {
                  icon: MessageSquare,
                  useCase: "Replacing a business phone system",
                  winner: "dialpad",
                  analysis: "Dialpad is a complete cloud phone system with internal chat, SMS, video, and contact center tools. Callengo is not a phone system and is not designed for internal team communications. If you need to replace a PBX or consolidate communications tools, Dialpad serves that purpose and Callengo does not.",
                },
                {
                  icon: Users,
                  useCase: "Using both tools together",
                  winner: "both",
                  analysis: "Many teams use Dialpad for their rep-assisted outbound and inbound communications while using Callengo for autonomous outbound campaigns. Reps use Dialpad for complex prospecting calls that require human judgment. Callengo handles confirmation calls, follow-up qualification, and database cleanup automatically. The two products serve different parts of the outbound workflow.",
                },
              ].map((uc, index) => {
                const Icon = uc.icon;
                return (
                  <motion.div key={uc.useCase} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.07 }} className="bg-white rounded-2xl border border-border p-7 relative overflow-hidden">
                    <div className={`absolute top-0 left-0 w-full h-1 ${uc.winner === "callengo" ? "bg-gradient-to-r from-electric to-electric/30" : uc.winner === "both" ? "bg-gradient-to-r from-electric/50 via-accent/40 to-electric/30" : "bg-gradient-to-r from-foreground-tertiary/40 to-transparent"}`} />
                    <div className="w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-electric" />
                    </div>
                    <h3 className="font-semibold text-sm mb-2">{uc.useCase}</h3>
                    <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4 ${uc.winner === "callengo" ? "bg-electric/10 text-electric" : uc.winner === "both" ? "bg-accent/10 text-accent" : "bg-foreground-tertiary/10 text-foreground-secondary"}`}>
                      {uc.winner === "callengo" ? "Callengo recommended" : uc.winner === "both" ? "Use both together" : "Dialpad preferred"}
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
                  q: "Does Dialpad make autonomous outbound calls without a human?",
                  a: "Dialpad's standard Power Dialer requires a human rep to handle each conversation. The AI assists during the call with transcription and coaching, but the rep is on every call. Dialpad announced an Agentic Power Dialer in October 2025 for autonomous outreach, but it targets contact center use cases rather than outbound lead qualification or appointment confirmation campaigns.",
                },
                {
                  q: "How does Dialpad pricing compare to Callengo for an outbound team?",
                  a: "Dialpad charges per user. A 10-person team on Connect Pro pays $250 per month at annual rates, or $350 on monthly billing. Callengo's Business plan at $299 per month covers unlimited users running autonomous outbound calls within 1,200 included minutes. For teams running repetitive outbound tasks, Callengo's per-minute model eliminates the per-seat accumulation.",
                },
                {
                  q: "Can Callengo replace Dialpad entirely?",
                  a: "No. Callengo handles autonomous outbound campaigns. It does not replace a business phone system for rep-to-rep calls, team messaging, inbound support lines, or video meetings. If your team needs a phone system for all their daily communications, Dialpad serves that purpose. Callengo handles the outbound automation layer.",
                },
                {
                  q: "What CRM integrations does Dialpad have?",
                  a: "Dialpad integrates natively with Salesforce, HubSpot, Zoho CRM, and Clio. Pipedrive requires Zapier. Callengo integrates natively with HubSpot, Salesforce, Pipedrive, Zoho CRM, Microsoft Dynamics 365, and Clio, with automatic CRM writes after each outbound call.",
                },
                {
                  q: "Is Dialpad HIPAA compliant?",
                  a: "Yes. Dialpad offers HIPAA compliance with a BAA available. It also holds SOC 2 Type 2 and ISO 27001, 27017, and 27018 certifications. Callengo is also HIPAA compliant. Both platforms are suitable for healthcare use cases.",
                },
                {
                  q: "Do teams use Callengo and Dialpad together?",
                  a: "Yes. A common setup is to use Dialpad for rep-assisted complex calls and inbound communications while using Callengo for autonomous outbound campaigns. Reps handle discovery calls and negotiations in Dialpad. Callengo handles appointment confirmation, lead qualification at the top of the funnel, and CRM data verification.",
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
                <h2 className="text-4xl font-semibold text-white mb-5">Ready to automate your outbound calls?</h2>
                <p className="text-xl text-white/70 mb-10" style={{ fontFamily: "var(--font-body)" }}>
                  Start with 15 free minutes. No credit card, no per-seat fees, no reps required for qualifying, confirming, or verifying.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://app.callengo.com/auth/signup" onClick={() => trackFreeTrialClick("compare_dialpad")} className="inline-flex items-center justify-center gap-2 bg-white text-deep-indigo hover:bg-white/90 px-8 py-4 rounded-xl font-semibold transition-colors">
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
