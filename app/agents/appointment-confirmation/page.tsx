"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Check, ArrowRight, Calendar, TrendingDown, HeartPulse, Scissors, Briefcase, Home, Plus, Minus, DollarSign, Clock, Users } from "lucide-react";
import { useState } from "react";

const painStats = [
  {
    stat: "$150B",
    description: "lost annually to no-shows in healthcare alone",
    source: "SCI Solutions",
  },
  {
    stat: "23%",
    description: "average no-show rate across industries",
    source: "Healthcare Finance",
  },
  {
    stat: "$200",
    description: "average cost per missed appointment",
    source: "MGMA",
  },
  {
    stat: "67%",
    description: "of no-shows could be prevented with confirmation calls",
    source: "Acuity Scheduling",
  },
];

const features = [
  {
    title: "Automated Reminders",
    description: "Call patients/clients 24-48 hours before their appointments.",
    icon: "📞",
  },
  {
    title: "Rescheduling Support",
    description: "Let customers reschedule directly during the call.",
    icon: "📅",
  },
  {
    title: "Cancellation Handling",
    description: "Capture cancellations early to fill empty slots.",
    icon: "🔔",
  },
  {
    title: "Multi-attempt Outreach",
    description: "Automatic retries if the first call isn't answered.",
    icon: "🔄",
  },
  {
    title: "Calendar Sync",
    description: "Real-time updates to your scheduling system.",
    icon: "🗓️",
  },
  {
    title: "Custom Scripts",
    description: "Personalized messages for your brand and service.",
    icon: "✍️",
  },
];

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare & Medical",
    description: "Reduce patient no-shows for clinics, dentists, specialists, and hospitals. Every empty chair costs you money and delays care.",
    painPoint: "20-30% no-show rate, $150+ per missed appointment",
    result: "Reduce no-shows by 60%, recover $1,000s weekly",
    examples: "Dental offices, medical clinics, specialists, hospitals",
  },
  {
    icon: Scissors,
    title: "Salons & Spas",
    description: "Keep your stylists busy and your appointment book full. No more lost revenue from last-minute cancellations.",
    painPoint: "15-25% no-show rate, idle stylists",
    result: "Fill 90%+ of time slots, happier staff",
    examples: "Hair salons, nail salons, spas, barbershops",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Confirm consultations for lawyers, accountants, financial advisors, and consultants. Your time is billable - protect it.",
    painPoint: "Missed consultations = lost billable hours",
    result: "Increase billable time by 20%",
    examples: "Law firms, accounting firms, consultants",
  },
  {
    icon: Home,
    title: "Home Services",
    description: "Ensure customers are home for HVAC, plumbing, electrical, and repair appointments. Eliminate wasted service calls.",
    painPoint: "Wasted trips when customers aren&apos;t home",
    result: "95%+ customer-at-home rate",
    examples: "HVAC, plumbing, electrical, contractors",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Connect your calendar",
    description: "Sync with Google Calendar, Outlook, Calendly, or your practice management software.",
  },
  {
    step: "02",
    title: "Set your timing",
    description: "Choose when confirmation calls go out - 24 hours, 48 hours, or custom intervals.",
  },
  {
    step: "03",
    title: "Customize the script",
    description: "Personalize the message with your brand voice and include specific instructions.",
  },
  {
    step: "04",
    title: "Relax and save",
    description: "AI handles all calls, updates your calendar, and reports results automatically.",
  },
];

const faqs = [
  {
    question: "How far in advance should I confirm appointments?",
    answer: "We recommend 24-48 hours before the appointment. This gives customers time to reschedule while still being close enough that they remember. You can also set up multiple touchpoints - for example, a call 48 hours out and a reminder 24 hours out.",
  },
  {
    question: "What happens if someone wants to reschedule?",
    answer: "Our AI can offer available time slots and reschedule appointments directly during the call. The new appointment syncs immediately to your calendar. You set which slots are available for rescheduling.",
  },
  {
    question: "Can customers confirm via text instead of answering?",
    answer: "Yes! If a customer doesn't answer, we can send an SMS with a confirmation link. They can confirm, cancel, or request a reschedule via text. This increases your overall confirmation rate.",
  },
  {
    question: "How does this integrate with my scheduling software?",
    answer: "We integrate with Google Calendar, Outlook, Calendly, Acuity, and most practice management systems. For custom systems, we offer API integration and Zapier connections.",
  },
  {
    question: "What if I have multiple locations or providers?",
    answer: "Callengo supports multiple locations and providers on Teams and Enterprise plans. Each location can have its own calendar, scripts, and confirmation settings.",
  },
];

const testimonials = [
  {
    quote: "We went from 28% no-shows to 9% in the first month. That's recovering over $8,000 per week in lost revenue. The ROI is incredible.",
    author: "Dr. Jennifer Park",
    title: "Owner",
    company: "Smile Dental Group",
  },
  {
    quote: "My stylists used to have 3-4 empty slots per day from no-shows. Now we rarely have more than one. They're happier, I'm happier, clients are happier.",
    author: "Marcus Thompson",
    title: "Owner",
    company: "Prime Cuts Barbershop",
  },
];

