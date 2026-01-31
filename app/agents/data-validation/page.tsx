"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Check, ArrowRight, Database, TrendingDown, Building2, ShoppingBag, Briefcase, HeartPulse, Plus, Minus } from "lucide-react";
import { useState } from "react";

const painStats = [
  {
    stat: "30%",
    description: "of CRM data decays every year",
    source: "Gartner",
  },
  {
    stat: "$12.9M",
    description: "average annual cost of bad data per company",
    source: "Gartner",
  },
  {
    stat: "40%",
    description: "of business objectives fail due to inaccurate data",
    source: "IBM",
  },
  {
    stat: "27%",
    description: "of revenue is wasted due to inaccurate contact data",
    source: "D&B",
  },
];

const features = [
  {
    title: "Phone Verification",
    description: "Confirm phone numbers are active and reach the right person.",
    icon: "📞",
  },
  {
    title: "Email Validation",
    description: "Update outdated email addresses and confirm correct contacts.",
    icon: "📧",
  },
  {
    title: "Address Updates",
    description: "Verify and update physical addresses for businesses that moved.",
    icon: "📍",
  },
  {
    title: "Business Confirmation",
    description: "Confirm businesses are still operating and get current info.",
    icon: "🏢",
  },
  {
    title: "Decision Maker ID",
    description: "Identify the right contacts and their direct information.",
    icon: "👤",
  },
  {
    title: "Auto Follow-ups",
    description: "Automatically retry contacts who didn't answer the first time.",
    icon: "🔄",
  },
];

const industries = [
  {
    icon: Building2,
    title: "B2B Sales Teams",
    description: "Clean your prospect lists before outreach campaigns. Stop wasting sales time on disconnected numbers and wrong contacts.",
    painPoint: "Reps waste 2+ hours/day on bad data",
    result: "95% data accuracy, 40% more selling time",
  },
  {
    icon: ShoppingBag,
    title: "Marketing Teams",
    description: "Ensure your email and direct mail campaigns reach real people. Reduce bounce rates and improve campaign ROI.",
    painPoint: "25% of marketing budget wasted on bad contacts",
    result: "3x better campaign performance",
  },
  {
    icon: Briefcase,
    title: "Financial Services",
    description: "Meet compliance requirements with verified customer information. Reduce risk from outdated KYC data.",
    painPoint: "Compliance risk from stale data",
    result: "100% audit-ready databases",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Providers",
    description: "Keep patient contact information current for appointment reminders and critical health communications.",
    painPoint: "Missed patient communications",
    result: "98% reachable patient database",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Upload your contacts",
    description: "Import your contact list via CSV or connect directly to your CRM. We support Salesforce, HubSpot, and more.",
  },
  {
    step: "02",
    title: "Configure verification",
    description: "Choose what data points to verify: phone, email, address, company status, decision maker info.",
  },
  {
    step: "03",
    title: "AI makes the calls",
    description: "Our AI agent calls each contact, verifies information naturally, and updates records in real-time.",
  },
  {
    step: "04",
    title: "Export clean data",
    description: "Download verified contacts with clear status tags: Verified, Updated, Bad Data, or Retry Needed.",
  },
];

const faqs = [
  {
    question: "How accurate is the data verification?",
    answer: "Our AI verification achieves 95%+ accuracy by having real conversations with contacts. Unlike email ping tools or database lookups, we actually speak with people to confirm their information is current.",
  },
  {
    question: "How long does verification take?",
    answer: "A typical list of 1,000 contacts can be fully verified in 24-48 hours. We make calls during business hours in each contact's timezone for maximum reach rates.",
  },
  {
    question: "What happens if someone doesn't answer?",
    answer: "We automatically retry unanswered calls up to 3 times at different times of day. Contacts that remain unreachable are flagged for manual review.",
  },
  {
    question: "Can I verify international contacts?",
    answer: "Yes, we support verification calls in 29 languages including Spanish, French, German, Portuguese, and more. Each call uses a native-speaking AI voice.",
  },
  {
    question: "How does this integrate with my CRM?",
    answer: "We offer native integrations with Salesforce, HubSpot, and Pipedrive. For other CRMs, you can use our API, Zapier integration, or simple CSV import/export.",
  },
];

const testimonials = [
  {
    quote: "We cleaned 50,000 contacts in a week. Our email deliverability jumped from 72% to 96%. This would have taken our team months.",
    author: "Sarah Chen",
    title: "VP of Marketing",
    company: "TechScale Inc",
  },
  {
    quote: "Before Callengo, our sales reps wasted hours calling wrong numbers. Now they only talk to verified contacts. Close rates are up 35%.",
    author: "Michael Rodriguez",
    title: "Sales Director",
    company: "Enterprise Solutions",
  },
];

