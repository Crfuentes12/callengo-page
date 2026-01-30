"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Stop wasting money on bad data",
    description: "Outdated contacts cost you campaigns. Clean your database and reach the right people every time.",
    image: "/images/feature-verify.jpg",
    stats: { value: "95%", label: "data accuracy" },
    link: "/agents/data-validation",
  },
  {
    title: "Fill your calendar, not your voicemail",
    description: "Every no-show is lost revenue. Keep your schedule full and your customers accountable.",
    image: "/images/feature-appointments.jpg",
    stats: { value: "60%", label: "fewer no-shows" },
    link: "/agents/appointment-confirmation",
  },
  {
    title: "Be first, win more deals",
    description: "The fastest response wins. Reach every lead in seconds while your competitors check their inbox.",
    image: "/images/feature-leads.jpg",
    stats: { value: "<1min", label: "response time" },
    link: "/agents/lead-qualification",
  },
];

export default function Features() {
  return (
    <section className="section bg-slate-50" id="features">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-20"
        >
          <h2 className="text-display-sm mb-6">
            Problems solved.
            <br />
            Revenue recovered.
          </h2>
          <p className="text-xl text-slate-600">
            Your team should focus on closing deals, not chasing confirmations
            or cleaning spreadsheets.
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
                  <span className="text-5xl font-bold text-slate-200">0{index + 1}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-semibold mb-6">
                  {feature.title}
                </h3>

                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  {feature.description}
                </p>

                <div className="flex items-center gap-8 mb-8">
                  <div>
                    <div className="text-4xl font-bold stat-number">{feature.stats.value}</div>
                    <div className="text-sm text-slate-500">{feature.stats.label}</div>
                  </div>
                </div>

                <Link
                  href={feature.link}
                  className="inline-flex items-center gap-2 text-slate-900 font-medium hover:gap-3 transition-all"
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
                  <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-slate-200 rounded-2xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
