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
    const t1 = setTimeout(() => setPhase("progress"), 1400);
    const t2 = setTimeout(() => setPhase("table"), 4200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [active]);

  useEffect(() => {
    if (phase !== "progress") return;
    setProgressVal(0);
    const iv = setInterval(() => setProgressVal((p) => Math.min(p + 2, 100)), 50);
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
    }, 600);
    return () => clearInterval(iv);
  }, [phase]);

  const rows = [
    { name: "Sarah Chen", email: "sarah@acme.co", phone: "+1 415-555-0142", status: "Mapped" },
    { name: "James Wilson", email: "jwilson@corp.io", phone: "+1 212-555-0198", status: "Mapped" },
    { name: "Maria Lopez", email: "maria@startup.dev", phone: "+44 20-7946-0958", status: "Mapped" },
    { name: "Alex Petrov", email: "alex@global.com", phone: "+49 30-1234-5678", status: "Review" },
  ];

  return (
    <div className="p-6 md:p-8 h-full flex flex-col" style={uiFont}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <Upload className="w-5 h-5 text-electric" />
        <span className="text-foreground text-base font-semibold">Import Contacts</span>
      </div>
      <p className="text-foreground-tertiary text-xs mb-5">Upload a CSV or Excel file with your contact list</p>

      {/* Drop zone */}
      <AnimatePresence mode="wait">
        {(phase === "idle" || phase === "dropping") && (
          <motion.div
            key="dropzone"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex items-center justify-center"
          >
            <motion.div
              className="border-2 border-dashed border-gray-200 rounded-xl w-full py-14 flex flex-col items-center gap-4"
              animate={phase === "dropping" ? { borderColor: "rgba(79,95,232,0.6)", scale: 1.02 } : {}}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                animate={phase === "dropping" ? { y: [-50, 0], opacity: [0, 1] } : { y: 0, opacity: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <FileSpreadsheet className="w-12 h-12 text-electric" />
              </motion.div>
              <p className="text-foreground-secondary text-sm font-medium">
                {phase === "dropping" ? "contacts_list.csv" : "Drop CSV or Excel file here"}
              </p>
              {phase === "dropping" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-electric text-xs"
                >
                  File detected — processing...
                </motion.p>
              )}
            </motion.div>
          </motion.div>
        )}

        {phase === "progress" && (
          <motion.div
            key="progress"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col items-center justify-center gap-4"
          >
            <FileSpreadsheet className="w-10 h-10 text-electric" />
            <p className="text-foreground-secondary text-sm font-medium">Processing contacts_list.csv</p>
            <div className="w-64 h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-electric rounded-full"
                style={{ width: `${progressVal}%` }}
              />
            </div>
            <p className="text-foreground-tertiary text-xs">{Math.round(progressVal)}% — Validating fields and mapping columns</p>
          </motion.div>
        )}

        {phase === "table" && (
          <motion.div
            key="table"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col"
          >
            {/* field mapping */}
            <p className="text-foreground-tertiary text-[10px] uppercase tracking-wider mb-2">Auto-mapped fields</p>
            <div className="flex gap-2 mb-4 flex-wrap">
              {["Name → Full Name", "Email → Email", "Phone → Mobile"].map((m, i) => (
                <motion.span
                  key={m}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.25, duration: 0.4 }}
                  className="text-[11px] bg-electric/15 text-electric px-3 py-1 rounded-full flex items-center gap-1.5"
                >
                  <Check className="w-3 h-3" /> {m}
                </motion.span>
              ))}
            </div>

            {/* table header */}
            <div className="grid grid-cols-4 text-[11px] text-foreground-tertiary uppercase tracking-wider px-3 pb-2 border-b border-gray-200 bg-gray-50 rounded-t-lg py-2">
              <span>Name</span><span>Email</span><span>Phone</span><span>Status</span>
            </div>

            {/* rows */}
            <div className="flex-1 overflow-hidden">
              {rows.map((r, i) => (
                <motion.div
                  key={r.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={i < visibleRows ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                  transition={{ duration: 0.45 }}
                  className="grid grid-cols-4 text-xs text-foreground-secondary px-3 py-3 border-b border-gray-100"
                >
                  <span className="text-foreground font-medium">{r.name}</span>
                  <span className="truncate">{r.email}</span>
                  <span>{r.phone}</span>
                  <span>
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                      r.status === "Mapped" ? "bg-accent/15 text-accent" : "bg-yellow-500/15 text-yellow-400"
                    }`}>
                      {r.status === "Mapped" && <Check className="w-2.5 h-2.5" />}
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
              transition={{ delay: 2.5, duration: 0.5 }}
              className="mt-auto pt-3 flex items-center justify-between text-xs"
            >
              <span className="text-foreground-tertiary">4 contacts imported successfully</span>
              <span className="text-accent flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Ready to use</span>
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

    const t1 = setTimeout(() => setShowVoice(true), 800);
    const t2 = setTimeout(() => { setSelectedVoice("Elena – Professional"); setShowVoice(false); }, 2800);
    const t3 = setTimeout(() => setScriptLines(1), 3600);
    const t4 = setTimeout(() => setScriptLines(2), 4400);
    const t5 = setTimeout(() => setScriptLines(3), 5200);
    const t6 = setTimeout(() => setToggles([true, false, false]), 6000);
    const t7 = setTimeout(() => setToggles([true, true, false]), 6800);
    const t8 = setTimeout(() => setToggles([true, true, true]), 7600);
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
    <div className="p-6 md:p-8 h-full flex flex-col gap-5" style={uiFont}>
      <div className="flex items-center gap-3">
        <Bot className="w-5 h-5 text-electric" />
        <span className="text-foreground text-base font-semibold">Agent Configuration</span>
      </div>

      {/* Voice selector */}
      <div>
        <label className="text-[11px] text-foreground-tertiary uppercase tracking-wider mb-2 block">Choose a Voice</label>
        <div className="relative">
          <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-foreground-secondary flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Mic className="w-4 h-4 text-electric" />
              {selectedVoice || "Select a voice..."}
            </div>
            <ChevronRight className={`w-4 h-4 text-foreground-tertiary transition-transform duration-300 ${showVoice ? "rotate-90" : ""}`} />
          </div>
          <AnimatePresence>
            {showVoice && (
              <motion.div
                initial={{ opacity: 0, y: -4, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -4, height: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute z-10 top-full mt-1 w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg"
              >
                {voices.map((v, i) => (
                  <motion.div
                    key={v}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.35 }}
                    className={`px-4 py-3 text-sm text-foreground-secondary hover:bg-gray-50 cursor-pointer flex items-center gap-3 ${
                      v === "Elena – Professional" ? "bg-electric/10 text-electric" : ""
                    }`}
                  >
                    <Mic className="w-4 h-4" />
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
        <label className="text-[11px] text-foreground-tertiary uppercase tracking-wider mb-2 block">Call Script</label>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 min-h-[100px]">
          {script.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0 }}
              animate={i < scriptLines ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm text-foreground-secondary mb-2 leading-relaxed"
            >
              {line.split(/(\{\{.*?\}\})/).map((part, j) =>
                part.startsWith("{{") ? (
                  <span key={j} className="text-electric bg-electric/10 px-1.5 rounded font-medium">{part}</span>
                ) : (
                  <span key={j}>{part}</span>
                )
              )}
            </motion.p>
          ))}
          {scriptLines === 0 && (
            <p className="text-foreground-tertiary text-sm italic">Script lines will appear here...</p>
          )}
        </div>
      </div>

      {/* Toggles */}
      <div>
        <label className="text-[11px] text-foreground-tertiary uppercase tracking-wider mb-3 block">Features</label>
        <div className="space-y-3">
          {toggleLabels.map((label, i) => (
            <div key={label} className="flex items-center justify-between">
              <span className="text-xs text-foreground-secondary">{label}</span>
              <motion.div
                animate={{
                  backgroundColor: toggles[i] ? "rgba(79,95,232,1)" : "rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.3 }}
                className="w-9 h-5 rounded-full p-0.5 cursor-pointer"
              >
                <motion.div
                  animate={{ x: toggles[i] ? 16 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="w-4 h-4 rounded-full bg-white"
                />
              </motion.div>
            </div>
          ))}
        </div>
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
      timers.push(setTimeout(() => setSelectedSlots((prev) => [...prev, s]), 600 + i * 250));
    });
    timers.push(setTimeout(() => setTzOpen(true), 3200));
    timers.push(setTimeout(() => setTzOpen(false), 4800));
    timers.push(setTimeout(() => setRetryCount(1), 5200));
    timers.push(setTimeout(() => setRetryCount(2), 5800));
    timers.push(setTimeout(() => setRetryCount(3), 6400));
    timers.push(setTimeout(() => setComplianceToggles([true, false]), 7000));
    timers.push(setTimeout(() => setComplianceToggles([true, true]), 7600));
    return () => timers.forEach(clearTimeout);
  }, [active]);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const hours = ["9am", "12pm", "3pm"];

  return (
    <div className="p-6 md:p-8 h-full flex flex-col gap-5" style={uiFont}>
      <div className="flex items-center gap-3">
        <Settings2 className="w-5 h-5 text-electric" />
        <span className="text-foreground text-base font-semibold">Campaign Settings</span>
      </div>

      {/* Schedule grid */}
      <div>
        <label className="text-[11px] text-foreground-tertiary uppercase tracking-wider mb-3 block">Calling Schedule</label>
        <p className="text-foreground-tertiary text-xs mb-3">Select time slots when calls should be made</p>
        <div className="grid grid-cols-6 gap-1.5 text-xs">
          <div />
          {days.map((d) => (
            <div key={d} className="text-center text-foreground-tertiary py-1 font-medium">{d}</div>
          ))}
          {hours.map((h, hi) => (
            <div key={`row-${hi}`} className="contents">
              <div className="text-foreground-tertiary py-2 text-right pr-2">{h}</div>
              {days.map((_, di) => {
                const idx = hi * 5 + di;
                const isSelected = selectedSlots.includes(idx);
                return (
                  <motion.div
                    key={idx}
                    animate={{
                      backgroundColor: isSelected ? "rgba(79,95,232,0.15)" : "rgba(0,0,0,0.02)",
                      borderColor: isSelected ? "rgba(79,95,232,0.4)" : "rgba(0,0,0,0.08)",
                    }}
                    transition={{ duration: 0.35 }}
                    className="h-9 rounded-lg border flex items-center justify-center"
                  >
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="w-2 h-2 rounded-full bg-electric"
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Timezone */}
      <div className="relative">
        <label className="text-[11px] text-foreground-tertiary uppercase tracking-wider mb-2 block">Timezone</label>
        <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-foreground-secondary flex items-center gap-3">
          <Globe className="w-4 h-4 text-electric" />
          <span>America/New_York (EST)</span>
        </div>
        <AnimatePresence>
          {tzOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute z-10 top-full mt-1 w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg"
            >
              {["America/New_York (EST)", "Europe/London (GMT)", "Asia/Tokyo (JST)"].map((tz) => (
                <div key={tz} className="px-4 py-2.5 text-xs text-foreground-secondary hover:bg-gray-50">{tz}</div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Retry count */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <RotateCcw className="w-4 h-4 text-foreground-tertiary" />
          <span className="text-xs text-foreground-secondary">Max retries per contact</span>
        </div>
        <motion.span
          key={retryCount}
          initial={{ scale: 1.4, color: "#4F5FE8" }}
          animate={{ scale: 1, color: "rgba(0,0,0,0.8)" }}
          transition={{ duration: 0.4 }}
          className="text-lg font-bold"
        >
          {retryCount}
        </motion.span>
      </div>

      {/* Compliance */}
      <div>
        <label className="text-[11px] text-foreground-tertiary uppercase tracking-wider mb-3 block">Compliance</label>
        <div className="space-y-3">
          {["DNC list check", "TCPA compliance"].map((label, i) => (
            <div key={label} className="flex items-center justify-between">
              <span className="text-xs text-foreground-secondary flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-foreground-tertiary" />
                {label}
              </span>
              <motion.div
                animate={{ backgroundColor: complianceToggles[i] ? "rgba(29,184,122,1)" : "rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
                className="w-9 h-5 rounded-full p-0.5"
              >
                <motion.div
                  animate={{ x: complianceToggles[i] ? 16 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="w-4 h-4 rounded-full bg-white"
                />
              </motion.div>
            </div>
          ))}
        </div>
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

    const t1 = setTimeout(() => setLaunched(true), 1600);
    return () => clearTimeout(t1);
  }, [active]);

  useEffect(() => {
    if (!launched) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 0; i < 6; i++) {
      timers.push(setTimeout(() => setActiveCalls((p) => [...p, i]), 800 + i * 500));
    }
    return () => timers.forEach(clearTimeout);
  }, [launched]);

  useEffect(() => {
    if (!launched) return;
    const iv = setInterval(() => {
      setCallCount((p) => {
        if (p >= 247) { clearInterval(iv); return 247; }
        return p + Math.floor(Math.random() * 3) + 1;
      });
    }, 200);
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
    <div className="p-6 md:p-8 h-full flex flex-col items-center justify-center gap-6" style={uiFont}>
      {!launched ? (
        <motion.div className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-3 mb-2">
            <Rocket className="w-5 h-5 text-electric" />
            <span className="text-foreground text-base font-semibold">Ready to Launch</span>
          </div>
          <div className="text-center text-foreground-tertiary text-sm mb-2">
            247 contacts · 3 retries · EST schedule
          </div>
          <p className="text-foreground-tertiary text-xs text-center max-w-xs">
            One click to start calling all contacts simultaneously
          </p>
          <motion.button
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-electric text-white font-semibold text-base px-10 py-4 rounded-xl flex items-center gap-3 shadow-lg"
            style={{ boxShadow: "0 0 30px rgba(79,95,232,0.4)" }}
          >
            <Play className="w-5 h-5" /> Launch Campaign
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col gap-5"
        >
          {/* Live counter */}
          <div className="text-center">
            <div className="text-xs text-foreground-tertiary uppercase tracking-wider mb-2">Calls in progress</div>
            <motion.div
              key={callCount}
              className="text-4xl font-bold text-electric tabular-nums"
            >
              {Math.min(callCount, 247)}
            </motion.div>
            <div className="text-xs text-foreground-tertiary mt-2">of 247 contacts</div>
          </div>

          {/* Active call indicators */}
          <div className="grid grid-cols-3 gap-3">
            {contacts.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={activeCalls.includes(i) ? { opacity: 1, scale: 1 } : {}}
                transition={{ type: "spring", stiffness: 300, duration: 0.5 }}
                className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-center"
              >
                <motion.div
                  animate={c.status === "Connected" ? { scale: [1, 1.15, 1] } : {}}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                  className="mx-auto mb-2"
                >
                  <Phone className={`w-5 h-5 mx-auto ${
                    c.status === "Connected" ? "text-accent" : c.status === "Ringing" ? "text-electric" : "text-gray-300"
                  }`} />
                </motion.div>
                <div className="text-xs text-foreground-secondary font-medium">{c.name}</div>
                <div className={`text-[10px] mt-1 font-medium ${
                  c.status === "Connected" ? "text-accent" : c.status === "Ringing" ? "text-electric" : "text-foreground-tertiary"
                }`}>
                  {c.status}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <div>
            <div className="flex justify-between text-xs text-foreground-tertiary mb-2">
              <span>Campaign progress</span>
              <span>{Math.round(Math.min(callCount, 247) / 247 * 100)}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-electric rounded-full"
                animate={{ width: `${Math.min(callCount, 247) / 247 * 100}%` }}
                transition={{ duration: 0.3 }}
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
    const t1 = setTimeout(() => setBarHeights(targets), 600);
    const t2 = setTimeout(() => setShowTranscript(true), 2400);
    const t3 = setTimeout(() => setShowExport(true), 5000);
    const t4 = setTimeout(() => setDownloading(true), 6400);
    const t5 = setTimeout(() => setDownloading(false), 8000);
    return () => { [t1,t2,t3,t4,t5].forEach(clearTimeout); };
  }, [active]);

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  const transcriptLines = [
    { speaker: "Agent", text: "Hi Sarah, this is Elena from Callengo." },
    { speaker: "Sarah", text: "Oh hi, yes I was expecting your call." },
    { speaker: "Agent", text: "Great! I'd love to walk you through our solution." },
  ];

  return (
    <div className="p-6 md:p-8 h-full flex flex-col gap-5" style={uiFont}>
      <div className="flex items-center gap-3">
        <BarChart3 className="w-5 h-5 text-electric" />
        <span className="text-foreground text-base font-semibold">Analytics</span>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Connected", value: "82%", color: "text-accent" },
          { label: "Avg Duration", value: "3:24", color: "text-electric" },
          { label: "Positive", value: "64%", color: "text-accent" },
        ].map((s) => (
          <div key={s.label} className="bg-gray-50 rounded-xl p-3 text-center border border-gray-200">
            <div className={`text-xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-[10px] text-foreground-tertiary mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div>
        <div className="text-xs text-foreground-tertiary mb-3">Calls per day</div>
        <div className="flex items-end gap-3 h-24">
          {barHeights.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <motion.div
                className="w-full bg-electric/60 rounded-t-md"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 1.2, delay: i * 0.2, ease: "easeOut" }}
              />
              <span className="text-[10px] text-foreground-tertiary">{labels[i]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Transcript snippet */}
      <AnimatePresence>
        {showTranscript && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 border border-gray-200 rounded-xl p-4"
          >
            <div className="text-xs text-foreground-tertiary mb-2">Transcript Preview</div>
            {transcriptLines.map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.5, duration: 0.4 }}
                className="mb-2 last:mb-0"
              >
                <span className={`text-xs font-semibold ${l.speaker === "Agent" ? "text-electric" : "text-foreground-secondary"}`}>
                  {l.speaker}:
                </span>
                <span className="text-xs text-foreground-tertiary ml-2">{l.text}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Export */}
      <AnimatePresence>
        {showExport && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-auto"
          >
            <motion.div
              animate={downloading ? { scale: [1, 0.97, 1] } : {}}
              transition={{ duration: 0.4 }}
              className={`flex items-center justify-center gap-3 py-3 rounded-xl text-sm font-medium ${
                downloading ? "bg-accent/20 text-accent" : "bg-electric/15 text-electric"
              }`}
            >
              <Download className="w-4 h-4" />
              {downloading ? "Downloading report..." : "Export Results"}
              {downloading && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full"
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
    const t1 = setTimeout(() => setShowBadges(true), 3500);

    const targets = { calls: 12847, connected: 8934, conversion: 68, campaigns: 12 };
    const duration = 2500;
    const steps = 40;
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
    { label: "Campaigns", value: counters.campaigns.toString(), icon: Rocket, color: "text-foreground-secondary" },
  ];

  const campaigns = [
    { name: "Q1 Outreach", status: "Active", progress: 78, color: "bg-accent" },
    { name: "Product Launch", status: "Active", progress: 45, color: "bg-electric" },
    { name: "Re-engagement", status: "Scheduled", progress: 0, color: "bg-gray-300" },
  ];

  // Mini sparkline data
  const sparklines = [
    [30, 45, 38, 52, 48, 65, 72],
    [20, 35, 42, 38, 55, 60, 58],
  ];

  return (
    <div className="p-6 md:p-8 h-full flex flex-col gap-4" style={uiFont}>
      <div className="flex items-center gap-3">
        <LayoutDashboard className="w-5 h-5 text-electric" />
        <span className="text-foreground text-base font-semibold">Dashboard</span>
        <span className="text-xs text-foreground-tertiary ml-auto">Last 30 days</span>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-2 gap-3">
        {cards.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 12 }}
              animate={showCards ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.4 }}
              className="bg-gray-50 border border-gray-200 rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className={`w-4 h-4 ${c.color}`} />
                {i < 2 && (
                  <svg width="48" height="20" className="opacity-60">
                    <polyline
                      fill="none"
                      stroke={i === 0 ? "#4F5FE8" : "#1DB87A"}
                      strokeWidth="1.5"
                      points={sparklines[i]
                        .map((v, j) => `${(j / 6) * 48},${20 - (v / 80) * 20}`)
                        .join(" ")}
                    />
                  </svg>
                )}
              </div>
              <div className="text-xl font-bold text-foreground tabular-nums">{c.value}</div>
              <div className="text-[10px] text-foreground-tertiary mt-1">{c.label}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Campaign list */}
      <div>
        <div className="text-xs text-foreground-tertiary uppercase tracking-wider mb-3">Active Campaigns</div>
        {campaigns.map((camp, i) => (
          <motion.div
            key={camp.name}
            initial={{ opacity: 0, x: -12 }}
            animate={showCards ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1 + i * 0.25, duration: 0.4 }}
            className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0"
          >
            <div className="flex-1 min-w-0">
              <div className="text-xs text-foreground font-medium">{camp.name}</div>
              <div className="h-1.5 bg-gray-100 rounded-full mt-2 overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${camp.color}`}
                  initial={{ width: 0 }}
                  animate={showCards ? { width: `${camp.progress}%` } : {}}
                  transition={{ delay: 1.5 + i * 0.3, duration: 1 }}
                />
              </div>
            </div>
            <AnimatePresence>
              {showBadges && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`text-[10px] px-2 py-1 rounded-full font-medium ${
                    camp.status === "Active"
                      ? "bg-accent/10 text-accent"
                      : "bg-gray-100 text-foreground-tertiary"
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

const STEP_DURATION = 10000;

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
    const t = window.setTimeout(resumeTimer, 12000);
    return () => window.clearTimeout(t);
  };

  const step = steps[activeStep];
  const StepIcon = step.icon;
  const ActiveMockup = step.Mockup;

  return (
    <section className="relative overflow-hidden" id="how-it-works">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-bg" />

      <div className="relative z-10 py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section header */}
          <div className="text-center mb-20">
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
                <span className="text-white font-bold">Results in hours.</span>
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Six simple steps, from zero to fully automated calling campaigns.
                No technical expertise required.
              </p>
            </motion.div>
          </div>

          {/* Main interactive area */}
          <div className="grid lg:grid-cols-12 gap-10 xl:gap-14 items-start">

            {/* LEFT — Interactive mockup viewer (larger) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 relative"
            >
              <div className="rounded-2xl bg-white border border-gray-200 shadow-2xl overflow-hidden">
                {/* Window chrome */}
                <div className="flex items-center gap-3 px-5 py-3.5 bg-gray-50 border-b border-gray-200">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-white rounded-md px-3 py-1.5 flex items-center gap-2 border border-gray-200">
                      <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      <span className="text-[11px] text-foreground-tertiary font-mono truncate">
                        app.callengo.com
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mockup area — taller aspect ratio for more space */}
                <div className="relative bg-white overflow-hidden" style={{ aspectRatio: "4 / 3.5" }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <ActiveMockup active={true} />
                    </motion.div>
                  </AnimatePresence>

                  {/* Step label overlay */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                        className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl px-5 py-4 shadow-sm"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center shrink-0">
                            <StepIcon className="w-5 h-5 text-electric" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[11px] text-foreground-tertiary font-semibold uppercase tracking-wider">
                              Step {step.number}
                            </div>
                            <div className="text-foreground font-semibold text-base leading-tight">
                              {step.title}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            {steps.map((_, i) => (
                              <button
                                key={i}
                                onClick={() => handleStepClick(i)}
                                className={`rounded-full transition-all duration-300 cursor-pointer ${
                                  i === activeStep
                                    ? "w-6 h-2 bg-electric"
                                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
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

              <div className="absolute -inset-8 bg-white/10 blur-3xl rounded-3xl -z-10" />
            </motion.div>

            {/* RIGHT — Step list */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-2"
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
                    <div className="px-5 py-4">
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                            isActive
                              ? "bg-secondary shadow-lg"
                              : "bg-white/5 group-hover:bg-white/8"
                          }`}
                        >
                          <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-white/40"}`} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className={`text-[11px] font-bold tabular-nums ${isActive ? "text-secondary-light" : "text-white/20"}`}>
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
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <p className="text-[13px] text-white/45 leading-relaxed mt-2 mb-3" style={{ fontFamily: "var(--font-body)" }}>
                                  {s.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-3">
                                  {s.highlights.map((h) => (
                                    <span key={h} className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-white/6 text-white/50">
                                      <CheckCircle2 className="w-3 h-3 text-white/40" />
                                      {h}
                                    </span>
                                  ))}
                                </div>

                                {!isPaused && (
                                  <div className="h-1 bg-white/8 rounded-full overflow-hidden">
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

              <div className="pt-5 space-y-2">
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
