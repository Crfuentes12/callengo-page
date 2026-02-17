"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  LayoutDashboard,
  Upload,
  Bot,
  Settings2,
  Rocket,
  BarChart3,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Import your contacts",
    description:
      "Upload via CSV or Excel, or connect your CRM directly. Field mapping, deduplication and validation happen automatically.",
    image: "/01-callengo-import-contacts-square.png",
    alt: "Callengo contact import interface",
    highlights: [
      "CSV & Excel upload",
      "CRM integration",
      "Auto deduplication",
      "Smart field mapping",
    ],
  },
  {
    number: "02",
    icon: Bot,
    title: "Configure your AI agent",
    description:
      "Choose a voice, define objectives and write the script using our guided editor. Set fallback behaviors and language preferences without any code.",
    image: "/02-callengo-agent-configuration-square.png",
    alt: "Callengo agent configuration panel",
    highlights: [
      "Natural voice selection",
      "Script editor",
      "Conditional logic",
      "Multi-language support",
    ],
  },
  {
    number: "03",
    icon: Settings2,
    title: "Set up your campaign",
    description:
      "Define calling windows, time zones, retry rules and compliance controls. Every detail is configurable per campaign.",
    image: "/03-callengo-campaign-configuration-square.png",
    alt: "Callengo campaign configuration",
    highlights: [
      "Calling schedules",
      "Timezone handling",
      "Retry logic",
      "Compliance controls",
    ],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch and scale instantly",
    description:
      "Start calling hundreds of contacts simultaneously. Monitor live progress, pause or adjust in real-time from your dashboard.",
    image: "/04-callengo-launch-campaign-square.png",
    alt: "Callengo campaign launch screen",
    highlights: [
      "Parallel dialing",
      "Live monitoring",
      "Instant pause/resume",
      "Real-time transcripts",
    ],
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Analyze results and export",
    description:
      "Review full transcripts, extracted data points and call outcomes. Push results to your CRM automatically or export detailed reports.",
    image: "/05-callengo-analytics-square.png",
    alt: "Callengo analytics dashboard",
    highlights: [
      "Full transcripts",
      "Data extraction",
      "CRM auto-sync",
      "Custom reports",
    ],
  },
  {
    number: "06",
    icon: LayoutDashboard,
    title: "Everything in one dashboard",
    description:
      "Get a bird's-eye view of all your campaigns, agents and performance metrics in one place. Your team stays aligned, always.",
    image: "/00-callengo-dashboard-square.png",
    alt: "Callengo main dashboard overview",
    highlights: [
      "Unified dashboard",
      "Team collaboration",
      "Performance metrics",
      "Multi-campaign view",
    ],
  },
];

