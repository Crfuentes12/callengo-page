"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Import contacts",
    description: "Upload your list via CSV, Excel, or connect your CRM directly.",
  },
  {
    number: "02",
    title: "Configure agent",
    description: "Choose a voice, customize the script, set your preferences.",
  },
  {
    number: "03",
    title: "Launch campaign",
    description: "Start calling at scale. Monitor in real-time.",
  },
  {
    number: "04",
    title: "Get results",
    description: "Review transcripts, extract data, export to your systems.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section bg-dark text-white" id="how-it-works">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gray-800 flex items-center justify-center">
                <span className="text-gray-600 text-sm">Dashboard preview</span>
              </div>
              {/* Overlapping card */}
              <div className="absolute -bottom-6 -right-6 w-48 h-32 bg-white rounded-xl shadow-xl p-4 hidden md:block">
                <div className="text-xs text-gray-500 mb-1">Calls completed</div>
                <div className="text-2xl font-bold text-dark">1,247</div>
                <div className="text-xs text-success mt-1">+23% vs last week</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Steps */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm text-gray-400 uppercase tracking-wider">How it works</span>
            <h2 className="text-display-sm mt-4 mb-12">
              Setup in minutes.
              <br />
              Results in hours.
            </h2>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-sm font-medium text-gray-400">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
