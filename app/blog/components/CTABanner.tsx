"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  heading: string;
  text: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "electric" | "accent" | "dark";
}

export default function CTABanner({
  heading,
  text,
  primaryLabel = "Start Free Trial",
  primaryHref = "https://app.callengo.com/sign-up",
  secondaryLabel,
  secondaryHref,
  variant = "electric",
}: CTABannerProps) {
  const bgStyles = {
    electric: "gradient-bg",
    accent: "bg-gradient-to-br from-accent/90 via-accent to-emerald-600",
    dark: "bg-gradient-to-br from-deep-indigo via-ink to-void",
  };

  return (
    <div
      className={`my-10 ${bgStyles[variant]} rounded-2xl p-8 md:p-10 relative overflow-hidden`}
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent rounded-2xl" />
      <div className="relative z-10">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
          {heading}
        </h3>
        <p className="text-white/70 mb-6 max-w-lg text-sm leading-relaxed">
          {text}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-deep-indigo text-sm font-semibold rounded-xl hover:bg-white/90 transition-colors"
          >
            {primaryLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-white/30 text-white text-sm font-medium rounded-xl hover:bg-white/10 transition-colors"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
