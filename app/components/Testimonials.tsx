"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Callengo transformed our sales process. Our SDRs now only talk to qualified leads, and our conversion rate has tripled.",
    author: "Sarah Mitchell",
    role: "VP of Sales",
    company: "TechScale Inc.",
    metric: { value: "3x", label: "conversion rate" },
  },
  {
    id: 2,
    quote:
      "We used to have a 28% no-show rate for our appointments. After implementing Callengo's confirmation agent, we're down to 9%.",
    author: "Dr. James Chen",
    role: "Practice Owner",
    company: "ChenMed Clinic",
    metric: { value: "68%", label: "fewer no-shows" },
  },
  {
    id: 3,
    quote:
      "Callengo verified 50,000 contacts in a week — something that would have taken our team months. The data quality is now at 95%+.",
    author: "Michael Torres",
    role: "Director of Operations",
    company: "DataForce Global",
    metric: { value: "50K", label: "contacts verified" },
  },
  {
    id: 4,
    quote:
      "New leads get a call within 60 seconds, and we're qualifying them before competitors even know they exist.",
    author: "Emma Rodriguez",
    role: "Head of Growth",
    company: "Launchpad.io",
    metric: { value: "<60s", label: "response time" },
  },
  {
    id: 5,
    quote:
      "The ROI was immediate. We saved 120+ hours per month on repetitive outbound calls, and our team morale skyrocketed.",
    author: "David Park",
    role: "COO",
    company: "Velocity SaaS",
    metric: { value: "120h", label: "saved per month" },
  },
];

const slideVariants = {
  enterFromRight: { x: 300, opacity: 0 },
  enterFromLeft: { x: -300, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exitToLeft: { x: -300, opacity: 0 },
  exitToRight: { x: 300, opacity: 0 },
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Get visible cards: prev, current, next
  const prevIdx = (currentIndex - 1 + testimonials.length) % testimonials.length;
  const nextIdx = (currentIndex + 1) % testimonials.length;

  return (
    <section className="section bg-white/80" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge badge-primary mb-4">Testimonials</span>
          <h2 className="text-display-sm text-foreground mb-4">
            Teams are closing more deals
            <br />
            <span className="text-electric">with less effort</span>
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Join thousands of sales professionals who are prospecting smarter with Callengo.
          </p>
        </motion.div>

        {/* Carousel with side arrows */}
        <div className="relative flex items-center gap-4 md:gap-6">
          {/* Left arrow */}
          <button
            onClick={goPrev}
            className="w-11 h-11 rounded-full border border-border hover:border-electric/30 hover:bg-electric/5 flex items-center justify-center transition-all cursor-pointer shrink-0"
          >
            <ChevronLeft className="w-5 h-5 text-foreground-secondary" />
          </button>

          {/* Cards container */}
          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                initial={direction === "right" ? "enterFromRight" : "enterFromLeft"}
                animate="center"
                exit={direction === "right" ? "exitToLeft" : "exitToRight"}
                variants={slideVariants}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="grid grid-cols-1 md:grid-cols-3 gap-5"
              >
                {[prevIdx, currentIndex, nextIdx].map((idx, pos) => {
                  const t = testimonials[idx];
                  const isCenter = pos === 1;
                  return (
                    <div
                      key={`${currentIndex}-${pos}`}
                      className={`rounded-2xl border p-7 flex flex-col transition-all ${
                        isCenter
                          ? "border-electric/20 bg-white shadow-lg"
                          : "border-border bg-background-secondary hidden md:flex opacity-60"
                      }`}
                      style={isCenter ? {
                        boxShadow: "0 8px 40px rgba(79, 95, 232, 0.10), 0 2px 12px rgba(0,0,0,0.04)",
                      } : {}}
                    >
                      {/* Stars */}
                      <div className="flex gap-0.5 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-electric text-electric" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-foreground text-sm leading-relaxed mb-5 flex-1" style={{ fontFamily: "var(--font-body)" }}>
                        &ldquo;{t.quote}&rdquo;
                      </p>

                      {/* Metric pill */}
                      <div className="rounded-lg p-3 mb-5 text-center gradient-bg">
                        <span className="text-2xl font-bold text-white">{t.metric.value}</span>
                        <span className="text-xs text-white/60 ml-2" style={{ fontFamily: "var(--font-body)" }}>{t.metric.label}</span>
                      </div>

                      {/* Author */}
                      <div className="flex items-center gap-3">
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold text-xs"
                          style={{ background: "linear-gradient(135deg, #4F5FE8 0%, #1E2D6B 100%)" }}
                        >
                          {t.author.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <div className="font-semibold text-foreground text-sm">{t.author}</div>
                          <div className="text-foreground-tertiary text-xs" style={{ fontFamily: "var(--font-body)" }}>
                            {t.role} · {t.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right arrow */}
          <button
            onClick={goNext}
            className="w-11 h-11 rounded-full border border-border hover:border-electric/30 hover:bg-electric/5 flex items-center justify-center transition-all cursor-pointer shrink-0"
          >
            <ChevronRight className="w-5 h-5 text-foreground-secondary" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? "right" : "left");
                setCurrentIndex(i);
              }}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                i === currentIndex
                  ? "w-6 h-2 bg-electric"
                  : "w-2 h-2 bg-border hover:bg-foreground-tertiary"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
