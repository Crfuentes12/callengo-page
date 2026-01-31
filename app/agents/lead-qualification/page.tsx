"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Check, ArrowRight, Clock, TrendingUp, Phone, Users, Zap, Target, ChevronDown, Building2, Home, Briefcase, Shield } from "lucide-react";

const painStats = [
  {
    value: "78%",
    label: "of deals go to the vendor that responds first",
    source: "Lead Response Management Study",
  },
  {
    value: "391%",
    label: "higher conversion when responding in under 1 minute",
    source: "Velocify Research",
  },
  {
    value: "80%",
    label: "of leads are lost after just 5 minutes of delay",
    source: "InsideSales.com",
  },
  {
    value: "35-50%",
    label: "of sales go to the vendor that responds first",
    source: "Harvard Business Review",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Lead captured",
    description: "Form submission, ad click, or CRM trigger fires instantly",
    icon: Target,
  },
  {
    step: "02",
    title: "Instant call",
    description: "AI calls within 60 seconds—before competitors even notice",
    icon: Phone,
  },
  {
    step: "03",
    title: "BANT qualification",
    description: "Budget, Authority, Need, Timeline assessed automatically",
    icon: Users,
  },
  {
    step: "04",
    title: "Handoff to sales",
    description: "Hot leads transferred live or scheduled for callback",
    icon: Zap,
  },
];

const features = [
  {
    title: "Sub-60-Second Response",
    description: "Every lead gets a call within 60 seconds of submission. No more cold leads.",
  },
  {
    title: "BANT Framework Built-In",
    description: "Automatically assess Budget, Authority, Need, and Timeline on every call.",
  },
  {
    title: "Custom Qualification Questions",
    description: "Add your specific qualifying criteria beyond standard BANT questions.",
  },
  {
    title: "Dynamic Lead Scoring",
    description: "Score leads in real-time based on responses, engagement, and fit.",
  },
  {
    title: "Live Warm Transfer",
    description: "Transfer hot leads directly to available sales reps while engaged.",
  },
  {
    title: "CRM Auto-Updates",
    description: "Push qualification data, scores, and call notes to your CRM instantly.",
  },
  {
    title: "Multi-Language Support",
    description: "Qualify leads in English, Spanish, French, and 20+ other languages.",
  },
  {
    title: "Objection Handling",
    description: "AI handles common objections and keeps leads engaged through qualification.",
  },
];

const industries = [
  {
    name: "B2B SaaS",
    icon: Building2,
    pain: "Inbound demo requests going cold",
    solution: "Instant response to trial signups and demo requests with qualification",
    stat: "3x more demos booked",
  },
  {
    name: "Real Estate",
    icon: Home,
    pain: "Buyer inquiries lost to faster agents",
    solution: "Immediate callback on property inquiries with availability check",
    stat: "47% more showings scheduled",
  },
  {
    name: "Financial Services",
    icon: Briefcase,
    pain: "Loan and insurance leads decaying fast",
    solution: "Instant pre-qualification with compliance-ready scripts",
    stat: "62% higher application completion",
  },
  {
    name: "Insurance",
    icon: Shield,
    pain: "Quote requests going to competitors",
    solution: "Immediate quote request follow-up with needs assessment",
    stat: "2.5x more policies quoted",
  },
];

const testimonials = [
  {
    quote: "We went from 45-minute average response time to under 60 seconds. Our demo-to-close rate doubled in the first month.",
    author: "Sarah Chen",
    role: "VP Sales",
    company: "TechFlow SaaS",
    result: "2x demo-to-close rate",
  },
  {
    quote: "Speed-to-lead was killing us. Now every inquiry gets an immediate call, and our competitors can't figure out how we're always first.",
    author: "Michael Torres",
    role: "Team Lead",
    company: "Premier Realty Group",
    result: "78% win rate vs competitors",
  },
  {
    quote: "Our SDRs used to spend 70% of their time on unqualified leads. Now they only talk to prospects who are actually ready to buy.",
    author: "Jennifer Walsh",
    role: "Director of Revenue",
    company: "FinanceFirst",
    result: "50% SDR time saved",
  },
];

