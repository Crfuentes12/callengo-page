"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Verify your database",
    description: "Clean contact data automatically. Verify phone numbers, update emails, and remove bad leads.",
    image: "/images/feature-verify.jpg",
    stats: { value: "95%", label: "accuracy rate" },
  },
  {
    title: "Confirm appointments",
    description: "Reduce no-shows by up to 60%. Automated confirmation calls 24-48 hours before appointments.",
    image: "/images/feature-appointments.jpg",
    stats: { value: "60%", label: "fewer no-shows" },
  },
  {
    title: "Qualify every lead",
    description: "Respond to leads in under 60 seconds. AI qualifies using BANT criteria before sales touches them.",
    image: "/images/feature-leads.jpg",
    stats: { value: "<1min", label: "response time" },
  },
];

export default function Features() {
  return (
    <section className="section bg-gray-50" id="features">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-20"
        >
          <span className="badge badge-outline mb-4">How it works</span>
          <h2 className="text-display-sm mb-6">
            AI agents that handle
            <br />
            your calls at scale
          </h2>
          <p className="text-xl text-gray-600">
            From data validation to lead qualification, our AI agents work 24/7
            to automate your phone operations.
          </p>
        </motion.div>

        {/* Features - Vertical Stack */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="text-5xl font-bold text-gray-200">0{index + 1}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-semibold mb-6">
                  {feature.title}
                </h3>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {feature.description}
                </p>

                <div className="flex items-center gap-8 mb-8">
                  <div>
                    <div className="text-4xl font-bold text-dark">{feature.stats.value}</div>
                    <div className="text-sm text-gray-500">{feature.stats.label}</div>
                  </div>
                </div>

                <Link
                  href={`/agents/${index === 0 ? 'data-validation' : index === 1 ? 'appointment-confirmation' : 'lead-qualification'}`}
                  className="inline-flex items-center gap-2 text-dark font-medium hover:gap-3 transition-all"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Image Placeholder */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative">
                  <div className="aspect-4-3 rounded-2xl img-placeholder overflow-hidden">
                    <span className="text-sm">Feature image placeholder</span>
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-gray-200 rounded-2xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
