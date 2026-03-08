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
  Plug,
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
          ? "bg-white/95 backdrop-blur-xl border-b border-border"
          : "bg-white/60 backdrop-blur-sm"
      }`}
      style={{
        boxShadow: isScrolled ? "var(--shadow-sm)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/callengo-logo.svg"
                alt="Callengo Logo"
                width={80}
                height={50}
                className="w-10 h-10 transition-transform group-hover:scale-105"
              />
            </div>
            <span className="text-2xl font-bold tracking-tight gradient-text">
              Callengo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsAgentsOpen(true)}
              onMouseLeave={() => setIsAgentsOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 text-foreground-secondary hover:text-foreground transition-colors text-sm font-medium py-2"
                onClick={() => setIsAgentsOpen(!isAgentsOpen)}
              >
                Solutions
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isAgentsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isAgentsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-white rounded-2xl border border-border p-2"
                    style={{ boxShadow: "var(--shadow-xl)" }}
                  >
                    {agents.map((agent) => {
                      const Icon = agent.icon;
                      return (
                        <Link
                          key={agent.name}
                          href={agent.href}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-background-secondary transition-all group"
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
                        </Link>
                      );
                    })}
                    <div className="h-px bg-border my-1" />
                    <Link
                      href="/integrations"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-background-secondary transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-secondary/8 flex items-center justify-center shrink-0 group-hover:bg-secondary/12 transition-colors">
                        <Plug className="w-5 h-5 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-foreground text-sm">
                          Integrations
                        </div>
                        <div className="text-xs text-foreground-tertiary mt-0.5">
                          16+ apps and services
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-foreground-tertiary group-hover:text-secondary transition-colors" />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/pricing"
              className="text-foreground-secondary hover:text-foreground transition-colors text-sm font-medium py-2"
            >
              Pricing
            </Link>

            <Link
              href="/integrations"
              className="text-foreground-secondary hover:text-foreground transition-colors text-sm font-medium py-2"
            >
              Integrations
            </Link>

            <Link
              href="/about"
              className="text-foreground-secondary hover:text-foreground transition-colors text-sm font-medium py-2"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-foreground-secondary hover:text-foreground transition-colors text-sm font-medium py-2"
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/login"
              className="text-foreground-secondary hover:text-foreground transition-colors text-sm font-medium"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="btn btn-primary rounded-full text-sm px-6 py-2.5"
            >
              Get Started Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
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
                        <div className="font-medium">{agent.name}</div>
                        <div className="text-sm text-foreground-tertiary">
                          {agent.description}
                        </div>
                      </div>
                    </Link>
                  );
                })}

                <div className="h-px bg-border my-2" />

                <Link
                  href="/pricing"
                  className="block px-4 py-3 text-foreground hover:bg-background-secondary rounded-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/integrations"
                  className="block px-4 py-3 text-foreground hover:bg-background-secondary rounded-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Integrations
                </Link>
                <Link
                  href="/about"
                  className="block px-4 py-3 text-foreground hover:bg-background-secondary rounded-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-3 text-foreground hover:bg-background-secondary rounded-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                <div className="h-px bg-border my-2" />

                <div className="px-4 pt-2 space-y-3">
                  <Link
                    href="/login"
                    className="block w-full text-center py-3 text-foreground-secondary font-medium hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Log in
                  </Link>
                  <Link
                    href="/signup"
                    className="block w-full text-center py-3 text-white font-semibold rounded-full btn-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started Free
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
