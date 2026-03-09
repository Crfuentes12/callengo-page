"use client";

interface AnimatedBlobsProps {
  className?: string;
}

export default function AnimatedBlobs({ className = "" }: AnimatedBlobsProps) {
  return (
    <div
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 ${className}`}
    >
      {/* Top area - electric blue */}
      <div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          top: "2%",
          left: "5%",
          background:
            "radial-gradient(circle, rgba(79, 95, 232, 0.18) 0%, rgba(79, 95, 232, 0.08) 40%, transparent 70%)",
          filter: "blur(80px)",
          animation: "lavaLamp1 30s ease-in-out infinite",
        }}
      />

      {/* Upper right - deep indigo */}
      <div
        className="absolute rounded-full"
        style={{
          width: 550,
          height: 550,
          top: "12%",
          right: "-5%",
          background:
            "radial-gradient(circle, rgba(30, 45, 107, 0.20) 0%, rgba(30, 45, 107, 0.08) 40%, transparent 70%)",
          filter: "blur(90px)",
          animation: "lavaLamp2 35s ease-in-out infinite",
        }}
      />

      {/* Mid section - slate indigo */}
      <div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          top: "30%",
          left: "25%",
          background:
            "radial-gradient(circle, rgba(139, 150, 200, 0.15) 0%, rgba(139, 150, 200, 0.06) 40%, transparent 70%)",
          filter: "blur(100px)",
          animation: "lavaLamp3 40s ease-in-out infinite",
        }}
      />

      {/* Mid-lower left - electric accent */}
      <div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          top: "50%",
          left: "-8%",
          background:
            "radial-gradient(circle, rgba(79, 95, 232, 0.14) 0%, rgba(79, 95, 232, 0.05) 40%, transparent 70%)",
          filter: "blur(70px)",
          animation: "lavaLamp4 28s ease-in-out infinite",
        }}
      />

      {/* Lower right */}
      <div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          top: "55%",
          right: "10%",
          background:
            "radial-gradient(circle, rgba(51, 71, 212, 0.12) 0%, rgba(51, 71, 212, 0.05) 40%, transparent 70%)",
          filter: "blur(90px)",
          animation: "lavaLamp5 33s ease-in-out infinite",
        }}
      />

      {/* Bottom area - extra blob for full page coverage */}
      <div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          top: "75%",
          left: "15%",
          background:
            "radial-gradient(circle, rgba(79, 95, 232, 0.14) 0%, rgba(79, 95, 232, 0.06) 40%, transparent 70%)",
          filter: "blur(85px)",
          animation: "lavaLamp1 36s ease-in-out infinite reverse",
        }}
      />

      {/* Bottom right */}
      <div
        className="absolute rounded-full"
        style={{
          width: 450,
          height: 450,
          top: "85%",
          right: "5%",
          background:
            "radial-gradient(circle, rgba(30, 45, 107, 0.16) 0%, rgba(30, 45, 107, 0.06) 40%, transparent 70%)",
          filter: "blur(80px)",
          animation: "lavaLamp2 32s ease-in-out infinite reverse",
        }}
      />
    </div>
  );
}
