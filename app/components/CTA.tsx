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
          {/* Animated blob decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full opacity-20"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)",
                animation: "ctaBlob1 20s ease-in-out infinite",
              }}
            />
            <div
              className="absolute -bottom-24 -left-24 w-[350px] h-[350px] rounded-full opacity-15"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)",
                animation: "ctaBlob2 25s ease-in-out infinite",
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10"
              style={{
                background: "radial-gradient(circle, rgba(139,150,200,0.4) 0%, transparent 60%)",
                animation: "ctaBlob3 18s ease-in-out infinite",
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

          {/* CTA blob keyframes */}
          <style jsx>{`
            @keyframes ctaBlob1 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              25% { transform: translate(-40px, 30px) scale(1.15); }
              50% { transform: translate(-20px, 60px) scale(0.95); }
              75% { transform: translate(30px, 20px) scale(1.1); }
            }
            @keyframes ctaBlob2 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              30% { transform: translate(40px, -30px) scale(1.1); }
              60% { transform: translate(20px, -50px) scale(1.2); }
            }
            @keyframes ctaBlob3 {
              0%, 100% { transform: translate(-50%, -50%) scale(1); }
              33% { transform: translate(-45%, -55%) scale(1.2); }
              66% { transform: translate(-55%, -45%) scale(0.9); }
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}
