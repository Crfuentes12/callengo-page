"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  CalendarCheck,
  Target,
} from "lucide-react";

const features = [
  {
    title: "Stop wasting money on bad data",
    description:
      "Data decays at 30% per year. Outdated contacts drain your marketing budget and waste your team's time on calls that go nowhere.",
    image: "/feature-verify.png",
    stats: { value: "95%", label: "data accuracy" },
    insight: "Bad data costs companies an average of $12.9M annually — Gartner",
    link: "/agents/data-validation",
    icon: ShieldCheck,
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
    icon: CalendarCheck,
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
    icon: Target,
  },
];

export default function Features() {
  return (
    <section className="section relative overflow-hidden" id="features">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03] pointer-events-none gradient-bg" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="badge badge-primary">
              Core Capabilities
            </span>
          </motion.div>

          <h2 className="text-display mb-8">
            Problems solved.
            <br />
            <span className="gradient-text">Revenue recovered.</span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-2xl">
            Your team should focus on closing deals, not chasing confirmations
            or cleaning spreadsheets.
          </p>
        </motion.div>

        {/* Accent line below header */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="accent-line mb-28 origin-left"
        />

        {/* Features */}
        <div className="space-y-40 md:space-y-52">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isReversed = index % 2 === 1;

            return (
              <div key={feature.title} className="relative">
                {/* Large decorative number */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8 }}
                  className={`absolute -top-16 md:-top-20 ${
                    isReversed ? "right-0 md:right-8" : "left-0 md:left-8"
                  } select-none pointer-events-none`}
                >
                  <span
                    className="text-[8rem] md:text-[12rem] font-bold leading-none tracking-tighter opacity-[0.04]"
                    style={{
                      fontFamily: "var(--font-display)",
                      background:
                        "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    0{index + 1}
                  </span>
                </motion.div>

                <div
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
                >
                  {/* Text Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={isReversed ? "lg:order-2" : ""}
                  >
                    {/* Number + Icon row */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-sm font-mono font-semibold tracking-widest text-accent uppercase">
                        0{index + 1}
                      </span>
                      <div className="accent-line" />
                      <div className="w-10 h-10 rounded-xl gradient-bg-subtle flex items-center justify-center">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                    </div>

                    <h3 className="text-display-xs md:text-display-sm mb-6">
                      {feature.title}
                    </h3>

                    <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Stat */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="mb-8"
                    >
                      <div className="text-6xl md:text-7xl font-bold stat-number leading-none mb-1">
                        {feature.stats.value}
                      </div>
                      <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                        {feature.stats.label}
                      </div>
                    </motion.div>

                    {/* Insight quote */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="card-glass mb-8 relative overflow-hidden"
                    >
                      <div
                        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full"
                        style={{
                          background:
                            "linear-gradient(180deg, var(--color-primary) 0%, var(--color-accent) 100%)",
                        }}
                      />
                      <p className="text-sm text-slate-500 italic pl-3 leading-relaxed">
                        {feature.insight}
                      </p>
                    </motion.div>

                    {/* CTA Link */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <Link
                        href={feature.link}
                        className="btn btn-ghost group cursor-pointer !px-0 text-accent font-semibold hover:text-accent-dark"
                      >
                        Learn more
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </Link>
                    </motion.div>
                  </motion.div>

                  {/* Feature Image */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isReversed ? -60 : 60,
                      rotateY: isReversed ? 4 : -4,
                    }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={isReversed ? "lg:order-1" : ""}
                    style={{ perspective: 1200 }}
                  >
                    <div className="relative group">
                      {/* Glow behind card */}
                      <div
                        className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(30, 45, 107, 0.15) 0%, rgba(79, 95, 232, 0.15) 100%)",
                        }}
                      />

                      {/* Decorative dot pattern behind */}
                      <div
                        className={`absolute bg-dots w-48 h-48 rounded-2xl opacity-60 pointer-events-none ${
                          isReversed
                            ? "-left-6 -bottom-6"
                            : "-right-6 -bottom-6"
                        }`}
                      />

                      {/* Glass card wrapper */}
                      <div className="relative card-glass !p-3 accent-glow-electric hover:-translate-y-1 transition-transform duration-500 cursor-pointer">
                        <div className="relative aspect-video overflow-hidden rounded-xl">
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            priority={index === 0}
                          />
                        </div>
                      </div>

                      {/* Floating accent element */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 0.6,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className={`absolute -top-3 ${
                          isReversed ? "-right-3" : "-left-3"
                        } z-10`}
                      >
                        <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center shadow-lg animate-float">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Divider between features */}
                {index < features.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="divider-gradient mt-40 md:mt-52 origin-center opacity-40"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
