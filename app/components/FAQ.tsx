"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Mail } from "lucide-react";

const faqs = [
  {
    question: "How natural does the AI voice sound?",
    answer:
      "Callengo uses the latest neural voice models with 77+ natural-sounding voices across 6 languages. Most call recipients can't tell they're speaking to an AI. You can preview and choose the voice that best fits your brand.",
  },
  {
    question: "Can I customize what the agent says?",
    answer:
      "Absolutely. You write the script, define objectives, and set conditional logic using our guided editor — no coding required. The agent follows your script while handling unexpected questions intelligently.",
  },
  {
    question: "What happens when someone asks an unexpected question?",
    answer:
      "The agent uses configurable fallback behaviors: it can acknowledge the question and redirect to the main objective, offer to have a team member follow up, or escalate the call to a live agent in real time.",
  },
  {
    question: "How many minutes do I get per month?",
    answer:
      "Plans range from 15 one-time minutes (Free) to 3,000 monthly minutes (Teams). Need more? Add the Calls Booster add-on for $35 per 500 additional minutes. Enterprise plans offer custom volumes.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. The Free plan gives you 15 minutes to test with up to 20 contacts — no credit card required. You can launch a real campaign and see results before committing to a paid plan.",
  },
  {
    question: "Do you integrate with CRM systems?",
    answer:
      "Yes! We offer native integrations with HubSpot, Salesforce, Pipedrive, Zoho CRM, Microsoft Dynamics 365, and Clio. Data syncs automatically after each call — no manual export needed.",
  },
  {
    question: "What other integrations do you support?",
    answer:
      "We integrate with 16+ tools including Google Calendar, Outlook Calendar, Google Meet, Zoom, Microsoft Teams, Slack, SimplyBook.me, Google Sheets, Stripe, and Webhooks for custom workflows. Check our documentation for details.",
  },
  {
    question: "What languages are supported?",
    answer:
      "Callengo supports English, Spanish, French, German, Portuguese, and Italian with native-quality voices. Each language has multiple voice options. More languages are being added regularly.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. All plans are month-to-month with no long-term contracts. Annual billing gives you a 12% discount but you can still cancel before the next billing cycle. No hidden fees or cancellation penalties.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section bg-white/80" id="faq">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left - Header */}
          <div className="lg:col-span-2 lg:sticky lg:top-28 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="badge badge-primary mb-4">FAQ</span>
              <h2 className="text-display-sm text-foreground mb-5">
                Common
                <br />
                questions
              </h2>
              <p className="text-foreground-secondary mb-8" style={{ fontFamily: "var(--font-body)" }}>
                Everything you need to know about Callengo. Can&apos;t find what
                you&apos;re looking for?
              </p>

              <div className="p-5 rounded-xl border border-border bg-background-secondary">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/8 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Still have questions?</div>
                    <div className="text-xs text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>We&apos;re here to help</div>
                  </div>
                </div>
                <a
                  href="mailto:sales@callengo.com"
                  className="text-sm font-medium text-secondary hover:underline"
                >
                  sales@callengo.com
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right - Questions */}
          <div className="lg:col-span-3">
            <div className="divide-y divide-border">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex items-start justify-between gap-4 w-full text-left py-5 group cursor-pointer"
                    >
                      <span className="text-foreground font-medium text-[15px] leading-relaxed group-hover:text-foreground/80 transition-colors">
                        {faq.question}
                      </span>
                      <span className="shrink-0 mt-1">
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-foreground-tertiary" />
                        ) : (
                          <Plus className="w-4 h-4 text-foreground-tertiary" />
                        )}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-foreground-secondary text-sm leading-relaxed pb-5" style={{ fontFamily: "var(--font-body)" }}>
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
