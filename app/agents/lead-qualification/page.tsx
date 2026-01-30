"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  UserCheck,
  Check,
  ArrowRight,
  Zap,
  Target,
  DollarSign,
  Clock,
  Users,
  TrendingUp,
  Filter,
  Calendar,
  MessageSquare,
  BarChart3,
  Star,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Response",
    description:
      "New leads get a call within 60 seconds. Beat competitors to the punch.",
  },
  {
    icon: Target,
    title: "BANT Qualification",
    description:
      "Budget, Authority, Need, Timeline - get all the info your sales team needs.",
  },
  {
    icon: Filter,
    title: "Interest Scoring",
    description:
      "AI determines high, medium, or low interest so you prioritize the right leads.",
  },
  {
    icon: Calendar,
    title: "Meeting Scheduling",
    description:
      "Book demos and meetings directly on the call. No back-and-forth needed.",
  },
  {
    icon: MessageSquare,
    title: "Objection Handling",
    description:
      "AI handles common objections naturally and keeps the conversation moving.",
  },
  {
    icon: BarChart3,
    title: "Rich Analytics",
    description:
      "See conversion rates, call quality scores, and detailed lead insights.",
  },
];

const interestLevels = [
  {
    level: "High Interest",
    icon: Star,
    color: "text-accent-dark",
    bg: "bg-accent/10",
    action: "Immediate sales call",
    description: "Ready to buy, budget confirmed, decision-maker on call",
  },
  {
    level: "Medium Interest",
    icon: ThumbsUp,
    color: "text-secondary",
    bg: "bg-secondary/10",
    action: "Nurturing sequence",
    description: "Interested but not urgent, needs more information",
  },
  {
    level: "Low Interest",
    icon: ThumbsDown,
    color: "text-foreground-tertiary",
    bg: "bg-foreground-tertiary/10",
    action: "Email marketing",
    description: "Curious but no immediate need or budget",
  },
];

const metrics = [
  { value: "15h", label: "SDR Time Saved/Week", icon: Clock },
  { value: "3x", label: "Lead Quality Improvement", icon: TrendingUp },
  { value: "<1min", label: "Average Response Time", icon: Zap },
  { value: "40%", label: "Higher Conversion Rate", icon: Target },
];

const dataExtracted = [
  "Company size & revenue",
  "Current solution in use",
  "Budget range",
  "Decision timeline",
  "Key decision makers",
  "Pain points & needs",
  "Objections raised",
  "Meeting preferences",
];

