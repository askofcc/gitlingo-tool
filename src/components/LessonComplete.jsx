import { useEffect, useRef } from "react";
import { Zap, Star, Crown, TrendingUp } from "lucide-react";

function Particles({ active }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;
    ctx.scale(2, 2);

    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    const colors = ["#58cc02", "#ffc800", "#1cb0f6", "#ce82ff", "#ff9600", "#ff4b4b"];
    const particles = Array.from({ length: 60 }, () => ({
      x: W / 2 + (Math.random() - 0.5) * 40,
      y: H * 0.35,
      vx: (Math.random() - 0.5) * 8,
      vy: -Math.random() * 8 - 2,
      size: Math.random() * 5 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 1,
      decay: 0.008 + Math.random() * 0.008,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.15,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      let alive = false;
      for (const p of particles) {
        if (p.life <= 0) continue;
        alive = true;
        p.x += p.vx;
        p.vy += 0.15;
        p.y += p.vy;
        p.life -= p.decay;
        p.rotation += p.rotSpeed;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
      if (alive) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  if (!active) return null;
  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
}

export default function LessonComplete({ result, onContinue }) {
  const { correct, total, xpEarned, score } = result;
  const isPerfect = score === 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-duo-gray-bg)] px-5 relative overflow-hidden">
      <Particles active={isPerfect} />

      <div className="flex flex-col items-center gap-6 max-w-sm w-full relative z-10">
        {/* Icon */}
        <div className={`w-28 h-28 rounded-full flex items-center justify-center animate-pop relative ${
          isPerfect
            ? "bg-gradient-to-b from-[#ffdc00] to-[#ffb800] shadow-[0_4px_30px_rgba(255,200,0,0.35)]"
            : "bg-gradient-to-b from-[#6cd62e] to-[#58cc02] shadow-[0_4px_30px_rgba(88,204,2,0.3)]"
        }`}>
          <div className="absolute top-[4px] left-[8px] right-[8px] h-[30%] rounded-full bg-white/20" />
          {isPerfect
            ? <Crown size={48} className="text-white drop-shadow relative z-10" />
            : <Star size={48} className="text-white drop-shadow relative z-10" />
          }
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl font-black text-white">{isPerfect ? "Perfect!" : "Lesson Complete!"}</h1>
          {isPerfect && <p className="text-[var(--color-duo-gold)] font-bold text-base mt-1">No mistakes!</p>}
        </div>

        {/* Stats card */}
        <div className="w-full bg-[var(--color-duo-surface)] rounded-2xl overflow-hidden"
          style={{ boxShadow: "inset 0 0 0 1px #2a3f48, 0 4px 16px rgba(0,0,0,0.2)" }}
        >
          <div className="px-6 py-4 flex items-center justify-between border-b border-[#2a3f48]">
            <div className="flex items-center gap-2.5">
              <TrendingUp size={18} className="text-[#7a9aa8]" />
              <span className="text-[#8ea4ad] font-semibold text-sm">Score</span>
            </div>
            <span className="text-2xl font-black text-white">{score}%</span>
          </div>
          <div className="px-6 py-4 flex items-center justify-between border-b border-[#2a3f48]">
            <span className="text-[#8ea4ad] font-semibold text-sm">Correct answers</span>
            <span className="text-lg font-bold text-white">{correct}<span className="text-[#5a6a70]">/{total}</span></span>
          </div>
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap size={18} className="text-[var(--color-duo-gold)]" fill="var(--color-duo-gold)" />
              <span className="text-[#8ea4ad] font-semibold text-sm">XP earned</span>
            </div>
            <span className="text-lg font-extrabold text-[var(--color-duo-gold)]">+{xpEarned}</span>
          </div>
        </div>

        <button onClick={onContinue}
          className="btn-check w-full text-base mt-1 shadow-[0_4px_16px_rgba(88,204,2,0.25)]"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}
