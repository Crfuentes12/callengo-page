"use client";

import { useState } from "react";
import Link from "next/link";

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
};

const comparisons1 = [
  { name: "Callengo vs Bland AI", href: "/compare/bland-ai" },
  { name: "Callengo vs Vapi", href: "/compare/vapi" },
  { name: "Callengo vs Aircall", href: "/compare/aircall" },
  { name: "Callengo vs Dialpad AI", href: "/compare/dialpad" },
  { name: "Callengo vs JustCall", href: "/compare/justcall" },
];

const comparisons2 = [
  { name: "Callengo vs Synthflow", href: "/compare/synthflow" },
  { name: "Callengo vs Retell AI", href: "/compare/retell-ai" },
  { name: "Callengo vs Air AI", href: "/compare/air-ai" },
  { name: "Callengo vs Thoughtly", href: "/compare/thoughtly" },
  { name: "Callengo vs PlayAI", href: "/compare/play-ai" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-deep-indigo text-white relative overflow-hidden">
      {/* Subtle lava lamp background */}
      <div className="absolute inset-0 overflow-hidden opacity-15 pointer-events-none">
        <div className="absolute -top-1/3 right-[-15%] w-1/2 h-[80%] bg-gradient-to-br from-[#4F5FE8]/40 via-[#8B96C8]/25 to-transparent rounded-full blur-3xl animate-[footerLava1_50s_ease-in-out_infinite]" />
        <div className="absolute -bottom-1/4 left-[-10%] w-2/5 h-[70%] bg-gradient-to-br from-[#8B96C8]/35 via-[#6070E0]/20 to-transparent rounded-full blur-3xl animate-[footerLava2_60s_ease-in-out_infinite]" />
        <div className="absolute top-[20%] left-[40%] w-1/3 h-[60%] bg-gradient-to-br from-[#1DB87A]/15 via-[#4F5FE8]/20 to-transparent rounded-full blur-3xl animate-[footerLava3_55s_ease-in-out_infinite]" />
      </div>
      <style jsx>{`
        @keyframes footerLava1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-25px, 20px) scale(1.05); }
          66% { transform: translate(15px, -15px) scale(0.96); }
        }
        @keyframes footerLava2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40% { transform: translate(20px, -20px) scale(1.06); }
          70% { transform: translate(-15px, 25px) scale(0.95); }
        }
        @keyframes footerLava3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -10px) scale(1.04); }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Top: Newsletter centered */}
        <div className="pt-16 pb-10 flex justify-center border-b border-white/10">
          <div className="w-full max-w-md text-center">
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">Stay Updated</h4>
            {subscribed ? (
              <p className="text-sm text-accent" style={{ fontFamily: "var(--font-body)" }}>
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-3 py-2 rounded-lg bg-white/8 border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/25 transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-electric text-white text-sm font-medium hover:bg-electric/90 transition-colors cursor-pointer"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Link columns */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
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

          {/* Comparisons Column 1 */}
          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-5">
              Comparisons
            </h4>
            <ul className="space-y-2.5">
              {comparisons1.map((link) => (
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

          {/* Comparisons Column 2 */}
          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-5 md:invisible">
              Comparisons
            </h4>
            <ul className="space-y-2.5">
              {comparisons2.map((link) => (
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
        </div>

        {/* Giant brand name */}
        <div className="border-t border-white/10 pt-10 pb-4">
          <div
            className="text-[clamp(4rem,14vw,12rem)] font-normal leading-none tracking-tighter text-white/[0.12] select-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Callengo
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pb-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25" style={{ fontFamily: "var(--font-body)" }}>
            &copy; {new Date().getFullYear()} Callengo. All rights reserved. &middot; US-based company
          </p>
          <div className="flex items-center gap-4 text-xs text-white/25" style={{ fontFamily: "var(--font-body)" }}>
            <Link href="/privacy" className="hover:text-white/50 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white/50 transition-colors">Terms</Link>
            <a
              href="https://linkedin.com/company/callengo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/50 transition-colors flex items-center gap-1"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
