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
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="gradient-bg rounded-3xl p-12 md:p-20 relative overflow-hidden"
            >
              <div className="absolute inset-0 overflow-hidden opacity-90">
                <div className="absolute -top-1/4 right-[-10%] w-3/5 h-[120%] bg-gradient-to-br from-white/40 via-[#8B96C8]/35 to-[#6070E0]/25 rounded-full blur-2xl animate-[ctaLava1_35s_ease-in-out_infinite]" />
                <div className="absolute -bottom-1/3 left-[-10%] w-1/2 h-full bg-gradient-to-br from-[#8B96C8]/40 via-white/25 to-[#4F5FE8]/25 rounded-full blur-2xl animate-[ctaLava2_42s_ease-in-out_infinite]" />
                <div className="absolute top-[10%] left-[30%] w-2/5 h-4/5 bg-gradient-to-br from-white/30 via-[#1DB87A]/18 to-[#8B96C8]/20 rounded-full blur-2xl animate-[ctaLava3_38s_ease-in-out_infinite]" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E2D6B]/40 via-[#1E2D6B]/15 to-transparent" />
              <div className="relative z-10 max-w-3xl">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                  Get notified when these tools launch
                </h3>
                <p className="text-xl text-white/70 mb-10 max-w-xl">
                  Sign up for early access to our free tools and be the first to
                  know when new resources are available.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="btn bg-white text-primary hover:bg-white/90 px-8 py-4 font-semibold rounded-xl"
                  >
                    Join the waitlist
                  </Link>
                  <Link
                    href="/pricing"
                    className="btn border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl"
                  >
                    Explore pricing
                  </Link>
                </div>
              </div>
              <style jsx>{`
                @keyframes ctaLava1 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  33% { transform: translate(-30px, 25px) scale(1.06); }
                  66% { transform: translate(20px, -20px) scale(0.95); }
                }
                @keyframes ctaLava2 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  40% { transform: translate(30px, -25px) scale(1.08); }
                  70% { transform: translate(-20px, 30px) scale(0.94); }
                }
                @keyframes ctaLava3 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  50% { transform: translate(25px, -15px) scale(1.05); }
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
