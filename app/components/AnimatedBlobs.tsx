"use client";

interface AnimatedBlobsProps {
  className?: string;
}

export default function AnimatedBlobs({ className = "" }: AnimatedBlobsProps) {
  return (
    <div
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 ${className}`}
    >
      {/* ── Top-left: Massive electric-indigo wash bleeding in from corner ── */}
      <div
        className="absolute"
        style={{
          width: "min(90vw, 1400px)",
          height: "min(90vw, 1400px)",
          top: "-30%",
          left: "-35%",
          background:
            "conic-gradient(from 120deg, rgba(79, 95, 232, 0.6), rgba(30, 45, 107, 0.5), rgba(139, 150, 200, 0.4), rgba(79, 95, 232, 0.6))",
          filter: "blur(160px)",
          borderRadius: "40% 60% 55% 45% / 55% 40% 60% 45%",
          animation: "lavaLamp1 30s ease-in-out infinite",
        }}
      />

      {/* ── Top-right: Deep indigo + slate sweep ── */}
      <div
        className="absolute"
        style={{
          width: "min(80vw, 1200px)",
          height: "min(80vw, 1200px)",
          top: "-25%",
          right: "-30%",
          background:
            "conic-gradient(from 240deg, rgba(30, 45, 107, 0.55), rgba(139, 150, 200, 0.45), rgba(51, 71, 212, 0.4), rgba(30, 45, 107, 0.55))",
          filter: "blur(150px)",
          borderRadius: "55% 45% 40% 60% / 40% 55% 45% 60%",
          animation: "lavaLamp2 35s ease-in-out infinite",
        }}
      />

      {/* ── Mid-page: Giant center wash spanning full width ── */}
      <div
        className="absolute"
        style={{
          width: "min(120vw, 2000px)",
          height: "min(60vw, 1000px)",
          top: "25%",
          left: "-10%",
          background:
            "conic-gradient(from 60deg, rgba(79, 95, 232, 0.45), rgba(29, 184, 122, 0.12), rgba(139, 150, 200, 0.35), rgba(51, 71, 212, 0.45), rgba(79, 95, 232, 0.45))",
          filter: "blur(180px)",
          borderRadius: "45% 55% 50% 50% / 60% 40% 55% 45%",
          animation: "lavaLamp3 40s ease-in-out infinite",
        }}
      />

      {/* ── Mid-left: Strong edge glow ── */}
      <div
        className="absolute"
        style={{
          width: "min(70vw, 1100px)",
          height: "min(60vw, 900px)",
          top: "40%",
          left: "-30%",
          background:
            "conic-gradient(from 180deg, rgba(30, 45, 107, 0.55), rgba(79, 95, 232, 0.45), rgba(37, 56, 184, 0.5), rgba(30, 45, 107, 0.55))",
          filter: "blur(140px)",
          borderRadius: "60% 40% 45% 55% / 50% 60% 40% 50%",
          animation: "lavaLamp4 28s ease-in-out infinite",
        }}
      />

      {/* ── Mid-right: Electric vivid edge ── */}
      <div
        className="absolute"
        style={{
          width: "min(75vw, 1200px)",
          height: "min(65vw, 1000px)",
          top: "50%",
          right: "-25%",
          background:
            "conic-gradient(from 300deg, rgba(79, 95, 232, 0.5), rgba(139, 150, 200, 0.4), rgba(30, 45, 107, 0.45), rgba(79, 95, 232, 0.5))",
          filter: "blur(160px)",
          borderRadius: "50% 50% 60% 40% / 45% 55% 50% 50%",
          animation: "lavaLamp5 33s ease-in-out infinite",
        }}
      />

      {/* ── Lower: Warm electric + green accent ── */}
      <div
        className="absolute"
        style={{
          width: "min(100vw, 1600px)",
          height: "min(60vw, 1000px)",
          top: "65%",
          left: "-15%",
          background:
            "conic-gradient(from 150deg, rgba(79, 95, 232, 0.48), rgba(29, 184, 122, 0.15), rgba(51, 71, 212, 0.42), rgba(139, 150, 200, 0.35), rgba(79, 95, 232, 0.48))",
          filter: "blur(170px)",
          borderRadius: "40% 60% 50% 50% / 55% 45% 55% 45%",
          animation: "lavaLamp1 36s ease-in-out infinite reverse",
        }}
      />

      {/* ── Bottom-right: Strong indigo mass ── */}
      <div
        className="absolute"
        style={{
          width: "min(80vw, 1300px)",
          height: "min(70vw, 1100px)",
          top: "75%",
          right: "-20%",
          background:
            "conic-gradient(from 0deg, rgba(30, 45, 107, 0.6), rgba(79, 95, 232, 0.45), rgba(37, 56, 184, 0.5), rgba(30, 45, 107, 0.6))",
          filter: "blur(150px)",
          borderRadius: "55% 45% 50% 50% / 45% 55% 45% 55%",
          animation: "lavaLamp2 32s ease-in-out infinite reverse",
        }}
      />

      {/* ── Bottom: Broad floor wash ── */}
      <div
        className="absolute"
        style={{
          width: "min(110vw, 1800px)",
          height: "min(50vw, 800px)",
          top: "88%",
          left: "0%",
          background:
            "conic-gradient(from 90deg, rgba(139, 150, 200, 0.45), rgba(79, 95, 232, 0.4), rgba(30, 45, 107, 0.35), rgba(139, 150, 200, 0.45))",
          filter: "blur(170px)",
          borderRadius: "45% 55% 45% 55% / 50% 50% 50% 50%",
          animation: "lavaLamp3 38s ease-in-out infinite reverse",
        }}
      />
    </div>
  );
}
