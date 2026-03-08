"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Shield, FileText, Scale } from "lucide-react";

const legalPages = [
  {
    title: "Privacy Policy",
    description: "How we collect, use, and protect your personal information.",
    href: "/privacy",
    icon: Shield,
  },
  {
    title: "Terms of Service",
    description: "The rules and guidelines for using Callengo services.",
    href: "/terms",
    icon: FileText,
  },
  {
    title: "Compliance",
    description: "Our regulatory standards, data protection, and security practices.",
    href: "/compliance",
    icon: Scale,
  },
];

export default function LegalPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="section">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-display-sm text-foreground mb-5">Legal</h1>
              <p className="text-lg text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>
                Important legal information about using Callengo services.
              </p>
            </motion.div>

            <div className="space-y-4">
              {legalPages.map((page, index) => (
                <motion.div
                  key={page.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={page.href}
                    className="flex items-start gap-4 p-6 bg-background rounded-xl border border-border hover:border-border-dark hover:shadow-lg transition-all group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-background-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-background-tertiary transition-colors">
                      <page.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h2 className="text-base font-semibold text-foreground mb-1 group-hover:text-secondary transition-colors">
                        {page.title}
                      </h2>
                      <p className="text-sm text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>
                        {page.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 p-6 rounded-xl bg-navy relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid-dark opacity-30" />
              <div className="relative z-10">
                <h3 className="font-semibold text-white text-sm mb-2">Questions?</h3>
                <p className="text-white/50 text-sm mb-4" style={{ fontFamily: "var(--font-body)" }}>
                  If you have any questions about our legal policies, please contact our legal team.
                </p>
                <a href="mailto:legal@callengo.com" className="text-sm text-white font-medium hover:underline">
                  legal@callengo.com
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
