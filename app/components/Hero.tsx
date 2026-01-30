"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Pause, ArrowRight } from "lucide-react";

const callTranscript = [
  { speaker: "ai", text: "Hello! My name is Maya from TechCorp. I'm calling to verify some information. Is this ABC Industries?", delay: 0 },
  { speaker: "human", text: "Yes, this is ABC Industries.", delay: 3500 },
  { speaker: "ai", text: "I have your address as 123 Main Street. Is that correct?", delay: 5500 },
  { speaker: "human", text: "We moved. Our new address is 456 Oak Avenue.", delay: 8500 },
  { speaker: "ai", text: "Got it. And what's the best email to reach you?", delay: 12000 },
  { speaker: "human", text: "contact@abcindustries.com", delay: 15000 },
  { speaker: "ai", text: "Perfect, I've updated everything. Have a great day!", delay: 17500 },
];

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const totalDuration = 20000;

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
    callTranscript.forEach((message, index) => {
      if (currentTime >= message.delay && !visibleMessages.includes(index)) {
        setVisibleMessages((prev) => [...prev, index]);
      }
    });
  }, [currentTime, visibleMessages]);

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
          <span className="badge badge-primary mb-6">AI Voice Agents</span>

          <h1 className="text-display mb-6">
            Your calls.
            <br />
            <span className="gradient-text">On autopilot.</span>
          </h1>

          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            AI agents that make phone calls indistinguishable from humans.
            Verify data, confirm appointments, qualify leads—automatically.
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
              <div className="gradient-bg p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">AI</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">Maya · AI Agent</div>
                    <div className="text-white/70 text-sm">Data Validation Call</div>
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
                  const message = callTranscript[index];
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
                  <p className="text-sm font-medium text-slate-900 mb-3">Data extracted by AI:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Address updated", "Email verified", "Contact confirmed"].map((item) => (
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
