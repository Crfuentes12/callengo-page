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
      "CRM integrations (coming soon)",
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
  { name: "CRM integration", free: "-", starter: "-", business: "-", teams: "Coming soon" },
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
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h1 className="text-display-sm mb-6">
                Invest in results, not promises
              </h1>
              <p className="text-xl text-slate-600 mb-10">
                Start free, upgrade when you see the ROI. No hidden fees, no surprises.
              </p>

              {/* Billing Toggle */}
              <div className="inline-flex items-center gap-4 p-1.5 bg-slate-100 rounded-full">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    !isAnnual
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                    isAnnual
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:text-slate-900"
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
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 gradient-bg text-white text-sm font-medium rounded-full">
                      Most Popular
                    </div>
                  )}

                  <div
                    className={`h-full rounded-2xl p-6 ${
                      plan.popular
                        ? "bg-white border-2 border-slate-900 shadow-xl"
                        : "bg-white border border-slate-200"
                    }`}
                  >
                    {/* Plan Header */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-1">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-slate-500">{plan.description}</p>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-slate-900">
                          ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        </span>
                        {plan.monthlyPrice > 0 && (
                          <span className="text-slate-500">/month</span>
                        )}
                      </div>
                      <div className="text-sm text-slate-400 mt-1">
                        {plan.minutes}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/signup"
                      className={`inline-flex items-center justify-center w-full py-3 text-sm font-semibold rounded-full transition-all mb-6 ${
                        plan.popular
                          ? "bg-slate-900 text-white hover:bg-slate-800"
                          : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                      }`}
                    >
                      {plan.cta}
                    </Link>

                    {/* Features */}
                    <div className="space-y-3">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-sm">
                          <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
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
              className="gradient-bg rounded-3xl p-8 md:p-12 text-white"
            >
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                  <p className="text-white/70 max-w-md">
                    Custom solutions for large organizations. Dedicated support,
                    SLA guarantees, and advanced integrations.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-white text-primary rounded-full transition-all hover:bg-white/90"
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
        <section className="section bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Compare plans</h2>
              <p className="text-slate-600">
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
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-4 pr-4 font-medium text-slate-500">Feature</th>
                    <th className="text-center py-4 px-4 font-medium">Free</th>
                    <th className="text-center py-4 px-4 font-medium">Starter</th>
                    <th className="text-center py-4 px-4 font-medium bg-slate-100 rounded-t-xl">Business</th>
                    <th className="text-center py-4 px-4 font-medium">Teams</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature) => (
                    <tr key={feature.name} className="border-b border-slate-100">
                      <td className="py-4 pr-4 text-sm text-slate-600">{feature.name}</td>
                      <td className="text-center py-4 px-4 text-sm">{feature.free}</td>
                      <td className="text-center py-4 px-4 text-sm">{feature.starter}</td>
                      <td className="text-center py-4 px-4 text-sm bg-slate-50">{feature.business}</td>
                      <td className="text-center py-4 px-4 text-sm">{feature.teams}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
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
                  Ready to see the ROI?
                </h2>
                <p className="text-xl text-white/70 mb-10 max-w-xl">
                  Start with 15 free minutes. No credit card required. See how much revenue you can recover.
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
