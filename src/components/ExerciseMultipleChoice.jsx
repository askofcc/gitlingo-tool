import { useState, useEffect } from "react";
import { Volume2 } from "lucide-react";
import { speak } from "../utils/speak";

export default function ExerciseMultipleChoice({ exercise, onAnswer, disabled }) {
  const [selected, setSelected] = useState(null);
  const isEn2Zh = exercise.direction === "en2zh";

  useEffect(() => {
    if (isEn2Zh && exercise.prompt) {
      const t = setTimeout(() => speak(exercise.prompt), 300);
      return () => clearTimeout(t);
    }
  }, [exercise.prompt, isEn2Zh]);

  const handleSelect = (option) => {
    if (disabled) return;
    setSelected(option);
    if (!isEn2Zh) speak(option);
    onAnswer(option === exercise.answer, exercise.answer);
  };

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-sm font-bold text-[#7a9aa8] uppercase tracking-wider">
        {isEn2Zh ? "Select the correct meaning" : "Select the correct translation"}
      </h2>

      {/* Prompt card with left accent */}
      <div className="flex items-center gap-3">
        {isEn2Zh && (
          <button onClick={() => speak(exercise.prompt)}
            className="w-14 h-14 rounded-2xl bg-[var(--color-duo-blue)] text-white flex items-center justify-center
              hover:brightness-110 transition-all border-b-4 border-[var(--color-duo-blue-dark)] shrink-0 active:border-b-2 active:mt-0.5
              shadow-[0_2px_8px_rgba(28,176,246,0.25)]"
          >
            <Volume2 size={22} />
          </button>
        )}
        <div
          className="bg-[var(--color-duo-surface2)] rounded-xl px-5 py-4 flex-1 cursor-pointer hover:bg-[#2a4550] transition-colors relative overflow-hidden"
          style={{ boxShadow: "inset 0 0 0 1px #2a3f48" }}
          onClick={() => speak(exercise.prompt)}
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-duo-blue)] rounded-l-xl" />
          <p className="text-xl font-bold text-white pl-2">{exercise.prompt}</p>
          {exercise.promptSentence && (
            <p className="text-sm text-[#5a7a85] mt-1.5 leading-snug pl-2">{exercise.promptSentence}</p>
          )}
        </div>
      </div>

      {/* Options with circular number badges */}
      <div className="flex flex-col gap-3">
        {exercise.options.map((option, i) => {
          const isSelected = selected === option;
          const isCorrect = option === exercise.answer;

          let bg, border, borderBottom, text, badgeBg;
          if (disabled && isSelected && isCorrect) {
            bg = "bg-[#1b3a2a]"; border = "border-[var(--color-duo-green)]"; borderBottom = "border-b-[#2d7a1a]"; text = "text-[var(--color-duo-green)]"; badgeBg = "bg-[var(--color-duo-green)] text-white";
          } else if (disabled && isSelected && !isCorrect) {
            bg = "bg-[#3a1b1b]"; border = "border-[var(--color-duo-red)]"; borderBottom = "border-b-[#c03030]"; text = "text-[var(--color-duo-red)]"; badgeBg = "bg-[var(--color-duo-red)] text-white";
          } else if (disabled && isCorrect) {
            bg = "bg-[#1b3a2a]"; border = "border-[var(--color-duo-green)]"; borderBottom = "border-b-[#2d7a1a]"; text = "text-[var(--color-duo-green)]"; badgeBg = "bg-[var(--color-duo-green)] text-white";
          } else {
            bg = "bg-[var(--color-duo-surface2)]"; border = "border-[#2a3f48]"; borderBottom = "border-b-[#1e2c33]"; text = "text-[#d0dce0]"; badgeBg = "bg-[#1a2a32] text-[#5a7a85]";
          }

          return (
            <button key={i} onClick={() => handleSelect(option)} disabled={disabled}
              className={`${bg} ${text} border-2 ${border} border-b-4 ${borderBottom} rounded-xl px-4 py-4 text-left font-semibold transition-all disabled:cursor-default text-[15px] flex items-center gap-3
                ${disabled ? "" : "hover:bg-[#2a4550] active:border-b-2 active:mt-[2px]"}`}
            >
              <span className={`${badgeBg} w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0`}>
                {i + 1}
              </span>
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
