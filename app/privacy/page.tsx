"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="bg-navy py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-dark opacity-30" />
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-display-sm text-white mb-3">Privacy Policy</h1>
              <p className="text-white/50 text-sm" style={{ fontFamily: "var(--font-body)" }}>Last updated: January 2026</p>
            </motion.div>
          </div>
        </section>

        <section className="section">
          <div className="max-w-3xl mx-auto px-6 space-y-10">
            {[
              { title: "1. Information We Collect", text: "We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include your name, email address, phone number, company name, and payment information." },
              { title: "2. How We Use Your Information", text: "We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions." },
              { title: "3. Information Sharing", text: "We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential." },
              { title: "4. Data Security", text: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. All data is encrypted in transit and at rest." },
              { title: "5. Data Retention", text: "We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements." },
              { title: "6. Your Rights", text: "You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your data." },
              { title: "7. Cookies", text: "We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent." },
              { title: "8. Changes to This Policy", text: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last updated\" date." },
            ].map((section, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-xl font-semibold text-foreground mb-3">{section.title}</h2>
                <p className="text-foreground-secondary text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{section.text}</p>
              </motion.div>
            ))}

            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Contact Us</h2>
              <p className="text-foreground-secondary text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:legal@callengo.com" className="text-secondary hover:underline">legal@callengo.com</a>.
                For compliance-related inquiries, visit our{" "}
                <Link href="/compliance" className="text-secondary hover:underline">Compliance</Link> page.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
