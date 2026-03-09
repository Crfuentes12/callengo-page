"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Calculator, FileText, Target, ShieldCheck } from "lucide-react";

const tools = [
  {
    icon: Calculator,
    title: "ROI Calculator",
    description:
      "Calculate how much you could save with AI phone agents. See projected cost savings, time recovered, and revenue impact.",
  },
  {
    icon: FileText,
    title: "Call Script Generator",
    description:
      "Generate professional call scripts for your business. Tailored templates for appointment confirmations, lead follow-ups, and more.",
  },
  {
    icon: Target,
    title: "Lead Scoring Template",
    description:
      "Free BANT scoring template to qualify your leads. Prioritize prospects based on Budget, Authority, Need, and Timeline.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Checklist",
    description:
      "Ensure your outbound calls meet TCPA requirements. A step-by-step checklist covering consent, timing, and do-not-call rules.",
  },
];

export default function FreeToolsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h1 className="text-display-sm mb-6">Free Tools</h1>
              <p className="text-xl text-foreground-secondary">
                Free resources to help your business optimize outbound calls,
                qualify leads faster, and stay compliant — no account required.
              </p>
            </motion.div>

            {/* Tools Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  className="relative bg-white rounded-2xl border border-border p-8 hover:border-border-dark hover:shadow-lg transition-all group"
                >
                  <span className="absolute top-4 right-4 inline-block px-3 py-1 bg-background-tertiary rounded-full text-xs font-semibold text-foreground-tertiary uppercase tracking-wide">
                    Coming Soon
                  </span>
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5">
                    <tool.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold font-display mb-3">
                    {tool.title}
                  </h3>
                  <p className="text-foreground-secondary font-body leading-relaxed">
                    {tool.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section bg-background-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="gradient-bg rounded-3xl p-8 md:p-12 text-center text-white"
            >
              <h3 className="text-2xl font-bold mb-4 text-white font-display">
                Get notified when these tools launch
              </h3>
              <p className="text-white/70 mb-6 max-w-lg mx-auto font-body">
                Sign up for early access to our free tools and be the first to
                know when new resources are available.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="btn btn-primary bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-full font-semibold text-sm transition-colors"
                >
                  Join the waitlist
                </Link>
                <Link
                  href="/pricing"
                  className="btn px-8 py-3 rounded-full font-semibold text-sm border border-white/30 text-white hover:bg-white/10 transition-colors"
                >
                  Explore pricing
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
