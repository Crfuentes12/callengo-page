"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Check, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Instant Response",
    description: "Call new leads within 60 seconds of form submission.",
  },
  {
    title: "BANT Qualification",
    description: "Assess Budget, Authority, Need, and Timeline automatically.",
  },
  {
    title: "Custom Questions",
    description: "Ask your specific qualifying questions during the call.",
  },
  {
    title: "Lead Scoring",
    description: "Automatically score and prioritize leads for your sales team.",
  },
  {
    title: "CRM Updates",
    description: "Push qualified leads and notes directly to your CRM.",
  },
  {
    title: "Handoff to Sales",
    description: "Warm transfer hot leads to available sales reps.",
  },
];

const stats = [
  { value: "<60s", label: "response time" },
  { value: "3x", label: "more qualified leads" },
  { value: "50%", label: "SDR time saved" },
  { value: "24/7", label: "coverage" },
];

const qualificationSteps = [
  {
    title: "Budget",
    description: "Do they have budget allocated for this solution?",
    example: '"What budget range are you working with for this project?"',
  },
  {
    title: "Authority",
    description: "Are they a decision maker or influencer?",
    example: '"Who else is involved in making this decision?"',
  },
  {
    title: "Need",
    description: "Do they have a clear problem we can solve?",
    example: '"What challenges are you facing with your current solution?"',
  },
  {
    title: "Timeline",
    description: "When are they looking to make a decision?",
    example: '"When are you looking to have a solution in place?"',
  },
];

export default function LeadQualificationPage() {
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
                <h1 className="text-display-sm mb-6">Be first, win more deals</h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  The fastest response wins. Reach every lead in seconds while
                  your competitors are still checking their inbox. Your sales team
                  only talks to prospects who are ready to buy.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Link href="/signup" className="btn btn-primary">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="btn bg-gray-100 text-dark hover:bg-gray-200"
                  >
                    Talk to Sales
                  </Link>
                </div>

                <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    60-second response time
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    BANT qualification
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
                <div className="aspect-square rounded-3xl bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400">Agent preview placeholder</span>
                </div>
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-gray-200 rounded-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section bg-dark text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* BANT Section */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mb-16"
            >
              <span className="badge badge-outline mb-4">Methodology</span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                BANT qualification, automated
              </h2>
              <p className="text-lg text-gray-600">
                Our AI asks the right questions to determine if a lead is worth
                your sales team's time.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {qualificationSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-gray-200 p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-bold text-gray-300">
                      {step.title[0]}
                    </span>
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <p className="text-sm text-gray-500 italic">{step.example}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="badge badge-outline mb-4">Features</span>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                  Never miss a hot lead again
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Speed-to-lead is everything. Our AI responds instantly while
                  your competitors are still checking their inbox.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="p-4 rounded-xl bg-white border border-gray-200"
                    >
                      <h3 className="font-medium mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-4-3 rounded-3xl bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400">Dashboard screenshot</span>
                </div>
                <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full bg-gray-200 rounded-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Speed to Lead Section */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="bg-white rounded-3xl border border-gray-200 p-8">
                  <h3 className="font-semibold mb-6">The Speed-to-Lead Advantage</h3>
                  <div className="space-y-6">
                    {[
                      { value: "78%", text: "of deals go to the vendor that responds first" },
                      { value: "5 min", text: "delay reduces lead qualification by 80%" },
                      { value: "<1 min", text: "Callengo's average response time to new leads" },
                    ].map((item) => (
                      <div key={item.value} className="flex items-center gap-4">
                        <div className="text-2xl font-bold text-dark w-20">{item.value}</div>
                        <div className="text-gray-600">{item.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <span className="badge badge-outline mb-4">Why speed matters</span>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                  Be first, win more
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Studies show that responding to leads within the first minute
                  dramatically increases conversion rates. Manual processes can't
                  compete with AI speed.
                </p>
                <p className="text-lg text-gray-600">
                  With Callengo, every new lead gets an immediate, professional
                  qualification call - even outside business hours, on weekends,
                  or during holidays.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="section bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mb-16"
            >
              <span className="badge badge-outline mb-4">Workflow</span>
              <h2 className="text-3xl md:text-4xl font-semibold">
                From lead to qualified in minutes
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Lead captured",
                  description: "Someone fills out your form or ad",
                },
                {
                  step: "02",
                  title: "Instant call",
                  description: "AI calls within 60 seconds",
                },
                {
                  step: "03",
                  title: "Qualification",
                  description: "BANT questions asked and scored",
                },
                {
                  step: "04",
                  title: "Handoff",
                  description: "Hot leads sent to your sales team",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-gray-200 mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-dark text-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Ready to close more deals?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Start with 15 free minutes and see how fast you can be.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/signup"
                  className="btn bg-white text-dark hover:bg-gray-100 px-8 py-4"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="btn border border-white/20 text-white hover:bg-white/10 px-8 py-4"
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
