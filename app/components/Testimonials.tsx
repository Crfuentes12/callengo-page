"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Callengo transformed our sales process. Our SDRs now only talk to qualified leads, and our conversion rate has tripled. The AI voices are so realistic that most people don't even realize they're talking to an AI.",
    author: "Sarah Mitchell",
    role: "VP of Sales",
    company: "TechScale Solutions",
    avatar: "SM",
    rating: 5,
    metric: "3x conversion rate",
  },
  {
    id: 2,
    quote:
      "We used to have a 28% no-show rate for our dental appointments. After implementing Callengo's confirmation agent, we're down to 9%. That's thousands of dollars saved every month.",
    author: "Dr. James Chen",
    role: "Practice Owner",
    company: "Smile Dental Group",
    avatar: "JC",
    rating: 5,
    metric: "68% reduction in no-shows",
  },
  {
    id: 3,
    quote:
      "Our CRM was a mess with outdated data. Callengo verified 50,000 contacts in a week - something that would have taken our team months. The data quality is now at 95%+.",
    author: "Michael Torres",
    role: "Director of Operations",
    company: "GlobalReach Marketing",
    avatar: "MT",
    rating: 5,
    metric: "50K contacts verified",
  },
  {
    id: 4,
    quote:
      "The speed-to-lead improvement has been incredible. New leads get a call within 60 seconds, and we're qualifying them before competitors even know they exist.",
    author: "Emma Rodriguez",
    role: "Head of Growth",
    company: "Velocity SaaS",
    avatar: "ER",
    rating: 5,
    metric: "<60s response time",
  },
  {
    id: 5,
    quote:
      "I was skeptical about AI calls, but Callengo's voices are genuinely impressive. Our customers often compliment our 'team members' without knowing they're AI agents.",
    author: "David Park",
    role: "Customer Success Manager",
    company: "ServicePro Inc",
    avatar: "DP",
    rating: 5,
    metric: "98% satisfaction rate",
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
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
            <span className="text-sm font-medium text-secondary">
              Customer Stories
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Trusted by{" "}
            <span className="gradient-text">Growing Companies</span>
          </h2>

          <p className="text-lg text-foreground-secondary">
            See how businesses like yours are saving time and increasing revenue
            with Callengo's AI-powered calling platform.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full blur-xl" />
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-secondary/10 rounded-full blur-xl" />

          <div className="relative bg-background rounded-3xl border border-border p-8 md:p-12">
            <Quote className="w-12 h-12 text-primary/20 mb-6" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold text-lg">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonials[currentIndex].author}
                      </div>
                      <div className="text-foreground-secondary text-sm">
                        {testimonials[currentIndex].role} at{" "}
                        {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>

                  {/* Metric Badge */}
                  <div className="px-4 py-2 bg-accent/10 rounded-full">
                    <span className="text-sm font-semibold text-accent-dark">
                      {testimonials[currentIndex].metric}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8 pt-8 border-t border-border">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground-secondary" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "bg-border hover:bg-foreground-tertiary"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground-secondary" />
              </button>
            </div>
          </div>
        </div>

        {/* Company Logos Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-foreground-tertiary text-sm mb-8">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50">
            {["TechScale", "Smile Dental", "GlobalReach", "Velocity", "ServicePro"].map(
              (company) => (
                <div
                  key={company}
                  className="text-xl md:text-2xl font-bold text-foreground-tertiary"
                >
                  {company}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
