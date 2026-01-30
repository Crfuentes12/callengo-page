"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const agents = [
  {
    name: "Data Validation",
    description: "Clean your contact database automatically",
    href: "/agents/data-validation",
  },
  {
    name: "Appointment Confirmation",
    description: "Reduce no-shows by up to 60%",
    href: "/agents/appointment-confirmation",
  },
  {
    name: "Lead Qualification",
    description: "Qualify leads before sales touches them",
    href: "/agents/lead-qualification",
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
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {/* Logo with gradient */}
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-semibold gradient-text">Callengo</span>
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
                className="flex items-center gap-1 text-gray-600 hover:text-dark transition-colors text-sm font-medium"
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
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl border border-gray-200 shadow-lg p-2"
                  >
                    {agents.map((agent) => (
                      <Link
                        key={agent.name}
                        href={agent.href}
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="font-medium text-dark text-sm">
                          {agent.name}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">
                          {agent.description}
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/pricing"
              className="text-gray-600 hover:text-dark transition-colors text-sm font-medium"
            >
              Pricing
            </Link>

            <Link
              href="/about"
              className="text-gray-600 hover:text-dark transition-colors text-sm font-medium"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-gray-600 hover:text-dark transition-colors text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className="text-gray-600 hover:text-dark transition-colors text-sm font-medium px-4 py-2"
            >
              Log in
            </Link>
            <Link href="/signup" className="btn btn-primary text-sm">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-dark" />
            ) : (
              <Menu className="w-6 h-6 text-dark" />
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
              className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="py-4 space-y-1">
                <div className="px-2 py-2 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  AI Agents
                </div>
                {agents.map((agent) => (
                  <Link
                    key={agent.name}
                    href={agent.href}
                    className="block px-4 py-3 text-dark hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="font-medium">{agent.name}</div>
                    <div className="text-sm text-gray-500">{agent.description}</div>
                  </Link>
                ))}

                <div className="h-px bg-gray-100 my-2" />

                <Link
                  href="/pricing"
                  className="block px-4 py-3 text-dark hover:bg-gray-50 rounded-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/about"
                  className="block px-4 py-3 text-dark hover:bg-gray-50 rounded-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-3 text-dark hover:bg-gray-50 rounded-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                <div className="h-px bg-gray-100 my-2" />

                <div className="px-4 pt-2 space-y-2">
                  <Link
                    href="/login"
                    className="block w-full text-center py-3 text-dark font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Log in
                  </Link>
                  <Link
                    href="/signup"
                    className="btn btn-primary w-full justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
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
