"use client";

import { TrendingUp, TrendingDown, AlertTriangle, DollarSign, Clock, Users, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  up: TrendingUp,
  down: TrendingDown,
  warning: AlertTriangle,
  dollar: DollarSign,
  time: Clock,
  users: Users,
};

interface StatItem {
  value: string;
  label: string;
  icon?: keyof typeof iconMap;
}

interface StatHighlightProps {
  stats: StatItem[];
  source?: string;
  sourceUrl?: string;
}

export default function StatHighlight({
  stats,
  source,
  sourceUrl,
}: StatHighlightProps) {
  return (
    <div className="my-10 rounded-2xl border border-border bg-white p-6 md:p-8 shadow-sm">
      <div
        className={`grid gap-6 ${
          stats.length === 2
            ? "grid-cols-1 sm:grid-cols-2"
            : stats.length === 3
              ? "grid-cols-1 sm:grid-cols-3"
              : "grid-cols-2 sm:grid-cols-4"
        }`}
      >
        {stats.map((stat, i) => {
          const Icon = stat.icon ? iconMap[stat.icon] : null;
          return (
            <div key={i} className="text-center">
              {Icon && (
                <div className="w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-electric" />
                </div>
              )}
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-foreground-secondary leading-snug">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
      {source && (
        <p className="text-xs text-foreground-tertiary text-center mt-4 pt-4 border-t border-border">
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
      )}
    </div>
  );
}
