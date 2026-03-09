"use client";

interface AnimatedBlobsProps {
  className?: string;
}

export default function AnimatedBlobs({ className = "" }: AnimatedBlobsProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
    >
      {/* Electric blue blob */}
      <div
        className="absolute rounded-full"
        style={{
          width: 480,
          height: 480,
          top: "-5%",
          left: "10%",
          background:
            "radial-gradient(circle, rgba(79, 95, 232, 0.15) 0%, transparent 70%)",
          filter: "blur(100px)",
          animation: "blobFloat1 25s ease-in-out infinite",
        }}
      />

      {/* Deep indigo blob */}
      <div
        className="absolute rounded-full"
        style={{
          width: 420,
          height: 420,
          top: "30%",
          right: "5%",
          background:
            "radial-gradient(circle, rgba(30, 45, 107, 0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "blobFloat2 22s ease-in-out infinite",
        }}
      />

      {/* Slate indigo blob */}
      <div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          bottom: "5%",
          left: "30%",
          background:
            "radial-gradient(circle, rgba(139, 150, 200, 0.10) 0%, transparent 70%)",
          filter: "blur(100px)",
          animation: "blobFloat3 28s ease-in-out infinite",
        }}
      />

      {/* Secondary electric blue blob (smaller) */}
      <div
        className="absolute rounded-full"
        style={{
          width: 340,
          height: 340,
          top: "55%",
          left: "-5%",
          background:
            "radial-gradient(circle, rgba(79, 95, 232, 0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "blobFloat4 30s ease-in-out infinite",
        }}
      />

      <style jsx>{`
        @keyframes blobFloat1 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(60px, 40px) scale(1.08);
          }
          50% {
            transform: translate(-30px, 80px) scale(0.95);
          }
          75% {
            transform: translate(40px, -20px) scale(1.05);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        @keyframes blobFloat2 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          20% {
            transform: translate(-50px, 30px) scale(1.06);
          }
          45% {
            transform: translate(30px, -60px) scale(0.92);
          }
          70% {
            transform: translate(-40px, -30px) scale(1.1);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        @keyframes blobFloat3 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          30% {
            transform: translate(70px, -50px) scale(1.04);
          }
          55% {
            transform: translate(-40px, -70px) scale(0.94);
          }
          80% {
            transform: translate(20px, 40px) scale(1.07);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        @keyframes blobFloat4 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          35% {
            transform: translate(50px, 60px) scale(0.96);
          }
          60% {
            transform: translate(-60px, 20px) scale(1.09);
          }
          85% {
            transform: translate(30px, -40px) scale(0.97);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
