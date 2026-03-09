"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Database,
  Calendar,
  Users,
  ArrowRight,
} from "lucide-react";

const agents = [
  {
    name: "Data Validation",
    description: "Clean your contact database automatically",
    href: "/agents/data-validation",
    icon: Database,
  },
  {
    name: "Appointment Confirmation",
    description: "Reduce no-shows by up to 60%",
    href: "/agents/appointment-confirmation",
    icon: Calendar,
  },
  {
    name: "Lead Qualification",
    description: "Qualify leads before sales touches them",
    href: "/agents/lead-qualification",
    icon: Users,
  },
];

const headerIntegrations = [
  { name: "HubSpot", logo: "/integrations/hubspot.png", href: "/integrations/hubspot" },
  { name: "Salesforce", logo: "/integrations/salesforce.png", href: "/integrations/salesforce" },
  { name: "Google Calendar", logo: "/integrations/calendar.png", href: "/integrations/google-calendar" },
  { name: "Zoom", logo: "/integrations/zoom.png", href: "/integrations/zoom" },
  { name: "Slack", logo: "/integrations/slack.png", href: "/integrations/slack" },
  { name: "Stripe", logo: "/integrations/stripe.png", href: "/integrations/stripe" },
  { name: "Pipedrive", logo: "/integrations/pipedrive.png", href: "/integrations/pipedrive" },
  { name: "Google Sheets", logo: "/integrations/sheets.png", href: "/integrations/google-sheets" },
];

