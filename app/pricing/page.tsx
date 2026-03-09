"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Check, X, ArrowRight, Plus, Building2, Sparkles } from "lucide-react";
import AnimatedBlobs from "../components/AnimatedBlobs";

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
      "1 AI agent",
      "1 user",
      "3 min max per call",
      "Basic analytics",
      "CSV import",
      "Google Calendar",
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
      "1 AI agent",
      "1 user",
      "5 min max per call",
      "Full analytics",
      "All import formats",
      "Google Calendar + Meet",
      "Basic support",
    ],
  },
  {
    name: "Growth",
    description: "For scaling teams",
    monthlyPrice: 179,
    annualPrice: 157,
    minutes: "500 min/month",
    popular: false,
    cta: "Get Started",
    features: [
      "3 AI agents",
      "2 users",
      "7 min max per call",
      "Advanced analytics",
      "Automatic follow-ups",
      "Zoom + Outlook Calendar",
      "Slack notifications",
    ],
  },
  {
    name: "Business",
    description: "For growing companies",
    monthlyPrice: 299,
    annualPrice: 263,
    minutes: "1,000 min/month",
    popular: true,
    cta: "Get Started",
    features: [
      "Unlimited agents",
      "3 users",
      "10 min max per call",
      "HubSpot + Pipedrive CRM",
      "Smart voicemail",
      "All calendar integrations",
      "Webhooks",
      "Priority support",
    ],
  },
  {
    name: "Teams",
    description: "For established companies",
    monthlyPrice: 649,
    annualPrice: 571,
    minutes: "3,000 min/month",
    popular: false,
    cta: "Get Started",
    features: [
      "Unlimited agents",
      "5 users ($79/extra)",
      "15 min max per call",
      "All CRM integrations",
      "User permissions",
      "Advanced retry logic",
      "Google Sheets + Stripe",
      "Priority support",
    ],
  },
];

const comparisonFeatures = [
  { name: "AI Agents", free: "1", starter: "1", growth: "3", business: "Unlimited", teams: "Unlimited", enterprise: "Unlimited" },
  { name: "Users", free: "1", starter: "1", growth: "2", business: "3", teams: "5 ($79/extra)", enterprise: "Custom" },
  { name: "Minutes/month", free: "15 (one-time)", starter: "250", growth: "500", business: "1,000", teams: "3,000", enterprise: "Custom" },
  { name: "Max call duration", free: "3 min", starter: "5 min", growth: "7 min", business: "10 min", teams: "15 min", enterprise: "Unlimited" },
  { name: "Analytics", free: "Basic", starter: "Full", growth: "Advanced", business: "Advanced", teams: "Full suite", enterprise: "Full suite" },
  { name: "Follow-ups", free: "-", starter: "-", growth: "Yes", business: "Yes", teams: "Yes", enterprise: "Yes" },
  { name: "Voicemail handling", free: "-", starter: "-", growth: "-", business: "Yes", teams: "Yes", enterprise: "Yes" },
  { name: "Google Calendar", free: "Yes", starter: "Yes", growth: "Yes", business: "Yes", teams: "Yes", enterprise: "Yes" },
  { name: "Outlook Calendar", free: "-", starter: "-", growth: "Yes", business: "Yes", teams: "Yes", enterprise: "Yes" },
  { name: "Google Meet", free: "-", starter: "Yes", growth: "Yes", business: "Yes", teams: "Yes", enterprise: "Yes" },
  { name: "Zoom", free: "-", starter: "-", growth: "Yes", business: "Yes", teams: "Yes", enterprise: "Yes" },
  { name: "Microsoft Teams", free: "-", starter: "-", growth: "-", business: "Yes", teams: "Yes", enterprise: "Yes" },
  { name: "Slack", free: "-", starter: "-", growth: "Yes", business: "Yes", teams: "Yes", enterprise: "Yes" },
  { name: "SimplyBook.me", free: "-", starter: "-", growth: "-", business: "Yes", teams: "Yes", enterprise: "Yes" },
  { name: "Webhooks", free: "-", starter: "-", growth: "-", business: "Yes", teams: "Yes", enterprise: "Yes" },
  { name: "HubSpot", free: "-", starter: "-", growth: "-", business: "Yes", teams: "Yes", enterprise: "Yes" },
  { name: "Salesforce", free: "-", starter: "-", growth: "-", business: "-", teams: "Yes", enterprise: "Yes" },
  { name: "Pipedrive", free: "-", starter: "-", growth: "-", business: "Yes", teams: "Yes", enterprise: "Yes" },
  { name: "Zoho CRM", free: "-", starter: "-", growth: "-", business: "-", teams: "Yes", enterprise: "Yes" },
  { name: "Microsoft Dynamics 365", free: "-", starter: "-", growth: "-", business: "-", teams: "Yes", enterprise: "Yes" },
  { name: "Google Sheets", free: "-", starter: "-", growth: "-", business: "-", teams: "Yes", enterprise: "Yes" },
  { name: "Stripe", free: "-", starter: "-", growth: "-", business: "-", teams: "Yes", enterprise: "Yes" },
  { name: "Clio", free: "-", starter: "-", growth: "-", business: "-", teams: "-", enterprise: "Yes" },
  { name: "Support", free: "Email", starter: "Email", growth: "Email", business: "Priority", teams: "Priority", enterprise: "Dedicated" },
];

