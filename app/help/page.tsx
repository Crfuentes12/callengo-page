"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MessageCircle, Mail, Phone, FileQuestion, Clock, ChevronRight } from "lucide-react";

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
    answer: "Callengo integrates with popular CRMs like Salesforce, HubSpot, and Zoho. We also offer a REST API and Zapier integration for custom workflows.",
  },
];

const supportChannels = [
  {
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    icon: MessageCircle,
    action: "Start Chat",
    availability: "Mon-Fri, 9am-6pm EST",
  },
  {
    title: "Email Support",
    description: "Get a response within 24 hours",
    icon: Mail,
    action: "Send Email",
    href: "mailto:support@callengo.com",
  },
  {
    title: "Phone Support",
    description: "Available for Business and Teams plans",
    icon: Phone,
    action: "Call Us",
    href: "tel:+1-800-CALLENGO",
  },
];

export default function HelpPage() {
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
              <p className="text-xl text-slate-600">
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
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-lg"
                />
              </div>
            </motion.div>

            {/* Support Channels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid md:grid-cols-3 gap-6 mb-16"
            >
              {supportChannels.map((channel) => (
                <div
                  key={channel.title}
                  className="bg-white rounded-2xl border border-slate-200 p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
                    <channel.icon className="w-6 h-6 text-slate-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{channel.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{channel.description}</p>
                  {channel.availability && (
                    <div className="flex items-center justify-center gap-1 text-sm text-slate-400 mb-4">
                      <Clock className="w-4 h-4" />
                      {channel.availability}
                    </div>
                  )}
                  {channel.href ? (
                    <a
                      href={channel.href}
                      className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors"
                    >
                      {channel.action}
                    </a>
                  ) : (
                    <button className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors">
                      {channel.action}
                    </button>
                  )}
                </div>
              ))}
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-8">
                <FileQuestion className="w-6 h-6 text-slate-600" />
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
                    className="bg-white rounded-2xl border border-slate-200 p-6"
                  >
                    <h3 className="font-semibold mb-2">{item.question}</h3>
                    <p className="text-slate-600">{item.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-3xl p-8 md:p-12"
            >
              <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/docs/quick-start"
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all group"
                >
                  <span className="font-medium">Quick Start Guide</span>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" />
                </Link>
                <Link
                  href="/docs/api/auth"
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all group"
                >
                  <span className="font-medium">API Documentation</span>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" />
                </Link>
                <Link
                  href="/docs/integrations/crm"
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all group"
                >
                  <span className="font-medium">CRM Integrations</span>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" />
                </Link>
                <Link
                  href="/pricing"
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all group"
                >
                  <span className="font-medium">Pricing & Plans</span>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" />
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
