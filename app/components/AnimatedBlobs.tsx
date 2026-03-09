interface AnimatedBlobsProps {
  className?: string;
}

export default function AnimatedBlobs({ className = "" }: AnimatedBlobsProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Base tinted wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/60 to-slate-50" />

      {/* Blob 1 — top-left: Electric + Deep Indigo */}
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#4F5FE8]/20 via-[#1E2D6B]/30 to-[#8B96C8]/20 rounded-full blur-3xl animate-lava-1" />

      {/* Blob 2 — top-right: Deep Indigo + Slate */}
      <div className="absolute -top-1/4 -right-1/3 w-4/5 h-4/5 bg-gradient-to-br from-[#1E2D6B]/35 via-[#8B96C8]/25 to-[#3347D4]/25 rounded-full blur-3xl animate-lava-2" />

      {/* Blob 3 — mid-left: Electric + Indigo */}
      <div className="absolute top-1/4 -left-1/4 w-3/4 h-3/4 bg-gradient-to-br from-[#3347D4]/20 via-[#4F5FE8]/30 to-[#1DB87A]/15 rounded-full blur-3xl animate-lava-3" />

      {/* Blob 4 — bottom-center: Indigo + Electric vivid */}
      <div className="absolute -bottom-1/3 right-1/4 w-full h-3/4 bg-gradient-to-br from-[#8B96C8]/30 via-[#1E2D6B]/40 to-[#4F5FE8]/25 rounded-full blur-3xl animate-lava-4" />

      {/* Blob 5 — bottom-left: Electric sweep */}
      <div className="absolute bottom-1/4 -left-1/3 w-4/5 h-4/5 bg-gradient-to-br from-[#4F5FE8]/25 via-[#3347D4]/20 to-[#1E2D6B]/20 rounded-full blur-3xl animate-lava-5" />

      {/* Blob 6 — mid-right accent */}
      <div className="absolute top-1/3 right-[20%] w-1/2 h-1/2 bg-gradient-to-br from-[#1DB87A]/15 via-[#4F5FE8]/25 to-[#3347D4]/30 rounded-full blur-2xl animate-lava-6" />

      {/* Blob 7 — bottom-mid accent */}
      <div className="absolute bottom-[20%] left-1/3 w-3/5 h-3/5 bg-gradient-to-br from-[#1E2D6B]/30 via-[#8B96C8]/25 to-[#4F5FE8]/35 rounded-full blur-2xl animate-lava-7" />

      {/* Top-down veil for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/30" />

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent" />

      <style jsx>{`
        .animate-lava-1 { animation: lava-flow-1 25s ease-in-out infinite; }
        .animate-lava-2 { animation: lava-flow-2 30s ease-in-out infinite; animation-delay: -5s; }
        .animate-lava-3 { animation: lava-flow-3 35s ease-in-out infinite; animation-delay: -10s; }
        .animate-lava-4 { animation: lava-flow-4 28s ease-in-out infinite; animation-delay: -15s; }
        .animate-lava-5 { animation: lava-flow-5 32s ease-in-out infinite; animation-delay: -20s; }
        .animate-lava-6 { animation: lava-flow-6 26s ease-in-out infinite; animation-delay: -8s; }
        .animate-lava-7 { animation: lava-flow-7 29s ease-in-out infinite; animation-delay: -12s; }

        @keyframes lava-flow-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(100px, -150px) rotate(90deg) scale(1.1); }
          50% { transform: translate(-50px, -100px) rotate(180deg) scale(0.9); }
          75% { transform: translate(-100px, 50px) rotate(270deg) scale(1.05); }
        }
        @keyframes lava-flow-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          30% { transform: translate(-120px, 80px) rotate(120deg) scale(1.15); }
          60% { transform: translate(80px, 120px) rotate(240deg) scale(0.85); }
          90% { transform: translate(150px, -80px) rotate(360deg) scale(1.1); }
        }
        @keyframes lava-flow-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          20% { transform: translate(80px, 100px) rotate(60deg) scale(0.9); }
          45% { transform: translate(-100px, -80px) rotate(160deg) scale(1.2); }
          70% { transform: translate(120px, -120px) rotate(280deg) scale(0.95); }
        }
        @keyframes lava-flow-4 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          35% { transform: translate(-150px, -100px) rotate(140deg) scale(1.08); }
          65% { transform: translate(100px, 80px) rotate(220deg) scale(0.92); }
          85% { transform: translate(-80px, 120px) rotate(320deg) scale(1.12); }
        }
        @keyframes lava-flow-5 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          40% { transform: translate(120px, -100px) rotate(160deg) scale(0.88); }
          70% { transform: translate(-80px, 100px) rotate(260deg) scale(1.18); }
        }
        @keyframes lava-flow-6 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          33% { transform: translate(-60px, 80px) rotate(100deg) scale(1.05); }
          66% { transform: translate(80px, -60px) rotate(200deg) scale(0.95); }
        }
        @keyframes lava-flow-7 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          28% { transform: translate(100px, 60px) rotate(80deg) scale(0.93); }
          56% { transform: translate(-60px, -100px) rotate(180deg) scale(1.07); }
          84% { transform: translate(-100px, 40px) rotate(300deg) scale(1.03); }
        }
      `}</style>
    </div>
  );
}
