"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  CheckCircle,
  TrendingUp,
  Shield,
  Clock,
  Zap,
} from "lucide-react";

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function CTA() {
  return (
    <section className="section">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl p-12 md:p-20"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 40%, rgba(79, 95, 232, 0.4) 0%, transparent 60%),
              radial-gradient(ellipse 60% 60% at 80% 20%, rgba(51, 67, 212, 0.3) 0%, transparent 55%),
              radial-gradient(ellipse 50% 80% at 60% 90%, rgba(107, 122, 255, 0.25) 0%, transparent 50%),
              radial-gradient(ellipse 40% 40% at 90% 70%, rgba(30, 45, 107, 0.4) 0%, transparent 50%),
              linear-gradient(145deg, #0D1117 0%, #1E2D6B 35%, #3347D4 65%, #4F5FE8 100%)
            `,
          }}
        >
          {/* Background animated elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Floating orbs */}
            <motion.div
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-16 right-32 w-72 h-72 rounded-full opacity-20"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
              }}
            />
            <motion.div
              animate={{
                y: [15, -15, 15],
                x: [10, -10, 10],
                scale: [1.1, 1, 1.1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-8 left-16 w-56 h-56 rounded-full opacity-15"
              style={{
                background:
                  "radial-gradient(circle, rgba(107,122,255,0.3) 0%, transparent 70%)",
              }}
            />
            <motion.div
              animate={{
                y: [10, -20, 10],
                x: [-5, 15, -5],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full opacity-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
              }}
            />

            {/* Pulsing dots */}
            <motion.div
              animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.5, 1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-24 left-[15%] w-2 h-2 rounded-full bg-white/30"
            />
            <motion.div
              animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.3, 1] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-32 right-[40%] w-1.5 h-1.5 rounded-full bg-white/25"
            />
            <motion.div
              animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.4, 1] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-[60%] left-[55%] w-1.5 h-1.5 rounded-full bg-accent-light/40"
            />
            <motion.div
              animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.6, 1] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute top-12 right-[25%] w-2.5 h-2.5 rounded-full bg-white/20"
            />

            {/* Subtle grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight"
            >
              Ready to get your
              <br />
              time back?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/60 mb-10 max-w-xl leading-relaxed"
            >
              Stop wasting hours on repetitive calls. Let your team focus on
              closing deals while we handle the rest. Start with 15 free
              minutes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/signup"
                className="btn bg-white text-primary hover:bg-white/90 hover:-translate-y-0.5 px-8 py-4 font-semibold cursor-pointer shadow-lg shadow-black/10 transition-all duration-300"
              >
                Start free trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="btn border border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-8 py-4 cursor-pointer transition-all duration-300"
                style={{
                  backdropFilter: "blur(10px)",
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                Talk to sales
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 mt-12 text-sm"
            >
              <span className="flex items-center gap-2 text-white/50">
                <Shield className="w-4 h-4" />
                No credit card required
              </span>
              <span className="flex items-center gap-2 text-white/50">
                <Clock className="w-4 h-4" />
                15 free minutes
              </span>
              <span className="flex items-center gap-2 text-white/50">
                <Zap className="w-4 h-4" />
                Cancel anytime
              </span>
            </motion.div>
          </div>

          {/* Floating Stats Card - Glass morphism */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 10 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hidden xl:block absolute top-1/2 right-16 -translate-y-1/2 w-80"
          >
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative rounded-2xl p-7"
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow:
                  "0 24px 48px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{
                      background: "rgba(79, 95, 232, 0.2)",
                      border: "1px solid rgba(79, 95, 232, 0.3)",
                    }}
                  >
                    <Phone className="w-4 h-4 text-accent-light" />
                  </div>
                  <span className="text-sm font-medium text-white/70">
                    Live dashboard
                  </span>
                </div>
                <motion.div
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-2.5 h-2.5 rounded-full bg-green-400"
                />
              </div>

              {/* Active calls counter */}
              <div className="text-xs text-white/40 uppercase tracking-wider mb-1">
                Active calls
              </div>
              <div className="text-4xl font-bold text-white mb-5">
                <AnimatedCounter target={247} duration={2.5} />
              </div>

              {/* Stats rows */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-2 text-white/40">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Completed
                  </span>
                  <span className="font-semibold text-white/80">
                    <AnimatedCounter
                      target={1842}
                      suffix=""
                      duration={2.8}
                    />
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-2 text-white/40">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Success rate
                  </span>
                  <span className="font-semibold text-green-400">
                    <AnimatedCounter
                      target={94}
                      suffix=".2%"
                      duration={2.2}
                    />
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-5 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="flex justify-between text-xs text-white/30 mb-2">
                  <span>Daily target</span>
                  <span>75%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--color-accent) 0%, var(--color-accent-light) 100%)",
                      boxShadow: "0 0 12px rgba(79, 95, 232, 0.4)",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