const roiCalculation = {
  appointments: 50,
  noShowRate: 25,
  appointmentValue: 150,
  reductionRate: 60,
};

export default function AppointmentConfirmationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const weeklyLoss = roiCalculation.appointments * (roiCalculation.noShowRate / 100) * roiCalculation.appointmentValue;
  const weeklySavings = weeklyLoss * (roiCalculation.reductionRate / 100);
  const annualSavings = weeklySavings * 52;

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
                  <Calendar className="w-4 h-4" />
                  Appointment Confirmation Agent
                </div>

                <h1 className="text-display-sm md:text-display mb-6">
                  Fill your calendar,
                  <br />
                  <span className="gradient-text">not your voicemail</span>
                </h1>

                <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
                  Every empty time slot is lost revenue. Reduce no-shows by 60% with
                  automatic confirmation calls that keep your schedule full and your customers accountable.
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
                    <span><strong>60%</strong> fewer no-shows</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Check className="w-5 h-5 text-green-600" />
                    <span><strong>24-48hr</strong> advance notice</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Check className="w-5 h-5 text-green-600" />
                    <span><strong>Calendar sync</strong> included</span>
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
                No-shows are draining your business
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

        {/* ROI Calculator */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-display-sm mb-6">
                  Calculate your <span className="gradient-text">savings</span>
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  Every no-show costs you money. See how much you could recover
                  with automatic appointment confirmations.
                </p>

                <ul className="space-y-4">
                  {[
                    "60% average reduction in no-shows",
                    "Fill empty slots with rescheduled appointments",
                    "Save staff hours on manual calling",
                    "ROI in the first month for most businesses",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-700">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="gradient-border p-8">
                  <h3 className="font-semibold mb-6 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    Example Savings Calculator
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between pb-4 border-b border-slate-100">
                      <span className="text-slate-600">Appointments per week</span>
                      <span className="font-medium">{roiCalculation.appointments}</span>
                    </div>
                    <div className="flex justify-between pb-4 border-b border-slate-100">
                      <span className="text-slate-600">Current no-show rate</span>
                      <span className="font-medium">{roiCalculation.noShowRate}%</span>
                    </div>
                    <div className="flex justify-between pb-4 border-b border-slate-100">
                      <span className="text-slate-600">Avg appointment value</span>
                      <span className="font-medium">${roiCalculation.appointmentValue}</span>
                    </div>
                    <div className="flex justify-between pb-4 border-b border-slate-100">
                      <span className="text-slate-600">Current weekly loss</span>
                      <span className="font-semibold text-red-600">${weeklyLoss.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between pb-4 border-b border-slate-100">
                      <span className="text-slate-600">With Callengo (60% reduction)</span>
                      <span className="font-semibold text-green-600">+${weeklySavings.toLocaleString()}/week</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-100 text-center gradient-bg-subtle rounded-xl p-4">
                    <div className="text-sm text-slate-600 mb-1">Projected Annual Savings</div>
                    <div className="text-4xl font-bold gradient-text">${annualSavings.toLocaleString()}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-display-sm mb-6">
                Set it up once, <span className="gradient-text">save forever</span>
              </h2>
              <p className="text-xl text-slate-600">
                Connect your calendar and let AI handle the rest. No manual calling, no missed confirmations.
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
                  <div className="text-7xl font-bold text-slate-200 mb-4">
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
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mb-16"
            >
              <h2 className="text-display-sm mb-6">
                Everything you need to <span className="gradient-text">eliminate no-shows</span>
              </h2>
              <p className="text-xl text-slate-600">
                Powerful features that work together to keep your calendar full
                and your revenue protected.
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
        <section className="section gradient-bg text-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Built for appointment-based businesses
              </h2>
              <p className="text-xl text-white/70">
                Whether you run a medical practice, salon, or service business -
                every empty slot is money lost.
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
                  className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                  <p className="text-white/70 mb-4">{industry.description}</p>

                  <div className="text-sm text-white/50 mb-4">{industry.examples}</div>

                  <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                    <div className="flex items-start gap-2">
                      <TrendingDown className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-sm text-white/60">{industry.painPoint}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-sm font-medium text-green-400">{industry.result}</span>
                    </div>
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
              className="text-center mb-16"
            >
              <h2 className="text-display-sm">
                Businesses are <span className="gradient-text">recovering revenue</span>
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
                  className="bg-slate-50 rounded-2xl p-8"
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
        <section className="section bg-slate-50">
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
                    Pays for itself in the first week
                  </h2>
                  <p className="text-slate-600 mb-6">
                    Most businesses recover their monthly Callengo cost with just
                    1-2 prevented no-shows. Start free and see results immediately.
                  </p>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-bold">$99</span>
                    <span className="text-slate-500">/month for 500 confirmation calls</span>
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
                    <span>Calendar integrations included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>SMS fallback available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Cancel anytime, no contracts</span>
                  </div>
                </div>
              </div>
            </motion.div>
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
                  Ready to fill your calendar?
                </h2>
                <p className="text-xl text-white/70 mb-10 max-w-xl">
                  Start with 15 free minutes and see how much revenue you can recover from no-shows.
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
