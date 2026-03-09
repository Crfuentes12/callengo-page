"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";
import AnimatedBlobs from "../components/AnimatedBlobs";

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
      <main className="pt-24 relative overflow-hidden">
        <AnimatedBlobs />
        {/* Hero Section */}
        <section className="section relative z-10">
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
                <p className="text-xl text-foreground-secondary leading-relaxed">
                  Every no-show, every outdated contact, every unqualified lead
                  is revenue walking out the door. We built Callengo to plug those leaks.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl bg-background-tertiary flex items-center justify-center">
                  <span className="text-foreground-tertiary">Team photo placeholder</span>
                </div>
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-border rounded-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section gradient-bg text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </div>
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
                  <div className="text-white/50" style={{ fontFamily: "var(--font-body)" }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* close extra wrappers from background divs */}

        {/* Mission Section */}
        <section className="section relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="aspect-4-3 rounded-3xl bg-background-tertiary flex items-center justify-center">
                  <span className="text-foreground-tertiary">Office image placeholder</span>
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
                <p className="text-lg text-foreground-secondary mb-6 leading-relaxed">
                  Sales teams spend hours on repetitive calls that never close.
                  Clinics lose thousands to patients who forget appointments.
                  Marketing wastes budgets on outdated contact lists.
                </p>
                <p className="text-lg text-foreground-secondary leading-relaxed">
                  We handle the routine calls so your team can focus on what
                  actually drives revenue: building relationships, solving
                  problems, and closing deals.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section bg-background-secondary relative z-10">
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
                  className="bg-white rounded-2xl border border-border p-8"
                >
                  <div className="text-5xl font-bold text-border mb-4">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-foreground-secondary">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section relative z-10">
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
              <p className="text-lg text-foreground-secondary">
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
                  <div className="aspect-square rounded-2xl bg-background-tertiary mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-foreground-tertiary">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <div className="text-sm text-foreground-tertiary mb-2">{member.role}</div>
                  <p className="text-sm text-foreground-secondary">{member.bio}</p>
                </motion.div>
              ))}
            </div>
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
              <div className="absolute inset-0 overflow-hidden opacity-40">
                <div className="absolute -top-1/4 right-[-10%] w-3/5 h-[120%] bg-gradient-to-br from-white/20 via-[#8B96C8]/15 to-white/10 rounded-full blur-3xl animate-[aboutCta1_40s_ease-in-out_infinite]" />
                <div className="absolute -bottom-1/3 left-[-10%] w-1/2 h-full bg-gradient-to-br from-[#8B96C8]/20 via-white/12 to-[#4F5FE8]/10 rounded-full blur-3xl animate-[aboutCta2_50s_ease-in-out_infinite]" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E2D6B]/40 via-[#1E2D6B]/15 to-transparent" />

              {/* Content */}
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
                  Ready to join our mission?
                </h2>
                <p className="text-xl text-white/70 mb-10 max-w-xl">
                  Help businesses recover lost revenue from no-shows, bad data, and unqualified leads.
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
              <style jsx>{`
                @keyframes aboutCta1 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  33% { transform: translate(-30px, 25px) scale(1.06); }
                  66% { transform: translate(20px, -20px) scale(0.95); }
                }
                @keyframes aboutCta2 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  40% { transform: translate(30px, -25px) scale(1.08); }
                  70% { transform: translate(-20px, 30px) scale(0.94); }
                }
              `}</style>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
