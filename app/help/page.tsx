"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, FileQuestion, ChevronRight, Plus, Minus, Search } from "lucide-react";

const faqItems = [
  {
    question: "How do I get started with Callengo?",
    answer: "Sign up for a free account, import your contacts, and create your first campaign. Our quick start guide walks you through each step.",
  },
  {
    question: "What happens if a call goes to voicemail?",
    answer: "Callengo can leave a customized voicemail message and schedule a callback attempt. You can configure voicemail handling in your campaign settings.",
  },
  {
    question: "Can I customize the call scripts?",
    answer: "Yes, you can fully customize scripts for each campaign type. Our script editor supports dynamic fields, conditional logic, and multiple languages.",
  },
  {
    question: "How are call minutes calculated?",
    answer: "Minutes are calculated based on the actual duration of connected calls. Failed connections, busy signals, and voicemails under 30 seconds are not counted.",
  },
  {
    question: "Is Callengo compliant with TCPA regulations?",
    answer: "Yes, Callengo is designed with compliance in mind. We support Do-Not-Call list scrubbing, time zone restrictions, and consent management.",
  },
  {
    question: "Can I integrate Callengo with my CRM?",
    answer: "Yes! Callengo integrates natively with HubSpot and Pipedrive on Business+ plans, and Salesforce, Zoho, and Dynamics 365 on Teams+ plans. You can also export all data as CSV, Excel, or JSON for easy import into any CRM or business system.",
  },
];

const searchIndex = [
  { title: "Quick Start Guide", description: "Get up and running with Callengo in minutes", path: "/help/quick-start", tags: ["setup", "getting started", "account", "tutorial", "guide"] },
  { title: "Data Validation Agent", description: "Clean and verify your contact database automatically", path: "/agents/data-validation", tags: ["data", "validation", "crm", "contacts", "clean", "verify", "database"] },
  { title: "Appointment Confirmation Agent", description: "Reduce no-shows with automated confirmations", path: "/agents/appointment-confirmation", tags: ["appointment", "confirmation", "no-show", "scheduling", "calendar", "reminder"] },
  { title: "Lead Qualification Agent", description: "Score and rank leads so your team focuses on buyers", path: "/agents/lead-qualification", tags: ["lead", "qualification", "scoring", "sales", "bant", "prospect"] },
  { title: "CRM Integrations", description: "Connect Callengo with HubSpot, Salesforce, and more", path: "/help/crm-integrations", tags: ["crm", "integration", "hubspot", "salesforce", "pipedrive", "zoho"] },
  { title: "Documentation", description: "Full API reference and technical documentation", path: "/docs", tags: ["docs", "documentation", "api", "reference", "technical"] },
  { title: "Integrations", description: "All available integrations and connectors", path: "/integrations", tags: ["integration", "connector", "zapier", "webhook", "api"] },
  { title: "Blog & Articles", description: "Tips, best practices, and industry insights", path: "/blog", tags: ["blog", "articles", "tips", "insights", "best practices"] },
  { title: "Pricing", description: "Plans and pricing for every team size", path: "/pricing", tags: ["pricing", "plans", "cost", "free", "enterprise", "billing"] },
  { title: "Contact Us", description: "Get in touch with our support team", path: "/contact", tags: ["contact", "support", "help", "email", "phone"] },
  { title: "About Callengo", description: "Our mission and team", path: "/about", tags: ["about", "team", "mission", "company"] },
  { title: "Compliance", description: "TCPA, GDPR, and regulatory compliance", path: "/compliance", tags: ["compliance", "tcpa", "gdpr", "regulatory", "legal", "dnc"] },
  { title: "Privacy Policy", description: "How we handle your data", path: "/privacy", tags: ["privacy", "data", "policy", "gdpr"] },
];

