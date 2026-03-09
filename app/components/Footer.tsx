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
    { name: "Integrations", href: "/docs/integrations" },
    { name: "Help Center", href: "/help" },
    { name: "Blog", href: "/blog" },
    { name: "Free Tools", href: "/free-tools" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Compliance", href: "/compliance" },
  ],
  Comparison: [
    { name: "vs Bland AI", href: "/compare/bland-ai" },
    { name: "vs Vapi", href: "/compare/vapi" },
    { name: "vs Aircall", href: "/compare/aircall" },
    { name: "vs Dialpad AI", href: "/compare/dialpad" },
    { name: "vs JustCall", href: "/compare/justcall" },
    { name: "vs Synthflow", href: "/compare/synthflow" },
    { name: "vs Retell AI", href: "/compare/retell-ai" },
    { name: "vs Air AI", href: "/compare/air-ai" },
    { name: "vs Thoughtly", href: "/compare/thoughtly" },
    { name: "vs PlayAI", href: "/compare/play-ai" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-deep-indigo text-white relative overflow-hidden">
      {/* Internal lava lamp for footer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute"
          style={{
            width: "50%",
            height: "80%",
            top: "-20%",
            right: "-10%",
            background: "conic-gradient(from 200deg, rgba(79,95,232,0.25), rgba(37,56,184,0.15), rgba(79,95,232,0.10), rgba(79,95,232,0.25))",
            filter: "blur(80px)",
            borderRadius: "40% 60% 55% 45% / 55% 40% 60% 45%",
            animation: "footerLava1 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute"
          style={{
            width: "45%",
            height: "70%",
            bottom: "-10%",
            left: "-5%",
            background: "conic-gradient(from 60deg, rgba(139,150,200,0.18), rgba(79,95,232,0.12), rgba(37,56,184,0.15), rgba(139,150,200,0.18))",
            filter: "blur(70px)",
            borderRadius: "55% 45% 40% 60% / 40% 55% 45% 60%",
            animation: "footerLava2 30s ease-in-out infinite",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Link columns */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className={title === "Comparison" ? "col-span-2 md:col-span-1" : ""}>
              <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
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

        {/* Giant brand name */}
        <div className="border-t border-white/8 pt-12 pb-6">
          <div
            className="text-[clamp(4rem,12vw,10rem)] font-bold leading-none tracking-tighter text-white/[0.06] select-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Callengo
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/callengo-logo.svg"
                alt="Callengo"
                width={24}
                height={24}
                className="w-6 h-6 brightness-0 invert opacity-40"
              />
            </Link>
            <p className="text-xs text-white/30" style={{ fontFamily: "var(--font-body)" }}>
              &copy; {new Date().getFullYear()} Callengo. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs text-white/30" style={{ fontFamily: "var(--font-body)" }}>
                All systems operational
              </span>
            </div>
            <a
              href="https://linkedin.com/company/callengo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/25 hover:text-white/50 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes footerLava1 {
          0%, 100% { transform: translate(0, 0) scale(1); border-radius: 40% 60% 55% 45% / 55% 40% 60% 45%; }
          33% { transform: translate(-30px, 20px) scale(1.1); border-radius: 55% 45% 40% 60% / 45% 55% 50% 50%; }
          66% { transform: translate(20px, -15px) scale(0.95); border-radius: 45% 55% 60% 40% / 60% 45% 40% 55%; }
        }
        @keyframes footerLava2 {
          0%, 100% { transform: translate(0, 0) scale(1); border-radius: 55% 45% 40% 60% / 40% 55% 45% 60%; }
          50% { transform: translate(25px, -20px) scale(1.08); border-radius: 40% 60% 55% 45% / 55% 40% 60% 45%; }
        }
      `}</style>
    </footer>
  );
}
