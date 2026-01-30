"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Callengo transformed our sales process. Our SDRs now only talk to qualified leads, and our conversion rate has tripled.",
    author: "Sarah Mitchell",
    role: "VP of Sales",
    company: "TechScale Solutions",
    metric: { value: "3x", label: "conversion rate" },
  },
  {
    id: 2,
    quote:
      "We used to have a 28% no-show rate for our appointments. After implementing Callengo's confirmation agent, we're down to 9%.",
    author: "Dr. James Chen",
    role: "Practice Owner",
    company: "Smile Dental Group",
    metric: { value: "68%", label: "fewer no-shows" },
  },
  {
    id: 3,
    quote:
      "Callengo verified 50,000 contacts in a week - something that would have taken our team months. The data quality is now at 95%+.",
    author: "Michael Torres",
    role: "Director of Operations",
    company: "GlobalReach Marketing",
    metric: { value: "50K", label: "contacts verified" },
  },
  {
    id: 4,
    quote:
      "New leads get a call within 60 seconds, and we're qualifying them before competitors even know they exist.",
    author: "Emma Rodriguez",
    role: "Head of Growth",
    company: "Velocity SaaS",
    metric: { value: "<60s", label: "response time" },
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
    <section className="section" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-20"
        >
          <h2 className="text-display-sm mb-6">
            Results that speak
            <br />
            for themselves
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Left - Quote */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-10">
                  "{testimonials[currentIndex].quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-white font-semibold">
                    {testimonials[currentIndex].author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-slate-500 text-sm">
                      {testimonials[currentIndex].role},{" "}
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-10">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-slate-200 hover:border-primary hover:text-primary flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-slate-200 hover:border-primary hover:text-primary flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <span className="text-sm text-slate-400 ml-4">
                {currentIndex + 1} / {testimonials.length}
              </span>
            </div>
          </div>

          {/* Right - Metric Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="gradient-bg rounded-3xl p-12 text-white text-center"
              >
                <div className="text-7xl md:text-8xl font-bold mb-4">
                  {testimonials[currentIndex].metric.value}
                </div>
                <div className="text-xl text-white/70">
                  {testimonials[currentIndex].metric.label}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Decorative */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-slate-200 rounded-3xl" />
          </div>
        </div>

      </div>
    </section>
  );
}
