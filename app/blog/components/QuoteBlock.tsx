"use client";

interface QuoteBlockProps {
  quote: string;
  source: string;
  sourceUrl?: string;
}

export default function QuoteBlock({ quote, source, sourceUrl }: QuoteBlockProps) {
  return (
    <blockquote className="my-10 border-l-4 border-l-electric bg-electric/5 rounded-r-2xl p-6 md:p-8">
      <p className="text-foreground font-medium text-lg leading-relaxed italic mb-3">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="text-sm text-foreground-secondary">
        {sourceUrl ? (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-electric transition-colors underline decoration-border hover:decoration-electric"
          >
            {source}
          </a>
        ) : (
          <span>{source}</span>
        )}
      </footer>
    </blockquote>
  );
}
