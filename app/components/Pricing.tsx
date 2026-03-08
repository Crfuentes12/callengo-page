"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, X, Sparkles, Building2, Zap } from "lucide-react";

const plans = [
  {
    name: "Free",
    description: "Try Callengo risk-free",
    monthlyPrice: 0,
    annualPrice: 0,
    minutes: "15 min (one-time)",
    popular: false,
    cta: "Start Free",
    features: [
      { name: "1 AI agent", included: true },
      { name: "1 user", included: true },
      { name: "3 min max per call", included: true },
      { name: "Basic analytics", included: true },
      { name: "CSV import", included: true },
      { name: "Follow-ups", included: false },
      { name: "Voicemail handling", included: false },
      { name: "Integrations", included: false },
    ],
  },
  {
    name: "Starter",
    description: "For small businesses",
    monthlyPrice: 99,
    annualPrice: 87,
    minutes: "300 min/month",
    popular: false,
    cta: "Get Started",
    features: [
      { name: "2 AI agents", included: true },
      { name: "1 user", included: true },
      { name: "5 min max per call", included: true },
      { name: "Full analytics", included: true },
      { name: "All import formats", included: true },
      { name: "Email support", included: true },
      { name: "Calendar integrations", included: true },
      { name: "CRM integrations", included: false },
    ],
  },
  {
    name: "Growth",
    description: "For scaling operations",
    monthlyPrice: 179,
    annualPrice: 157,
    minutes: "600 min/month",
    popular: false,
    cta: "Get Started",
    features: [
      { name: "5 AI agents", included: true },
      { name: "2 users", included: true },
      { name: "7 min max per call", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Automatic follow-ups", included: true },
      { name: "Smart voicemail", included: true },
      { name: "Calendar + Video integrations", included: true },
      { name: "Priority email support", included: true },
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
    features: [
      { name: "Unlimited agents", included: true },
      { name: "5 users", included: true },
      { name: "10 min max per call", included: true },
      { name: "Full analytics suite", included: true },
      { name: "Smart follow-ups + voicemail", included: true },
      { name: "All integrations", included: true },
      { name: "Webhook events", included: true },
      { name: "Priority support", included: true },
    ],
  },
  {
    name: "Teams",
    description: "For established companies",
    monthlyPrice: 649,
    annualPrice: 571,
    minutes: "2,250 min/month",
    popular: false,
    cta: "Get Started",
    features: [
      { name: "Unlimited agents", included: true },
      { name: "10 users ($69/extra)", included: true },
      { name: "15 min max per call", included: true },
      { name: "Full analytics + exports", included: true },
      { name: "User permissions & roles", included: true },
      { name: "All integrations + API", included: true },
      { name: "Advanced retry logic", included: true },
      { name: "Dedicated account manager", included: true },
    ],
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    monthlyPrice: 1499,
    annualPrice: 1319,
    minutes: "6,000 min/month",
    popular: false,
    cta: "Contact Sales",
    features: [
      { name: "Unlimited everything", included: true },
      { name: "Unlimited users", included: true },
      { name: "30 min max per call", included: true },
      { name: "Custom analytics & reports", included: true },
      { name: "SSO & advanced security", included: true },
      { name: "Custom integrations", included: true },
      { name: "SLA guarantees", included: true },
      { name: "24/7 dedicated support", included: true },
    ],
  },
];

const addOns = [
  {
    name: "Dedicated Number",
    price: 15,
    description: "Get a dedicated phone number for your campaigns",
  },
  {
    name: "Recording Vault",
    price: 12,
    description: "Store and replay all call recordings securely",
  },
  {
    name: "Calls Booster",
    price: 35,
    description: "Add 500 extra minutes to any plan",
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="section surface-arctic" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-sm font-medium text-accent">
              Simple Pricing
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Plans That{" "}
            <span className="gradient-text">Scale With You</span>
          </h2>

          <p className="text-lg text-slate-600 mb-8">
            Start free, upgrade when you need more. No hidden fees, no
            surprises. Cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-1.5 bg-white rounded-full border border-slate-200">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                !isAnnual
                  ? "bg-primary text-white"
                  : "text-slate-600 hover:text-ink"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                isAnnual
                  ? "bg-primary text-white"
                  : "text-slate-600 hover:text-ink"
              }`}
            >
              Annual
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  isAnnual ? "bg-white/20" : "bg-accent/10 text-accent"
                }`}
              >
                Save 12%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 gradient-bg text-white text-sm font-medium rounded-full flex items-center gap-1.5 z-10">
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              <div
                className={`h-full rounded-2xl p-6 ${
                  plan.popular
                    ? "bg-white border-2 border-primary shadow-xl"
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
                  href={plan.name === "Enterprise" ? "/contact" : "/signup"}
                  className={`btn w-full justify-center mb-6 ${
                    plan.popular
                      ? "btn-primary"
                      : "bg-slate-100 text-ink hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  {plan.cta}
                </Link>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature.name}
                      className="flex items-center gap-3 text-sm"
                    >
                      {feature.included ? (
                        <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-slate-300 flex-shrink-0" />
                      )}
                      <span
                        className={
                          feature.included
                            ? "text-ink"
                            : "text-slate-400"
                        }
                      >
                        {feature.name}
                      </span>
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
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-center mb-6">
            <Zap className="w-5 h-5 inline-block mr-2 text-accent" />
            Available Add-ons
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="bg-white rounded-xl border border-slate-200 p-5 text-center"
              >
                <div className="text-2xl font-bold text-ink mb-1">
                  ${addon.price}
                  <span className="text-sm font-normal text-slate-500">/mo</span>
                </div>
                <div className="font-semibold text-ink mb-1">{addon.name}</div>
                <p className="text-sm text-slate-500">{addon.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Full Pricing Page Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
          >
            View full pricing comparison
            <span className="text-lg">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
