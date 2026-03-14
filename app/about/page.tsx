"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ArrowRight,
  Target,
  Eye,
  Lightbulb,
  Shield,
  TrendingUp,
  Users,
  Zap,
  CheckCircle2,
  Phone,
  Database,
  Calendar,
  BarChart3,
} from "lucide-react";
import AnimatedBlobs from "../components/AnimatedBlobs";

/* ─── Quality Framework Pillars ─── */
const qualityPillars = [
  {
    title: "Customer Focus",
    description:
      "Every feature, every call script, every integration is designed starting from the customer's real pain points. We listen first, then build.",
    icon: Target,
  },
  {
    title: "Continuous Improvement",
    description:
      "We measure, analyze, and iterate relentlessly. Every call generates data that makes the next one better. Kaizen is not a buzzword; it's how we ship.",
    icon: TrendingUp,
  },
  {
    title: "Process Excellence",
    description:
      "Reliable outcomes come from reliable processes. Our AI agents follow structured, tested workflows, not guesswork. Consistency at scale.",
    icon: Zap,
  },
  {
    title: "Evidence-Based Decisions",
    description:
      "We don't assume, we verify. Call analytics, conversion rates, and quality scores drive every product decision and every campaign optimization.",
    icon: BarChart3,
  },
];

/* ─── Core Values ─── */
const values = [
  {
    title: "Transparency",
    description:
      "We tell you exactly what our AI can and can't do. No inflated metrics, no hidden fees, no black boxes.",
    icon: Eye,
  },
  {
    title: "Impact Over Features",
    description:
      "We measure success by the hours you save and the revenue you recover, not by the features we ship.",
    icon: Target,
  },
  {
    title: "Simplicity by Design",
    description:
      "Complex technology should feel simple to use. Setup in minutes, results in hours, no technical expertise required.",
    icon: Lightbulb,
  },
  {
    title: "Trust & Compliance",
    description:
      "Every call respects DNC lists, TCPA regulations, and your brand reputation. We handle compliance so you don't have to worry.",
    icon: Shield,
  },
];

