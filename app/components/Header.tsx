"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Database,
  Calendar,
  UserCheck,
  Sparkles,
} from "lucide-react";

const agents = [
  {
    name: "Data Validation",
    description: "Clean and verify your contact database",
    href: "/agents/data-validation",
    icon: Database,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    name: "Appointment Confirmation",
    description: "Reduce no-shows up to 60%",
    href: "/agents/appointment-confirmation",
    icon: Calendar,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    name: "Lead Qualification",
    description: "Filter and qualify leads automatically",
    href: "/agents/lead-qualification",
    icon: UserCheck,
    color: "text-accent-dark",
    bgColor: "bg-accent/10",
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAgentsOpen, setIsAgentsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              {/* Placeholder for logo - replace with actual logo */}
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-semibold tracking-tight">
              <span className="gradient-text">Callengo</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Agents Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsAgentsOpen(true)}
              onMouseLeave={() => setIsAgentsOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 text-foreground-secondary hover:text-foreground transition-colors py-2"
                onClick={() => setIsAgentsOpen(!isAgentsOpen)}
              >
                Agents
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isAgentsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isAgentsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-background rounded-2xl border border-border shadow-xl p-2"
                  >
                    {agents.map((agent) => (
                      <Link
                        key={agent.name}
                        href={agent.href}
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-background-secondary transition-colors group"
                      >
                        <div
                          className={`${agent.bgColor} p-2.5 rounded-xl transition-transform group-hover:scale-110`}
                        >
                          <agent.icon className={`w-5 h-5 ${agent.color}`} />
                        </div>
                        <div>
                          <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {agent.name}
                          </div>
                          <div className="text-sm text-foreground-secondary mt-0.5">
                            {agent.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className="text-foreground-secondary hover:text-foreground transition-colors"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-foreground-secondary hover:text-foreground transition-colors"
            >
              Contact
            </Link>

            <Link
              href="/#pricing"
              className="text-foreground-secondary hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/login"
              className="text-foreground-secondary hover:text-foreground transition-colors font-medium"
            >
              Log in
            </Link>
            <Link href="/signup" className="btn btn-primary">
              Start Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-background-secondary transition-colors"
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
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 space-y-4">
                {/* Agents Section */}
                <div className="space-y-2">
                  <div className="text-sm font-medium text-foreground-tertiary uppercase tracking-wider px-4">
                    AI Agents
                  </div>
                  {agents.map((agent) => (
                    <Link
                      key={agent.name}
                      href={agent.href}
                      className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-background-secondary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className={`${agent.bgColor} p-2 rounded-lg`}>
                        <agent.icon className={`w-4 h-4 ${agent.color}`} />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">
                          {agent.name}
                        </div>
                        <div className="text-sm text-foreground-secondary">
                          {agent.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="h-px bg-border mx-4" />

                {/* Other Links */}
                <div className="space-y-1">
                  <Link
                    href="/about"
                    className="block px-4 py-3 text-foreground hover:bg-background-secondary rounded-xl transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-4 py-3 text-foreground hover:bg-background-secondary rounded-xl transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link
                    href="/#pricing"
                    className="block px-4 py-3 text-foreground hover:bg-background-secondary rounded-xl transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                </div>

                <div className="h-px bg-border mx-4" />

                {/* Mobile CTA */}
                <div className="space-y-3 px-4 pt-2">
                  <Link
                    href="/login"
                    className="block w-full text-center py-3 text-foreground font-medium hover:bg-background-secondary rounded-full transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Log in
                  </Link>
                  <Link
                    href="/signup"
                    className="btn btn-primary w-full justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Start Free
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
