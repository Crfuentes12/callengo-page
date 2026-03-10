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
          <div className="absolute inset-0 overflow-hidden opacity-90">
            <div className="absolute -top-1/4 right-[-10%] w-3/5 h-[120%] bg-gradient-to-br from-white/40 via-[#8B96C8]/35 to-[#6070E0]/25 rounded-full blur-2xl animate-[ctaLava1_22s_ease-in-out_infinite]" />
            <div className="absolute -bottom-1/3 left-[-10%] w-1/2 h-full bg-gradient-to-br from-[#8B96C8]/40 via-white/25 to-[#4F5FE8]/25 rounded-full blur-2xl animate-[ctaLava2_28s_ease-in-out_infinite]" />
            <div className="absolute top-[10%] left-[30%] w-2/5 h-4/5 bg-gradient-to-br from-white/30 via-[#1DB87A]/18 to-[#8B96C8]/20 rounded-full blur-2xl animate-[ctaLava3_25s_ease-in-out_infinite]" />
            <div className="absolute top-[-15%] left-[50%] w-1/3 h-[90%] bg-gradient-to-br from-[#6070E0]/30 via-white/20 to-[#8B96C8]/25 rounded-full blur-2xl animate-[ctaLava4_30s_ease-in-out_infinite]" />
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
                className="btn btn-cta-white bg-white text-primary hover:bg-white/90 px-8 py-4 font-semibold rounded-xl"
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
              20% { transform: translate(-50px, 40px) scale(1.12); }
              50% { transform: translate(30px, -35px) scale(0.9); }
              75% { transform: translate(-20px, -15px) scale(1.05); }
            }
            @keyframes ctaLava2 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              25% { transform: translate(45px, -40px) scale(1.15); }
              55% { transform: translate(-30px, 45px) scale(0.88); }
              80% { transform: translate(15px, -10px) scale(1.08); }
            }
            @keyframes ctaLava3 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              30% { transform: translate(40px, -30px) scale(1.1); }
              65% { transform: translate(-35px, 25px) scale(0.92); }
            }
            @keyframes ctaLava4 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              20% { transform: translate(-30px, 40px) scale(1.1); }
              50% { transform: translate(40px, -25px) scale(0.9); }
              75% { transform: translate(-15px, -20px) scale(1.06); }
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}
