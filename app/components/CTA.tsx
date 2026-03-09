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
          {/* Internal lava lamp effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute rounded-full"
              style={{
                width: 400,
                height: 400,
                top: "-15%",
                right: "-5%",
                background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 40%, transparent 70%)",
                filter: "blur(40px)",
                animation: "ctaLava1 20s ease-in-out infinite",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: 350,
                height: 350,
                bottom: "-20%",
                left: "-5%",
                background: "radial-gradient(circle, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 40%, transparent 70%)",
                filter: "blur(50px)",
                animation: "ctaLava2 25s ease-in-out infinite",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: 300,
                height: 300,
                top: "30%",
                left: "40%",
                background: "radial-gradient(circle, rgba(139,150,200,0.15) 0%, rgba(139,150,200,0.04) 40%, transparent 70%)",
                filter: "blur(45px)",
                animation: "ctaLava3 18s ease-in-out infinite",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: 250,
                height: 250,
                top: "10%",
                left: "20%",
                background: "radial-gradient(circle, rgba(79,95,232,0.08) 0%, transparent 60%)",
                filter: "blur(35px)",
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
              0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
              25% { transform: translate(-40px, 30px) scale(1.15) rotate(45deg); }
              50% { transform: translate(-20px, 60px) scale(0.95) rotate(90deg); }
              75% { transform: translate(30px, 20px) scale(1.1) rotate(135deg); }
            }
            @keyframes ctaLava2 {
              0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
              30% { transform: translate(40px, -30px) scale(1.1) rotate(-60deg); }
              60% { transform: translate(20px, -50px) scale(1.2) rotate(-120deg); }
            }
            @keyframes ctaLava3 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              33% { transform: translate(30px, -20px) scale(1.2); }
              66% { transform: translate(-20px, 30px) scale(0.9); }
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}
