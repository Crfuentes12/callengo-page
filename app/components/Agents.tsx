"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const agents = [
  {
    id: "data-validation",
    name: "Data Validation",
    description: "Stop wasting campaigns on bad contacts. Get accurate data before you spend another dollar.",
    href: "/agents/data-validation",
    metric: { value: "95%+", label: "accuracy" },
  },
  {
    id: "appointment-confirmation",
    name: "Appointment Confirmation",
    description: "Turn empty time slots into revenue. Keep customers accountable and your schedule full.",
    href: "/agents/appointment-confirmation",
    metric: { value: "60%", label: "fewer no-shows" },
  },
  {
    id: "lead-qualification",
    name: "Lead Qualification",
    description: "Your sales team should talk to buyers, not tire kickers. Filter the noise automatically.",
    href: "/agents/lead-qualification",
    metric: { value: "<1min", label: "response time" },
  },
];

export default function Agents() {
  return (
    <section className="section" id="agents">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="badge badge-primary mb-4">Three Problems Solved</span>
          <h2 className="text-display-sm mb-6">
            Stop the leaks.
            <br />
            <span className="gradient-text">Keep the revenue.</span>
          </h2>
          <p className="text-xl text-slate-600">
            Every missed appointment, bad contact, or slow response is money walking out the door.
          </p>
        </motion.div>

        {/* Agents Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={agent.href}
                className="block h-full bg-white rounded-2xl border border-slate-200 p-8 card-hover group relative overflow-hidden"
              >
                {/* Gradient hover effect */}
                <div className="absolute inset-0 gradient-bg opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

                {/* Image Placeholder */}
                <div className="aspect-video rounded-xl img-placeholder mb-6 overflow-hidden relative">
                  <span className="text-xs">Agent preview</span>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors relative">
                  {agent.name}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed relative">
                  {agent.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-slate-100 relative">
                  <div>
                    <div className="text-2xl font-bold stat-number">{agent.metric.value}</div>
                    <div className="text-xs text-slate-500">{agent.metric.label}</div>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-medium text-slate-500 group-hover:text-primary group-hover:gap-2 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
