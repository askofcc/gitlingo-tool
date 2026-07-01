import { useState, useCallback } from "react";
import { speak } from "../utils/speak";

export default function ExerciseMatching({ exercise, onAnswer, disabled }) {
  const [enItems] = useState(() => [...exercise.pairs].sort(() => Math.random() - 0.5));
  const [zhItems] = useState(() => [...exercise.pairs].sort(() => Math.random() - 0.5));
  const [selectedEn, setSelectedEn] = useState(null);
  const [selectedZh, setSelectedZh] = useState(null);
  const [matched, setMatched] = useState(new Set());
  const [wrongPair, setWrongPair] = useState(null);
  const [done, setDone] = useState(false);
  const [mistakes, setMistakes] = useState(0);

  const tryMatch = useCallback((en, zh) => {
    const pair = exercise.pairs.find(p => p.en === en && p.zh === zh);
    if (pair) {
      const next = new Set(matched);
      next.add(en);
      setMatched(next);
      setSelectedEn(null);
      setSelectedZh(null);
      // Speak the matched English word
      speak(en);
      if (next.size === exercise.pairs.length && !done) {
        setDone(true);
        onAnswer(mistakes === 0, null);
      }
    } else {
      setMistakes(m => m + 1);
      setWrongPair({ en, zh });
      setTimeout(() => { setWrongPair(null); setSelectedEn(null); setSelectedZh(null); }, 500);
    }
  }, [exercise.pairs, matched, done, mistakes, onAnswer]);

  const handleEn = (word) => {
    if (disabled || matched.has(word)) return;
    // Speak the English word when tapped
    speak(word);
    setSelectedEn(word);
    if (selectedZh) tryMatch(word, selectedZh);
  };
  const handleZh = (word) => {
    if (disabled) return;
    const m = exercise.pairs.find(p => p.zh === word);
    if (m && matched.has(m.en)) return;
    setSelectedZh(word);
    if (selectedEn) tryMatch(selectedEn, word);
  };

  const btnStyle = (isMatched, isSelected, isWrong) => {
    if (isMatched) return "bg-[#1b3a2a] border-[var(--color-duo-green)] border-b-[#2d7a1a] text-[var(--color-duo-green)] opacity-50";
    if (isWrong) return "bg-[#3a1b1b] border-[var(--color-duo-red)] border-b-[#c03030] animate-shake";
    if (isSelected) return "bg-[#1a3040] border-[var(--color-duo-blue)] border-b-[var(--color-duo-blue-dark)] text-[var(--color-duo-blue)]";
    return "bg-[var(--color-duo-surface2)] border-[#2a3f48] border-b-[#1e2c33] text-[#d0dce0] hover:bg-[#233a44]";
  };

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-sm font-bold text-[#7a9aa8] uppercase tracking-wider">Match the pairs</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-3">
          {enItems.map(p => (
            <button key={p.en} onClick={() => handleEn(p.en)} disabled={disabled || matched.has(p.en)}
              className={`px-4 py-4 rounded-xl font-semibold transition-all border-2 border-b-4 text-sm
                ${btnStyle(matched.has(p.en), selectedEn === p.en, wrongPair?.en === p.en)} disabled:cursor-default`}
            >{p.en}</button>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {zhItems.map(p => {
            const m = exercise.pairs.find(x => x.zh === p.zh);
            const isMatched = m && matched.has(m.en);
            return (
              <button key={p.zh} onClick={() => handleZh(p.zh)} disabled={disabled || isMatched}
                className={`px-4 py-4 rounded-xl font-semibold transition-all border-2 border-b-4 text-sm
                  ${btnStyle(isMatched, selectedZh === p.zh, wrongPair?.zh === p.zh)} disabled:cursor-default`}
              >{p.zh}</button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
