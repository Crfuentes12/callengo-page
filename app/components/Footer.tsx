"use client";

import Link from "next/link";
import { Sparkles, Twitter, Linkedin, Github, Mail } from "lucide-react";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { name: "Data Validation Agent", href: "/agents/data-validation" },
      { name: "Appointment Confirmation", href: "/agents/appointment-confirmation" },
      { name: "Lead Qualification", href: "/agents/lead-qualification" },
      { name: "Pricing", href: "/#pricing" },
      { name: "Integrations", href: "/integrations" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Press", href: "/press" },
      { name: "Contact", href: "/contact" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Documentation", href: "/docs" },
      { name: "API Reference", href: "/api" },
      { name: "Help Center", href: "/help" },
      { name: "Status", href: "/status" },
      { name: "Changelog", href: "/changelog" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "GDPR", href: "/gdpr" },
      { name: "Security", href: "/security" },
    ],
  },
};

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/callengo", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/company/callengo", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/callengo", icon: Github },
  { name: "Email", href: "mailto:hello@callengo.com", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-semibold">Callengo</span>
            </Link>

            <p className="text-white/60 mb-6 max-w-xs leading-relaxed">
              AI-powered phone calls that scale your outreach without scaling
              your headcount. Verify data, confirm appointments, and qualify
              leads 24/7.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors text-sm"
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
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Callengo. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-white/40">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
