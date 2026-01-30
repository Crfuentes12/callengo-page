"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";

const stats = [
  { label: "Revenue Recovered", value: "$50M+" },
  { label: "Hours Saved", value: "500K+" },
  { label: "Happy Customers", value: "1,000+" },
  { label: "Countries", value: "25+" },
];

const values = [
  {
    title: "Customer Obsession",
    description:
      "Every decision starts with: 'How does this help our customers succeed?'",
  },
  {
    title: "Results First",
    description:
      "We measure success by the revenue we help you recover, not features shipped.",
  },
  {
    title: "Simplicity",
    description:
      "Complex problems deserve simple solutions. We keep it straightforward.",
  },
  {
    title: "Trust",
    description:
      "We're upfront about what our technology can and can't do. No surprises.",
  },
];

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Co-founder",
    bio: "Former head of AI at a Fortune 500 company.",
  },
  {
    name: "Maria Santos",
    role: "CTO & Co-founder",
    bio: "PhD in NLP from MIT. Built voice systems for millions.",
  },
  {
    name: "James Wilson",
    role: "VP of Engineering",
    bio: "15 years building scalable systems at Google and Amazon.",
  },
  {
    name: "Sarah Kim",
    role: "VP of Product",
    bio: "Former product lead at Salesforce.",
  },
];

export default function AboutPage() {
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
                <h1 className="text-display-sm mb-6">
                  We help businesses stop losing money
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Every no-show, every outdated contact, every slow lead response
                  is revenue walking out the door. We built Callengo to plug those leaks.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl bg-slate-100 flex items-center justify-center">
                  <span className="text-slate-400">Team photo placeholder</span>
                </div>
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-slate-200 rounded-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="aspect-4-3 rounded-3xl bg-slate-100 flex items-center justify-center">
                  <span className="text-slate-400">Office image placeholder</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                  Your team should sell, not chase
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Sales teams spend hours on repetitive calls that never close.
                  Clinics lose thousands to patients who forget appointments.
                  Marketing wastes budgets on outdated contact lists.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We handle the routine calls so your team can focus on what
                  actually drives revenue: building relationships, solving
                  problems, and closing deals.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-semibold">
                The principles that guide us
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-slate-200 p-8"
                >
                  <div className="text-5xl font-bold text-slate-200 mb-4">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                The people behind Callengo
              </h2>
              <p className="text-lg text-slate-600">
                Engineers, product builders, and AI researchers united by a
                shared vision.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="aspect-square rounded-2xl bg-slate-100 mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-slate-300">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <div className="text-sm text-slate-500 mb-2">{member.role}</div>
                  <p className="text-sm text-slate-600">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Ready to recover lost revenue?
              </h2>
              <p className="text-xl text-slate-400 mb-8">
                Join thousands of businesses that stopped losing money to
                no-shows, bad data, and slow response times.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold bg-white text-slate-900 rounded-full transition-all hover:bg-slate-100"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold border border-white/20 text-white rounded-full transition-all hover:bg-white/10"
                >
                  Contact Sales
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
