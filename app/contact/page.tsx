"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Building2,
  Headphones,
  Send,
  CheckCircle,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "We'll respond within 24 hours",
    contact: "hello@callengo.com",
    href: "mailto:hello@callengo.com",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Available Mon-Fri, 9am-6pm EST",
    contact: "Start a conversation",
    href: "#",
  },
  {
    icon: Headphones,
    title: "Support",
    description: "For existing customers",
    contact: "support@callengo.com",
    href: "mailto:support@callengo.com",
  },
  {
    icon: Building2,
    title: "Enterprise Sales",
    description: "Custom solutions for large teams",
    contact: "enterprise@callengo.com",
    href: "mailto:enterprise@callengo.com",
  },
];

const offices = [
  {
    city: "San Francisco",
    address: "123 Market Street, Suite 500",
    country: "United States",
  },
  {
    city: "London",
    address: "45 King William Street",
    country: "United Kingdom",
  },
];

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
        {/* Hero Section */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-display-sm mb-6">
                Let's talk about <span className="gradient-text">your goals</span>
              </h1>
              <p className="text-xl text-slate-600">
                Have questions? Want to see how much revenue you could recover?
                We would love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl gradient-bg-subtle flex items-center justify-center mb-4 group-hover:gradient-bg transition-colors">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{method.title}</h3>
                  <p className="text-sm text-slate-500 mb-2">
                    {method.description}
                  </p>
                  <p className="text-sm font-medium text-slate-900">
                    {method.contact}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-2">Send us a message</h2>
                <p className="text-slate-600 mb-8">
                  Fill out the form below and we'll get back to you within one
                  business day.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-2xl border border-green-200 p-8 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-slate-600">
                      Thanks for reaching out. We'll get back to you within 24
                      hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-200 transition-colors outline-none"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-200 transition-colors outline-none"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium mb-2"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-200 transition-colors outline-none"
                          placeholder="Acme Inc"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium mb-2"
                        >
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-200 transition-colors outline-none"
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
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-200 transition-colors outline-none resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white gradient-bg rounded-full transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Info Side */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Office Locations */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-slate-600" />
                    Our Offices
                  </h3>
                  <div className="space-y-4">
                    {offices.map((office) => (
                      <div
                        key={office.city}
                        className="pb-4 border-b border-slate-100 last:border-0 last:pb-0"
                      >
                        <div className="font-medium">{office.city}</div>
                        <div className="text-sm text-slate-600">
                          {office.address}
                        </div>
                        <div className="text-sm text-slate-500">
                          {office.country}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-slate-600" />
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Saturday</span>
                      <span className="font-medium">10:00 AM - 2:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="gradient-bg rounded-2xl p-6 text-white">
                  <h3 className="font-semibold mb-4">Looking for something?</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <a
                        href="/docs"
                        className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                      >
                        → Documentation
                      </a>
                    </li>
                    <li>
                      <a
                        href="/help"
                        className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                      >
                        → Help Center
                      </a>
                    </li>
                    <li>
                      <a
                        href="/pricing"
                        className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                      >
                        → Pricing
                      </a>
                    </li>
                  </ul>
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
