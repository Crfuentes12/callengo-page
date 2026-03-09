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

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAgentsOpen, setIsAgentsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
      style={{
        boxShadow: isScrolled ? "0 1px 3px rgba(0,0,0,0.04)" : "none",
      }}
    >
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
                Solutions
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
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[340px] bg-white rounded-xl border border-border p-2"
                    style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)" }}
                  >
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
                  Solutions
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
  );
}
