"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPage() {
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
            >
              <h1 className="text-display-sm mb-6">Privacy Policy</h1>
              <p className="text-slate-500 mb-12">Last updated: January 2026</p>

              <div className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-semibold mt-12 mb-4">1. Information We Collect</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  We collect information you provide directly to us, such as when you create an account,
                  use our services, or contact us for support. This may include your name, email address,
                  phone number, company name, and payment information.
                </p>

                <h2 className="text-2xl font-semibold mt-12 mb-4">2. How We Use Your Information</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our services,
                  process transactions, send you technical notices and support messages, and respond
                  to your comments and questions.
                </p>

                <h2 className="text-2xl font-semibold mt-12 mb-4">3. Information Sharing</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to outside parties.
                  This does not include trusted third parties who assist us in operating our website,
                  conducting our business, or servicing you, so long as those parties agree to keep
                  this information confidential.
                </p>

                <h2 className="text-2xl font-semibold mt-12 mb-4">4. Data Security</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal
                  data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
                  All data is encrypted in transit and at rest.
                </p>

                <h2 className="text-2xl font-semibold mt-12 mb-4">5. Data Retention</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes
                  for which it was collected, including to satisfy any legal, accounting, or reporting requirements.
                </p>

                <h2 className="text-2xl font-semibold mt-12 mb-4">6. Your Rights</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  You have the right to access, correct, or delete your personal information.
                  You may also have the right to restrict or object to certain processing of your data.
                  To exercise these rights, please contact us at privacy@callengo.com.
                </p>

                <h2 className="text-2xl font-semibold mt-12 mb-4">7. Cookies</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our service
                  and hold certain information. You can instruct your browser to refuse all cookies
                  or to indicate when a cookie is being sent.
                </p>

                <h2 className="text-2xl font-semibold mt-12 mb-4">8. Changes to This Policy</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes
                  by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>

                <h2 className="text-2xl font-semibold mt-12 mb-4">9. Contact Us</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at
                  privacy@callengo.com or write to us at our headquarters.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
