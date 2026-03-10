interface AnimatedBlobsProps {
  className?: string;
}

export default function AnimatedBlobs({ className = "" }: AnimatedBlobsProps) {
  return (
    <div
      className={`absolute inset-x-0 top-0 h-[60vh] overflow-hidden pointer-events-none opacity-30 ${className}`}
    >
      {/* Base tinted wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-blue-100/80 to-purple-50" />

      {/* Blob 1 — top-left: purple + electric */}
      <div className="absolute -top-[25%] -left-[15%] w-[50%] h-[50%] bg-gradient-to-br from-[#7C3AED]/40 via-[#4F5FE8]/45 to-[#06B6D4]/30 rounded-full blur-3xl animate-blob-1" />

      {/* Blob 2 — top-right: deep indigo + pink */}
      <div className="absolute -top-[10%] -right-[10%] w-[45%] h-[45%] bg-gradient-to-br from-[#1E2D6B]/50 via-[#EC4899]/25 to-[#3347D4]/40 rounded-full blur-3xl animate-blob-2" />

      {/* Blob 3 — mid-left: cyan + electric + green */}
      <div className="absolute top-[30%] -left-[10%] w-[40%] h-[40%] bg-gradient-to-br from-[#06B6D4]/35 via-[#4F5FE8]/45 to-[#1DB87A]/30 rounded-full blur-3xl animate-blob-3" />

      {/* Blob 4 — center-right: violet + indigo */}
      <div className="absolute top-[15%] right-[5%] w-[40%] h-[40%] bg-gradient-to-br from-[#8B5CF6]/40 via-[#1E2D6B]/45 to-[#4F5FE8]/35 rounded-full blur-3xl animate-blob-4" />

      {/* Blob 5 — bottom: pink + purple accent */}
      <div className="absolute bottom-[10%] left-[25%] w-[35%] h-[35%] bg-gradient-to-br from-[#EC4899]/25 via-[#7C3AED]/35 to-[#4F5FE8]/40 rounded-full blur-2xl animate-blob-5" />

      {/* White zone patches for breathing room */}
      <div className="absolute top-[35%] left-[20%] w-[30%] h-[25%] bg-white/70 rounded-full blur-3xl" />
      <div className="absolute top-[50%] right-[15%] w-[22%] h-[20%] bg-white/60 rounded-full blur-3xl" />
      <div className="absolute top-[15%] left-[40%] w-[20%] h-[18%] bg-white/55 rounded-full blur-2xl" />

      {/* Strong fade-out toward bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-30% to-white" />

      <style jsx>{`
        .animate-blob-1 { animation: blob-flow-1 30s ease-in-out infinite; }
        .animate-blob-2 { animation: blob-flow-2 35s ease-in-out infinite; animation-delay: -8s; }
        .animate-blob-3 { animation: blob-flow-3 38s ease-in-out infinite; animation-delay: -15s; }
        .animate-blob-4 { animation: blob-flow-4 32s ease-in-out infinite; animation-delay: -22s; }
        .animate-blob-5 { animation: blob-flow-5 36s ease-in-out infinite; animation-delay: -10s; }

        @keyframes blob-flow-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          20% { transform: translate(150px, -100px) scale(1.12); }
          50% { transform: translate(-90px, 70px) scale(0.88); }
          75% { transform: translate(70px, -30px) scale(1.06); }
        }
        @keyframes blob-flow-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-160px, 90px) scale(1.14); }
          50% { transform: translate(110px, 140px) scale(0.86); }
          75% { transform: translate(130px, -70px) scale(1.08); }
        }
        @keyframes blob-flow-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          30% { transform: translate(130px, 110px) scale(0.88); }
          60% { transform: translate(-140px, -90px) scale(1.14); }
          85% { transform: translate(50px, 50px) scale(0.95); }
        }
        @keyframes blob-flow-4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          20% { transform: translate(-120px, -100px) scale(1.1); }
          45% { transform: translate(90px, 70px) scale(0.87); }
          70% { transform: translate(-50px, 120px) scale(1.08); }
        }
        @keyframes blob-flow-5 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          30% { transform: translate(100px, -80px) scale(0.9); }
          55% { transform: translate(-80px, 60px) scale(1.12); }
          80% { transform: translate(60px, -40px) scale(0.94); }
        }
      `}</style>
    </div>
  );
}
