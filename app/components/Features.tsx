"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Stop wasting money on bad data",
    description:
      "Data decays at 30% per year. Outdated contacts drain your marketing budget and waste your team's time on calls that go nowhere.",
    image: "/feature-verify.png",
    stats: { value: "95%", label: "data accuracy" },
    insight: "Bad data costs companies an average of $12.9M annually — Gartner",
    link: "/agents/data-validation",
  },
  {
    title: "Fill your calendar, not your voicemail",
    description:
      "Industry no-show rates average 20-30%. Each empty slot is revenue you'll never recover.",
    image: "/feature-appointments.png",
    stats: { value: "60%", label: "fewer no-shows" },
    insight:
      "No-shows cost the healthcare industry alone $150B per year — SCI Solutions",
    link: "/agents/appointment-confirmation",
  },
  {
    title: "Stop wasting time on bad leads",
    description:
      "Sales reps waste 50% of their time on leads that will never buy. Let AI score and rank every lead first.",
    image: "/feature-leads.png",
    stats: { value: "50%", label: "less time wasted" },
    insight:
      "67% of lost sales are due to reps chasing unqualified leads — MarketingSherpa",
    link: "/agents/lead-qualification",
  },
];

export default function Features() {
  return (
    <section className="section bg-background-secondary" id="features">
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
            <span className="gradient-text">Revenue recovered.</span>
          </h2>

          <p className="text-xl text-foreground-secondary">
            Your team should focus on closing deals, not chasing confirmations
            or cleaning spreadsheets.
          </p>
        </motion.div>

        {/* Features */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              {/* Text Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="text-5xl font-bold text-border-dark">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-semibold mb-6">
                  {feature.title}
                </h3>

                <p className="text-xl text-foreground-secondary mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="p-4 bg-background-tertiary rounded-xl mb-8">
                  <p className="text-sm text-foreground-secondary italic">
                    {feature.insight}
                  </p>
                </div>

                <div className="flex items-center gap-8 mb-8">
                  <div>
                    <div className="text-4xl font-bold stat-number">
                      {feature.stats.value}
                    </div>
                    <div className="text-sm text-foreground-secondary">
                      {feature.stats.label}
                    </div>
                  </div>
                </div>

                <Link
                  href={feature.link}
                  className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all group"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Feature Image */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative">
                  <div className="relative aspect-video overflow-hidden rounded-2xl border border-border">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>

                  <div
                    className="absolute -z-10 -bottom-3 -right-3 w-full h-full rounded-2xl gradient-bg opacity-[0.06]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
