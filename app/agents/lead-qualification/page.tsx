"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Check, ArrowRight, Target, TrendingUp, Phone, Users, Zap, Building2, Landmark, Cpu, ShoppingBag, BarChart3, Clock, Filter, Star, Plus, Minus } from "lucide-react";

const painStats = [
  {
    value: "67%",
    label: "of lost sales are due to reps chasing unqualified leads",
    source: "Marketing Sherpa",
  },
  {
    value: "50%",
    label: "of sales time is wasted on leads that will never buy",
    source: "Invesp",
  },
  {
    value: "79%",
    label: "of marketing leads never convert due to lack of qualification",
    source: "MarketingSherpa",
  },
  {
    value: "35%",
    label: "increase in close rate when leads are properly qualified",
    source: "Salesforce",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Upload your leads",
    description: "Import leads from any source - CSV, Excel, or manual entry",
    icon: Target,
  },
  {
    step: "02",
    title: "AI calls and qualifies",
    description: "Conversational call to assess fit using your criteria",
    icon: Phone,
  },
  {
    step: "03",
    title: "BANT scoring applied",
    description: "Budget, Authority, Need, Timeline scored automatically",
    icon: BarChart3,
  },
  {
    step: "04",
    title: "Ranked for your team",
    description: "Hot leads flagged, time-wasters filtered out",
    icon: Star,
  },
];

const features = [
  {
    title: "BANT Qualification",
    description: "Automatically assess Budget, Authority, Need, and Timeline on every call.",
  },
  {
    title: "Custom Scoring Criteria",
    description: "Add your own qualification questions beyond standard BANT framework.",
  },
  {
    title: "Lead Ranking",
    description: "Leads scored and ranked so your team knows exactly where to focus.",
  },
  {
    title: "Hot Lead Alerts",
    description: "Get notified instantly when a high-score lead is ready for follow-up.",
  },
  {
    title: "Time-Waster Filtering",
    description: "Low-score leads automatically deprioritized, saving your reps hours daily.",
  },
  {
    title: "Exportable Reports",
    description: "Download scores, notes, and call summaries as CSV or Excel.",
  },
  {
    title: "Multi-Language Support",
    description: "Qualify leads in English, Spanish, French, and 20+ other languages.",
  },
  {
    title: "Detailed Call Transcripts",
    description: "Full conversation logs so your team has context before follow-up.",
  },
];

const industries = [
  {
    name: "B2B SaaS",
    icon: Cpu,
    pain: "SDRs overwhelmed with unqualified demo requests",
    solution: "Pre-qualify every trial signup and demo request before your team calls",
    stat: "40% more qualified demos",
  },
  {
    name: "Financial Services",
    icon: Landmark,
    pain: "Advisors wasting time on non-serious inquiries",
    solution: "Score leads on assets, timeline, and investment readiness",
    stat: "2.5x higher conversion to clients",
  },
  {
    name: "Real Estate",
    icon: Building2,
    pain: "Agents can't tell serious buyers from browsers",
    solution: "Qualify on budget, pre-approval status, and timeline to buy",
    stat: "55% fewer wasted showings",
  },
  {
    name: "E-commerce B2B",
    icon: ShoppingBag,
    pain: "Sales team drowning in wholesale inquiries",
    solution: "Filter by order volume, payment terms, and business legitimacy",
    stat: "3x faster sales cycle",
  },
];

const testimonials = [
  {
    quote: "Our SDRs used to spend 70% of their day on leads that would never close. Now they only call the ones that are actually ready to buy. Productivity is through the roof.",
    author: "Sarah Chen",
    role: "VP Sales",
    company: "TechFlow SaaS",
    result: "70% more productive SDRs",
  },
  {
    quote: "We had 200 leads a week and no way to know which ones were real. Now every lead is scored before my team even sees it. The hot ones go straight to the top.",
    author: "Michael Torres",
    role: "Sales Director",
    company: "Capital Advisory Group",
    result: "3x higher close rate",
  },
  {
    quote: "Before Callengo, we treated every lead the same. Now we know exactly who's ready to buy and who's just browsing. Game changer for our conversion.",
    author: "Jennifer Walsh",
    role: "Director of Revenue",
    company: "HomeFirst Realty",
    result: "45% less time wasted",
  },
];

