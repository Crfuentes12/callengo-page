"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Pause, ArrowRight, Database, Calendar, Target } from "lucide-react";

const scenarios = [
  {
    id: "data-validation",
    label: "Data Validation",
    icon: Database,
    subtitle: "Verifying Contact Information",
    transcript: [
      { speaker: "ai", text: "Hello! My name is Maya from TechCorp. I'm calling to verify some information. Is this ABC Industries?", delay: 0 },
      { speaker: "human", text: "Yes, this is ABC Industries.", delay: 3500 },
      { speaker: "ai", text: "I have your address as 123 Main Street. Is that correct?", delay: 5500 },
      { speaker: "human", text: "We moved. Our new address is 456 Oak Avenue.", delay: 8500 },
      { speaker: "ai", text: "Got it. And what's the best email to reach you?", delay: 12000 },
      { speaker: "human", text: "contact@abcindustries.com", delay: 15000 },
      { speaker: "ai", text: "Perfect, I've updated everything. Have a great day!", delay: 17500 },
    ],
    results: ["Address updated", "Email verified", "Contact confirmed"],
  },
  {
    id: "appointment",
    label: "Appointments",
    icon: Calendar,
    subtitle: "Confirming Appointments",
    transcript: [
      { speaker: "ai", text: "Hi! This is Maya calling from Smile Dental. I'm confirming your appointment for tomorrow at 2 PM with Dr. Johnson.", delay: 0 },
      { speaker: "human", text: "Oh yes, I have that scheduled.", delay: 4000 },
      { speaker: "ai", text: "Great! Will you be able to make it at 2 PM?", delay: 6500 },
      { speaker: "human", text: "Actually, can I reschedule to 4 PM instead?", delay: 9000 },
      { speaker: "ai", text: "Let me check... Yes, 4 PM is available. I've updated your appointment. You'll receive a confirmation text.", delay: 12000 },
      { speaker: "human", text: "Perfect, thank you!", delay: 16000 },
      { speaker: "ai", text: "You're welcome! See you tomorrow at 4 PM. Have a great day!", delay: 17500 },
    ],
    results: ["Appointment rescheduled", "4 PM confirmed", "SMS sent"],
  },
  {
    id: "lead-qualification",
    label: "Lead Qualification",
    icon: Target,
    subtitle: "Qualifying Leads",
    transcript: [
      { speaker: "ai", text: "Hi! This is Maya from SalesFlow. Thanks for your interest in our platform. Do you have a few minutes to chat?", delay: 0 },
      { speaker: "human", text: "Sure, I submitted a demo request yesterday.", delay: 3500 },
      { speaker: "ai", text: "Great! What's driving your interest in a new sales tool?", delay: 6000 },
      { speaker: "human", text: "Our team is growing and we need better lead tracking.", delay: 9000 },
      { speaker: "ai", text: "Makes sense. How many sales reps are on your team currently?", delay: 12000 },
      { speaker: "human", text: "About 15, and we're hiring 5 more this quarter.", delay: 15000 },
      { speaker: "ai", text: "Perfect fit! I'll have our sales team reach out with a personalized demo. What time works best?", delay: 17500 },
    ],
    results: ["Budget: Confirmed", "Authority: Decision maker", "Timeline: This quarter"],
  },
];

export default function Hero() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const totalDuration = 20000;

  const currentScenario = scenarios[activeScenario];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalDuration) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 100;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    currentScenario.transcript.forEach((message, index) => {
      if (currentTime >= message.delay && !visibleMessages.includes(index)) {
        setVisibleMessages((prev) => [...prev, index]);
      }
    });
  }, [currentTime, visibleMessages, currentScenario.transcript]);

  useEffect(() => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
  }, [visibleMessages]);

  const handlePlayPause = () => {
    if (currentTime >= totalDuration) {
      setCurrentTime(0);
      setVisibleMessages([]);
    }
    setIsPlaying(!isPlaying);
  };

  const handleScenarioChange = (index: number) => {
    if (index !== activeScenario) {
      setActiveScenario(index);
      setIsPlaying(false);
      setCurrentTime(0);
      setVisibleMessages([]);
    }
  };

  const progress = (currentTime / totalDuration) * 100;

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Hero Text - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-display mb-6">
            Less time on calls.
            <br />
            More time <span className="gradient-text">making money.</span>
          </h1>

          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Your team spends hours every week on repetitive phone calls that don't close deals.
            We handle those calls automatically, so your people can focus on what actually drives revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="btn btn-primary">
              Start free trial
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Talk to sales
            </Link>
          </div>

          <p className="text-sm text-slate-500 mt-6">
            No credit card required · 15 free minutes · Setup in 5 minutes
          </p>
        </motion.div>

        {/* Call Simulator - Full Width Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="gradient-border overflow-hidden shadow-2xl">
            <div className="bg-white rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="gradient-bg p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">M</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">Maya Nat</div>
                      <div className="text-white/70 text-sm">{currentScenario.subtitle}</div>
                    </div>
                  </div>
                  {isPlaying && (
                    <div className="flex items-center gap-1">
                      <span className="w-1 h-3 bg-white rounded-full animate-pulse" />
                      <span className="w-1 h-5 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.1s" }} />
                      <span className="w-1 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
                    </div>
                  )}
                </div>
                {/* Scenario Badges */}
                <div className="flex gap-2">
                  {scenarios.map((scenario, index) => {
                    const Icon = scenario.icon;
                    return (
                      <button
                        key={scenario.id}
                        onClick={() => handleScenarioChange(index)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                          activeScenario === index
                            ? "bg-white text-primary"
                            : "bg-white/20 text-white hover:bg-white/30"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {scenario.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Audio Control */}
              <div className="bg-slate-50 px-5 py-4 border-b border-slate-200">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handlePlayPause}
                    className="w-12 h-12 rounded-full gradient-bg text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5 ml-0.5" />
                    )}
                  </button>
                  <div className="flex-1">
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full gradient-bg rounded-full transition-all duration-100"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm text-slate-500 font-medium tabular-nums">
                    {Math.floor(currentTime / 1000)}s / {totalDuration / 1000}s
                  </span>
                </div>
              </div>

              {/* Transcript */}
              <div ref={transcriptRef} className="h-80 overflow-y-auto p-6 space-y-4">
                {visibleMessages.length === 0 && !isPlaying && (
                  <div className="h-full flex items-center justify-center text-slate-400">
                    <p>Press play to hear the conversation</p>
                  </div>
                )}

                {visibleMessages.map((index) => {
                  const message = currentScenario.transcript[index];
                  if (!message) return null;
                  const isAI = message.speaker === "ai";

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${isAI ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`max-w-[80%] p-4 rounded-2xl ${
                          isAI
                            ? "bg-slate-100 rounded-bl-md"
                            : "gradient-bg text-white rounded-br-md"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Extracted Data Footer */}
              {currentTime >= totalDuration && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-t border-slate-200 p-5 gradient-bg-subtle"
                >
                  <p className="text-sm font-medium text-slate-900 mb-3">Results from this call:</p>
                  <div className="flex flex-wrap gap-2">
                    {currentScenario.results.map((item) => (
                      <span key={item} className="text-xs px-3 py-1.5 bg-white border border-slate-200 rounded-full text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-slate-500 mb-6">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50">
            {["TechCorp", "Acme Inc", "StartupXYZ", "Enterprise Co", "InnovateLabs"].map((company) => (
              <span key={company} className="text-slate-400 font-semibold text-lg">{company}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
