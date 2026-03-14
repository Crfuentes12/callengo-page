"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  ArrowRight,
  Database,
  Calendar,
  Target,
  CheckCircle2,
  AlertCircle,
  Phone,
  Zap,
  SkipForward,
} from "lucide-react";
import {
  trackDemoPlay,
  trackDemoPause,
  trackScenarioChange,
  trackFreeTrialClick,
  trackTalkToSalesClick,
} from "@/app/lib/analytics";

/* ──────────────────────────────────────────
   SCENARIO DATA
   ────────────────────────────────────────── */

interface TranscriptLine {
  speaker: "ai" | "human";
  text: string;
  time: number;
}

interface ValidatedField {
  field: string;
  status: "confirmed" | "updated";
  original?: string;
  value: string;
  revealAt: number;
}

interface Scenario {
  id: string;
  label: string;
  icon: typeof Database;
  agentName: string;
  audioSrc: string;
  duration: number;
  durationLabel: string;
  phone: string;
  transcript: TranscriptLine[];
  validatedFields: ValidatedField[];
  ctaHeadline: string;
  ctaSub: string;
}

const scenarios: Scenario[] = [
  {
    id: "data-validation",
    label: "Data Validation",
    icon: Database,
    agentName: "Data Validation Agent",
    audioSrc: "/audio-test/data-validation.wav",
    duration: 44,
    durationLabel: "0:44",
    phone: "+1 5** *** **4",
    ctaHeadline: "Your CRM is full of wrong numbers and outdated contacts",
    ctaSub: "Press play and see the problem get solved",
    transcript: [
      { speaker: "human", text: "Hello.", time: 3 },
      { speaker: "ai", text: "Hi! This is Data Validation Agent, calling for a quick demo.", time: 5 },
      { speaker: "human", text: "Yep.", time: 10 },
      { speaker: "ai", text: "Great. I'm just verifying some information for TechCorp Solutions. Could you confirm your name is John Smith?", time: 12 },
      { speaker: "human", text: "No, that's actually Mike Marshall.", time: 19 },
      { speaker: "ai", text: "Oh, I apologize for the mix-up, Mike. Let me update that. Could you also confirm your email address?", time: 24 },
      { speaker: "human", text: "Sure. It's mike.marshall@example.com.", time: 31 },
      { speaker: "ai", text: "Got it. Thanks for the update, Mike. I appreciate your time helping me verify this information.", time: 36 },
      { speaker: "human", text: "Bye-bye.", time: 42 },
      { speaker: "ai", text: "Goodbye!", time: 44 },
    ],
    validatedFields: [
      { field: "Company", status: "confirmed", value: "TechCorp Solutions", revealAt: 15 },
      { field: "Contact Name", status: "updated", original: "John Smith", value: "Mike Marshall", revealAt: 22 },
      { field: "Email", status: "updated", original: "john.smith@example.com", value: "mike.marshall@example.com", revealAt: 34 },
    ],
  },
  {
    id: "appointment-confirmation",
    label: "Appointments",
    icon: Calendar,
    agentName: "Appointment Confirmation Agent",
    audioSrc: "/audio-test/appointment-confirmation.wav",
    duration: 49,
    durationLabel: "0:49",
    phone: "+1 4** *** **7",
    ctaHeadline: "Every no-show is revenue walking out the door",
    ctaSub: "Press play and watch it get handled",
    transcript: [
      { speaker: "ai", text: "Hi, this is the Healthcare Clinic calling for Robert Taylor. I'm just calling to confirm your consultation appointment scheduled for tomorrow at two o'clock PM. Can you make it?", time: 1 },
      { speaker: "human", text: "No, actually I'm not going to be tomorrow at 2 PM. Can we schedule it for maybe next Monday?", time: 10 },
      { speaker: "ai", text: "I understand. Let me check our availability for next Monday. Would you prefer the morning or afternoon?", time: 20 },
      { speaker: "human", text: "Let's do... 10 AM. Is that okay for you?", time: 27 },
      { speaker: "ai", text: "Let me check... Yes, ten o'clock AM next Monday works perfectly. I've rescheduled your consultation for that time. Is there anything else I can help you with?", time: 33 },
      { speaker: "human", text: "No. Thank you.", time: 42 },
      { speaker: "ai", text: "Great, you're all set. Thanks for letting us know, and have a wonderful day. Goodbye!", time: 45 },
    ],
    validatedFields: [
      { field: "Patient", status: "confirmed", value: "Robert Taylor", revealAt: 4 },
      { field: "Appointment", status: "confirmed", value: "Consultation", revealAt: 4 },
      { field: "Date", status: "updated", original: "Tomorrow 2:00 PM", value: "Monday 10:00 AM", revealAt: 36 },
    ],
  },
  {
    id: "lead-qualification",
    label: "Qualification",
    icon: Target,
    agentName: "Lead Qualification Agent",
    audioSrc: "/audio-test/lead-qualification.wav",
    duration: 83,
    durationLabel: "1:23",
    phone: "+1 5** *** **2",
    ctaHeadline: "Your reps are wasting hours on leads that will never buy",
    ctaSub: "Press play and see how we fix that",
    transcript: [
      { speaker: "human", text: "Hello.", time: 1 },
      { speaker: "ai", text: "Hi! This is Lead Qualification Agent, calling for a quick demo.", time: 4 },
      { speaker: "human", text: "Okay.", time: 10 },
      { speaker: "ai", text: "Great. I'm reaching out because you submitted a form on our website. I see you're interested in the Enterprise Plan. Is that correct?", time: 12 },
      { speaker: "human", text: "I am.", time: 17 },
      { speaker: "ai", text: "Excellent. To make sure we're a good fit, I'd like to ask a few quick questions. First, what is your estimated budget for this solution?", time: 22 },
      { speaker: "human", text: "I don't know.", time: 30 },
      { speaker: "ai", text: "No problem. Do you have a rough range in mind, or would you need to discuss that with your team first?", time: 33 },
      { speaker: "human", text: "We don't want to pay over $200 for the subscription model.", time: 40 },
      { speaker: "ai", text: "Understood. So you're looking to stay under two hundred dollars per month. Next, are you the decision maker for this purchase, or will others need to be involved?", time: 45 },
      { speaker: "human", text: "Um, yeah, I am.", time: 58 },
      { speaker: "ai", text: "Great. And what is your timeline for implementing a solution like this?", time: 60 },
      { speaker: "human", text: "I would say one month, roughly.", time: 65 },
      { speaker: "ai", text: "Okay, so about one month. Thanks for the information. Based on your budget, authority, and timeline, it sounds like you could be a good fit. I'll pass this along to our sales team for follow-up. Thanks for your time, have a great day!", time: 70 },
    ],
    validatedFields: [
      { field: "Interest", status: "confirmed", value: "Enterprise Plan", revealAt: 18 },
      { field: "Budget", status: "confirmed", value: "Under $200/mo", revealAt: 43 },
      { field: "Decision Maker", status: "confirmed", value: "Yes", revealAt: 60 },
      { field: "Timeline", status: "confirmed", value: "~1 month", revealAt: 67 },
    ],
  },
];

