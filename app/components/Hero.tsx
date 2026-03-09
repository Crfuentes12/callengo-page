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
  Volume2,
  Zap,
} from "lucide-react";

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

interface ExtractedData {
  field: string;
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
  extractedData: ExtractedData[];
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
      { field: "Company Name", status: "confirmed", value: "TechCorp Solutions", revealAt: 15 },
      { field: "Contact Name", status: "updated", original: "John Smith", value: "Mike Marshall", revealAt: 22 },
      { field: "Email", status: "updated", original: "john.smith@example.com", value: "mike.marshall@example.com", revealAt: 34 },
    ],
    extractedData: [
      { field: "Name", value: "Mike Marshall", revealAt: 22 },
      { field: "Email", value: "mike.marshall@example.com", revealAt: 34 },
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
      { field: "Company Name", status: "confirmed", value: "Healthcare Clinic", revealAt: 4 },
      { field: "Appointment Type", status: "confirmed", value: "Consultation", revealAt: 4 },
      { field: "Appointment Date", status: "updated", original: "Tomorrow at 2:00 PM", value: "Next Monday at 10:00 AM", revealAt: 36 },
    ],
    extractedData: [
      { field: "Contact Name", value: "Robert Taylor", revealAt: 4 },
      { field: "Appointment Date", value: "Next Monday at 10:00 AM", revealAt: 36 },
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
      { field: "Company Name", status: "confirmed", value: "Sales Pro Inc", revealAt: 6 },
      { field: "Contact Name", status: "confirmed", value: "Alex Martinez", revealAt: 6 },
      { field: "Interest", status: "confirmed", value: "Enterprise Plan", revealAt: 18 },
    ],
    extractedData: [
      { field: "Budget", value: "Under $200/mo", revealAt: 43 },
      { field: "Decision Maker", value: "Yes", revealAt: 60 },
      { field: "Timeline", value: "~1 month", revealAt: 67 },
    ],
  },
];

/* ── Sub-components ── */

interface FloatingBubble {
  id: string;
  label: string;
  value: string;
  status: "confirmed" | "updated" | "new";
  position: "left" | "right";
  yOffset: number;
}

/* Bubble positions: close to / overlapping the card edges */
const bubblePositions = [
  { top: "top-[16px]", side: "-right-[24px]" },
  { top: "top-[90px]", side: "-left-[28px]" },
  { top: "top-[160px]", side: "-right-[20px]" },
  { top: "top-[230px]", side: "-left-[24px]" },
  { top: "bottom-[80px]", side: "-right-[26px]" },
  { top: "bottom-[20px]", side: "-left-[20px]" },
];

function FloatingDataBubble({ bubble, index }: { bubble: FloatingBubble; index: number }) {
  const statusConfig = {
    confirmed: { icon: <CheckCircle2 className="w-3 h-3 text-accent" />, borderColor: "border-accent/30", bgColor: "bg-accent/5" },
    updated: { icon: <AlertCircle className="w-3 h-3 text-amber-500" />, borderColor: "border-amber-300/40", bgColor: "bg-amber-50" },
    new: { icon: <Zap className="w-3 h-3 text-electric" />, borderColor: "border-electric/30", bgColor: "bg-electric/5" },
  };
  const cfg = statusConfig[bubble.status];
  const pos = bubblePositions[index % bubblePositions.length];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: -5 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`absolute z-30 ${pos.top} ${pos.side}`}
    >
      <div className={`flex items-center gap-2 px-2.5 py-1.5 rounded-xl ${cfg.bgColor} border ${cfg.borderColor} shadow-lg backdrop-blur-md bg-white/85 max-w-[180px]`}>
        {cfg.icon}
        <div className="min-w-0">
          <div className="text-[8px] font-medium text-foreground-tertiary uppercase tracking-wider leading-tight">{bubble.label}</div>
          <div className="text-[10px] font-semibold text-foreground truncate leading-tight">{bubble.value}</div>
        </div>
      </div>
    </motion.div>
  );
}

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

function WaveformVisualizer({ isPlaying }: { isPlaying: boolean }) {
  const bars = 40;
  const barData = useMemo(() => {
    return Array.from({ length: bars }).map((_, i) => {
      const r1 = seededRandom(i);
      const r2 = seededRandom(i + 100);
      const r3 = seededRandom(i + 200);
      const r4 = seededRandom(i + 300);
      const baseHeight = 15 + Math.sin(i * 0.5) * 10 + r1 * 5;
      return {
        baseHeight,
        peakA: Math.min(100, baseHeight + 30 + r2 * 40),
        midA: baseHeight + 10,
        peakB: Math.min(100, baseHeight + 20 + r3 * 30),
        duration: 0.8 + r4 * 0.5,
      };
    });
  }, []);

  return (
    <div className="flex items-end gap-px h-6 w-full">
      {barData.map((b, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-full bg-electric"
          animate={
            isPlaying
              ? { height: [`${b.baseHeight}%`, `${b.peakA}%`, `${b.midA}%`, `${b.peakB}%`, `${b.baseHeight}%`], opacity: [0.3, 0.7, 0.4, 0.65, 0.3] }
              : { height: `${b.baseHeight}%`, opacity: 0.15 }
          }
          transition={isPlaying ? { duration: b.duration, repeat: Infinity, ease: "easeInOut", delay: i * 0.02 } : { duration: 0.4 }}
        />
      ))}
    </div>
  );
}

