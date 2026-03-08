"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, AlertTriangle, X, Phone, Mail, User, Clock, CalendarCheck, RefreshCw, Flame, TrendingUp, Snowflake, Send } from "lucide-react";

/* ================================================================
   FEATURE 1 — CRM Data Verification Table
   ================================================================ */

type RowStatus = "pending" | "checking" | "verified" | "updated" | "invalid";

interface CrmRow {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: RowStatus;
  correctedField?: "email" | "phone";
  correctedValue?: string;
}

const initialRows: CrmRow[] = [
  { id: 1, name: "Sarah Mitchell", email: "s.mitchell@acme.io", phone: "(415) 555-0142", status: "pending" },
  { id: 2, name: "James Chen", email: "jchen@oldomain.com", phone: "(312) 555-0198", status: "pending" },
  { id: 3, name: "Maria Lopez", email: "m.lopez@globex.co", phone: "(555) 000-0000", status: "pending" },
  { id: 4, name: "David Park", email: "dpark@techstart.io", phone: "(628) 555-0267", status: "pending" },
  { id: 5, name: "Emma Wilson", email: "e.wilson@corp.net", phone: "(917) 555-0331", status: "pending" },
];

const verificationSequence: { rowId: number; result: RowStatus; correctedField?: "email" | "phone"; correctedValue?: string }[] = [
  { rowId: 1, result: "verified" },
  { rowId: 2, result: "updated", correctedField: "email", correctedValue: "j.chen@newdomain.com" },
  { rowId: 3, result: "invalid", correctedField: "phone", correctedValue: "(213) 555-0871" },
  { rowId: 4, result: "verified" },
  { rowId: 5, result: "updated", correctedField: "phone", correctedValue: "(917) 555-0344" },
];

