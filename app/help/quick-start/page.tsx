"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  ArrowRight,
  Check,
  Upload,
  Settings,
  Play,
  BarChart3,
  Phone,
  Users,
  Calendar,
  Database,
  Zap,
  Clock,
  ChevronRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create Your Account",
    description:
      "Sign up with your email and verify your account. You'll get 15 free minutes to test the platform with no credit card required.",
    icon: Users,
    details: [
      "Enter your business email and create a password",
      "Verify your email address",
      "Complete your company profile",
      "Your website will be automatically analyzed to customize your agents",
    ],
  },
  {
    number: "02",
    title: "Choose Your Agent",
    description:
      "Select the AI agent that matches your primary business need. Each agent is specialized for a specific use case.",
    icon: Phone,
    details: [
      "Data Validation: Clean and verify your contact database",
      "Appointment Confirmation: Reduce no-shows by up to 60%",
      "Lead Qualification: Score and rank leads so your team focuses on buyers",
    ],
  },
  {
    number: "03",
    title: "Import Your Contacts",
    description:
      "Upload your contact list in CSV, Excel, or JSON format. Our system automatically normalizes phone numbers and removes duplicates.",
    icon: Upload,
    details: [
      "Supported formats: CSV, XLSX, XLS, JSON, XML, TXT",
      "Automatic column detection and mapping",
      "Phone number normalization for any country",
      "Duplicate detection and handling",
    ],
  },
  {
    number: "04",
    title: "Configure Your Campaign",
    description:
      "Set your preferences for voice, call duration, working hours, and follow-up rules. Customize the script if needed.",
    icon: Settings,
    details: [
      "Choose from 77+ professional AI voices",
      "Set maximum call duration (3-30 minutes)",
      "Define working hours and timezone",
      "Enable voicemail handling and automatic follow-ups",
    ],
  },
  {
    number: "05",
    title: "Launch Your Campaign",
    description:
      "Review your settings and start calling. Monitor progress in real-time from your dashboard.",
    icon: Play,
    details: [
      "Preview a test call before launching",
      "Start with a small batch to validate results",
      "Monitor calls in real-time",
      "Pause or stop campaigns at any time",
    ],
  },
  {
    number: "06",
    title: "Review Results & Analytics",
    description:
      "Access detailed analytics, transcriptions, and AI-extracted data for each call. Export results to your CRM or spreadsheet.",
    icon: BarChart3,
    details: [
      "Full call transcriptions and recordings",
      "AI-analyzed data extraction",
      "Contact status updates",
      "Export to CSV or integrate with your tools",
    ],
  },
];

const agents = [
  {
    title: "Data Validation Agent",
    slug: "data-validation",
    description: "Clean your database, verify contacts, update outdated information",
    bestFor: "Marketing teams, sales ops, CRM managers",
    outcomes: [
      "95%+ data accuracy",
      "80% cost reduction vs manual verification",
      "100x faster than calling manually",
    ],
    icon: Database,
  },
  {
    title: "Appointment Confirmation Agent",
    slug: "appointment-confirmation",
    description: "Confirm appointments, handle rescheduling, reduce no-shows",
    bestFor: "Healthcare, salons, professional services, home services",
    outcomes: [
      "60% reduction in no-shows",
      "85%+ confirmation rate",
      "Zero staff time on reminder calls",
    ],
    icon: Calendar,
  },
  {
    title: "Lead Qualification Agent",
    slug: "lead-qualification",
    description: "Score and rank leads so your team only calls buyers, not browsers",
    bestFor: "Sales teams, marketing agencies, B2B companies",
    outcomes: [
      "50% less time wasted on bad leads",
      "3x more qualified leads for sales",
      "Hot leads ranked and prioritized",
    ],
    icon: Zap,
  },
];

const tips = [
  {
    title: "Start Small",
    description:
      "Begin with a batch of 10-20 contacts to validate your agent configuration and script before scaling up.",
  },
  {
    title: "Test Different Voices",
    description:
      "Try 2-3 different AI voices to find the one that best represents your brand and resonates with your audience.",
  },
  {
    title: "Optimize Your Script",
    description:
      "Review call transcriptions to identify common objections or questions, then refine your agent's responses.",
  },
  {
    title: "Schedule Strategically",
    description:
      "Set calling hours based on when your contacts are most likely to answer. Business hours work best for B2B.",
  },
  {
    title: "Use Follow-ups",
    description:
      "Enable automatic follow-ups for no-answers and voicemails. Most contacts answer on the second or third attempt.",
  },
  {
    title: "Monitor and Iterate",
    description:
      "Check your analytics regularly. Look for patterns in successful calls and apply those learnings to improve results.",
  },
];

