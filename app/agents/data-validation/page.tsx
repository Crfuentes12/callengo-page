"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Check, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Phone Verification",
    description: "Confirm phone numbers are active and reach the right person.",
  },
  {
    title: "Email Validation",
    description: "Update outdated email addresses and confirm correct contacts.",
  },
  {
    title: "Address Updates",
    description: "Verify and update physical addresses for businesses that moved.",
  },
  {
    title: "Business Confirmation",
    description: "Confirm businesses are still operating and get current info.",
  },
  {
    title: "Decision Maker ID",
    description: "Identify the right contacts and their direct information.",
  },
  {
    title: "Auto Follow-ups",
    description: "Automatically retry contacts who didn't answer the first time.",
  },
];

const useCases = [
  {
    title: "Pre-Campaign CRM Cleanup",
    description: "Clean your database before launching marketing campaigns.",
    metric: "25% higher email open rates",
  },
  {
    title: "Annual Database Maintenance",
    description: "Keep your CRM healthy with regular verification.",
    metric: "95%+ data accuracy",
  },
  {
    title: "Lead List Verification",
    description: "Verify purchased lead lists before your sales team starts.",
    metric: "80% cost reduction",
  },
  {
    title: "Audit Preparation",
    description: "Ensure your contact database is accurate before audits.",
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
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-display-sm mb-6">Stop wasting money on bad contacts</h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Every campaign sent to outdated contacts is money down the drain.
                  Clean your database and reach the right people every time.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Link href="/signup" className="btn btn-primary">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="btn bg-gray-100 text-dark hover:bg-gray-200"
                  >
                    Talk to Sales
                  </Link>
                </div>

                <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    95%+ accuracy rate
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    80% cost reduction
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    100x faster than manual
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400">Agent preview placeholder</span>
                </div>
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-gray-200 rounded-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section gradient-bg text-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-semibold">
                Clean data in three steps
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Upload your contacts",
                  description:
                    "Import your contact list from CSV, or connect directly to your CRM.",
                },
                {
                  step: "02",
                  title: "Configure your agent",
                  description:
                    "Set what data you need verified and customize the conversation script.",
                },
                {
                  step: "03",
                  title: "Review results",
                  description:
                    "Get verified data back with clear status categories for each contact.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-6xl font-bold text-white/30 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                  Everything you need for clean data
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our Data Validation Agent handles all aspects of contact
                  verification so you can trust your database.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="p-4 rounded-xl bg-gray-50"
                    >
                      <h3 className="font-medium mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-4-3 rounded-3xl bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400">Dashboard screenshot</span>
                </div>
                <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full bg-gray-200 rounded-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="section bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="bg-white rounded-3xl border border-gray-200 p-8">
                  <h3 className="font-semibold mb-6">Typical Campaign Results</h3>
                  <div className="space-y-4">
                    {[
                      { label: "Fully Verified", value: 65, color: "bg-green-500" },
                      { label: "Updated Info", value: 15, color: "bg-blue-500" },
                      { label: "Bad Data Removed", value: 12, color: "bg-red-500" },
                      { label: "No Answer (Retry)", value: 8, color: "bg-gray-400" },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex justify-between mb-1 text-sm">
                          <span className="text-gray-600">{item.label}</span>
                          <span className="font-medium">{item.value}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full">
                          <div
                            className={`h-full ${item.color} rounded-full`}
                            style={{ width: `${item.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                  Clear, actionable insights
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  After each call, our AI categorizes contacts with clear statuses
                  so you know exactly what to do next.
                </p>
                <ul className="space-y-3">
                  {[
                    "Verified contacts ready for outreach",
                    "Updated information synced to your CRM",
                    "Bad data flagged for removal",
                    "Unreachable contacts queued for retry",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-semibold">
                Perfect for your workflow
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-gray-200 p-6"
                >
                  <h3 className="font-semibold text-lg mb-2">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
                    <Check className="w-4 h-4" />
                    {useCase.metric}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl gradient-bg p-12 md:p-20"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              </div>

              {/* Content */}
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
                  Ready to stop wasting campaign budget?
                </h2>
                <p className="text-xl text-white/70 mb-10 max-w-xl">
                  Start with 15 free minutes and see how much bad data is costing you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/signup"
                    className="btn bg-white text-primary hover:bg-white/90 px-8 py-4 font-semibold"
                  >
                    Start free trial
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="btn border border-white/30 text-white hover:bg-white/10 px-8 py-4"
                  >
                    Talk to sales
                  </Link>
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
