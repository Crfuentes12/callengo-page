"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, X, Sparkles, Building2 } from "lucide-react";

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
      { name: "CRM integration", included: false },
    ],
  },
  {
    name: "Starter",
    description: "For small businesses",
    monthlyPrice: 99,
    annualPrice: 87,
    minutes: "250 min/month",
    popular: false,
    cta: "Get Started",
    features: [
      { name: "1 AI agent", included: true },
      { name: "1 user", included: true },
      { name: "5 min max per call", included: true },
      { name: "Full analytics", included: true },
      { name: "All import formats", included: true },
      { name: "Basic support", included: true },
      { name: "Follow-ups", included: false },
      { name: "CRM integration", included: false },
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
      { name: "Unlimited agents", included: true },
      { name: "3 users", included: true },
      { name: "10 min max per call", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Automatic follow-ups", included: true },
      { name: "Smart voicemail", included: true },
      { name: "Call scheduling", included: true },
      { name: "Priority support", included: true },
    ],
  },
  {
    name: "Teams",
    description: "For established companies",
    monthlyPrice: 699,
    annualPrice: 615,
    minutes: "3,000 min/month",
    popular: false,
    cta: "Get Started",
    features: [
      { name: "Unlimited agents", included: true },
      { name: "5 users ($79/extra)", included: true },
      { name: "15 min max per call", included: true },
      { name: "Full analytics suite", included: true },
      { name: "User permissions", included: true },
      { name: "Advanced retry logic", included: true },
      { name: "CRM integrations (Beta)", included: true },
      { name: "Priority support", included: true },
    ],
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="section bg-background-secondary" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">
              Simple Pricing
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Plans That{" "}
            <span className="gradient-text">Scale With You</span>
          </h2>

          <p className="text-lg text-foreground-secondary mb-8">
            Start free, upgrade when you need more. No hidden fees, no
            surprises. Cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-1.5 bg-background rounded-full border border-border">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                !isAnnual
                  ? "bg-primary text-white"
                  : "text-foreground-secondary hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                isAnnual
                  ? "bg-primary text-white"
                  : "text-foreground-secondary hover:text-foreground"
              }`}
            >
              Annual
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  isAnnual ? "bg-white/20" : "bg-accent/20 text-accent-dark"
                }`}
              >
                Save 12%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium rounded-full flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              <div
                className={`h-full rounded-3xl p-6 ${
                  plan.popular
                    ? "bg-background border-2 border-primary shadow-xl"
                    : "bg-background border border-border"
                }`}
              >
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-foreground-secondary">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    {plan.monthlyPrice > 0 && (
                      <span className="text-foreground-secondary">/month</span>
                    )}
                  </div>
                  <div className="text-sm text-foreground-tertiary mt-1">
                    {plan.minutes}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/signup"
                  className={`btn w-full justify-center mb-6 ${
                    plan.popular
                      ? "btn-primary"
                      : "bg-background-secondary text-foreground hover:bg-background-tertiary border border-border"
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
                        <Check className="w-4 h-4 text-accent-dark flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-foreground-tertiary flex-shrink-0" />
                      )}
                      <span
                        className={
                          feature.included
                            ? "text-foreground"
                            : "text-foreground-tertiary"
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

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-navy to-navy-light rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                <Building2 className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-white/70 max-w-md">
                  Custom solutions for large organizations. Dedicated support,
                  SLA guarantees, and advanced integrations.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn bg-white text-navy hover:bg-white/90 px-8 py-4"
              >
                Contact Sales
              </Link>
              <Link
                href="/enterprise"
                className="btn border border-white/30 text-white hover:bg-white/10 px-8 py-4"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
