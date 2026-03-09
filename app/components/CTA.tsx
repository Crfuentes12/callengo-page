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
          {/* Background decorations */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
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
        </motion.div>
      </div>
    </section>
  );
}
