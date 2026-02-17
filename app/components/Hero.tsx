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
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-lg text-xs whitespace-nowrap">
        {datum.status === "confirmed" ? (
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
        ) : datum.status === "updated" ? (
          <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
        ) : (
          <Zap className="w-3.5 h-3.5 text-blue-500" />
        )}
        <span className="font-medium text-slate-700">{datum.label}:</span>
        <span className="text-slate-500 max-w-30 truncate">{datum.value}</span>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────
   COMPACT DATA ROW
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
    confirmed: { bg: "bg-emerald-50", text: "text-emerald-700", badge: "Confirmed" },
    updated: { bg: "bg-amber-50", text: "text-amber-700", badge: "Updated" },
    new: { bg: "bg-blue-50", text: "text-blue-700", badge: "New" },
  };
  const c = colors[status];

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
      className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg ${c.bg}`}
    >
      {status === "confirmed" ? (
        <CheckCircle2 className={`w-3.5 h-3.5 ${c.text} shrink-0`} />
      ) : status === "updated" ? (
        <AlertCircle className={`w-3.5 h-3.5 ${c.text} shrink-0`} />
      ) : (
        <Zap className={`w-3.5 h-3.5 ${c.text} shrink-0`} />
      )}
      <div className="flex-1 min-w-0">
        <div className="text-[10px] font-medium text-slate-500 leading-tight">{field}</div>
        <div className="flex items-center gap-1">
          {original && (
            <span className="text-[9px] text-slate-400 line-through truncate max-w-15">{original}</span>
          )}
          {original && <span className="text-[9px] text-slate-400">→</span>}
          <span className="text-[11px] font-semibold text-slate-800 truncate">{value}</span>
        </div>
      </div>
      <span className={`text-[8px] font-bold uppercase px-1 py-0.5 rounded ${c.text} opacity-80 shrink-0`}>
        {c.badge}
      </span>
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
  const bars = 28;
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
    <div className="flex items-end gap-0.5 h-6 w-full">
      {barData.map((b, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-full"
          style={{ background: `linear-gradient(to top, var(--color-gradient-start), var(--color-gradient-end))` }}
          animate={
            isPlaying
              ? { height: [`${b.baseHeight}%`, `${b.peakA}%`, `${b.midA}%`, `${b.peakB}%`, `${b.baseHeight}%`], opacity: [0.5, 0.9, 0.6, 0.85, 0.5] }
              : { height: `${b.baseHeight}%`, opacity: 0.3 }
          }
          transition={isPlaying ? { duration: b.duration, repeat: Infinity, ease: "easeInOut", delay: i * 0.02 } : { duration: 0.4 }}
        />
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────
   QUALITY RING
   ────────────────────────────────────────── */
function QualityRing({ score, size = 44 }: { score: number; size?: number }) {
  const pct = (score / 10) * 100;
  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e2e8f0" strokeWidth={3} />
        <motion.circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="url(#qg)" strokeWidth={3} strokeLinecap="round" strokeDasharray={circ} initial={{ strokeDashoffset: circ }} animate={{ strokeDashoffset: offset }} transition={{ duration: 1.2, ease: "easeOut" }} />
        <defs><linearGradient id="qg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="var(--color-gradient-start)" /><stop offset="100%" stopColor="var(--color-gradient-end)" /></linearGradient></defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-bold text-slate-800">{score}</span>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────
   DECORATIVE CURVED ARROW (SVG)
   ────────────────────────────────────────── */
function CurvedArrow() {
  return (
    <div className="absolute -right-25 top-[65%] hidden lg:block pointer-events-none z-0">
      <svg
        width="180"
        height="120"
        viewBox="0 0 180 120"
        fill="none"
        className="opacity-30"
      >
        {/* Curve bending DOWN */}
        <path
          d="M20 20 C 80 70, 150 50, 165 20"
          stroke="url(#arrowCurveGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Arrowhead pointing up-right */}
        <path
          d="M166 30 L166 20 L155 20"
          stroke="url(#arrowCurveGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        <defs>
          <linearGradient id="arrowCurveGrad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopOpacity="0.3" />
            <stop offset="100%" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
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
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <audio ref={audioRef} src={scenario.audioSrc} preload="metadata" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ─── LEFT COLUMN ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center relative"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="badge badge-primary">
                <Mic className="w-3 h-3 mr-1" />
                AI Voice Agents
              </span>
            </div>

            <h1 className="text-display mb-6">
              Less time on calls.
              <br />
              More time{" "}
              <span className="gradient-text">making money.</span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Your team spends hours every week on repetitive phone calls that
              don&apos;t close deals. We handle those calls automatically, so
              your people can focus on what actually drives revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
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

            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-slate-200">
              {[
                { label: "Calls Automated", value: "50K+" },
                { label: "Avg. Quality", value: "9.2/10" },
                { label: "Time Saved", value: "120h/mo" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="stat-number text-2xl">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Decorative curved arrow pointing to phone */}
            <CurvedArrow />
          </motion.div>

          {/* ─── RIGHT COLUMN: Software window ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative flex justify-center"
          >
            <div className="relative w-[360px] sm:w-[390px]">
              {/* Software window shell */}
              <div className="rounded-2xl bg-slate-950 shadow-2xl ring-1 ring-slate-700/50 overflow-hidden">

                {/* Window chrome bar */}
                <div className="flex items-center gap-3 px-4 py-2.5 bg-slate-950 border-b border-slate-800">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-3 h-3 rounded-full bg-red-400/60" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                    <span className="w-3 h-3 rounded-full bg-green-400/60" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-slate-800 rounded-md px-3 py-1.5 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full gradient-bg shrink-0" />
                      <span className="text-[11px] text-slate-400 font-mono truncate">app.callengo.com/campaigns/live</span>
                    </div>
                  </div>
                </div>

                {/* App screen — FIXED HEIGHT */}
                <div className="bg-white overflow-hidden relative h-[560px] flex flex-col">

                  {/* App header / call header */}
                  <div className="gradient-bg px-4 py-2.5 shrink-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                          <Phone className="w-3.5 h-3.5 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-semibold text-[12px] leading-tight">{scenario.agentName}</div>
                          <div className="text-white/60 text-[10px]">{scenario.phone}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {isPlaying && (
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-1.5 bg-red-500/25 px-2 py-1 rounded-full">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                            </span>
                            <span className="text-white/90 text-[10px] font-semibold tracking-wide">LIVE</span>
                          </motion.div>
                        )}
                        <Volume2 className="w-3.5 h-3.5 text-white/40" />
                      </div>
                    </div>

                    {/* Tabs — single row, always fits */}
                    <div className="flex gap-1">
                      {scenarios.map((s, index) => {
                        const Icon = s.icon;
                        return (
                          <button
                            key={s.id}
                            onClick={() => handleScenarioChange(index)}
                            className={`flex items-center gap-1 px-2 py-1 rounded-full text-[9px] font-medium transition-all cursor-pointer whitespace-nowrap ${
                              activeScenario === index
                                ? "bg-white text-primary shadow-sm"
                                : "bg-white/15 text-white/80 hover:bg-white/25"
                            }`}
                          >
                            <Icon className="w-2.5 h-2.5" />
                            {s.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Waveform + controls */}
                  <div className="px-3 py-2 bg-slate-50 border-b border-slate-100 shrink-0">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePlayPause}
                        className="w-8 h-8 rounded-full gradient-bg text-white flex items-center justify-center hover:opacity-90 transition-all shadow-lg shrink-0 cursor-pointer active:scale-95"
                      >
                        {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5" />}
                      </button>
                      <div className="flex-1 space-y-0.5">
                        <WaveformVisualizer isPlaying={isPlaying} />
                        <div className="h-1 bg-slate-200 rounded-full overflow-hidden cursor-pointer relative group" onClick={handleProgressClick}>
                          <div className="h-full gradient-bg rounded-full transition-all duration-200" style={{ width: `${Math.min(progress, 100)}%` }} />
                          <div className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full gradient-bg shadow-md opacity-0 group-hover:opacity-100 transition-opacity" style={{ left: `calc(${Math.min(progress, 100)}% - 5px)` }} />
                        </div>
                      </div>
                      <span className="text-[9px] text-slate-400 font-mono tabular-nums shrink-0">
                        {formatTime(currentTime)}/{formatTime(scenario.duration)}
                      </span>
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
                          animate={{ scale: [1, 1.08, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center mb-4 shadow-lg cursor-pointer"
                          onClick={handlePlayPause}
                        >
                          <Play className="w-6 h-6 text-white ml-0.5" />
                        </motion.div>
                        <p className="text-[13px] font-semibold text-slate-800 mb-1 leading-snug">
                          {scenario.ctaHeadline}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          {scenario.ctaSub}
                        </p>
                      </div>
                    ) : (
                      <>
                        {/* Transcript section */}
                        <div className="flex-3 min-h-0 flex flex-col">
                          <div className="px-3 py-1 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between shrink-0">
                            <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">Live Transcript</span>
                            {totalDataFields > 0 && (
                              <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                                <Zap className="w-2.5 h-2.5" />{totalDataFields} captured
                              </motion.span>
                            )}
                          </div>
                          <div ref={transcriptRef} className="flex-1 overflow-y-auto p-2.5 space-y-1.5 scroll-smooth">
                            {visibleMessages.length === 0 ? (
                              <div className="h-full flex items-center justify-center">
                                <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity }} className="flex items-center gap-1.5 text-slate-300">
                                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
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
                                      <div className={`max-w-[85%] px-2.5 py-1.5 rounded-xl text-[10px] leading-relaxed ${isAI ? "bg-slate-100 text-slate-700 rounded-bl-sm" : "gradient-bg text-white rounded-br-sm"}`}>
                                        {msg.text}
                                      </div>
                                    </motion.div>
                                  );
                                })}
                                {isPlaying && visibleMessages.length > 0 && (
                                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity }} className="flex items-center gap-1 pl-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                  </motion.div>
                                )}
                              </>
                            )}
                          </div>
                        </div>

                        {/* Data captured section */}
                        <div className="flex-2 min-h-0 flex flex-col border-t border-slate-100">
                          <div className="px-3 py-1 bg-slate-50/80 flex items-center gap-1 shrink-0">
                            <Database className="w-2.5 h-2.5 text-slate-400" />
                            <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">Data Captured</span>
                          </div>
                          <div ref={dataRef} className="flex-1 overflow-y-auto p-2 space-y-1 scroll-smooth">
                            {revealedValidated.length === 0 && revealedExtracted.length === 0 ? (
                              <div className="h-full flex flex-col items-center justify-center text-slate-300 gap-1">
                                <Database className="w-4 h-4" />
                                <span className="text-[10px]">Waiting for data...</span>
                                {isPlaying && (
                                  <motion.div className="w-12 h-0.5 rounded-full overflow-hidden bg-slate-100" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    <motion.div className="h-full gradient-bg" animate={{ x: ["-100%", "100%"] }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }} style={{ width: "60%" }} />
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
                    <div className="shrink-0 px-3 py-2 border-t border-slate-100">
                      <motion.button
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        onClick={() => setShowAnalysisPopup(true)}
                        className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-[10px] font-medium text-slate-600 cursor-pointer hover:bg-slate-100 transition-colors"
                      >
                        <BarChart3 className="w-3 h-3 text-slate-400" />
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
                        className="absolute inset-0 z-50 bg-black/50 backdrop-blur-sm flex flex-col rounded-2xl overflow-hidden"
                      >
                        {/* Modal card */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.97 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.97 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="flex-1 m-3 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                        >
                          {/* Header */}
                          <div className="px-5 pt-4 pb-3 text-center border-b border-slate-100">
                            <div className="text-[11px] font-semibold text-slate-800">Call Analysis</div>
                          </div>

                          {/* Content — scrollable */}
                          <div className="flex-1 overflow-y-auto px-5 py-4">
                            {/* Quality score */}
                            <div className="flex flex-col items-center mb-4">
                              <QualityRing score={scenario.callQuality} size={52} />
                              <div className="text-[11px] font-semibold text-slate-800 mt-2">Call Complete</div>
                              <div className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                                <Clock className="w-2.5 h-2.5" />{scenario.durationLabel}
                              </div>
                            </div>

                            {/* Outcome */}
                            <div className="text-[10px] text-slate-500 text-center leading-snug bg-slate-50 rounded-xl px-3 py-2 mb-4">
                              {scenario.callOutcome}
                            </div>

                            {/* Data rows */}
                            <div className="space-y-1.5 mb-4">
                              {scenario.validatedFields.map((f, i) => (
                                <div key={i} className={`flex items-center justify-between px-3 py-2 rounded-xl text-[10px] ${f.status === "confirmed" ? "bg-emerald-50" : "bg-amber-50"}`}>
                                  <span className="text-slate-500 font-medium">{f.field}</span>
                                  <span className="font-semibold text-slate-800 truncate ml-2 max-w-32.5 text-right">{f.value}</span>
                                </div>
                              ))}
                              {scenario.extractedData.map((f, i) => (
                                <div key={`e-${i}`} className="flex items-center justify-between px-3 py-2 rounded-xl text-[10px] bg-blue-50">
                                  <span className="text-slate-500 font-medium">{f.field}</span>
                                  <span className="font-semibold text-slate-800 truncate ml-2 max-w-32.5 text-right">{f.value}</span>
                                </div>
                              ))}
                            </div>

                            {/* Next steps */}
                            <div className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Next Steps</div>
                            <div className="space-y-1.5">
                              {scenario.nextActions.map((action, i) => (
                                <div key={i} className="flex items-start gap-2 text-[10px] text-slate-600">
                                  <span className="w-4 h-4 rounded-full gradient-bg text-white flex items-center justify-center text-[8px] font-bold shrink-0 mt-0.5">{i + 1}</span>
                                  <span className="leading-snug">{action}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Bottom close */}
                          <div className="px-5 pb-4 pt-2 border-t border-slate-100">
                            <button
                              onClick={() => setShowAnalysisPopup(false)}
                              className="w-full py-2.5 rounded-xl bg-slate-100 text-[11px] font-semibold text-slate-600 cursor-pointer hover:bg-slate-200 transition-colors"
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

              {/* Glow behind window */}
              <div className="absolute -inset-6 gradient-bg opacity-[0.08] blur-3xl rounded-[3rem] -z-10" />
            </div>
          </motion.div>
        </div>

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
