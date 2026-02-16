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
  ChevronDown,
  Volume2,
  Mic,
  Shield,
  Zap,
} from "lucide-react";

/* ──────────────────────────────────────────
   SCENARIO DATA – real calls
   ────────────────────────────────────────── */

interface TranscriptLine {
  speaker: "ai" | "human";
  text: string;
  time: number; // seconds into the audio when this line starts
}

interface ValidatedField {
  field: string;
  status: "confirmed" | "updated";
  original?: string;
  value: string;
  revealAt: number; // seconds into audio
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
  subtitle: string;
  agentName: string;
  audioSrc: string;
  duration: number; // seconds
  durationLabel: string;
  phone: string;
  callQuality: number;
  callOutcome: string;
  transcript: TranscriptLine[];
  validatedFields: ValidatedField[];
  extractedData: ExtractedData[];
  nextActions: string[];
}

const scenarios: Scenario[] = [
  {
    id: "data-validation",
    label: "Data Validation",
    icon: Database,
    subtitle: "Verifying Contact Information",
    agentName: "Data Validation Agent",
    audioSrc: "/test-calls/data-validation.wav",
    duration: 44,
    durationLabel: "0:44",
    phone: "+34 6** *** **7",
    callQuality: 7,
    callOutcome: "Information updated successfully",
    transcript: [
      { speaker: "human", text: "Hello.", time: 0 },
      { speaker: "ai", text: "Hi! This is Data Validation Agent, calling for a quick demo.", time: 2 },
      { speaker: "human", text: "Yep.", time: 6 },
      { speaker: "ai", text: "Great. I'm just verifying some information for TechCorp Solutions. Could you confirm your name is John Smith?", time: 7 },
      { speaker: "human", text: "No, that's actually Mike Marshall.", time: 14 },
      { speaker: "ai", text: "Oh, I apologize for the mix-up, Mike. Let me update that. Could you also confirm your email address?", time: 17 },
      { speaker: "human", text: "Sure. It's mike.marshall@example.com.", time: 23 },
      { speaker: "ai", text: "Got it. Thanks for the update, Mike. I appreciate your time helping me verify this information.", time: 28 },
      { speaker: "human", text: "Bye-bye.", time: 35 },
      { speaker: "ai", text: "Goodbye!", time: 38 },
    ],
    validatedFields: [
      { field: "Company Name", status: "confirmed", value: "TechCorp Solutions", revealAt: 10 },
      { field: "Contact Name", status: "updated", original: "John Smith", value: "Mike Marshall", revealAt: 16 },
      { field: "Email", status: "updated", original: "john.smith@example.com", value: "mike.marshall@example.com", revealAt: 27 },
    ],
    extractedData: [
      { field: "Name", value: "Mike Marshall", revealAt: 16 },
      { field: "Email", value: "mike.marshall@example.com", revealAt: 27 },
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
    subtitle: "Confirming & Rescheduling",
    agentName: "Appointment Confirmation Agent",
    audioSrc: "/test-calls/appointment-confirmation.wav",
    duration: 49,
    durationLabel: "0:49",
    phone: "+34 6** *** **7",
    callQuality: 9,
    callOutcome: "Consultation rescheduled for next Monday at 10:00 AM",
    transcript: [
      { speaker: "ai", text: "Hi, this is the Healthcare Clinic calling for Robert Taylor. I'm just calling to confirm your consultation appointment scheduled for tomorrow at two o'clock PM. Can you make it?", time: 0 },
      { speaker: "human", text: "No, actually I'm not going to be tomorrow at 2 PM. Can we schedule it for maybe next Monday?", time: 8 },
      { speaker: "ai", text: "I understand. Let me check our availability for next Monday. Would you prefer the morning or afternoon?", time: 14 },
      { speaker: "human", text: "Let's do... 10 AM. Is that okay for you?", time: 20 },
      { speaker: "ai", text: "Let me check... Yes, ten o'clock AM next Monday works perfectly. I've rescheduled your consultation for that time. Is there anything else I can help you with?", time: 26 },
      { speaker: "human", text: "No. Thank you.", time: 36 },
      { speaker: "ai", text: "Great, you're all set. Thanks for letting us know, and have a wonderful day. Goodbye!", time: 38 },
    ],
    validatedFields: [
      { field: "Company Name", status: "confirmed", value: "Healthcare Clinic", revealAt: 5 },
      { field: "Appointment Type", status: "confirmed", value: "Consultation", revealAt: 5 },
      { field: "Appointment Date", status: "updated", original: "Tomorrow at 2:00 PM", value: "Next Monday at 10:00 AM", revealAt: 30 },
    ],
    extractedData: [
      { field: "Contact Name", value: "Robert Taylor", revealAt: 5 },
      { field: "Appointment Date", value: "Next Monday at 10:00 AM", revealAt: 30 },
    ],
    nextActions: [
      "Update appointment calendar with new date and time",
      "Send confirmation email to Robert Taylor",
    ],
  },
  {
    id: "lead-qualification",
    label: "Lead Qualification",
    icon: Target,
    subtitle: "Qualifying Sales Leads",
    agentName: "Lead Qualification Agent",
    audioSrc: "/test-calls/lead-qualification.wav",
    duration: 83,
    durationLabel: "1:23",
    phone: "+34 6** *** **7",
    callQuality: 9,
    callOutcome: "Qualified lead — passed to sales team for follow-up",
    transcript: [
      { speaker: "human", text: "Hello.", time: 0 },
      { speaker: "ai", text: "Hi! This is Lead Qualification Agent, calling for a quick demo.", time: 2 },
      { speaker: "human", text: "Okay.", time: 6 },
      { speaker: "ai", text: "Great. I'm reaching out because you submitted a form on our website. I see you're interested in the Enterprise Plan. Is that correct?", time: 7 },
      { speaker: "human", text: "I am.", time: 14 },
      { speaker: "ai", text: "Excellent. To make sure we're a good fit, I'd like to ask a few quick questions. First, what is your estimated budget for this solution?", time: 16 },
      { speaker: "human", text: "I don't know.", time: 24 },
      { speaker: "ai", text: "No problem. Do you have a rough range in mind, or would you need to discuss that with your team first?", time: 26 },
      { speaker: "human", text: "We don't want to pay over $200 for the subscription model.", time: 33 },
      { speaker: "ai", text: "Understood. So you're looking to stay under two hundred dollars per month. Next, are you the decision maker for this purchase, or will others need to be involved?", time: 38 },
      { speaker: "human", text: "Um, yeah, I am.", time: 48 },
      { speaker: "ai", text: "Great. And what is your timeline for implementing a solution like this?", time: 51 },
      { speaker: "human", text: "I would say one month, roughly.", time: 56 },
      { speaker: "ai", text: "Okay, so about one month. Thanks for the information. Based on your budget, authority, and timeline, it sounds like you could be a good fit. I'll pass this along to our sales team for follow-up. Thanks for your time, have a great day!", time: 60 },
    ],
    validatedFields: [
      { field: "Company Name", status: "confirmed", value: "Sales Pro Inc", revealAt: 10 },
      { field: "Contact Name", status: "confirmed", value: "Alex Martinez", revealAt: 10 },
      { field: "Interest", status: "confirmed", value: "Enterprise Plan", revealAt: 15 },
    ],
    extractedData: [
      { field: "Budget", value: "Under $200/mo", revealAt: 36 },
      { field: "Decision Maker", value: "Yes", revealAt: 50 },
      { field: "Timeline", value: "~1 month", revealAt: 58 },
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
      className="absolute top-0 right-0 z-30 pointer-events-none"
    >
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-lg text-xs">
        {datum.status === "confirmed" ? (
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
        ) : datum.status === "updated" ? (
          <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
        ) : (
          <Zap className="w-3.5 h-3.5 text-blue-500" />
        )}
        <span className="font-medium text-slate-700">{datum.label}:</span>
        <span className="text-slate-500">{datum.value}</span>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────
   DATA ROW ANIMATION in the results table
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
  return (
    <motion.div
      initial={{ opacity: 0, x: 20, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-slate-50/80 transition-colors group"
    >
      <div className="flex items-center gap-2 min-w-0">
        {status === "confirmed" ? (
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
        ) : status === "updated" ? (
          <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
        ) : (
          <Zap className="w-3.5 h-3.5 text-blue-500 shrink-0" />
        )}
        <span className="text-xs font-medium text-slate-500 truncate">{field}</span>
      </div>
      <div className="text-right min-w-0 ml-2">
        {original && (
          <span className="text-[10px] text-slate-400 line-through mr-2">{original}</span>
        )}
        <span className="text-xs font-semibold text-slate-800">{value}</span>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────
   WAVEFORM VISUALIZER (seeded, stable bars)
   ────────────────────────────────────────── */
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

function WaveformVisualizer({ isPlaying }: { isPlaying: boolean }) {
  const bars = 40;

  // Pre-compute all random-ish values once so they never change between renders
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
    <div className="flex items-end gap-[2px] h-8 w-full">
      {barData.map((b, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-full"
          style={{
            background: `linear-gradient(to top, var(--color-gradient-start), var(--color-gradient-end))`,
          }}
          animate={
            isPlaying
              ? {
                  height: [
                    `${b.baseHeight}%`,
                    `${b.peakA}%`,
                    `${b.midA}%`,
                    `${b.peakB}%`,
                    `${b.baseHeight}%`,
                  ],
                  opacity: [0.5, 0.9, 0.6, 0.85, 0.5],
                }
              : { height: `${b.baseHeight}%`, opacity: 0.3 }
          }
          transition={
            isPlaying
              ? {
                  duration: b.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.02,
                }
              : { duration: 0.4 }
          }
        />
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────
   QUALITY INDICATOR RING
   ────────────────────────────────────────── */
function QualityRing({ score, size = 48 }: { score: number; size?: number }) {
  const pct = (score / 10) * 100;
  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e2e8f0" strokeWidth={3} />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="url(#qualityGrad)"
          strokeWidth={3}
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="qualityGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-gradient-start)" />
            <stop offset="100%" stopColor="var(--color-gradient-end)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold text-slate-800">{score}</span>
      </div>
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
  const [flyingData, setFlyingData] = useState<FlyingDatum[]>([]);
  const [revealedValidated, setRevealedValidated] = useState<number[]>([]);
  const [revealedExtracted, setRevealedExtracted] = useState<number[]>([]);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
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

    // Force a reload when src changes
    audio.load();

    return () => {
      audio.removeEventListener("canplaythrough", onCanPlay);
      audio.removeEventListener("error", onError);
    };
  }, [activeScenario]);

  /* ── Sync currentTime from <audio> (real mode) ── */
  useEffect(() => {
    if (!audioAvailable) return;
    const audio = audioRef.current;
    if (!audio) return;

    const onTime = () => setCurrentTime(audio.currentTime);
    const onEnd = () => {
      setIsPlaying(false);
      setShowAnalysis(true);
    };

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnd);
    };
  }, [activeScenario, audioAvailable]);

  /* ── Timer-based fallback when audio file is missing ── */
  useEffect(() => {
    if (audioAvailable) return;
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentTime((prev) => {
        const next = prev + 0.1;
        if (next >= scenario.duration) {
          setIsPlaying(false);
          setShowAnalysis(true);
          if (timerRef.current) clearInterval(timerRef.current);
          return scenario.duration;
        }
        return next;
      });
    }, 100);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, audioAvailable, scenario.duration]);

  /* ── Reveal validated fields as audio plays ── */
  useEffect(() => {
    scenario.validatedFields.forEach((f, i) => {
      if (currentTime >= f.revealAt && !revealedValidated.includes(i)) {
        setRevealedValidated((prev) => [...prev, i]);
        // Spawn flying particle
        flyIdCounter.current += 1;
        const id = `fly-${flyIdCounter.current}`;
        setFlyingData((prev) => [
          ...prev,
          { id, label: f.field, value: f.value, status: f.status },
        ]);
        // Remove particle after animation
        setTimeout(() => {
          setFlyingData((prev) => prev.filter((d) => d.id !== id));
        }, 2000);
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
        setFlyingData((prev) => [
          ...prev,
          { id, label: f.field, value: f.value, status: "new" },
        ]);
        setTimeout(() => {
          setFlyingData((prev) => prev.filter((d) => d.id !== id));
        }, 2000);
      }
    });
  }, [currentTime, revealedExtracted, scenario.extractedData]);

  /* ── Auto-scroll transcript ── */
  useEffect(() => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTo({
        top: transcriptRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [currentTime]);

  /* ── Visible transcript messages ── */
  const visibleMessages = scenario.transcript.filter((m) => currentTime >= m.time);

  /* ── Play / Pause ── */
  const handlePlayPause = useCallback(() => {
    if (isPlaying) {
      if (audioAvailable && audioRef.current) audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // If at end, restart
      if (currentTime >= scenario.duration - 0.5) {
        if (audioAvailable && audioRef.current) audioRef.current.currentTime = 0;
        setCurrentTime(0);
        setRevealedValidated([]);
        setRevealedExtracted([]);
        setShowAnalysis(false);
        setFlyingData([]);
        setExpandedSection(null);
      }
      if (audioAvailable && audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
      setIsPlaying(true);
    }
  }, [isPlaying, currentTime, scenario.duration, audioAvailable]);

  /* ── Switch scenario ── */
  const handleScenarioChange = useCallback(
    (index: number) => {
      if (index === activeScenario) return;
      if (timerRef.current) clearInterval(timerRef.current);
      const audio = audioRef.current;
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      setActiveScenario(index);
      setIsPlaying(false);
      setCurrentTime(0);
      setRevealedValidated([]);
      setRevealedExtracted([]);
      setShowAnalysis(false);
      setFlyingData([]);
      setExpandedSection(null);
    },
    [activeScenario],
  );

  /* ── Progress bar click ── */
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    const newTime = pct * scenario.duration;
    if (audioAvailable && audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
    setCurrentTime(newTime);
    setRevealedValidated(
      scenario.validatedFields.map((_, i) => i).filter((i) => scenario.validatedFields[i].revealAt <= newTime),
    );
    setRevealedExtracted(
      scenario.extractedData.map((_, i) => i).filter((i) => scenario.extractedData[i].revealAt <= newTime),
    );
    if (newTime >= scenario.duration - 0.5) {
      setShowAnalysis(true);
    } else {
      setShowAnalysis(false);
    }
  };

  const progress = (currentTime / scenario.duration) * 100;

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      {/* Hidden audio element */}
      <audio ref={audioRef} src={scenario.audioSrc} preload="metadata" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* SPLIT LAYOUT: left text + right player */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ─── LEFT COLUMN: Text + CTA ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center lg:pt-8"
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

            {/* Mini stats */}
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
          </motion.div>

          {/* ─── RIGHT COLUMN: Audio Player + Real-time Analysis ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="gradient-border overflow-hidden shadow-2xl">
              <div className="bg-white rounded-2xl overflow-hidden">
                {/* ── Player Header ── */}
                <div className="gradient-bg px-5 py-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-medium text-sm">
                          {scenario.agentName}
                        </div>
                        <div className="text-white/60 text-xs flex items-center gap-2">
                          <span>{scenario.phone}</span>
                          <span className="w-1 h-1 rounded-full bg-white/40" />
                          <span>{scenario.durationLabel}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {isPlaying && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex items-center gap-2"
                        >
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
                          </span>
                          <span className="text-white/80 text-xs font-medium">LIVE</span>
                        </motion.div>
                      )}
                      <Volume2 className="w-4 h-4 text-white/50" />
                    </div>
                  </div>

                  {/* Scenario selector */}
                  <div className="flex gap-2">
                    {scenarios.map((s, index) => {
                      const Icon = s.icon;
                      return (
                        <button
                          key={s.id}
                          onClick={() => handleScenarioChange(index)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                            activeScenario === index
                              ? "bg-white text-primary shadow-sm"
                              : "bg-white/15 text-white/80 hover:bg-white/25"
                          }`}
                        >
                          <Icon className="w-3 h-3" />
                          <span className="hidden sm:inline">{s.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* ── Waveform + Controls ── */}
                <div className="px-5 py-3 bg-slate-50 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handlePlayPause}
                      className="w-10 h-10 rounded-full gradient-bg text-white flex items-center justify-center hover:opacity-90 transition-all shadow-lg shrink-0 cursor-pointer active:scale-95"
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4 ml-0.5" />
                      )}
                    </button>

                    <div className="flex-1 space-y-1">
                      <WaveformVisualizer isPlaying={isPlaying} />
                      <div
                        className="h-1.5 bg-slate-200 rounded-full overflow-hidden cursor-pointer relative group"
                        onClick={handleProgressClick}
                      >
                        <div
                          className="h-full gradient-bg rounded-full transition-all duration-200"
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        />
                        {/* Hover thumb */}
                        <div
                          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full gradient-bg shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ left: `calc(${Math.min(progress, 100)}% - 6px)` }}
                        />
                      </div>
                    </div>

                    <span className="text-xs text-slate-400 font-mono tabular-nums shrink-0">
                      {formatTime(currentTime)} / {formatTime(scenario.duration)}
                    </span>
                  </div>
                </div>

                {/* ── Transcript + Real-time data panel ── */}
                <div className="grid grid-cols-1 sm:grid-cols-5">
                  {/* Transcript side */}
                  <div className="sm:col-span-3 border-r border-slate-100">
                    <div className="px-3 py-2 border-b border-slate-100 bg-slate-50/50">
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        Live Transcript
                      </span>
                    </div>
                    <div
                      ref={transcriptRef}
                      className="h-56 overflow-y-auto p-3 space-y-2 scroll-smooth"
                    >
                      {visibleMessages.length === 0 && !isPlaying ? (
                        <div className="h-full flex items-center justify-center text-slate-300 text-xs">
                          Press play to start
                        </div>
                      ) : (
                        visibleMessages.map((msg, idx) => {
                          const isAI = msg.speaker === "ai";
                          return (
                            <motion.div
                              key={`${scenario.id}-${idx}`}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.25 }}
                              className={`flex ${isAI ? "justify-start" : "justify-end"}`}
                            >
                              <div
                                className={`max-w-[90%] px-3 py-2 rounded-xl text-xs leading-relaxed ${
                                  isAI
                                    ? "bg-slate-100 text-slate-700 rounded-bl-sm"
                                    : "gradient-bg text-white rounded-br-sm"
                                }`}
                              >
                                {msg.text}
                              </div>
                            </motion.div>
                          );
                        })
                      )}
                      {isPlaying && visibleMessages.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.2, repeat: Infinity }}
                          className="flex items-center gap-1 pl-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Real-time data side */}
                  <div className="sm:col-span-2 relative">
                    {/* Flying particles overlay */}
                    <AnimatePresence>
                      {flyingData.map((d) => (
                        <FlyingDataParticle
                          key={d.id}
                          datum={d}
                          onDone={() => {}}
                        />
                      ))}
                    </AnimatePresence>

                    <div className="px-3 py-2 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        Real-time Analysis
                      </span>
                      {revealedValidated.length > 0 && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded"
                        >
                          {revealedValidated.length + revealedExtracted.length} fields
                        </motion.span>
                      )}
                    </div>

                    <div className="h-56 overflow-y-auto p-2 space-y-1">
                      {revealedValidated.length === 0 && revealedExtracted.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-slate-300 gap-2">
                          <Database className="w-5 h-5" />
                          <span className="text-xs">Waiting for data...</span>
                          {isPlaying && (
                            <motion.div
                              className="w-16 h-0.5 rounded-full overflow-hidden bg-slate-100"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                            >
                              <motion.div
                                className="h-full gradient-bg"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{
                                  duration: 1.2,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                                style={{ width: "60%" }}
                              />
                            </motion.div>
                          )}
                        </div>
                      ) : (
                        <>
                          {/* Validated fields section */}
                          {revealedValidated.length > 0 && (
                            <div>
                              <div className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider px-2 py-1">
                                Validated
                              </div>
                              {revealedValidated.map((vi, ri) => {
                                const f = scenario.validatedFields[vi];
                                return (
                                  <DataRow
                                    key={`v-${vi}`}
                                    field={f.field}
                                    value={f.value}
                                    status={f.status}
                                    original={f.original}
                                    index={ri}
                                  />
                                );
                              })}
                            </div>
                          )}

                          {/* Extracted data section */}
                          {revealedExtracted.length > 0 && (
                            <div className="mt-2">
                              <div className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider px-2 py-1">
                                Extracted
                              </div>
                              {revealedExtracted.map((ei, ri) => {
                                const f = scenario.extractedData[ei];
                                return (
                                  <DataRow
                                    key={`e-${ei}`}
                                    field={f.field}
                                    value={f.value}
                                    status="new"
                                    index={ri}
                                  />
                                );
                              })}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* ── Post-call analysis (expandable) ── */}
                <AnimatePresence>
                  {showAnalysis && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="border-t border-slate-200 overflow-hidden"
                    >
                      <div className="p-4 gradient-bg-subtle">
                        {/* Summary bar */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <QualityRing score={scenario.callQuality} />
                            <div>
                              <div className="text-xs font-semibold text-slate-800">
                                Call Complete
                              </div>
                              <div className="text-[11px] text-slate-500 max-w-[220px] truncate">
                                {scenario.callOutcome}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-slate-500">
                            <Clock className="w-3.5 h-3.5" />
                            {scenario.durationLabel}
                          </div>
                        </div>

                        {/* Expandable sections */}
                        <div className="space-y-1.5">
                          {/* Next Actions */}
                          <button
                            onClick={() =>
                              setExpandedSection(
                                expandedSection === "actions" ? null : "actions",
                              )
                            }
                            className="w-full flex items-center justify-between px-3 py-2 bg-white rounded-lg hover:bg-slate-50 transition-colors text-xs font-medium text-slate-700 cursor-pointer"
                          >
                            <span className="flex items-center gap-2">
                              <ArrowUpRight className="w-3.5 h-3.5 text-primary" />
                              Next Actions ({scenario.nextActions.length})
                            </span>
                            <ChevronDown
                              className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                                expandedSection === "actions" ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {expandedSection === "actions" && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="px-3 pb-2 space-y-1.5">
                                  {scenario.nextActions.map((action, i) => (
                                    <motion.div
                                      key={i}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: i * 0.1 }}
                                      className="flex items-start gap-2 text-xs text-slate-600"
                                    >
                                      <span className="w-5 h-5 rounded-full gradient-bg text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                                        {i + 1}
                                      </span>
                                      {action}
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Full Results */}
                          <button
                            onClick={() =>
                              setExpandedSection(
                                expandedSection === "results" ? null : "results",
                              )
                            }
                            className="w-full flex items-center justify-between px-3 py-2 bg-white rounded-lg hover:bg-slate-50 transition-colors text-xs font-medium text-slate-700 cursor-pointer"
                          >
                            <span className="flex items-center gap-2">
                              <Star className="w-3.5 h-3.5 text-amber-500" />
                              Full Validation Summary
                            </span>
                            <ChevronDown
                              className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                                expandedSection === "results" ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {expandedSection === "results" && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="px-2 pb-2">
                                  {scenario.validatedFields.map((f, i) => (
                                    <DataRow
                                      key={i}
                                      field={f.field}
                                      value={f.value}
                                      status={f.status}
                                      original={f.original}
                                      index={i}
                                    />
                                  ))}
                                  {scenario.extractedData.map((f, i) => (
                                    <DataRow
                                      key={`ext-${i}`}
                                      field={f.field}
                                      value={f.value}
                                      status="new"
                                      index={i + scenario.validatedFields.length}
                                    />
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Decorative glow behind card */}
            <div className="absolute -inset-4 gradient-bg opacity-[0.07] blur-3xl rounded-3xl -z-10" />
          </motion.div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-slate-500 mb-6">
            Trusted by innovative companies
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50">
            {["TechCorp", "Acme Inc", "StartupXYZ", "Enterprise Co", "InnovateLabs"].map(
              (company) => (
                <span key={company} className="text-slate-400 font-semibold text-lg">
                  {company}
                </span>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
