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
          className="relative overflow-hidden rounded-3xl bg-deep-indigo"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-grid-dark opacity-40" />
          <div className="glow-orb glow-orb-primary w-[500px] h-[500px] -top-40 right-0" />
          <div className="glow-orb glow-orb-slate w-[400px] h-[400px] bottom-0 -left-40" />

          {/* Content */}
          <div className="relative z-10 p-12 md:p-20">
            <div className="max-w-3xl">
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
                className="text-xl text-white/50 mb-10 max-w-xl"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Stop wasting hours on repetitive calls. Let your team focus on
                closing deals while we handle the rest. Start with 15 free minutes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="https://app.callengo.com/auth/signup"
                  className="btn bg-white text-deep-indigo hover:bg-white/90 px-8 py-4 font-semibold rounded-xl"
                >
                  Get started free
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="mailto:sales@callengo.com"
                  className="btn border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-xl"
                >
                  Talk to sales
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center gap-6 mt-10 text-white/40 text-sm"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span>No credit card required</span>
                <span className="hidden sm:inline text-white/20">&middot;</span>
                <span>15 free minutes</span>
                <span className="hidden sm:inline text-white/20">&middot;</span>
                <span>Cancel anytime</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
