"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Callengo transformed our sales process. Our SDRs now only talk to qualified leads, and our conversion rate has tripled.",
    author: "Sarah Mitchell",
    role: "VP of Sales",
    company: "TechScale Inc.",
    avatar: "/testimonials/sarah.png",
    metric: { value: "3x", label: "conversion rate" },
  },
  {
    id: 2,
    quote:
      "We used to have a 28% no-show rate for our appointments. After implementing Callengo's confirmation agent, we're down to 9%.",
    author: "Dr. James Chen",
    role: "Practice Owner",
    company: "ChenMed Clinic",
    avatar: "/testimonials/james.png",
    metric: { value: "68%", label: "fewer no-shows" },
  },
  {
    id: 3,
    quote:
      "Callengo verified 50,000 contacts in a week, something that would have taken our team months. The data quality is now at 95%+.",
    author: "Michael Torres",
    role: "Director of Operations",
    company: "DataForce Global",
    avatar: "/testimonials/michael.png",
    metric: { value: "50K", label: "contacts verified" },
  },
  {
    id: 4,
    quote:
      "New leads get a call within 60 seconds, and we're qualifying them before competitors even know they exist.",
    author: "Emma Rodriguez",
    role: "Head of Growth",
    company: "Launchpad.io",
    avatar: "/testimonials/emma.png",
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

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-7 flex flex-col h-full shadow-sm">
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-electric text-electric" />
        ))}
      </div>
      <p className="text-foreground text-sm leading-relaxed mb-5 flex-1" style={{ fontFamily: "var(--font-body)" }}>
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="rounded-lg p-3 mb-5 text-center gradient-bg">
        <span className="text-2xl font-bold text-white">{t.metric.value}</span>
        <span className="text-xs text-white/60 ml-2" style={{ fontFamily: "var(--font-body)" }}>{t.metric.label}</span>
      </div>
      <div className="flex items-center gap-3">
        {t.avatar ? (
          <Image
            src={t.avatar}
            alt={t.author}
            width={36}
            height={36}
            className="w-9 h-9 rounded-full object-cover shrink-0"
          />
        ) : (
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold text-xs shrink-0"
            style={{ background: "linear-gradient(135deg, #4F5FE8 0%, #1E2D6B 100%)" }}
          >
            {t.author.split(" ").map((n) => n[0]).join("")}
          </div>
        )}
        <div>
          <div className="font-semibold text-foreground text-sm">{t.author}</div>
          <div className="text-foreground-tertiary text-xs" style={{ fontFamily: "var(--font-body)" }}>
            {t.role} · {t.company}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Double the array for seamless infinite scroll
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="section bg-background overflow-hidden" id="testimonials">
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
      </div>

      {/* Infinite auto-scroll carousel with fade edges */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-40 md:w-72 bg-gradient-to-r from-background via-background/60 to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-40 md:w-72 bg-gradient-to-l from-background via-background/60 to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          className="flex gap-5 testimonial-track"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {doubled.map((t, idx) => (
            <div key={`${t.id}-${idx}`} className="w-[340px] md:w-[380px] shrink-0">
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes testimonialScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .testimonial-track {
          animation: testimonialScroll 60s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