export default function HelpPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.includes(q))
    );
  }, [searchQuery]);

  return (
    <>
      <Header />
      <main className="pt-24 relative overflow-hidden">
        <section className="section relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h1 className="text-display-sm mb-6 text-foreground">Help Center</h1>
              <p className="text-xl text-foreground-secondary">
                Find answers, get support, and learn how to get the most out of Callengo.
              </p>
            </motion.div>

            {/* Global Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-2xl mx-auto mb-16 relative"
            >
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-tertiary" />
                <input
                  type="text"
                  placeholder="Search integrations, agents, docs, articles..."
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setShowResults(true); }}
                  onFocus={() => setShowResults(true)}
                  onBlur={() => setTimeout(() => setShowResults(false), 200)}
                  className="w-full pl-14 pr-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent text-lg"
                  style={{ background: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(10px)", border: "1px solid rgba(221, 224, 238, 0.5)" }}
                />
              </div>

              {/* Search results dropdown */}
              <AnimatePresence>
                {showResults && searchQuery.trim() && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="absolute top-full mt-2 w-full rounded-xl overflow-hidden shadow-xl z-50"
                    style={{ background: "rgba(255, 255, 255, 0.95)", backdropFilter: "blur(20px)", border: "1px solid rgba(221, 224, 238, 0.5)" }}
                  >
                    {searchResults.length > 0 ? (
                      <div className="py-2">
                        {searchResults.map((result) => (
                          <button
                            key={result.path}
                            onMouseDown={() => router.push(result.path)}
                            className="w-full text-left px-5 py-3 hover:bg-electric/5 transition-colors flex items-center justify-between group cursor-pointer"
                          >
                            <div>
                              <div className="text-sm font-semibold text-foreground group-hover:text-electric transition-colors">{result.title}</div>
                              <div className="text-xs text-foreground-tertiary">{result.description}</div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-foreground-tertiary group-hover:text-electric transition-colors" />
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="px-5 py-4 text-sm text-foreground-tertiary text-center">
                        No results found for &ldquo;{searchQuery}&rdquo;
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Contact Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-16"
            >
              <div className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left" style={{ background: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(10px)", border: "1px solid rgba(221, 224, 238, 0.5)" }}>
                <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-foreground-secondary text-lg">
                  Need help? Contact us at{" "}
                  <a
                    href="mailto:support@callengo.com"
                    className="text-electric font-semibold hover:underline"
                  >
                    support@callengo.com
                  </a>{" "}
                  or visit our{" "}
                  <Link
                    href="/contact"
                    className="text-electric font-semibold hover:underline"
                  >
                    contact page
                  </Link>
                  .
                </p>
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-8">
                <FileQuestion className="w-6 h-6 text-foreground-secondary" />
                <h2 className="text-2xl font-semibold text-foreground">Frequently Asked Questions</h2>
              </div>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div
                      className="rounded-2xl transition-all"
                      style={{
                        background: "rgba(255, 255, 255, 0.85)",
                        backdropFilter: "blur(10px)",
                        border: openFaq === index ? "1px solid rgba(79, 95, 232, 0.3)" : "1px solid rgba(221, 224, 238, 0.5)",
                        boxShadow: openFaq === index ? "0 4px 16px rgba(79, 95, 232, 0.08)" : "none",
                      }}
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4"
                      >
                        <span className="font-medium">{item.question}</span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          openFaq === index ? "gradient-bg text-white" : "bg-background-tertiary text-foreground-secondary"
                        }`}>
                          {openFaq === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </div>
                      </button>

                      <AnimatePresence>
                        {openFaq === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 text-foreground-secondary">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl p-8 md:p-12 text-white relative overflow-hidden gradient-bg"
            >
              <div className="absolute inset-0 overflow-hidden opacity-90">
                <div className="absolute -top-1/4 right-[-10%] w-3/5 h-[120%] bg-gradient-to-br from-white/40 via-[#8B96C8]/35 to-[#6070E0]/25 rounded-full blur-2xl animate-[ctaLava1_35s_ease-in-out_infinite]" />
                <div className="absolute -bottom-1/3 left-[-10%] w-1/2 h-full bg-gradient-to-br from-[#8B96C8]/40 via-white/25 to-[#4F5FE8]/25 rounded-full blur-2xl animate-[ctaLava2_42s_ease-in-out_infinite]" />
                <div className="absolute top-[10%] left-[30%] w-2/5 h-4/5 bg-gradient-to-br from-white/30 via-[#1DB87A]/18 to-[#8B96C8]/20 rounded-full blur-2xl animate-[ctaLava3_38s_ease-in-out_infinite]" />
                <div className="absolute top-[-15%] left-[50%] w-1/3 h-[90%] bg-gradient-to-br from-[#6070E0]/30 via-white/20 to-[#8B96C8]/25 rounded-full blur-2xl animate-[ctaLava4_48s_ease-in-out_infinite]" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#3347D4]/40 via-[#3347D4]/15 to-transparent" />
              <h3 className="text-2xl font-semibold mb-6 relative z-10 text-white">Quick Links</h3>
              <div className="grid md:grid-cols-2 gap-4 relative z-10">
                <Link
                  href="/help/quick-start"
                  className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/15 hover:bg-white/20 transition-all group"
                >
                  <span className="font-medium text-white">Quick Start Guide</span>
                  <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
                <Link
                  href="/integrations"
                  className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/15 hover:bg-white/20 transition-all group"
                >
                  <span className="font-medium text-white">Integrations</span>
                  <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
                <Link
                  href="/blog"
                  className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/15 hover:bg-white/20 transition-all group"
                >
                  <span className="font-medium text-white">Blog & Articles</span>
                  <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
                <Link
                  href="/docs"
                  className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/15 hover:bg-white/20 transition-all group"
                >
                  <span className="font-medium text-white">Documentation</span>
                  <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
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
            @keyframes ctaLava4 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              35% { transform: translate(-20px, 30px) scale(1.06); }
              65% { transform: translate(30px, -15px) scale(0.95); }
            }
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