const addOns = [
  {
    name: "Dedicated Number",
    price: "$15/mo",
    description: "Your own dedicated phone number for brand consistency",
  },
  {
    name: "Recording Vault",
    price: "$12/mo",
    description: "Unlimited call recording storage with full transcription",
  },
  {
    name: "Calls Booster",
    price: "$35/500 min",
    description: "Extra minutes when you need them, no plan upgrade required",
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <>
      <Header />
      <main className="pt-24 relative overflow-hidden">
        <AnimatedBlobs />
        {/* Hero Section */}
        <section className="section relative z-10">
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
              <p className="text-xl text-foreground-secondary mb-10">
                Start free, upgrade when you see the ROI. No hidden fees, no surprises.
              </p>

              {/* Billing Toggle */}
              <div className="inline-flex items-center gap-4 p-1.5 bg-background-secondary rounded-full border border-border">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    !isAnnual
                      ? "bg-secondary text-white"
                      : "text-foreground-secondary hover:text-foreground"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                    isAnnual
                      ? "bg-secondary text-white"
                      : "text-foreground-secondary hover:text-foreground"
                  }`}
                >
                  Annual
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      isAnnual ? "bg-white/20" : "bg-accent/15 text-accent-dark"
                    }`}
                  >
                    Save 12%
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-12">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`relative ${plan.popular ? "lg:-mt-3 lg:mb-3" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-secondary text-white text-xs font-medium rounded-full flex items-center gap-1.5 z-10">
                      <Sparkles className="w-3.5 h-3.5" />
                      Most Popular
                    </div>
                  )}

                  <div
                    className={`h-full rounded-2xl p-5 ${
                      plan.popular
                        ? "bg-background border-2 border-secondary"
                        : "bg-background border border-border"
                    }`}
                    style={{
                      boxShadow: plan.popular ? "var(--shadow-electric)" : "var(--shadow-sm)",
                    }}
                  >
                    <div className="mb-5">
                      <h3 className="text-lg font-semibold text-foreground mb-0.5">{plan.name}</h3>
                      <p className="text-xs text-foreground-tertiary">{plan.description}</p>
                    </div>

                    <div className="mb-5">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-foreground">
                          ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        </span>
                        {plan.monthlyPrice > 0 && (
                          <span className="text-foreground-tertiary text-sm">/mo</span>
                        )}
                      </div>
                      <div className="text-xs text-foreground-tertiary mt-1">{plan.minutes}</div>
                    </div>

                    <a
                      href="https://app.callengo.com/auth/signup"
                      className={`btn w-full justify-center mb-5 text-sm py-2.5 rounded-lg ${
                        plan.popular
                          ? "btn-primary"
                          : "bg-background-secondary text-foreground hover:bg-background-tertiary border border-border"
                      }`}
                    >
                      {plan.cta}
                    </a>

                    <div className="space-y-2.5">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2.5 text-xs">
                          <Check className="w-3.5 h-3.5 text-accent-dark flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
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
              className="gradient-bg rounded-3xl p-8 md:p-12 text-white mb-12 relative overflow-hidden"
            >
              {/* Subtle internal lava lamp */}
              <div className="absolute inset-0 overflow-hidden opacity-70">
                <div className="absolute -top-1/4 right-[-10%] w-3/5 h-[120%] bg-gradient-to-br from-white/20 via-[#8B96C8]/15 to-white/10 rounded-full blur-3xl animate-[priceCta1_40s_ease-in-out_infinite]" />
                <div className="absolute -bottom-1/3 left-[-10%] w-1/2 h-full bg-gradient-to-br from-[#8B96C8]/20 via-white/12 to-[#4F5FE8]/10 rounded-full blur-3xl animate-[priceCta2_50s_ease-in-out_infinite]" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E2D6B]/30 via-transparent to-transparent" />
              <style jsx>{`
                @keyframes priceCta1 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  33% { transform: translate(-20px, 15px) scale(1.04); }
                  66% { transform: translate(15px, -15px) scale(0.97); }
                }
                @keyframes priceCta2 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  50% { transform: translate(20px, -15px) scale(1.06); }
                }
              `}</style>
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Enterprise</h3>
                    <p className="text-sm text-white/70 mb-1">Starting at $1,499/month</p>
                    <p className="text-white/60 max-w-md text-sm">
                      Custom solutions for large organizations. Dedicated support,
                      SLA guarantees, custom integrations, and unlimited everything.
                    </p>
                  </div>
                </div>
                <a
                  href="mailto:sales@callengo.com"
                  className="btn bg-white text-primary hover:bg-white/90 px-8 py-4 font-semibold shrink-0 rounded-xl"
                >
                  Contact Sales
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Add-ons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  Enhance any plan with add-ons
                </h3>
                <p className="text-foreground-secondary">
                  Available on all paid plans
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {addOns.map((addon) => (
                  <div
                    key={addon.name}
                    className="bg-background border border-border rounded-xl p-5 flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-secondary/8 flex items-center justify-center shrink-0">
                      <Plus className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{addon.name}</div>
                      <div className="text-secondary font-bold text-sm mt-0.5">{addon.price}</div>
                      <div className="text-foreground-tertiary text-xs mt-1">{addon.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="section relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Compare all plans</h2>
              <p className="text-foreground-secondary">
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
                  <tr className="border-b border-border">
                    <th className="text-left py-4 pr-4 font-medium text-foreground-secondary text-sm">Feature</th>
                    <th className="text-center py-4 px-3 font-medium text-sm">Free</th>
                    <th className="text-center py-4 px-3 font-medium text-sm">Starter</th>
                    <th className="text-center py-4 px-3 font-medium text-sm">Growth</th>
                    <th className="text-center py-4 px-3 font-medium text-sm bg-secondary/5 rounded-t-xl">Business</th>
                    <th className="text-center py-4 px-3 font-medium text-sm">Teams</th>
                    <th className="text-center py-4 px-3 font-medium text-sm">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature) => (
                    <tr key={feature.name} className="border-b border-border-light">
                      <td className="py-3.5 pr-4 text-sm text-foreground-secondary">{feature.name}</td>
                      {[feature.free, feature.starter, feature.growth, feature.business, feature.teams, feature.enterprise].map((val, i) => (
                        <td
                          key={i}
                          className={`text-center py-3.5 px-3 text-sm ${i === 3 ? "bg-secondary/5" : ""}`}
                        >
                          {val === "Yes" ? (
                            <Check className="w-4 h-4 text-accent-dark mx-auto" />
                          ) : val === "-" ? (
                            <X className="w-4 h-4 text-foreground-tertiary/50 mx-auto" />
                          ) : (
                            <span className="text-foreground">{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl gradient-bg p-12 md:p-20"
            >
              {/* Subtle internal lava lamp */}
              <div className="absolute inset-0 overflow-hidden opacity-70">
                <div className="absolute -top-1/4 right-[-10%] w-3/5 h-[120%] bg-gradient-to-br from-white/20 via-[#8B96C8]/15 to-white/10 rounded-full blur-3xl animate-[priceBotCta1_40s_ease-in-out_infinite]" />
                <div className="absolute -bottom-1/3 left-[-10%] w-1/2 h-full bg-gradient-to-br from-[#8B96C8]/20 via-white/12 to-[#4F5FE8]/10 rounded-full blur-3xl animate-[priceBotCta2_50s_ease-in-out_infinite]" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E2D6B]/40 via-[#1E2D6B]/15 to-transparent" />
              <style jsx>{`
                @keyframes priceBotCta1 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  33% { transform: translate(-30px, 25px) scale(1.06); }
                  66% { transform: translate(20px, -20px) scale(0.95); }
                }
                @keyframes priceBotCta2 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  40% { transform: translate(30px, -25px) scale(1.08); }
                  70% { transform: translate(-20px, 30px) scale(0.94); }
                }
              `}</style>

              <div className="relative z-10 max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
                  Ready to see the ROI?
                </h2>
                <p className="text-xl text-white/70 mb-10 max-w-xl">
                  Start with 15 free minutes. No credit card required. See how much revenue you can recover.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://app.callengo.com/auth/signup"
                    className="btn bg-white text-primary hover:bg-white/90 px-8 py-4 font-semibold rounded-xl"
                  >
                    Start free trial
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:sales@callengo.com"
                    className="btn border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl"
                  >
                    Talk to sales
                  </a>
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