export default function Header() {
  const [isAgentsOpen, setIsAgentsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCta(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Static header - stays at top, doesn't follow scroll */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <nav className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/callengo-logo.svg"
                alt="Callengo Logo"
                width={36}
                height={36}
                className="w-9 h-9 transition-transform group-hover:scale-105"
              />
              <span
                className="text-xl font-semibold tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Callengo
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsAgentsOpen(true)}
                onMouseLeave={() => setIsAgentsOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-foreground-secondary hover:text-foreground transition-colors text-sm font-medium px-4 py-2 rounded-lg hover:bg-background-secondary"
                  onClick={() => setIsAgentsOpen(!isAgentsOpen)}
                >
                  Product
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isAgentsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isAgentsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-full left-0 pt-2 w-[620px]"
                    >
                      <div
                        className="bg-white rounded-xl border border-border overflow-hidden"
                        style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)" }}
                      >
                        <div className="flex">
                          {/* Left: Agents */}
                          <div className="flex-1 p-3 border-r border-border">
                            <div className="px-3 py-2 text-[10px] font-semibold text-foreground-tertiary uppercase tracking-wider">
                              AI Agents
                            </div>
                            {agents.map((agent) => {
                              const Icon = agent.icon;
                              return (
                                <Link
                                  key={agent.name}
                                  href={agent.href}
                                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-background-secondary transition-all group"
                                >
                                  <div className="w-10 h-10 rounded-lg bg-background-secondary flex items-center justify-center shrink-0 group-hover:bg-background-tertiary transition-colors">
                                    <Icon className="w-5 h-5 text-secondary" />
                                  </div>
                                  <div>
                                    <div className="font-semibold text-foreground text-sm">
                                      {agent.name}
                                    </div>
                                    <div className="text-xs text-foreground-tertiary mt-0.5 leading-relaxed">
                                      {agent.description}
                                    </div>
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-foreground-tertiary opacity-0 group-hover:opacity-100 transition-opacity ml-auto mt-1" />
                                </Link>
                              );
                            })}
                          </div>

                          {/* Right: Integrations */}
                          <div className="w-[240px] p-3 bg-background-secondary/50">
                            <div className="px-3 py-2 text-[10px] font-semibold text-foreground-tertiary uppercase tracking-wider">
                              Integrations
                            </div>
                            <div className="grid grid-cols-4 gap-2 px-2 py-2">
                              {headerIntegrations.map((intg) => (
                                <Link
                                  key={intg.name}
                                  href={intg.href}
                                  className="group flex flex-col items-center gap-1.5 p-2 rounded-lg hover:bg-white transition-colors"
                                  title={intg.name}
                                >
                                  <div className="w-9 h-9 rounded-lg bg-white border border-border/50 flex items-center justify-center group-hover:shadow-sm transition-shadow overflow-hidden">
                                    <Image src={intg.logo} alt={intg.name} width={28} height={28} className="object-contain" />
                                  </div>
                                  <span className="text-[9px] text-foreground-tertiary text-center leading-tight truncate w-full group-hover:text-foreground transition-colors">
                                    {intg.name}
                                  </span>
                                </Link>
                              ))}
                            </div>
                            <Link
                              href="/integrations"
                              className="flex items-center justify-center gap-1.5 mx-2 mt-1 px-3 py-2 rounded-lg text-xs font-medium text-electric hover:bg-white transition-colors"
                            >
                              View all 16+ integrations
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/pricing"
                className="text-foreground-secondary hover:text-foreground transition-colors text-sm font-medium px-4 py-2 rounded-lg hover:bg-background-secondary"
              >
                Pricing
              </Link>

              <Link
                href="/about"
                className="text-foreground-secondary hover:text-foreground transition-colors text-sm font-medium px-4 py-2 rounded-lg hover:bg-background-secondary"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-foreground-secondary hover:text-foreground transition-colors text-sm font-medium px-4 py-2 rounded-lg hover:bg-background-secondary"
              >
                Contact
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://app.callengo.com/auth/login"
                className="text-foreground-secondary hover:text-foreground transition-colors text-sm font-medium px-4 py-2"
              >
                Sign in
              </a>
              <a
                href="https://app.callengo.com/auth/signup"
                className="btn btn-primary text-sm px-5 py-2.5 rounded-lg"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-background-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden overflow-hidden bg-white border-t border-border"
              >
                <div className="py-4 space-y-1">
                  <div className="px-4 py-2 text-xs font-semibold text-foreground-tertiary uppercase tracking-wider">
                    Product
                  </div>
                  {agents.map((agent) => {
                    const Icon = agent.icon;
                    return (
                      <Link
                        key={agent.name}
                        href={agent.href}
                        className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-background-secondary rounded-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="w-9 h-9 rounded-lg bg-background-secondary flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-secondary" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{agent.name}</div>
                          <div className="text-xs text-foreground-tertiary">
                            {agent.description}
                          </div>
                        </div>
                      </Link>
                    );
                  })}

                  <div className="px-4 py-2 text-xs font-semibold text-foreground-tertiary uppercase tracking-wider">
                    Integrations
                  </div>
                  <div className="px-4 flex flex-wrap gap-2 pb-2">
                    {headerIntegrations.slice(0, 6).map((intg) => (
                      <Link
                        key={intg.name}
                        href={intg.href}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background-secondary hover:bg-background-tertiary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Image src={intg.logo} alt={intg.name} width={20} height={20} className="object-contain" />
                        <span className="text-xs font-medium text-foreground">{intg.name}</span>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/integrations"
                    className="block px-4 py-2 text-xs font-medium text-electric hover:underline"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    View all integrations →
                  </Link>

                  <div className="h-px bg-border my-2" />

                  <Link
                    href="/pricing"
                    className="block px-4 py-3 text-foreground hover:bg-background-secondary rounded-lg font-medium text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/about"
                    className="block px-4 py-3 text-foreground hover:bg-background-secondary rounded-lg font-medium text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-4 py-3 text-foreground hover:bg-background-secondary rounded-lg font-medium text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>

                  <div className="h-px bg-border my-2" />

                  <div className="px-4 pt-2 space-y-3">
                    <a
                      href="https://app.callengo.com/auth/login"
                      className="block w-full text-center py-2.5 text-foreground-secondary font-medium text-sm hover:text-foreground transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign in
                    </a>
                    <a
                      href="https://app.callengo.com/auth/signup"
                      className="block w-full text-center py-2.5 text-white font-semibold text-sm rounded-lg btn-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Get Started Free
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Floating Get Started button - follows scroll */}
      <AnimatePresence>
        {showFloatingCta && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-4 right-4 md:right-6 z-50"
          >
            <a
              href="https://app.callengo.com/auth/signup"
              className="btn btn-primary text-sm px-5 py-2.5 rounded-full shadow-lg"
              style={{
                boxShadow: "0 8px 32px rgba(79, 95, 232, 0.3), 0 2px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
