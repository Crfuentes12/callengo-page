"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Link from "next/link";
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
  ArrowUpRight,
  Phone,
  Clock,
  Star,
  Volume2,
  Mic,
  Zap,
  X,
  BarChart3,
  Shield,
  Sparkles,
  Activity,
  Bot,
  CreditCard,
  Timer,
} from "lucide-react";

/* ──────────────────────────────────────────
   SCENARIO DATA – real calls (timestamps synced to audio)
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
  callQuality: number;
  callOutcome: string;
  transcript: TranscriptLine[];
  validatedFields: ValidatedField[];
  extractedData: ExtractedData[];
  nextActions: string[];
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
    callQuality: 7,
    callOutcome: "Information updated successfully",
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
    nextActions: [
      "Update customer records with new name and email",
      "Confirm if additional information is needed",
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
    callQuality: 9,
    callOutcome: "Consultation rescheduled for next Monday at 10:00 AM",
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
    nextActions: [
      "Update appointment calendar with new date and time",
      "Send confirmation email to Robert Taylor",
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
    callQuality: 9,
    callOutcome: "Qualified lead — passed to sales team for follow-up",
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
    nextActions: [
      "Pass customer information to sales team",
      "Ensure sales team is aware of budget and timeline",
    ],
  },
];

/* ──────────────────────────────────────────
   FLYING DATA PARTICLE
   ────────────────────────────────────────── */
interface FlyingDatum {
  id: string;
  label: string;
  value: string;
  status: "confirmed" | "updated" | "new";
}

