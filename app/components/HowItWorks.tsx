"use client";

import { useState, useEffect, useCallback } from "react";
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
  Check,
  Phone,
  Download,
  Globe,
  ShieldCheck,
  Clock,
  Play,
  Users,
  TrendingUp,
  Mic,
  Calendar,
  Search,
  Filter,
  MoreHorizontal,
  PhoneCall,
  PhoneOff,
  Voicemail,
  Star,
  MessageSquare,
  ArrowUpRight,
  Video,
  Slack,
  Mail,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Shared helpers                                                     */
/* ------------------------------------------------------------------ */

const uiFont: React.CSSProperties = { fontFamily: "var(--font-body)" };

/* Small reusable toggle */
function Toggle({ on }: { on: boolean }) {
  return (
    <motion.div
      animate={{ backgroundColor: on ? "rgba(79,95,232,1)" : "rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3 }}
      className="w-8 h-[18px] rounded-full p-0.5 shrink-0"
    >
      <motion.div
        animate={{ x: on ? 14 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="w-3.5 h-3.5 rounded-full bg-white"
      />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step 1 – Contacts Manager (matches ContactsManager.tsx)            */
/* ------------------------------------------------------------------ */

function MockupContacts({ active }: { active: boolean }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!active) { setPhase(0); return; }
    const timers = [
      setTimeout(() => setPhase(1), 600),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 3500),
      setTimeout(() => setPhase(4), 5500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [active]);

  const contacts = [
    { name: "Sarah Chen", email: "sarah@acme.co", phone: "+1 415-555-0142", list: "Q1 Leads", status: "verified" },
    { name: "James Wilson", email: "jwilson@corp.io", phone: "+1 212-555-0198", list: "Q1 Leads", status: "verified" },
    { name: "Maria Lopez", email: "maria@startup.dev", phone: "+44 20-7946-0958", list: "EU Prospects", status: "pending" },
    { name: "Alex Petrov", email: "alex@global.com", phone: "+49 30-1234-5678", list: "EU Prospects", status: "outdated" },
    { name: "Lisa Kim", email: "lisa@techco.io", phone: "+1 650-555-0321", list: "Q1 Leads", status: "verified" },
  ];

  const statCards = [
    { label: "Total Contacts", value: "2,847", icon: Users, color: "text-electric", bg: "bg-electric/10" },
    { label: "Verified", value: "1,923", icon: CheckCircle2, color: "text-accent", bg: "bg-accent/10" },
    { label: "Pending", value: "612", icon: Clock, color: "text-yellow-500", bg: "bg-yellow-500/10" },
    { label: "Outdated", value: "312", icon: PhoneOff, color: "text-red-400", bg: "bg-red-400/10" },
  ];

  return (
    <div className="p-4 md:p-5 h-full flex flex-col" style={uiFont}>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Users className="w-4.5 h-4.5 text-electric" />
          <span className="text-foreground text-sm font-semibold">Contacts</span>
          <span className="text-[10px] bg-electric/10 text-electric px-2 py-0.5 rounded-full font-medium">2,847</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-electric/10 flex items-center justify-center">
            <Upload className="w-3.5 h-3.5 text-electric" />
          </div>
          <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center">
            <Filter className="w-3.5 h-3.5 text-foreground-tertiary" />
          </div>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-4 gap-2 mb-3">
        {statCards.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 8 }}
              animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.35 }}
              className="rounded-lg border border-gray-100 p-2 text-center"
            >
              <div className={`w-6 h-6 rounded-md ${s.bg} flex items-center justify-center mx-auto mb-1`}>
                <Icon className={`w-3 h-3 ${s.color}`} />
              </div>
              <div className="text-sm font-bold text-foreground tabular-nums">{s.value}</div>
              <div className="text-[9px] text-foreground-tertiary">{s.label}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Search bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={phase >= 2 ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-2 mb-3"
      >
        <div className="flex-1 flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
          <Search className="w-3.5 h-3.5 text-foreground-tertiary" />
          <span className="text-xs text-foreground-tertiary">Search contacts...</span>
        </div>
        <div className="flex gap-1.5">
          {["Q1 Leads", "EU Prospects"].map((list) => (
            <span key={list} className="text-[10px] px-2 py-1 rounded-full bg-electric/10 text-electric font-medium whitespace-nowrap">
              {list}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Table header */}
      <div className="grid grid-cols-12 text-[10px] text-foreground-tertiary uppercase tracking-wider px-3 pb-2 border-b border-gray-200 bg-gray-50 rounded-t-lg py-1.5 font-medium">
        <span className="col-span-3">Name</span>
        <span className="col-span-3">Email</span>
        <span className="col-span-2">Phone</span>
        <span className="col-span-2">List</span>
        <span className="col-span-2 text-right">Status</span>
      </div>

      {/* Rows */}
      <div className="flex-1 overflow-hidden">
        {contacts.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, x: -12 }}
            animate={phase >= 3 ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.35 }}
            className="grid grid-cols-12 text-[11px] text-foreground-secondary px-3 py-2.5 border-b border-gray-50 items-center hover:bg-gray-50/50"
          >
            <div className="col-span-3 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-electric/10 flex items-center justify-center text-[9px] font-bold text-electric shrink-0">
                {c.name.split(" ").map(n => n[0]).join("")}
              </div>
              <span className="text-foreground font-medium truncate">{c.name}</span>
            </div>
            <span className="col-span-3 truncate">{c.email}</span>
            <span className="col-span-2 text-foreground-tertiary">{c.phone}</span>
            <span className="col-span-2">
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-gray-100 text-foreground-tertiary">{c.list}</span>
            </span>
            <span className="col-span-2 text-right">
              <span className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[9px] font-semibold ${
                c.status === "verified" ? "bg-accent/10 text-accent" :
                c.status === "pending" ? "bg-yellow-500/10 text-yellow-500" :
                "bg-red-400/10 text-red-400"
              }`}>
                {c.status === "verified" && <Check className="w-2.5 h-2.5" />}
                {c.status.charAt(0).toUpperCase() + c.status.slice(1)}
              </span>
            </span>
          </motion.div>
        ))}
      </div>

      {/* CRM integrations row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={phase >= 4 ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
        className="mt-auto pt-2 flex items-center justify-between"
      >
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] text-foreground-tertiary">Connected:</span>
          {["HubSpot", "Salesforce", "Google Sheets"].map((crm) => (
            <span key={crm} className="text-[9px] px-1.5 py-0.5 rounded bg-accent/10 text-accent font-medium flex items-center gap-0.5">
              <Check className="w-2 h-2" />{crm}
            </span>
          ))}
        </div>
        <span className="text-[9px] text-electric font-medium">+ Import CSV</span>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step 2 – Agent Selection & Config (matches AgentConfigModal.tsx)    */
/* ------------------------------------------------------------------ */

function MockupAgentConfig({ active }: { active: boolean }) {
  const [phase, setPhase] = useState(0);
  const [selectedAgent, setSelectedAgent] = useState<number | null>(null);
  const [selectedVoice, setSelectedVoice] = useState<number | null>(null);

  useEffect(() => {
    if (!active) { setPhase(0); setSelectedAgent(null); setSelectedVoice(null); return; }
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setSelectedAgent(0), 1800),
      setTimeout(() => setPhase(2), 2800),
      setTimeout(() => setSelectedVoice(1), 4000),
      setTimeout(() => setPhase(3), 5200),
      setTimeout(() => setPhase(4), 7000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [active]);

  const agents = [
    { name: "Lead Qualification", desc: "BANT framework scoring", icon: Star, gradient: "from-electric to-[#3347D4]" },
    { name: "Data Validation", desc: "Verify contact records", icon: ShieldCheck, gradient: "from-accent to-[#128055]" },
    { name: "Appointment Confirm", desc: "Reduce no-shows", icon: Calendar, gradient: "from-[#F59E0B] to-[#D97706]" },
  ];

  const voices = [
    { name: "Maya", gender: "Female", style: "Professional" },
    { name: "Josh", gender: "Male", style: "Friendly" },
    { name: "Natalie", gender: "Female", style: "Warm" },
  ];

  const settings = [
    { label: "AI Disclosure", on: true },
    { label: "Voicemail Detection", on: phase >= 3 },
    { label: "Smart Follow-ups", on: phase >= 4 },
  ];

  return (
    <div className="p-4 md:p-5 h-full flex flex-col gap-3" style={uiFont}>
      {/* Header - wizard step indicator */}
      <div className="flex items-center gap-2 mb-1">
        <Bot className="w-4.5 h-4.5 text-electric" />
        <span className="text-foreground text-sm font-semibold">Configure Agent</span>
        <div className="ml-auto flex items-center gap-1">
          {["Agent", "Voice", "Settings"].map((s, i) => (
            <div key={s} className="flex items-center gap-1">
              <div className={`w-5 h-5 rounded-full text-[9px] font-bold flex items-center justify-center ${
                phase >= i + 1 ? "bg-electric text-white" : "bg-gray-100 text-foreground-tertiary"
              }`}>{i + 1}</div>
              {i < 2 && <div className={`w-4 h-px ${phase > i + 1 ? "bg-electric" : "bg-gray-200"}`} />}
            </div>
          ))}
        </div>
      </div>

      {/* Agent selection cards */}
      <div>
        <label className="text-[10px] text-foreground-tertiary uppercase tracking-wider mb-2 block">Select Agent Type</label>
        <div className="grid grid-cols-3 gap-2">
          {agents.map((a, i) => {
            const Icon = a.icon;
            const isSelected = selectedAgent === i;
            return (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 8 }}
                animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.35 }}
                className={`rounded-xl p-3 border-2 transition-all cursor-pointer ${
                  isSelected ? "border-electric bg-electric/5 shadow-sm" : "border-gray-100 bg-white hover:border-gray-200"
                }`}
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${a.gradient} flex items-center justify-center mb-2`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div className="text-[11px] font-semibold text-foreground leading-tight">{a.name}</div>
                <div className="text-[9px] text-foreground-tertiary mt-0.5">{a.desc}</div>
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-4 h-4 rounded-full bg-electric flex items-center justify-center mt-1.5"
                  >
                    <Check className="w-2.5 h-2.5 text-white" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Voice selection */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={phase >= 2 ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        <label className="text-[10px] text-foreground-tertiary uppercase tracking-wider mb-2 block">Choose Voice</label>
        <div className="flex gap-2">
          {voices.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, x: -8 }}
              animate={phase >= 2 ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.3 }}
              className={`flex-1 rounded-lg p-2.5 border transition-all cursor-pointer ${
                selectedVoice === i ? "border-electric bg-electric/5" : "border-gray-100"
              }`}
            >
              <div className="flex items-center gap-2">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center ${
                  selectedVoice === i ? "bg-electric" : "bg-gray-100"
                }`}>
                  <Mic className={`w-3 h-3 ${selectedVoice === i ? "text-white" : "text-foreground-tertiary"}`} />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-foreground">{v.name}</div>
                  <div className="text-[9px] text-foreground-tertiary">{v.gender} · {v.style}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call settings */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={phase >= 3 ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        <label className="text-[10px] text-foreground-tertiary uppercase tracking-wider mb-2 block">Call Settings</label>
        <div className="space-y-2 bg-gray-50 rounded-lg p-3 border border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-foreground-secondary">Max call duration</span>
            <span className="text-[11px] font-semibold text-foreground">3 min</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-foreground-secondary">Calls per day</span>
            <span className="text-[11px] font-semibold text-foreground">200</span>
          </div>
          {settings.map((s) => (
            <div key={s.label} className="flex items-center justify-between">
              <span className="text-[11px] text-foreground-secondary">{s.label}</span>
              <Toggle on={s.on} />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Test agent button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={phase >= 4 ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
        className="mt-auto"
      >
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="flex items-center justify-center gap-2 bg-electric text-white text-xs font-semibold py-2.5 rounded-lg"
          style={{ boxShadow: "0 4px 16px rgba(79,95,232,0.3)" }}
        >
          <Phone className="w-3.5 h-3.5" /> Test Agent with Live Call
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step 3 – Calendar & Campaign Setup (matches CalendarConfigStep)    */
/* ------------------------------------------------------------------ */

function MockupCampaignSetup({ active }: { active: boolean }) {
  const [phase, setPhase] = useState(0);
  const [selectedSlots, setSelectedSlots] = useState<number[]>([]);

  useEffect(() => {
    if (!active) { setPhase(0); setSelectedSlots([]); return; }
    const slots = [0, 1, 2, 5, 6, 7, 10, 11, 12, 15, 16];
    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setPhase(1), 500));
    slots.forEach((s, i) => {
      timers.push(setTimeout(() => setSelectedSlots((prev) => [...prev, s]), 800 + i * 200));
    });
    timers.push(setTimeout(() => setPhase(2), 3500));
    timers.push(setTimeout(() => setPhase(3), 5500));
    timers.push(setTimeout(() => setPhase(4), 7000));
    return () => timers.forEach(clearTimeout);
  }, [active]);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const hours = ["9 AM", "11 AM", "2 PM", "4 PM"];

  return (
    <div className="p-4 md:p-5 h-full flex flex-col gap-3" style={uiFont}>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <Calendar className="w-4.5 h-4.5 text-electric" />
          <span className="text-foreground text-sm font-semibold">Campaign Setup</span>
        </div>
        <span className="text-[10px] text-foreground-tertiary bg-gray-100 px-2 py-0.5 rounded">Step 3 of 4</span>
      </div>

      {/* Contact list selection */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={phase >= 1 ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
      >
        <label className="text-[10px] text-foreground-tertiary uppercase tracking-wider mb-2 block">Contact List</label>
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5">
          <Users className="w-3.5 h-3.5 text-electric" />
          <span className="text-xs text-foreground font-medium">Q1 Leads</span>
          <span className="text-[10px] text-foreground-tertiary ml-1">· 247 contacts</span>
          <ChevronRight className="w-3 h-3 text-foreground-tertiary ml-auto" />
        </div>
      </motion.div>

      {/* Schedule grid */}
      <div>
        <label className="text-[10px] text-foreground-tertiary uppercase tracking-wider mb-2 block">Calling Schedule</label>
        <div className="grid grid-cols-6 gap-1 text-[10px]">
          <div />
          {days.map((d) => (
            <div key={d} className="text-center text-foreground-tertiary py-0.5 font-medium">{d}</div>
          ))}
          {hours.map((h, hi) => (
            <div key={`row-${hi}`} className="contents">
              <div className="text-foreground-tertiary py-1.5 text-right pr-1 text-[9px]">{h}</div>
              {days.map((_, di) => {
                const idx = hi * 5 + di;
                const isSelected = selectedSlots.includes(idx);
                return (
                  <motion.div
                    key={idx}
                    animate={{
                      backgroundColor: isSelected ? "rgba(79,95,232,0.12)" : "rgba(0,0,0,0.02)",
                      borderColor: isSelected ? "rgba(79,95,232,0.35)" : "rgba(0,0,0,0.06)",
                    }}
                    transition={{ duration: 0.3 }}
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
            </div>
          ))}
        </div>
      </div>

      {/* Integrations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={phase >= 2 ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        <label className="text-[10px] text-foreground-tertiary uppercase tracking-wider mb-2 block">Connected Integrations</label>
        <div className="grid grid-cols-2 gap-2">
          {[
            { name: "Google Calendar", icon: Calendar, connected: true },
            { name: "Zoom", icon: Video, connected: true },
            { name: "Slack", icon: Slack, connected: phase >= 3 },
            { name: "Outlook", icon: Mail, connected: false },
          ].map((int) => {
            const Icon = int.icon;
            return (
              <div key={int.name} className={`flex items-center gap-2 rounded-lg p-2 border ${
                int.connected ? "border-accent/20 bg-accent/5" : "border-gray-100"
              }`}>
                <Icon className={`w-3.5 h-3.5 ${int.connected ? "text-accent" : "text-foreground-tertiary"}`} />
                <span className="text-[10px] text-foreground-secondary">{int.name}</span>
                {int.connected && <Check className="w-3 h-3 text-accent ml-auto" />}
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Timezone + features */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={phase >= 3 ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
        className="space-y-2 bg-gray-50 rounded-lg p-3 border border-gray-100"
      >
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-foreground-secondary flex items-center gap-1.5">
            <Globe className="w-3 h-3 text-foreground-tertiary" /> Timezone
          </span>
          <span className="text-[11px] font-medium text-foreground">America/New_York</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-foreground-secondary">Max retries</span>
          <span className="text-[11px] font-bold text-electric">3</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-foreground-secondary flex items-center gap-1.5">
            <ShieldCheck className="w-3 h-3 text-foreground-tertiary" /> TCPA Compliance
          </span>
          <Toggle on={phase >= 4} />
        </div>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step 4 – Launch Campaign (matches CampaignDetail.tsx)              */
/* ------------------------------------------------------------------ */

function MockupLaunch({ active }: { active: boolean }) {
  const [phase, setPhase] = useState(0);
  const [callCount, setCallCount] = useState(0);

  useEffect(() => {
    if (!active) { setPhase(0); setCallCount(0); return; }
    const timers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 2200),
    ];
    return () => timers.forEach(clearTimeout);
  }, [active]);

  useEffect(() => {
    if (phase < 2) return;
    const iv = setInterval(() => {
      setCallCount((p) => {
        if (p >= 186) { clearInterval(iv); return 186; }
        return p + Math.floor(Math.random() * 4) + 1;
      });
    }, 150);
    return () => clearInterval(iv);
  }, [phase]);

  const callLogs = [
    { name: "Sarah Chen", duration: "2:34", status: "connected", sentiment: "Positive", score: "Hot" },
    { name: "James Wilson", duration: "0:45", status: "voicemail", sentiment: "-", score: "-" },
    { name: "Maria Lopez", duration: "3:12", status: "connected", sentiment: "Neutral", score: "Warm" },
    { name: "Alex Petrov", duration: "0:08", status: "no-answer", sentiment: "-", score: "-" },
    { name: "Lisa Kim", duration: "1:58", status: "connected", sentiment: "Positive", score: "Hot" },
  ];

  const statusIcon = (s: string) => {
    if (s === "connected") return <PhoneCall className="w-3 h-3 text-accent" />;
    if (s === "voicemail") return <Voicemail className="w-3 h-3 text-yellow-500" />;
    return <PhoneOff className="w-3 h-3 text-red-400" />;
  };

  const progress = Math.min(callCount, 186);
  const pct = Math.round((progress / 247) * 100);

  return (
    <div className="p-4 md:p-5 h-full flex flex-col" style={uiFont}>
      {/* Campaign header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Rocket className="w-4.5 h-4.5 text-electric" />
          <span className="text-foreground text-sm font-semibold">Q1 Lead Qualification</span>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={phase >= 2 ? { opacity: 1 } : {}}
          className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent font-semibold flex items-center gap-1"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> Active
        </motion.span>
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-5 gap-2 mb-3"
      >
        {[
          { label: "Total", value: "247", color: "text-foreground" },
          { label: "Called", value: progress.toString(), color: "text-electric" },
          { label: "Connected", value: Math.round(progress * 0.45).toString(), color: "text-accent" },
          { label: "Voicemail", value: Math.round(progress * 0.25).toString(), color: "text-yellow-500" },
          { label: "No Answer", value: Math.round(progress * 0.3).toString(), color: "text-red-400" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div className={`text-base font-bold ${s.color} tabular-nums`}>{s.value}</div>
            <div className="text-[9px] text-foreground-tertiary">{s.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Progress bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={phase >= 1 ? { opacity: 1 } : {}}
        className="mb-3"
      >
        <div className="flex justify-between text-[10px] text-foreground-tertiary mb-1">
          <span>Campaign Progress</span>
          <span className="font-semibold text-foreground">{pct}%</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden flex">
          <motion.div
            className="h-full bg-accent rounded-full"
            animate={{ width: `${pct * 0.45}%` }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="h-full bg-yellow-400"
            animate={{ width: `${pct * 0.25}%` }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="h-full bg-red-300"
            animate={{ width: `${pct * 0.3}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="flex gap-3 mt-1">
          {[
            { label: "Connected", color: "bg-accent" },
            { label: "Voicemail", color: "bg-yellow-400" },
            { label: "No Answer", color: "bg-red-300" },
          ].map((l) => (
            <span key={l.label} className="flex items-center gap-1 text-[9px] text-foreground-tertiary">
              <span className={`w-1.5 h-1.5 rounded-full ${l.color}`} />{l.label}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Call log table */}
      <div className="text-[10px] text-foreground-tertiary uppercase tracking-wider mb-1 font-medium">Recent Calls</div>
      <div className="flex-1 overflow-hidden">
        {callLogs.map((log, i) => (
          <motion.div
            key={log.name}
            initial={{ opacity: 0, x: -8 }}
            animate={phase >= 2 ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.2, duration: 0.3 }}
            className="flex items-center gap-2 py-2 border-b border-gray-50 text-[11px]"
          >
            {statusIcon(log.status)}
            <span className="text-foreground font-medium flex-1 truncate">{log.name}</span>
            <span className="text-foreground-tertiary tabular-nums w-10">{log.duration}</span>
            {log.score !== "-" && (
              <span className={`px-1.5 py-0.5 rounded text-[9px] font-semibold ${
                log.score === "Hot" ? "bg-accent/10 text-accent" : "bg-yellow-500/10 text-yellow-500"
              }`}>{log.score}</span>
            )}
            <MoreHorizontal className="w-3 h-3 text-foreground-tertiary shrink-0" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step 5 – Call Results & Analysis (matches CallDetailModal.tsx)      */
/* ------------------------------------------------------------------ */

function MockupCallResults({ active }: { active: boolean }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!active) { setPhase(0); return; }
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 3800),
      setTimeout(() => setPhase(4), 5500),
      setTimeout(() => setPhase(5), 7000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [active]);

  const transcript = [
    { speaker: "AI Agent", text: "Hi Sarah, this is Maya from Callengo. I'm calling about your interest in our Growth plan.", isAI: true },
    { speaker: "Sarah", text: "Oh yes! I was looking at that. We need about 400 calls per month.", isAI: false },
    { speaker: "AI Agent", text: "Perfect. And what's your main use case? Lead qualification, data validation, or appointment confirmation?", isAI: true },
    { speaker: "Sarah", text: "Lead qualification mostly. We have a sales team of 8 and too many inbound leads to call.", isAI: false },
  ];

  const extractedData = [
    { field: "Interest Level", value: "High", status: "confirmed" },
    { field: "Plan Interest", value: "Growth ($179/mo)", status: "confirmed" },
    { field: "Team Size", value: "8 reps", status: "confirmed" },
    { field: "Use Case", value: "Lead Qualification", status: "confirmed" },
    { field: "Monthly Volume", value: "~400 calls", status: "confirmed" },
  ];

  return (
    <div className="p-4 md:p-5 h-full flex flex-col" style={uiFont}>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <PhoneCall className="w-4.5 h-4.5 text-accent" />
          <span className="text-foreground text-sm font-semibold">Call Detail: Sarah Chen</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent font-semibold">Connected</span>
          <span className="text-[10px] text-foreground-tertiary">2:34</span>
        </div>
      </div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={phase >= 1 ? { opacity: 1 } : {}}
        className="flex gap-1 mb-3 border-b border-gray-100 pb-2"
      >
        {["Overview", "Transcript", "Analysis", "Recording"].map((tab, i) => (
          <span key={tab} className={`text-[10px] px-2.5 py-1 rounded-md font-medium cursor-pointer ${
            (i === 0 && phase < 2) || (i === 1 && phase >= 2 && phase < 4) || (i === 2 && phase >= 4)
              ? "bg-electric/10 text-electric" : "text-foreground-tertiary hover:bg-gray-50"
          }`}>{tab}</span>
        ))}
      </motion.div>

      {/* Overview metrics */}
      <AnimatePresence mode="wait">
        {phase >= 1 && phase < 2 && (
          <motion.div
            key="overview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-3 gap-2 mb-3"
          >
            {[
              { label: "Quality Score", value: "9.2/10", color: "text-accent" },
              { label: "Sentiment", value: "Positive", color: "text-accent" },
              { label: "Lead Score", value: "Hot", color: "text-electric" },
            ].map((m) => (
              <div key={m.label} className="bg-gray-50 rounded-lg p-2.5 text-center border border-gray-100">
                <div className={`text-sm font-bold ${m.color}`}>{m.value}</div>
                <div className="text-[9px] text-foreground-tertiary mt-0.5">{m.label}</div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Transcript */}
      <AnimatePresence mode="wait">
        {phase >= 2 && phase < 4 && (
          <motion.div
            key="transcript"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex-1 overflow-hidden space-y-2"
          >
            {transcript.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: line.isAI ? -8 : 8 }}
                animate={phase >= 2 ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.4, duration: 0.4 }}
                className={`flex ${line.isAI ? "justify-start" : "justify-end"}`}
              >
                <div className={`max-w-[85%] rounded-xl px-3 py-2 ${
                  line.isAI ? "bg-electric/10 border border-electric/20" : "bg-gray-50 border border-gray-200"
                }`}>
                  <div className={`text-[9px] font-semibold mb-0.5 ${line.isAI ? "text-electric" : "text-foreground-secondary"}`}>
                    {line.speaker}
                  </div>
                  <div className="text-[11px] text-foreground-secondary leading-relaxed">{line.text}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Extracted data / Analysis */}
      <AnimatePresence mode="wait">
        {phase >= 4 && (
          <motion.div
            key="analysis"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 overflow-hidden"
          >
            <div className="text-[10px] text-foreground-tertiary uppercase tracking-wider mb-2 font-medium">Extracted Data</div>
            <div className="space-y-1.5">
              {extractedData.map((d, i) => (
                <motion.div
                  key={d.field}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.3 }}
                  className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2 border border-gray-100"
                >
                  <span className="text-[11px] text-foreground-secondary">{d.field}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold text-foreground">{d.value}</span>
                    <span className="flex items-center gap-0.5 text-[9px] text-accent font-medium">
                      <CheckCircle2 className="w-3 h-3" />Confirmed
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CRM sync */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={phase >= 5 ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
              className="mt-3 flex items-center justify-between bg-accent/5 border border-accent/20 rounded-lg px-3 py-2"
            >
              <span className="text-[11px] text-accent font-medium flex items-center gap-1.5">
                <ArrowUpRight className="w-3.5 h-3.5" /> Synced to HubSpot
              </span>
              <span className="text-[9px] text-foreground-tertiary">2 seconds ago</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step 6 – Dashboard (matches DashboardOverview.tsx)                  */
/* ------------------------------------------------------------------ */

function MockupDashboard({ active }: { active: boolean }) {
  const [phase, setPhase] = useState(0);
  const [counters, setCounters] = useState({ contacts: 0, verified: 0, avgDuration: 0, minutesLeft: 0 });

  useEffect(() => {
    if (!active) {
      setPhase(0);
      setCounters({ contacts: 0, verified: 0, avgDuration: 0, minutesLeft: 0 });
      return;
    }

    setPhase(1);
    const t1 = setTimeout(() => setPhase(2), 2500);
    const t2 = setTimeout(() => setPhase(3), 4500);
    const t3 = setTimeout(() => setPhase(4), 6500);

    const targets = { contacts: 2847, verified: 1923, avgDuration: 2.4, minutesLeft: 142 };
    const steps = 35;
    let step = 0;
    const iv = setInterval(() => {
      step++;
      const p = step / steps;
      const e = 1 - Math.pow(1 - p, 3);
      setCounters({
        contacts: Math.round(targets.contacts * e),
        verified: Math.round(targets.verified * e),
        avgDuration: Math.round(targets.avgDuration * e * 10) / 10,
        minutesLeft: Math.round(targets.minutesLeft * e),
      });
      if (step >= steps) clearInterval(iv);
    }, 2000 / steps);

    return () => { clearInterval(iv); [t1, t2, t3].forEach(clearTimeout); };
  }, [active]);

  const agents = [
    { name: "Lead Qualification", status: "Active", calls: 145, gradient: "from-electric to-[#3347D4]" },
    { name: "Data Validation", status: "Active", calls: 89, gradient: "from-accent to-[#128055]" },
    { name: "Apt. Confirmation", status: "Paused", calls: 0, gradient: "from-[#F59E0B] to-[#D97706]" },
  ];

  const campaigns = [
    { name: "Q1 Lead Outreach", status: "Active", progress: 75, calls: "186/247" },
    { name: "CRM Data Cleanup", status: "Active", progress: 42, calls: "523/1,240" },
    { name: "March Appointments", status: "Scheduled", progress: 0, calls: "0/89" },
  ];

  const recentCalls = [
    { name: "Sarah Chen", agent: "Lead Qual.", result: "Hot Lead", time: "2m ago" },
    { name: "James Wilson", agent: "Data Val.", result: "Verified", time: "4m ago" },
    { name: "Maria Lopez", agent: "Lead Qual.", result: "Warm Lead", time: "6m ago" },
  ];

  return (
    <div className="p-4 md:p-5 h-full flex flex-col gap-2.5" style={uiFont}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LayoutDashboard className="w-4.5 h-4.5 text-electric" />
          <span className="text-foreground text-sm font-semibold">Dashboard</span>
        </div>
        <span className="text-[10px] text-foreground-tertiary bg-gray-100 px-2 py-0.5 rounded">Last 30 days</span>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-4 gap-2">
        {[
          { label: "Total Contacts", value: counters.contacts.toLocaleString(), icon: Users, color: "text-electric", bg: "bg-electric/10" },
          { label: "Verified", value: counters.verified.toLocaleString(), icon: CheckCircle2, color: "text-accent", bg: "bg-accent/10" },
          { label: "Avg Duration", value: `${counters.avgDuration}m`, icon: Clock, color: "text-electric", bg: "bg-electric/10" },
          { label: "Min. Remaining", value: counters.minutesLeft.toString(), icon: BarChart3, color: "text-foreground-secondary", bg: "bg-gray-100" },
        ].map((m, i) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 8 }}
              animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.35 }}
              className="rounded-lg border border-gray-100 p-2.5"
            >
              <div className={`w-6 h-6 rounded-md ${m.bg} flex items-center justify-center mb-1`}>
                <Icon className={`w-3 h-3 ${m.color}`} />
              </div>
              <div className="text-sm font-bold text-foreground tabular-nums">{m.value}</div>
              <div className="text-[9px] text-foreground-tertiary">{m.label}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Active agents */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={phase >= 2 ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        <div className="text-[10px] text-foreground-tertiary uppercase tracking-wider mb-1.5 font-medium">Active Agents</div>
        <div className="grid grid-cols-3 gap-2">
          {agents.map((a) => (
            <div key={a.name} className="rounded-lg border border-gray-100 p-2.5">
              <div className={`w-6 h-6 rounded-md bg-gradient-to-br ${a.gradient} flex items-center justify-center mb-1.5`}>
                <Bot className="w-3 h-3 text-white" />
              </div>
              <div className="text-[10px] font-semibold text-foreground leading-tight">{a.name}</div>
              <div className="flex items-center gap-1 mt-1">
                <span className={`w-1.5 h-1.5 rounded-full ${a.status === "Active" ? "bg-accent" : "bg-gray-300"}`} />
                <span className="text-[9px] text-foreground-tertiary">{a.status}</span>
                {a.calls > 0 && <span className="text-[9px] text-foreground-tertiary ml-auto">{a.calls} calls</span>}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Campaigns */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={phase >= 3 ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        <div className="text-[10px] text-foreground-tertiary uppercase tracking-wider mb-1.5 font-medium">Campaigns</div>
        {campaigns.map((c) => (
          <div key={c.name} className="flex items-center gap-2 py-1.5 border-b border-gray-50 last:border-0">
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-foreground font-medium">{c.name}</span>
                <span className="text-[9px] text-foreground-tertiary tabular-nums">{c.calls}</span>
              </div>
              <div className="h-1 bg-gray-100 rounded-full mt-1 overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${c.status === "Active" ? "bg-electric" : "bg-gray-200"}`}
                  initial={{ width: 0 }}
                  animate={phase >= 3 ? { width: `${c.progress}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Recent calls */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={phase >= 4 ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
        className="mt-auto"
      >
        <div className="text-[10px] text-foreground-tertiary uppercase tracking-wider mb-1.5 font-medium">Recent Calls</div>
        {recentCalls.map((call) => (
          <div key={call.name} className="flex items-center gap-2 py-1.5 text-[11px]">
            <PhoneCall className="w-3 h-3 text-accent shrink-0" />
            <span className="text-foreground font-medium">{call.name}</span>
            <span className="text-foreground-tertiary text-[9px]">{call.agent}</span>
            <span className={`ml-auto text-[9px] px-1.5 py-0.5 rounded font-medium ${
              call.result.includes("Hot") ? "bg-accent/10 text-accent" :
              call.result.includes("Warm") ? "bg-yellow-500/10 text-yellow-500" :
              "bg-electric/10 text-electric"
            }`}>{call.result}</span>
            <span className="text-[9px] text-foreground-tertiary">{call.time}</span>
          </div>
        ))}
      </motion.div>
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
      "Upload via CSV, Excel, Google Sheets, or JSON. You can also sync directly from HubSpot, Salesforce, Pipedrive, Zoho, Clio, or Dynamics 365. Auto field mapping, deduplication, and validation included.",
    highlights: ["CSV / Excel / JSON", "6 native CRM syncs", "Auto deduplication", "Smart field mapping"],
    Mockup: MockupContacts,
  },
  {
    number: "02",
    icon: Bot,
    title: "Configure your AI agent",
    description:
      "Select from 3 specialized agents (Lead Qualification, Data Validation, Appointment Confirmation). Choose a voice, set call parameters, toggle voicemail detection and follow-ups. Test with a live call before launching.",
    highlights: ["3 agent templates", "Voice selection", "Live test call", "Voicemail detection"],
    Mockup: MockupAgentConfig,
  },
  {
    number: "03",
    icon: Settings2,
    title: "Set up your campaign",
    description:
      "Pick your contact list, define calling windows by timezone, connect Google Calendar, Zoom, Slack, and Outlook. Set retry logic, TCPA compliance, and working hours, all configurable per campaign.",
    highlights: ["Calendar integration", "Timezone handling", "Retry logic", "TCPA compliance"],
    Mockup: MockupCampaignSetup,
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch and monitor live",
    description:
      "Start calling hundreds of contacts in parallel. Watch real-time call logs with status breakdowns (connected, voicemail, no-answer), lead scores, and sentiment analysis as calls complete.",
    highlights: ["Parallel dialing", "Live call logs", "Lead scoring", "Sentiment analysis"],
    Mockup: MockupLaunch,
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Review call results",
    description:
      "Dive into each call with full transcripts, extracted data fields, quality scores, and sentiment analysis. Verified data syncs to your CRM automatically, no manual entry needed.",
    highlights: ["Full transcripts", "Data extraction", "Quality scoring", "Auto CRM sync"],
    Mockup: MockupCallResults,
  },
  {
    number: "06",
    icon: LayoutDashboard,
    title: "Everything in one dashboard",
    description:
      "See all contacts, agents, campaigns, and call results in one place. Track verified contacts, active agents, campaign progress, minutes remaining, and recent call outcomes at a glance.",
    highlights: ["Unified dashboard", "Agent monitoring", "Usage tracking", "Campaign overview"],
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
    <section className="relative overflow-hidden section-dark" id="how-it-works">
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
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-white/20 text-white/80 bg-white/10 mb-5">
                How it works
              </span>
              <h2 className="text-display-sm text-white mb-5">
                Setup in minutes.
                <br />
                <span className="text-white font-bold">Results in hours.</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Six simple steps, from zero to fully automated calling campaigns.
                No technical expertise required.
              </p>
            </motion.div>
          </div>

          {/* Main interactive area */}
          <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-start">

            {/* LEFT — Interactive mockup viewer */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 25px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(79, 95, 232, 0.15)",
                }}
              >
                {/* Window chrome */}
                <div className="flex items-center gap-3 px-5 py-3.5 border-b" style={{ background: "rgba(244, 245, 250, 0.9)", borderColor: "rgba(221, 224, 238, 0.6)" }}>
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

                {/* Mockup area */}
                <div className="relative bg-white overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0 overflow-hidden"
                    >
                      <ActiveMockup active={true} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="absolute -inset-8 bg-white/10 blur-3xl rounded-3xl -z-10" />
            </motion.div>

            {/* RIGHT — Step selector with integrated details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              {/* Step buttons with expandable active state */}
              <div className="space-y-2">
                {steps.map((s, index) => {
                  const Icon = s.icon;
                  const isActive = index === activeStep;

                  return (
                    <button
                      key={s.number}
                      onClick={() => handleStepClick(index)}
                      className={`w-full text-left rounded-xl border transition-all duration-300 cursor-pointer group overflow-hidden ${
                        isActive
                          ? "border-white/25 bg-white/15 backdrop-blur-sm"
                          : "border-white/8 bg-white/[0.06] hover:bg-white/[0.10] hover:border-white/15 backdrop-blur-sm"
                      }`}
                    >
                      <div className={`px-4 ${isActive ? "pt-3.5 pb-1.5" : "py-3"}`}>
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                              isActive
                                ? "bg-white text-electric shadow-lg"
                                : "bg-white/15 group-hover:bg-white/20"
                            }`}
                            style={isActive ? { boxShadow: "0 4px 16px rgba(79, 95, 232, 0.3)" } : {}}
                          >
                            <Icon className={`w-4.5 h-4.5 ${isActive ? "text-electric" : "text-white/60"}`} />
                          </div>

                          <div className="flex-1 min-w-0 flex items-center gap-2">
                            <span className={`text-[11px] font-bold tabular-nums ${isActive ? "text-white/90" : "text-white/40"}`}>
                              {s.number}
                            </span>
                            <span className={`text-sm font-semibold leading-tight ${isActive ? "text-white" : "text-white/65 group-hover:text-white/75"}`}>
                              {s.title}
                            </span>
                          </div>

                          <ChevronRight className={`w-4 h-4 shrink-0 transition-all duration-300 ${isActive ? "text-white/70 rotate-90" : "text-white/35 group-hover:text-white/50"}`} />
                        </div>
                      </div>

                      {/* Expanded content for active step */}
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 pb-3.5"
                        >
                          <p className="text-[12px] text-white/60 leading-relaxed mt-1.5 pl-12" style={{ fontFamily: "var(--font-body)" }}>
                            {s.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mt-2.5 pl-12">
                            {s.highlights.map((h) => (
                              <span
                                key={h}
                                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium text-white/70 border border-white/15 bg-white/[0.08]"
                              >
                                <CheckCircle2 className="w-2.5 h-2.5 text-accent/70" />
                                {h}
                              </span>
                            ))}
                          </div>
                          {!isPaused && (
                            <div className="h-1 bg-white/10 rounded-full overflow-hidden mt-3 ml-12">
                              <motion.div
                                className="h-full rounded-full"
                                style={{ width: `${progress}%`, background: "rgba(255, 255, 255, 0.5)" }}
                              />
                            </div>
                          )}
                        </motion.div>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="pt-6 space-y-2.5">
                <a
                  href="https://app.callengo.com/auth/signup"
                  className="btn w-full rounded-xl justify-center text-sm py-3.5 hover:-translate-y-0.5 transition-all text-electric font-semibold"
                  style={{
                    background: "rgba(255, 255, 255, 0.95)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2), 0 0 15px rgba(79, 95, 232, 0.2)",
                  }}
                >
                  Start free trial
                  <ChevronRight className="w-4 h-4" />
                </a>
                <p className="text-center text-xs text-white/40" style={{ fontFamily: "var(--font-body)" }}>
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
