"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Book, Code, Zap, Settings, Webhook, Shield, ArrowRight } from "lucide-react";

const docCategories = [
  {
    title: "Getting Started",
    description: "Learn the basics and set up your first campaign in minutes.",
    icon: Zap,
    articles: [
      { title: "Quick Start Guide", href: "/docs/quick-start" },
      { title: "Creating Your First Campaign", href: "/docs/first-campaign" },
      { title: "Understanding Call Results", href: "/docs/call-results" },
      { title: "Best Practices", href: "/docs/best-practices" },
    ],
  },
  {
    title: "Agent Configuration",
    description: "Configure and customize your calling agents for optimal results.",
    icon: Settings,
    articles: [
      { title: "Agent Types Overview", href: "/docs/agent-types" },
      { title: "Script Customization", href: "/docs/scripts" },
      { title: "Voice and Language Settings", href: "/docs/voice-settings" },
      { title: "Call Scheduling", href: "/docs/scheduling" },
    ],
  },
  {
    title: "Data Management",
    description: "Import, export, and manage your contact data effectively.",
    icon: Book,
    articles: [
      { title: "Importing Contacts", href: "/docs/import" },
      { title: "Data Formats", href: "/docs/data-formats" },
      { title: "Field Mapping", href: "/docs/field-mapping" },
      { title: "Export Results", href: "/docs/export" },
    ],
  },
  {
    title: "API Reference",
    description: "Integrate Callengo with your existing systems and workflows.",
    icon: Code,
    articles: [
      { title: "Authentication", href: "/docs/api/auth" },
      { title: "Campaigns API", href: "/docs/api/campaigns" },
      { title: "Contacts API", href: "/docs/api/contacts" },
      { title: "Results API", href: "/docs/api/results" },
    ],
  },
  {
    title: "Integrations",
    description: "Connect Callengo with your favorite tools and platforms.",
    icon: Webhook,
    articles: [
      { title: "CRM Integrations", href: "/docs/integrations/crm" },
      { title: "Zapier", href: "/docs/integrations/zapier" },
      { title: "Webhooks", href: "/docs/integrations/webhooks" },
      { title: "Custom Integrations", href: "/docs/integrations/custom" },
    ],
  },
  {
    title: "Security & Compliance",
    description: "Learn about our security practices and compliance certifications.",
    icon: Shield,
    articles: [
      { title: "Data Security", href: "/docs/security" },
      { title: "TCPA Compliance", href: "/docs/tcpa" },
      { title: "GDPR", href: "/docs/gdpr" },
      { title: "Do-Not-Call Lists", href: "/docs/dnc" },
    ],
  },
];

export default function DocsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h1 className="text-display-sm mb-6">Documentation</h1>
              <p className="text-xl text-slate-600">
                Everything you need to get started with Callengo and make the most of our platform.
              </p>
            </motion.div>

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-2xl mx-auto mb-16"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-lg"
                />
                <kbd className="absolute right-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-100 rounded text-sm text-slate-500 hidden sm:block">
                  ⌘K
                </kbd>
              </div>
            </motion.div>

            {/* Doc Categories Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {docCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-slate-600" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
                  <p className="text-slate-600 text-sm mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.articles.map((article) => (
                      <li key={article.title}>
                        <Link
                          href={article.href}
                          className="text-sm text-slate-600 hover:text-slate-900 hover:underline flex items-center gap-1 group"
                        >
                          <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                          {article.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Help CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 bg-slate-50 rounded-3xl p-8 md:p-12 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Need more help?</h3>
              <p className="text-slate-600 mb-6 max-w-md mx-auto">
                Our support team is ready to assist you with any questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/help"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors"
                >
                  Visit Help Center
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold bg-white text-slate-900 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors"
                >
                  Contact Support
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
