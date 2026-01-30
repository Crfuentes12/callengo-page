"use client";

import { motion } from "framer-motion";
import {
  Upload,
  Settings,
  Rocket,
  BarChart,
  ArrowRight,
  FileSpreadsheet,
  Sliders,
  Phone,
  PieChart,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Import Your Contacts",
    description:
      "Upload your contact list via CSV, Excel, or connect directly to your CRM. We automatically normalize phone numbers and detect duplicates.",
    icon: Upload,
    detailIcon: FileSpreadsheet,
    features: [
      "CSV, Excel, JSON support",
      "CRM integrations",
      "Auto-deduplication",
      "Smart field mapping",
    ],
  },
  {
    number: "02",
    title: "Configure Your Agent",
    description:
      "Choose your AI agent, select a voice that matches your brand, and customize the conversation script to fit your needs.",
    icon: Settings,
    detailIcon: Sliders,
    features: [
      "77+ voice options",
      "Custom scripts",
      "Multi-language support",
      "Voicemail settings",
    ],
  },
  {
    number: "03",
    title: "Launch Your Campaign",
    description:
      "Hit start and watch your AI agents make calls at scale. Monitor progress in real-time and adjust as needed.",
    icon: Rocket,
    detailIcon: Phone,
    features: [
      "Real-time monitoring",
      "Smart scheduling",
      "Follow-up automation",
      "Concurrent calls",
    ],
  },
  {
    number: "04",
    title: "Analyze Results",
    description:
      "Review transcripts, extracted data, and insights from every call. Export verified data back to your systems.",
    icon: BarChart,
    detailIcon: PieChart,
    features: [
      "Full transcriptions",
      "AI-extracted data",
      "Sentiment analysis",
      "Export to CRM",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section className="section bg-background-secondary" id="how-it-works">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">
              Simple Process
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            From Setup to Results in{" "}
            <span className="gradient-text">Minutes</span>
          </h2>

          <p className="text-lg text-foreground-secondary">
            No complex integrations. No lengthy onboarding. Start making
            AI-powered calls in four simple steps.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <div className="bg-background rounded-3xl border border-border p-6 h-full hover:shadow-lg hover:border-primary/30 transition-all">
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <step.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-foreground text-background text-sm font-bold flex items-center justify-center">
                        {step.number}
                      </div>
                    </div>

                    {index < steps.length - 1 && (
                      <ArrowRight className="w-5 h-5 text-foreground-tertiary hidden lg:block" />
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>

                  <p className="text-foreground-secondary mb-6">
                    {step.description}
                  </p>

                  {/* Feature List */}
                  <div className="space-y-2">
                    {step.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-foreground-tertiary"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-foreground-secondary mb-6">
            Ready to automate your calls?
          </p>
          <a href="/signup" className="btn btn-primary">
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
