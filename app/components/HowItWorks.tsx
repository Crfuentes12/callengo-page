"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
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
    highlights: ["CSV & Excel upload", "CRM integration", "Auto deduplication", "Smart field mapping"],
  },
  {
    number: "02",
    icon: Bot,
    title: "Configure your AI agent",
    description:
      "Choose a voice, define objectives and write the script using our guided editor. Set fallback behaviors and language preferences without any code.",
    image: "/02-callengo-agent-configuration-square.png",
    alt: "Callengo agent configuration panel",
    highlights: ["Natural voice selection", "Script editor", "Conditional logic", "Multi-language support"],
  },
  {
    number: "03",
    icon: Settings2,
    title: "Set up your campaign",
    description:
      "Define calling windows, time zones, retry rules and compliance controls. Every detail is configurable per campaign.",
    image: "/03-callengo-campaign-configuration-square.png",
    alt: "Callengo campaign configuration",
    highlights: ["Calling schedules", "Timezone handling", "Retry logic", "Compliance controls"],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch and scale instantly",
    description:
      "Start calling hundreds of contacts simultaneously. Monitor live progress, pause or adjust in real-time from your dashboard.",
    image: "/04-callengo-launch-campaign-square.png",
    alt: "Callengo campaign launch screen",
    highlights: ["Parallel dialing", "Live monitoring", "Instant pause/resume", "Real-time transcripts"],
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Analyze results and export",
    description:
      "Review full transcripts, extracted data points and call outcomes. Push results to your CRM automatically or export detailed reports.",
    image: "/05-callengo-analytics-square.png",
    alt: "Callengo analytics dashboard",
    highlights: ["Full transcripts", "Data extraction", "CRM auto-sync", "Custom reports"],
  },
  {
    number: "06",
    icon: LayoutDashboard,
    title: "Everything in one dashboard",
    description:
      "Get a bird's-eye view of all your campaigns, agents and performance metrics in one place. Your team stays aligned, always.",
    image: "/00-callengo-dashboard-square.png",
    alt: "Callengo main dashboard overview",
    highlights: ["Unified dashboard", "Team collaboration", "Performance metrics", "Multi-campaign view"],
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
    <section className="relative overflow-hidden" id="how-it-works">
      {/* Dark background with glow orbs */}
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="glow-orb glow-orb-purple w-[500px] h-[500px] top-0 right-0 opacity-50" />
      <div className="glow-orb glow-orb-cyan w-[400px] h-[400px] bottom-0 left-0 opacity-30" />

      <div className="relative z-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-white/10 text-white/70 bg-white/5 mb-5">
                How it works
              </span>
              <h2 className="text-display-sm text-white mb-5">
                Setup in minutes.
                <br />
                <span className="gradient-text">Results in hours.</span>
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Six simple steps, from zero to fully automated calling campaigns.
                No technical expertise required.
              </p>
            </motion.div>
          </div>

          {/* Main interactive area */}
          <div className="grid lg:grid-cols-6 gap-8 xl:gap-12 items-start">

            {/* LEFT — Screenshot viewer */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 relative"
            >
              <div className="rounded-2xl bg-dark-light border border-white/8 shadow-2xl overflow-hidden">
                {/* Window chrome */}
                <div className="flex items-center gap-3 px-4 py-3 bg-dark border-b border-white/8">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-3 h-3 rounded-full bg-red-400/50" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400/50" />
                    <span className="w-3 h-3 rounded-full bg-green-400/50" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-dark-light/80 rounded-md px-3 py-1.5 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      <span className="text-[11px] text-white/40 font-mono truncate">
                        app.callengo.com
                      </span>
                    </div>
                  </div>
                </div>

                {/* Screenshot */}
                <div className="relative aspect-square bg-dark overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
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
                        className="bg-dark/90 backdrop-blur-md border border-white/8 rounded-xl px-4 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                            <StepIcon className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[10px] text-white/40 font-semibold uppercase tracking-wider">
                              Step {step.number}
                            </div>
                            <div className="text-white font-semibold text-sm leading-tight">
                              {step.title}
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            {steps.map((_, i) => (
                              <button
                                key={i}
                                onClick={() => handleStepClick(i)}
                                className={`rounded-full transition-all duration-300 cursor-pointer ${
                                  i === activeStep
                                    ? "w-5 h-1.5 bg-secondary"
                                    : "w-1.5 h-1.5 bg-white/20 hover:bg-white/30"
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

              <div className="absolute -inset-8 bg-secondary/5 blur-3xl rounded-3xl -z-10" />
            </motion.div>

            {/* RIGHT — Step list */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
                        ? "border-white/12 bg-white/5"
                        : "border-transparent bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/6"
                    }`}
                  >
                    <div className="px-4 py-3.5">
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                            isActive
                              ? "bg-secondary shadow-lg"
                              : "bg-white/5 group-hover:bg-white/8"
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-white/40"}`} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className={`text-[10px] font-bold tabular-nums ${isActive ? "text-secondary-light" : "text-white/20"}`}>
                              {s.number}
                            </span>
                            <span className={`text-sm font-semibold leading-tight ${isActive ? "text-white" : "text-white/40 group-hover:text-white/50"}`}>
                              {s.title}
                            </span>
                          </div>

                          <AnimatePresence>
                            {isActive && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <p className="text-[12px] text-white/45 leading-relaxed mt-1.5 mb-2.5" style={{ fontFamily: "var(--font-body)" }}>
                                  {s.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5 mb-3">
                                  {s.highlights.map((h) => (
                                    <span key={h} className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-white/6 text-white/50">
                                      <CheckCircle2 className="w-2.5 h-2.5 text-white/40" />
                                      {h}
                                    </span>
                                  ))}
                                </div>

                                {!isPaused && (
                                  <div className="h-0.5 bg-white/8 rounded-full overflow-hidden">
                                    <motion.div
                                      className="h-full bg-secondary rounded-full"
                                      style={{ width: `${progress}%` }}
                                    />
                                  </div>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <ChevronRight className={`w-4 h-4 shrink-0 transition-all mt-1 ${isActive ? "text-white/40 rotate-90" : "text-white/20 group-hover:text-white/30"}`} />
                      </div>
                    </div>
                  </button>
                );
              })}

              <div className="pt-4 space-y-2">
                <a
                  href="https://app.callengo.com/auth/signup"
                  className="btn bg-secondary text-white w-full rounded-xl justify-center text-sm py-3.5 hover:-translate-y-0.5 transition-all"
                  style={{ boxShadow: "var(--shadow-electric)" }}
                >
                  Start free trial
                  <ChevronRight className="w-4 h-4" />
                </a>
                <p className="text-center text-xs text-white/30" style={{ fontFamily: "var(--font-body)" }}>
                  No credit card required · 15 free minutes
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
