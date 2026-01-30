"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  Phone,
  Mic,
  Volume2,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const callTranscript = [
  {
    speaker: "ai",
    text: "Hello! My name is Maya from TechCorp Solutions. I'm calling to verify some information we have on file. Is this ABC Industries?",
    delay: 0,
  },
  {
    speaker: "human",
    text: "Yes, this is ABC Industries. How can I help you?",
    delay: 4500,
  },
  {
    speaker: "ai",
    text: "Perfect! I have your address listed as 123 Main Street. Is that still correct?",
    delay: 7000,
  },
  {
    speaker: "human",
    text: "Actually, we moved recently. Our new address is 456 Oak Avenue, Suite 200.",
    delay: 11000,
  },
  {
    speaker: "ai",
    text: "Got it - 456 Oak Avenue, Suite 200. And what's the best email to reach your team?",
    delay: 16000,
  },
  {
    speaker: "human",
    text: "You can use contact@abcindustries.com",
    delay: 21000,
  },
  {
    speaker: "ai",
    text: "Thank you so much! I've updated everything. Have a wonderful day!",
    delay: 24500,
  },
];

const extractedData = [
  { label: "Company", value: "ABC Industries", verified: true },
  { label: "Address", value: "456 Oak Avenue, Suite 200", verified: true },
  { label: "Email", value: "contact@abcindustries.com", verified: true },
  { label: "Status", value: "Fully Verified", verified: true },
];

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [showExtractedData, setShowExtractedData] = useState(false);
  const transcriptRef = useRef<HTMLDivElement>(null);

  const totalDuration = 28000; // Total call duration in ms

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalDuration) {
            setIsPlaying(false);
            setShowExtractedData(true);
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
      // Reset if finished
      setCurrentTime(0);
      setVisibleMessages([]);
      setShowExtractedData(false);
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const progress = (currentTime / totalDuration) * 100;

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">
                AI-Powered Voice Agents
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Calls on{" "}
              <span className="gradient-text">Autopilot</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground-secondary mb-8 max-w-xl mx-auto lg:mx-0">
              Scale your outreach with AI agents that sound{" "}
              <span className="text-foreground font-medium">
                indistinguishable from humans
              </span>
              . Verify data, confirm appointments, and qualify leads - all while
              your team focuses on closing deals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link href="/signup" className="btn btn-primary text-lg px-8 py-4">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="#demo" className="btn btn-secondary text-lg px-8 py-4">
                Watch Demo
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-foreground-secondary">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-dark" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-dark" />
                <span>15 free minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-dark" />
                <span>Setup in 5 minutes</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Call Simulator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-background rounded-3xl border border-border shadow-2xl overflow-hidden">
              {/* Call Header */}
              <div className="bg-gradient-to-r from-primary to-primary-dark p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">
                        Maya - AI Agent
                      </div>
                      <div className="text-white/70 text-sm">
                        Data Validation Call
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {isPlaying && (
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-4 bg-white/60 rounded-full animate-pulse" />
                        <span
                          className="w-1.5 h-6 bg-white/80 rounded-full animate-pulse"
                          style={{ animationDelay: "0.1s" }}
                        />
                        <span
                          className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse"
                          style={{ animationDelay: "0.2s" }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Audio Player */}
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handlePlayPause}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 text-primary" />
                      ) : (
                        <Play className="w-5 h-5 text-primary ml-0.5" />
                      )}
                    </button>

                    <div className="flex-1">
                      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-white rounded-full transition-all duration-100"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <div className="flex justify-between mt-1 text-xs text-white/70">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(totalDuration)}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Volume2 className="w-5 h-5 text-white/70" />
                      <Mic className="w-5 h-5 text-white/70" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Transcript Area */}
              <div
                ref={transcriptRef}
                className="h-64 overflow-y-auto p-6 space-y-4 bg-background-secondary"
              >
                {visibleMessages.length === 0 && !isPlaying && (
                  <div className="h-full flex items-center justify-center text-foreground-tertiary">
                    <div className="text-center">
                      <Phone className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p>Press play to hear the conversation</p>
                    </div>
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
                      transition={{ duration: 0.3 }}
                      className={`flex ${isAI ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`max-w-[85%] p-4 rounded-2xl ${
                          isAI
                            ? "bg-background border border-border rounded-tl-sm"
                            : "bg-primary text-white rounded-tr-sm"
                        }`}
                      >
                        <div
                          className={`text-xs font-medium mb-1 ${
                            isAI ? "text-primary" : "text-white/70"
                          }`}
                        >
                          {isAI ? "Maya (AI Agent)" : "Contact"}
                        </div>
                        <p className={`text-sm ${isAI ? "text-foreground" : ""}`}>
                          {message.text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Extracted Data Panel */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: showExtractedData ? "auto" : 0,
                  opacity: showExtractedData ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-border"
              >
                <div className="p-6 bg-accent/5">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-5 h-5 text-accent-dark" />
                    <span className="font-semibold text-foreground">
                      Data Extracted by AI
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {extractedData.map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-background rounded-xl p-3 border border-border"
                      >
                        <div className="text-xs text-foreground-tertiary mb-1">
                          {item.label}
                        </div>
                        <div className="text-sm font-medium text-foreground flex items-center gap-1.5">
                          {item.value}
                          {item.verified && (
                            <CheckCircle className="w-3.5 h-3.5 text-accent-dark" />
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
