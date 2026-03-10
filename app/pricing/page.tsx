"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
    minutes: 15,
    minutesLabel: "15 min (one-time)",
    popular: false,
    cta: "Start Free",
    maxContacts: 10,
    features: [
      "1 AI agent",
      "1 user",
      "3 min max per call",
      "Basic analytics",
      "CSV import",
      "Google Calendar + Zoom",
    ],
  },
  {
    name: "Starter",
    description: "For small businesses",
    monthlyPrice: 99,
    annualPrice: 87,
    minutes: 250,
    minutesLabel: "250 min/month",
    popular: false,
    cta: "Get Started",
    maxContacts: 167,
    features: [
      "1 AI agent",
      "1 user",
      "5 min max per call",
      "Full analytics",
      "All import formats",
      "Google Calendar + Meet + Zoom",
      "Slack + Webhooks",
      "Basic support",
    ],
  },
  {
    name: "Growth",
    description: "For scaling teams",
    monthlyPrice: 179,
    annualPrice: 157,
    minutes: 500,
    minutesLabel: "500 min/month",
    popular: false,
    cta: "Get Started",
    maxContacts: 333,
    features: [
      "3 AI agents",
      "2 users",
      "7 min max per call",
      "Advanced analytics",
      "Automatic follow-ups",
      "Outlook + SimplyBook.me",
      "Microsoft Teams",
      "Email support",
    ],
  },
  {
    name: "Business",
    description: "For growing companies",
    monthlyPrice: 299,
    annualPrice: 263,
    minutes: 1000,
    minutesLabel: "1,000 min/month",
    popular: true,
    cta: "Get Started",
    maxContacts: 667,
    features: [
      "Unlimited agents",
      "3 users",
      "10 min max per call",
      "HubSpot + Pipedrive CRM",
      "Smart voicemail",
      "Stripe + Clio",
      "All calendar integrations",
      "Priority support",
    ],
  },
  {
    name: "Teams",
    description: "For established companies",
    monthlyPrice: 649,
    annualPrice: 571,
    minutes: 3000,
    minutesLabel: "3,000 min/month",
    popular: false,
    cta: "Get Started",
    maxContacts: 2000,
    features: [
      "Unlimited agents",
      "5 users ($79/extra)",
      "15 min max per call",
      "Salesforce + Zoho + Dynamics",
      "User permissions",
      "Advanced retry logic",
      "Google Sheets",
      "Priority support",
    ],
  },
];

function getRecommendedPlan(contacts: number): number {
  if (contacts <= 10) return 0;
  if (contacts <= 167) return 1;
  if (contacts <= 333) return 2;
  if (contacts <= 667) return 3;
  if (contacts <= 2000) return 4;
  return 5;
}

const integrationLogos = [
  { name: "Google Calendar", logo: "/integrations/calendar.png", minPlan: 0 },
  { name: "Zoom", logo: "/integrations/zoom.png", minPlan: 0 },
  { name: "Google Meet", logo: "/integrations/meets.png", minPlan: 1 },
  { name: "Slack", logo: "/integrations/slack.png", minPlan: 1 },
  { name: "Webhooks", logo: "/integrations/webhooks.png", minPlan: 1 },
  { name: "Outlook", logo: "/integrations/outlook.png", minPlan: 2 },
  { name: "SimplyBook.me", logo: "/integrations/simplybook.png", minPlan: 2 },
  { name: "Microsoft Teams", logo: "/integrations/teams.png", minPlan: 2 },
  { name: "HubSpot", logo: "/integrations/hubspot.png", minPlan: 3 },
  { name: "Pipedrive", logo: "/integrations/pipedrive.png", minPlan: 3 },
  { name: "Stripe", logo: "/integrations/stripe.png", minPlan: 3 },
  { name: "Clio", logo: "/integrations/clio.png", minPlan: 3 },
  { name: "Salesforce", logo: "/integrations/salesforce.png", minPlan: 4 },
  { name: "Zoho CRM", logo: "/integrations/zoho.png", minPlan: 4 },
  { name: "Dynamics 365", logo: "/integrations/dynamics.png", minPlan: 4 },
  { name: "Google Sheets", logo: "/integrations/sheets.png", minPlan: 4 },
];

