"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Check, ArrowRight, Minus } from "lucide-react";

const plans = [
  {
    name: "Free",
    description: "Try Callengo risk-free",
    monthlyPrice: 0,
    annualPrice: 0,
    minutes: "15 min one-time",
    cta: "Start Free",
    href: "/signup",
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
    description: "For small businesses getting started",
    monthlyPrice: 99,
    annualPrice: 87,
    minutes: "300 min/month",
    cta: "Get Started",
    href: "/signup",
    features: [
      "2 AI agents",
      "1 user",
      "5 min max per call",
      "Full analytics",
      "All import formats",
      "Email support",
      "Calendar integrations",
    ],
  },
  {
    name: "Growth",
    description: "For scaling operations",
    monthlyPrice: 179,
    annualPrice: 157,
    minutes: "600 min/month",
    cta: "Get Started",
    href: "/signup",
    features: [
      "5 AI agents",
      "2 users",
      "7 min max per call",
      "Advanced analytics",
      "Auto follow-ups",
      "Smart voicemail",
      "Calendar + video integrations",
      "Priority email support",
    ],
  },
  {
    name: "Business",
    description: "For growing teams",
    monthlyPrice: 299,
    annualPrice: 263,
    minutes: "1,200 min/month",
    popular: true,
    cta: "Get Started",
    href: "/signup",
    features: [
      "Unlimited agents",
      "5 users",
      "10 min max per call",
      "Full analytics suite",
      "Smart follow-ups & voicemail",
      "All integrations",
      "Webhook events",
      "Priority support",
    ],
  },
  {
    name: "Teams",
    description: "For established companies",
    monthlyPrice: 649,
    annualPrice: 571,
    minutes: "2,250 min/month",
    cta: "Get Started",
    href: "/signup",
    features: [
      "Unlimited agents",
      "10 users ($69/extra)",
      "15 min max per call",
      "Full analytics + exports",
      "User permissions & roles",
      "All integrations + API",
      "Advanced retry logic",
      "Dedicated account manager",
    ],
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    monthlyPrice: 1499,
    annualPrice: 1319,
    minutes: "6,000 min/month",
    cta: "Contact Sales",
    href: "/contact",
    features: [
      "Unlimited agents",
      "Unlimited users",
      "30 min max per call",
      "Custom analytics & reports",
      "SSO & advanced security",
      "Custom integrations",
      "SLA guarantees",
      "24/7 dedicated support",
    ],
  },
];

const addOns = [
  {
    name: "Dedicated Number",
    price: "$15/mo",
    description: "A dedicated phone number for your brand",
  },
  {
    name: "Recording Vault",
    price: "$12/mo",
    description: "Securely store and replay all call recordings",
  },
  {
    name: "Calls Booster",
    price: "$35/mo",
    description: "500 extra minutes added to your plan",
  },
];

const comparisonFeatures = [
  {
    name: "AI Agents",
    free: "1",
    starter: "2",
    growth: "5",
    business: "Unlimited",
    teams: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    name: "Users",
    free: "1",
    starter: "1",
    growth: "2",
    business: "5",
    teams: "10 ($69/extra)",
    enterprise: "Unlimited",
  },
  {
    name: "Minutes/month",
    free: "15 (one-time)",
    starter: "300",
    growth: "600",
    business: "1,200",
    teams: "2,250",
    enterprise: "6,000",
  },
  {
    name: "Max call duration",
    free: "3 min",
    starter: "5 min",
    growth: "7 min",
    business: "10 min",
    teams: "15 min",
    enterprise: "30 min",
  },
  {
    name: "Analytics",
    free: "Basic",
    starter: "Full",
    growth: "Advanced",
    business: "Full suite",
    teams: "Full + exports",
    enterprise: "Custom reports",
  },
  {
    name: "Follow-ups",
    free: "-",
    starter: "-",
    growth: "Auto",
    business: "Smart",
    teams: "Smart",
    enterprise: "Smart",
  },
  {
    name: "Voicemail handling",
    free: "-",
    starter: "-",
    growth: "Smart",
    business: "Smart",
    teams: "Smart",
    enterprise: "Smart",
  },
  {
    name: "Calendar integrations",
    free: "-",
    starter: "check",
    growth: "check",
    business: "check",
    teams: "check",
    enterprise: "check",
  },
  {
    name: "Video integrations",
    free: "-",
    starter: "-",
    growth: "check",
    business: "check",
    teams: "check",
    enterprise: "check",
  },
  {
    name: "CRM integrations",
    free: "-",
    starter: "-",
    growth: "-",
    business: "check",
    teams: "check",
    enterprise: "check",
  },
  {
    name: "Communication integrations",
    free: "-",
    starter: "-",
    growth: "-",
    business: "check",
    teams: "check",
    enterprise: "check",
  },
  {
    name: "Webhooks",
    free: "-",
    starter: "-",
    growth: "-",
    business: "check",
    teams: "check",
    enterprise: "check",
  },
  {
    name: "API access",
    free: "-",
    starter: "-",
    growth: "-",
    business: "-",
    teams: "check",
    enterprise: "check",
  },
  {
    name: "Support",
    free: "Community",
    starter: "Email",
    growth: "Priority email",
    business: "Priority",
    teams: "Dedicated AM",
    enterprise: "24/7 dedicated",
  },
];

