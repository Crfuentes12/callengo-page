"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Upload,
  Bot,
  Settings2,
  Rocket,
  BarChart3,
  ChevronRight,
  CheckCircle2,
  FileSpreadsheet,
  Check,
  Phone,
  Download,
  Globe,
  ShieldCheck,
  RotateCcw,
  Clock,
  Play,
  Users,
  TrendingUp,
  Mic,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Shared helpers                                                     */
/* ------------------------------------------------------------------ */

const uiFont: React.CSSProperties = { fontFamily: "var(--font-body)" };

/* ------------------------------------------------------------------ */
/*  Step 1 – Import Contacts                                           */
/* ------------------------------------------------------------------ */

function MockupImportContacts({ active }: { active: boolean }) {
  const [phase, setPhase] = useState<"idle" | "dropping" | "progress" | "table">("idle");
  const [progressVal, setProgressVal] = useState(0);
  const [visibleRows, setVisibleRows] = useState(0);

  useEffect(() => {
    if (!active) {
      setPhase("idle");
      setProgressVal(0);
      setVisibleRows(0);
      return;
    }

    setPhase("dropping");
    const t1 = setTimeout(() => setPhase("progress"), 700);
    const t2 = setTimeout(() => setPhase("table"), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [active]);

  useEffect(() => {
    if (phase !== "progress") return;
    setProgressVal(0);
    const iv = setInterval(() => setProgressVal((p) => Math.min(p + 4, 100)), 50);
    return () => clearInterval(iv);
  }, [phase]);

  useEffect(() => {
    if (phase !== "table") return;
    setVisibleRows(0);
    let row = 0;
    const iv = setInterval(() => {
      row++;
      setVisibleRows(row);
      if (row >= 4) clearInterval(iv);
    }, 300);
    return () => clearInterval(iv);
  }, [phase]);

  const rows = [
    { name: "Sarah Chen", email: "sarah@acme.co", phone: "+1 415-555-0142", status: "Mapped" },
    { name: "James Wilson", email: "jwilson@corp.io", phone: "+1 212-555-0198", status: "Mapped" },
    { name: "Maria Lopez", email: "maria@startup.dev", phone: "+44 20-7946-0958", status: "Mapped" },
    { name: "Alex Petrov", email: "alex@global.com", phone: "+49 30-1234-5678", status: "Review" },
  ];

  return (
    <div className="p-5 h-full flex flex-col" style={uiFont}>
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Upload className="w-4 h-4 text-electric" />
        <span className="text-white text-sm font-semibold">Import Contacts</span>
      </div>

      {/* Drop zone */}
      <AnimatePresence mode="wait">
        {(phase === "idle" || phase === "dropping") && (
          <motion.div
            key="dropzone"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1 flex items-center justify-center"
          >
            <motion.div
              className="border-2 border-dashed border-white/15 rounded-xl w-full py-10 flex flex-col items-center gap-3"
              animate={phase === "dropping" ? { borderColor: "rgba(79,95,232,0.6)", scale: 1.02 } : {}}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={phase === "dropping" ? { y: [-40, 0], opacity: [0, 1] } : { y: 0, opacity: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <FileSpreadsheet className="w-10 h-10 text-electric" />
              </motion.div>
              <p className="text-white/40 text-xs">
                {phase === "dropping" ? "contacts_list.csv" : "Drop CSV or Excel file here"}
              </p>
            </motion.div>
          </motion.div>
        )}

        {phase === "progress" && (
          <motion.div
            key="progress"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col items-center justify-center gap-3"
          >
            <FileSpreadsheet className="w-8 h-8 text-electric" />
            <p className="text-white/60 text-xs font-medium">Processing contacts_list.csv</p>
            <div className="w-48 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-electric rounded-full"
                style={{ width: `${progressVal}%` }}
              />
            </div>
            <p className="text-white/30 text-[10px]">{Math.round(progressVal)}% — Validating fields</p>
          </motion.div>
        )}

        {phase === "table" && (
          <motion.div
            key="table"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 flex flex-col"
          >
            {/* field mapping */}
            <div className="flex gap-2 mb-3">
              {["Name → Full Name", "Email → Email", "Phone → Mobile"].map((m, i) => (
                <motion.span
                  key={m}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.15 }}
                  className="text-[9px] bg-electric/15 text-electric px-2 py-0.5 rounded-full flex items-center gap-1"
                >
                  <Check className="w-2.5 h-2.5" /> {m}
                </motion.span>
              ))}
            </div>

            {/* table header */}
            <div className="grid grid-cols-4 text-[9px] text-white/30 uppercase tracking-wider px-2 pb-1.5 border-b border-white/8">
              <span>Name</span><span>Email</span><span>Phone</span><span>Status</span>
            </div>

            {/* rows */}
            <div className="flex-1 overflow-hidden">
              {rows.map((r, i) => (
                <motion.div
                  key={r.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={i < visibleRows ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-4 text-[10px] text-white/60 px-2 py-2 border-b border-white/5"
                >
                  <span className="text-white/80 font-medium">{r.name}</span>
                  <span className="truncate">{r.email}</span>
                  <span>{r.phone}</span>
                  <span>
                    <span className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[8px] font-semibold ${
                      r.status === "Mapped" ? "bg-accent/15 text-accent" : "bg-yellow-500/15 text-yellow-400"
                    }`}>
                      {r.status === "Mapped" && <Check className="w-2 h-2" />}
                      {r.status}
                    </span>
                  </span>
                </motion.div>
              ))}
            </div>

            {/* summary */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-auto pt-2 flex items-center justify-between text-[10px]"
            >
              <span className="text-white/30">4 contacts imported</span>
              <span className="text-accent flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Ready</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step 2 – Configure AI Agent                                        */
/* ------------------------------------------------------------------ */

function MockupAgentConfig({ active }: { active: boolean }) {
  const [showVoice, setShowVoice] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState<string | null>(null);
  const [scriptLines, setScriptLines] = useState(0);
  const [toggles, setToggles] = useState([false, false, false]);

  useEffect(() => {
    if (!active) {
      setShowVoice(false);
      setSelectedVoice(null);
      setScriptLines(0);
      setToggles([false, false, false]);
      return;
    }

    const t1 = setTimeout(() => setShowVoice(true), 400);
    const t2 = setTimeout(() => { setSelectedVoice("Elena – Professional"); setShowVoice(false); }, 1400);
    const t3 = setTimeout(() => setScriptLines(1), 1800);
    const t4 = setTimeout(() => setScriptLines(2), 2200);
    const t5 = setTimeout(() => setScriptLines(3), 2600);
    const t6 = setTimeout(() => setToggles([true, false, false]), 3000);
    const t7 = setTimeout(() => setToggles([true, true, false]), 3400);
    const t8 = setTimeout(() => setToggles([true, true, true]), 3800);
    return () => { [t1,t2,t3,t4,t5,t6,t7,t8].forEach(clearTimeout); };
  }, [active]);

  const voices = ["Elena – Professional", "Marcus – Friendly", "Aiko – Multilingual"];
  const script = [
    "Hello {{name}}, this is calling from Callengo.",
    "I'd like to discuss how we can help with {{topic}}.",
    "Would you have a few minutes to chat?",
  ];
  const toggleLabels = ["Multi-language (EN/ES/FR)", "Voicemail detection", "Fallback to human agent"];

  return (
    <div className="p-5 h-full flex flex-col gap-4" style={uiFont}>
      <div className="flex items-center gap-2">
        <Bot className="w-4 h-4 text-electric" />
        <span className="text-white text-sm font-semibold">Agent Configuration</span>
      </div>

      {/* Voice selector */}
      <div>
        <label className="text-[10px] text-white/40 uppercase tracking-wider mb-1 block">Voice</label>
        <div className="relative">
          <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white/70 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Mic className="w-3.5 h-3.5 text-electric" />
              {selectedVoice || "Select a voice..."}
            </div>
            <ChevronRight className={`w-3 h-3 text-white/30 transition-transform ${showVoice ? "rotate-90" : ""}`} />
          </div>
          <AnimatePresence>
            {showVoice && (
              <motion.div
                initial={{ opacity: 0, y: -4, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -4, height: 0 }}
                className="absolute z-10 top-full mt-1 w-full bg-void border border-white/10 rounded-lg overflow-hidden"
              >
                {voices.map((v, i) => (
                  <motion.div
                    key={v}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`px-3 py-2 text-[11px] text-white/60 hover:bg-white/5 cursor-pointer flex items-center gap-2 ${
                      v === "Elena – Professional" ? "bg-electric/10 text-electric" : ""
                    }`}
                  >
                    <Mic className="w-3 h-3" />
                    {v}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Script editor */}
      <div className="flex-1">
        <label className="text-[10px] text-white/40 uppercase tracking-wider mb-1 block">Script</label>
        <div className="bg-white/5 border border-white/10 rounded-lg p-3 min-h-[80px]">
          {script.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0 }}
              animate={i < scriptLines ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[11px] text-white/60 mb-1 leading-relaxed"
            >
              {line.split(/(\{\{.*?\}\})/).map((part, j) =>
                part.startsWith("{{") ? (
                  <span key={j} className="text-electric bg-electric/10 px-1 rounded">{part}</span>
                ) : (
                  <span key={j}>{part}</span>
                )
              )}
            </motion.p>
          ))}
        </div>
      </div>

      {/* Toggles */}
      <div className="space-y-2">
        {toggleLabels.map((label, i) => (
          <div key={label} className="flex items-center justify-between">
            <span className="text-[10px] text-white/50">{label}</span>
            <motion.div
              animate={{
                backgroundColor: toggles[i] ? "rgba(79,95,232,1)" : "rgba(255,255,255,0.1)",
              }}
              className="w-7 h-4 rounded-full p-0.5 cursor-pointer"
            >
              <motion.div
                animate={{ x: toggles[i] ? 12 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-3 h-3 rounded-full bg-white"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step 3 – Campaign Setup                                            */
/* ------------------------------------------------------------------ */

function MockupCampaignSetup({ active }: { active: boolean }) {
  const [selectedSlots, setSelectedSlots] = useState<number[]>([]);
  const [retryCount, setRetryCount] = useState(0);
  const [complianceToggles, setComplianceToggles] = useState([false, false]);
  const [tzOpen, setTzOpen] = useState(false);

  useEffect(() => {
    if (!active) {
      setSelectedSlots([]);
      setRetryCount(0);
      setComplianceToggles([false, false]);
      setTzOpen(false);
      return;
    }

    const slots = [2, 3, 4, 7, 8, 9, 12, 13, 14];
    const timers: ReturnType<typeof setTimeout>[] = [];
    slots.forEach((s, i) => {
      timers.push(setTimeout(() => setSelectedSlots((prev) => [...prev, s]), 300 + i * 120));
    });
    timers.push(setTimeout(() => setTzOpen(true), 1600));
    timers.push(setTimeout(() => setTzOpen(false), 2400));
    timers.push(setTimeout(() => setRetryCount(1), 2600));
    timers.push(setTimeout(() => setRetryCount(2), 2900));
    timers.push(setTimeout(() => setRetryCount(3), 3200));
    timers.push(setTimeout(() => setComplianceToggles([true, false]), 3500));
    timers.push(setTimeout(() => setComplianceToggles([true, true]), 3800));
    return () => timers.forEach(clearTimeout);
  }, [active]);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const hours = ["9am", "12pm", "3pm"];

  return (
    <div className="p-5 h-full flex flex-col gap-4" style={uiFont}>
      <div className="flex items-center gap-2">
        <Settings2 className="w-4 h-4 text-electric" />
        <span className="text-white text-sm font-semibold">Campaign Settings</span>
      </div>

      {/* Schedule grid */}
      <div>
        <label className="text-[10px] text-white/40 uppercase tracking-wider mb-2 block">Calling Schedule</label>
        <div className="grid grid-cols-6 gap-1 text-[9px]">
          <div />
          {days.map((d) => (
            <div key={d} className="text-center text-white/30 py-1">{d}</div>
          ))}
          {hours.map((h, hi) => (
            <>
              <div key={h} className="text-white/30 py-1.5 text-right pr-1">{h}</div>
              {days.map((_, di) => {
                const idx = hi * 5 + di;
                const isSelected = selectedSlots.includes(idx);
                return (
                  <motion.div
                    key={idx}
                    animate={{
                      backgroundColor: isSelected ? "rgba(79,95,232,0.4)" : "rgba(255,255,255,0.04)",
                      borderColor: isSelected ? "rgba(79,95,232,0.6)" : "rgba(255,255,255,0.08)",
                    }}
                    transition={{ duration: 0.2 }}
                    className="h-7 rounded border flex items-center justify-center"
                  >
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-1.5 h-1.5 rounded-full bg-electric"
                      />
                    )}
                  </motion.div>
                );
              })}
            </>
          ))}
        </div>
      </div>

      {/* Timezone */}
      <div className="relative">
        <label className="text-[10px] text-white/40 uppercase tracking-wider mb-1 block">Timezone</label>
        <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-[11px] text-white/60 flex items-center gap-2">
          <Globe className="w-3 h-3 text-electric" />
          <span>America/New_York (EST)</span>
        </div>
        <AnimatePresence>
          {tzOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute z-10 top-full mt-1 w-full bg-void border border-white/10 rounded-lg overflow-hidden"
            >
              {["America/New_York (EST)", "Europe/London (GMT)", "Asia/Tokyo (JST)"].map((tz) => (
                <div key={tz} className="px-3 py-1.5 text-[10px] text-white/50 hover:bg-white/5">{tz}</div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Retry count */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <RotateCcw className="w-3 h-3 text-white/30" />
          <span className="text-[10px] text-white/50">Max retries</span>
        </div>
        <motion.span
          key={retryCount}
          initial={{ scale: 1.3, color: "#4F5FE8" }}
          animate={{ scale: 1, color: "rgba(255,255,255,0.8)" }}
          className="text-sm font-bold"
        >
          {retryCount}
        </motion.span>
      </div>

      {/* Compliance */}
      <div className="space-y-2">
        {["DNC list check", "TCPA compliance"].map((label, i) => (
          <div key={label} className="flex items-center justify-between">
            <span className="text-[10px] text-white/50 flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-white/30" />
              {label}
            </span>
            <motion.div
              animate={{ backgroundColor: complianceToggles[i] ? "rgba(29,184,122,1)" : "rgba(255,255,255,0.1)" }}
              className="w-7 h-4 rounded-full p-0.5"
            >
              <motion.div
                animate={{ x: complianceToggles[i] ? 12 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-3 h-3 rounded-full bg-white"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step 4 – Launch & Scale                                            */
/* ------------------------------------------------------------------ */

function MockupLaunch({ active }: { active: boolean }) {
  const [launched, setLaunched] = useState(false);
  const [callCount, setCallCount] = useState(0);
  const [activeCalls, setActiveCalls] = useState<number[]>([]);

  useEffect(() => {
    if (!active) {
      setLaunched(false);
      setCallCount(0);
      setActiveCalls([]);
      return;
    }

    const t1 = setTimeout(() => setLaunched(true), 800);
    return () => clearTimeout(t1);
  }, [active]);

  useEffect(() => {
    if (!launched) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 0; i < 6; i++) {
      timers.push(setTimeout(() => setActiveCalls((p) => [...p, i]), 400 + i * 250));
    }
    return () => timers.forEach(clearTimeout);
  }, [launched]);

  useEffect(() => {
    if (!launched) return;
    const iv = setInterval(() => {
      setCallCount((p) => {
        if (p >= 247) { clearInterval(iv); return 247; }
        return p + Math.floor(Math.random() * 5) + 1;
      });
    }, 100);
    return () => clearInterval(iv);
  }, [launched]);

  const contacts = [
    { name: "S. Chen", status: "Connected" },
    { name: "J. Wilson", status: "Ringing" },
    { name: "M. Lopez", status: "Connected" },
    { name: "A. Petrov", status: "Ringing" },
    { name: "L. Kim", status: "Connected" },
    { name: "R. Davis", status: "Queued" },
  ];

  return (
    <div className="p-5 h-full flex flex-col items-center justify-center gap-5" style={uiFont}>
      {!launched ? (
        <motion.div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 mb-2">
            <Rocket className="w-4 h-4 text-electric" />
            <span className="text-white text-sm font-semibold">Ready to Launch</span>
          </div>
          <div className="text-center text-white/40 text-[11px] mb-2">
            247 contacts · 3 retries · EST schedule
          </div>
          <motion.button
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="bg-electric text-white font-semibold text-sm px-8 py-3 rounded-xl flex items-center gap-2 shadow-lg"
            style={{ boxShadow: "0 0 30px rgba(79,95,232,0.4)" }}
          >
            <Play className="w-4 h-4" /> Launch Campaign
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full flex flex-col gap-4"
        >
          {/* Live counter */}
          <div className="text-center">
            <div className="text-[10px] text-white/30 uppercase tracking-wider mb-1">Calls in progress</div>
            <motion.div
              key={callCount}
              className="text-3xl font-bold text-electric tabular-nums"
            >
              {Math.min(callCount, 247)}
            </motion.div>
            <div className="text-[10px] text-white/40 mt-1">of 247 contacts</div>
          </div>

          {/* Active call indicators */}
          <div className="grid grid-cols-3 gap-2">
            {contacts.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={activeCalls.includes(i) ? { opacity: 1, scale: 1 } : {}}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/5 border border-white/8 rounded-lg p-2 text-center"
              >
                <motion.div
                  animate={c.status === "Connected" ? { scale: [1, 1.15, 1] } : {}}
                  transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
                  className="mx-auto mb-1"
                >
                  <Phone className={`w-3.5 h-3.5 mx-auto ${
                    c.status === "Connected" ? "text-accent" : c.status === "Ringing" ? "text-electric" : "text-white/20"
                  }`} />
                </motion.div>
                <div className="text-[9px] text-white/60 font-medium">{c.name}</div>
                <div className={`text-[8px] mt-0.5 ${
                  c.status === "Connected" ? "text-accent" : c.status === "Ringing" ? "text-electric" : "text-white/30"
                }`}>
                  {c.status}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <div>
            <div className="flex justify-between text-[9px] text-white/30 mb-1">
              <span>Progress</span>
              <span>{Math.round(Math.min(callCount, 247) / 247 * 100)}%</span>
            </div>
            <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-electric rounded-full"
                animate={{ width: `${Math.min(callCount, 247) / 247 * 100}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step 5 – Analyze & Export                                          */
/* ------------------------------------------------------------------ */

function MockupAnalytics({ active }: { active: boolean }) {
  const [barHeights, setBarHeights] = useState([0, 0, 0, 0, 0]);
  const [showTranscript, setShowTranscript] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    if (!active) {
      setBarHeights([0, 0, 0, 0, 0]);
      setShowTranscript(false);
      setShowExport(false);
      setDownloading(false);
      return;
    }

    const targets = [72, 85, 64, 91, 78];
    const t1 = setTimeout(() => setBarHeights(targets), 300);
    const t2 = setTimeout(() => setShowTranscript(true), 1200);
    const t3 = setTimeout(() => setShowExport(true), 2500);
    const t4 = setTimeout(() => setDownloading(true), 3200);
    const t5 = setTimeout(() => setDownloading(false), 4000);
    return () => { [t1,t2,t3,t4,t5].forEach(clearTimeout); };
  }, [active]);

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  const transcriptLines = [
    { speaker: "Agent", text: "Hi Sarah, this is Elena from Callengo." },
    { speaker: "Sarah", text: "Oh hi, yes I was expecting your call." },
    { speaker: "Agent", text: "Great! I'd love to walk you through our solution." },
  ];

  return (
    <div className="p-5 h-full flex flex-col gap-4" style={uiFont}>
      <div className="flex items-center gap-2">
        <BarChart3 className="w-4 h-4 text-electric" />
        <span className="text-white text-sm font-semibold">Analytics</span>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Connected", value: "82%", color: "text-accent" },
          { label: "Avg Duration", value: "3:24", color: "text-electric" },
          { label: "Positive", value: "64%", color: "text-accent" },
        ].map((s) => (
          <div key={s.label} className="bg-white/5 rounded-lg p-2 text-center">
            <div className={`text-base font-bold ${s.color}`}>{s.value}</div>
            <div className="text-[8px] text-white/30 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div>
        <div className="text-[9px] text-white/30 mb-2">Calls per day</div>
        <div className="flex items-end gap-2 h-20">
          {barHeights.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <motion.div
                className="w-full bg-electric/60 rounded-t"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              />
              <span className="text-[8px] text-white/30">{labels[i]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Transcript snippet */}
      <AnimatePresence>
        {showTranscript && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/8 rounded-lg p-2.5"
          >
            <div className="text-[9px] text-white/30 mb-1.5">Transcript Preview</div>
            {transcriptLines.map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.3 }}
                className="mb-1 last:mb-0"
              >
                <span className={`text-[9px] font-semibold ${l.speaker === "Agent" ? "text-electric" : "text-white/50"}`}>
                  {l.speaker}:
                </span>
                <span className="text-[9px] text-white/40 ml-1">{l.text}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Export */}
      <AnimatePresence>
        {showExport && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-auto"
          >
            <motion.div
              animate={downloading ? { scale: [1, 0.96, 1] } : {}}
              className={`flex items-center justify-center gap-2 py-2 rounded-lg text-[11px] font-medium ${
                downloading ? "bg-accent/20 text-accent" : "bg-electric/15 text-electric"
              }`}
            >
              <Download className="w-3.5 h-3.5" />
              {downloading ? "Downloading report..." : "Export Results"}
              {downloading && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="w-3 h-3 border border-accent border-t-transparent rounded-full"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step 6 – Unified Dashboard                                         */
/* ------------------------------------------------------------------ */

function MockupDashboard({ active }: { active: boolean }) {
  const [counters, setCounters] = useState({ calls: 0, connected: 0, conversion: 0, campaigns: 0 });
  const [showCards, setShowCards] = useState(false);
  const [showBadges, setShowBadges] = useState(false);

  useEffect(() => {
    if (!active) {
      setCounters({ calls: 0, connected: 0, conversion: 0, campaigns: 0 });
      setShowCards(false);
      setShowBadges(false);
      return;
    }

    setShowCards(true);
    const t1 = setTimeout(() => setShowBadges(true), 2000);

    const targets = { calls: 12847, connected: 8934, conversion: 68, campaigns: 12 };
    const duration = 1500;
    const steps = 30;
    let step = 0;
    const iv = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounters({
        calls: Math.round(targets.calls * eased),
        connected: Math.round(targets.connected * eased),
        conversion: Math.round(targets.conversion * eased),
        campaigns: Math.round(targets.campaigns * eased),
      });
      if (step >= steps) clearInterval(iv);
    }, duration / steps);

    return () => { clearInterval(iv); clearTimeout(t1); };
  }, [active]);

  const cards = [
    { label: "Total Calls", value: counters.calls.toLocaleString(), icon: Phone, color: "text-electric" },
    { label: "Connected", value: counters.connected.toLocaleString(), icon: Users, color: "text-accent" },
    { label: "Conversion", value: `${counters.conversion}%`, icon: TrendingUp, color: "text-electric" },
    { label: "Campaigns", value: counters.campaigns.toString(), icon: Rocket, color: "text-white/70" },
  ];

  const campaigns = [
    { name: "Q1 Outreach", status: "Active", progress: 78, color: "bg-accent" },
    { name: "Product Launch", status: "Active", progress: 45, color: "bg-electric" },
    { name: "Re-engagement", status: "Scheduled", progress: 0, color: "bg-white/20" },
  ];

  // Mini sparkline data
  const sparklines = [
    [30, 45, 38, 52, 48, 65, 72],
    [20, 35, 42, 38, 55, 60, 58],
  ];

  return (
    <div className="p-5 h-full flex flex-col gap-3" style={uiFont}>
      <div className="flex items-center gap-2">
        <LayoutDashboard className="w-4 h-4 text-electric" />
        <span className="text-white text-sm font-semibold">Dashboard</span>
        <span className="text-[9px] text-white/20 ml-auto">Last 30 days</span>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-2 gap-2">
        {cards.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 10 }}
              animate={showCards ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12 }}
              className="bg-white/5 border border-white/8 rounded-lg p-3"
            >
              <div className="flex items-center justify-between mb-1">
                <Icon className={`w-3.5 h-3.5 ${c.color}`} />
                {i < 2 && (
                  <svg width="40" height="16" className="opacity-40">
                    <polyline
                      fill="none"
                      stroke={i === 0 ? "#4F5FE8" : "#1DB87A"}
                      strokeWidth="1.5"
                      points={sparklines[i]
                        .map((v, j) => `${(j / 6) * 40},${16 - (v / 80) * 16}`)
                        .join(" ")}
                    />
                  </svg>
                )}
              </div>
              <div className="text-base font-bold text-white tabular-nums">{c.value}</div>
              <div className="text-[8px] text-white/30">{c.label}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Campaign list */}
      <div>
        <div className="text-[9px] text-white/30 uppercase tracking-wider mb-2">Active Campaigns</div>
        {campaigns.map((camp, i) => (
          <motion.div
            key={camp.name}
            initial={{ opacity: 0, x: -8 }}
            animate={showCards ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 + i * 0.15 }}
            className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0"
          >
            <div className="flex-1 min-w-0">
              <div className="text-[10px] text-white/70 font-medium">{camp.name}</div>
              <div className="h-1 bg-white/8 rounded-full mt-1 overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${camp.color}`}
                  initial={{ width: 0 }}
                  animate={showCards ? { width: `${camp.progress}%` } : {}}
                  transition={{ delay: 1 + i * 0.2, duration: 0.8 }}
                />
              </div>
            </div>
            <AnimatePresence>
              {showBadges && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`text-[8px] px-1.5 py-0.5 rounded-full font-medium ${
                    camp.status === "Active"
                      ? "bg-accent/15 text-accent"
                      : "bg-white/8 text-white/40"
                  }`}
                >
                  {camp.status}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Steps data                                                         */
/* ------------------------------------------------------------------ */

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Import your contacts",
    description:
      "Upload via CSV or Excel, or connect your CRM directly. Field mapping, deduplication and validation happen automatically.",
    highlights: ["CSV & Excel upload", "CRM integration", "Auto deduplication", "Smart field mapping"],
    Mockup: MockupImportContacts,
  },
  {
    number: "02",
    icon: Bot,
    title: "Configure your AI agent",
    description:
      "Choose a voice, define objectives and write the script using our guided editor. Set fallback behaviors and language preferences without any code.",
    highlights: ["Natural voice selection", "Script editor", "Conditional logic", "Multi-language support"],
    Mockup: MockupAgentConfig,
  },
  {
    number: "03",
    icon: Settings2,
    title: "Set up your campaign",
    description:
      "Define calling windows, time zones, retry rules and compliance controls. Every detail is configurable per campaign.",
    highlights: ["Calling schedules", "Timezone handling", "Retry logic", "Compliance controls"],
    Mockup: MockupCampaignSetup,
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch and scale instantly",
    description:
      "Start calling hundreds of contacts simultaneously. Monitor live progress, pause or adjust in real-time from your dashboard.",
    highlights: ["Parallel dialing", "Live monitoring", "Instant pause/resume", "Real-time transcripts"],
    Mockup: MockupLaunch,
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Analyze results and export",
    description:
      "Review full transcripts, extracted data points and call outcomes. Push results to your CRM automatically or export detailed reports.",
    highlights: ["Full transcripts", "Data extraction", "CRM auto-sync", "Custom reports"],
    Mockup: MockupAnalytics,
  },
  {
    number: "06",
    icon: LayoutDashboard,
    title: "Everything in one dashboard",
    description:
      "Get a bird's-eye view of all your campaigns, agents and performance metrics in one place. Your team stays aligned, always.",
    highlights: ["Unified dashboard", "Team collaboration", "Performance metrics", "Multi-campaign view"],
    Mockup: MockupDashboard,
  },
];

const STEP_DURATION = 5000;

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

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
  const ActiveMockup = step.Mockup;

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

            {/* LEFT — Interactive mockup viewer */}
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

                {/* Mockup area */}
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
                      <ActiveMockup active={true} />
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