export default function DataValidationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-bg-subtle text-primary text-sm font-medium mb-6">
                  <Database className="w-4 h-4" />
                  Data Validation Agent
                </div>

                <h1 className="text-display-sm md:text-display mb-6">
                  Stop wasting money on
                  <br />
                  <span className="gradient-text">bad data</span>
                </h1>

                <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
                  Your CRM is full of outdated contacts costing you campaigns, wasting rep time,
                  and killing deals. Clean your database automatically with AI-powered verification calls.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <Link href="/signup" className="btn btn-primary">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/contact" className="btn btn-secondary">
                    Talk to Sales
                  </Link>
                </div>

                <div className="flex flex-wrap gap-8 text-sm">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Check className="w-5 h-5 text-green-600" />
                    <span><strong>95%+</strong> accuracy rate</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Check className="w-5 h-5 text-green-600" />
                    <span><strong>80%</strong> cost reduction vs manual</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Check className="w-5 h-5 text-green-600" />
                    <span><strong>100x</strong> faster than human teams</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pain Statistics */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Bad data is costing you more than you think
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {painStats.map((item, index) => (
                <motion.div
                  key={item.stat}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text">
                    {item.stat}
                  </div>
                  <p className="text-slate-300 mb-2">{item.description}</p>
                  <p className="text-xs text-slate-500">Source: {item.source}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-display-sm mb-6">
                Clean your database in <span className="gradient-text">4 simple steps</span>
              </h2>
              <p className="text-xl text-slate-600">
                No complex setup. No technical expertise required. Just upload and verify.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-7xl font-bold text-slate-100 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="section bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mb-16"
            >
              <h2 className="text-display-sm mb-6">
                Everything you need for <span className="gradient-text">clean data</span>
              </h2>
              <p className="text-xl text-slate-600">
                Our Data Validation Agent handles all aspects of contact verification
                so you can trust your database.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-display-sm mb-6">
                Built for teams that <span className="gradient-text">depend on data</span>
              </h2>
              <p className="text-xl text-slate-600">
                Whether you are in sales, marketing, or operations - bad data is killing your results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-6">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                  <p className="text-slate-600 mb-4">{industry.description}</p>

                  <div className="flex flex-col gap-2 pt-4 border-t border-slate-100">
                    <div className="flex items-start gap-2">
                      <TrendingDown className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-slate-500">{industry.painPoint}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-sm font-medium text-green-700">{industry.result}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="section gradient-bg text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                  See exactly what you get
                </h2>
                <p className="text-xl text-white/70 mb-8">
                  After each verification campaign, every contact is categorized
                  with clear, actionable status tags.
                </p>

                <ul className="space-y-4">
                  {[
                    "Verified contacts ready for outreach",
                    "Updated information synced to your CRM",
                    "Bad data flagged for removal",
                    "Unreachable contacts queued for retry",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl p-8 text-slate-900">
                  <h3 className="font-semibold mb-6">Typical Campaign Results</h3>
                  <div className="space-y-4">
                    {[
                      { label: "Fully Verified", value: 65, color: "bg-green-500" },
                      { label: "Updated Info", value: 15, color: "bg-blue-500" },
                      { label: "Bad Data Removed", value: 12, color: "bg-red-500" },
                      { label: "No Answer (Retry)", value: 8, color: "bg-slate-400" },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex justify-between mb-1 text-sm">
                          <span className="text-slate-600">{item.label}</span>
                          <span className="font-medium">{item.value}%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full">
                          <div
                            className={`h-full ${item.color} rounded-full transition-all`}
                            style={{ width: `${item.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-display-sm">
                Trusted by <span className="gradient-text">data-driven teams</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-slate-200"
                >
                  <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-slate-500">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Teaser */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="gradient-border p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                    Simple, transparent pricing
                  </h2>
                  <p className="text-slate-600 mb-6">
                    Pay only for verified contacts. No setup fees, no hidden costs.
                    Start with 15 free minutes to test with your own data.
                  </p>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-bold">$0.50</span>
                    <span className="text-slate-500">per verified contact (avg)</span>
                  </div>
                  <Link href="/pricing" className="btn btn-primary">
                    View Full Pricing
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>15 free minutes to start</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>No credit card required for trial</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Cancel anytime, no contracts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Volume discounts available</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section bg-slate-50">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-display-sm mb-4">
                Frequently asked <span className="gradient-text">questions</span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl border border-slate-200"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-medium pr-4">{faq.question}</span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      openFaq === index ? "gradient-bg text-white" : "bg-slate-100 text-slate-600"
                    }`}>
                      {openFaq === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-slate-600">
                      {faq.answer}
                    </div>
                  )}
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
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              </div>

              <div className="relative z-10 max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
                  Ready to clean your database?
                </h2>
                <p className="text-xl text-white/70 mb-10 max-w-xl">
                  Start with 15 free minutes and see how much bad data is costing you.
                  No credit card required.
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
