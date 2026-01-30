"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="section">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl gradient-bg p-12 md:p-20"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
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
              Ready to automate
              <br />
              your calls?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/70 mb-10 max-w-xl"
            >
              Join hundreds of companies using Callengo to scale their outreach.
              Start with 15 free minutes.
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
                className="btn bg-white text-primary hover:bg-white/90 px-8 py-4 font-semibold"
              >
                Start free trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="btn border border-white/30 text-white hover:bg-white/10 px-8 py-4"
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
              className="flex flex-wrap items-center gap-6 mt-10 text-white/60 text-sm"
            >
              <span>No credit card required</span>
              <span className="hidden sm:inline">•</span>
              <span>15 free minutes</span>
              <span className="hidden sm:inline">•</span>
              <span>Cancel anytime</span>
            </motion.div>
          </div>

          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="hidden xl:block absolute top-1/2 right-20 -translate-y-1/2 w-72"
          >
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <div className="text-sm text-slate-500 mb-2">Active calls</div>
              <div className="text-4xl font-bold stat-number mb-4">247</div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Completed</span>
                  <span className="font-medium">1,842</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Success rate</span>
                  <span className="font-medium text-green-600">94.2%</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 gradient-bg rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
