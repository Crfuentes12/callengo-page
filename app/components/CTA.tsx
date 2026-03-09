"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="section bg-arctic/80">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl gradient-bg p-12 md:p-20"
        >
          {/* Internal lava lamp — bold and alive */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute"
              style={{
                width: "60%",
                height: "120%",
                top: "-30%",
                right: "-15%",
                background: "conic-gradient(from 200deg, rgba(255,255,255,0.25), rgba(139,150,200,0.20), rgba(255,255,255,0.10), rgba(255,255,255,0.25))",
                filter: "blur(60px)",
                borderRadius: "40% 60% 55% 45% / 55% 40% 60% 45%",
                animation: "ctaLava1 16s ease-in-out infinite",
              }}
            />
            <div
              className="absolute"
              style={{
                width: "55%",
                height: "100%",
                bottom: "-35%",
                left: "-10%",
                background: "conic-gradient(from 60deg, rgba(139,150,200,0.28), rgba(255,255,255,0.15), rgba(79,95,232,0.12), rgba(139,150,200,0.28))",
                filter: "blur(55px)",
                borderRadius: "55% 45% 40% 60% / 40% 55% 45% 60%",
                animation: "ctaLava2 20s ease-in-out infinite",
              }}
            />
            <div
              className="absolute"
              style={{
                width: "40%",
                height: "80%",
                top: "10%",
                left: "35%",
                background: "conic-gradient(from 140deg, rgba(255,255,255,0.20), rgba(29,184,122,0.08), rgba(255,255,255,0.12), rgba(255,255,255,0.20))",
                filter: "blur(50px)",
                borderRadius: "45% 55% 50% 50% / 60% 40% 55% 45%",
                animation: "ctaLava3 14s ease-in-out infinite",
              }}
            />
            <div
              className="absolute"
              style={{
                width: "35%",
                height: "70%",
                top: "-10%",
                left: "10%",
                background: "conic-gradient(from 300deg, rgba(255,255,255,0.18), rgba(37,56,184,0.10), rgba(255,255,255,0.08), rgba(255,255,255,0.18))",
                filter: "blur(45px)",
                borderRadius: "50% 50% 45% 55% / 40% 60% 55% 45%",
                animation: "ctaLava1 22s ease-in-out infinite reverse",
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
              0%, 100% { transform: translate(0, 0) scale(1); border-radius: 40% 60% 55% 45% / 55% 40% 60% 45%; }
              25% { transform: translate(-50px, 40px) scale(1.15); border-radius: 55% 45% 40% 60% / 45% 55% 50% 50%; }
              50% { transform: translate(-25px, 80px) scale(0.92); border-radius: 45% 55% 60% 40% / 60% 45% 40% 55%; }
              75% { transform: translate(40px, 25px) scale(1.08); border-radius: 50% 50% 45% 55% / 40% 60% 55% 45%; }
            }
            @keyframes ctaLava2 {
              0%, 100% { transform: translate(0, 0) scale(1); border-radius: 55% 45% 40% 60% / 40% 55% 45% 60%; }
              30% { transform: translate(50px, -40px) scale(1.12); border-radius: 40% 60% 55% 45% / 55% 40% 60% 45%; }
              60% { transform: translate(25px, -60px) scale(1.20); border-radius: 50% 50% 45% 55% / 60% 40% 50% 50%; }
            }
            @keyframes ctaLava3 {
              0%, 100% { transform: translate(0, 0) scale(1); border-radius: 45% 55% 50% 50% / 60% 40% 55% 45%; }
              33% { transform: translate(40px, -30px) scale(1.20); border-radius: 55% 45% 40% 60% / 45% 55% 50% 50%; }
              66% { transform: translate(-30px, 40px) scale(0.88); border-radius: 40% 60% 55% 45% / 55% 40% 60% 45%; }
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}