type FeatureRow = (typeof comparisonFeatures)[number];

function renderCell(value: string) {
  if (value === "check") {
    return <Check className="w-4 h-4 text-green-600 mx-auto" />;
  }
  if (value === "-") {
    return <Minus className="w-4 h-4 text-slate-300 mx-auto" />;
  }
  return value;
}

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
                Start free, upgrade when you see the ROI. No hidden fees, no
                surprises.
              </p>

              {/* Billing Toggle */}
              <div className="inline-flex items-center gap-4 p-1.5 bg-slate-100 rounded-full">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    !isAnnual
                      ? "bg-[#1E2D6B] text-white"
                      : "text-slate-600 hover:text-ink"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                    isAnnual
                      ? "bg-[#1E2D6B] text-white"
                      : "text-slate-600 hover:text-ink"
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`relative ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 gradient-bg text-white text-sm font-medium rounded-full z-10">
                      Most Popular
                    </div>
                  )}

                  <div
                    className={`h-full rounded-2xl p-6 ${
                      plan.popular
                        ? "bg-white border-2 border-[#1E2D6B] shadow-xl"
                        : "bg-white border border-slate-200"
                    }`}
                  >
                    {/* Plan Header */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-ink mb-1">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-slate-500">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-ink">
                          $
                          {isAnnual ? plan.annualPrice : plan.monthlyPrice}
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
                      href={plan.href}
                      className={`inline-flex items-center justify-center w-full py-3 text-sm font-semibold rounded-full transition-all mb-6 ${
                        plan.popular
                          ? "btn-primary text-white"
                          : "bg-slate-100 text-ink hover:bg-slate-200"
                      }`}
                    >
                      {plan.cta}
                    </Link>

                    {/* Features */}
                    <div className="space-y-3">
                      {plan.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 text-sm"
                        >
                          <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Add-ons Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h3 className="text-2xl font-bold text-ink text-center mb-8">
                Boost your plan with add-ons
              </h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {addOns.map((addon) => (
                  <div
                    key={addon.name}
                    className="bg-white border border-slate-200 rounded-2xl p-6 text-center"
                  >
                    <h4 className="text-lg font-semibold text-ink mb-1">
                      {addon.name}
                    </h4>
                    <p className="text-2xl font-bold text-[#4F5FE8] mb-2">
                      {addon.price}
                    </p>
                    <p className="text-sm text-slate-500">
                      {addon.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Enterprise CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="gradient-bg rounded-3xl p-8 md:p-12 text-white"
            >
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Need a custom solution?
                  </h3>
                  <p className="text-white/70 max-w-md">
                    Enterprise plans include SSO, SLA guarantees, custom
                    integrations, unlimited users, and 24/7 dedicated support
                    tailored to your organization.
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
              <h2 className="text-3xl font-bold text-ink mb-4">
                Compare plans
              </h2>
              <p className="text-slate-600">
                See what&apos;s included in each plan at a glance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-x-auto"
            >
              <table className="w-full min-w-[900px]">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-4 pr-4 font-medium text-slate-500 w-[180px]">
                      Feature
                    </th>
                    <th className="text-center py-4 px-3 font-medium text-ink">
                      Free
                    </th>
                    <th className="text-center py-4 px-3 font-medium text-ink">
                      Starter
                    </th>
                    <th className="text-center py-4 px-3 font-medium text-ink">
                      Growth
                    </th>
                    <th className="text-center py-4 px-3 font-medium text-ink bg-slate-100 rounded-t-xl">
                      Business
                    </th>
                    <th className="text-center py-4 px-3 font-medium text-ink">
                      Teams
                    </th>
                    <th className="text-center py-4 px-3 font-medium text-ink">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature: FeatureRow) => (
                    <tr
                      key={feature.name}
                      className="border-b border-slate-100"
                    >
                      <td className="py-4 pr-4 text-sm text-slate-600">
                        {feature.name}
                      </td>
                      <td className="text-center py-4 px-3 text-sm">
                        {renderCell(feature.free)}
                      </td>
                      <td className="text-center py-4 px-3 text-sm">
                        {renderCell(feature.starter)}
                      </td>
                      <td className="text-center py-4 px-3 text-sm">
                        {renderCell(feature.growth)}
                      </td>
                      <td className="text-center py-4 px-3 text-sm bg-slate-50">
                        {renderCell(feature.business)}
                      </td>
                      <td className="text-center py-4 px-3 text-sm">
                        {renderCell(feature.teams)}
                      </td>
                      <td className="text-center py-4 px-3 text-sm">
                        {renderCell(feature.enterprise)}
                      </td>
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
                  Start with 15 free minutes. No credit card required. See how
                  much revenue you can recover.
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
