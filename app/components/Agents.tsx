"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const agents = [
  {
    id: "data-validation",
    name: "Data Validation",
    description: "Clean your CRM. Verify phone numbers, update emails, detect wrong contacts.",
    href: "/agents/data-validation",
    metric: { value: "95%+", label: "accuracy" },
  },
  {
    id: "appointment-confirmation",
    name: "Appointment Confirmation",
    description: "Reduce no-shows. Automated calls to confirm, remind, and reschedule.",
    href: "/agents/appointment-confirmation",
    metric: { value: "60%", label: "fewer no-shows" },
  },
  {
    id: "lead-qualification",
    name: "Lead Qualification",
    description: "Qualify leads instantly. BANT scoring, interest detection, meeting scheduling.",
    href: "/agents/lead-qualification",
    metric: { value: "<1min", label: "response time" },
  },
];

export default function Agents() {
  return (
    <section className="section" id="agents">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="badge badge-outline mb-4">AI Agents</span>
          <h2 className="text-display-sm mb-6">
            Three agents.
            <br />
            Three solutions.
          </h2>
          <p className="text-xl text-gray-600">
            Purpose-built AI agents for your most time-consuming phone tasks.
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
                className="block h-full bg-white rounded-2xl border border-gray-200 p-8 card-hover group"
              >
                {/* Image Placeholder */}
                <div className="aspect-video rounded-xl img-placeholder mb-6 overflow-hidden">
                  <span className="text-xs">Agent preview</span>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {agent.name}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {agent.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div>
                    <div className="text-2xl font-bold text-dark">{agent.metric.value}</div>
                    <div className="text-xs text-gray-500">{agent.metric.label}</div>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-medium text-gray-500 group-hover:text-dark group-hover:gap-2 transition-all">
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
