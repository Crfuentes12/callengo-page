"use client";

import { useState, useEffect, useCallback } from "react";
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

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Get 3 visible cards (prev, current, next)
  const getVisibleIndices = () => {
    const prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const next = (currentIndex + 1) % testimonials.length;
    return [prev, currentIndex, next];
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section className="section bg-background" id="testimonials">
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

        {/* Carousel */}
        <div className="relative">
          {/* Cards container */}
          <div className="flex gap-6 justify-center items-stretch">
            {visibleIndices.map((idx, pos) => {
              const t = testimonials[idx];
              const isCenter = pos === 1;
              return (
                <motion.div
                  key={t.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: isCenter ? 1 : 0.5,
                    scale: isCenter ? 1 : 0.92,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`flex-shrink-0 w-full max-w-sm rounded-2xl border p-8 flex flex-col transition-all ${
                    isCenter
                      ? "border-electric/20 bg-white shadow-lg"
                      : "border-border bg-background-secondary hidden md:flex"
                  }`}
                  style={isCenter ? {
                    boxShadow: "0 8px 40px rgba(79, 95, 232, 0.10), 0 2px 12px rgba(0,0,0,0.04)",
                  } : {}}
                >
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-electric text-electric"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-foreground text-base leading-relaxed mb-6 flex-1" style={{ fontFamily: "var(--font-body)" }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Metric */}
                  <div
                    className="rounded-xl p-4 mb-6 text-center relative overflow-hidden gradient-bg"
                  >
                    <div className="relative z-10">
                      <div className="text-3xl font-bold text-white mb-1">
                        {t.metric.value}
                      </div>
                      <div className="text-xs text-white/60" style={{ fontFamily: "var(--font-body)" }}>
                        {t.metric.label}
                      </div>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                      style={{
                        background: "linear-gradient(135deg, #4F5FE8 0%, #1E2D6B 100%)",
                      }}
                    >
                      {t.author.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">
                        {t.author}
                      </div>
                      <div className="text-foreground-tertiary text-xs" style={{ fontFamily: "var(--font-body)" }}>
                        {t.role} · {t.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-border hover:border-foreground-tertiary flex items-center justify-center transition-colors cursor-pointer hover:bg-background-secondary"
            >
              <ChevronLeft className="w-4 h-4 text-foreground-secondary" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1);
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

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-border hover:border-foreground-tertiary flex items-center justify-center transition-colors cursor-pointer hover:bg-background-secondary"
            >
              <ChevronRight className="w-4 h-4 text-foreground-secondary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
