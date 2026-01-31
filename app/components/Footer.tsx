"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { name: "Data Validation", href: "/agents/data-validation" },
      { name: "Appointment Confirmation", href: "/agents/appointment-confirmation" },
      { name: "Lead Qualification", href: "/agents/lead-qualification" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Pricing", href: "/pricing" },
      { name: "Contact", href: "/contact" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Documentation", href: "/docs" },
      { name: "Help Center", href: "/help" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Legal", href: "/legal" },
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/callengo-logo-white.png"
                alt="Callengo Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-2xl font-semibold">Callengo</span>
            </Link>

            <p className="text-gray-400 mb-6 max-w-xs leading-relaxed">
              Stop losing revenue to no-shows, bad data, and unqualified leads. Let your team focus on closing deals.
            </p>

            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/callengo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4 text-sm">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Callengo. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
