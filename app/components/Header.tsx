"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Database, Calendar, Users } from "lucide-react";

const agents = [
  {
    name: "Data Validation",
    description: "Clean your contact database automatically",
    href: "/agents/data-validation",
    icon: Database,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    name: "Appointment Confirmation",
    description: "Reduce no-shows by up to 60%",
    href: "/agents/appointment-confirmation",
    icon: Calendar,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    name: "Lead Qualification",
    description: "Qualify leads before sales touches them",
    href: "/agents/lead-qualification",
    icon: Users,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
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
          ? "bg-white/98 backdrop-blur-xl shadow-sm border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/callengo-logo.png"
                alt="Callengo Logo"
                width={40}
                height={40}
                className="w-10 h-10 transition-transform group-hover:scale-105"
              />
            </div>
            <span
              className="text-2xl font-bold tracking-tight"
              style={{
                background: "linear-gradient(135deg, #173657 0%, #403d8a 50%, #bb2fb8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
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
                className="flex items-center gap-1.5 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium py-2"
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
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50 p-3"
                  >
                    {agents.map((agent) => {
                      const Icon = agent.icon;
                      return (
                        <Link
                          key={agent.name}
                          href={agent.href}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all group"
                        >
                          <div className={`w-10 h-10 rounded-lg ${agent.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                            <Icon className={`w-5 h-5 ${agent.color}`} />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 text-sm">
                              {agent.name}
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                              {agent.description}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/pricing"
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium py-2"
            >
              Pricing
            </Link>

            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium py-2"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium py-2"
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/login"
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-full transition-all hover:shadow-lg hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #173657 0%, #403d8a 50%, #bb2fb8 100%)",
              }}
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
                <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Solutions
                </div>
                {agents.map((agent) => {
                  const Icon = agent.icon;
                  return (
                    <Link
                      key={agent.name}
                      href={agent.href}
                      className="flex items-center gap-3 px-4 py-3 text-dark hover:bg-gray-50 rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className={`w-9 h-9 rounded-lg ${agent.bgColor} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-4 h-4 ${agent.color}`} />
                      </div>
                      <div>
                        <div className="font-medium">{agent.name}</div>
                        <div className="text-sm text-gray-500">{agent.description}</div>
                      </div>
                    </Link>
                  );
                })}

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

                <div className="px-4 pt-2 space-y-3">
                  <Link
                    href="/login"
                    className="block w-full text-center py-3 text-gray-700 font-medium hover:text-gray-900 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Log in
                  </Link>
                  <Link
                    href="/signup"
                    className="block w-full text-center py-3 text-white font-semibold rounded-full"
                    style={{
                      background: "linear-gradient(135deg, #173657 0%, #403d8a 50%, #bb2fb8 100%)",
                    }}
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
