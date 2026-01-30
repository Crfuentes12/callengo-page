"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Check, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Automated Reminders",
    description: "Call patients/clients 24-48 hours before their appointments.",
  },
  {
    title: "Rescheduling Support",
    description: "Let customers reschedule directly during the call.",
  },
  {
    title: "Cancellation Handling",
    description: "Capture cancellations early to fill empty slots.",
  },
  {
    title: "Multi-attempt Outreach",
    description: "Automatic retries if the first call isn't answered.",
  },
  {
    title: "Calendar Sync",
    description: "Real-time updates to your scheduling system.",
  },
  {
    title: "Custom Scripts",
    description: "Personalized messages for your brand and service.",
  },
];

const stats = [
  { value: "60%", label: "reduction in no-shows" },
  { value: "85%", label: "confirmation rate" },
  { value: "24hr", label: "advance notice" },
  { value: "3x", label: "ROI on average" },
];

const industries = [
  {
    title: "Healthcare & Medical",
    description: "Reduce patient no-shows for clinics, dentists, and specialists.",
    metric: "Save $150+ per missed appointment",
  },
  {
    title: "Salons & Spas",
    description: "Keep your appointment book full and stylists busy.",
    metric: "Fill 90%+ of time slots",
  },
  {
    title: "Professional Services",
    description: "Confirm consultations for lawyers, accountants, and advisors.",
    metric: "Increase billable hours by 20%",
  },
  {
    title: "Home Services",
    description: "Ensure customers are home for HVAC, plumbing, and repairs.",
    metric: "Eliminate wasted service calls",
  },
];

export default function AppointmentConfirmationPage() {
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
                <h1 className="text-display-sm mb-6">
                  Fill your calendar, not your voicemail
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Every empty time slot is lost revenue. Keep your schedule full
                  and your customers accountable with automatic confirmation calls.
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
                    60% fewer no-shows
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    24-48hr advance notice
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Calendar sync included
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

        {/* Stats Section */}
        <section className="section gradient-bg text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative order-2 lg:order-1"
              >
                <div className="aspect-4-3 rounded-3xl bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400">Workflow diagram</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                  Set it and forget it
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      step: "01",
                      title: "Connect your calendar",
                      description:
                        "Sync with Google Calendar, Outlook, or your scheduling software.",
                    },
                    {
                      step: "02",
                      title: "Configure timing",
                      description:
                        "Set when calls go out - 24 hours, 48 hours, or custom.",
                    },
                    {
                      step: "03",
                      title: "Let AI handle it",
                      description:
                        "Our agent calls, confirms, and updates your calendar automatically.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="text-2xl font-bold text-gray-300">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-semibold">
                Everything you need to eliminate no-shows
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl border border-gray-200 p-6"
                >
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                  Calculate your savings
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Every no-show costs you money. A typical business with 50
                  appointments per week loses over $1,800 weekly to no-shows.
                </p>
                <ul className="space-y-3">
                  {[
                    "60% average reduction in no-shows",
                    "Fill empty slots with rescheduled appointments",
                    "Save staff hours on manual calling",
                    "ROI in the first month for most businesses",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-3xl border border-gray-200 p-8">
                  <h3 className="font-semibold mb-6">Example Savings</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between pb-4 border-b border-gray-100">
                      <span className="text-gray-600">50 appointments/week</span>
                    </div>
                    <div className="flex justify-between pb-4 border-b border-gray-100">
                      <span className="text-gray-600">Current weekly loss</span>
                      <span className="font-semibold">$1,875</span>
                    </div>
                    <div className="flex justify-between pb-4 border-b border-gray-100">
                      <span className="text-gray-600">With Callengo (60% reduction)</span>
                      <span className="font-semibold">$750</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Weekly savings</span>
                      <span className="font-bold text-green-600 text-xl">$1,125</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                    <div className="text-sm text-gray-500 mb-1">Annual savings</div>
                    <div className="text-3xl font-bold">$58,500</div>
                  </div>
                </div>
                <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full bg-gray-200 rounded-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="section bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-semibold">
                Built for appointment-based businesses
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-gray-200 p-6"
                >
                  <h3 className="font-semibold text-lg mb-2">{industry.title}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
                    <Check className="w-4 h-4" />
                    {industry.metric}
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
                  Ready to fill your calendar?
                </h2>
                <p className="text-xl text-white/70 mb-10 max-w-xl">
                  Start with 15 free minutes and see how much revenue you can recover from no-shows.
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
