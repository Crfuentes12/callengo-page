"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Callengo transformed our sales process. Our SDRs now only talk to qualified leads, and our conversion rate has tripled.",
    author: "Sarah Mitchell",
    role: "VP of Sales",
    metric: { value: "3x", label: "conversion rate" },
    initials: "SM",
    gradientFrom: "#4F5FE8",
    gradientTo: "#6B7AFF",
  },
  {
    id: 2,
    quote:
      "We used to have a 28% no-show rate for our appointments. After implementing Callengo's confirmation agent, we're down to 9%.",
    author: "Dr. James Chen",
    role: "Practice Owner",
    metric: { value: "68%", label: "fewer no-shows" },
    initials: "JC",
    gradientFrom: "#3347D4",
    gradientTo: "#4F5FE8",
  },
  {
    id: 3,
    quote:
      "Callengo verified 50,000 contacts in a week - something that would have taken our team months. The data quality is now at 95%+.",
    author: "Michael Torres",
    role: "Director of Operations",
    metric: { value: "50K", label: "contacts verified" },
    initials: "MT",
    gradientFrom: "#1E2D6B",
    gradientTo: "#4F5FE8",
  },
  {
    id: 4,
    quote:
      "New leads get a call within 60 seconds, and we're qualifying them before competitors even know they exist.",
    author: "Emma Rodriguez",
    role: "Head of Growth",
    metric: { value: "<60s", label: "response time" },
    initials: "ER",
    gradientFrom: "#4F5FE8",
    gradientTo: "#3347D4",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  const goToTestimonial = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="section" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-24"
        >
          <div className="accent-line mb-6" />
          <h2 className="text-display-sm mb-4">
            Results that speak
            <br />
            <span className="gradient-text">for themselves</span>
          </h2>
          <p className="text-lg text-slate-500">
            See how leading teams are using Callengo to transform their
            operations.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-center mb-16">
          {/* Left - Quote */}
          <div className="relative min-h-[360px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1"
              >
                {/* Quote Icon */}
                <div className="mb-8">
                  <div className="w-12 h-12 rounded-xl gradient-bg-subtle flex items-center justify-center">
                    <Quote className="w-5 h-5 text-accent" />
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-2xl md:text-3xl lg:text-[2.1rem] font-semibold leading-[1.4] tracking-tight text-ink mb-12">
                  &ldquo;{current.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar - gradient circle with initials */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${current.gradientFrom} 0%, ${current.gradientTo} 100%)`,
                    }}
                  >
                    {current.initials}
                  </div>

                  <div>
                    <div className="font-semibold text-ink text-base">
                      {current.author}
                    </div>
                    <div className="text-slate-400 text-sm">{current.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-3 mt-12">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-slate-200 hover:border-accent hover:bg-accent hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-slate-200 hover:border-accent hover:bg-accent hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>

              {/* Navigation Dots */}
              <div className="flex items-center gap-2 ml-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`cursor-pointer transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? "w-8 h-2.5 gradient-bg"
                        : "w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right - Metric Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9, rotateY: -8 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: 8 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Dark card with glassmorphism */}
                <div
                  className="relative overflow-hidden rounded-3xl p-14 text-center"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(13, 17, 23, 0.95) 0%, rgba(30, 45, 107, 0.9) 50%, rgba(79, 95, 232, 0.85) 100%)",
                    backdropFilter: "blur(40px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow:
                      "0 24px 80px rgba(30, 45, 107, 0.3), 0 8px 32px rgba(79, 95, 232, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {/* Glass reflections */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div
                      className="absolute -top-24 -right-24 w-64 h-64 rounded-full"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
                      }}
                    />
                    <div
                      className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(79,95,232,0.2) 0%, transparent 70%)",
                      }}
                    />
                  </div>

                  {/* Label */}
                  <div className="relative z-10">
                    <div className="text-white/40 text-sm font-medium uppercase tracking-widest mb-6">
                      Key result
                    </div>

                    {/* Metric Value */}
                    <motion.div
                      key={`value-${currentIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="text-7xl md:text-8xl lg:text-9xl font-bold mb-4"
                      style={{
                        background:
                          "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {current.metric.value}
                    </motion.div>

                    {/* Metric Label */}
                    <motion.div
                      key={`label-${currentIndex}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.35, duration: 0.4 }}
                      className="text-lg text-white/50 font-medium"
                    >
                      {current.metric.label}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Decorative glow behind card */}
            <div
              className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full blur-3xl opacity-30"
              style={{
                background:
                  "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
