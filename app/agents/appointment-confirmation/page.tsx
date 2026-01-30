"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Calendar,
  Check,
  ArrowRight,
  Clock,
  CalendarCheck,
  CalendarX,
  Phone,
  Bell,
  RefreshCw,
  TrendingUp,
  DollarSign,
  Users,
  Building2,
  Stethoscope,
  Scissors,
  Car,
  Briefcase,
} from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Automated Confirmation Calls",
    description:
      "AI calls patients/clients 24-48 hours before their appointment to confirm attendance.",
  },
  {
    icon: CalendarCheck,
    title: "Easy Rescheduling",
    description:
      "If they can't make it, the agent offers alternative times and reschedules on the spot.",
  },
  {
    icon: Bell,
    title: "Smart Voicemail",
    description:
      "Detects voicemail automatically and leaves a personalized reminder message.",
  },
  {
    icon: RefreshCw,
    title: "Automatic Follow-ups",
    description:
      "Retry contacts who didn't answer until you get a confirmed response.",
  },
  {
    icon: Clock,
    title: "Timezone Aware",
    description:
      "Calls at appropriate times based on the customer's local timezone.",
  },
  {
    icon: Calendar,
    title: "Calendar Integration",
    description:
      "Sync with your scheduling system to automatically trigger confirmation calls.",
  },
];

const results = [
  {
    metric: "60%",
    label: "Reduction in No-Shows",
    description: "Average across all industries",
  },
  {
    metric: "85%",
    label: "Confirmation Rate",
    description: "Percentage of appointments confirmed",
  },
  {
    metric: "$500+",
    label: "Saved Per Week",
    description: "Average for small businesses",
  },
  {
    metric: "0 hrs",
    label: "Staff Time",
    description: "Zero manual calling required",
  },
];

const industries = [
  {
    icon: Stethoscope,
    name: "Healthcare",
    description: "Medical clinics, dental offices, therapy practices",
  },
  {
    icon: Scissors,
    name: "Beauty & Wellness",
    description: "Hair salons, spas, fitness studios",
  },
  {
    icon: Car,
    name: "Auto Services",
    description: "Repair shops, car dealerships, detailing",
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    description: "Law firms, consulting, financial advisors",
  },
];

export default function AppointmentConfirmationPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="text-sm font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                    AI Agent
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Appointment Confirmation{" "}
                  <span className="gradient-text">Agent</span>
                </h1>

                <p className="text-xl text-foreground-secondary mb-8 leading-relaxed">
                  Stop losing money to empty appointment slots. Automatically
                  confirm, reschedule, and remind clients 24-48 hours before
                  their appointments.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Link href="/signup" className="btn btn-primary">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="#demo" className="btn btn-secondary">
                    See Demo
                  </Link>
                </div>

                <div className="flex flex-wrap gap-6 text-sm text-foreground-secondary">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent-dark" />
                    60% fewer no-shows
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent-dark" />
                    85% confirmation rate
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent-dark" />
                    Zero staff time
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-background rounded-3xl border border-border p-8 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Sample Confirmation Call</div>
                      <div className="text-sm text-foreground-tertiary">
                        Typical conversation flow
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div className="bg-secondary/5 p-4 rounded-xl">
                      <div className="text-xs text-secondary font-medium mb-1">
                        AI Agent
                      </div>
                      <p>
                        "Hello! I'm calling from Smile Dental to confirm your
                        appointment tomorrow at 3pm with Dr. Garcia. Can you
                        confirm you'll be there?"
                      </p>
                    </div>
                    <div className="bg-background-secondary p-4 rounded-xl ml-8">
                      <div className="text-xs text-foreground-tertiary font-medium mb-1">
                        Patient
                      </div>
                      <p>"I can't make it tomorrow. Something came up."</p>
                    </div>
                    <div className="bg-secondary/5 p-4 rounded-xl">
                      <div className="text-xs text-secondary font-medium mb-1">
                        AI Agent
                      </div>
                      <p>
                        "No problem! Would you like to reschedule? We have
                        openings on Friday morning or next Monday afternoon."
                      </p>
                    </div>
                    <div className="bg-background-secondary p-4 rounded-xl ml-8">
                      <div className="text-xs text-foreground-tertiary font-medium mb-1">
                        Patient
                      </div>
                      <p>"Friday morning works for me."</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="text-xs text-foreground-tertiary mb-2">
                      Result
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs">
                        Rescheduled
                      </span>
                      <span className="px-3 py-1 bg-accent/10 text-accent-dark rounded-full text-xs">
                        Slot Filled
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results Stats */}
        <section className="py-16 bg-gradient-to-r from-secondary to-secondary-dark text-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {results.map((result, index) => (
                <motion.div
                  key={result.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {result.metric}
                  </div>
                  <div className="font-medium mb-1">{result.label}</div>
                  <div className="text-sm text-white/60">{result.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Never Miss an{" "}
                <span className="gradient-text">Appointment Again</span>
              </h2>
              <p className="text-lg text-foreground-secondary">
                Our Appointment Confirmation Agent handles every aspect of
                appointment management.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-foreground-secondary text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator Preview */}
        <section className="section bg-background-secondary">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Calculate Your{" "}
                  <span className="gradient-text">Savings</span>
                </h2>
                <p className="text-lg text-foreground-secondary mb-8">
                  Every no-show costs you money. See how much you could save with
                  automated confirmations.
                </p>

                <div className="bg-background rounded-2xl border border-border p-6 space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Appointments per week
                    </label>
                    <input
                      type="number"
                      defaultValue={50}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Current no-show rate (%)
                    </label>
                    <input
                      type="number"
                      defaultValue={25}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Revenue per appointment ($)
                    </label>
                    <input
                      type="number"
                      defaultValue={150}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-secondary to-secondary-dark rounded-3xl p-8 text-white">
                  <DollarSign className="w-10 h-10 mb-6 opacity-70" />
                  <h3 className="text-2xl font-bold mb-6">Estimated Savings</h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center pb-4 border-b border-white/20">
                      <span className="text-white/70">Current weekly loss</span>
                      <span className="text-2xl font-bold">$1,875</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-white/20">
                      <span className="text-white/70">With Callengo (60% reduction)</span>
                      <span className="text-2xl font-bold">$750</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Weekly savings</span>
                      <span className="text-3xl font-bold text-accent">
                        $1,125
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-sm text-white/70 mb-1">
                      Annual savings potential
                    </div>
                    <div className="text-4xl font-bold">$58,500</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="section">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built for{" "}
                <span className="gradient-text">Your Industry</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <industry.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">{industry.name}</h3>
                  <p className="text-sm text-foreground-secondary">
                    {industry.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-gradient-to-br from-secondary via-secondary-dark to-navy text-white">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Eliminate No-Shows?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Start confirming appointments automatically with 15 free minutes.
                No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/signup"
                  className="btn bg-white text-secondary hover:bg-white/90 px-8 py-4"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/contact"
                  className="btn border border-white/30 text-white hover:bg-white/10 px-8 py-4"
                >
                  Talk to Sales
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