const comparisonFeatures = [
  { name: "AI Agents", free: "1", starter: "1", growth: "3", business: "Unlimited", teams: "Unlimited", enterprise: "Unlimited" },
  { name: "Users", free: "1", starter: "1", growth: "2", business: "3", teams: "5 ($79/extra)", enterprise: "Custom" },
  { name: "Minutes/month", free: "15 (one-time)", starter: "250", growth: "500", business: "1,000", teams: "3,000", enterprise: "Custom" },
  { name: "Est. contacts/month", free: "~10", starter: "~167", growth: "~333", business: "~667", teams: "~2,000", enterprise: "Custom" },
  { name: "Max call duration", free: "3 min", starter: "5 min", growth: "7 min", business: "10 min", teams: "15 min", enterprise: "Unlimited" },
  { name: "Analytics", free: "Basic", starter: "Full", growth: "Advanced", business: "Advanced", teams: "Full suite", enterprise: "Full suite" },
  { name: "Follow-ups", free: "-", starter: "-", growth: "Yes", business: "Yes", teams: "Yes", enterprise: "Yes" },
  { name: "Voicemail handling", free: "-", starter: "-", growth: "-", business: "Yes", teams: "Yes", enterprise: "Yes" },
  { name: "Google Calendar", free: "Yes", starter: "Yes", growth: "Yes", business: "Yes", teams: "Yes", enterprise: "Yes" },
  { name: "Outlook Calendar", free: "-", starter: "-", growth: "Yes", business: "Yes", teams: "Yes", enterprise: "Yes" },
  { name: "Google Meet", free: "-", starter: "Yes", growth: "Yes", business: "Yes", teams: "Yes", enterprise: "Yes" },
  { name: "Zoom", free: "Yes", starter: "Yes", growth: "Yes", business: "Yes", teams: "Yes", enterprise: "Yes" },
  { name: "Microsoft Teams", free: "-", starter: "-", growth: "Yes", business: "Yes", teams: "Yes", enterprise: "Yes" },
  { name: "Slack", free: "-", starter: "Yes", growth: "Yes", business: "Yes", teams: "Yes", enterprise: "Yes" },
  { name: "SimplyBook.me", free: "-", starter: "-", growth: "Yes", business: "Yes", teams: "Yes", enterprise: "Yes" },
  { name: "Webhooks", free: "-", starter: "Yes", growth: "Yes", business: "Yes", teams: "Yes", enterprise: "Yes" },
  { name: "HubSpot", free: "-", starter: "-", growth: "-", business: "Yes", teams: "Yes", enterprise: "Yes" },
  { name: "Salesforce", free: "-", starter: "-", growth: "-", business: "-", teams: "Yes", enterprise: "Yes" },
  { name: "Pipedrive", free: "-", starter: "-", growth: "-", business: "Yes", teams: "Yes", enterprise: "Yes" },
  { name: "Zoho CRM", free: "-", starter: "-", growth: "-", business: "-", teams: "Yes", enterprise: "Yes" },
  { name: "Microsoft Dynamics 365", free: "-", starter: "-", growth: "-", business: "-", teams: "Yes", enterprise: "Yes" },
  { name: "Google Sheets", free: "-", starter: "-", growth: "-", business: "-", teams: "Yes", enterprise: "Yes" },
  { name: "Stripe", free: "-", starter: "-", growth: "-", business: "Yes", teams: "Yes", enterprise: "Yes" },
  { name: "Clio", free: "-", starter: "-", growth: "-", business: "Yes", teams: "Yes", enterprise: "Yes" },
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
  const [contacts, setContacts] = useState(667);

  const recommendedPlanIndex = getRecommendedPlan(contacts);
  const isEnterprise = recommendedPlanIndex === 5;

  const contactsDisplay = useMemo(() => {
    if (contacts >= 2500) return "2,500+";
    return contacts.toLocaleString();
  }, [contacts]);

  const recommendedPlan = isEnterprise ? null : plans[recommendedPlanIndex];

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

            {/* Contact Slider — compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto mb-10"
            >
              <div className="bg-white border border-border rounded-2xl px-6 py-5" style={{ boxShadow: "var(--shadow-sm)" }}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-foreground-tertiary">Estimated contacts/month</p>
                    <div className="flex items-baseline gap-1.5 mt-0.5">
                      <span className="text-3xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                        {contactsDisplay}
                      </span>
                      <span className="text-sm text-foreground-secondary">contacts</span>
                    </div>
                  </div>
                  {isEnterprise ? (
                    <a href="mailto:sales@callengo.com" className="btn btn-primary text-sm px-4 py-2 rounded-lg">
                      Contact Sales
                    </a>
                  ) : recommendedPlan ? (
                    <div className="text-right">
                      <p className="text-[10px] text-foreground-tertiary uppercase tracking-wider">Recommended</p>
                      <p className="font-semibold text-foreground">
                        {recommendedPlan.name}{" "}
                        <span className="text-electric">
                          ${isAnnual ? recommendedPlan.annualPrice : recommendedPlan.monthlyPrice}/mo
                        </span>
                      </p>
                    </div>
                  ) : null}
                </div>

                <input
                  type="range"
                  min={5}
                  max={2500}
                  step={5}
                  value={contacts}
                  onChange={(e) => setContacts(Number(e.target.value))}
                  className="w-full h-3 rounded-full appearance-none cursor-pointer slider-thick"
                  style={{
                    background: `linear-gradient(to right, var(--color-electric) ${((contacts - 5) / 2495) * 100}%, #e5e7eb ${((contacts - 5) / 2495) * 100}%)`,
                  }}
                />
                <div className="flex justify-between mt-1.5 text-[10px] text-foreground-tertiary font-medium">
                  <span>5</span>
                  <span>500</span>
                  <span>1,000</span>
                  <span>2,000</span>
                  <span>2,500+</span>
                </div>

                {/* Integration logos that unlock */}
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex flex-wrap gap-1.5">
                    {integrationLogos.map((intg) => {
                      const unlocked = isEnterprise || intg.minPlan <= recommendedPlanIndex;
                      return (
                        <div
                          key={intg.name}
                          className={`flex items-center gap-1 px-2 py-1 rounded-md border text-[11px] font-medium transition-all duration-300 ${
                            unlocked
                              ? "border-electric/20 bg-electric/5 text-foreground"
                              : "border-border bg-background-secondary text-foreground-tertiary opacity-40"
                          }`}
                          title={intg.name}
                        >
                          <Image src={intg.logo} alt={intg.name} width={14} height={14} className={`object-contain ${unlocked ? "" : "grayscale"}`} />
                          <span className="hidden sm:inline">{intg.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-12">
              {plans.map((plan, index) => {
                const isRecommended = !isEnterprise && index === recommendedPlanIndex;
                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className={`relative ${isRecommended ? "lg:-mt-3 lg:mb-3" : ""}`}
                  >
                    {isRecommended && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-secondary text-white text-xs font-medium rounded-full flex items-center gap-1.5 z-10">
                        <Sparkles className="w-3.5 h-3.5" />
                        Recommended
                      </div>
                    )}

                    <div
                      className={`h-full rounded-2xl p-5 transition-all duration-300 ${
                        isRecommended
                          ? "bg-background border-2 border-secondary"
                          : "bg-background border border-border"
                      }`}
                      style={{
                        boxShadow: isRecommended ? "var(--shadow-electric)" : "var(--shadow-sm)",
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
                        <div className="text-xs text-foreground-tertiary mt-1">{plan.minutesLabel}</div>
                        <div className="text-xs text-electric font-medium mt-0.5">~{plan.maxContacts.toLocaleString()} contacts</div>
                      </div>

                      <a
                        href="https://app.callengo.com/auth/signup"
                        className={`btn w-full justify-center mb-5 text-sm py-2.5 rounded-lg ${
                          isRecommended
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
                );
              })}
            </div>

            {/* Enterprise CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="gradient-bg rounded-3xl p-8 md:p-12 text-white mb-12 relative overflow-hidden"
            >
              <div className="absolute inset-0 overflow-hidden opacity-90">
                <div className="absolute -top-1/4 right-[-10%] w-3/5 h-[120%] bg-gradient-to-br from-white/40 via-[#8B96C8]/35 to-[#6070E0]/25 rounded-full blur-2xl animate-[priceCta1_22s_ease-in-out_infinite]" />
                <div className="absolute -bottom-1/3 left-[-10%] w-1/2 h-full bg-gradient-to-br from-[#8B96C8]/40 via-white/25 to-[#4F5FE8]/25 rounded-full blur-2xl animate-[priceCta2_28s_ease-in-out_infinite]" />
                <div className="absolute top-[10%] left-[30%] w-2/5 h-4/5 bg-gradient-to-br from-white/30 via-[#1DB87A]/18 to-[#8B96C8]/20 rounded-full blur-2xl animate-[priceCta3_25s_ease-in-out_infinite]" />
                <div className="absolute top-[-15%] left-[50%] w-1/3 h-[90%] bg-gradient-to-br from-[#6070E0]/30 via-white/20 to-[#8B96C8]/25 rounded-full blur-2xl animate-[priceCta4_30s_ease-in-out_infinite]" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E2D6B]/40 via-[#1E2D6B]/15 to-transparent" />
              <style jsx>{`
                @keyframes priceCta1 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  20% { transform: translate(-50px, 40px) scale(1.12); }
                  50% { transform: translate(30px, -35px) scale(0.9); }
                  75% { transform: translate(-20px, -15px) scale(1.05); }
                }
                @keyframes priceCta2 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  25% { transform: translate(45px, -40px) scale(1.15); }
                  55% { transform: translate(-30px, 45px) scale(0.88); }
                  80% { transform: translate(15px, -10px) scale(1.08); }
                }
                @keyframes priceCta3 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  30% { transform: translate(40px, -30px) scale(1.1); }
                  65% { transform: translate(-35px, 25px) scale(0.92); }
                }
                @keyframes priceCta4 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  20% { transform: translate(-30px, 40px) scale(1.1); }
                  50% { transform: translate(40px, -25px) scale(0.9); }
                  75% { transform: translate(-15px, -20px) scale(1.06); }
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
              <div className="absolute inset-0 overflow-hidden opacity-90">
                <div className="absolute -top-1/4 right-[-10%] w-3/5 h-[120%] bg-gradient-to-br from-white/40 via-[#8B96C8]/35 to-[#6070E0]/25 rounded-full blur-2xl animate-[priceBotCta1_22s_ease-in-out_infinite]" />
                <div className="absolute -bottom-1/3 left-[-10%] w-1/2 h-full bg-gradient-to-br from-[#8B96C8]/40 via-white/25 to-[#4F5FE8]/25 rounded-full blur-2xl animate-[priceBotCta2_28s_ease-in-out_infinite]" />
                <div className="absolute top-[10%] left-[30%] w-2/5 h-4/5 bg-gradient-to-br from-white/30 via-[#1DB87A]/18 to-[#8B96C8]/20 rounded-full blur-2xl animate-[priceBotCta3_25s_ease-in-out_infinite]" />
                <div className="absolute top-[-15%] left-[50%] w-1/3 h-[90%] bg-gradient-to-br from-[#6070E0]/30 via-white/20 to-[#8B96C8]/25 rounded-full blur-2xl animate-[priceBotCta4_30s_ease-in-out_infinite]" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E2D6B]/40 via-[#1E2D6B]/15 to-transparent" />
              <style jsx>{`
                @keyframes priceBotCta1 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  20% { transform: translate(-50px, 40px) scale(1.12); }
                  50% { transform: translate(30px, -35px) scale(0.9); }
                  75% { transform: translate(-20px, -15px) scale(1.05); }
                }
                @keyframes priceBotCta2 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  25% { transform: translate(45px, -40px) scale(1.15); }
                  55% { transform: translate(-30px, 45px) scale(0.88); }
                  80% { transform: translate(15px, -10px) scale(1.08); }
                }
                @keyframes priceBotCta3 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  30% { transform: translate(40px, -30px) scale(1.1); }
                  65% { transform: translate(-35px, 25px) scale(0.92); }
                }
                @keyframes priceBotCta4 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  20% { transform: translate(-30px, 40px) scale(1.1); }
                  50% { transform: translate(40px, -25px) scale(0.9); }
                  75% { transform: translate(-15px, -20px) scale(1.06); }
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

        <style dangerouslySetInnerHTML={{ __html: `
          .slider-thick::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: var(--color-electric);
            cursor: pointer;
            border: 4px solid white;
            box-shadow: 0 2px 8px rgba(79, 95, 232, 0.4);
            transition: transform 0.15s ease;
          }
          .slider-thick::-webkit-slider-thumb:hover {
            transform: scale(1.15);
          }
          .slider-thick::-moz-range-thumb {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: var(--color-electric);
            cursor: pointer;
            border: 4px solid white;
            box-shadow: 0 2px 8px rgba(79, 95, 232, 0.4);
          }
        ` }} />
      </main>
      <Footer />
    </>
  );
}