const faqItems = [
  {
    question: "How does the lead scoring work?",
    answer: "Each lead is scored based on their responses to qualification questions. We use BANT (Budget, Authority, Need, Timeline) as the foundation, plus any custom criteria you add. Scores range from 0-100, with configurable thresholds for 'hot', 'warm', and 'cold' classifications.",
  },
  {
    question: "Can I customize the qualification questions?",
    answer: "Absolutely. Beyond standard BANT, you can add unlimited custom questions specific to your business. Selling enterprise software? Ask about team size and current tools. Real estate? Ask about pre-approval status. The AI adapts the conversation naturally.",
  },
  {
    question: "What happens to low-scoring leads?",
    answer: "You decide. Options include: auto-assign to nurture campaigns, mark for future follow-up, or simply deprioritize in your CRM. No lead data is lost—they're just ranked lower so your team focuses on buyers first.",
  },
  {
    question: "How quickly are leads qualified?",
    answer: "Leads are called within minutes of upload. Each qualification call takes 3-5 minutes. Scores and call notes are available in your dashboard immediately after each call ends.",
  },
  {
    question: "How do I get the qualified leads back?",
    answer: "Export your scored leads as CSV or Excel with all qualification data, scores, and call transcripts. Simply import back into your CRM or sales tools. Native integrations are coming soon.",
  },
  {
    question: "What if a lead wants to speak to a human during qualification?",
    answer: "Three options: 1) Live warm transfer to an available rep, 2) Schedule a callback at a convenient time, or 3) Mark as high-priority for immediate follow-up. You control the workflow based on your team's availability.",
  },
];

const pricingTiers = [
  { name: "Starter", leads: "50", price: "Free", note: "No credit card required" },
  { name: "Growth", leads: "500", price: "$299/mo", note: "Most popular" },
  { name: "Scale", leads: "2,000", price: "$999/mo", note: "Volume discount" },
];

