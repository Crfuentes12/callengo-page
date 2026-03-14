"use client";

import { Lightbulb } from "lucide-react";

interface ProTipProps {
  tip: string;
  label?: string;
}

export default function ProTip({ tip, label = "Pro Tip" }: ProTipProps) {
  return (
    <div className="my-8 flex gap-4 rounded-2xl border border-accent/20 bg-accent/5 p-5 md:p-6">
      <div className="flex-shrink-0 mt-0.5">
        <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center">
          <Lightbulb className="w-4 h-4 text-accent" />
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold text-accent mb-1">{label}</p>
        <p className="text-sm text-foreground leading-relaxed">{tip}</p>
      </div>
    </div>
  );
}
