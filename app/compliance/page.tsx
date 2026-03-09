"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Shield,
  FileText,
  Lock,
  Globe,
  CheckCircle2,
  Mail,
} from "lucide-react";

const complianceCards = [
  {
    icon: Shield,
    title: "Data Protection & Privacy",
    items: [
      "GDPR-aligned data processing and storage",
      "CCPA compliance for California residents",
      "Data encryption at rest and in transit",
      "SOC 2 controls for data security and availability",
    ],
  },
  {
    icon: FileText,
    title: "Call Recording & Consent",
    items: [
      "Opt-in/opt-out mechanisms for all participants",
      "Recording disclosure at the start of every call",
      "Consent management dashboard for full visibility",
      "Automatic consent detection and compliance logging",
    ],
  },
  {
    icon: Lock,
    title: "Telecommunications Compliance",
    items: [
      "TCPA guidelines adherence for outbound calls",
      "Calling hour restrictions enforced by time zone",
      "Do-Not-Call list compliance and automatic scrubbing",
      "Caller ID transparency on every outbound call",
    ],
  },
  {
    icon: FileText,
    title: "Data Retention & Deletion",
    items: [
      "Configurable retention policies per workspace",
      "Right to deletion requests processed within 30 days",
      "Data export capabilities in standard formats",
      "Automatic purging schedules for expired records",
    ],
  },
  {
    icon: Lock,
    title: "Security Infrastructure",
    items: [
      "256-bit AES encryption for all stored data",
      "Multi-factor authentication for account access",
      "Role-based access controls with granular permissions",
      "Regular security audits by third-party firms",
      "Penetration testing conducted quarterly",
    ],
  },
  {
    icon: Globe,
    title: "International Standards",
    items: [
      "EU data residency options for European customers",
      "Cross-border transfer safeguards via Standard Contractual Clauses",
      "Multi-jurisdiction compliance across 25+ countries",
    ],
  },
];

export default function CompliancePage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-deep-indigo text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1
                className="text-display-sm mb-6 text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Compliance
              </h1>
              <p
                className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Callengo is built from the ground up with regulatory compliance
                in mind. We are committed to meeting the highest standards for
                data privacy, telecommunications law, and international
                regulations so you can focus on growing your business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Compliance Cards */}
        <section className="section">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-xl border border-border bg-background p-6"
                >
                  <div className="w-10 h-10 rounded-lg bg-background-secondary flex items-center justify-center mb-4">
                    <card.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3
                    className="text-lg font-semibold mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {card.title}
                  </h3>
                  <ul className="space-y-3">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span
                          className="text-sm text-foreground-secondary leading-relaxed"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Links Section */}
        <section className="section">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl gradient-bg text-white p-10 text-center relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2
                className="text-2xl font-semibold mb-3 text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Questions about compliance?
              </h2>
              <p
                className="text-white/60 mb-6 max-w-lg mx-auto leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Our legal and compliance team is here to help. Reach out for
                detailed information about our practices, certifications, or to
                request documentation.
              </p>
              <a
                href="mailto:legal@callengo.com"
                className="inline-flex items-center gap-2 text-white font-medium bg-secondary hover:bg-secondary/90 px-6 py-3 rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4" />
                legal@callengo.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 text-center"
            >
              <p
                className="text-foreground-secondary text-sm"
                style={{ fontFamily: "var(--font-body)" }}
              >
                For more details, review our{" "}
                <Link
                  href="/privacy"
                  className="text-secondary hover:underline font-medium"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/terms"
                  className="text-secondary hover:underline font-medium"
                >
                  Terms of Service
                </Link>
                .
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
