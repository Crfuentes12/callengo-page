"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Database,
  Check,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Building2,
  AlertCircle,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  BarChart3,
  RefreshCw,
} from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Phone Verification",
    description:
      "Confirm phone numbers are active and reach the right person or business.",
  },
  {
    icon: Mail,
    title: "Email Validation",
    description:
      "Update outdated email addresses and confirm correct contacts.",
  },
  {
    icon: MapPin,
    title: "Address Updates",
    description:
      "Verify and update physical addresses for businesses that have moved.",
  },
  {
    icon: Building2,
    title: "Business Confirmation",
    description:
      "Confirm businesses are still operating and get current information.",
  },
  {
    icon: FileText,
    title: "Contact Details",
    description:
      "Identify the right decision-makers and their direct contact info.",
  },
  {
    icon: RefreshCw,
    title: "Auto Follow-ups",
    description:
      "Automatically retry contacts who didn't answer the first time.",
  },
];

const statuses = [
  {
    status: "Fully Verified",
    icon: CheckCircle,
    color: "text-accent-dark",
    bg: "bg-accent/10",
    description: "All information confirmed and up-to-date",
  },
  {
    status: "Research Needed",
    icon: AlertCircle,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    description: "Partial information, requires follow-up",
  },
  {
    status: "Wrong Number",
    icon: XCircle,
    color: "text-red-500",
    bg: "bg-red-500/10",
    description: "Number belongs to different contact",
  },
  {
    status: "No Answer",
    icon: Clock,
    color: "text-foreground-tertiary",
    bg: "bg-foreground-tertiary/10",
    description: "No response after multiple attempts",
  },
];

const useCases = [
  {
    title: "Pre-Campaign CRM Cleanup",
    description:
      "Clean your database before launching marketing campaigns to improve deliverability and ROI.",
    metric: "25% higher email open rates",
  },
  {
    title: "Annual Database Maintenance",
    description:
      "Keep your CRM healthy with regular verification to prevent data decay.",
    metric: "95%+ data accuracy",
  },
  {
    title: "Lead List Verification",
    description:
      "Verify purchased or scraped lead lists before your sales team wastes time on bad data.",
    metric: "80% cost reduction",
  },
  {
    title: "Audit Preparation",
    description:
      "Ensure your contact database is accurate before compliance audits.",
    metric: "100% audit-ready",
  },
];

export default function DataValidationPage() {
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
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    AI Agent
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Data Validation{" "}
                  <span className="gradient-text">Agent</span>
                </h1>

                <p className="text-xl text-foreground-secondary mb-8 leading-relaxed">
                  Stop wasting money on bad data. Automatically verify phone
                  numbers, update emails, and confirm business information across
                  your entire database with AI-powered calls.
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
                    95%+ accuracy rate
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent-dark" />
                    80% cost reduction
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent-dark" />
                    100x faster than manual
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
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <Database className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Sample Verification Call</div>
                      <div className="text-sm text-foreground-tertiary">
                        Typical conversation flow
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div className="bg-primary/5 p-4 rounded-xl">
                      <div className="text-xs text-primary font-medium mb-1">
                        AI Agent
                      </div>
                      <p>
                        "Hi, I'm Maya from TechCorp Solutions. I'm calling to
                        update our records. Is this ABC Industries?"
                      </p>
                    </div>
                    <div className="bg-background-secondary p-4 rounded-xl ml-8">
                      <div className="text-xs text-foreground-tertiary font-medium mb-1">
                        Contact
                      </div>
                      <p>"Yes, this is ABC Industries."</p>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-xl">
                      <div className="text-xs text-primary font-medium mb-1">
                        AI Agent
                      </div>
                      <p>
                        "Great! I have your address as 123 Main St. Is that still
                        correct?"
                      </p>
                    </div>
                    <div className="bg-background-secondary p-4 rounded-xl ml-8">
                      <div className="text-xs text-foreground-tertiary font-medium mb-1">
                        Contact
                      </div>
                      <p>"We moved. Now at 456 Oak Ave."</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="text-xs text-foreground-tertiary mb-2">
                      Data Extracted
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-accent/10 text-accent-dark rounded-full text-xs">
                        Address Updated
                      </span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
                        Business Confirmed
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section bg-background-secondary">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Everything You Need for{" "}
                <span className="gradient-text">Clean Data</span>
              </h2>
              <p className="text-lg text-foreground-secondary">
                Our Data Validation Agent handles all aspects of contact
                verification so you can trust your database.
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
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
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

        {/* Contact Statuses */}
        <section className="section">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Clear Contact <span className="gradient-text">Statuses</span>
                </h2>
                <p className="text-lg text-foreground-secondary mb-8">
                  After each call, our AI categorizes contacts with clear,
                  actionable statuses so you know exactly what to do next.
                </p>

                <div className="space-y-4">
                  {statuses.map((status, index) => (
                    <motion.div
                      key={status.status}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-background-secondary rounded-xl"
                    >
                      <div
                        className={`w-10 h-10 rounded-lg ${status.bg} flex items-center justify-center flex-shrink-0`}
                      >
                        <status.icon className={`w-5 h-5 ${status.color}`} />
                      </div>
                      <div>
                        <div className="font-semibold">{status.status}</div>
                        <div className="text-sm text-foreground-secondary">
                          {status.description}
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
                <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-white">
                  <BarChart3 className="w-10 h-10 mb-6 opacity-70" />
                  <h3 className="text-2xl font-bold mb-4">
                    Typical Campaign Results
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-white/70">Fully Verified</span>
                        <span className="font-semibold">65%</span>
                      </div>
                      <div className="h-2 bg-white/20 rounded-full">
                        <div
                          className="h-full bg-accent rounded-full"
                          style={{ width: "65%" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-white/70">Research Needed</span>
                        <span className="font-semibold">15%</span>
                      </div>
                      <div className="h-2 bg-white/20 rounded-full">
                        <div
                          className="h-full bg-yellow-400 rounded-full"
                          style={{ width: "15%" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-white/70">Bad Data Removed</span>
                        <span className="font-semibold">12%</span>
                      </div>
                      <div className="h-2 bg-white/20 rounded-full">
                        <div
                          className="h-full bg-red-400 rounded-full"
                          style={{ width: "12%" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-white/70">No Answer (Retry)</span>
                        <span className="font-semibold">8%</span>
                      </div>
                      <div className="h-2 bg-white/20 rounded-full">
                        <div
                          className="h-full bg-white/50 rounded-full"
                          style={{ width: "8%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="section bg-background-secondary">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Perfect For <span className="gradient-text">Your Use Case</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card flex flex-col"
                >
                  <h3 className="font-semibold text-lg mb-2">{useCase.title}</h3>
                  <p className="text-foreground-secondary mb-4 flex-grow">
                    {useCase.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    <Check className="w-4 h-4" />
                    {useCase.metric}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-gradient-to-br from-primary via-primary-dark to-slate text-white">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Clean Your Database?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Start verifying your contacts today with 15 free minutes. No
                credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/signup"
                  className="btn bg-white text-primary hover:bg-white/90 px-8 py-4"
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
