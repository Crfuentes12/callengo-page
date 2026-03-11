"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedBlobs from "../components/AnimatedBlobs";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";

const comparisons = [
  {
    slug: "bland-ai",
    name: "Bland AI",
    category: "AI Voice Infrastructure",
    tagline: "Developer-first voice API vs. ready-to-deploy business agents",
    description:
      "Bland AI is a raw voice infrastructure layer built for developers. Callengo is a complete outbound automation platform built for sales, ops, and clinical teams. See how the two approaches compare on pricing, setup complexity, and real-world outcomes.",
    highlights: [
      "Callengo needs 0 developers to deploy",
      "No surprise per-call or per-SMS fees",
      "3 pre-built agents vs. build-from-scratch",
    ],
    badge: "Most searched",
    badgeColor: "electric",
  },
  {
    slug: "vapi",
    name: "Vapi",
    category: "AI Voice Infrastructure",
    tagline: "API-first voice stack vs. vertical-focused automation platform",
    description:
      "Vapi offers a low-level voice API for developers who want to build custom call flows. Callengo packages that complexity into purpose-built agents that work out of the box for lead qualification, appointment confirmation, and data validation.",
    highlights: [
      "No code required with Callengo",
      "Predictable monthly pricing",
      "Full CRM sync included",
    ],
    badge: null,
    badgeColor: null,
  },
  {
    slug: "retell-ai",
    name: "Retell AI",
    category: "AI Voice Infrastructure",
    tagline: "Low-latency voice SDK vs. turnkey outbound call platform",
    description:
      "Retell AI focuses on ultra-low-latency voice for developers building real-time applications. Callengo focuses on outbound business outcomes — qualified leads, confirmed appointments, and clean CRM data — without writing a single line of code.",
    highlights: [
      "Business-ready templates on day one",
      "Follow-up automation built in",
      "Native HubSpot, Salesforce, Pipedrive sync",
    ],
    badge: null,
    badgeColor: null,
  },
  {
    slug: "synthflow",
    name: "Synthflow",
    category: "No-Code Voice AI",
    tagline: "Generic no-code voice builder vs. specialized outbound agents",
    description:
      "Synthflow offers a drag-and-drop voice agent builder for general use cases. Callengo goes deeper with pre-optimized agents for three specific workflows — each with proven scripts, smart follow-up logic, and deep CRM integration built in.",
    highlights: [
      "Vertical-specific call logic",
      "Smart voicemail and retry rules",
      "Calendar + scheduling sync",
    ],
    badge: null,
    badgeColor: null,
  },
  {
    slug: "air-ai",
    name: "Air AI",
    category: "Conversational AI Sales",
    tagline: "Long-form conversation AI vs. outcome-focused call automation",
    description:
      "Air AI positions itself around long, human-like conversations designed to replace SDRs entirely. Callengo takes a more surgical approach: structured, goal-oriented calls that complete a specific task — validation, confirmation, or qualification — and write the result directly back to your CRM.",
    highlights: [
      "Structured task-completion agents",
      "Transparent per-minute billing",
      "Results written directly to CRM",
    ],
    badge: null,
    badgeColor: null,
  },
  {
    slug: "thoughtly",
    name: "Thoughtly",
    category: "AI Call Center",
    tagline: "AI call center platform vs. targeted outbound automation",
    description:
      "Thoughtly is designed for inbound and blended call center operations. Callengo is purpose-built for outbound: proactively reaching contacts to qualify leads, confirm appointments, and verify CRM data — with smart follow-up sequences and calendar integration included.",
    highlights: [
      "Built for proactive outbound",
      "No-show retry logic included",
      "BANT-based lead scoring",
    ],
    badge: null,
    badgeColor: null,
  },
  {
    slug: "aircall",
    name: "Aircall",
    category: "Cloud Phone System",
    tagline: "Human-agent cloud phone vs. AI-powered call automation",
    description:
      "Aircall is a cloud phone system that empowers human sales and support teams. Callengo replaces the repetitive, low-value calls those teams are forced to make — confirmation calls, verification calls, qualification calls — freeing reps for conversations that actually require a human.",
    highlights: [
      "No human agents needed for repetitive calls",
      "24/7 availability, no shift coverage",
      "Scales without headcount",
    ],
    badge: null,
    badgeColor: null,
  },
  {
    slug: "dialpad",
    name: "Dialpad AI",
    category: "AI-Powered Cloud Comms",
    tagline: "AI conversation intelligence vs. autonomous outbound execution",
    description:
      "Dialpad AI enhances human agent productivity with real-time transcription and coaching. Callengo removes the human from repetitive outbound workflows entirely, automating the call, the follow-up, the CRM update, and the calendar event from a single campaign setup.",
    highlights: [
      "Full call lifecycle automation",
      "No per-seat pricing for outbound",
      "Integrated follow-up sequences",
    ],
    badge: null,
    badgeColor: null,
  },
  {
    slug: "justcall",
    name: "JustCall",
    category: "AI Sales Dialer",
    tagline: "AI power dialer vs. autonomous AI calling agents",
    description:
      "JustCall provides AI-enhanced power dialers and conversation intelligence for sales teams. Callengo goes a step further: the AI itself makes the calls, conducts the conversation, and logs the outcome — no rep needed for qualifying, confirming, or verifying contacts.",
    highlights: [
      "Fully autonomous call execution",
      "AI conducts the conversation",
      "Outcomes written to CRM automatically",
    ],
    badge: null,
    badgeColor: null,
  },
  {
    slug: "play-ai",
    name: "PlayAI",
    category: "Text-to-Speech & Voice AI",
    tagline: "Voice synthesis platform vs. complete outbound call solution",
    description:
      "PlayAI is a text-to-speech and voice AI platform for building custom voice experiences. Callengo uses advanced voice synthesis as one component of a complete outbound automation solution — combining natural conversation, CRM integration, calendar sync, and multi-step follow-up logic.",
    highlights: [
      "Complete campaign management included",
      "Multi-step follow-up automation",
      "Business outcomes, not just voice quality",
    ],
    badge: null,
    badgeColor: null,
  },
];

