"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, Send, CheckCircle, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden bg-background py-16 md:py-20">
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-display-sm text-foreground mb-5">
                Get in touch
              </h1>
              <p className="text-lg text-foreground-secondary max-w-xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
                Have a question, need a demo, or want to discuss a custom plan?
                Reach out and we&apos;ll get back to you within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact form + info */}
        <section className="section bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-5 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="md:col-span-3"
              >
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-2xl border border-accent/20 bg-accent/5 p-10 text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-7 h-7 text-accent-dark" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Message sent
                    </h3>
                    <p className="text-foreground-secondary text-sm" style={{ fontFamily: "var(--font-body)" }}>
                      Thanks for reaching out. We&apos;ll get back to you within 24
                      hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-colors outline-none text-sm"
                          style={{ fontFamily: "var(--font-body)" }}
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-colors outline-none text-sm"
                          style={{ fontFamily: "var(--font-body)" }}
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-colors outline-none text-sm"
                          style={{ fontFamily: "var(--font-body)" }}
                          placeholder="Acme Inc"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-colors outline-none text-sm"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          <option value="">Select a topic</option>
                          <option value="sales">Sales Inquiry</option>
                          <option value="support">Technical Support</option>
                          <option value="partnership">Partnership</option>
                          <option value="demo">Request a Demo</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-colors outline-none resize-none text-sm"
                        style={{ fontFamily: "var(--font-body)" }}
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-secondary rounded-lg transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                      style={{ boxShadow: "var(--shadow-electric)" }}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Info sidebar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:col-span-2 space-y-6"
              >
                <div className="p-5 rounded-xl border border-border bg-background-secondary">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-secondary/8 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">Sales</div>
                      <div className="text-xs text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>Custom plans & demos</div>
                    </div>
                  </div>
                  <a href="mailto:sales@callengo.com" className="text-sm font-medium text-secondary hover:underline">
                    sales@callengo.com
                  </a>
                </div>

                <div className="p-5 rounded-xl border border-border bg-background-secondary">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-accent/8 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-accent-dark" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">Support</div>
                      <div className="text-xs text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>For existing customers</div>
                    </div>
                  </div>
                  <a href="mailto:support@callengo.com" className="text-sm font-medium text-secondary hover:underline">
                    support@callengo.com
                  </a>
                </div>

                <div className="relative rounded-xl overflow-hidden bg-navy p-5">
                  <div className="absolute inset-0 bg-grid-dark opacity-30" />
                  <div className="relative z-10">
                    <h3 className="font-semibold text-white text-sm mb-2">Ready to start?</h3>
                    <p className="text-white/50 text-xs mb-4 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                      Get started with 15 free minutes. No credit card required.
                    </p>
                    <a
                      href="https://app.callengo.com/auth/signup"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-white/80 transition-colors"
                    >
                      Get started free
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
