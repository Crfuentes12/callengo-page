"use client";

import { useState } from "react";
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
    avatar: "/testimonials/sarah.png",
  },
  {
    id: 2,
    quote:
      "We used to have a 28% no-show rate for our appointments. After implementing Callengo's confirmation agent, we're down to 9%.",
    author: "Dr. James Chen",
    role: "Practice Owner",
    metric: { value: "68%", label: "fewer no-shows" },
    avatar: "/testimonials/james.png",
  },
  {
    id: 3,
    quote:
      "Callengo verified 50,000 contacts in a week - something that would have taken our team months. The data quality is now at 95%+.",
    author: "Michael Torres",
    role: "Director of Operations",
    metric: { value: "50K", label: "contacts verified" },
    avatar: "/testimonials/michael.png",
  },
  {
    id: 4,
    quote:
      "New leads get a call within 60 seconds, and we're qualifying them before competitors even know they exist.",
    author: "Emma Rodriguez",
    role: "Head of Growth",
    metric: { value: "<60s", label: "response time" },
    avatar: "/testimonials/emma.png",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="section bg-background-secondary" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-20"
        >
          <span className="badge badge-primary mb-4">Testimonials</span>
          <h2 className="text-display-sm text-foreground mb-4">
            Results that speak
            <br />
            for themselves
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Quote */}
          <div className="lg:col-span-3 relative">
            <Quote className="w-10 h-10 text-border mb-6" />
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-2xl md:text-3xl font-medium leading-relaxed text-foreground mb-10">
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-border bg-background-tertiary">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-foreground-tertiary text-sm" style={{ fontFamily: "var(--font-body)" }}>
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-3 mt-10">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-border hover:border-foreground-tertiary flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 text-foreground-secondary" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-border hover:border-foreground-tertiary flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4 text-foreground-secondary" />
              </button>
              <span className="text-sm text-foreground-tertiary ml-3" style={{ fontFamily: "var(--font-body)" }}>
                {currentIndex + 1} / {testimonials.length}
              </span>
            </div>
          </div>

          {/* Metric Card */}
          <div className="lg:col-span-2 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-2xl p-12 text-center overflow-hidden bg-deep-indigo"
                style={{ boxShadow: "0 8px 40px rgba(30, 45, 107, 0.35), 0 4px 16px rgba(79, 95, 232, 0.20), 0 0 0 1px rgba(79, 95, 232, 0.10)" }}
              >
                <div className="absolute inset-0 bg-grid-dark opacity-50" />
                <div className="glow-orb glow-orb-primary w-60 h-60 top-0 right-0" />
                <div className="relative z-10">
                  <div className="text-7xl md:text-8xl font-bold text-white mb-3">
                    {testimonials[currentIndex].metric.value}
                  </div>
                  <div className="text-base text-white/50" style={{ fontFamily: "var(--font-body)" }}>
                    {testimonials[currentIndex].metric.label}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