const faqItems = [
  {
    question: "How fast does Callengo actually respond to leads?",
    answer: "Within 60 seconds of form submission. Our average response time is 23 seconds. The AI is triggered instantly when a lead comes in via webhook, Zapier, or direct CRM integration.",
  },
  {
    question: "Can the AI handle complex qualification questions?",
    answer: "Yes. Beyond standard BANT, you can add unlimited custom questions. The AI uses natural conversation to gather information, handles follow-up questions, and adapts based on responses.",
  },
  {
    question: "What happens if a lead wants to speak to a human?",
    answer: "Three options: 1) Live warm transfer to an available rep, 2) Schedule a callback at a convenient time, or 3) Send a notification to your team for immediate follow-up. You control the workflow.",
  },
  {
    question: "How does lead scoring work?",
    answer: "Leads are scored based on their responses to qualification questions, engagement level during the call, and fit with your ICP criteria. Scores sync to your CRM in real-time so your team can prioritize.",
  },
  {
    question: "Does it integrate with my existing tech stack?",
    answer: "Yes. Native integrations with Salesforce, HubSpot, Pipedrive, and Zoho. Plus Zapier and REST API for custom workflows. Lead data flows both ways—we pull context and push results.",
  },
  {
    question: "What if someone doesn't answer the first call?",
    answer: "Configurable follow-up sequences. You set the number of attempts, timing, and whether to leave voicemails. Most customers see 70%+ connect rates with optimal follow-up timing.",
  },
];

const pricingTiers = [
  { name: "Starter", minutes: "100", price: "Free", note: "No credit card required" },
  { name: "Growth", minutes: "1,000", price: "$299/mo", note: "Most popular" },
  { name: "Scale", minutes: "5,000", price: "$999/mo", note: "Volume discount" },
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
                  <Clock className="w-4 h-4" />
                  Average response time: 23 seconds
                </div>

                <h1 className="text-display-sm mb-6">
                  Be first.{" "}
                  <span className="gradient-text">Win more deals.</span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  78% of deals go to the first responder. Every minute you wait,
                  your conversion rate drops. Stop losing leads to faster competitors.
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
                    Sub-60-second response
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    BANT qualification
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Live warm transfer
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Speed-to-Lead Visualization */}
                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                  <h3 className="font-semibold mb-6 text-center">The Speed-to-Lead Gap</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm text-slate-600">You</div>
                      <div className="flex-1 bg-slate-100 rounded-full h-8 overflow-hidden">
                        <div className="gradient-bg h-full rounded-full flex items-center justify-end pr-3" style={{ width: "15%" }}>
                          <span className="text-white text-xs font-medium">23s</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm text-slate-600">Avg competitor</div>
                      <div className="flex-1 bg-slate-100 rounded-full h-8 overflow-hidden">
                        <div className="bg-slate-300 h-full rounded-full flex items-center justify-end pr-3" style={{ width: "85%" }}>
                          <span className="text-slate-600 text-xs font-medium">47 min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 mt-6 text-center">
                    Source: Lead Response Management Study
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
                Every minute costs you <span className="gradient-text">money</span>
              </h2>
              <p className="text-lg text-slate-600">
                The data is clear: speed wins. Here's what the research says about lead response time.
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
                From lead to <span className="gradient-text">qualified</span> in seconds
              </h2>
              <p className="text-lg text-slate-600">
                No more manual follow-ups. No more cold leads. Every inquiry gets
                immediate attention and proper qualification.
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
                BANT Qualification, Automated
              </h2>
              <p className="text-lg text-white/70">
                The proven framework for qualifying leads—now handled automatically on every call.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  letter: "B",
                  title: "Budget",
                  question: "Do they have budget allocated?",
                  example: '"What budget range are you working with?"',
                },
                {
                  letter: "A",
                  title: "Authority",
                  question: "Are they a decision maker?",
                  example: '"Who else is involved in this decision?"',
                },
                {
                  letter: "N",
                  title: "Need",
                  question: "Do they have a clear problem?",
                  example: '"What challenges are you facing today?"',
                },
                {
                  letter: "T",
                  title: "Timeline",
                  question: "When do they need a solution?",
                  example: '"When are you looking to have this in place?"',
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
                  <p className="text-white/50 text-sm italic">{item.example}</p>
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
                Everything you need to <span className="gradient-text">qualify faster</span>
              </h2>
              <p className="text-lg text-slate-600">
                Built for speed, designed for conversion.
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
                Speed-to-lead matters everywhere, but especially in high-velocity sales.
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
                Trusted by <span className="gradient-text">sales teams</span> everywhere
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
                Pay for what you use. Start free, scale as you grow.
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
                  <div className="text-sm text-slate-500">{tier.minutes} minutes/month</div>
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
                  className="gradient-border rounded-2xl"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                  >
                    <span className="font-medium">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform flex-shrink-0 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-slate-600">{item.answer}</p>
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
                  Stop losing leads to faster competitors
                </h2>
                <p className="text-xl text-white/70 mb-10 max-w-xl">
                  Start with 100 free minutes. See what happens when you respond
                  to every lead in under 60 seconds.
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
