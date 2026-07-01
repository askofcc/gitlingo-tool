import { Lock, Check, Star, BookOpen, Crown } from "lucide-react";

function LessonNode({ lesson, unit, unlocked, completed, score, onClick, top, left, isActive }) {
  return (
    <div
      className="absolute flex flex-col items-center select-none"
      style={{ top: `${top}px`, left: `${left}px`, transform: "translate(-50%, -50%)" }}
    >
      {/* Start tooltip */}
      {isActive && (
        <div className="absolute -top-12 z-20 flex flex-col items-center">
          <div className="bg-[var(--color-duo-green)] text-white text-[11px] font-black px-4 py-1.5 rounded-xl shadow-lg whitespace-nowrap animate-bounce">
            START
          </div>
          <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-[var(--color-duo-green)]" />
        </div>
      )}

      <button
        disabled={!unlocked}
        onClick={onClick}
        className="relative transition-all duration-200 active:scale-95 group"
      >
        {/* Outer glow ring for active node */}
        {isActive && (
          <div className="absolute -inset-2 rounded-full animate-pulse opacity-40"
            style={{ background: `radial-gradient(circle, ${unit.color}88, transparent 70%)` }} />
        )}

        {/* Main circle */}
        <div className={`
          w-[66px] h-[66px] rounded-full flex items-center justify-center relative
          border-b-[6px] group-active:border-b-[3px] group-active:mt-[3px]
          ${completed
            ? "bg-gradient-to-b from-[#ffdc00] to-[#ffb800] border-[#c99600] shadow-[0_4px_16px_rgba(255,200,0,0.3)]"
            : unlocked
            ? "cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:brightness-110"
            : "bg-gradient-to-b from-[#37474f] to-[#263238] border-[#1a2328] cursor-not-allowed opacity-50"
          }
        `}
          style={!completed && unlocked ? {
            background: `linear-gradient(180deg, color-mix(in srgb, ${unit.color} 85%, white) 0%, ${unit.color} 100%)`,
            borderBottomColor: `color-mix(in srgb, ${unit.color} 55%, black)`,
          } : undefined}
        >
          {/* Inner highlight for 3D depth */}
          {(completed || unlocked) && (
            <div className="absolute top-[3px] left-[6px] right-[6px] h-[28%] rounded-full bg-white/20" />
          )}

          {completed ? (
            score === 100
              ? <Crown size={26} className="text-white drop-shadow-sm relative z-10" />
              : <Check size={28} strokeWidth={3.5} className="text-white drop-shadow-sm relative z-10" />
          ) : unlocked ? (
            <Star size={26} className="text-white drop-shadow-sm relative z-10" fill="white" />
          ) : (
            <Lock size={20} className="text-[#546e7a] relative z-10" />
          )}
        </div>
      </button>

      <span className={`text-[11px] font-bold mt-2.5 text-center max-w-[110px] leading-tight ${
        completed ? "text-[#e0e8ec]" : unlocked ? "text-[#b0c4cc]" : "text-[#3e4e56]"
      }`}>
        {lesson.title}
      </span>
    </div>
  );
}

// Generate smooth S-curve path through points
function buildCurvePath(points) {
  if (points.length < 2) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const midY = (prev.y + curr.y) / 2;
    d += ` C ${prev.x} ${midY}, ${curr.x} ${midY}, ${curr.x} ${curr.y}`;
  }
  return d;
}

