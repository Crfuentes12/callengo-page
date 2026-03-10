interface AnimatedBlobsProps {
  className?: string;
}

export default function AnimatedBlobs({ className = "" }: AnimatedBlobsProps) {
  return (
    <div
      className={`absolute inset-x-0 top-0 h-[60vh] overflow-hidden pointer-events-none opacity-15 ${className}`}
    >
      {/* Base tinted wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-blue-100/80 to-purple-50" />

      {/* Blob 1 — top-left: strong electric */}
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#4F5FE8]/50 via-[#1E2D6B]/60 to-[#8B96C8]/40 rounded-full blur-3xl animate-lava-1" />

      {/* Blob 2 — top-right: deep indigo */}
      <div className="absolute -top-1/4 -right-1/3 w-4/5 h-4/5 bg-gradient-to-br from-[#1E2D6B]/60 via-[#8B96C8]/50 to-[#3347D4]/45 rounded-full blur-3xl animate-lava-2" />

      {/* Blob 3 — mid-left: electric + accent green */}
      <div className="absolute top-1/4 -left-1/4 w-3/4 h-3/4 bg-gradient-to-br from-[#3347D4]/45 via-[#4F5FE8]/55 to-[#1DB87A]/30 rounded-full blur-3xl animate-lava-3" />

      {/* Blob 4 — center-right */}
      <div className="absolute top-[20%] right-[10%] w-1/2 h-1/2 bg-gradient-to-br from-[#8B96C8]/55 via-[#1E2D6B]/40 to-[#4F5FE8]/35 rounded-full blur-3xl animate-lava-4" />

      {/* White zone patches */}
      <div className="absolute top-[40%] left-[20%] w-[35%] h-[30%] bg-white/70 rounded-full blur-3xl" />
      <div className="absolute top-[55%] right-[15%] w-[25%] h-[25%] bg-white/60 rounded-full blur-3xl" />

      {/* Strong fade-out toward bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-30% to-white" />

      <style jsx>{`
        .animate-lava-1 { animation: lava-flow-1 45s ease-in-out infinite; }
        .animate-lava-2 { animation: lava-flow-2 55s ease-in-out infinite; animation-delay: -8s; }
        .animate-lava-3 { animation: lava-flow-3 60s ease-in-out infinite; animation-delay: -15s; }
        .animate-lava-4 { animation: lava-flow-4 50s ease-in-out infinite; animation-delay: -22s; }

        @keyframes lava-flow-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(60px, -80px) scale(1.06); }
          66% { transform: translate(-40px, 50px) scale(0.95); }
        }
        @keyframes lava-flow-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-70px, 50px) scale(1.08); }
          50% { transform: translate(50px, 80px) scale(0.92); }
          75% { transform: translate(80px, -40px) scale(1.04); }
        }
        @keyframes lava-flow-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          30% { transform: translate(50px, 60px) scale(0.94); }
          60% { transform: translate(-60px, -40px) scale(1.1); }
        }
        @keyframes lava-flow-4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40% { transform: translate(-80px, -50px) scale(1.05); }
          70% { transform: translate(60px, 40px) scale(0.93); }
        }
      `}</style>
    </div>
  );
}
