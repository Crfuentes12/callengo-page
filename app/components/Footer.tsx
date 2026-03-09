"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Product: [
    { name: "Pricing", href: "/pricing" },
    { name: "Data Validation", href: "/agents/data-validation" },
    { name: "Appointments", href: "/agents/appointment-confirmation" },
    { name: "Lead Qualification", href: "/agents/lead-qualification" },
    { name: "Integrations", href: "/integrations" },
  ],
  Resources: [
    { name: "Documentation", href: "/docs" },
    { name: "Quick Start Guide", href: "/help/quick-start" },
    { name: "Help Center", href: "/help" },
    { name: "Blog", href: "/blog" },
    { name: "Free Tools", href: "/free-tools" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Compliance", href: "/compliance" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
  "Callengo vs": [
    { name: "Callengo vs Bland AI", href: "/compare/bland-ai" },
    { name: "Callengo vs Vapi", href: "/compare/vapi" },
    { name: "Callengo vs Aircall", href: "/compare/aircall" },
    { name: "Callengo vs Dialpad AI", href: "/compare/dialpad" },
    { name: "Callengo vs JustCall", href: "/compare/justcall" },
    { name: "Callengo vs Synthflow", href: "/compare/synthflow" },
    { name: "Callengo vs Retell AI", href: "/compare/retell-ai" },
    { name: "Callengo vs Air AI", href: "/compare/air-ai" },
    { name: "Callengo vs Thoughtly", href: "/compare/thoughtly" },
    { name: "Callengo vs PlayAI", href: "/compare/play-ai" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-deep-indigo text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Slogan + social row */}
        <div className="pt-16 pb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/10">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-3">
              <Image
                src="/callengo-logo.svg"
                alt="Callengo"
                width={28}
                height={28}
                className="w-7 h-7 brightness-0 invert opacity-60"
              />
              <span
                className="text-lg font-semibold tracking-tight text-white/80"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Callengo
              </span>
            </Link>
            <p className="text-sm text-white/40 max-w-md leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              Automate your outbound calls with AI. Less time dialing, more time closing.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/company/callengo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors text-sm"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:support@callengo.com"
                className="text-white/40 hover:text-white/70 transition-colors text-sm"
                style={{ fontFamily: "var(--font-body)" }}
              >
                support@callengo.com
              </a>
            </div>
            <p className="text-xs text-white/25" style={{ fontFamily: "var(--font-body)" }}>
              US-based company · San Francisco, CA
            </p>
          </div>
        </div>

        {/* Link columns — centered grid */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-5">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white/80 transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Giant brand name — same weight as header, same opacity as footer text */}
        <div className="border-t border-white/10 pt-10 pb-4">
          <div
            className="text-[clamp(4rem,14vw,12rem)] font-semibold leading-none tracking-tighter text-white/[0.12] select-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Callengo
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pb-8 flex items-center justify-between">
          <p className="text-xs text-white/25" style={{ fontFamily: "var(--font-body)" }}>
            &copy; {new Date().getFullYear()} Callengo. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/25" style={{ fontFamily: "var(--font-body)" }}>
            <Link href="/privacy" className="hover:text-white/50 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white/50 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
