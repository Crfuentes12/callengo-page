"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "How realistic do the AI voices sound?",
    answer:
      "Our AI voices are powered by state-of-the-art voice synthesis technology. With 77+ professional voices and natural conversation patterns, most people can't tell they're speaking with an AI.",
  },
  {
    question: "Can I customize what the AI agent says?",
    answer:
      "Yes. You have full control over your agent's conversation script. You can customize greetings, questions, objection handling, and closing statements. The AI will follow your script while adapting naturally to the conversation flow.",
  },
  {
    question: "What happens if someone asks an unexpected question?",
    answer:
      "Our AI agents can understand context and handle unexpected questions intelligently. They'll either provide a relevant response based on the conversation context or gracefully redirect back to the main purpose of the call.",
  },
  {
    question: "Is there a limit to how many calls I can make?",
    answer:
      "Each plan includes a certain number of minutes per month. You can make as many calls as you want within your minute allowance. If you exceed your limit, overage minutes are billed at your plan's overage rate.",
  },
  {
    question: "How does the free trial work?",
    answer:
      "Our free plan gives you 15 minutes of calls to test the platform - no credit card required. You can create one agent and make real calls to see exactly how Callengo works.",
  },
  {
    question: "Can I integrate Callengo with my CRM?",
    answer:
      "CRM integrations are available on our Teams and Enterprise plans. We currently support Salesforce and HubSpot, with more integrations coming soon. All plans can export data via CSV or JSON.",
  },
  {
    question: "What languages are supported?",
    answer:
      "We have voice agents optimized for English (US, UK, Australian accents), Spanish, French, German, and more. Multi-language support is available on all plans.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel anytime with no penalties. Your plan remains active until the end of your billing period. We don't do long-term contracts on standard plans.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section bg-gray-50" id="faq">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <h2 className="text-display-sm mb-6">
              Questions?
              <br />
              <span className="gradient-text">We've got answers.</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Everything you need to know about Callengo.
            </p>

            <div className="gradient-border p-6">
              <h4 className="font-semibold mb-2">Still have questions?</h4>
              <p className="text-gray-600 text-sm mb-4">
                Our team is here to help. Reach out and we'll get back to you
                within 24 hours.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 gradient-text font-medium hover:gap-3 transition-all"
              >
                Contact support
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div
                  className={`bg-white rounded-2xl border transition-all ${
                    openIndex === index
                      ? "border-dark shadow-sm"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-medium text-dark pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        openIndex === index
                          ? "gradient-bg text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {openIndex === index ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
