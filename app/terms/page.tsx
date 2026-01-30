"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="gradient-bg text-white py-16">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-display-sm mb-4">Terms of Service</h1>
              <p className="text-white/70">Last updated: January 2026</p>
            </motion.div>
          </div>
        </section>

        <section className="section">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >

              <div className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-semibold mt-12 mb-4">1. Acceptance of Terms</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  By accessing or using Callengo's services, you agree to be bound by these Terms of Service.
                  If you do not agree to these terms, please do not use our services.
                </p>

                <h2 className="text-2xl font-semibold mt-12 mb-4">2. Description of Service</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Callengo provides automated phone calling services for data validation, appointment
                  confirmation, and lead qualification. Our services use voice technology to conduct
                  calls on behalf of our customers.
                </p>

                <h2 className="text-2xl font-semibold mt-12 mb-4">3. Account Registration</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  To use our services, you must create an account and provide accurate, complete information.
                  You are responsible for maintaining the confidentiality of your account credentials
                  and for all activities that occur under your account.
                </p>

                <h2 className="text-2xl font-semibold mt-12 mb-4">4. Acceptable Use</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  You agree to use our services only for lawful purposes and in accordance with these terms.
                  You may not use our services to make calls that violate any applicable laws, including
                  telemarketing regulations, do-not-call lists, or anti-spam laws.
                </p>

                <h2 className="text-2xl font-semibold mt-12 mb-4">5. Payment Terms</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Paid services are billed in advance on a monthly or annual basis. All fees are non-refundable
                  except as required by law. We reserve the right to change our prices with 30 days notice.
                </p>

                <h2 className="text-2xl font-semibold mt-12 mb-4">6. Intellectual Property</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  All content, features, and functionality of our services are owned by Callengo and are
                  protected by intellectual property laws. You may not copy, modify, or distribute our
                  services without our written permission.
                </p>

                <h2 className="text-2xl font-semibold mt-12 mb-4">7. Limitation of Liability</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Callengo shall not be liable for any indirect, incidental, special, consequential, or
                  punitive damages resulting from your use of or inability to use our services.
                  Our total liability shall not exceed the amount you paid us in the past 12 months.
                </p>

                <h2 className="text-2xl font-semibold mt-12 mb-4">8. Termination</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  We may terminate or suspend your account at any time for any reason, including violation
                  of these terms. Upon termination, your right to use the services will immediately cease.
                </p>

                <h2 className="text-2xl font-semibold mt-12 mb-4">9. Changes to Terms</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  We reserve the right to modify these terms at any time. We will provide notice of
                  significant changes by posting the updated terms on our website. Your continued use
                  of our services constitutes acceptance of the modified terms.
                </p>

                <h2 className="text-2xl font-semibold mt-12 mb-4">10. Contact</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at
                  legal@callengo.com.
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
