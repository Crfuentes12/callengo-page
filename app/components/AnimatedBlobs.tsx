interface AnimatedBlobsProps {
  className?: string;
}

export default function AnimatedBlobs({ className = "" }: AnimatedBlobsProps) {
  return (
    <div
      className={`absolute inset-x-0 top-0 h-[60vh] overflow-hidden pointer-events-none opacity-15 ${className}`}
    >
      {/* Base tinted wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50/60 to-purple-50/40" />

      {/* Blob 1 — top-left: purple + electric */}
      <div className="absolute -top-[25%] -left-[15%] w-[50%] h-[50%] bg-gradient-to-br from-[#7C3AED]/30 via-[#4F5FE8]/35 to-[#3347D4]/25 rounded-full blur-3xl animate-blob-1" />

      {/* Blob 2 — top-right: electric + soft pink */}
      <div className="absolute -top-[10%] -right-[10%] w-[45%] h-[45%] bg-gradient-to-br from-[#4F5FE8]/40 via-[#EC4899]/15 to-[#3347D4]/30 rounded-full blur-3xl animate-blob-2" />

      {/* Blob 3 — mid-left: electric + indigo (no cyan) */}
      <div className="absolute top-[30%] -left-[10%] w-[40%] h-[40%] bg-gradient-to-br from-[#4F5FE8]/25 via-[#3347D4]/30 to-[#7C3AED]/20 rounded-full blur-3xl animate-blob-3" />

      {/* White zone patches for breathing room */}
      <div className="absolute top-[35%] left-[20%] w-[30%] h-[25%] bg-white/80 rounded-full blur-3xl" />
      <div className="absolute top-[50%] right-[15%] w-[22%] h-[20%] bg-white/70 rounded-full blur-3xl" />
      <div className="absolute top-[15%] left-[40%] w-[20%] h-[18%] bg-white/65 rounded-full blur-2xl" />

      {/* Strong fade-out toward bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-30% to-white" />

      <style jsx>{`
        .animate-blob-1 { animation: blob-flow-1 50s ease-in-out infinite; }
        .animate-blob-2 { animation: blob-flow-2 60s ease-in-out infinite; animation-delay: -12s; }
        .animate-blob-3 { animation: blob-flow-3 55s ease-in-out infinite; animation-delay: -20s; }

        @keyframes blob-flow-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(80px, -50px) scale(1.06); }
          50% { transform: translate(-40px, 30px) scale(0.94); }
          75% { transform: translate(40px, -20px) scale(1.03); }
        }
        @keyframes blob-flow-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          30% { transform: translate(-80px, 50px) scale(1.08); }
          60% { transform: translate(60px, 70px) scale(0.92); }
          80% { transform: translate(50px, -30px) scale(1.04); }
        }
        @keyframes blob-flow-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          35% { transform: translate(70px, 50px) scale(0.93); }
          65% { transform: translate(-60px, -40px) scale(1.07); }
          85% { transform: translate(30px, 20px) scale(0.97); }
        }
      `}</style>
    </div>
  );
}
