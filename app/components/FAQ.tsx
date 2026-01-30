"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How realistic do the AI voices sound?",
    answer:
      "Our AI voices are powered by state-of-the-art voice synthesis technology from Bland AI. With 77+ professional voices and natural conversation patterns, most people can't tell they're speaking with an AI. We also add subtle office background sounds to make calls feel even more authentic.",
  },
  {
    question: "Can I customize what the AI agent says?",
    answer:
      "Yes. You have full control over your agent's conversation script. You can customize greetings, questions, objection handling, and closing statements. The AI will follow your script while adapting naturally to the conversation flow.",
  },
  {
    question: "What happens if someone asks a question not in the script?",
    answer:
      "Our AI agents are powered by GPT-4o, which means they can understand context and handle unexpected questions intelligently. They'll either provide a relevant response based on the conversation context or gracefully redirect back to the main purpose of the call.",
  },
  {
    question: "Is there a limit to how many calls I can make?",
    answer:
      "Each plan includes a certain number of minutes per month. You can make as many calls as you want within your minute allowance. If you exceed your limit, overage minutes are billed at your plan's overage rate. There's no hard cap - you can always keep calling.",
  },
  {
    question: "How does the free trial work?",
    answer:
      "Our free plan gives you 15 minutes of calls to test the platform - no credit card required. You can create one agent and make real calls to see exactly how Callengo works. These minutes don't renew, but they're enough to experience the full product.",
  },
  {
    question: "Can I integrate Callengo with my CRM?",
    answer:
      "CRM integrations are available on our Teams and Enterprise plans. We currently support Salesforce and HubSpot in beta, with more integrations coming soon. All plans can export data via CSV or JSON that can be imported into any system.",
  },
  {
    question: "What about TCPA compliance and do-not-call lists?",
    answer:
      "Callengo provides tools to help you stay compliant, but compliance is ultimately your responsibility. We recommend using our platform for B2B calls and ensuring you have proper consent for any consumer calls. We don't scrub against DNC lists automatically - you should do this before importing contacts.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "Most users are making their first calls within 5-10 minutes of signing up. Just upload your contacts, configure your agent (or use one of our templates), and launch. There's no complex setup or integration required to get started.",
  },
  {
    question: "What languages are supported?",
    answer:
      "We have voice agents optimized for English (US, UK, Australian accents), Spanish, French, German, and more. Multi-language support is available on all plans, though some voices work better than others for non-English calls. Contact us for specific language needs.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel anytime with no penalties. Your plan remains active until the end of your billing period. We don't do long-term contracts on our standard plans (Enterprise plans may have annual commitments for better pricing).",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section" id="faq">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
            <span className="text-sm font-medium text-secondary">FAQ</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>

          <p className="text-lg text-foreground-secondary">
            Everything you need to know about Callengo. Can't find the answer
            you're looking for? Contact our support team.
          </p>
        </motion.div>

        {/* FAQ Items */}
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
                className={`bg-background rounded-2xl border transition-all ${
                  openIndex === index
                    ? "border-primary shadow-lg"
                    : "border-border hover:border-primary/30"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === index
                        ? "bg-primary text-white"
                        : "bg-background-secondary text-foreground-secondary"
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
                      <div className="px-6 pb-6 text-foreground-secondary leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 p-8 bg-background-secondary rounded-3xl"
        >
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Still have questions?
          </h3>
          <p className="text-foreground-secondary mb-6">
            Our team is here to help. Reach out and we'll get back to you within
            24 hours.
          </p>
          <a href="/contact" className="btn btn-primary">
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
}