/* ── HERO COMPONENT ── */
export default function Hero() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [floatingBubbles, setFloatingBubbles] = useState<FloatingBubble[]>([]);
  const [revealedValidated, setRevealedValidated] = useState<number[]>([]);
  const [revealedExtracted, setRevealedExtracted] = useState<number[]>([]);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const flyIdCounter = useRef(0);
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

  /* ── Reveal validated fields as floating bubbles ── */
  useEffect(() => {
    scenario.validatedFields.forEach((f, i) => {
      if (currentTime >= f.revealAt && !revealedValidated.includes(i)) {
        setRevealedValidated((prev) => [...prev, i]);
        flyIdCounter.current += 1;
        const id = `fly-${flyIdCounter.current}`;
        const position: "left" | "right" = flyIdCounter.current % 2 === 0 ? "left" : "right";
        const yOffset = 80 + (flyIdCounter.current % 4) * 70;
        setFloatingBubbles((prev) => [...prev, { id, label: f.field, value: f.value, status: f.status, position, yOffset }]);
        setTimeout(() => { setFloatingBubbles((prev) => prev.filter((d) => d.id !== id)); }, 4000);
      }
    });
  }, [currentTime, revealedValidated, scenario.validatedFields]);

  /* ── Reveal extracted data as floating bubbles ── */
  useEffect(() => {
    scenario.extractedData.forEach((f, i) => {
      if (currentTime >= f.revealAt && !revealedExtracted.includes(i)) {
        setRevealedExtracted((prev) => [...prev, i]);
        flyIdCounter.current += 1;
        const id = `fly-ext-${flyIdCounter.current}`;
        const position: "left" | "right" = flyIdCounter.current % 2 === 0 ? "right" : "left";
        const yOffset = 100 + (flyIdCounter.current % 3) * 80;
        setFloatingBubbles((prev) => [...prev, { id, label: f.field, value: f.value, status: "new", position, yOffset }]);
        setTimeout(() => { setFloatingBubbles((prev) => prev.filter((d) => d.id !== id)); }, 4000);
      }
    });
  }, [currentTime, revealedExtracted, scenario.extractedData]);

  /* ── Auto-scroll transcript ── */
  useEffect(() => {
    if (transcriptRef.current) transcriptRef.current.scrollTo({ top: transcriptRef.current.scrollHeight, behavior: "smooth" });
  }, [currentTime]);

  const visibleMessages = scenario.transcript.filter((m) => currentTime >= m.time);

  const handlePlayPause = useCallback(() => {
    if (isPlaying) {
      if (audioAvailable && audioRef.current) audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (!hasStartedPlaying) setHasStartedPlaying(true);
      if (currentTime >= scenario.duration - 0.5) {
        if (audioAvailable && audioRef.current) audioRef.current.currentTime = 0;
        setCurrentTime(0); setRevealedValidated([]); setRevealedExtracted([]);
        setFloatingBubbles([]);
      }
      if (audioAvailable && audioRef.current) { audioRef.current.play().catch(() => {}); }
      setIsPlaying(true);
    }
  }, [isPlaying, currentTime, scenario.duration, audioAvailable, hasStartedPlaying]);

  const handleScenarioChange = useCallback((index: number) => {
    if (index === activeScenario) return;
    if (timerRef.current) clearInterval(timerRef.current);
    const audio = audioRef.current;
    if (audio) { audio.pause(); audio.currentTime = 0; }
    setActiveScenario(index); setIsPlaying(false); setCurrentTime(0);
    setRevealedValidated([]); setRevealedExtracted([]);
    setFloatingBubbles([]); setHasStartedPlaying(false);
  }, [activeScenario]);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    const newTime = pct * scenario.duration;
    if (audioAvailable && audioRef.current) { audioRef.current.currentTime = newTime; }
    setCurrentTime(newTime);
    setRevealedValidated(scenario.validatedFields.map((_, i) => i).filter((i) => scenario.validatedFields[i].revealAt <= newTime));
    setRevealedExtracted(scenario.extractedData.map((_, i) => i).filter((i) => scenario.extractedData[i].revealAt <= newTime));
  };

  const progress = (currentTime / scenario.duration) * 100;
  const formatTime = (s: number) => { const m = Math.floor(s / 60); const sec = Math.floor(s % 60); return `${m}:${sec.toString().padStart(2, "0")}`; };
  const totalDataFields = revealedValidated.length + revealedExtracted.length;

  return (
    <section className="relative overflow-hidden bg-background min-h-screen flex items-center">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 gradient-bg-mesh" />

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
              >
                Get started free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:sales@callengo.com"
                className="btn btn-secondary text-sm px-7 py-3.5 rounded-xl"
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

          {/* ─── RIGHT COLUMN: Call Demo (Redesigned) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center"
          >
            {/* Gradient glow behind card */}
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-electric/10 via-electric/5 to-transparent blur-2xl -z-10" />
            <div className="absolute -inset-4 rounded-[2.5rem] bg-electric/[0.03] blur-xl -z-10" />

            <div className="relative w-full max-w-md">
              {/* Floating data bubbles - positioned close to / overlapping card */}
              <AnimatePresence>
                {floatingBubbles.map((bubble, idx) => (
                  <FloatingDataBubble key={bubble.id} bubble={bubble} index={idx} />
                ))}
              </AnimatePresence>

              {/* ── Card ── */}
              <div className="rounded-3xl bg-white shadow-2xl ring-1 ring-border/60 overflow-hidden">

                {/* ── Header: agent info + tabs ── */}
                <div className="bg-deep-indigo px-4 py-3">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center">
                        <Phone className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-xs leading-tight">{scenario.agentName}</div>
                        <div className="text-white/40 text-[10px] font-mono">{scenario.phone}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {isPlaying && (
                        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-1 bg-red-500/20 px-2 py-0.5 rounded-full">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
                          </span>
                          <span className="text-white/90 text-[9px] font-bold tracking-wider">LIVE</span>
                        </motion.div>
                      )}
                      {totalDataFields > 0 && (
                        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-[9px] font-bold text-white/80 bg-white/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Zap className="w-2.5 h-2.5 text-accent" />{totalDataFields}
                        </motion.span>
                      )}
                    </div>
                  </div>

                  {/* Scenario tabs */}
                  <div className="flex gap-1">
                    {scenarios.map((s, index) => {
                      const Icon = s.icon;
                      return (
                        <button
                          key={s.id}
                          onClick={() => handleScenarioChange(index)}
                          className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium transition-all cursor-pointer whitespace-nowrap ${
                            activeScenario === index
                              ? "bg-white text-deep-indigo shadow-sm"
                              : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white/80"
                          }`}
                        >
                          <Icon className="w-2.5 h-2.5" />
                          {s.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* ── Player controls: waveform + play/pause + progress ── */}
                <div className="px-4 py-3 bg-background border-b border-border">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handlePlayPause}
                      className="w-9 h-9 rounded-full bg-electric text-white flex items-center justify-center hover:brightness-110 transition-all shadow-md shadow-electric/20 shrink-0 cursor-pointer active:scale-95"
                    >
                      {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5" />}
                    </button>
                    <div className="flex-1 space-y-1">
                      <WaveformVisualizer isPlaying={isPlaying} />
                      <div className="h-1 bg-border rounded-full overflow-hidden cursor-pointer relative group" onClick={handleProgressClick}>
                        <div className="h-full bg-electric rounded-full transition-all duration-200" style={{ width: `${Math.min(progress, 100)}%` }} />
                      </div>
                    </div>
                    <span className="text-[10px] text-foreground-tertiary font-mono tabular-nums shrink-0">
                      {formatTime(currentTime)}/{formatTime(scenario.duration)}
                    </span>
                  </div>
                </div>

                {/* ── Transcript area ── */}
                <div className="h-64 flex flex-col min-h-0 relative">
                  {!hasStartedPlaying ? (
                    /* ── Compact idle state ── */
                    <div className="flex-1 flex flex-col items-center justify-center px-6">
                      <div className="w-full max-w-[220px] mb-3 opacity-30">
                        <WaveformVisualizer isPlaying={false} />
                      </div>
                      <button
                        onClick={handlePlayPause}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 text-electric text-xs font-medium hover:bg-electric/15 transition-colors cursor-pointer"
                      >
                        <Play className="w-3 h-3" />
                        Press play to hear a live demo
                      </button>
                    </div>
                  ) : (
                    <div ref={transcriptRef} className="flex-1 overflow-y-auto p-3 space-y-1.5 scroll-smooth">
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
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                                className={`flex ${isAI ? "justify-start" : "justify-end"}`}
                              >
                                <div className={`max-w-[85%] px-2.5 py-1.5 rounded-xl text-[10px] leading-relaxed ${isAI ? "bg-background-tertiary text-foreground-secondary rounded-bl-sm" : "bg-electric text-white rounded-br-sm"}`}>
                                  {msg.text}
                                </div>
                              </motion.div>
                            );
                          })}
                          {isPlaying && visibleMessages.length > 0 && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity }} className="flex items-center gap-1 pl-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-foreground-tertiary" />
                              <div className="w-1.5 h-1.5 rounded-full bg-foreground-tertiary" />
                              <div className="w-1.5 h-1.5 rounded-full bg-foreground-tertiary" />
                            </motion.div>
                          )}
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
