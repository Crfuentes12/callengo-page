"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Target,
  Users,
  Lightbulb,
  Heart,
  ArrowRight,
  Globe,
  Zap,
  Shield,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Customer Obsession",
    description:
      "Every decision we make starts with the question: 'How does this help our customers succeed?'",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We push the boundaries of what's possible with AI voice technology, constantly improving and iterating.",
  },
  {
    icon: Heart,
    title: "Human-Centered AI",
    description:
      "Our AI enhances human capabilities rather than replacing them. We build tools that make people more effective.",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "We're upfront about what our technology can and can't do. We build trust through honesty and reliability.",
  },
];

const stats = [
  { label: "Calls Made", value: "1M+" },
  { label: "Minutes Saved", value: "500K+" },
  { label: "Happy Customers", value: "1,000+" },
  { label: "Languages", value: "10+" },
];

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Co-founder",
    bio: "Former head of AI at a Fortune 500 company. Passionate about making enterprise technology accessible to everyone.",
    initials: "AC",
  },
  {
    name: "Maria Santos",
    role: "CTO & Co-founder",
    bio: "PhD in Natural Language Processing from MIT. Built voice systems used by millions of people worldwide.",
    initials: "MS",
  },
  {
    name: "James Wilson",
    role: "VP of Engineering",
    bio: "15 years building scalable systems at Google and Amazon. Obsessed with reliability and performance.",
    initials: "JW",
  },
  {
    name: "Sarah Kim",
    role: "VP of Product",
    bio: "Former product lead at Salesforce. Expert at turning complex technology into intuitive products.",
    initials: "SK",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-sm font-medium text-primary">
                  About Callengo
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Making Business Calls{" "}
                <span className="gradient-text">Smarter</span>
              </h1>

              <p className="text-xl text-foreground-secondary leading-relaxed">
                We believe businesses shouldn't have to choose between personal
                touch and operational efficiency. Callengo bridges that gap with
                AI that sounds and feels genuinely human.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
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
                  Our Mission
                </h2>
                <p className="text-lg text-foreground-secondary mb-6 leading-relaxed">
                  Phone calls remain one of the most effective ways to connect
                  with customers, but they're incredibly time-consuming. Sales
                  teams spend hours on repetitive calls, clinics lose thousands
                  to no-shows, and dirty data costs businesses millions.
                </p>
                <p className="text-lg text-foreground-secondary mb-6 leading-relaxed">
                  We're building AI voice agents that handle these routine calls
                  so humans can focus on what they do best: building
                  relationships, solving complex problems, and closing deals.
                </p>
                <p className="text-lg text-foreground font-medium">
                  Our mission is to give every business access to enterprise-grade
                  calling capabilities, regardless of size or budget.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-background rounded-2xl border border-border p-6 text-center"
                    >
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                        {stat.value}
                      </div>
                      <div className="text-foreground-secondary text-sm">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
              <p className="text-lg text-foreground-secondary">
                The principles that guide everything we build.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-foreground-secondary">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section bg-background-secondary">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet the Team
              </h2>
              <p className="text-lg text-foreground-secondary">
                We're a team of engineers, product builders, and AI researchers
                united by a shared vision of making business communication better.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background rounded-2xl border border-border p-6 text-center group hover:border-primary/30 transition-colors"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold group-hover:scale-105 transition-transform">
                    {member.initials}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <div className="text-sm text-primary mb-3">{member.role}</div>
                  <p className="text-sm text-foreground-secondary">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-1"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why Choose Callengo?
                </h2>
                <p className="text-foreground-secondary mb-6">
                  We're not just another AI tool. We're a partner in your growth.
                </p>
                <Link href="/signup" className="btn btn-primary">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Global Reach</h3>
                    <p className="text-sm text-foreground-secondary">
                      Support for 10+ languages and regional accents. Reach
                      customers wherever they are.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Lightning Fast</h3>
                    <p className="text-sm text-foreground-secondary">
                      Sub-500ms response times for natural conversations. No
                      awkward pauses.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-accent-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Dedicated Support</h3>
                    <p className="text-sm text-foreground-secondary">
                      Real humans ready to help you succeed. We're invested in
                      your results.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Enterprise Security</h3>
                    <p className="text-sm text-foreground-secondary">
                      SOC 2 compliant. Your data is encrypted and protected at
                      every step.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-gradient-to-br from-primary via-primary-dark to-slate text-white">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Calls?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Join thousands of businesses already using Callengo to scale
                their outreach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/signup"
                  className="btn bg-white text-primary hover:bg-white/90 px-8 py-4"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/contact"
                  className="btn border border-white/30 text-white hover:bg-white/10 px-8 py-4"
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
