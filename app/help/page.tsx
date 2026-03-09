"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, FileQuestion, ChevronRight, Plus, Minus } from "lucide-react";

const faqItems = [
  {
    question: "How do I get started with Callengo?",
    answer: "Sign up for a free account, import your contacts, and create your first campaign. Our quick start guide walks you through each step.",
  },
  {
    question: "What happens if a call goes to voicemail?",
    answer: "Callengo can leave a customized voicemail message and schedule a callback attempt. You can configure voicemail handling in your campaign settings.",
  },
  {
    question: "Can I customize the call scripts?",
    answer: "Yes, you can fully customize scripts for each campaign type. Our script editor supports dynamic fields, conditional logic, and multiple languages.",
  },
  {
    question: "How are call minutes calculated?",
    answer: "Minutes are calculated based on the actual duration of connected calls. Failed connections, busy signals, and voicemails under 30 seconds are not counted.",
  },
  {
    question: "Is Callengo compliant with TCPA regulations?",
    answer: "Yes, Callengo is designed with compliance in mind. We support Do-Not-Call list scrubbing, time zone restrictions, and consent management.",
  },
  {
    question: "Can I integrate Callengo with my CRM?",
    answer: "Yes! Callengo integrates natively with HubSpot and Pipedrive on Business+ plans, and Salesforce, Zoho, and Dynamics 365 on Teams+ plans. You can also export all data as CSV, Excel, or JSON for easy import into any CRM or business system.",
  },
];

export default function HelpPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h1 className="text-display-sm mb-6">Help Center</h1>
              <p className="text-xl text-foreground-secondary">
                Find answers, get support, and learn how to get the most out of Callengo.
              </p>
            </motion.div>

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-2xl mx-auto mb-16"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="w-full px-6 py-4 rounded-2xl border border-border focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent text-lg"
                />
              </div>
            </motion.div>

            {/* Contact Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-16"
            >
              <div className="bg-white rounded-2xl border border-border p-6 md:p-8 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
                <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-foreground-secondary text-lg">
                  Need help? Contact us at{" "}
                  <a
                    href="mailto:support@callengo.com"
                    className="text-electric font-semibold hover:underline"
                  >
                    support@callengo.com
                  </a>{" "}
                  or visit our{" "}
                  <Link
                    href="/contact"
                    className="text-electric font-semibold hover:underline"
                  >
                    contact page
                  </Link>
                  .
                </p>
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-8">
                <FileQuestion className="w-6 h-6 text-foreground-secondary" />
                <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
              </div>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div
                      className={`bg-white rounded-2xl border transition-all ${
                        openFaq === index
                          ? "border-foreground shadow-[var(--shadow-sm)]"
                          : "border-border hover:border-border/80"
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4"
                      >
                        <span className="font-medium">{item.question}</span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          openFaq === index ? "gradient-bg text-white" : "bg-background-tertiary text-foreground-secondary"
                        }`}>
                          {openFaq === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </div>
                      </button>

                      <AnimatePresence>
                        {openFaq === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 text-foreground-secondary">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl p-8 md:p-12 text-white relative overflow-hidden gradient-bg"
            >
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              </div>
              <h3 className="text-2xl font-semibold mb-6 relative z-10 text-white">Quick Links</h3>
              <div className="grid md:grid-cols-2 gap-4 relative z-10">
                <Link
                  href="/help/quick-start"
                  className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/15 hover:bg-white/20 transition-all group"
                >
                  <span className="font-medium text-white">Quick Start Guide</span>
                  <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
                <Link
                  href="/docs/integrations"
                  className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/15 hover:bg-white/20 transition-all group"
                >
                  <span className="font-medium text-white">Integrations</span>
                  <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
                <Link
                  href="/blog"
                  className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/15 hover:bg-white/20 transition-all group"
                >
                  <span className="font-medium text-white">Blog & Articles</span>
                  <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
                <Link
                  href="/docs"
                  className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/15 hover:bg-white/20 transition-all group"
                >
                  <span className="font-medium text-white">Documentation</span>
                  <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
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
