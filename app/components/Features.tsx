"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
    color: "from-secondary/10 to-cyan/5",
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
    color: "from-accent/10 to-cyan/5",
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
    color: "from-secondary/10 to-pink/5",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
    >
      <div className={index % 2 === 1 ? "lg:order-2" : ""}>
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="text-sm font-semibold text-foreground-tertiary tracking-wide">
            0{index + 1}
          </span>
          <div className="w-8 h-px bg-border-dark" />
        </div>

        <h3 className="text-3xl md:text-4xl font-semibold text-foreground mb-5 leading-tight">
          {feature.title}
        </h3>

        <p className="text-lg text-foreground-secondary mb-6 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
          {feature.description}
        </p>

        <div className="p-4 rounded-xl border border-border bg-background-secondary mb-8">
          <p className="text-sm text-foreground-secondary italic" style={{ fontFamily: "var(--font-body)" }}>
            &ldquo;{feature.insight}&rdquo;
          </p>
        </div>

        <div className="flex items-center gap-8 mb-8">
          <div>
            <div className="text-4xl font-bold gradient-text">
              {feature.stats.value}
            </div>
            <div className="text-sm text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>
              {feature.stats.label}
            </div>
          </div>
        </div>

        <Link
          href={feature.link}
          className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all group text-sm"
        >
          Learn more
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className={index % 2 === 1 ? "lg:order-1" : ""}>
        <div className="relative">
          <div className={`relative aspect-video overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${feature.color}`}>
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section className="section bg-background" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-24"
        >
          <span className="badge badge-primary mb-4">Why Callengo</span>
          <h2 className="text-display-sm mb-6 text-foreground">
            Problems solved.
            <br />
            <span className="gradient-text">Revenue recovered.</span>
          </h2>
          <p className="text-lg text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>
            Your team should focus on closing deals, not chasing confirmations
            or cleaning spreadsheets.
          </p>
        </motion.div>

        <div className="space-y-40">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
