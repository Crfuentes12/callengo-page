"use client";

interface AnimatedBlobsProps {
  className?: string;
}

export default function AnimatedBlobs({ className = "" }: AnimatedBlobsProps) {
  return (
    <div
      className={`fixed inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
    >
      {/* Large electric blue lava blob */}
      <div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          top: "-10%",
          left: "5%",
          background:
            "radial-gradient(circle, rgba(79, 95, 232, 0.18) 0%, rgba(79, 95, 232, 0.08) 40%, transparent 70%)",
          filter: "blur(80px)",
          animation: "lavaLamp1 30s ease-in-out infinite",
        }}
      />

      {/* Deep indigo blob - right side */}
      <div
        className="absolute rounded-full"
        style={{
          width: 550,
          height: 550,
          top: "20%",
          right: "-5%",
          background:
            "radial-gradient(circle, rgba(30, 45, 107, 0.20) 0%, rgba(30, 45, 107, 0.08) 40%, transparent 70%)",
          filter: "blur(90px)",
          animation: "lavaLamp2 35s ease-in-out infinite",
        }}
      />

      {/* Slate indigo blob - center bottom */}
      <div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          bottom: "-5%",
          left: "25%",
          background:
            "radial-gradient(circle, rgba(139, 150, 200, 0.15) 0%, rgba(139, 150, 200, 0.06) 40%, transparent 70%)",
          filter: "blur(100px)",
          animation: "lavaLamp3 40s ease-in-out infinite",
        }}
      />

      {/* Smaller electric accent blob */}
      <div
        className="absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          top: "50%",
          left: "-8%",
          background:
            "radial-gradient(circle, rgba(79, 95, 232, 0.14) 0%, rgba(79, 95, 232, 0.05) 40%, transparent 70%)",
          filter: "blur(70px)",
          animation: "lavaLamp4 28s ease-in-out infinite",
        }}
      />

      {/* Fifth blob for more organic feel */}
      <div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          top: "60%",
          right: "10%",
          background:
            "radial-gradient(circle, rgba(51, 71, 212, 0.12) 0%, rgba(51, 71, 212, 0.05) 40%, transparent 70%)",
          filter: "blur(90px)",
          animation: "lavaLamp5 33s ease-in-out infinite",
        }}
      />
    </div>
  );
}
