"use client";

import { BookOpen } from "lucide-react";

interface SourceCalloutProps {
  text: string;
  source: string;
  sourceUrl?: string;
  variant?: "info" | "warning" | "highlight";
}

export default function SourceCallout({
  text,
  source,
  sourceUrl,
  variant = "info",
}: SourceCalloutProps) {
  const styles = {
    info: "border-l-electric/40 bg-electric/5",
    warning: "border-l-amber-400 bg-amber-50",
    highlight: "border-l-accent bg-accent/5",
  };

  return (
    <div className={`my-8 border-l-4 ${styles[variant]} rounded-r-xl p-5`}>
      <div className="flex gap-3">
        <BookOpen className="w-5 h-5 text-foreground-tertiary flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-foreground leading-relaxed">{text}</p>
          <p className="text-xs text-foreground-tertiary mt-2">
            Source:{" "}
            {sourceUrl ? (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground-secondary transition-colors"
              >
                {source}
              </a>
            ) : (
              source
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
