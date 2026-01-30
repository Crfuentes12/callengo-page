"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Free",
    description: "Try Callengo risk-free",
    monthlyPrice: 0,
    annualPrice: 0,
    minutes: "15 min (one-time)",
    cta: "Start Free",
    features: [
      "1 AI agent",
      "1 user",
      "3 min max per call",
      "Basic analytics",
      "CSV import",
    ],
  },
  {
    name: "Starter",
    description: "For small businesses",
    monthlyPrice: 99,
    annualPrice: 87,
    minutes: "250 min/month",
    cta: "Get Started",
    features: [
      "1 AI agent",
      "1 user",
      "5 min max per call",
      "Full analytics",
      "All import formats",
      "Basic support",
    ],
  },
  {
    name: "Business",
    description: "For growing teams",
    monthlyPrice: 299,
    annualPrice: 263,
    minutes: "1,000 min/month",
    popular: true,
    cta: "Get Started",
    features: [
      "Unlimited agents",
      "3 users",
      "10 min max per call",
      "Advanced analytics",
      "Automatic follow-ups",
      "Smart voicemail",
      "Call scheduling",
      "Priority support",
    ],
  },
  {
    name: "Teams",
    description: "For established companies",
    monthlyPrice: 699,
    annualPrice: 615,
    minutes: "3,000 min/month",
    cta: "Get Started",
    features: [
      "Unlimited agents",
      "5 users ($79/extra)",
      "15 min max per call",
      "Full analytics suite",
      "User permissions",
      "Advanced retry logic",
      "CRM integrations",
      "Priority support",
    ],
  },
];

const comparisonFeatures = [
  { name: "AI Agents", free: "1", starter: "1", business: "Unlimited", teams: "Unlimited" },
  { name: "Users", free: "1", starter: "1", business: "3", teams: "5 ($79/extra)" },
  { name: "Minutes/month", free: "15 (one-time)", starter: "250", business: "1,000", teams: "3,000" },
  { name: "Max call duration", free: "3 min", starter: "5 min", business: "10 min", teams: "15 min" },
  { name: "Analytics", free: "Basic", starter: "Full", business: "Advanced", teams: "Full suite" },
  { name: "Follow-ups", free: "-", starter: "-", business: "Yes", teams: "Yes" },
  { name: "Voicemail handling", free: "-", starter: "-", business: "Yes", teams: "Yes" },
  { name: "CRM integration", free: "-", starter: "-", business: "-", teams: "Yes" },
  { name: "Support", free: "Email", starter: "Email", business: "Priority", teams: "Priority" },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="badge badge-outline mb-4">Pricing</span>
              <h1 className="text-display-sm mb-6">
                Simple, transparent pricing
              </h1>
              <p className="text-xl text-gray-600 mb-10">
                Start free, upgrade when you need more. No hidden fees.
              </p>

              {/* Billing Toggle */}
              <div className="inline-flex items-center gap-4 p-1.5 bg-gray-100 rounded-full">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    !isAnnual
                      ? "bg-dark text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                    isAnnual
                      ? "bg-dark text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Annual
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      isAnnual ? "bg-white/20" : "bg-green-100 text-green-700"
                    }`}
                  >
                    Save 12%
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-dark text-white text-sm font-medium rounded-full">
                      Most Popular
                    </div>
                  )}

                  <div
                    className={`h-full rounded-2xl p-6 ${
                      plan.popular
                        ? "bg-white border-2 border-dark shadow-xl"
                        : "bg-white border border-gray-200"
                    }`}
                  >
                    {/* Plan Header */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-dark mb-1">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-gray-500">{plan.description}</p>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-dark">
                          ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        </span>
                        {plan.monthlyPrice > 0 && (
                          <span className="text-gray-500">/month</span>
                        )}
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        {plan.minutes}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/signup"
                      className={`btn w-full justify-center mb-6 ${
                        plan.popular
                          ? "btn-primary"
                          : "bg-gray-100 text-dark hover:bg-gray-200"
                      }`}
                    >
                      {plan.cta}
                    </Link>

                    {/* Features */}
                    <div className="space-y-3">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-sm">
                          <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enterprise CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-dark rounded-3xl p-8 md:p-12 text-white"
            >
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                  <p className="text-gray-400 max-w-md">
                    Custom solutions for large organizations. Dedicated support,
                    SLA guarantees, and advanced integrations.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="btn bg-white text-dark hover:bg-gray-100 px-8 py-4"
                  >
                    Contact Sales
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="section bg-gray-50">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Compare plans</h2>
              <p className="text-gray-600">
                See what's included in each plan at a glance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-x-auto"
            >
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 pr-4 font-medium text-gray-500">Feature</th>
                    <th className="text-center py-4 px-4 font-medium">Free</th>
                    <th className="text-center py-4 px-4 font-medium">Starter</th>
                    <th className="text-center py-4 px-4 font-medium bg-gray-100 rounded-t-xl">Business</th>
                    <th className="text-center py-4 px-4 font-medium">Teams</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={feature.name} className="border-b border-gray-100">
                      <td className="py-4 pr-4 text-sm text-gray-600">{feature.name}</td>
                      <td className="text-center py-4 px-4 text-sm">{feature.free}</td>
                      <td className="text-center py-4 px-4 text-sm">{feature.starter}</td>
                      <td className="text-center py-4 px-4 text-sm bg-gray-50">{feature.business}</td>
                      <td className="text-center py-4 px-4 text-sm">{feature.teams}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="section">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Have questions?</h2>
            <p className="text-gray-600 mb-8">
              Check out our FAQ or get in touch with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#faq" className="btn btn-primary">
                View FAQ
              </Link>
              <Link
                href="/contact"
                className="btn bg-gray-100 text-dark hover:bg-gray-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
