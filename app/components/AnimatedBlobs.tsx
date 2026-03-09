"use client";

interface AnimatedBlobsProps {
  className?: string;
}

export default function AnimatedBlobs({ className = "" }: AnimatedBlobsProps) {
  return (
    <div
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 ${className}`}
    >
      {/* Blob 1 — Big electric blue, top-left */}
      <div
        className="absolute rounded-full"
        style={{
          width: 650,
          height: 650,
          top: "0%",
          left: "-5%",
          background:
            "radial-gradient(circle, rgba(79, 95, 232, 0.35) 0%, rgba(79, 95, 232, 0.15) 35%, rgba(79, 95, 232, 0.04) 60%, transparent 75%)",
          filter: "blur(50px)",
          animation: "lavaLamp1 30s ease-in-out infinite",
        }}
      />

      {/* Blob 2 — Deep indigo, top-right corner */}
      <div
        className="absolute rounded-full"
        style={{
          width: 550,
          height: 550,
          top: "5%",
          right: "-8%",
          background:
            "radial-gradient(circle, rgba(30, 45, 107, 0.40) 0%, rgba(30, 45, 107, 0.18) 35%, rgba(30, 45, 107, 0.05) 60%, transparent 75%)",
          filter: "blur(45px)",
          animation: "lavaLamp2 35s ease-in-out infinite",
        }}
      />

      {/* Blob 3 — Slate indigo, large mid-page presence */}
      <div
        className="absolute rounded-full"
        style={{
          width: 800,
          height: 800,
          top: "22%",
          left: "20%",
          background:
            "radial-gradient(circle, rgba(139, 150, 200, 0.30) 0%, rgba(139, 150, 200, 0.12) 35%, rgba(139, 150, 200, 0.03) 60%, transparent 75%)",
          filter: "blur(55px)",
          animation: "lavaLamp3 40s ease-in-out infinite",
        }}
      />

      {/* Blob 4 — Electric purple, mid-left, warm accent */}
      <div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          top: "40%",
          left: "-10%",
          background:
            "radial-gradient(circle, rgba(79, 95, 232, 0.32) 0%, rgba(51, 71, 212, 0.14) 35%, transparent 70%)",
          filter: "blur(40px)",
          animation: "lavaLamp4 28s ease-in-out infinite",
        }}
      />

      {/* Blob 5 — Navy glow, mid-right */}
      <div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          top: "48%",
          right: "-2%",
          background:
            "radial-gradient(circle, rgba(37, 56, 184, 0.28) 0%, rgba(37, 56, 184, 0.10) 40%, transparent 70%)",
          filter: "blur(50px)",
          animation: "lavaLamp5 33s ease-in-out infinite",
        }}
      />

      {/* Blob 6 — Electric teal accent, lower area */}
      <div
        className="absolute rounded-full"
        style={{
          width: 550,
          height: 550,
          top: "65%",
          left: "10%",
          background:
            "radial-gradient(circle, rgba(79, 95, 232, 0.30) 0%, rgba(29, 184, 122, 0.10) 40%, transparent 70%)",
          filter: "blur(45px)",
          animation: "lavaLamp1 36s ease-in-out infinite reverse",
        }}
      />

      {/* Blob 7 — Deep indigo, bottom-right */}
      <div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          top: "78%",
          right: "5%",
          background:
            "radial-gradient(circle, rgba(30, 45, 107, 0.35) 0%, rgba(30, 45, 107, 0.12) 40%, transparent 70%)",
          filter: "blur(40px)",
          animation: "lavaLamp2 32s ease-in-out infinite reverse",
        }}
      />

      {/* Blob 8 — Subtle slate shimmer, very bottom */}
      <div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          top: "88%",
          left: "30%",
          background:
            "radial-gradient(circle, rgba(139, 150, 200, 0.25) 0%, rgba(79, 95, 232, 0.08) 40%, transparent 70%)",
          filter: "blur(55px)",
          animation: "lavaLamp3 38s ease-in-out infinite reverse",
        }}
      />
    </div>
  );
}