export default function ComparePage() {
  return (
    <>
      <Header />
      <main className="pt-24 relative overflow-hidden">
        <AnimatedBlobs />

        {/* Hero */}
        <section className="section relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-6">
                Comparisons
              </span>
              <h1 className="text-display-sm mb-6">
                How does Callengo compare
                <br />
                <span className="gradient-text">to the alternatives?</span>
              </h1>
              <p
                className="text-xl text-foreground-secondary leading-relaxed max-w-2xl"
                style={{ fontFamily: "var(--font-body)" }}
              >
                The AI voice automation market is crowded with developer APIs,
                generic dialers, and conversation platforms. Callengo is
                different: three purpose-built agents for lead qualification,
                appointment confirmation, and data validation — no coding
                required, full CRM integration included. See how we stack up
                against the tools your team is already evaluating.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Comparison cards grid */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-6">
              {comparisons.map((comp, index) => (
                <motion.div
                  key={comp.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link
                    href={`/compare/${comp.slug}`}
                    className="block bg-white rounded-2xl border border-border p-8 hover:border-electric/30 hover:shadow-lg transition-all group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-electric/[0.03] rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-electric/[0.06] transition-colors" />

                    <div className="relative z-10">
                      {comp.badge && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-electric/10 text-electric mb-4">
                          <Zap className="w-3 h-3" />
                          {comp.badge}
                        </span>
                      )}

                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="text-xs font-medium text-foreground-tertiary uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-body)" }}>
                            Callengo vs.
                          </p>
                          <h2 className="text-2xl font-bold">{comp.name}</h2>
                        </div>
                        <span className="text-xs text-foreground-tertiary bg-background-secondary px-2.5 py-1 rounded-full border border-border shrink-0 mt-1" style={{ fontFamily: "var(--font-body)" }}>
                          {comp.category}
                        </span>
                      </div>

                      <p className="text-sm font-medium text-electric mb-3" style={{ fontFamily: "var(--font-body)" }}>
                        {comp.tagline}
                      </p>

                      <p
                        className="text-foreground-secondary text-sm leading-relaxed mb-6"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {comp.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {comp.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-center gap-2 text-sm text-foreground-secondary"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>

                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric group-hover:gap-2.5 transition-all">
                        Read full comparison
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl gradient-bg p-12 md:p-16 text-center"
            >
              <div className="absolute inset-0 overflow-hidden opacity-80">
                <div className="absolute -top-1/4 right-[-10%] w-3/5 h-[120%] bg-gradient-to-br from-white/20 via-[#8B96C8]/15 to-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-1/3 left-[-10%] w-1/2 h-full bg-gradient-to-br from-[#8B96C8]/20 via-white/12 to-[#4F5FE8]/10 rounded-full blur-3xl" />
              </div>
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-5">
                  Not sure which tool is right for you?
                </h2>
                <p
                  className="text-white/70 text-lg mb-8"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Start with 15 free minutes on Callengo and see the difference yourself. No credit card, no commitment, no developers required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://app.callengo.com/auth/signup"
                    className="btn btn-cta-white bg-white text-deep-indigo hover:bg-white/90 px-8 py-4 font-semibold rounded-xl inline-flex items-center gap-2"
                  >
                    Start free trial
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:sales@callengo.com"
                    className="btn border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl inline-flex items-center gap-2"
                  >
                    Talk to sales
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