export default function QuickStartPage() {
  return (
    <>
      <Header />
      <main className="pt-24 relative overflow-hidden">

        {/* Hero Section */}
        <section className="gradient-bg text-white py-16 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/help"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                Back to Help Center
              </Link>
              <h1 className="text-display-sm mb-6 text-white">Quick Start Guide</h1>
              <p className="text-xl text-white/80 max-w-2xl">
                Get up and running with Callengo in minutes. This guide walks you through
                everything you need to launch your first AI-powered calling campaign.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background pointer-events-none" />
        </section>

        {/* Overview */}
        <section className="section relative z-10">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-semibold mb-6 text-foreground">What is Callengo?</h2>
              <p className="text-lg text-foreground-secondary mb-6 leading-relaxed">
                Callengo is an AI-powered phone calling platform that automates repetitive
                business calls at scale. Whether you need to verify contact data, confirm
                appointments, or qualify leads, Callengo handles it 24/7 with hyper-realistic
                AI voices that sound like real people.
              </p>
              <p className="text-lg text-foreground-secondary mb-8 leading-relaxed">
                Unlike traditional call centers or manual calling, Callengo is:
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="rounded-2xl p-6" style={{ background: "rgba(244, 245, 250, 0.8)", backdropFilter: "blur(10px)", border: "1px solid rgba(221, 224, 238, 0.5)" }}>
                  <Clock className="w-8 h-8 text-electric mb-4" />
                  <h3 className="font-semibold mb-2 text-foreground">Always Available</h3>
                  <p className="text-foreground-secondary text-sm">
                    Works 24/7/365, never takes breaks, never gets tired
                  </p>
                </div>
                <div className="rounded-2xl p-6" style={{ background: "rgba(244, 245, 250, 0.8)", backdropFilter: "blur(10px)", border: "1px solid rgba(221, 224, 238, 0.5)" }}>
                  <Zap className="w-8 h-8 text-electric mb-4" />
                  <h3 className="font-semibold mb-2 text-foreground">Instantly Scalable</h3>
                  <p className="text-foreground-secondary text-sm">
                    Go from 10 calls to 10,000 without hiring anyone
                  </p>
                </div>
                <div className="rounded-2xl p-6" style={{ background: "rgba(244, 245, 250, 0.8)", backdropFilter: "blur(10px)", border: "1px solid rgba(221, 224, 238, 0.5)" }}>
                  <Check className="w-8 h-8 text-electric mb-4" />
                  <h3 className="font-semibold mb-2 text-foreground">100% Consistent</h3>
                  <p className="text-foreground-secondary text-sm">
                    Same perfect script delivery every single time
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Step by Step */}
        <section className="section relative z-10" style={{ background: "rgba(244, 245, 250, 0.6)" }}>
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-semibold mb-4 text-foreground">Step-by-Step Setup</h2>
              <p className="text-lg text-foreground-secondary">
                Follow these steps to launch your first campaign in under 10 minutes.
              </p>
            </motion.div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl p-8"
                  style={{ background: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(10px)", border: "1px solid rgba(221, 224, 238, 0.5)" }}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-bold text-foreground-tertiary">
                          STEP {step.number}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                      <p className="text-foreground-secondary mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-foreground-secondary"
                          >
                            <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Choose Your Agent */}
        <section className="section relative z-10">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-semibold mb-4 text-foreground">Choose Your Agent</h2>
              <p className="text-lg text-foreground-secondary">
                Each agent is specialized for a specific use case. Choose the one that
                matches your primary need.
              </p>
            </motion.div>

            <div className="space-y-6">
              {agents.map((agent, index) => (
                <motion.div
                  key={agent.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/agents/${agent.slug}`}
                    className="block rounded-2xl p-8 hover:shadow-lg transition-all group"
                    style={{ background: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(10px)", border: "1px solid rgba(221, 224, 238, 0.5)" }}
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-colors" style={{ background: "rgba(79, 95, 232, 0.08)" }}>
                          <agent.icon className="w-7 h-7 text-electric" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-electric transition-colors">
                          {agent.title}
                        </h3>
                        <p className="text-foreground-secondary mb-3">{agent.description}</p>
                        <p className="text-sm text-foreground-tertiary mb-4">
                          <span className="font-medium">Best for:</span> {agent.bestFor}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {agent.outcomes.map((outcome, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                            >
                              <Check className="w-3.5 h-3.5" />
                              {outcome}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-foreground-tertiary group-hover:text-foreground-secondary group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pro Tips */}
        <section className="section relative z-10" style={{ background: "rgba(244, 245, 250, 0.6)" }}>
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-semibold mb-4 text-foreground">Pro Tips for Success</h2>
              <p className="text-lg text-foreground-secondary">
                Get the most out of Callengo with these best practices from our
                top-performing customers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {tips.map((tip, index) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl p-6"
                  style={{ background: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(10px)", border: "1px solid rgba(221, 224, 238, 0.5)" }}
                >
                  <h3 className="font-semibold mb-2 text-foreground">{tip.title}</h3>
                  <p className="text-foreground-secondary text-sm">{tip.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section relative z-10">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="gradient-bg rounded-3xl p-12 text-center text-white relative overflow-hidden"
            >
              <h2 className="text-3xl font-semibold mb-4 text-white">Ready to get started?</h2>
              <p className="text-white/80 mb-8 max-w-lg mx-auto">
                Create your free account and get 15 minutes of calling time to test the
                platform. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://app.callengo.com/auth/signup"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-electric font-semibold rounded-full hover:bg-white/90 transition-colors"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
                >
                  Read Full Documentation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
