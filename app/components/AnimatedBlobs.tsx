"use client";

interface AnimatedBlobsProps {
  className?: string;
}

export default function AnimatedBlobs({ className = "" }: AnimatedBlobsProps) {
  return (
    <div
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 ${className}`}
    >
      {/* ── Blob 1: Electric + Indigo mega wash, top-left ── */}
      <div
        className="absolute"
        style={{
          width: "70vw",
          height: "70vw",
          maxWidth: 1200,
          maxHeight: 1200,
          top: "-10%",
          left: "-20%",
          background:
            "conic-gradient(from 120deg, rgba(79, 95, 232, 0.55), rgba(30, 45, 107, 0.45), rgba(139, 150, 200, 0.35), rgba(79, 95, 232, 0.55))",
          filter: "blur(120px)",
          borderRadius: "40% 60% 55% 45% / 55% 40% 60% 45%",
          animation: "lavaLamp1 30s ease-in-out infinite",
        }}
      />

      {/* ── Blob 2: Indigo + Slate sweep, top-right ── */}
      <div
        className="absolute"
        style={{
          width: "55vw",
          height: "55vw",
          maxWidth: 900,
          maxHeight: 900,
          top: "-5%",
          right: "-15%",
          background:
            "conic-gradient(from 240deg, rgba(30, 45, 107, 0.50), rgba(139, 150, 200, 0.40), rgba(51, 71, 212, 0.35), rgba(30, 45, 107, 0.50))",
          filter: "blur(110px)",
          borderRadius: "55% 45% 40% 60% / 40% 55% 45% 60%",
          animation: "lavaLamp2 35s ease-in-out infinite",
        }}
      />

      {/* ── Blob 3: Big mid-page presence, electric + teal ── */}
      <div
        className="absolute"
        style={{
          width: "80vw",
          height: "60vw",
          maxWidth: 1400,
          maxHeight: 1000,
          top: "20%",
          left: "10%",
          background:
            "conic-gradient(from 60deg, rgba(79, 95, 232, 0.40), rgba(29, 184, 122, 0.15), rgba(139, 150, 200, 0.35), rgba(51, 71, 212, 0.40), rgba(79, 95, 232, 0.40))",
          filter: "blur(140px)",
          borderRadius: "45% 55% 50% 50% / 60% 40% 55% 45%",
          animation: "lavaLamp3 40s ease-in-out infinite",
        }}
      />

      {/* ── Blob 4: Deep navy glow, mid-left ── */}
      <div
        className="absolute"
        style={{
          width: "50vw",
          height: "45vw",
          maxWidth: 800,
          maxHeight: 700,
          top: "40%",
          left: "-15%",
          background:
            "conic-gradient(from 180deg, rgba(30, 45, 107, 0.50), rgba(79, 95, 232, 0.40), rgba(37, 56, 184, 0.45), rgba(30, 45, 107, 0.50))",
          filter: "blur(100px)",
          borderRadius: "60% 40% 45% 55% / 50% 60% 40% 50%",
          animation: "lavaLamp4 28s ease-in-out infinite",
        }}
      />

      {/* ── Blob 5: Electric vivid, mid-right ── */}
      <div
        className="absolute"
        style={{
          width: "55vw",
          height: "50vw",
          maxWidth: 900,
          maxHeight: 800,
          top: "45%",
          right: "-10%",
          background:
            "conic-gradient(from 300deg, rgba(79, 95, 232, 0.45), rgba(139, 150, 200, 0.35), rgba(30, 45, 107, 0.40), rgba(79, 95, 232, 0.45))",
          filter: "blur(120px)",
          borderRadius: "50% 50% 60% 40% / 45% 55% 50% 50%",
          animation: "lavaLamp5 33s ease-in-out infinite",
        }}
      />

      {/* ── Blob 6: Warm electric + green accent, lower ── */}
      <div
        className="absolute"
        style={{
          width: "65vw",
          height: "55vw",
          maxWidth: 1100,
          maxHeight: 900,
          top: "60%",
          left: "5%",
          background:
            "conic-gradient(from 150deg, rgba(79, 95, 232, 0.42), rgba(29, 184, 122, 0.18), rgba(51, 71, 212, 0.38), rgba(139, 150, 200, 0.30), rgba(79, 95, 232, 0.42))",
          filter: "blur(130px)",
          borderRadius: "40% 60% 50% 50% / 55% 45% 55% 45%",
          animation: "lavaLamp1 36s ease-in-out infinite reverse",
        }}
      />

      {/* ── Blob 7: Deep indigo mass, bottom-right ── */}
      <div
        className="absolute"
        style={{
          width: "50vw",
          height: "50vw",
          maxWidth: 800,
          maxHeight: 800,
          top: "75%",
          right: "0%",
          background:
            "conic-gradient(from 0deg, rgba(30, 45, 107, 0.55), rgba(79, 95, 232, 0.40), rgba(37, 56, 184, 0.45), rgba(30, 45, 107, 0.55))",
          filter: "blur(110px)",
          borderRadius: "55% 45% 50% 50% / 45% 55% 45% 55%",
          animation: "lavaLamp2 32s ease-in-out infinite reverse",
        }}
      />

      {/* ── Blob 8: Slate shimmer, bottom center ── */}
      <div
        className="absolute"
        style={{
          width: "70vw",
          height: "50vw",
          maxWidth: 1200,
          maxHeight: 800,
          top: "85%",
          left: "15%",
          background:
            "conic-gradient(from 90deg, rgba(139, 150, 200, 0.40), rgba(79, 95, 232, 0.35), rgba(30, 45, 107, 0.30), rgba(139, 150, 200, 0.40))",
          filter: "blur(130px)",
          borderRadius: "45% 55% 45% 55% / 50% 50% 50% 50%",
          animation: "lavaLamp3 38s ease-in-out infinite reverse",
        }}
      />
    </div>
  );
}
