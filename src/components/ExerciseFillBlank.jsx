import { useState, useEffect } from "react";
import { speak } from "../utils/speak";

export default function ExerciseFillBlank({ exercise, onAnswer, disabled }) {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (exercise.answer) {
      const t = setTimeout(() => speak(exercise.answer), 300);
      return () => clearTimeout(t);
    }
  }, [exercise.answer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (disabled || !input.trim()) return;
    setSubmitted(true);
    speak(exercise.answer);
    onAnswer(input.trim().toLowerCase() === exercise.answer.toLowerCase(), exercise.answer);
  };

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-sm font-bold text-[#7a9aa8] uppercase tracking-wider">
        Fill in the blank
      </h2>

      {/* Hint with accent */}
      <div
        className="rounded-xl px-5 py-3 cursor-pointer hover:bg-[#1e3648] transition-colors relative overflow-hidden"
        style={{ background: "#1a3040", boxShadow: "inset 0 0 0 1px #264050" }}
        onClick={() => speak(exercise.hint)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-duo-blue)]" />
        <span className="text-sm text-[var(--color-duo-blue)] font-semibold pl-2">
          Hint: {exercise.hint}
        </span>
      </div>

      {/* Sentence card */}
      <div className="rounded-xl px-5 py-5 relative overflow-hidden"
        style={{ background: "var(--color-duo-surface2)", boxShadow: "inset 0 0 0 1px #2a3f48" }}
      >
        <p className="text-lg text-[#d0dce0] leading-relaxed">
          {exercise.sentence.split("______").map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && (
                <span
                  className="inline-block mx-1 border-b-2 border-[var(--color-duo-green)] min-w-[80px] text-center font-bold text-[var(--color-duo-green)] cursor-pointer"
                  onClick={() => submitted && speak(exercise.answer)}
                >
                  {submitted ? exercise.answer : input || "\u00A0"}
                </span>
              )}
            </span>
          ))}
        </p>
        <p className="text-sm text-[#5a7a85] mt-2.5">{exercise.sentenceZh}</p>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={disabled}
          placeholder="Type the missing word..."
          className="flex-1 px-4 py-3.5 rounded-xl border-2 border-[#2a3f48] border-b-4 border-b-[#1e2c33] bg-[var(--color-duo-surface2)]
            text-lg font-semibold text-white placeholder-[#4a5a62]
            focus:outline-none focus:border-[var(--color-duo-blue)] focus:border-b-[var(--color-duo-blue-dark)]
            disabled:opacity-50 transition-colors"
          autoFocus
        />
        {!disabled && (
          <button type="submit" disabled={!input.trim()} className="btn-check px-6">CHECK</button>
        )}
      </form>
    </div>
  );
}
