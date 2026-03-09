"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 relative overflow-hidden">
        <section className="bg-navy py-16 relative overflow-hidden">
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-display-sm text-white mb-3">Terms of Service</h1>
              <p className="text-white/50 text-sm" style={{ fontFamily: "var(--font-body)" }}>Last updated: January 2026</p>
            </motion.div>
          </div>
        </section>

        <section className="section">
          <div className="max-w-3xl mx-auto px-6 space-y-10">
            {[
              { title: "1. Acceptance of Terms", text: "By accessing or using Callengo's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services." },
              { title: "2. Description of Service", text: "Callengo provides AI-powered phone agent services for businesses, including data validation, appointment confirmation, and lead qualification. Our services are designed to automate repetitive phone calls and improve business efficiency." },
              { title: "3. Account Registration", text: "To use our services, you must create an account and provide accurate information. You are responsible for maintaining the security of your account credentials and for all activities that occur under your account." },
              { title: "4. Acceptable Use", text: "You agree not to use our services for any unlawful purposes, to harass or harm others, or to violate any applicable regulations. You must comply with all applicable telecommunications laws and regulations in your jurisdiction." },
              { title: "5. Payment Terms", text: "Paid plans are billed monthly or annually as selected. All fees are non-refundable except as required by law. We reserve the right to change pricing with 30 days notice. Annual plans receive a 12% discount." },
              { title: "6. Intellectual Property", text: "All intellectual property rights in the Callengo platform and services are owned by Callengo. You retain ownership of your data and content uploaded to our platform." },
              { title: "7. Limitation of Liability", text: "Callengo shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services." },
              { title: "8. Termination", text: "Either party may terminate the agreement at any time. Upon termination, your access to the services will cease and your data will be handled in accordance with our Privacy Policy and data retention schedules." },
              { title: "9. Changes to Terms", text: "We may modify these terms at any time. We will notify you of material changes by posting a notice on our website or sending you an email. Continued use of the services after changes constitutes acceptance." },
            ].map((section, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-xl font-semibold text-foreground mb-3">{section.title}</h2>
                <p className="text-foreground-secondary text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{section.text}</p>
              </motion.div>
            ))}

            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. Contact</h2>
              <p className="text-foreground-secondary text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                For questions about these terms, contact us at{" "}
                <a href="mailto:legal@callengo.com" className="text-secondary hover:underline">legal@callengo.com</a>.
                For compliance and regulatory information, visit our{" "}
                <Link href="/compliance" className="text-secondary hover:underline">Compliance</Link> page.
                See also our <Link href="/privacy" className="text-secondary hover:underline">Privacy Policy</Link>.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
