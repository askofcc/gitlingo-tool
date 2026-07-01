import { useState } from "react";
import { X, ChevronRight } from "lucide-react";

export default function Story({ story, unitId, onComplete, onQuit }) {
  const [si, setSi] = useState(0);
  const [selAns, setSelAns] = useState(null);
  const [ansFb, setAnsFb] = useState(null);

  const scene = story.scenes[si];
  const total = story.scenes.length;
  const pct = ((si + 1) / total) * 100;

  const handleNext = () => {
    if (si + 1 >= total) onComplete(unitId);
    else { setSi(i => i + 1); setSelAns(null); setAnsFb(null); }
  };

  const handleAns = (i) => {
    if (ansFb !== null) return;
    setSelAns(i);
    setAnsFb(i === scene.answer ? "correct" : "incorrect");
  };

  const speakerColor = { Alex: "var(--color-duo-blue)", Maya: "var(--color-duo-purple)" };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-duo-gray-bg)]">
      <div className="flex items-center gap-3 px-5 py-3.5 max-w-2xl mx-auto w-full">
        <button onClick={onQuit} className="p-1.5 hover:bg-[var(--color-duo-surface2)] rounded-lg transition-colors">
          <X size={22} className="text-[var(--color-duo-gray)]" />
        </button>
        <div className="flex-1 h-3.5 bg-[var(--color-duo-surface2)] rounded-full overflow-hidden">
          <div className="h-full bg-[var(--color-duo-blue)] rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="max-w-2xl mx-auto w-full px-5 pt-4 pb-2">
        <h2 className="text-xs font-bold text-[var(--color-duo-blue)] uppercase tracking-widest">Story</h2>
        <h1 className="text-lg font-bold text-white mt-1">{story.title}</h1>
        <p className="text-sm text-[#5a7a85] mt-0.5">{story.titleZh}</p>
      </div>

      <div className="flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full px-5 py-8">
        {scene.question ? (
          <div className="flex flex-col gap-5">
            <div className="bg-[#1a3040] rounded-xl p-5 border border-[#264050]">
              <p className="text-lg font-bold text-white">{scene.prompt}</p>
            </div>
            <div className="flex flex-col gap-3">
              {scene.options.map((opt, i) => {
                let bg = "bg-[var(--color-duo-surface2)]";
                let border = "border-[#2a3f48]";
                let borderBottom = "border-b-[#1e2c33]";
                let text = "text-[#d0dce0]";
                let hoverBg = "hover:bg-[#233a44]";

                if (ansFb && i === scene.answer) {
                  bg = "bg-[#1b3a2a]"; border = "border-[var(--color-duo-green)]"; borderBottom = "border-b-[#2d7a1a]"; text = "text-[var(--color-duo-green)]"; hoverBg = "";
                } else if (ansFb && selAns === i) {
                  bg = "bg-[#3a1b1b]"; border = "border-[var(--color-duo-red)]"; borderBottom = "border-b-[#c03030]"; text = "text-[var(--color-duo-red)]"; hoverBg = "";
                }

                return (
                  <button key={i} onClick={() => handleAns(i)} disabled={ansFb !== null}
                    className={`${bg} ${text} ${hoverBg} border-2 ${border} border-b-4 ${borderBottom} rounded-xl px-5 py-4 text-left font-semibold transition-all disabled:cursor-default text-[15px]`}
                  >{opt}</button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {scene.speaker !== "narrator" && (
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md"
                  style={{ background: speakerColor[scene.speaker] || '#6a8a95' }}
                >{scene.speaker[0]}</div>
                <span className="font-bold text-sm" style={{ color: speakerColor[scene.speaker] || '#6a8a95' }}>{scene.speaker}</span>
              </div>
            )}
            <div className={`rounded-xl p-5 ${scene.speaker === "narrator"
              ? "bg-[var(--color-duo-surface2)] border border-[#2a3f48]"
              : "bg-[var(--color-duo-surface)] border border-[#2a3f48]"}`}
            >
              <p className={`text-[17px] leading-relaxed ${scene.speaker === "narrator" ? "text-[#8ea4ad] italic" : "text-white"}`}>{scene.text}</p>
              <p className="text-sm text-[#5a7a85] mt-2.5">{scene.textZh}</p>
            </div>
          </div>
        )}
      </div>

      <div className="px-5 py-5 border-t border-[#2a3f48]">
        <div className="max-w-2xl mx-auto">
          <button onClick={handleNext} disabled={scene.question && ansFb === null}
            className="btn-check w-full flex items-center justify-center gap-2"
          >
            {si + 1 >= total ? "FINISH" : "CONTINUE"}
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