export default function LeadQualificationPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-accent-dark" />
                  </div>
                  <span className="text-sm font-medium text-accent-dark bg-accent/10 px-3 py-1 rounded-full">
                    AI Agent
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Lead Qualification{" "}
                  <span className="gradient-text">Agent</span>
                </h1>

                <p className="text-xl text-foreground-secondary mb-8 leading-relaxed">
                  Let your sales team focus on closing deals, not chasing bad
                  leads. Automatically qualify prospects using BANT, MEDDIC, or
                  your custom criteria.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Link href="/signup" className="btn btn-primary">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="#demo" className="btn btn-secondary">
                    See Demo
                  </Link>
                </div>

                <div className="flex flex-wrap gap-6 text-sm text-foreground-secondary">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent-dark" />
                    15 hrs saved per SDR weekly
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent-dark" />
                    3x better lead quality
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent-dark" />
                    {"<1 min response time"}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-background rounded-3xl border border-border p-8 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-accent-dark flex items-center justify-center">
                      <UserCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Sample Qualification Call</div>
                      <div className="text-sm text-foreground-tertiary">
                        Speed-to-lead example
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div className="bg-accent/5 p-4 rounded-xl">
                      <div className="text-xs text-accent-dark font-medium mb-1">
                        AI Agent
                      </div>
                      <p>
                        "Hi! I'm Ryan from SaaS Solutions. I saw you just
                        downloaded our guide on scaling sales teams. Do you have
                        a quick minute to chat about what you're looking for?"
                      </p>
                    </div>
                    <div className="bg-background-secondary p-4 rounded-xl ml-8">
                      <div className="text-xs text-foreground-tertiary font-medium mb-1">
                        Lead
                      </div>
                      <p>"Sure, we're evaluating tools for our SDR team."</p>
                    </div>
                    <div className="bg-accent/5 p-4 rounded-xl">
                      <div className="text-xs text-accent-dark font-medium mb-1">
                        AI Agent
                      </div>
                      <p>
                        "Great! How many SDRs are on your team currently?"
                      </p>
                    </div>
                    <div className="bg-background-secondary p-4 rounded-xl ml-8">
                      <div className="text-xs text-foreground-tertiary font-medium mb-1">
                        Lead
                      </div>
                      <p>"About 12, and we're planning to double this year."</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="text-xs text-foreground-tertiary mb-2">
                      Qualification Result
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-accent/10 text-accent-dark rounded-full text-xs font-medium">
                        High Interest
                      </span>
                      <span className="text-xs text-foreground-secondary">
                        → Routed to Senior AE
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-16 bg-gradient-to-r from-accent-dark to-accent text-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <metric.icon className="w-8 h-8 mb-4 opacity-70" />
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-white/70">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your SDRs' New{" "}
                <span className="gradient-text">Best Friend</span>
              </h2>
              <p className="text-lg text-foreground-secondary">
                The Lead Qualification Agent handles the repetitive work so your
                team can focus on closing deals.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-accent-dark" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-foreground-secondary text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interest Levels */}
        <section className="section bg-background-secondary">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Smart Lead <span className="gradient-text">Scoring</span>
                </h2>
                <p className="text-lg text-foreground-secondary mb-8">
                  Our AI doesn't just collect information - it analyzes the
                  conversation to determine genuine interest and buying intent.
                </p>

                <div className="space-y-4">
                  {interestLevels.map((level, index) => (
                    <motion.div
                      key={level.level}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-background rounded-xl border border-border p-4"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-10 h-10 rounded-lg ${level.bg} flex items-center justify-center flex-shrink-0`}
                        >
                          <level.icon className={`w-5 h-5 ${level.color}`} />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold">{level.level}</span>
                            <span className="text-xs px-2 py-1 bg-background-secondary rounded-full">
                              {level.action}
                            </span>
                          </div>
                          <p className="text-sm text-foreground-secondary">
                            {level.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-navy to-navy-light rounded-3xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-6">
                    Data Extracted from Every Call
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {dataExtracted.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex items-center gap-2 text-sm"
                      >
                        <Check className="w-4 h-4 text-accent flex-shrink-0" />
                        {item}
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="text-sm text-white/60 mb-2">
                      All data is automatically
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs">
                        Structured
                      </span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs">
                        Searchable
                      </span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs">
                        Exportable
                      </span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs">
                        CRM-ready
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Speed to Lead */}
        <section className="section">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <div className="bg-background rounded-3xl border border-border p-8">
                  <h3 className="font-semibold mb-6">
                    The Speed-to-Lead Advantage
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl font-bold text-primary w-20">
                        78%
                      </div>
                      <div className="text-sm text-foreground-secondary">
                        of deals go to the vendor that responds first
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-3xl font-bold text-secondary w-20">
                        5min
                      </div>
                      <div className="text-sm text-foreground-secondary">
                        delay reduces lead qualification by 80%
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-3xl font-bold text-accent-dark w-20">
                        &lt;1min
                      </div>
                      <div className="text-sm text-foreground-secondary">
                        Callengo's average response time to new leads
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Be First, <span className="gradient-text">Win More</span>
                </h2>
                <p className="text-lg text-foreground-secondary mb-6">
                  Studies show that responding to leads within the first minute
                  dramatically increases conversion rates. Manual processes
                  can't compete with AI speed.
                </p>
                <p className="text-lg text-foreground-secondary">
                  With Callengo, every new lead gets an immediate, professional
                  qualification call - even outside business hours, on weekends,
                  or during holidays.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-gradient-to-br from-accent-dark via-accent to-secondary text-white">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Qualify Leads Automatically?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Start qualifying leads instantly with 15 free minutes. No credit
                card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/signup"
                  className="btn bg-white text-accent-dark hover:bg-white/90 px-8 py-4"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/contact"
                  className="btn border border-white/30 text-white hover:bg-white/10 px-8 py-4"
                >
                  Talk to Sales
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