function StatusBadge({ status }: { status: RowStatus }) {
  const config: Record<RowStatus, { label: string; classes: string; icon: React.ReactNode }> = {
    pending: { label: "Pending", classes: "bg-background-secondary text-foreground-tertiary", icon: <Clock className="w-3 h-3" /> },
    checking: { label: "Checking...", classes: "bg-electric/10 text-electric", icon: <RefreshCw className="w-3 h-3 animate-spin" /> },
    verified: { label: "Verified", classes: "bg-accent/10 text-accent", icon: <Check className="w-3 h-3" /> },
    updated: { label: "Updated", classes: "bg-warning/10 text-warning", icon: <AlertTriangle className="w-3 h-3" /> },
    invalid: { label: "Corrected", classes: "bg-warning/10 text-warning", icon: <AlertTriangle className="w-3 h-3" /> },
  };
  const c = config[status];
  return (
    <motion.span
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${c.classes}`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      {c.icon}
      {c.label}
    </motion.span>
  );
}

function DataVerificationMockup() {
  const [rows, setRows] = useState<CrmRow[]>(initialRows);
  const [step, setStep] = useState(-1);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const resetAndReplay = useCallback(() => {
    setRows(initialRows);
    setStep(-1);
  }, []);

  useEffect(() => {
    if (!isInView) return;

    if (step === -1) {
      const t = setTimeout(() => setStep(0), 800);
      return () => clearTimeout(t);
    }

    if (step >= verificationSequence.length) {
      const t = setTimeout(resetAndReplay, 3000);
      return () => clearTimeout(t);
    }

    const seq = verificationSequence[step];

    // First show "checking"
    setRows(prev => prev.map(r => r.id === seq.rowId ? { ...r, status: "checking" } : r));

    const t = setTimeout(() => {
      setRows(prev => prev.map(r =>
        r.id === seq.rowId
          ? { ...r, status: seq.result, correctedField: seq.correctedField, correctedValue: seq.correctedValue }
          : r
      ));
      setTimeout(() => setStep(s => s + 1), 400);
    }, 700);

    return () => clearTimeout(t);
  }, [step, isInView, resetAndReplay]);

  return (
    <div ref={containerRef} className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-background">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-background-secondary">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-accent" />
          <span className="text-[11px] font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
            CRM Data Validator
          </span>
        </div>
        <span className="text-[10px] text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>
          {rows.filter(r => r.status === "verified" || r.status === "updated" || r.status === "invalid").length}/{rows.length} processed
        </span>
      </div>

      {/* Table header */}
      <div className="grid grid-cols-[1.2fr_1.5fr_1.2fr_0.8fr] gap-1 px-4 py-2 text-[10px] font-medium text-foreground-tertiary border-b border-border-light" style={{ fontFamily: "var(--font-body)" }}>
        <div className="flex items-center gap-1"><User className="w-3 h-3" /> Name</div>
        <div className="flex items-center gap-1"><Mail className="w-3 h-3" /> Email</div>
        <div className="flex items-center gap-1"><Phone className="w-3 h-3" /> Phone</div>
        <div>Status</div>
      </div>

      {/* Table rows */}
      <div className="divide-y divide-border-light">
        {rows.map((row) => {
          const isActive = row.status === "checking";
          return (
            <motion.div
              key={row.id}
              className={`grid grid-cols-[1.2fr_1.5fr_1.2fr_0.8fr] gap-1 px-4 py-2 text-[11px] items-center transition-colors duration-300 ${isActive ? "bg-electric/5" : ""}`}
              style={{ fontFamily: "var(--font-body)" }}
              animate={isActive ? { backgroundColor: ["rgba(79,95,232,0.03)", "rgba(79,95,232,0.08)", "rgba(79,95,232,0.03)"] } : {}}
              transition={isActive ? { duration: 1, repeat: Infinity } : {}}
            >
              <div className="text-foreground font-medium truncate">{row.name}</div>

              <div className="truncate">
                {row.correctedField === "email" && (row.status === "updated" || row.status === "invalid") ? (
                  <div className="flex flex-col">
                    <span className="line-through text-foreground-tertiary text-[10px]">{row.email}</span>
                    <motion.span initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} className="text-accent font-medium">
                      {row.correctedValue}
                    </motion.span>
                  </div>
                ) : (
                  <span className={row.status === "verified" ? "text-accent" : "text-foreground-secondary"}>
                    {row.email}
                  </span>
                )}
              </div>

              <div className="truncate">
                {(row.correctedField === "phone") && (row.status === "updated" || row.status === "invalid") ? (
                  <div className="flex flex-col">
                    <span className="line-through text-foreground-tertiary text-[10px]">{row.phone}</span>
                    <motion.span initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} className="text-accent font-medium">
                      {row.correctedValue}
                    </motion.span>
                  </div>
                ) : (
                  <span className={row.status === "verified" ? "text-accent" : "text-foreground-secondary"}>
                    {row.phone}
                  </span>
                )}
              </div>

              <div>
                <StatusBadge status={row.status} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-2 border-t border-border bg-background-secondary/80 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-[10px]" style={{ fontFamily: "var(--font-body)" }}>
            <span className="flex items-center gap-1 text-accent"><Check className="w-3 h-3" /> {rows.filter(r => r.status === "verified").length} Clean</span>
            <span className="flex items-center gap-1 text-warning"><AlertTriangle className="w-3 h-3" /> {rows.filter(r => r.status === "updated" || r.status === "invalid").length} Fixed</span>
          </div>
          <div className="text-[10px] font-medium text-electric" style={{ fontFamily: "var(--font-display)" }}>95% Accuracy</div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   FEATURE 2 — Calendar / Appointment Confirmation
   ================================================================ */

type SlotStatus = "confirmed" | "pending" | "rescheduled" | "no-show" | "empty";

interface CalendarSlot {
  id: number;
  time: string;
  name: string;
  status: SlotStatus;
}

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const initialSlots: CalendarSlot[] = [
  { id: 1, time: "9:00", name: "A. Garcia", status: "pending" },
  { id: 2, time: "10:30", name: "B. Taylor", status: "pending" },
  { id: 3, time: "11:00", name: "C. Nguyen", status: "no-show" },
  { id: 4, time: "1:00", name: "D. Miller", status: "pending" },
  { id: 5, time: "2:30", name: "E. Brown", status: "pending" },
  { id: 6, time: "3:00", name: "F. Davis", status: "pending" },
];

const calendarSequence: { slotId: number; newStatus: SlotStatus }[] = [
  { slotId: 1, newStatus: "confirmed" },
  { slotId: 2, newStatus: "confirmed" },
  { slotId: 3, newStatus: "rescheduled" },
  { slotId: 4, newStatus: "confirmed" },
  { slotId: 5, newStatus: "confirmed" },
  { slotId: 6, newStatus: "confirmed" },
];

function SlotBadge({ status }: { status: SlotStatus }) {
  const cfg: Record<SlotStatus, { label: string; classes: string }> = {
    confirmed: { label: "Confirmed", classes: "bg-accent/10 text-accent" },
    pending: { label: "Pending", classes: "bg-background-secondary text-foreground-tertiary" },
    rescheduled: { label: "Rescheduled", classes: "bg-electric/10 text-electric" },
    "no-show": { label: "No-show", classes: "bg-error/10 text-error" },
    empty: { label: "", classes: "" },
  };
  const c = cfg[status];
  return (
    <motion.span
      key={status}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-medium whitespace-nowrap ${c.classes}`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      {c.label}
    </motion.span>
  );
}

