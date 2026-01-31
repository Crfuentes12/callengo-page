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
    <section className="section-dark section" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-slate-800/50 flex items-center justify-center border border-slate-700">
                <span className="text-slate-600 text-sm">Dashboard preview</span>
              </div>
              {/* Overlapping card with gradient border */}
              <div className="absolute -bottom-6 -right-6 w-52 h-36 bg-white rounded-xl shadow-xl p-5 hidden md:block">
                <div className="text-xs text-slate-500 mb-1">Calls completed</div>
                <div className="text-3xl font-bold stat-number">1,247</div>
                <div className="flex items-center gap-1 mt-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs text-green-600">+23% vs last week</span>
                </div>
              </div>
              {/* Gradient decoration */}
              <div className="absolute -z-10 -top-4 -left-4 w-full h-full gradient-bg opacity-30 rounded-2xl blur-xl" />
            </div>
          </motion.div>

          {/* Right - Steps */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display-sm mb-12">
              Setup in minutes.
              <br />
              <span className="gradient-text">Results in hours.</span>
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
                  <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-sm font-semibold text-white">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                    <p className="text-slate-400">{step.description}</p>
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
