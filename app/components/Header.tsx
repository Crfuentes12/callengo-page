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
  BookOpen,
  HelpCircle,
  Lightbulb,
  FileText,
  Wrench,
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
  { name: "Pipedrive", logo: "/integrations/pipedrive.png", href: "/integrations/pipedrive" },
  { name: "Zoho CRM", logo: "/integrations/zoho.png", href: "/integrations/zoho-crm" },
  { name: "Outlook", logo: "/integrations/outlook.png", href: "/integrations/outlook-calendar" },
  { name: "Google Calendar", logo: "/integrations/calendar.png", href: "/integrations/google-calendar" },
];

const resourceLinks = [
  {
    name: "Documentation",
    description: "Setup guides, API reference & tutorials",
    href: "/docs",
    icon: BookOpen,
    featured: true,
  },
  {
    name: "Help Center",
    description: "FAQs and troubleshooting guides",
    href: "/help",
    icon: HelpCircle,
  },
  {
    name: "Quick Start",
    description: "Get up and running in 5 minutes",
    href: "/help/quick-start",
    icon: Lightbulb,
  },
  {
    name: "Blog & Articles",
    description: "Industry insights and product updates",
    href: "/blog",
    icon: FileText,
  },
  {
    name: "Free Tools",
    description: "Phone validator, ROI calculator & more",
    href: "/free-tools",
    icon: Wrench,
  },
];

export default function Header() {
  const [isAgentsOpen, setIsAgentsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
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
                      className="absolute top-full left-0 pt-2 w-[640px]"
                    >
                      <div
                        className="bg-white rounded-xl border border-border overflow-hidden"
                        style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)" }}
                      >
                        <div className="grid grid-cols-2">
                          {/* Left: Agents */}
                          <div className="p-3">
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

                          {/* Right: Integrations featured card */}
                          <div className="p-3">
                            <Link
                              href="/integrations"
                              className="group block h-full rounded-xl bg-electric/[0.06] border border-electric/15 p-5 relative overflow-hidden hover:bg-electric/[0.1] transition-colors"
                            >
                              {/* Background grid icon */}
                              <svg className="absolute bottom-2 right-2 w-20 h-20 text-electric/[0.06]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
                                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                                <rect x="14" y="14" width="7" height="7" rx="1.5" />
                              </svg>
                              <div className="relative z-10">
                                <div className="grid grid-cols-3 gap-2 mb-4">
                                  {headerIntegrations.map((intg) => (
                                    <div
                                      key={intg.name}
                                      className="w-10 h-10 rounded-lg bg-white border border-border/50 flex items-center justify-center overflow-hidden shadow-sm"
                                      title={intg.name}
                                    >
                                      <Image src={intg.logo} alt={intg.name} width={26} height={26} className="object-contain" />
                                    </div>
                                  ))}
                                </div>
                                <div className="font-semibold text-electric text-base mb-1">Integrations</div>
                                <p className="text-xs text-foreground-secondary leading-relaxed mb-3">
                                  Connect with your favorite CRM, calendar & communication tools.
                                </p>
                                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-electric group-hover:gap-2.5 transition-all">
                                  View all 16+ integrations
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                              </div>
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

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-foreground-secondary hover:text-foreground transition-colors text-sm font-medium px-4 py-2 rounded-lg hover:bg-background-secondary"
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                >
                  Resources
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isResourcesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isResourcesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[520px]"
                    >
                      <div
                        className="bg-white rounded-xl border border-border overflow-hidden"
                        style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)" }}
                      >
                        <div className="grid grid-cols-2">
                          {/* Left: Resource links */}
                          <div className="p-3">
                            <div className="px-3 py-2 text-[10px] font-semibold text-foreground-tertiary uppercase tracking-wider">
                              Resources
                            </div>
                            {resourceLinks.filter((item) => !item.featured).map((item) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-background-secondary transition-all group"
                                >
                                  <div className="w-9 h-9 rounded-lg bg-background-secondary flex items-center justify-center shrink-0 group-hover:bg-background-tertiary transition-colors">
                                    <Icon className="w-4.5 h-4.5 text-secondary" />
                                  </div>
                                  <div>
                                    <div className="font-semibold text-foreground text-sm">{item.name}</div>
                                    <div className="text-xs text-foreground-tertiary mt-0.5 leading-relaxed">{item.description}</div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                          {/* Right: Documentation featured card */}
                          <div className="p-3">
                            <Link
                              href="/docs"
                              className="group block h-full rounded-xl bg-electric/[0.06] border border-electric/15 p-5 relative overflow-hidden hover:bg-electric/[0.1] transition-colors"
                            >
                              {/* Background lightbulb icon */}
                              <Lightbulb className="absolute bottom-3 right-3 w-16 h-16 text-electric/[0.08]" strokeWidth={1} />
                              <div className="relative z-10">
                                <div className="w-10 h-10 rounded-xl bg-electric/15 flex items-center justify-center mb-4">
                                  <BookOpen className="w-5 h-5 text-electric" />
                                </div>
                                <div className="font-semibold text-electric text-base mb-1">Documentation</div>
                                <p className="text-xs text-foreground-secondary leading-relaxed mb-4">
                                  Setup guides, API reference & tutorials to get the most out of Callengo.
                                </p>
                                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-electric group-hover:gap-2.5 transition-all">
                                  Browse docs
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

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

                  <div className="px-4 py-2 text-xs font-semibold text-foreground-tertiary uppercase tracking-wider">
                    Resources
                  </div>
                  {resourceLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-2.5 text-foreground hover:bg-background-secondary rounded-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          item.featured ? "bg-electric/10" : "bg-background-secondary"
                        }`}>
                          <Icon className={`w-4 h-4 ${item.featured ? "text-electric" : "text-secondary"}`} />
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${item.featured ? "text-electric" : ""}`}>{item.name}</div>
                          <div className="text-[11px] text-foreground-tertiary">{item.description}</div>
                        </div>
                      </Link>
                    );
                  })}

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
