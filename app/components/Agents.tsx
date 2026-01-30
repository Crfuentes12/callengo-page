"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Database,
  Calendar,
  UserCheck,
  ArrowRight,
  Check,
  TrendingUp,
  Clock,
  Target,
} from "lucide-react";

const agents = [
  {
    id: "data-validation",
    name: "Data Validation Agent",
    tagline: "The Database Cleaner",
    description:
      "Stop wasting money on bad data. Automatically verify phone numbers, update emails, and confirm business information across your entire database.",
    icon: Database,
    color: "primary",
    gradient: "from-primary to-primary-dark",
    href: "/agents/data-validation",
    stats: [
      { label: "Data Accuracy", value: "95%+" },
      { label: "Cost Reduction", value: "80%" },
      { label: "Time Saved", value: "100x" },
    ],
    features: [
      "Verify phone numbers and emails",
      "Update outdated contact info",
      "Detect disconnected numbers",
      "Identify wrong contacts",
    ],
    useCases: [
      "CRM cleanup before campaigns",
      "Annual database maintenance",
      "Lead list verification",
      "Audit preparation",
    ],
  },
  {
    id: "appointment-confirmation",
    name: "Appointment Confirmation Agent",
    tagline: "The No-Show Eliminator",
    description:
      "Stop losing money to empty appointment slots. Automatically confirm, reschedule, and remind clients 24-48 hours before their appointments.",
    icon: Calendar,
    color: "secondary",
    gradient: "from-secondary to-secondary-dark",
    href: "/agents/appointment-confirmation",
    stats: [
      { label: "No-Show Reduction", value: "60%" },
      { label: "Confirmation Rate", value: "85%" },
      { label: "ROI", value: "400-800%" },
    ],
    features: [
      "Automated confirmation calls",
      "Easy rescheduling options",
      "Smart voicemail detection",
      "Calendar integration ready",
    ],
    useCases: [
      "Medical & dental clinics",
      "Professional services",
      "Beauty salons & spas",
      "Auto repair shops",
    ],
  },
  {
    id: "lead-qualification",
    name: "Lead Qualification Agent",
    tagline: "The Smart Filter",
    description:
      "Let your sales team focus on closing deals, not chasing bad leads. Automatically qualify prospects using BANT, MEDDIC, or custom criteria.",
    icon: UserCheck,
    color: "accent",
    gradient: "from-accent-dark to-accent",
    href: "/agents/lead-qualification",
    stats: [
      { label: "SDR Time Saved", value: "15h/wk" },
      { label: "Lead Quality", value: "3x" },
      { label: "Response Time", value: "<1min" },
    ],
    features: [
      "Instant lead response",
      "Budget & authority detection",
      "Interest level scoring",
      "Meeting scheduling",
    ],
    useCases: [
      "Inbound lead follow-up",
      "Webform qualification",
      "Speed-to-lead programs",
      "Cold lead re-engagement",
    ],
  },
];

export default function Agents() {
  return (
    <section className="section" id="agents">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
            <span className="text-sm font-medium text-secondary">
              Specialized AI Agents
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Three Agents for{" "}
            <span className="gradient-text">Three Problems</span>
          </h2>

          <p className="text-lg text-foreground-secondary">
            Each agent is purpose-built to solve a specific business challenge.
            Choose the one that fits your needs, or use them all together.
          </p>
        </motion.div>

        {/* Agents Cards */}
        <div className="space-y-8">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className={`relative overflow-hidden rounded-3xl border border-border bg-background ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Content Side */}
                  <div
                    className={`p-8 md:p-12 ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${agent.gradient} flex items-center justify-center`}
                      >
                        <agent.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-foreground-tertiary font-medium">
                          {agent.tagline}
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">
                          {agent.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-lg text-foreground-secondary mb-8">
                      {agent.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {agent.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="text-center p-4 bg-background-secondary rounded-2xl"
                        >
                          <div className="text-2xl font-bold text-foreground mb-1">
                            {stat.value}
                          </div>
                          <div className="text-xs text-foreground-tertiary">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {agent.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-foreground-secondary"
                        >
                          <Check className="w-4 h-4 text-accent-dark flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Link
                      href={agent.href}
                      className={`btn bg-gradient-to-r ${agent.gradient} text-white px-6 py-3`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Visual Side */}
                  <div
                    className={`relative bg-gradient-to-br ${agent.gradient} p-8 md:p-12 flex items-center justify-center min-h-[400px] ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
                      <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-full" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white rounded-full" />
                    </div>

                    {/* Use Cases Card */}
                    <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-sm w-full">
                      <div className="text-white/70 text-sm font-medium mb-4">
                        Perfect For
                      </div>
                      <div className="space-y-3">
                        {agent.useCases.map((useCase, i) => (
                          <motion.div
                            key={useCase}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="flex items-center gap-3 text-white"
                          >
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                              {i === 0 && <Target className="w-4 h-4" />}
                              {i === 1 && <Clock className="w-4 h-4" />}
                              {i === 2 && <TrendingUp className="w-4 h-4" />}
                              {i === 3 && <Check className="w-4 h-4" />}
                            </div>
                            <span className="text-sm font-medium">
                              {useCase}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
