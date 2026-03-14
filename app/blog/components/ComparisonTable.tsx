"use client";

interface ComparisonTableProps {
  headers: string[];
  rows: string[][];
  highlightFirst?: boolean;
  caption?: string;
}

export default function ComparisonTable({
  headers,
  rows,
  highlightFirst = false,
  caption,
}: ComparisonTableProps) {
  return (
    <div className="my-8 overflow-x-auto">
      <table className="w-full border-collapse rounded-xl overflow-hidden">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                className="text-left px-4 py-3 bg-deep-indigo text-white text-sm font-semibold"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={
                i % 2 === 0 ? "bg-white" : "bg-background-secondary/50"
              }
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 border-b border-border text-sm ${
                    j === 0 && highlightFirst
                      ? "font-semibold text-foreground"
                      : "text-foreground-secondary"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {caption && (
        <p className="text-xs text-foreground-tertiary mt-2 text-center">
          {caption}
        </p>
      )}
    </div>
  );
}
