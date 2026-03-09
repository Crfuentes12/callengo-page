"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="section bg-background-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl gradient-bg p-12 md:p-20"
        >
          {/* Internal lava lamp — vivid and visible */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Big white/electric glow, top-right */}
            <div
              className="absolute rounded-full"
              style={{
                width: 500,
                height: 500,
                top: "-25%",
                right: "-10%",
                background: "radial-gradient(circle, rgba(255,255,255,0.22) 0%, rgba(139,150,200,0.10) 35%, transparent 65%)",
                filter: "blur(30px)",
                animation: "ctaLava1 16s ease-in-out infinite",
              }}
            />
            {/* Warm slate glow, bottom-left */}
            <div
              className="absolute rounded-full"
              style={{
                width: 450,
                height: 450,
                bottom: "-30%",
                left: "-8%",
                background: "radial-gradient(circle, rgba(139,150,200,0.25) 0%, rgba(255,255,255,0.08) 40%, transparent 65%)",
                filter: "blur(25px)",
                animation: "ctaLava2 20s ease-in-out infinite",
              }}
            />
            {/* Electric accent center blob */}
            <div
              className="absolute rounded-full"
              style={{
                width: 350,
                height: 350,
                top: "20%",
                left: "45%",
                background: "radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(79,95,232,0.10) 40%, transparent 65%)",
                filter: "blur(25px)",
                animation: "ctaLava3 14s ease-in-out infinite",
              }}
            />
            {/* Small bright accent, top-left */}
            <div
              className="absolute rounded-full"
              style={{
                width: 280,
                height: 280,
                top: "5%",
                left: "15%",
                background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(37,56,184,0.08) 40%, transparent 65%)",
                filter: "blur(20px)",
                animation: "ctaLava1 18s ease-in-out infinite reverse",
              }}
            />
            {/* Green/teal accent shimmer, right side */}
            <div
              className="absolute rounded-full"
              style={{
                width: 300,
                height: 300,
                top: "50%",
                right: "20%",
                background: "radial-gradient(circle, rgba(29,184,122,0.12) 0%, rgba(255,255,255,0.06) 40%, transparent 65%)",
                filter: "blur(25px)",
                animation: "ctaLava2 22s ease-in-out infinite reverse",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Ready to get your
              <br />
              time back?
            </h2>

            <p
              className="text-xl text-white/70 mb-10 max-w-xl"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Stop wasting hours on repetitive calls. Let your team focus on
              closing deals while we handle the rest. Start with 15 free minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://app.callengo.com/auth/signup"
                className="btn bg-white text-primary hover:bg-white/90 px-8 py-4 font-semibold rounded-xl"
              >
                Get started free
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="mailto:sales@callengo.com"
                className="btn border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl"
              >
                Talk to sales
              </a>
            </div>

            <div
              className="flex flex-wrap items-center gap-6 mt-10 text-white/40 text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <span>No credit card required</span>
              <span className="hidden sm:inline text-white/20">&middot;</span>
              <span>15 free minutes</span>
              <span className="hidden sm:inline text-white/20">&middot;</span>
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* CTA lava lamp keyframes */}
          <style jsx>{`
            @keyframes ctaLava1 {
              0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
              25% { transform: translate(-50px, 40px) scale(1.2) rotate(60deg); }
              50% { transform: translate(-25px, 80px) scale(0.9) rotate(120deg); }
              75% { transform: translate(40px, 25px) scale(1.15) rotate(180deg); }
            }
            @keyframes ctaLava2 {
              0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
              30% { transform: translate(50px, -40px) scale(1.15) rotate(-70deg); }
              60% { transform: translate(25px, -60px) scale(1.25) rotate(-140deg); }
            }
            @keyframes ctaLava3 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              33% { transform: translate(40px, -30px) scale(1.25); }
              66% { transform: translate(-30px, 40px) scale(0.85); }
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}