/* ── HERO COMPONENT ── */
export default function Hero() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [revealedFields, setRevealedFields] = useState<number[]>([]);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const [audioAvailable, setAudioAvailable] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const scenario = scenarios[activeScenario];

  /* ── Audio detection ── */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onCanPlay = () => setAudioAvailable(true);
    const onError = () => setAudioAvailable(false);
    audio.addEventListener("canplaythrough", onCanPlay);
    audio.addEventListener("error", onError);
    audio.load();
    return () => { audio.removeEventListener("canplaythrough", onCanPlay); audio.removeEventListener("error", onError); };
  }, [activeScenario]);

  /* ── Sync currentTime from <audio> ── */
  useEffect(() => {
    if (!audioAvailable) return;
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setCurrentTime(audio.currentTime);
    const onEnd = () => { setIsPlaying(false); };
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnd);
    return () => { audio.removeEventListener("timeupdate", onTime); audio.removeEventListener("ended", onEnd); };
  }, [activeScenario, audioAvailable]);

  /* ── Timer-based fallback ── */
  useEffect(() => {
    if (audioAvailable) return;
    if (!isPlaying) { if (timerRef.current) clearInterval(timerRef.current); return; }
    timerRef.current = setInterval(() => {
      setCurrentTime((prev) => {
        const next = prev + 0.1;
        if (next >= scenario.duration) {
          setIsPlaying(false);
          if (timerRef.current) clearInterval(timerRef.current);
          return scenario.duration;
        }
        return next;
      });
    }, 100);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isPlaying, audioAvailable, scenario.duration]);

  /* ── Reveal validated fields ── */
  useEffect(() => {
    scenario.validatedFields.forEach((f, i) => {
      if (currentTime >= f.revealAt && !revealedFields.includes(i)) {
        setRevealedFields((prev) => [...prev, i]);
      }
    });
  }, [currentTime, revealedFields, scenario.validatedFields]);

  /* ── Auto-scroll transcript ── */
  useEffect(() => {
    if (transcriptRef.current) transcriptRef.current.scrollTo({ top: transcriptRef.current.scrollHeight, behavior: "smooth" });
  }, [currentTime]);

  const visibleMessages = scenario.transcript.filter((m) => currentTime >= m.time);
  const visibleFields = scenario.validatedFields.filter((_, i) => revealedFields.includes(i));

  const handlePlayPause = useCallback(() => {
    if (isPlaying) {
      if (audioAvailable && audioRef.current) audioRef.current.pause();
      setIsPlaying(false);
      trackDemoPause(scenario.id, (currentTime / scenario.duration) * 100);
    } else {
      if (!hasStartedPlaying) setHasStartedPlaying(true);
      if (currentTime >= scenario.duration - 0.5) {
        if (audioAvailable && audioRef.current) audioRef.current.currentTime = 0;
        setCurrentTime(0); setRevealedFields([]);
      }
      if (audioAvailable && audioRef.current) { audioRef.current.play().catch(() => {}); }
      setIsPlaying(true);
      trackDemoPlay(scenario.id);
    }
  }, [isPlaying, currentTime, scenario.duration, scenario.id, audioAvailable, hasStartedPlaying]);

  const handleScenarioChange = useCallback((index: number) => {
    if (index === activeScenario) return;
    if (timerRef.current) clearInterval(timerRef.current);
    const audio = audioRef.current;
    if (audio) { audio.pause(); audio.currentTime = 0; }
    setActiveScenario(index); setIsPlaying(false); setCurrentTime(0);
    setRevealedFields([]); setHasStartedPlaying(false);
    trackScenarioChange(scenarios[index].id);
  }, [activeScenario]);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    const newTime = pct * scenario.duration;
    if (audioAvailable && audioRef.current) { audioRef.current.currentTime = newTime; }
    setCurrentTime(newTime);
    setRevealedFields(scenario.validatedFields.map((_, i) => i).filter((i) => scenario.validatedFields[i].revealAt <= newTime));
  };

  const nextScenario = () => {
    const next = (activeScenario + 1) % scenarios.length;
    handleScenarioChange(next);
  };

  const progress = (currentTime / scenario.duration) * 100;
  const formatTime = (s: number) => { const m = Math.floor(s / 60); const sec = Math.floor(s % 60); return `${m}:${sec.toString().padStart(2, "0")}`; };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center" style={{ marginBottom: "-1px" }}>
      {/* Lava lamp background — embedded directly in Hero */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/60 to-slate-50" />

        <div className="absolute inset-0 opacity-18">
          {/* Fewer, slower blobs — indigo/purple palette only, no cyan */}
          <div className="absolute -top-[30%] -left-[20%] w-[55%] h-[55%] bg-gradient-to-br from-[#7C3AED]/30 via-[#4F5FE8]/35 to-[#3347D4]/25 rounded-full blur-3xl animate-[hero-lava-1_50s_ease-in-out_infinite]" />
          <div className="absolute -top-[10%] -right-[15%] w-[50%] h-[50%] bg-gradient-to-br from-[#4F5FE8]/40 via-[#EC4899]/15 to-[#3347D4]/30 rounded-full blur-3xl animate-[hero-lava-2_60s_ease-in-out_infinite_-10s]" />
          <div className="absolute top-[35%] -left-[10%] w-[45%] h-[45%] bg-gradient-to-br from-[#4F5FE8]/25 via-[#3347D4]/35 to-[#7C3AED]/20 rounded-full blur-3xl animate-[hero-lava-3_55s_ease-in-out_infinite_-20s]" />
          <div className="absolute bottom-[5%] right-[10%] w-[50%] h-[45%] bg-gradient-to-br from-[#8B5CF6]/30 via-[#4F5FE8]/40 to-[#A8B3F0]/30 rounded-full blur-3xl animate-[hero-lava-4_58s_ease-in-out_infinite_-30s]" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/30" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent" />
      </div>

      <style jsx>{`
        @keyframes hero-lava-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(80px, -60px) scale(1.06); }
          50% { transform: translate(-50px, 40px) scale(0.94); }
          75% { transform: translate(40px, -20px) scale(1.03); }
        }
        @keyframes hero-lava-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          30% { transform: translate(-90px, 50px) scale(1.08); }
          60% { transform: translate(60px, 80px) scale(0.92); }
          80% { transform: translate(70px, -40px) scale(1.04); }
        }
        @keyframes hero-lava-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          35% { transform: translate(70px, 60px) scale(0.93); }
          65% { transform: translate(-80px, -50px) scale(1.07); }
          85% { transform: translate(30px, 30px) scale(0.97); }
        }
        @keyframes hero-lava-4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-70px, -60px) scale(1.05); }
          50% { transform: translate(50px, 40px) scale(0.93); }
          75% { transform: translate(-30px, 70px) scale(1.04); }
        }
      `}</style>

      <audio ref={audioRef} src={scenario.audioSrc} preload="metadata" />

      <div className="max-w-7xl mx-auto px-6 py-32 md:py-40 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ─── LEFT COLUMN ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-display text-foreground mb-6">
              Less time on calls.
              <br />
              <span className="text-electric">More time closing.</span>
            </h1>

            <p className="text-lg text-foreground-secondary mb-10 max-w-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              Your team spends hours every week on repetitive phone calls that
              don&apos;t close deals. We handle those calls automatically, so
              your people can focus on what actually drives revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://app.callengo.com/auth/signup"
                className="btn btn-primary text-sm px-7 py-3.5 rounded-xl"
                onClick={() => trackFreeTrialClick("hero")}
              >
                Get started free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:sales@callengo.com"
                className="btn text-sm px-7 py-3.5 rounded-xl font-medium text-foreground"
                style={{
                  background: "rgba(255, 255, 255, 0.85)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(221, 224, 238, 0.8)",
                  boxShadow: "0 2px 8px rgba(26, 27, 46, 0.08)",
                }}
                onClick={() => trackTalkToSalesClick("hero")}
              >
                Talk to sales
              </a>
            </div>

            <p className="text-sm text-foreground-tertiary mt-6" style={{ fontFamily: "var(--font-body)" }}>
              No credit card required · 15 free minutes · Setup in 5 minutes
            </p>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              {[
                { label: "Calls Automated", value: "50K+" },
                { label: "Avg. Quality", value: "9.2/10" },
                { label: "Time Saved", value: "120h/mo" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-semibold text-electric">{stat.value}</div>
                  <div className="text-xs text-foreground-tertiary mt-1" style={{ fontFamily: "var(--font-body)" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ─── RIGHT COLUMN: Minimal Audio Player ─── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-start justify-center lg:-mt-8"
          >
            <div className="relative w-full max-w-md">
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(40px)",
                  WebkitBackdropFilter: "blur(40px)",
                  border: "1px solid rgba(221, 224, 238, 0.6)",
                  boxShadow: "0 12px 40px rgba(30, 45, 107, 0.12), 0 4px 12px rgba(30, 45, 107, 0.06)",
                }}
              >
                {/* ── Transcript area ── */}
                <div className="h-48 flex flex-col min-h-0 relative">
                  {!hasStartedPlaying ? (
                    <div className="flex-1 flex flex-col items-center justify-center px-5">
                      <p className="text-sm font-medium text-foreground mb-3 text-center" style={{ fontFamily: "var(--font-display)" }}>
                        {scenario.ctaHeadline}
                      </p>
                      <button
                        onClick={handlePlayPause}
                        className="flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-semibold transition-all cursor-pointer hover:scale-105 active:scale-95"
                        style={{
                          background: "rgba(79, 95, 232, 0.15)",
                          color: "var(--color-electric)",
                          border: "1px solid rgba(79, 95, 232, 0.25)",
                        }}
                      >
                        <Play className="w-3 h-3" />
                        Listen to a live demo
                      </button>
                    </div>
                  ) : (
                    <div ref={transcriptRef} className="flex-1 overflow-y-auto px-4 py-2 space-y-1.5 scroll-smooth">
                      {visibleMessages.length === 0 ? (
                        <div className="h-full flex items-center justify-center">
                          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity }} className="flex items-center gap-1.5 text-foreground-tertiary">
                            <div className="w-1.5 h-1.5 rounded-full bg-foreground-tertiary" />
                            <div className="w-1.5 h-1.5 rounded-full bg-foreground-tertiary" />
                            <div className="w-1.5 h-1.5 rounded-full bg-foreground-tertiary" />
                            <span className="text-[10px] ml-1">Connecting call...</span>
                          </motion.div>
                        </div>
                      ) : (
                        <>
                          {visibleMessages.map((msg, idx) => {
                            const isAI = msg.speaker === "ai";
                            return (
                              <motion.div
                                key={`${scenario.id}-${idx}`}
                                initial={{ opacity: 0, y: 4 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                                className={`flex ${isAI ? "justify-start" : "justify-end"}`}
                              >
                                <div
                                  className={`max-w-[85%] px-3 py-1.5 text-[10px] leading-relaxed ${
                                    isAI
                                      ? "rounded-2xl rounded-bl-md"
                                      : "rounded-2xl rounded-br-md text-white"
                                  }`}
                                  style={{
                                    background: isAI
                                      ? "rgba(236, 237, 245, 0.7)"
                                      : "linear-gradient(135deg, #4F5FE8 0%, #3347D4 100%)",
                                    color: isAI ? "var(--color-foreground-secondary)" : "white",
                                  }}
                                >
                                  {msg.text}
                                </div>
                              </motion.div>
                            );
                          })}
                          {isPlaying && visibleMessages.length > 0 && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity }} className="flex items-center gap-1 pl-2">
                              <div className="w-1 h-1 rounded-full bg-foreground-tertiary" />
                              <div className="w-1 h-1 rounded-full bg-foreground-tertiary" />
                              <div className="w-1 h-1 rounded-full bg-foreground-tertiary" />
                            </motion.div>
                          )}
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* ── Extracted data pills ── */}
                <AnimatePresence>
                  {visibleFields.length > 0 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div
                        className="px-3 py-2 flex flex-wrap gap-1.5"
                        style={{ borderTop: "1px solid rgba(221, 224, 238, 0.2)" }}
                      >
                        {visibleFields.map((field, idx) => (
                          <motion.div
                            key={field.field}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px]"
                            style={{
                              background: field.status === "confirmed"
                                ? "rgba(29, 184, 122, 0.08)"
                                : "rgba(245, 158, 11, 0.08)",
                              border: `1px solid ${field.status === "confirmed" ? "rgba(29, 184, 122, 0.2)" : "rgba(245, 158, 11, 0.2)"}`,
                            }}
                          >
                            {field.status === "confirmed"
                              ? <CheckCircle2 className="w-2.5 h-2.5 text-accent" />
                              : <AlertCircle className="w-2.5 h-2.5 text-amber-500" />
                            }
                            <span className="font-medium text-foreground-secondary">{field.field}:</span>
                            <span className="font-semibold text-foreground">{field.value}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── Minimal player controls ── */}
                <div
                  className="px-3 py-2.5 flex items-center gap-2"
                  style={{ borderTop: "1px solid rgba(221, 224, 238, 0.2)" }}
                >
                  <button
                    onClick={handlePlayPause}
                    className="w-7 h-7 rounded-full flex items-center justify-center transition-all cursor-pointer active:scale-90 shrink-0"
                    style={{
                      background: "rgba(79, 95, 232, 0.15)",
                      border: "1px solid rgba(79, 95, 232, 0.25)",
                    }}
                  >
                    {isPlaying ? <Pause className="w-3 h-3 text-electric" /> : <Play className="w-3 h-3 text-electric ml-0.5" />}
                  </button>

                  <div className="flex-1 flex items-center gap-2">
                    <span className="text-[9px] text-foreground-tertiary font-mono tabular-nums w-7 text-right">
                      {formatTime(currentTime)}
                    </span>
                    <div
                      className="flex-1 h-1 rounded-full overflow-hidden cursor-pointer"
                      style={{ background: "rgba(221, 224, 238, 0.4)" }}
                      onClick={handleProgressClick}
                    >
                      <div
                        className="h-full rounded-full transition-all duration-200"
                        style={{
                          width: `${Math.min(progress, 100)}%`,
                          background: "linear-gradient(90deg, #4F5FE8 0%, #3347D4 100%)",
                        }}
                      />
                    </div>
                    <span className="text-[9px] text-foreground-tertiary font-mono tabular-nums w-7">
                      {formatTime(scenario.duration)}
                    </span>
                  </div>

                  <button
                    onClick={nextScenario}
                    className="w-6 h-6 rounded-full flex items-center justify-center transition-all cursor-pointer hover:bg-white/10 active:scale-90 shrink-0"
                    title="Next demo"
                  >
                    <SkipForward className="w-3 h-3 text-foreground-tertiary" />
                  </button>
                </div>

                {/* ── Scenario selector pills ── */}
                <div className="px-3 pb-2.5 flex items-center justify-center gap-1.5">
                  {scenarios.map((s, index) => (
                    <button
                      key={s.id}
                      onClick={() => handleScenarioChange(index)}
                      className={`px-2.5 py-1 rounded-full text-[10px] font-medium transition-all cursor-pointer ${
                        activeScenario === index
                          ? "text-white"
                          : "text-foreground-tertiary hover:text-foreground-secondary"
                      }`}
                      style={{
                        background: activeScenario === index
                          ? "linear-gradient(135deg, #4F5FE8 0%, #3347D4 100%)"
                          : "rgba(236, 237, 245, 0.4)",
                      }}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Smooth transition to next section - seamless fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none z-10" />

    </section>
  );
}
