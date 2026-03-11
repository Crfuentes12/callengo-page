"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedBlobs from "../components/AnimatedBlobs";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { trackFreeTrialClick } from "@/app/lib/analytics";

const comparisons = [
  {
    slug: "bland-ai",
    name: "Bland AI",
    logo: "/bland.png",
    category: "AI Voice Infrastructure",
    tagline: "Developer API vs. ready-to-deploy business agents",
    description:
      "Bland AI is a voice infrastructure layer built for developers. Callengo is a complete outbound automation platform built for sales, ops, and clinical teams. Compare pricing, setup complexity, and real-world outcomes.",
    highlights: [
      "Callengo needs zero developers to deploy",
      "No surprise per-call or per-SMS fees",
      "3 pre-built agents vs. build-from-scratch",
    ],
  },
  {
    slug: "vapi",
    name: "Vapi",
    logo: "/vapi.svg",
    category: "AI Voice Infrastructure",
    tagline: "API-first voice stack vs. vertical-focused automation platform",
    description:
      "Vapi offers a low-level voice API for developers who want to build custom call flows. Callengo packages that complexity into purpose-built agents that work out of the box for lead qualification, appointment confirmation, and data validation.",
    highlights: [
      "No code required with Callengo",
      "Predictable monthly pricing",
      "Full CRM sync included",
    ],
  },
  {
    slug: "retell-ai",
    name: "Retell AI",
    logo: "/retell.svg",
    category: "AI Voice Infrastructure",
    tagline: "Low-latency voice SDK vs. turnkey outbound call platform",
    description:
      "Retell AI focuses on ultra-low-latency voice for developers building real-time applications. Callengo focuses on outbound business outcomes: qualified leads, confirmed appointments, and clean CRM data, without writing a single line of code.",
    highlights: [
      "Business-ready templates on day one",
      "Follow-up automation built in",
      "Native HubSpot, Salesforce, Pipedrive sync",
    ],
  },
  {
    slug: "synthflow",
    name: "Synthflow",
    logo: "/synthflow.svg",
    category: "No-Code Voice AI",
    tagline: "General-purpose voice builder vs. specialized outbound agents",
    description:
      "Synthflow offers a drag-and-drop voice agent builder for inbound and outbound calls. Callengo goes deeper with three vertical agents, each with tested scripts, smart follow-up logic, and deep CRM integration built in from the start.",
    highlights: [
      "Vertical-specific call logic out of the box",
      "Smart voicemail and retry rules included",
      "Calendar and scheduling sync built in",
    ],
  },
  {
    slug: "dialpad",
    name: "Dialpad",
    logo: "/dialpad.svg",
    category: "Cloud Phone System",
    tagline: "AI-assisted human calls vs. autonomous outbound execution",
    description:
      "Dialpad is a cloud phone system that helps human reps communicate with real-time transcription and coaching. Callengo removes the human from repetitive outbound workflows entirely, running lead qualification, appointment confirmation, and data validation without a rep on the call.",
    highlights: [
      "No per-seat pricing for outbound campaigns",
      "Full call lifecycle automation without a rep",
      "Integrated follow-up and CRM sync",
    ],
  },
];

const faqs = [
  {
    q: "Why compare Callengo with these platforms?",
    a: "These are the tools that sales ops managers, clinic administrators, and business owners most often evaluate alongside Callengo. Some are raw infrastructure APIs built for developers. Others are generic dialers or cloud phone systems. Callengo sits in a different category: a no-code outbound automation platform with three purpose-built agents, deep CRM integration, and all the follow-up logic included. These comparisons help you understand what that difference actually means in practice.",
  },
  {
    q: "Is Callengo just a reseller of one of these platforms?",
    a: "No. Callengo is an independent SaaS platform with its own product, infrastructure, pricing, and support. It is not a white-label or reseller of any of the platforms listed on this page.",
  },
  {
    q: "Which platform is best for appointment confirmation?",
    a: "Callengo has a dedicated Appointment Confirmation Agent with built-in logic for confirmations, reschedules, no-show retry, and calendar sync across Google Calendar, Outlook, and SimplyBook.me. Most of the platforms listed here either require custom development to build this workflow or do not support it at all.",
  },
  {
    q: "What makes Callengo different from a voice infrastructure API?",
    a: "Voice infrastructure APIs like Bland AI and Vapi give developers the building blocks to create voice applications from scratch. Callengo gives business teams a finished product: three pre-built agents that are ready to run campaigns on day one, with CRM integrations, follow-up automation, voicemail handling, and calendar sync included. No code required.",
  },
  {
    q: "Can I switch to Callengo from one of these platforms?",
    a: "Yes. If you are using any of the platforms listed here and want to migrate to Callengo, the process typically involves connecting your CRM via OAuth, importing or syncing your contact list, selecting the relevant agent, and launching your first campaign. The Callengo team helps Business and Teams plan customers through onboarding.",
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
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-6">
                Comparisons
              </span>
              <h1 className="text-display-sm mb-5">
                How does Callengo compare
                <br />
                <span className="gradient-text">to the alternatives?</span>
              </h1>
              <p
                className="text-xl text-foreground-secondary leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                The AI voice automation market is crowded with developer APIs, generic dialers, and conversation platforms.
                Callengo is different: three purpose-built agents for lead qualification, appointment confirmation, and data validation.
                No coding required, full CRM integration included.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Comparison cards grid */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-6xl mx-auto px-6">
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
                    className="block bg-white rounded-2xl border border-border p-7 hover:border-electric/30 hover:shadow-lg transition-all group relative overflow-hidden h-full"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-electric/[0.03] rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-electric/[0.06] transition-colors" />

                    <div className="relative z-10">
                      {/* Logo + name row */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-background-secondary border border-border flex items-center justify-center overflow-hidden shrink-0">
                            <img
                              src={comp.logo}
                              alt={comp.name}
                              className="w-7 h-7 object-contain"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = "none";
                              }}
                            />
                          </div>
                          <div>
                            <p className="text-xs font-medium text-foreground-tertiary uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>
                              Callengo vs.
                            </p>
                            <h2 className="text-xl font-bold">{comp.name}</h2>
                          </div>
                        </div>
                        <span className="text-xs text-foreground-tertiary bg-background-secondary px-2.5 py-1 rounded-full border border-border shrink-0" style={{ fontFamily: "var(--font-body)" }}>
                          {comp.category}
                        </span>
                      </div>

                      <p className="text-sm font-medium text-electric mb-3" style={{ fontFamily: "var(--font-body)" }}>
                        {comp.tagline}
                      </p>

                      <p
                        className="text-foreground-secondary text-sm leading-relaxed mb-5"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {comp.description}
                      </p>

                      <ul className="space-y-2 mb-5">
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

        {/* FAQ */}
        <section className="section relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">
                FAQ
              </span>
              <h2 className="text-3xl font-semibold">Common questions about comparing AI calling platforms</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-5">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-white rounded-2xl border border-border p-7"
                >
                  <h3 className="font-semibold text-base mb-3">{faq.q}</h3>
                  <p className="text-foreground-secondary text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-6xl mx-auto px-6">
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
                    onClick={() => trackFreeTrialClick("compare_index")}
                    className="bg-white text-deep-indigo hover:bg-white/90 px-8 py-4 font-semibold rounded-xl inline-flex items-center justify-center gap-2 transition-colors"
                  >
                    Start free trial
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:sales@callengo.com"
                    className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl inline-flex items-center justify-center gap-2 transition-colors"
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
