import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "github-english-progress-v2";

const defaultProgress = {
  xp: 0,
  streak: 0,
  lastPracticeDate: null,
  completedLessons: [],
  completedStories: [],
  lessonScores: {},
  totalLessonsCompleted: 0,
  wordsLearned: 0,
};

export function useProgress() {
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return { ...defaultProgress, ...JSON.parse(saved) };
    } catch (e) { /* ignore */ }
    return { ...defaultProgress };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const updateStreak = useCallback(() => {
    const today = new Date().toDateString();
    setProgress((prev) => {
      if (prev.lastPracticeDate === today) return prev;
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const isConsecutive = prev.lastPracticeDate === yesterday.toDateString();
      return {
        ...prev,
        streak: isConsecutive ? prev.streak + 1 : 1,
        lastPracticeDate: today,
      };
    });
  }, []);

  const addXP = useCallback((amount) => {
    setProgress((prev) => ({ ...prev, xp: prev.xp + amount }));
  }, []);

  const completeLesson = useCallback((lessonId, score, vocabCount) => {
    setProgress((prev) => {
      const isNew = !prev.completedLessons.includes(lessonId);
      const completed = isNew
        ? [...prev.completedLessons, lessonId]
        : prev.completedLessons;
      const scores = {
        ...prev.lessonScores,
        [lessonId]: Math.max(score, prev.lessonScores[lessonId] || 0),
      };
      return {
        ...prev,
        completedLessons: completed,
        lessonScores: scores,
        totalLessonsCompleted: prev.totalLessonsCompleted + (isNew ? 1 : 0),
        wordsLearned: prev.wordsLearned + (isNew ? (vocabCount || 0) : 0),
      };
    });
  }, []);

  const completeStory = useCallback((unitId) => {
    setProgress((prev) => {
      if (prev.completedStories.includes(unitId)) return prev;
      return { ...prev, completedStories: [...prev.completedStories, unitId] };
    });
  }, []);

  const isLessonUnlocked = useCallback(
    (lessonId, unitIndex, lessonIndex) => {
      if (unitIndex === 0 && lessonIndex === 0) return true;
      if (lessonIndex > 0) {
        const prevId = `${unitIndex + 1}-${lessonIndex}`;
        return progress.completedLessons.includes(prevId);
      }
      const prevUnit = unitIndex;
      const prevLessons = [`${prevUnit}-1`, `${prevUnit}-2`, `${prevUnit}-3`];
      return prevLessons.every((id) => progress.completedLessons.includes(id));
    },
    [progress.completedLessons]
  );

  const resetProgress = useCallback(() => {
    setProgress({ ...defaultProgress });
  }, []);

  return {
    progress,
    updateStreak,
    addXP,
    completeLesson,
    completeStory,
    isLessonUnlocked,
    resetProgress,
  };
}
