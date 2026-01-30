"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FileText, Shield, Scale } from "lucide-react";

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
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-display-sm mb-6">Legal</h1>
              <p className="text-xl text-slate-600">
                Important legal information about using Callengo services.
              </p>
            </motion.div>

            <div className="space-y-4">
              {legalPages.map((page, index) => (
                <motion.div
                  key={page.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={page.href}
                    className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-200 transition-colors">
                      <page.icon className="w-6 h-6 text-slate-600" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold mb-1 group-hover:text-slate-900">
                        {page.title}
                      </h2>
                      <p className="text-slate-600">{page.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 p-6 gradient-bg rounded-2xl text-white"
            >
              <h3 className="font-semibold mb-2">Questions?</h3>
              <p className="text-white/70 mb-4">
                If you have any questions about our legal policies or need assistance,
                please contact our legal team.
              </p>
              <a
                href="mailto:legal@callengo.com"
                className="text-white font-medium hover:underline"
              >
                legal@callengo.com
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