export default function LeadQualificationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-sm text-slate-600 mb-6">
                  <Filter className="w-4 h-4" />
                  Lead Qualification Agent
                </div>

                <h1 className="text-display-sm mb-6">
                  Stop chasing leads that{" "}
                  <span className="gradient-text">will never buy</span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Your sales team wastes 50% of their time on unqualified leads.
                  Let AI score and rank every lead so your reps only talk to buyers
                  who are actually ready to close.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Link href="/signup" className="btn btn-primary">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="btn bg-slate-100 text-slate-900 hover:bg-slate-200"
                  >
                    See a Demo
                  </Link>
                </div>

                <div className="flex flex-wrap gap-6 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    BANT scoring
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Custom criteria
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    CRM integration
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Lead Scoring Visualization */}
                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                  <h3 className="font-semibold mb-6 text-center">Your Leads, Ranked</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 rounded-xl bg-green-50 border border-green-200">
                      <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm">92</div>
                      <div className="flex-1">
                        <div className="font-medium text-green-800">Sarah M. — Hot Lead</div>
                        <div className="text-sm text-green-600">Budget confirmed, decision maker, needs solution now</div>
                      </div>
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    </div>
                    <div className="flex items-center gap-4 p-3 rounded-xl bg-yellow-50 border border-yellow-200">
                      <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-sm">67</div>
                      <div className="flex-1">
                        <div className="font-medium text-yellow-800">James K. — Warm Lead</div>
                        <div className="text-sm text-yellow-600">Budget TBD, evaluating in Q2</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center text-white font-bold text-sm">23</div>
                      <div className="flex-1">
                        <div className="font-medium text-slate-600">Mike T. — Cold Lead</div>
                        <div className="text-sm text-slate-500">No budget, just researching</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 mt-6 text-center">
                    Your team calls Sarah first. Mike goes to nurture.
                  </p>
                </div>
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full gradient-bg opacity-20 rounded-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pain Stats Section */}
        <section className="section bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Unqualified leads are <span className="gradient-text">killing productivity</span>
              </h2>
              <p className="text-lg text-slate-600">
                Your sales team can't tell buyers from browsers. Here's what that costs you.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {painStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-slate-200 p-6 text-center"
                >
                  <div className="text-4xl font-bold gradient-text mb-3">
                    {stat.value}
                  </div>
                  <p className="text-slate-600 mb-3">{stat.label}</p>
                  <p className="text-xs text-slate-400">{stat.source}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Every lead <span className="gradient-text">scored and ranked</span>
              </h2>
              <p className="text-lg text-slate-600">
                No more guessing which leads to call first. AI qualifies every lead
                so your team focuses on the ones ready to buy.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-6xl font-bold text-slate-100 mb-4">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 rounded-xl gradient-bg-subtle flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 right-0 w-1/2 h-px bg-slate-200" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* BANT Section */}
        <section className="section gradient-bg text-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                BANT Scoring, Automated
              </h2>
              <p className="text-lg text-white/70">
                The proven framework for qualifying leads—applied automatically to every conversation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  letter: "B",
                  title: "Budget",
                  question: "Do they have budget to buy?",
                  scoring: "High score: Budget confirmed. Low: No budget.",
                },
                {
                  letter: "A",
                  title: "Authority",
                  question: "Can they make the decision?",
                  scoring: "High score: Decision maker. Low: Just researching.",
                },
                {
                  letter: "N",
                  title: "Need",
                  question: "Do they have a real problem to solve?",
                  scoring: "High score: Urgent need. Low: Curious only.",
                },
                {
                  letter: "T",
                  title: "Timeline",
                  question: "When do they need to buy?",
                  scoring: "High score: This quarter. Low: Someday/maybe.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.letter}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6"
                >
                  <div className="text-4xl font-bold text-white/30 mb-2">
                    {item.letter}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm mb-3">{item.question}</p>
                  <p className="text-white/50 text-sm">{item.scoring}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Everything you need to <span className="gradient-text">prioritize better</span>
              </h2>
              <p className="text-lg text-slate-600">
                Built for sales teams who want to close more, not chase more.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-slate-300 transition-colors"
                >
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="section bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Built for <span className="gradient-text">your industry</span>
              </h2>
              <p className="text-lg text-slate-600">
                Every business has unqualified leads. Here's how we help filter them out.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-slate-200 p-8"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl gradient-bg-subtle flex items-center justify-center flex-shrink-0">
                      <industry.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{industry.name}</h3>
                      <p className="text-slate-500 text-sm">{industry.pain}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4">{industry.solution}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="font-medium text-green-600">{industry.stat}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Sales teams are <span className="gradient-text">closing more</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-slate-200 p-8"
                >
                  <p className="text-slate-600 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full gradient-bg-subtle flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">
                        {testimonial.author.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.author}</div>
                      <div className="text-sm text-slate-500">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-100">
                    <div className="text-sm text-slate-500">Result</div>
                    <div className="font-semibold gradient-text">{testimonial.result}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Teaser */}
        <section className="section bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Simple, transparent <span className="gradient-text">pricing</span>
              </h2>
              <p className="text-lg text-slate-600">
                Pay per lead qualified. Start free, scale as you grow.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-2xl border p-6 text-center ${
                    index === 1 ? "border-primary ring-2 ring-primary/20" : "border-slate-200"
                  }`}
                >
                  {tier.note && index === 1 && (
                    <div className="inline-flex px-3 py-1 rounded-full text-xs font-medium gradient-bg text-white mb-4">
                      {tier.note}
                    </div>
                  )}
                  <div className="text-lg font-medium mb-1">{tier.name}</div>
                  <div className="text-3xl font-bold mb-1">{tier.price}</div>
                  <div className="text-sm text-slate-500">{tier.leads} leads/month</div>
                  {tier.note && index !== 1 && (
                    <div className="text-xs text-slate-400 mt-2">{tier.note}</div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/pricing" className="text-primary font-medium hover:underline">
                View full pricing details →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                <span className="gradient-text">Questions?</span> We've got answers.
              </h2>
            </motion.div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div
                    className={`bg-white rounded-2xl border transition-all ${
                      openFaq === index
                        ? "border-slate-900 shadow-sm"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4"
                    >
                      <span className="font-medium">{item.question}</span>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        openFaq === index ? "gradient-bg text-white" : "bg-slate-100 text-slate-600"
                      }`}>
                        {openFaq === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              </div>

              <div className="relative z-10 max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
                  Stop wasting time on leads that won't buy
                </h2>
                <p className="text-xl text-white/70 mb-10 max-w-xl">
                  Start with 50 free lead qualifications. See how much time your
                  team saves when every lead is scored before they call.
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