/* ─── What We Solve ─── */
const problems = [
  {
    pain: "No-shows drain revenue",
    solution: "AI agents confirm appointments 24-48h ahead, reschedule on the spot, and retry no-shows automatically.",
    icon: Calendar,
    metric: "Up to 60% fewer no-shows",
  },
  {
    pain: "CRM data decays fast",
    solution: "Contacts change jobs, numbers, and emails. Our Data Validation Agent calls to verify and update records at scale.",
    icon: Database,
    metric: "Clean data, every quarter",
  },
  {
    pain: "Reps waste time on cold leads",
    solution: "The Lead Qualification Agent scores leads using BANT before your sales team ever picks up the phone.",
    icon: Phone,
    metric: "Only talk to qualified prospects",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24 relative overflow-hidden">
        <AnimatedBlobs />

        {/* ─── Hero Section ─── */}
        <section className="section relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-6">
                  About Callengo
                </span>
                <h1 className="text-display-sm mb-6">
                  Your team should close deals,
                  <br />
                  <span className="gradient-text">not chase phone calls.</span>
                </h1>
                <p
                  className="text-xl text-foreground-secondary leading-relaxed max-w-2xl"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Callengo is an AI-powered phone automation platform that handles
                  the repetitive calls your team shouldn&apos;t be making: verifying data,
                  confirming appointments, and qualifying leads. Your people can
                  focus on what actually drives revenue.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── The Problem We Solve ─── */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mb-16"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">
                The Problem
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Businesses lose thousands every month to calls nobody wants to make
              </h2>
              <p
                className="text-lg text-foreground-secondary leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Sales teams spend hours on repetitive outreach. Clinics lose revenue
                to patients who forget appointments. Marketing wastes budgets on
                outdated contact databases. These are solvable problems, and the
                right automation makes all the difference.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {problems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.pain}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-2xl border border-border p-8 relative overflow-hidden group hover:border-electric/20 transition-colors"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-electric/[0.03] rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-electric/[0.06] transition-colors" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6 text-electric" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{item.pain}</h3>
                      <p
                        className="text-foreground-secondary text-sm leading-relaxed mb-4"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {item.solution}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {item.metric}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── Mission & Vision ─── */}
        <section className="section relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl border border-border bg-white p-10"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric via-electric/60 to-transparent" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-electric/[0.04] rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-electric" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                  <p
                    className="text-foreground-secondary text-base leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    To free businesses from repetitive phone calls that drain time
                    and revenue, replacing them with intelligent AI agents that
                    verify data, confirm appointments, and qualify leads.
                    Automatically, accurately, and at scale.
                  </p>
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl border border-border bg-white p-10"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent/60 to-transparent" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/[0.04] rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <Eye className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                  <p
                    className="text-foreground-secondary text-base leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    A world where every business, regardless of size, has access
                    to enterprise-grade phone automation. Where no revenue is lost
                    to a missed call, outdated record, or unqualified lead. Where
                    human teams focus exclusively on high-value work.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Quality Framework ─── */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mb-16"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-electric/20 text-electric bg-electric/5 mb-5">
                Our Framework
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Built on total quality fundamentals
              </h2>
              <p
                className="text-lg text-foreground-secondary leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Callengo is built around the principles of Total Quality Management:
                customer focus, continuous improvement, process excellence, and
                evidence-based decision making. Inspired by the quality-first mindset
                championed at Lanzadera, we believe that sustainable growth comes from
                doing things right, not just fast.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {qualityPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-2xl border border-border p-8 relative overflow-hidden"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-electric" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-electric/60 mb-1" style={{ fontFamily: "var(--font-body)" }}>
                          0{index + 1}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{pillar.title}</h3>
                        <p
                          className="text-foreground-secondary text-sm leading-relaxed"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── Values ─── */}
        <section className="section relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                The principles that guide us
              </h2>
              <p
                className="text-lg text-foreground-secondary"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Simple values, applied consistently.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="bg-white rounded-2xl border border-border p-6 text-center hover:border-electric/20 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-electric" />
                    </div>
                    <h3 className="text-base font-semibold mb-2">{value.title}</h3>
                    <p
                      className="text-foreground-secondary text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── Founder & Team ─── */}
        <section className="section relative z-10 bg-background-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Founder Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-2xl border border-border p-10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-deep-indigo via-electric to-accent" />

                  {/* Founder avatar */}
                  <div className="w-24 h-24 rounded-2xl overflow-hidden mb-6">
                    <Image
                      src="/chris-picture.png"
                      alt="Chris Fuentes — CEO & Founder of Callengo"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-2xl font-semibold mb-1">Chris Fuentes</h3>
                  <p className="text-electric font-medium text-sm mb-4" style={{ fontFamily: "var(--font-body)" }}>
                    CEO & Founder
                  </p>

                  <p
                    className="text-foreground-secondary leading-relaxed mb-6"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Christopher founded Callengo with a clear conviction: businesses
                    shouldn&apos;t lose money because of calls nobody has time to make.
                    With a multidisciplinary background spanning technology, business
                    operations, and quality management, he built Callengo to bridge the
                    gap between enterprise-grade automation and the teams that need it
                    most.
                  </p>

                  <a
                    href="https://www.linkedin.com/in/cristopher-fuentes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-electric hover:text-electric/80 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                    </svg>
                    Connect on LinkedIn
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>

              {/* Team description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-electric" />
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                  A team of multidisciplinary collaborators
                </h2>
                <p
                  className="text-lg text-foreground-secondary leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Callengo isn&apos;t built by a single discipline. We&apos;re a
                  collaborative team of engineers, product designers, AI specialists,
                  and business strategists, each bringing a different lens to the
                  same problem: how to make outbound calling intelligent, reliable,
                  and effortless.
                </p>
                <p
                  className="text-lg text-foreground-secondary leading-relaxed mb-8"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  We work with a flat, agile structure where ideas move fast and
                  quality is everyone&apos;s responsibility. Whether it&apos;s voice AI
                  optimization, CRM integration architecture, or call script
                  design, we bring the same rigor and attention to detail.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "AI & Voice Engineering", desc: "Natural language understanding, voice synthesis, conversation design" },
                    { label: "Product & UX", desc: "Intuitive interfaces, seamless workflows, user-first design" },
                    { label: "Integrations", desc: "Deep CRM connections, calendar sync, webhook automation" },
                    { label: "Quality & Compliance", desc: "Call quality scoring, regulatory compliance, data security" },
                  ].map((area) => (
                    <div
                      key={area.label}
                      className="bg-white rounded-xl border border-border p-4"
                    >
                      <h4 className="text-sm font-semibold mb-1">{area.label}</h4>
                      <p
                        className="text-xs text-foreground-tertiary leading-relaxed"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {area.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── The Callengo Idea ─── */}
        <section className="section relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Why Callengo exists
              </h2>
              <p
                className="text-lg text-foreground-secondary leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Every business with a contact list faces the same problem: there are
                calls that need to happen (confirmations, verifications, follow-ups)
                but nobody has the time or bandwidth to make them consistently. The
                result? No-shows pile up, CRM data decays, and sales teams waste
                hours on leads that were never going to convert.
              </p>
              <p
                className="text-lg text-foreground-secondary leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Callengo exists because we believe AI voice agents can solve this at
                scale. Not by replacing human connection, but by handling the
                repetitive calls that don&apos;t require it. Three purpose-built agents,
                deep CRM integration, and a setup flow that takes minutes instead of
                weeks.
              </p>
              <p
                className="text-lg text-foreground-secondary leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                We&apos;re not building a generic voice bot platform. We&apos;re building
                specialized AI agents that do three things extraordinarily well:
                validate data, confirm appointments, and qualify leads. Focused
                scope, exceptional results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── CTA Section ─── */}
        <section className="section relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl gradient-bg p-12 md:p-20"
            >
              {/* Subtle internal lava lamp */}
              <div className="absolute inset-0 overflow-hidden opacity-90">
                <div className="absolute -top-1/4 right-[-10%] w-3/5 h-[120%] bg-gradient-to-br from-white/20 via-[#8B96C8]/15 to-white/10 rounded-full blur-3xl animate-[aboutCta1_40s_ease-in-out_infinite]" />
                <div className="absolute -bottom-1/3 left-[-10%] w-1/2 h-full bg-gradient-to-br from-[#8B96C8]/20 via-white/12 to-[#4F5FE8]/10 rounded-full blur-3xl animate-[aboutCta2_50s_ease-in-out_infinite]" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#3347D4]/40 via-[#3347D4]/15 to-transparent" />

              {/* Content */}
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
                  Ready to stop losing
                  <br />
                  revenue to missed calls?
                </h2>
                <p
                  className="text-xl text-white/70 mb-10 max-w-xl"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Start with 15 free minutes. No credit card, no commitment.
                  See what AI phone agents can do for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://app.callengo.com/auth/signup"
                    className="btn btn-cta-white bg-white text-primary hover:bg-white/90 px-8 py-4 font-semibold rounded-xl"
                  >
                    Get started free
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:sales@callengo.com"
                    className="btn border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl"
                  >
                    Talk to sales
                  </a>
                </div>
              </div>
              <style jsx>{`
                @keyframes aboutCta1 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  33% { transform: translate(-30px, 25px) scale(1.06); }
                  66% { transform: translate(20px, -20px) scale(0.95); }
                }
                @keyframes aboutCta2 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  40% { transform: translate(30px, -25px) scale(1.08); }
                  70% { transform: translate(-20px, 30px) scale(0.94); }
                }
              `}</style>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
