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
          {/* Internal lava lamp blobs */}
          <div className="absolute inset-0 overflow-hidden opacity-70">
            <div className="absolute -top-1/4 right-[-10%] w-3/5 h-[120%] bg-gradient-to-br from-white/25 via-[#8B96C8]/20 to-[#6070E0]/15 rounded-full blur-3xl animate-[ctaLava1_40s_ease-in-out_infinite]" />
            <div className="absolute -bottom-1/3 left-[-10%] w-1/2 h-full bg-gradient-to-br from-[#8B96C8]/25 via-white/15 to-[#4F5FE8]/15 rounded-full blur-3xl animate-[ctaLava2_50s_ease-in-out_infinite]" />
            <div className="absolute top-[10%] left-[30%] w-2/5 h-4/5 bg-gradient-to-br from-white/20 via-[#1DB87A]/10 to-[#8B96C8]/12 rounded-full blur-2xl animate-[ctaLava3_45s_ease-in-out_infinite]" />
          </div>

          {/* Dark gradient overlay protecting text on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E2D6B]/40 via-[#1E2D6B]/15 to-transparent" />

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

          <style jsx>{`
            @keyframes ctaLava1 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              33% { transform: translate(-30px, 25px) scale(1.06); }
              66% { transform: translate(20px, -20px) scale(0.95); }
            }
            @keyframes ctaLava2 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              40% { transform: translate(30px, -25px) scale(1.08); }
              70% { transform: translate(-20px, 30px) scale(0.94); }
            }
            @keyframes ctaLava3 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              50% { transform: translate(25px, -15px) scale(1.05); }
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}