function CalendarMockup() {
  const [slots, setSlots] = useState<CalendarSlot[]>(initialSlots);
  const [noShowCount, setNoShowCount] = useState(3);
  const [step, setStep] = useState(-1);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const resetAndReplay = useCallback(() => {
    setSlots(initialSlots);
    setNoShowCount(3);
    setStep(-1);
  }, []);

  useEffect(() => {
    if (!isInView) return;

    if (step === -1) {
      const t = setTimeout(() => setStep(0), 600);
      return () => clearTimeout(t);
    }

    if (step >= calendarSequence.length) {
      const t = setTimeout(resetAndReplay, 3000);
      return () => clearTimeout(t);
    }

    const seq = calendarSequence[step];
    const t = setTimeout(() => {
      setSlots(prev => prev.map(s => s.id === seq.slotId ? { ...s, status: seq.newStatus } : s));
      if (seq.newStatus === "rescheduled" || seq.newStatus === "confirmed") {
        setNoShowCount(prev => Math.max(0, prev - (seq.slotId === 3 ? 1 : 0)));
      }
      setStep(s => s + 1);
    }, 650);

    return () => clearTimeout(t);
  }, [step, isInView, resetAndReplay]);

  const confirmedCount = slots.filter(s => s.status === "confirmed").length;

  return (
    <div ref={containerRef} className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-background">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-background-secondary">
        <div className="flex items-center gap-2">
          <CalendarCheck className="w-3.5 h-3.5 text-electric" />
          <span className="text-[11px] font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
            Week of Mar 9 &ndash; 13
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-accent font-medium" style={{ fontFamily: "var(--font-body)" }}>
            {confirmedCount} confirmed
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={noShowCount}
              initial={{ scale: 1.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="text-[10px] text-error font-medium"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {noShowCount} no-show{noShowCount !== 1 ? "s" : ""}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-5 border-b border-border-light">
        {days.map((d, i) => (
          <div key={d} className={`text-center py-1.5 text-[10px] font-medium ${i === 2 ? "text-electric" : "text-foreground-tertiary"}`} style={{ fontFamily: "var(--font-display)" }}>
            {d}
            <div className={`text-[9px] mt-0.5 ${i === 2 ? "text-electric" : "text-foreground-tertiary"}`}>{9 + i}</div>
          </div>
        ))}
      </div>

      {/* Calendar grid - simplified slot view */}
      <div className="p-2 space-y-1">
        {slots.map((slot) => (
          <motion.div
            key={slot.id}
            layout
            className={`flex items-center justify-between px-3 py-1.5 rounded-lg border transition-colors duration-300 ${
              slot.status === "confirmed"
                ? "border-accent/30 bg-accent/5"
                : slot.status === "rescheduled"
                ? "border-electric/30 bg-electric/5"
                : slot.status === "no-show"
                ? "border-error/30 bg-error/5"
                : "border-border-light bg-background"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-foreground-tertiary w-8" style={{ fontFamily: "var(--font-mono)" }}>{slot.time}</span>
              <span className={`text-[11px] font-medium ${slot.status === "no-show" ? "line-through text-foreground-tertiary" : "text-foreground"}`} style={{ fontFamily: "var(--font-body)" }}>
                {slot.name}
              </span>
            </div>
            <AnimatePresence mode="wait">
              <SlotBadge status={slot.status} />
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Bottom stat bar */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-2 border-t border-border bg-background-secondary/80 backdrop-blur-sm">
        <div className="flex items-center justify-between text-[10px]" style={{ fontFamily: "var(--font-body)" }}>
          <span className="text-foreground-secondary">Confirmation rate</span>
          <div className="flex items-center gap-2">
            <div className="w-24 h-1.5 rounded-full bg-background-tertiary overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-accent"
                initial={{ width: "0%" }}
                animate={{ width: `${(confirmedCount / slots.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <span className="font-semibold text-accent">{Math.round((confirmedCount / slots.length) * 100)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   FEATURE 3 — Lead Scoring Dashboard
   ================================================================ */

type LeadQuality = "hot" | "warm" | "cold" | null;

interface Lead {
  id: number;
  name: string;
  company: string;
  score: number;
  quality: LeadQuality;
  showScore: boolean;
  passedToSales: boolean;
}

const initialLeads: Lead[] = [
  { id: 1, name: "Olivia Martin", company: "TechVenture Inc.", score: 92, quality: null, showScore: false, passedToSales: false },
  { id: 2, name: "Liam Johnson", company: "GrowthCo", score: 74, quality: null, showScore: false, passedToSales: false },
  { id: 3, name: "Sophia Lee", company: "DataFirst", score: 45, quality: null, showScore: false, passedToSales: false },
  { id: 4, name: "Noah Williams", company: "ScaleUp Labs", score: 88, quality: null, showScore: false, passedToSales: false },
];

function QualityBadge({ quality }: { quality: LeadQuality }) {
  if (!quality) return null;
  const cfg: Record<string, { label: string; classes: string; icon: React.ReactNode }> = {
    hot: { label: "Hot", classes: "bg-accent/10 text-accent", icon: <Flame className="w-3 h-3" /> },
    warm: { label: "Warm", classes: "bg-warning/10 text-warning", icon: <TrendingUp className="w-3 h-3" /> },
    cold: { label: "Cold", classes: "bg-slate-indigo/15 text-slate-indigo", icon: <Snowflake className="w-3 h-3" /> },
  };
  const c = cfg[quality];
  return (
    <motion.span
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${c.classes}`}
      style={{ fontFamily: "var(--font-display)" }}
    >
      {c.icon}
      {c.label}
    </motion.span>
  );
}

function LeadScoringMockup() {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [phase, setPhase] = useState(0); // 0=idle, 1=showScores, 2=showQuality, 3=passToSales, 4=done
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const resetAndReplay = useCallback(() => {
    setLeads(initialLeads);
    setPhase(0);
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    if (phase === 0) {
      timers.push(setTimeout(() => setPhase(1), 800));
    } else if (phase === 1) {
      // Reveal scores one by one
      leads.forEach((lead, i) => {
        timers.push(setTimeout(() => {
          setLeads(prev => prev.map(l => l.id === lead.id ? { ...l, showScore: true } : l));
        }, i * 400));
      });
      timers.push(setTimeout(() => setPhase(2), leads.length * 400 + 500));
    } else if (phase === 2) {
      // Assign quality badges
      leads.forEach((lead, i) => {
        const quality: LeadQuality = lead.score >= 85 ? "hot" : lead.score >= 60 ? "warm" : "cold";
        timers.push(setTimeout(() => {
          setLeads(prev => prev.map(l => l.id === lead.id ? { ...l, quality } : l));
        }, i * 350));
      });
      timers.push(setTimeout(() => setPhase(3), leads.length * 350 + 600));
    } else if (phase === 3) {
      // Pass hot leads to sales
      const hotLeads = leads.filter(l => l.score >= 85);
      hotLeads.forEach((lead, i) => {
        timers.push(setTimeout(() => {
          setLeads(prev => prev.map(l => l.id === lead.id ? { ...l, passedToSales: true } : l));
        }, i * 500));
      });
      timers.push(setTimeout(() => setPhase(4), hotLeads.length * 500 + 500));
    } else if (phase === 4) {
      timers.push(setTimeout(resetAndReplay, 3000));
    }

    return () => timers.forEach(clearTimeout);
  }, [phase, isInView, leads, resetAndReplay]);

  const scoreColor = (score: number) => {
    if (score >= 85) return "text-accent";
    if (score >= 60) return "text-warning";
    return "text-slate-indigo";
  };

  const barColor = (score: number) => {
    if (score >= 85) return "bg-accent";
    if (score >= 60) return "bg-warning";
    return "bg-slate-indigo";
  };

  return (
    <div ref={containerRef} className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-background">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-background-secondary">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-3.5 h-3.5 text-electric" />
          <span className="text-[11px] font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
            Lead Scoring Pipeline
          </span>
        </div>
        <span className="text-[10px] text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>
          {leads.filter(l => l.quality === "hot").length} qualified
        </span>
      </div>

      {/* Lead cards */}
      <div className="p-3 space-y-2">
        {leads.map((lead) => (
          <motion.div
            key={lead.id}
            layout
            className={`relative rounded-xl border p-3 transition-colors duration-300 ${
              lead.passedToSales
                ? "border-accent/40 bg-accent/5"
                : "border-border-light bg-background"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="text-[11px] font-semibold text-foreground" style={{ fontFamily: "var(--font-body)" }}>{lead.name}</div>
                <div className="text-[10px] text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>{lead.company}</div>
              </div>
              <div className="flex items-center gap-2">
                <AnimatePresence>
                  {lead.quality && <QualityBadge quality={lead.quality} />}
                </AnimatePresence>
                <AnimatePresence>
                  {lead.passedToSales && (
                    <motion.span
                      initial={{ scale: 0, opacity: 0, x: 10 }}
                      animate={{ scale: 1, opacity: 1, x: 0 }}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-semibold bg-electric/10 text-electric"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      <Send className="w-2.5 h-2.5" />
                      Passed to Sales
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Score bar */}
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 rounded-full bg-background-tertiary overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${barColor(lead.score)}`}
                  initial={{ width: "0%" }}
                  animate={{ width: lead.showScore ? `${lead.score}%` : "0%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
              <AnimatePresence>
                {lead.showScore && (
                  <motion.span
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`text-[11px] font-bold w-7 text-right ${scoreColor(lead.score)}`}
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {lead.score}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-2 border-t border-border bg-background-secondary/80 backdrop-blur-sm">
        <div className="flex items-center justify-between text-[10px]" style={{ fontFamily: "var(--font-body)" }}>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-accent"><Flame className="w-3 h-3" /> {leads.filter(l => l.quality === "hot").length} Hot</span>
            <span className="flex items-center gap-1 text-warning"><TrendingUp className="w-3 h-3" /> {leads.filter(l => l.quality === "warm").length} Warm</span>
            <span className="flex items-center gap-1 text-slate-indigo"><Snowflake className="w-3 h-3" /> {leads.filter(l => l.quality === "cold").length} Cold</span>
          </div>
          <div className="text-[10px] font-medium text-electric" style={{ fontFamily: "var(--font-display)" }}>50% Time Saved</div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   FEATURE DATA & CARD LAYOUT
   ================================================================ */

const features = [
  {
    title: "Stop wasting money on bad data",
    description:
      "Data decays at 30% per year. Outdated contacts drain your marketing budget and waste your team\u2019s time on calls that go nowhere.",
    stats: { value: "95%", label: "data accuracy" },
    insight: "Bad data costs companies an average of $12.9M annually \u2014 Gartner",
    link: "/agents/data-validation",
    Mockup: DataVerificationMockup,
  },
  {
    title: "Fill your calendar, not your voicemail",
    description:
      "Industry no-show rates average 20-30%. Each empty slot is revenue you\u2019ll never recover.",
    stats: { value: "60%", label: "fewer no-shows" },
    insight:
      "No-shows cost the healthcare industry alone $150B per year \u2014 SCI Solutions",
    link: "/agents/appointment-confirmation",
    Mockup: CalendarMockup,
  },
  {
    title: "Stop wasting time on bad leads",
    description:
      "Sales reps waste 50% of their time on leads that will never buy. Let AI score and rank every lead first.",
    stats: { value: "50%", label: "less time wasted" },
    insight:
      "67% of lost sales are due to reps chasing unqualified leads \u2014 MarketingSherpa",
    link: "/agents/lead-qualification",
    Mockup: LeadScoringMockup,
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const MockupComponent = feature.Mockup;

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
    >
      <div className={index % 2 === 1 ? "lg:order-2" : ""}>
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="text-sm font-semibold text-foreground-tertiary tracking-wide">
            0{index + 1}
          </span>
          <div className="w-8 h-px bg-border-dark" />
        </div>

        <h3 className="text-3xl md:text-4xl font-semibold text-foreground mb-5 leading-tight">
          {feature.title}
        </h3>

        <p className="text-lg text-foreground-secondary mb-6 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
          {feature.description}
        </p>

        <div className="p-4 rounded-xl border border-border bg-background-secondary mb-8">
          <p className="text-sm text-foreground-secondary italic" style={{ fontFamily: "var(--font-body)" }}>
            &ldquo;{feature.insight}&rdquo;
          </p>
        </div>

        <div className="flex items-center gap-8 mb-8">
          <div>
            <div className="text-4xl font-bold gradient-text">
              {feature.stats.value}
            </div>
            <div className="text-sm text-foreground-tertiary" style={{ fontFamily: "var(--font-body)" }}>
              {feature.stats.label}
            </div>
          </div>
        </div>

        <Link
          href={feature.link}
          className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all group text-sm"
        >
          Learn more
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className={index % 2 === 1 ? "lg:order-1" : ""}>
        <div className="relative">
          <MockupComponent />
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section className="section bg-background" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-24"
        >
          <span className="badge badge-primary mb-4">Why Callengo</span>
          <h2 className="text-display-sm mb-6 text-foreground">
            Problems solved.
            <br />
            <span className="gradient-text">Revenue recovered.</span>
          </h2>
          <p className="text-lg text-foreground-secondary" style={{ fontFamily: "var(--font-body)" }}>
            Your team should focus on closing deals, not chasing confirmations
            or cleaning spreadsheets.
          </p>
        </motion.div>

        <div className="space-y-40">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