function FlyingDataParticle({ datum, onDone }: { datum: FlyingDatum; onDone: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.7 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8, y: 10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onAnimationComplete={onDone}
      className="absolute top-2 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
    >
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs whitespace-nowrap"
        style={{
          background: "rgba(15, 20, 40, 0.85)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(79, 95, 232, 0.3)",
          boxShadow: "0 0 20px rgba(79, 95, 232, 0.2), 0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        {datum.status === "confirmed" ? (
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
        ) : datum.status === "updated" ? (
          <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
        ) : (
          <Zap className="w-3.5 h-3.5 text-blue-400" />
        )}
        <span className="font-medium text-white/90">{datum.label}:</span>
        <span className="text-white/60 max-w-30 truncate">{datum.value}</span>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────
   COMPACT DATA ROW (dark theme)
   ────────────────────────────────────────── */
function DataRow({
  field,
  value,
  status,
  original,
  index,
}: {
  field: string;
  value: string;
  status: "confirmed" | "updated" | "new";
  original?: string;
  index: number;
}) {
  const colors = {
    confirmed: { bg: "rgba(16, 185, 129, 0.1)", border: "rgba(16, 185, 129, 0.2)", text: "text-emerald-400", glow: "0 0 12px rgba(16, 185, 129, 0.15)", badge: "Confirmed" },
    updated: { bg: "rgba(245, 158, 11, 0.1)", border: "rgba(245, 158, 11, 0.2)", text: "text-amber-400", glow: "0 0 12px rgba(245, 158, 11, 0.15)", badge: "Updated" },
    new: { bg: "rgba(79, 95, 232, 0.1)", border: "rgba(79, 95, 232, 0.2)", text: "text-blue-400", glow: "0 0 12px rgba(79, 95, 232, 0.15)", badge: "Extracted" },
  };
  const c = colors[status];

  return (
    <motion.div
      initial={{ opacity: 0, x: -12, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg"
      style={{ background: c.bg, border: `1px solid ${c.border}`, boxShadow: c.glow }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.08 + 0.2, type: "spring", stiffness: 400, damping: 15 }}
      >
        {status === "confirmed" ? (
          <CheckCircle2 className={`w-3.5 h-3.5 ${c.text} shrink-0`} />
        ) : status === "updated" ? (
          <AlertCircle className={`w-3.5 h-3.5 ${c.text} shrink-0`} />
        ) : (
          <Zap className={`w-3.5 h-3.5 ${c.text} shrink-0`} />
        )}
      </motion.div>
      <div className="flex-1 min-w-0">
        <div className="text-[10px] font-medium text-white/40 leading-tight">{field}</div>
        <div className="flex items-center gap-1">
          {original && (
            <span className="text-[9px] text-white/25 line-through truncate max-w-15">{original}</span>
          )}
          {original && <span className="text-[9px] text-white/25">→</span>}
          <span className="text-[11px] font-semibold text-white/90 truncate">{value}</span>
        </div>
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.08 + 0.3 }}
        className={`text-[8px] font-bold uppercase px-1.5 py-0.5 rounded ${c.text} shrink-0`}
        style={{ background: c.bg }}
      >
        {c.badge}
      </motion.span>
    </motion.div>
  );
}

/* ──────────────────────────────────────────
   WAVEFORM VISUALIZER
   ────────────────────────────────────────── */
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

function WaveformVisualizer({ isPlaying }: { isPlaying: boolean }) {
  const bars = 32;
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
    <div className="flex items-end gap-[2px] h-7 w-full">
      {barData.map((b, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-full"
          style={{ background: `linear-gradient(to top, var(--color-accent), var(--color-accent-light))` }}
          animate={
            isPlaying
              ? { height: [`${b.baseHeight}%`, `${b.peakA}%`, `${b.midA}%`, `${b.peakB}%`, `${b.baseHeight}%`], opacity: [0.4, 0.9, 0.5, 0.85, 0.4] }
              : { height: `${b.baseHeight}%`, opacity: 0.2 }
          }
          transition={isPlaying ? { duration: b.duration, repeat: Infinity, ease: "easeInOut", delay: i * 0.02 } : { duration: 0.4 }}
        />
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────
   QUALITY RING (dark theme)
   ────────────────────────────────────────── */
function QualityRing({ score, size = 44 }: { score: number; size?: number }) {
  const pct = (score / 10) * 100;
  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth={3} />
        <motion.circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="url(#qg-dark)" strokeWidth={3} strokeLinecap="round" strokeDasharray={circ} initial={{ strokeDashoffset: circ }} animate={{ strokeDashoffset: offset }} transition={{ duration: 1.2, ease: "easeOut" }} />
        <defs><linearGradient id="qg-dark" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="var(--color-accent)" /><stop offset="100%" stopColor="var(--color-accent-light)" /></linearGradient></defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-bold text-white">{score}</span>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────
   FLOATING PARTICLES
   ────────────────────────────────────────── */
function FloatingParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: seededRandom(i * 7) * 100,
      y: seededRandom(i * 13) * 100,
      size: 2 + seededRandom(i * 19) * 4,
      duration: 15 + seededRandom(i * 23) * 20,
      delay: seededRandom(i * 31) * 10,
      opacity: 0.1 + seededRandom(i * 37) * 0.3,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, rgba(79, 95, 232, ${p.opacity}) 0%, transparent 70%)`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [p.opacity * 0.5, p.opacity, p.opacity * 0.5],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────
   HERO COMPONENT
   ────────────────────────────────────────── */
export default function Hero() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [showAnalysisPopup, setShowAnalysisPopup] = useState(false);
  const [flyingData, setFlyingData] = useState<FlyingDatum[]>([]);
  const [revealedValidated, setRevealedValidated] = useState<number[]>([]);
  const [revealedExtracted, setRevealedExtracted] = useState<number[]>([]);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const dataRef = useRef<HTMLDivElement>(null);
  const flyIdCounter = useRef(0);
  const [audioAvailable, setAudioAvailable] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const scenario = scenarios[activeScenario];

  /* ── Detect if real audio file loaded ── */
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
    const onEnd = () => { setIsPlaying(false); setShowAnalysis(true); setShowAnalysisPopup(true); };
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
          setIsPlaying(false); setShowAnalysis(true); setShowAnalysisPopup(true);
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
      if (currentTime >= f.revealAt && !revealedValidated.includes(i)) {
        setRevealedValidated((prev) => [...prev, i]);
        flyIdCounter.current += 1;
        const id = `fly-${flyIdCounter.current}`;
        setFlyingData((prev) => [...prev, { id, label: f.field, value: f.value, status: f.status }]);
        setTimeout(() => { setFlyingData((prev) => prev.filter((d) => d.id !== id)); }, 2500);
      }
    });
  }, [currentTime, revealedValidated, scenario.validatedFields]);

  /* ── Reveal extracted data ── */
  useEffect(() => {
    scenario.extractedData.forEach((f, i) => {
      if (currentTime >= f.revealAt && !revealedExtracted.includes(i)) {
        setRevealedExtracted((prev) => [...prev, i]);
        flyIdCounter.current += 1;
        const id = `fly-ext-${flyIdCounter.current}`;
        setFlyingData((prev) => [...prev, { id, label: f.field, value: f.value, status: "new" }]);
        setTimeout(() => { setFlyingData((prev) => prev.filter((d) => d.id !== id)); }, 2500);
      }
    });
  }, [currentTime, revealedExtracted, scenario.extractedData]);

  /* ── Auto-scroll transcript ── */
  useEffect(() => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTo({ top: transcriptRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [currentTime]);

  /* ── Auto-scroll data captured ── */
  useEffect(() => {
    if (dataRef.current) {
      dataRef.current.scrollTo({ top: dataRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [revealedValidated.length, revealedExtracted.length]);

  const visibleMessages = scenario.transcript.filter((m) => currentTime >= m.time);

  /* ── Play / Pause ── */
  const handlePlayPause = useCallback(() => {
    if (isPlaying) {
      if (audioAvailable && audioRef.current) audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (!hasStartedPlaying) setHasStartedPlaying(true);
      if (currentTime >= scenario.duration - 0.5) {
        if (audioAvailable && audioRef.current) audioRef.current.currentTime = 0;
        setCurrentTime(0); setRevealedValidated([]); setRevealedExtracted([]);
        setShowAnalysis(false); setShowAnalysisPopup(false); setFlyingData([]);
      }
      if (audioAvailable && audioRef.current) { audioRef.current.play().catch(() => {}); }
      setIsPlaying(true);
    }
  }, [isPlaying, currentTime, scenario.duration, audioAvailable, hasStartedPlaying]);

  /* ── Switch scenario ── */
  const handleScenarioChange = useCallback((index: number) => {
    if (index === activeScenario) return;
    if (timerRef.current) clearInterval(timerRef.current);
    const audio = audioRef.current;
    if (audio) { audio.pause(); audio.currentTime = 0; }
    setActiveScenario(index); setIsPlaying(false); setCurrentTime(0);
    setRevealedValidated([]); setRevealedExtracted([]); setShowAnalysis(false);
    setShowAnalysisPopup(false); setFlyingData([]); setHasStartedPlaying(false);
  }, [activeScenario]);

  /* ── Progress bar click ── */
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    const newTime = pct * scenario.duration;
    if (audioAvailable && audioRef.current) { audioRef.current.currentTime = newTime; }
    setCurrentTime(newTime);
    setRevealedValidated(scenario.validatedFields.map((_, i) => i).filter((i) => scenario.validatedFields[i].revealAt <= newTime));
    setRevealedExtracted(scenario.extractedData.map((_, i) => i).filter((i) => scenario.extractedData[i].revealAt <= newTime));
    if (newTime >= scenario.duration - 0.5) { setShowAnalysis(true); setShowAnalysisPopup(true); }
    else { setShowAnalysis(false); setShowAnalysisPopup(false); }
  };

  const progress = (currentTime / scenario.duration) * 100;
  const formatTime = (s: number) => { const m = Math.floor(s / 60); const sec = Math.floor(s % 60); return `${m}:${sec.toString().padStart(2, "0")}`; };
  const totalDataFields = revealedValidated.length + revealedExtracted.length;

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center" style={{ background: "linear-gradient(145deg, #080b16 0%, #0d1117 30%, #111827 60%, #0f1629 100%)" }}>
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Mesh gradient orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-30" style={{ background: "radial-gradient(circle, rgba(30, 45, 107, 0.4) 0%, transparent 70%)" }} />
        <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-25" style={{ background: "radial-gradient(circle, rgba(79, 95, 232, 0.35) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, rgba(107, 122, 255, 0.3) 0%, transparent 70%)" }} />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(79, 95, 232, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(79, 95, 232, 0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        {/* Floating particles */}
        <FloatingParticles />
      </div>

      <audio ref={audioRef} src={scenario.audioSrc} preload="metadata" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-28 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ─── LEFT COLUMN: Headline + CTA ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(79, 95, 232, 0.1)",
                  border: "1px solid rgba(79, 95, 232, 0.2)",
                  color: "rgba(107, 122, 255, 1)",
                }}
              >
                <Bot className="w-3.5 h-3.5" />
                AI-Powered Calling Platform
                <Sparkles className="w-3 h-3" />
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-display mb-6 text-white">
              Less time on calls.
              <br />
              More time{" "}
              <span className="gradient-text-electric" style={{ WebkitTextFillColor: "transparent" }}>making money.</span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg mb-10 max-w-lg leading-relaxed"
              style={{ color: "rgba(139, 150, 200, 0.9)" }}
            >
              Your team spends hours every week on repetitive phone calls that
              don&apos;t close deals. We handle those calls automatically, so
              your people can focus on what actually drives revenue.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link href="/signup" className="btn btn-electric rounded-xl text-base px-8 py-4 font-semibold group">
                Start free trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/contact" className="btn rounded-xl text-base px-8 py-4 font-semibold transition-all"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                Talk to sales
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="flex flex-wrap gap-5"
            >
              {[
                { icon: CreditCard, text: "No credit card required" },
                { icon: Timer, text: "15 free minutes" },
                { icon: Zap, text: "Setup in 5 minutes" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-1.5">
                  <item.icon className="w-3.5 h-3.5" style={{ color: "rgba(79, 95, 232, 0.7)" }} />
                  <span className="text-sm" style={{ color: "rgba(139, 150, 200, 0.7)" }}>{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8"
              style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}
            >
              {[
                { label: "Calls Automated", value: "50K+" },
                { label: "Avg. Quality", value: "9.2/10" },
                { label: "Time Saved", value: "120h/mo" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                >
                  <div className="text-2xl font-bold gradient-text-electric" style={{ WebkitTextFillColor: "transparent" }}>{stat.value}</div>
                  <div className="text-xs mt-1" style={{ color: "rgba(139, 150, 200, 0.6)" }}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ─── RIGHT COLUMN: Interactive Demo Card ─── */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Outer glow */}
            <div className="absolute -inset-8 rounded-[2rem] opacity-60 -z-10" style={{ background: "radial-gradient(ellipse at center, rgba(79, 95, 232, 0.15) 0%, transparent 70%)" }} />
            <motion.div
              className="absolute -inset-4 rounded-[2rem] -z-10"
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ background: "radial-gradient(ellipse at center, rgba(79, 95, 232, 0.1) 0%, transparent 60%)" }}
            />

            <div className="relative w-full max-w-[420px]">
              {/* Glassmorphism demo card shell */}
              <div className="rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(13, 17, 30, 0.7)",
                  backdropFilter: "blur(40px)",
                  border: "1px solid rgba(79, 95, 232, 0.15)",
                  boxShadow: "0 0 80px rgba(79, 95, 232, 0.08), 0 25px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                }}
              >
                {/* App screen — FIXED HEIGHT */}
                <div className="overflow-hidden relative h-[560px] flex flex-col">

                  {/* Call header - glass */}
                  <div className="px-4 py-3 shrink-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(30, 45, 107, 0.5) 0%, rgba(79, 95, 232, 0.3) 100%)",
                      borderBottom: "1px solid rgba(79, 95, 232, 0.15)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                          style={{ background: "rgba(79, 95, 232, 0.2)", border: "1px solid rgba(79, 95, 232, 0.3)" }}
                        >
                          <Phone className="w-4 h-4 text-accent-light" />
                        </div>
                        <div>
                          <div className="text-white font-semibold text-[13px] leading-tight">{scenario.agentName}</div>
                          <div className="text-white/40 text-[10px] font-mono">{scenario.phone}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {isPlaying && (
                          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                            style={{ background: "rgba(239, 68, 68, 0.15)", border: "1px solid rgba(239, 68, 68, 0.25)" }}
                          >
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                            </span>
                            <span className="text-red-300 text-[10px] font-semibold tracking-wide">LIVE</span>
                          </motion.div>
                        )}
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.05)" }}>
                          <Activity className="w-3 h-3 text-emerald-400" />
                          <span className="text-[9px] text-emerald-400 font-medium">{scenario.callQuality}/10</span>
                        </div>
                      </div>
                    </div>

                    {/* Scenario tabs — premium glass style */}
                    <div className="flex gap-1.5">
                      {scenarios.map((s, index) => {
                        const Icon = s.icon;
                        const isActive = activeScenario === index;
                        return (
                          <button
                            key={s.id}
                            onClick={() => handleScenarioChange(index)}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-medium transition-all cursor-pointer whitespace-nowrap"
                            style={isActive ? {
                              background: "rgba(255, 255, 255, 0.12)",
                              border: "1px solid rgba(255, 255, 255, 0.15)",
                              color: "#fff",
                              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                            } : {
                              background: "rgba(255, 255, 255, 0.04)",
                              border: "1px solid transparent",
                              color: "rgba(255, 255, 255, 0.5)",
                            }}
                          >
                            <Icon className="w-3 h-3" />
                            {s.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Waveform + controls - glass */}
                  <div className="px-3 py-2.5 shrink-0" style={{ background: "rgba(255, 255, 255, 0.02)", borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                    <div className="flex items-center gap-2.5">
                      <button
                        onClick={handlePlayPause}
                        className="w-9 h-9 rounded-xl flex items-center justify-center transition-all shrink-0 cursor-pointer active:scale-95"
                        style={{
                          background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%)",
                          boxShadow: "0 0 20px rgba(79, 95, 232, 0.3), 0 4px 12px rgba(0,0,0,0.3)",
                        }}
                      >
                        {isPlaying ? <Pause className="w-3.5 h-3.5 text-white" /> : <Play className="w-3.5 h-3.5 text-white ml-0.5" />}
                      </button>
                      <div className="flex-1 space-y-1">
                        <WaveformVisualizer isPlaying={isPlaying} />
                        <div className="h-1 rounded-full overflow-hidden cursor-pointer relative group" style={{ background: "rgba(255, 255, 255, 0.08)" }} onClick={handleProgressClick}>
                          <motion.div
                            className="h-full rounded-full"
                            style={{
                              width: `${Math.min(progress, 100)}%`,
                              background: "linear-gradient(90deg, var(--color-accent), var(--color-accent-light))",
                              boxShadow: "0 0 8px rgba(79, 95, 232, 0.4)",
                            }}
                          />
                          <div
                            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{
                              left: `calc(${Math.min(progress, 100)}% - 6px)`,
                              background: "var(--color-accent-light)",
                              boxShadow: "0 0 10px rgba(79, 95, 232, 0.5)",
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-end shrink-0">
                        <span className="text-[10px] text-white/40 font-mono tabular-nums">
                          {formatTime(currentTime)}
                        </span>
                        <span className="text-[9px] text-white/20 font-mono tabular-nums">
                          {formatTime(scenario.duration)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ── CONTENT: fixed split area ── */}
                  <div className="flex-1 flex flex-col min-h-0 relative">
                    {/* Flying particles */}
                    <AnimatePresence>
                      {flyingData.map((d) => (
                        <FlyingDataParticle key={d.id} datum={d} onDone={() => {}} />
                      ))}
                    </AnimatePresence>

                    {!hasStartedPlaying ? (
                      /* ── CTA Banner ── */
                      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
                        <motion.div
                          animate={{ scale: [1, 1.08, 1], boxShadow: ["0 0 20px rgba(79, 95, 232, 0.2)", "0 0 40px rgba(79, 95, 232, 0.4)", "0 0 20px rgba(79, 95, 232, 0.2)"] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 cursor-pointer"
                          style={{
                            background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%)",
                          }}
                          onClick={handlePlayPause}
                        >
                          <Play className="w-7 h-7 text-white ml-0.5" />
                        </motion.div>
                        <p className="text-[14px] font-semibold text-white/90 mb-2 leading-snug max-w-[280px]">
                          {scenario.ctaHeadline}
                        </p>
                        <p className="text-[12px] text-white/40">
                          {scenario.ctaSub}
                        </p>
                        {/* Decorative ring */}
                        <motion.div
                          className="absolute inset-0 pointer-events-none flex items-center justify-center"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        >
                          <div className="w-40 h-40 rounded-full" style={{ border: "1px dashed rgba(79, 95, 232, 0.12)" }} />
                        </motion.div>
                      </div>
                    ) : (
                      <>
                        {/* Transcript section */}
                        <div className="flex-[3] min-h-0 flex flex-col">
                          <div className="px-3 py-1.5 flex items-center justify-between shrink-0" style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)", background: "rgba(255, 255, 255, 0.02)" }}>
                            <div className="flex items-center gap-1.5">
                              <Mic className="w-3 h-3" style={{ color: "rgba(79, 95, 232, 0.6)" }} />
                              <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "rgba(255, 255, 255, 0.35)" }}>Live Transcript</span>
                            </div>
                            {totalDataFields > 0 && (
                              <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1"
                                style={{ background: "rgba(16, 185, 129, 0.1)", color: "rgba(16, 185, 129, 0.8)", border: "1px solid rgba(16, 185, 129, 0.2)" }}
                              >
                                <Zap className="w-2.5 h-2.5" />{totalDataFields} captured
                              </motion.span>
                            )}
                          </div>
                          <div ref={transcriptRef} className="flex-1 overflow-y-auto p-3 space-y-2 scroll-smooth" style={{ scrollbarWidth: "none" }}>
                            {visibleMessages.length === 0 ? (
                              <div className="h-full flex items-center justify-center">
                                <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity }} className="flex items-center gap-1.5">
                                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(79, 95, 232, 0.4)" }} />
                                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(79, 95, 232, 0.4)" }} />
                                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(79, 95, 232, 0.4)" }} />
                                  <span className="text-[10px] ml-1" style={{ color: "rgba(255, 255, 255, 0.3)" }}>Connecting call...</span>
                                </motion.div>
                              </div>
                            ) : (
                              <>
                                {visibleMessages.map((msg, idx) => {
                                  const isAI = msg.speaker === "ai";
                                  return (
                                    <motion.div
                                      key={`${scenario.id}-${idx}`}
                                      initial={{ opacity: 0, y: 8 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.25, ease: "easeOut" }}
                                      className={`flex ${isAI ? "justify-start" : "justify-end"}`}
                                    >
                                      <div
                                        className={`max-w-[85%] px-3 py-2 rounded-xl text-[11px] leading-relaxed ${isAI ? "rounded-bl-sm" : "rounded-br-sm"}`}
                                        style={isAI ? {
                                          background: "rgba(255, 255, 255, 0.06)",
                                          border: "1px solid rgba(255, 255, 255, 0.08)",
                                          color: "rgba(255, 255, 255, 0.8)",
                                        } : {
                                          background: "linear-gradient(135deg, rgba(79, 95, 232, 0.3) 0%, rgba(107, 122, 255, 0.2) 100%)",
                                          border: "1px solid rgba(79, 95, 232, 0.25)",
                                          color: "rgba(255, 255, 255, 0.9)",
                                        }}
                                      >
                                        {isAI && (
                                          <div className="flex items-center gap-1 mb-0.5">
                                            <Bot className="w-2.5 h-2.5" style={{ color: "rgba(79, 95, 232, 0.7)" }} />
                                            <span className="text-[8px] font-semibold uppercase" style={{ color: "rgba(79, 95, 232, 0.6)" }}>AI Agent</span>
                                          </div>
                                        )}
                                        {msg.text}
                                      </div>
                                    </motion.div>
                                  );
                                })}
                                {isPlaying && visibleMessages.length > 0 && (
                                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity }} className="flex items-center gap-1 pl-2">
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(79, 95, 232, 0.4)" }} />
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(79, 95, 232, 0.4)" }} />
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(79, 95, 232, 0.4)" }} />
                                  </motion.div>
                                )}
                              </>
                            )}
                          </div>
                        </div>

                        {/* Data captured section */}
                        <div className="flex-[2] min-h-0 flex flex-col" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
                          <div className="px-3 py-1.5 flex items-center gap-1.5 shrink-0" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
                            <Database className="w-3 h-3" style={{ color: "rgba(79, 95, 232, 0.5)" }} />
                            <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "rgba(255, 255, 255, 0.35)" }}>Data Captured</span>
                          </div>
                          <div ref={dataRef} className="flex-1 overflow-y-auto p-2 space-y-1.5 scroll-smooth" style={{ scrollbarWidth: "none" }}>
                            {revealedValidated.length === 0 && revealedExtracted.length === 0 ? (
                              <div className="h-full flex flex-col items-center justify-center gap-2">
                                <Database className="w-4 h-4" style={{ color: "rgba(255, 255, 255, 0.15)" }} />
                                <span className="text-[10px]" style={{ color: "rgba(255, 255, 255, 0.25)" }}>Waiting for data...</span>
                                {isPlaying && (
                                  <motion.div className="w-16 h-0.5 rounded-full overflow-hidden" style={{ background: "rgba(255, 255, 255, 0.05)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    <motion.div className="h-full rounded-full" style={{ width: "60%", background: "linear-gradient(90deg, var(--color-accent), var(--color-accent-light))" }} animate={{ x: ["-100%", "200%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
                                  </motion.div>
                                )}
                              </div>
                            ) : (
                              <>
                                {revealedValidated.map((vi, ri) => {
                                  const f = scenario.validatedFields[vi];
                                  return <DataRow key={`v-${vi}`} field={f.field} value={f.value} status={f.status} original={f.original} index={ri} />;
                                })}
                                {revealedExtracted.map((ei, ri) => {
                                  const f = scenario.extractedData[ei];
                                  return <DataRow key={`e-${ei}`} field={f.field} value={f.value} status="new" index={ri + revealedValidated.length} />;
                                })}
                              </>
                            )}
                          </div>
                        </div>
                      </>
                    )}

                  </div>

                  {/* Re-open analysis */}
                  {showAnalysis && !showAnalysisPopup && (
                    <div className="shrink-0 px-3 py-2" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
                      <motion.button
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        onClick={() => setShowAnalysisPopup(true)}
                        className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-[11px] font-medium cursor-pointer transition-colors"
                        style={{
                          background: "rgba(79, 95, 232, 0.1)",
                          border: "1px solid rgba(79, 95, 232, 0.2)",
                          color: "rgba(107, 122, 255, 0.8)",
                        }}
                      >
                        <BarChart3 className="w-3.5 h-3.5" />
                        View call analysis
                      </motion.button>
                    </div>
                  )}

                  {/* ── Full-screen Analysis Popup ── */}
                  <AnimatePresence>
                    {showAnalysisPopup && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 z-50 flex flex-col overflow-hidden"
                        style={{ background: "rgba(8, 11, 22, 0.8)", backdropFilter: "blur(12px)" }}
                      >
                        {/* Modal card */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.97 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.97 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="flex-1 flex flex-col overflow-hidden m-3 rounded-2xl"
                          style={{
                            background: "rgba(13, 17, 30, 0.95)",
                            border: "1px solid rgba(79, 95, 232, 0.15)",
                            boxShadow: "0 0 40px rgba(79, 95, 232, 0.1), 0 20px 40px rgba(0,0,0,0.4)",
                          }}
                        >
                          {/* Header */}
                          <div className="px-5 pt-4 pb-3 text-center" style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                            <div className="text-[12px] font-semibold text-white/90">Call Analysis</div>
                          </div>

                          {/* Content — scrollable */}
                          <div className="flex-1 overflow-y-auto px-5 py-4" style={{ scrollbarWidth: "none" }}>
                            {/* Quality score */}
                            <div className="flex flex-col items-center mb-5">
                              <QualityRing score={scenario.callQuality} size={56} />
                              <div className="text-[12px] font-semibold text-white/90 mt-2">Call Complete</div>
                              <div className="text-[10px] flex items-center gap-1 mt-1" style={{ color: "rgba(139, 150, 200, 0.6)" }}>
                                <Clock className="w-2.5 h-2.5" />{scenario.durationLabel}
                              </div>
                            </div>

                            {/* Outcome */}
                            <div className="text-[11px] text-center leading-snug rounded-xl px-4 py-2.5 mb-5"
                              style={{
                                background: "rgba(79, 95, 232, 0.08)",
                                border: "1px solid rgba(79, 95, 232, 0.12)",
                                color: "rgba(139, 150, 200, 0.8)",
                              }}
                            >
                              {scenario.callOutcome}
                            </div>

                            {/* Data rows */}
                            <div className="space-y-1.5 mb-5">
                              {scenario.validatedFields.map((f, i) => (
                                <div key={i} className="flex items-center justify-between px-3 py-2 rounded-xl text-[10px]"
                                  style={{
                                    background: f.status === "confirmed" ? "rgba(16, 185, 129, 0.08)" : "rgba(245, 158, 11, 0.08)",
                                    border: `1px solid ${f.status === "confirmed" ? "rgba(16, 185, 129, 0.15)" : "rgba(245, 158, 11, 0.15)"}`,
                                  }}
                                >
                                  <span className="font-medium" style={{ color: "rgba(139, 150, 200, 0.7)" }}>{f.field}</span>
                                  <span className="font-semibold text-white/90 truncate ml-2 max-w-[130px] text-right">{f.value}</span>
                                </div>
                              ))}
                              {scenario.extractedData.map((f, i) => (
                                <div key={`e-${i}`} className="flex items-center justify-between px-3 py-2 rounded-xl text-[10px]"
                                  style={{
                                    background: "rgba(79, 95, 232, 0.08)",
                                    border: "1px solid rgba(79, 95, 232, 0.15)",
                                  }}
                                >
                                  <span className="font-medium" style={{ color: "rgba(139, 150, 200, 0.7)" }}>{f.field}</span>
                                  <span className="font-semibold text-white/90 truncate ml-2 max-w-[130px] text-right">{f.value}</span>
                                </div>
                              ))}
                            </div>

                            {/* Next steps */}
                            <div className="text-[9px] font-semibold uppercase tracking-wider mb-2" style={{ color: "rgba(255, 255, 255, 0.3)" }}>Next Steps</div>
                            <div className="space-y-2">
                              {scenario.nextActions.map((action, i) => (
                                <div key={i} className="flex items-start gap-2.5 text-[10px]" style={{ color: "rgba(139, 150, 200, 0.7)" }}>
                                  <span className="w-5 h-5 rounded-lg flex items-center justify-center text-[9px] font-bold shrink-0 mt-0.5"
                                    style={{
                                      background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%)",
                                      color: "white",
                                    }}
                                  >{i + 1}</span>
                                  <span className="leading-snug">{action}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Bottom close */}
                          <div className="px-5 pb-4 pt-2" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
                            <button
                              onClick={() => setShowAnalysisPopup(false)}
                              className="w-full py-2.5 rounded-xl text-[11px] font-semibold cursor-pointer transition-colors"
                              style={{
                                background: "rgba(255, 255, 255, 0.06)",
                                color: "rgba(255, 255, 255, 0.6)",
                                border: "1px solid rgba(255, 255, 255, 0.08)",
                              }}
                            >
                              Close
                            </button>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -top-px -left-px w-8 h-8 pointer-events-none" style={{ borderTop: "2px solid rgba(79, 95, 232, 0.3)", borderLeft: "2px solid rgba(79, 95, 232, 0.3)", borderTopLeftRadius: "1rem" }} />
              <div className="absolute -top-px -right-px w-8 h-8 pointer-events-none" style={{ borderTop: "2px solid rgba(79, 95, 232, 0.3)", borderRight: "2px solid rgba(79, 95, 232, 0.3)", borderTopRightRadius: "1rem" }} />
              <div className="absolute -bottom-px -left-px w-8 h-8 pointer-events-none" style={{ borderBottom: "2px solid rgba(79, 95, 232, 0.3)", borderLeft: "2px solid rgba(79, 95, 232, 0.3)", borderBottomLeftRadius: "1rem" }} />
              <div className="absolute -bottom-px -right-px w-8 h-8 pointer-events-none" style={{ borderBottom: "2px solid rgba(79, 95, 232, 0.3)", borderRight: "2px solid rgba(79, 95, 232, 0.3)", borderBottomRightRadius: "1rem" }} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(255,255,255,1) 0%, transparent 100%)" }} />
    </section>
  );
}
