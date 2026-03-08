"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Product: [
    { name: "Pricing", href: "/pricing" },
    { name: "Data Validation", href: "/agents/data-validation" },
    { name: "Appointments", href: "/agents/appointment-confirmation" },
    { name: "Lead Qualification", href: "/agents/lead-qualification" },
  ],
  Resources: [
    { name: "Documentation", href: "/docs" },
    { name: "Help Center", href: "/help" },
    { name: "Blog", href: "/blog" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Compliance", href: "/compliance" },
  ],
  Comparison: [
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
    <footer className="bg-deep-indigo text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-3">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <Image
                src="/callengo-logo.svg"
                alt="Callengo"
                width={32}
                height={32}
                className="w-8 h-8 brightness-0 invert"
              />
              <span className="text-lg font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                Callengo
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6" style={{ fontFamily: "var(--font-body)" }}>
              AI-powered phone agents that handle appointment confirmations,
              data validation, and lead qualification automatically.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/company/callengo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white/60 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className={title === "Comparison" ? "col-span-2 lg:col-span-2" : "col-span-1 lg:col-span-2"}>
              <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white/70 transition-colors"
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

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30" style={{ fontFamily: "var(--font-body)" }}>
            &copy; {new Date().getFullYear()} Callengo. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs text-white/30" style={{ fontFamily: "var(--font-body)" }}>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