const STEP_DURATION = 5000;

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimer = useCallback(() => {
    setIsPaused(false);
  }, []);

  const advance = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % steps.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 100 / (STEP_DURATION / 100);
        if (next >= 100) {
          advance();
          return 0;
        }
        return next;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [isPaused, advance]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setProgress(0);
    setIsPaused(true);
    const t = window.setTimeout(resumeTimer, 8000);
    return () => window.clearTimeout(t);
  };

  const step = steps[activeStep];
  const StepIcon = step.icon;

  return (
    <section className="section-dark section" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Section header ── */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="badge badge-outline">How it works</span>
          </div>
          <h2 className="text-display-sm mb-5">
            Setup in minutes.
            <br />
            <span className="gradient-text">Results in hours.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Six simple steps — from zero to fully automated calling campaigns.
            No technical expertise required.
          </p>
        </div>

        {/* ── Main interactive area ── */}
        <div className="grid lg:grid-cols-5 gap-8 xl:gap-12 items-start">

          {/* LEFT — Screenshot viewer (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 relative"
          >
            {/* Browser-chrome frame */}
            <div className="rounded-2xl bg-slate-800 border border-slate-700/80 shadow-2xl overflow-hidden">

              {/* Window chrome bar */}
              <div className="flex items-center gap-3 px-4 py-3 bg-slate-900 border-b border-slate-700/60">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-3 h-3 rounded-full bg-red-400/60" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <span className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>
                <div className="flex-1">
                  <div className="bg-slate-800 rounded-md px-3 py-1.5 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full gradient-bg shrink-0" />
                    <span className="text-[11px] text-slate-400 font-mono truncate">
                      app.callengo.com
                    </span>
                  </div>
                </div>
              </div>

              {/* Screenshot area */}
              <div className="relative aspect-square bg-slate-900 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Step label overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      className="bg-slate-900/85 backdrop-blur-sm border border-slate-700/70 rounded-xl px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                          <StepIcon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                            Step {step.number}
                          </div>
                          <div className="text-white font-semibold text-sm leading-tight">
                            {step.title}
                          </div>
                        </div>
                        {/* Dot indicators */}
                        <div className="flex items-center gap-1.5 shrink-0">
                          {steps.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => handleStepClick(i)}
                              className={`rounded-full transition-all duration-300 cursor-pointer ${
                                i === activeStep
                                  ? "w-5 h-1.5 gradient-bg"
                                  : "w-1.5 h-1.5 bg-slate-600 hover:bg-slate-500"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Glow decoration */}
            <div className="absolute -inset-8 gradient-bg opacity-[0.07] blur-3xl rounded-3xl -z-10" />
          </motion.div>

          {/* RIGHT — Step list (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-1.5"
          >
            {steps.map((s, index) => {
              const Icon = s.icon;
              const isActive = index === activeStep;

              return (
                <button
                  key={s.number}
                  onClick={() => handleStepClick(index)}
                  className={`w-full text-left rounded-xl border transition-all duration-300 cursor-pointer group ${
                    isActive
                      ? "border-slate-600 bg-slate-800/80"
                      : "border-transparent bg-slate-900/40 hover:bg-slate-800/40 hover:border-slate-700/60"
                  }`}
                >
                  <div className="px-4 py-3.5">
                    <div className="flex items-start gap-3">
                      {/* Icon */}
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                          isActive
                            ? "gradient-bg shadow-lg"
                            : "bg-slate-800 group-hover:bg-slate-700"
                        }`}
                      >
                        <Icon
                          className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`}
                        />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span
                            className={`text-[10px] font-bold tabular-nums ${
                              isActive ? "gradient-text" : "text-slate-600"
                            }`}
                          >
                            {s.number}
                          </span>
                          <span
                            className={`text-sm font-semibold leading-tight ${
                              isActive
                                ? "text-white"
                                : "text-slate-400 group-hover:text-slate-300"
                            }`}
                          >
                            {s.title}
                          </span>
                        </div>

                        {/* Expandable content */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <p className="text-[12px] text-slate-400 leading-relaxed mt-1.5 mb-2.5">
                                {s.description}
                              </p>
                              <div className="flex flex-wrap gap-1.5 mb-3">
                                {s.highlights.map((h) => (
                                  <span
                                    key={h}
                                    className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-slate-700/80 text-slate-300"
                                  >
                                    <CheckCircle2 className="w-2.5 h-2.5 text-slate-400" />
                                    {h}
                                  </span>
                                ))}
                              </div>

                              {/* Progress bar */}
                              {!isPaused && (
                                <div className="h-0.5 bg-slate-700 rounded-full overflow-hidden">
                                  <motion.div
                                    className="h-full gradient-bg rounded-full"
                                    style={{ width: `${progress}%` }}
                                  />
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Chevron */}
                      <ChevronRight
                        className={`w-4 h-4 shrink-0 transition-all mt-1 ${
                          isActive
                            ? "text-slate-400 rotate-90"
                            : "text-slate-600 group-hover:text-slate-500"
                        }`}
                      />
                    </div>
                  </div>
                </button>
              );
            })}

            {/* CTA */}
            <div className="pt-4 space-y-2">
              <a
                href="/signup"
                className="btn btn-primary w-full rounded-xl justify-center"
              >
                Start free trial
                <ChevronRight className="w-4 h-4" />
              </a>
              <p className="text-center text-xs text-slate-500">
                No credit card required · 15 free minutes
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
