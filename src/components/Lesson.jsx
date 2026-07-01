import { useState, useCallback } from "react";
import { X, CheckCircle, XCircle } from "lucide-react";
import ExerciseMultipleChoice from "./ExerciseMultipleChoice";
import ExerciseFillBlank from "./ExerciseFillBlank";
import ExerciseWordBank from "./ExerciseWordBank";
import ExerciseMatching from "./ExerciseMatching";

export default function Lesson({ lesson, onComplete, onQuit }) {
  const [idx, setIdx] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [feedbackAnswer, setFeedbackAnswer] = useState("");

  const exercises = lesson.exercises;
  const total = exercises.length;
  const pct = (idx / total) * 100;

  const handleAnswer = useCallback((isCorrect, correctAnswer) => {
    if (isCorrect) {
      setCorrect(c => c + 1);
      setFeedback("correct");
      setFeedbackAnswer("");
    } else {
      setFeedback("incorrect");
      setFeedbackAnswer(correctAnswer || "");
    }
  }, []);

  const handleContinue = () => {
    if (idx + 1 >= total) {
      onComplete({ correct, total, lessonId: lesson.id, vocabCount: lesson.vocab.length });
    } else {
      setIdx(i => i + 1);
      setFeedback(null);
      setFeedbackAnswer("");
    }
  };

  const exercise = exercises[idx];
  const disabled = feedback !== null;

  const renderExercise = () => {
    if (!exercise) return null;
    switch (exercise.type) {
      case "multipleChoice":
        return <ExerciseMultipleChoice exercise={exercise} onAnswer={handleAnswer} disabled={disabled} />;
      case "fillBlank":
        return <ExerciseFillBlank exercise={exercise} onAnswer={handleAnswer} disabled={disabled} />;
      case "wordBank":
        return <ExerciseWordBank exercise={exercise} onAnswer={handleAnswer} disabled={disabled} />;
      case "matching":
        return <ExerciseMatching exercise={exercise} onAnswer={handleAnswer} disabled={disabled} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-duo-gray-bg)]">
      {/* Progress bar */}
      <div className="flex items-center gap-3 px-5 py-3.5 max-w-2xl mx-auto w-full">
        <button onClick={onQuit} className="p-2 hover:bg-[var(--color-duo-surface2)] rounded-xl transition-colors">
          <X size={20} className="text-[var(--color-duo-gray)]" />
        </button>
        <div className="flex-1 h-4 bg-[var(--color-duo-surface2)] rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full rounded-full transition-all duration-500 relative overflow-hidden"
            style={{ width: `${pct}%`, background: lesson.unitColor || 'var(--color-duo-green)' }}
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/25 to-transparent h-1/2" />
          </div>
        </div>
        <span className="text-xs font-bold text-[#6a8a95] min-w-[40px] text-right tabular-nums">
          {idx + 1}/{total}
        </span>
      </div>

      {/* Exercise */}
      <div className="flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full px-5 py-8">
        {renderExercise()}
      </div>

      {/* Feedback bar */}
      {feedback && (
        <div className={`animate-slide-up ${
          feedback === "correct"
            ? "bg-[#1b3a2a]"
            : "bg-[#3a1b1b]"
        }`}>
          <div className="max-w-2xl mx-auto px-5 py-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                feedback === "correct"
                  ? "bg-[var(--color-duo-green)]"
                  : "bg-[var(--color-duo-red)]"
              }`}>
                {feedback === "correct"
                  ? <CheckCircle size={22} className="text-white" />
                  : <XCircle size={22} className="text-white" />
                }
              </div>
              <div className="min-w-0">
                <p className={`font-extrabold text-[17px] ${
                  feedback === "correct" ? "text-[var(--color-duo-green)]" : "text-[var(--color-duo-red)]"
                }`}>
                  {feedback === "correct" ? "Correct!" : "Incorrect"}
                </p>
                {feedbackAnswer && (
                  <p className="text-sm text-[#e0a0a0] mt-0.5 truncate">
                    Answer: <strong className="text-[#ffb0b0]">{feedbackAnswer}</strong>
                  </p>
                )}
              </div>
            </div>
            <button onClick={handleContinue}
              className={`px-7 py-3 rounded-2xl font-bold text-white border-b-4 shrink-0 text-sm uppercase transition-all active:border-b-2 active:mt-[2px] ${
                feedback === "correct"
                  ? "bg-[var(--color-duo-green)] border-[var(--color-duo-green-dark)] shadow-[0_2px_8px_rgba(88,204,2,0.3)]"
                  : "bg-[var(--color-duo-red)] border-[#c03030] shadow-[0_2px_8px_rgba(255,75,75,0.3)]"
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
