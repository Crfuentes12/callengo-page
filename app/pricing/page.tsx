"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Check,
  ArrowRight,
  Minus,
  Zap,
  Crown,
  Star,
  Building2,
  Rocket,
  Users,
  Shield,
} from "lucide-react";

/* ───────────────────────────── Plan data ───────────────────────────── */

const planIcons = [Zap, Star, Rocket, Crown, Users, Building2] as const;

const plans = [
  {
    name: "Free",
    description: "Try Callengo risk-free",
    monthlyPrice: 0,
    annualPrice: 0,
    minutes: "15 min one-time",
    cta: "Start Free",
    href: "/signup",
    isEnterprise: false,
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
    isEnterprise: false,
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
    isEnterprise: false,
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
    isEnterprise: false,
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
    isEnterprise: false,
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
    annualPrice: 1499,
    minutes: "6,000 min/month",
    cta: "Contact Sales",
    href: "/contact",
    isEnterprise: true,
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

/* ───────────────── Comparison table data with categories ───────────── */

type FeatureRow = {
  name: string;
  category?: string;
  isProgressBar?: boolean;
  maxValue?: number;
  free: string;
  starter: string;
  growth: string;
  business: string;
  teams: string;
  enterprise: string;
};

const comparisonFeatures: FeatureRow[] = [
  // Core
  {
    name: "AI Agents",
    category: "Core",
    isProgressBar: true,
    maxValue: 20,
    free: "1",
    starter: "2",
    growth: "5",
    business: "Unlimited",
    teams: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    name: "Users",
    isProgressBar: true,
    maxValue: 15,
    free: "1",
    starter: "1",
    growth: "2",
    business: "5",
    teams: "10 ($69/extra)",
    enterprise: "Unlimited",
  },
  {
    name: "Minutes/month",
    isProgressBar: true,
    maxValue: 6000,
    free: "15 (one-time)",
    starter: "300",
    growth: "600",
    business: "1,200",
    teams: "2,250",
    enterprise: "6,000",
  },
  {
    name: "Max call duration",
    isProgressBar: true,
    maxValue: 30,
    free: "3 min",
    starter: "5 min",
    growth: "7 min",
    business: "10 min",
    teams: "15 min",
    enterprise: "30 min",
  },
  // Analytics & Automation
  {
    name: "Analytics level",
    category: "Analytics & Automation",
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
  // Integrations
  {
    name: "Calendar",
    category: "Integrations",
    free: "-",
    starter: "check",
    growth: "check",
    business: "check",
    teams: "check",
    enterprise: "check",
  },
  {
    name: "Video",
    free: "-",
    starter: "-",
    growth: "check",
    business: "check",
    teams: "check",
    enterprise: "check",
  },
  {
    name: "CRM",
    free: "-",
    starter: "-",
    growth: "-",
    business: "check",
    teams: "check",
    enterprise: "check",
  },
  {
    name: "Communication",
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
  // Support
  {
    name: "Support level",
    category: "Support",
    free: "Community",
    starter: "Email",
    growth: "Priority email",
    business: "Priority",
    teams: "Dedicated AM",
    enterprise: "24/7 dedicated",
  },
];

const planKeys = [
  "free",
  "starter",
  "growth",
  "business",
  "teams",
  "enterprise",
] as const;

/* ───────────────────────── Helper components ──────────────────────── */

function parseNumericValue(value: string): number | null {
  const cleaned = value.replace(/[^0-9]/g, "");
  const num = parseInt(cleaned, 10);
  return isNaN(num) ? null : num;
}

function ProgressIndicator({
  value,
  maxValue,
  isPopular,
}: {
  value: string;
  maxValue: number;
  isPopular: boolean;
}) {
  const isUnlimited =
    value.toLowerCase().includes("unlimited") ||
    value.toLowerCase().includes("6,000") ||
    value.toLowerCase().includes("30 min");
  const numericValue = parseNumericValue(value);
  const percentage = isUnlimited
    ? 100
    : numericValue
      ? Math.min((numericValue / maxValue) * 100, 100)
      : 5;

  return (
    <div className="flex flex-col items-center gap-1.5">
      <span
        className={`text-sm font-medium ${isPopular ? "text-[#1E2D6B]" : "text-slate-700"}`}
      >
        {value}
      </span>
      <div className="w-full max-w-[80px] h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${isPopular ? "gradient-bg" : "bg-[#4F5FE8]/60"}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function ComparisonCell({
  value,
  isPopular,
  isProgressBar,
  maxValue,
}: {
  value: string;
  isPopular: boolean;
  isProgressBar?: boolean;
  maxValue?: number;
}) {
  if (value === "check") {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-50">
        <Check className="w-3.5 h-3.5 text-emerald-600" strokeWidth={3} />
      </span>
    );
  }
  if (value === "-") {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-50">
        <Minus className="w-3.5 h-3.5 text-slate-300" strokeWidth={2} />
      </span>
    );
  }
  if (isProgressBar && maxValue) {
    return (
      <ProgressIndicator
        value={value}
        maxValue={maxValue}
        isPopular={isPopular}
      />
    );
  }
  return (
    <span
      className={`text-sm font-medium ${isPopular ? "text-[#1E2D6B]" : "text-slate-700"}`}
    >
      {value}
    </span>
  );
}

/* ──────────────────────────── Main page ────────────────────────────── */

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* ── Hero ── */}
        <section className="section">
          <div className="max-w-[1440px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-14"
            >
              <span className="badge badge-gradient mb-4 inline-block">
                Transparent Pricing
              </span>
              <h1 className="text-display-sm mb-5">
                Invest in results,{" "}
                <span className="gradient-text">not promises</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
                Start free, upgrade when you see the ROI. No hidden fees, no
                surprises, cancel anytime.
              </p>

              {/* Billing Toggle */}
              <div className="inline-flex items-center gap-1 p-1.5 bg-slate-100 rounded-full">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`cursor-pointer px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    !isAnnual
                      ? "bg-[#1E2D6B] text-white shadow-md"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`cursor-pointer px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                    isAnnual
                      ? "bg-[#1E2D6B] text-white shadow-md"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  Annual
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full transition-colors duration-200 ${
                      isAnnual
                        ? "bg-white/20 text-white"
                        : "bg-emerald-100 text-emerald-700"
                    }`}
                  >
                    Save 12%
                  </span>
                </button>
              </div>
            </motion.div>

            {/* ── Pricing Cards ── 6 columns on xl ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4 mb-20">
              {plans.map((plan, index) => {
                const Icon = planIcons[index];
                const price = plan.isEnterprise
                  ? null
                  : isAnnual
                    ? plan.annualPrice
                    : plan.monthlyPrice;

                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className={`relative group ${plan.popular ? "xl:-mt-3 xl:mb-3" : ""}`}
                  >
                    {/* Most Popular ribbon */}
                    {plan.popular && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                        <span className="gradient-bg text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg whitespace-nowrap">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div
                      className={`h-full rounded-2xl p-5 flex flex-col transition-all duration-200 ${
                        plan.popular
                          ? "bg-white border-2 border-[#1E2D6B] shadow-xl ring-1 ring-[#4F5FE8]/10"
                          : "bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg"
                      }`}
                    >
                      {/* Icon + Name */}
                      <div className="flex items-center gap-2.5 mb-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                            plan.popular
                              ? "gradient-bg text-white"
                              : "bg-slate-100 text-slate-600 group-hover:bg-[#4F5FE8]/10 group-hover:text-[#4F5FE8]"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-ink leading-tight">
                            {plan.name}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                        {plan.description}
                      </p>

                      {/* Price */}
                      <div className="mb-4">
                        {plan.isEnterprise ? (
                          <>
                            <div className="flex items-baseline gap-0.5">
                              <span className="text-xs text-slate-500">
                                From
                              </span>
                            </div>
                            <div className="flex items-baseline gap-0.5">
                              <span className="text-3xl font-extrabold text-ink tracking-tight">
                                $1,499
                              </span>
                              <span className="text-base font-bold text-ink">
                                +
                              </span>
                            </div>
                            <span className="text-xs text-slate-400">
                              /month
                            </span>
                          </>
                        ) : (
                          <>
                            <div className="flex items-baseline gap-0.5">
                              <span className="text-3xl font-extrabold text-ink tracking-tight">
                                ${price}
                              </span>
                              {price! > 0 && (
                                <span className="text-xs text-slate-400">
                                  /mo
                                </span>
                              )}
                            </div>
                            {isAnnual && price! > 0 && (
                              <span className="text-xs text-slate-400">
                                billed annually
                              </span>
                            )}
                          </>
                        )}
                        <div className="text-xs text-slate-400 mt-1">
                          {plan.minutes}
                        </div>
                      </div>

                      {/* CTA */}
                      <Link
                        href={plan.href}
                        className={`cursor-pointer inline-flex items-center justify-center w-full py-2.5 text-sm font-semibold rounded-full transition-all duration-200 mb-4 ${
                          plan.popular
                            ? "btn-primary text-white shadow-md hover:shadow-lg"
                            : plan.isEnterprise
                              ? "bg-slate-900 text-white hover:bg-slate-800"
                              : "bg-slate-100 text-ink hover:bg-slate-200"
                        }`}
                      >
                        {plan.cta}
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                      </Link>

                      {/* Features */}
                      <div className="space-y-2 mt-auto">
                        {plan.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-2 text-xs"
                          >
                            <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-600 leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ── Add-ons ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-20"
            >
              <h3 className="text-2xl font-bold text-ink text-center mb-2">
                Boost your plan with add-ons
              </h3>
              <p className="text-slate-500 text-center mb-8 text-sm">
                Available on all paid plans
              </p>
              <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto">
                {addOns.map((addon, i) => (
                  <motion.div
                    key={addon.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="bg-white border border-slate-200 rounded-2xl p-5 text-center hover:border-[#4F5FE8]/30 hover:shadow-md transition-all duration-200 group"
                  >
                    <h4 className="text-base font-bold text-ink mb-1">
                      {addon.name}
                    </h4>
                    <p className="text-xl font-extrabold text-[#4F5FE8] mb-2">
                      {addon.price}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {addon.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Enterprise CTA ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="gradient-bg rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-white rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
              </div>
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6 text-white/80" />
                    <h3 className="text-2xl font-bold">
                      Need a custom solution?
                    </h3>
                  </div>
                  <p className="text-white/70 max-w-lg text-sm leading-relaxed">
                    Enterprise plans include SSO, SLA guarantees, custom
                    integrations, unlimited users, and 24/7 dedicated support
                    tailored to your organization.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 text-sm font-bold bg-white text-[#1E2D6B] rounded-full transition-all duration-200 hover:bg-white/90 hover:shadow-xl whitespace-nowrap"
                >
                  Contact Sales
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Feature Comparison ── */}
        <section className="section surface-arctic">
          <div className="max-w-[1440px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="badge badge-gradient mb-4 inline-block">
                Full Breakdown
              </span>
              <h2 className="text-3xl font-bold text-ink mb-3">
                Compare every feature
              </h2>
              <p className="text-slate-500 max-w-lg mx-auto text-sm">
                See exactly what&apos;s included in each plan so you can choose
                the perfect fit.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full min-w-[960px]">
                  {/* Sticky header */}
                  <thead className="sticky top-0 z-20">
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="text-left py-4 pl-6 pr-4 font-semibold text-slate-500 text-xs uppercase tracking-wider w-[200px]">
                        Feature
                      </th>
                      {plans.map((plan) => (
                        <th
                          key={plan.name}
                          className={`text-center py-4 px-3 font-bold text-sm ${
                            plan.popular
                              ? "bg-[#1E2D6B]/5 border-x-2 border-t-2 border-[#1E2D6B]/20"
                              : ""
                          }`}
                        >
                          <div
                            className={
                              plan.popular
                                ? "text-[#1E2D6B]"
                                : "text-ink"
                            }
                          >
                            {plan.name}
                          </div>
                          {plan.popular && (
                            <span className="inline-block mt-1 text-[10px] font-bold gradient-bg text-white px-2 py-0.5 rounded-full">
                              POPULAR
                            </span>
                          )}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature, fi) => {
                      const rows: React.ReactNode[] = [];

                      // Category header
                      if (feature.category) {
                        rows.push(
                          <tr key={`cat-${feature.category}`}>
                            <td
                              colSpan={7}
                              className="bg-slate-50/70 border-y border-slate-100"
                            >
                              <div className="py-3 pl-6 flex items-center gap-2">
                                <div className="w-1 h-4 rounded-full gradient-bg" />
                                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                                  {feature.category}
                                </span>
                              </div>
                            </td>
                          </tr>
                        );
                      }

                      // Feature row
                      rows.push(
                        <tr
                          key={feature.name}
                          className="border-b border-slate-50 transition-colors duration-150 hover:bg-slate-50/60 group/row"
                        >
                          <td className="py-3.5 pl-6 pr-4 text-sm text-slate-600 font-medium">
                            {feature.name}
                          </td>
                          {planKeys.map((key) => {
                            const plan = plans.find(
                              (p) => p.name.toLowerCase() === key
                            );
                            const isPopular = plan?.popular ?? false;
                            return (
                              <td
                                key={key}
                                className={`text-center py-3.5 px-3 ${
                                  isPopular
                                    ? "bg-[#1E2D6B]/[0.02] border-x-2 border-[#1E2D6B]/20"
                                    : ""
                                }`}
                              >
                                <ComparisonCell
                                  value={feature[key]}
                                  isPopular={isPopular}
                                  isProgressBar={feature.isProgressBar}
                                  maxValue={feature.maxValue}
                                />
                              </td>
                            );
                          })}
                        </tr>
                      );

                      return rows;
                    })}
                    {/* Bottom CTA row */}
                    <tr>
                      <td className="py-5 pl-6 pr-4" />
                      {plans.map((plan) => (
                        <td
                          key={plan.name}
                          className={`text-center py-5 px-3 ${
                            plan.popular
                              ? "bg-[#1E2D6B]/[0.02] border-x-2 border-b-2 border-[#1E2D6B]/20 rounded-b-xl"
                              : ""
                          }`}
                        >
                          <Link
                            href={plan.href}
                            className={`cursor-pointer inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                              plan.popular
                                ? "btn-primary text-white"
                                : "bg-slate-100 text-ink hover:bg-slate-200"
                            }`}
                          >
                            {plan.cta}
                          </Link>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl gradient-bg p-12 md:p-20"
            >
              <div className="absolute inset-0 opacity-15">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              </div>
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
                  Ready to see the ROI?
                </h2>
                <p className="text-lg text-white/70 mb-10 max-w-xl">
                  Start with 15 free minutes. No credit card required. See how
                  much revenue you can recover.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/signup"
                    className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1E2D6B] rounded-full font-bold text-sm transition-all duration-200 hover:bg-white/90 hover:shadow-xl"
                  >
                    Start free trial
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white rounded-full font-bold text-sm transition-all duration-200 hover:bg-white/10"
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
