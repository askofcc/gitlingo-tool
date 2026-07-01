import { useState, useCallback, useRef } from "react";
import { useProgress } from "./hooks/useProgress";
import Header from "./components/Header";
import UnitMap from "./components/UnitMap";
import Lesson from "./components/Lesson";
import Story from "./components/Story";
import LessonComplete from "./components/LessonComplete";
import { LeftSidebar, RightSidebar } from "./components/Sidebar";
import { units, generateExercises, getAllVocab } from "./data/curriculum";

export default function App() {
  const progress = useProgress();
  const [view, setView] = useState("map");
  const [currentLesson, setCurrentLesson] = useState(null);
  const [currentUnit, setCurrentUnit] = useState(null);
  const [lessonResult, setLessonResult] = useState(null);
  const mapRef = useRef(null);

  const allVocab = getAllVocab();

  const startLesson = useCallback((unitIndex, lessonIndex) => {
    const unit = units[unitIndex];
    const lesson = unit.lessons[lessonIndex];
    const exercises = generateExercises(lesson, allVocab);
    setCurrentLesson({ ...lesson, exercises, unitIndex, lessonIndex, unitColor: unit.color });
    setView("lesson");
  }, [allVocab]);

  const startStory = useCallback((unitIndex) => {
    setCurrentUnit(units[unitIndex]);
    setView("story");
  }, []);

  const handleLessonComplete = useCallback((result) => {
    const score = Math.round((result.correct / result.total) * 100);
    const xp = score === 100 ? 25 : score >= 80 ? 18 : 12;
    progress.addXP(xp);
    progress.updateStreak();
    progress.completeLesson(result.lessonId, score, result.vocabCount);
    setLessonResult({ ...result, xpEarned: xp, score });
    setView("complete");
  }, [progress]);

  const handleStoryComplete = useCallback((unitId) => {
    progress.addXP(20);
    progress.updateStreak();
    progress.completeStory(unitId);
    setView("map");
  }, [progress]);

  const backToMap = useCallback(() => {
    setView("map");
    setCurrentLesson(null);
    setCurrentUnit(null);
    setLessonResult(null);
  }, []);

  const scrollToUnit = useCallback((unitId) => {
    const el = document.getElementById(`unit-${unitId}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  // Full-screen views (lesson, story, complete) don't use sidebars
  if (view === "lesson" && currentLesson) {
    return <Lesson lesson={currentLesson} onComplete={handleLessonComplete} onQuit={backToMap} />;
  }
  if (view === "story" && currentUnit) {
    return <Story story={currentUnit.story} unitId={currentUnit.id} onComplete={handleStoryComplete} onQuit={backToMap} />;
  }
  if (view === "complete" && lessonResult) {
    return <LessonComplete result={lessonResult} onContinue={backToMap} />;
  }

  // Map view with desktop sidebar layout
  return (
    <div className="min-h-screen flex flex-col">
      <Header progress={progress.progress} onReset={progress.resetProgress} />
      <div className="flex flex-1">
        <LeftSidebar progress={progress.progress} onScrollToUnit={scrollToUnit} />
        <main className="flex-1 min-w-0" ref={mapRef}>
          <UnitMap
            units={units}
            progress={progress.progress}
            isLessonUnlocked={progress.isLessonUnlocked}
            onStartLesson={startLesson}
            onStartStory={startStory}
          />
        </main>
        <RightSidebar progress={progress.progress} />
      </div>
    </div>
  );
}
