import { useState } from "react";
import { speak } from "../utils/speak";

export default function ExerciseWordBank({ exercise, onAnswer, disabled }) {
  const [selectedWords, setSelectedWords] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleWordClick = (word, index) => {
    if (disabled) return;
    // Speak the English word when tapped
    speak(word);
    setSelectedWords(prev => [...prev, { word, bankIndex: index }]);
  };

  const handleRemoveWord = (i) => {
    if (disabled) return;
    // Speak the word being removed
    speak(selectedWords[i].word);
    setSelectedWords(prev => prev.filter((_, idx) => idx !== i));
  };

  const handleSubmit = () => {
    if (disabled || selectedWords.length === 0) return;
    setSubmitted(true);
    const user = selectedWords.map(w => w.word).join(" ");
    const correct = exercise.correctWords.join(" ");
    // Speak the full correct sentence
    speak(correct);
    onAnswer(user.toLowerCase() === correct.toLowerCase(), correct);
  };

  const usedBankIndices = new Set(selectedWords.map(w => w.bankIndex));

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-sm font-bold text-[#7a9aa8] uppercase tracking-wider">
        Translate this sentence
      </h2>

      <div className="bg-[var(--color-duo-surface2)] rounded-xl px-5 py-4 border border-[#2a3f48]">
        <p className="text-lg text-[#d0dce0] font-medium">{exercise.promptZh}</p>
      </div>

      <div className="min-h-[60px] border-b-2 border-[#2a3f48] pb-3 flex flex-wrap gap-2.5">
        {selectedWords.length === 0 ? (
          <span className="text-[#4a5a62] text-sm italic">Tap the words below...</span>
        ) : (
          selectedWords.map((w, i) => (
            <button key={i} onClick={() => handleRemoveWord(i)} className="word-chip selected">{w.word}</button>
          ))
        )}
      </div>

      <div className="flex flex-wrap gap-2.5">
        {exercise.bankWords.map((word, i) => (
          <button key={i} onClick={() => handleWordClick(word, i)}
            disabled={disabled || usedBankIndices.has(i)}
            className={`word-chip ${usedBankIndices.has(i) ? "used" : ""}`}
          >{word}</button>
        ))}
      </div>

      {!disabled && (
        <button onClick={handleSubmit} disabled={selectedWords.length === 0}
          className="btn-check self-end">CHECK</button>
      )}
    </div>
  );
}
