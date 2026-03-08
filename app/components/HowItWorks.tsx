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
  Sparkles,
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
    <section className="section-dark section relative overflow-hidden" id="how-it-works">
      {/* Mesh / gradient background decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Top-right gradient orb */}
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, var(--color-accent-light) 0%, transparent 70%)",
          }}
        />
        {/* Bottom-left gradient orb */}
        <div
          className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, var(--color-gradient-mid) 0%, transparent 70%)",
          }}
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(79,95,232,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(79,95,232,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="badge badge-outline">
              <Sparkles className="w-3 h-3 mr-1.5 opacity-70" />
              How it works
            </span>
          </div>
          <h2 className="text-display-sm mb-5">
            Setup in minutes.
            <br />
            <span className="gradient-text-electric">Results in hours.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Six simple steps, from zero to fully automated calling campaigns.
            No technical expertise required.
          </p>
        </motion.div>

        {/* Main interactive area */}
        <div className="grid lg:grid-cols-6 gap-8 xl:gap-12 items-start">
          {/* LEFT - Screenshot viewer (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 relative"
          >
            {/* Floating gradient orbs behind screenshot */}
            <div className="absolute -inset-12 pointer-events-none" aria-hidden="true">
              <motion.div
                className="absolute top-8 -left-8 w-48 h-48 rounded-full opacity-[0.12]"
                style={{
                  background:
                    "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
                }}
                animate={{
                  y: [0, -12, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 right-4 w-64 h-64 rounded-full opacity-[0.08]"
                style={{
                  background:
                    "radial-gradient(circle, var(--color-gradient-mid) 0%, transparent 70%)",
                }}
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute top-1/2 -right-6 w-36 h-36 rounded-full opacity-[0.06]"
                style={{
                  background:
                    "radial-gradient(circle, var(--color-accent-light) 0%, transparent 70%)",
                }}
                animate={{
                  x: [0, 8, 0],
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </div>

            {/* Browser-chrome frame with glassmorphism */}
            <div
              className="rounded-2xl overflow-hidden shadow-2xl relative"
              style={{
                background: "rgba(30, 35, 60, 0.6)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              {/* Active glow ring */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute -inset-px rounded-2xl pointer-events-none z-20"
                  style={{
                    boxShadow:
                      "inset 0 0 0 1px rgba(79, 95, 232, 0.15), 0 0 40px rgba(79, 95, 232, 0.08), 0 0 80px rgba(30, 45, 107, 0.06)",
                  }}
                />
              </AnimatePresence>

              {/* Window chrome bar */}
              <div
                className="flex items-center gap-3 px-4 py-3 border-b relative z-10"
                style={{
                  background: "rgba(13, 17, 23, 0.7)",
                  backdropFilter: "blur(12px)",
                  borderColor: "rgba(255, 255, 255, 0.06)",
                }}
              >
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-3 h-3 rounded-full bg-red-400/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <span className="w-3 h-3 rounded-full bg-green-400/70" />
                </div>
                <div className="flex-1">
                  <div
                    className="rounded-lg px-3 py-1.5 flex items-center gap-2"
                    style={{
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.06)",
                    }}
                  >
                    <div className="w-2 h-2 rounded-full gradient-bg shrink-0" />
                    <span className="text-[11px] text-slate-400 font-mono truncate">
                      app.callengo.com
                    </span>
                  </div>
                </div>
              </div>

              {/* Screenshot area */}
              <div className="relative aspect-square bg-slate-900/80 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
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

                {/* Vignette overlay for depth */}
                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, transparent 50%, rgba(13,17,23,0.3) 100%)",
                  }}
                />

                {/* Step label overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.35, delay: 0.15 }}
                      className="rounded-xl px-4 py-3"
                      style={{
                        background: "rgba(13, 17, 23, 0.85)",
                        backdropFilter: "blur(16px)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center shrink-0 accent-glow-electric">
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
                                  ? "w-5 h-1.5 gradient-bg shadow-[0_0_8px_rgba(79,95,232,0.5)]"
                                  : "w-1.5 h-1.5 bg-slate-600 hover:bg-slate-400"
                              }`}
                              aria-label={`Go to step ${i + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Large background glow behind the whole frame */}
            <motion.div
              className="absolute -inset-10 gradient-bg rounded-3xl -z-10"
              animate={{
                opacity: [0.06, 0.1, 0.06],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ filter: "blur(48px)" }}
            />
          </motion.div>

          {/* RIGHT - Step list (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-1.5"
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
                      ? "border-white/10 bg-white/[0.04]"
                      : "border-transparent bg-transparent hover:bg-white/[0.02] hover:border-white/[0.06]"
                  }`}
                  style={
                    isActive
                      ? {
                          backdropFilter: "blur(12px)",
                          boxShadow:
                            "0 4px 24px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.04)",
                        }
                      : undefined
                  }
                >
                  <div className="px-4 py-3.5">
                    <div className="flex items-start gap-3">
                      {/* Icon */}
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 ${
                          isActive
                            ? "gradient-bg shadow-lg shadow-accent/20"
                            : "bg-white/[0.05] group-hover:bg-white/[0.08]"
                        }`}
                      >
                        <Icon
                          className={`w-4 h-4 transition-colors duration-300 ${
                            isActive ? "text-white" : "text-slate-400"
                          }`}
                        />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span
                            className={`text-[10px] font-bold tabular-nums transition-all duration-300 ${
                              isActive
                                ? "gradient-text-electric"
                                : "text-slate-600"
                            }`}
                          >
                            {s.number}
                          </span>
                          <span
                            className={`text-sm font-semibold leading-tight transition-colors duration-300 ${
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
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <p className="text-[12px] text-slate-400 leading-relaxed mt-1.5 mb-2.5">
                                {s.description}
                              </p>
                              <div className="flex flex-wrap gap-1.5 mb-3">
                                {s.highlights.map((h) => (
                                  <span
                                    key={h}
                                    className="inline-flex items-center gap-1 text-[10px] px-2.5 py-1 rounded-full font-medium transition-all"
                                    style={{
                                      background:
                                        "linear-gradient(135deg, rgba(79, 95, 232, 0.12) 0%, rgba(107, 122, 255, 0.08) 100%)",
                                      border:
                                        "1px solid rgba(79, 95, 232, 0.2)",
                                      color: "rgba(167, 175, 255, 0.9)",
                                    }}
                                  >
                                    <CheckCircle2 className="w-2.5 h-2.5 text-accent-light opacity-80" />
                                    {h}
                                  </span>
                                ))}
                              </div>

                              {/* Progress bar */}
                              {!isPaused && (
                                <div
                                  className="h-[3px] rounded-full overflow-hidden"
                                  style={{
                                    background: "rgba(255, 255, 255, 0.06)",
                                  }}
                                >
                                  <motion.div
                                    className="h-full rounded-full gradient-bg-electric"
                                    style={{
                                      width: `${progress}%`,
                                      boxShadow:
                                        "0 0 8px rgba(79, 95, 232, 0.4)",
                                    }}
                                  />
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Chevron */}
                      <ChevronRight
                        className={`w-4 h-4 shrink-0 transition-all duration-300 mt-1 ${
                          isActive
                            ? "text-accent-light rotate-90"
                            : "text-slate-600 group-hover:text-slate-500"
                        }`}
                      />
                    </div>
                  </div>
                </button>
              );
            })}

            {/* CTA */}
            <div className="pt-5 space-y-2.5">
              <a
                href="/signup"
                className="btn btn-primary w-full rounded-xl justify-center cursor-pointer"
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