export default function UnitMap({ units, progress, isLessonUnlocked, onStartLesson, onStartStory }) {
  const activeLessonId = (() => {
    for (const unit of units) {
      for (const lesson of unit.lessons) {
        if (!progress.completedLessons.includes(lesson.id)) {
          return lesson.id;
        }
      }
    }
    return null;
  })();

  return (
    <div className="max-w-md mx-auto px-5 pt-8 pb-24 flex flex-col items-center">
      {units.map((unit, unitIndex) => {
        const allDone = unit.lessons.every((l) => progress.completedLessons.includes(l.id));
        const storyDone = progress.completedStories.includes(unit.id);
        const completedCount = unit.lessons.filter((l) => progress.completedLessons.includes(l.id)).length;

        const width = 320;
        const cx = width / 2;
        const yStep = 105;
        const offset = 62;
        const topPad = 55;

        const points = [
          { x: cx, y: topPad },
          { x: cx + offset, y: topPad + yStep },
          { x: cx - offset, y: topPad + 2 * yStep },
          { x: cx, y: topPad + 3 * yStep }
        ];

        const pathHeight = topPad + 3 * yStep + 75;
        const curvePath = buildCurvePath(points);

        // Partial progress curve
        const completedPoints = [points[0]];
        if (progress.completedLessons.includes(unit.lessons[0].id)) completedPoints.push(points[1]);
        if (progress.completedLessons.includes(unit.lessons[1].id)) completedPoints.push(points[2]);
        if (progress.completedLessons.includes(unit.lessons[2].id)) completedPoints.push(points[3]);
        const progressCurve = completedPoints.length > 1 ? buildCurvePath(completedPoints) : "";

        return (
          <div key={unit.id} id={`unit-${unit.id}`} className="w-full max-w-[360px] mb-8 flex flex-col items-center">
            {/* Unit banner */}
            <div
              className="w-full rounded-2xl px-5 py-4 mb-8 relative overflow-hidden select-none"
              style={{
                background: `linear-gradient(135deg, ${unit.color}, color-mix(in srgb, ${unit.color} 65%, black))`,
                boxShadow: `0 4px 20px ${unit.color}33, inset 0 1px 0 rgba(255,255,255,0.15)`,
              }}
            >
              {/* Subtle decorative circle */}
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-10 bg-white" />

              <div className="flex items-center justify-between relative z-10">
                <div>
                  <p className="text-white/60 text-[10px] font-black uppercase tracking-widest">Unit {unit.id}</p>
                  <h2 className="text-white font-black text-[17px] leading-tight mt-1">{unit.title}</h2>
                  <p className="text-white/45 text-xs mt-0.5">{unit.titleZh}</p>
                </div>
                <span className="text-3xl">{unit.icon}</span>
              </div>

              <div className="mt-3.5 h-[7px] bg-black/20 rounded-full overflow-hidden relative z-10">
                <div
                  className="h-full bg-white rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${(completedCount / unit.lessons.length) * 100}%` }}
                />
              </div>

              <div className="flex justify-between items-center mt-2 relative z-10">
                <p className="text-white/35 text-[10px] font-bold tracking-wide">
                  {completedCount}/{unit.lessons.length} LESSONS
                </p>
                {allDone && !storyDone && (
                  <span className="text-[10px] font-black bg-white text-[var(--color-duo-blue)] px-2 py-0.5 rounded-md animate-pulse shadow">
                    STORY UNLOCKED
                  </span>
                )}
              </div>
            </div>

            {/* Path area */}
            <div className="relative w-[320px]" style={{ height: `${pathHeight}px` }}>
              <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                {/* Background dotted path */}
                <path
                  d={curvePath}
                  stroke="#1c2c34"
                  strokeWidth="10"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Progress highlight */}
                {progressCurve && (
                  <path
                    d={progressCurve}
                    stroke={unit.color}
                    strokeWidth="10"
                    strokeLinecap="round"
                    fill="none"
                    style={{ filter: `drop-shadow(0 0 8px ${unit.color}55)` }}
                  />
                )}
              </svg>

              {unit.lessons.map((lesson, li) => {
                const pt = points[li];
                const unlocked = isLessonUnlocked(lesson.id, unitIndex, li);
                const completed = progress.completedLessons.includes(lesson.id);
                const score = progress.lessonScores[lesson.id] || 0;
                const isActive = lesson.id === activeLessonId;

                return (
                  <LessonNode
                    key={lesson.id}
                    lesson={lesson}
                    unit={unit}
                    unlocked={unlocked}
                    completed={completed}
                    score={score}
                    onClick={() => onStartLesson(unitIndex, li)}
                    top={pt.y}
                    left={pt.x}
                    isActive={isActive}
                  />
                );
              })}

              {/* Story Node */}
              <div
                className="absolute flex flex-col items-center select-none"
                style={{ top: `${points[3].y}px`, left: `${points[3].x}px`, transform: "translate(-50%, -50%)" }}
              >
                <button
                  disabled={!allDone}
                  onClick={() => onStartStory(unitIndex)}
                  className={`
                    w-[58px] h-[58px] rounded-2xl flex items-center justify-center transition-all duration-200
                    border-b-[5px] active:border-b-[2px] active:mt-[3px] relative
                    ${storyDone
                      ? "bg-gradient-to-b from-[#ffdc00] to-[#ffb800] border-[#c99600] shadow-[0_4px_16px_rgba(255,200,0,0.3)]"
                      : allDone
                      ? "bg-gradient-to-b from-[#2a4854] to-[#1e3640] border-[#152630] hover:from-[#325868] hover:to-[#264450] hover:scale-105 cursor-pointer shadow-lg"
                      : "bg-gradient-to-b from-[#37474f] to-[#263238] border-[#1a2328] cursor-not-allowed opacity-40"
                    }
                  `}
                >
                  {(storyDone || allDone) && (
                    <div className="absolute top-[2px] left-[5px] right-[5px] h-[25%] rounded-t-xl bg-white/15" />
                  )}
                  <BookOpen size={22} className={`relative z-10 ${storyDone ? "text-white" : allDone ? "text-[var(--color-duo-blue)]" : "text-[#4a5a62]"}`} />
                </button>
                <span className={`text-[11px] font-bold mt-2.5 ${allDone ? "text-[var(--color-duo-blue)]" : "text-[#3e4e56]"}`}>
                  Story
                </span>
              </div>
            </div>
          </div>
        );
      })}

      <div className="text-center py-10 text-[#3e4e56] text-[11px] font-bold uppercase tracking-widest">
        GitLingo · 385 Words · 16 Units
      </div>
    </div>
  );
}
