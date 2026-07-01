import { Flame, Zap, Target, BookOpen, Trophy, TrendingUp, HelpCircle } from "lucide-react";
import { units } from "../data/curriculum";

function GithubIcon({ size = 16, className = "" }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}

export function LeftSidebar({ progress, onScrollToUnit }) {
  return (
    <div className="w-[280px] shrink-0 hidden lg:flex flex-col border-r border-[#2a3f48] bg-[var(--color-duo-surface)] h-[calc(100vh-56px)] sticky top-14">
      <div className="px-5 pt-5 pb-3">
        <h3 className="text-xs font-bold text-[#5a7a85] uppercase tracking-widest">Course Map</h3>
      </div>
      <nav className="flex-1 px-3 pb-4 overflow-y-auto">
        {units.map((unit) => {
          const completedCount = unit.lessons.filter(l => progress.completedLessons.includes(l.id)).length;
          const allDone = completedCount === unit.lessons.length;
          const storyDone = progress.completedStories.includes(unit.id);
          const hasProgress = completedCount > 0;

          return (
            <button
              key={unit.id}
              onClick={() => onScrollToUnit?.(unit.id)}
              className={`w-full text-left px-3 py-2.5 rounded-xl mb-1 flex items-center gap-3 transition-colors group
                ${allDone && storyDone
                  ? "hover:bg-[#1a3020]"
                  : hasProgress
                  ? "hover:bg-[var(--color-duo-surface2)]"
                  : "hover:bg-[var(--color-duo-surface2)] opacity-60"
                }`}
            >
              <span className="text-lg shrink-0">{unit.icon}</span>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-bold truncate ${allDone ? "text-[var(--color-duo-green)]" : "text-[#c0d0d8]"}`}>
                  {unit.title}
                </p>
                <p className="text-[11px] text-[#5a6a70] truncate">{unit.titleZh}</p>
              </div>
              <div className="shrink-0">
                {allDone && storyDone ? (
                  <Trophy size={14} className="text-[var(--color-duo-gold)]" />
                ) : (
                  <span className="text-[11px] font-bold text-[#4a5a62]">{completedCount}/{unit.lessons.length}</span>
                )}
              </div>
            </button>
          );
        })}
      </nav>

      {/* Left Sidebar Footer */}
      <div className="p-4 border-t border-[#2a3f48] bg-[var(--color-duo-surface)]">
        <a
          href="https://github.com/askofcc/gitlingo-tool"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2 bg-[var(--color-duo-surface2)] hover:bg-[#2e4a55] border border-[#3a4f58] rounded-xl text-xs font-bold text-white transition-all shadow-sm"
        >
          <GithubIcon size={14} className="text-[#8a9aa0]" />
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export function RightSidebar({ progress }) {
  const totalLessons = units.reduce((s, u) => s + u.lessons.length, 0);
  const completedLessons = progress.completedLessons.length;
  const completedStories = progress.completedStories.length;
  const totalStories = units.length;
  const overallPct = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="w-[280px] shrink-0 hidden lg:flex flex-col border-l border-[#2a3f48] bg-[var(--color-duo-surface)] h-[calc(100vh-56px)] sticky top-14 overflow-y-auto">
      {/* Progress overview */}
      <div className="px-5 pt-5 pb-4">
        <h3 className="text-xs font-bold text-[#5a7a85] uppercase tracking-widest mb-4">Progress</h3>

        {/* Circular progress */}
        <div className="flex justify-center mb-4">
          <div className="relative w-28 h-28">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke="#1c2c34" strokeWidth="8" />
              <circle cx="50" cy="50" r="42" fill="none" stroke="var(--color-duo-green)" strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${overallPct * 2.64} 264`}
                className="transition-all duration-700"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-black text-white">{overallPct}%</span>
              <span className="text-[10px] text-[#5a7a85] font-bold">COMPLETE</span>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-[var(--color-duo-surface2)] rounded-xl p-3 text-center"
            style={{ boxShadow: "inset 0 0 0 1px #2a3f48" }}
          >
            <div className="flex items-center justify-center gap-1 mb-1">
              <Flame size={14} className="text-[var(--color-duo-orange)]" fill="var(--color-duo-orange)" />
            </div>
            <p className="text-lg font-black text-white">{progress.streak}</p>
            <p className="text-[10px] text-[#5a7a85] font-bold">STREAK</p>
          </div>
          <div className="bg-[var(--color-duo-surface2)] rounded-xl p-3 text-center"
            style={{ boxShadow: "inset 0 0 0 1px #2a3f48" }}
          >
            <div className="flex items-center justify-center gap-1 mb-1">
              <Zap size={14} className="text-[var(--color-duo-gold)]" fill="var(--color-duo-gold)" />
            </div>
            <p className="text-lg font-black text-white">{progress.xp}</p>
            <p className="text-[10px] text-[#5a7a85] font-bold">TOTAL XP</p>
          </div>
          <div className="bg-[var(--color-duo-surface2)] rounded-xl p-3 text-center"
            style={{ boxShadow: "inset 0 0 0 1px #2a3f48" }}
          >
            <div className="flex items-center justify-center gap-1 mb-1">
              <BookOpen size={14} className="text-[var(--color-duo-blue)]" />
            </div>
            <p className="text-lg font-black text-white">{progress.wordsLearned}</p>
            <p className="text-[10px] text-[#5a7a85] font-bold">WORDS</p>
          </div>
          <div className="bg-[var(--color-duo-surface2)] rounded-xl p-3 text-center"
            style={{ boxShadow: "inset 0 0 0 1px #2a3f48" }}
          >
            <div className="flex items-center justify-center gap-1 mb-1">
              <Target size={14} className="text-[var(--color-duo-purple)]" />
            </div>
            <p className="text-lg font-black text-white">{completedLessons}/{totalLessons}</p>
            <p className="text-[10px] text-[#5a7a85] font-bold">LESSONS</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#2a3f48] mx-5" />

      {/* Stories progress */}
      <div className="px-5 pt-4 pb-5">
        <h3 className="text-xs font-bold text-[#5a7a85] uppercase tracking-widest mb-3">Stories</h3>
        <div className="flex items-center gap-3">
          <div className="flex-1 h-2 bg-[#1c2c34] rounded-full overflow-hidden">
            <div className="h-full bg-[var(--color-duo-blue)] rounded-full transition-all duration-500"
              style={{ width: `${(completedStories / totalStories) * 100}%` }}
            />
          </div>
          <span className="text-xs font-bold text-[#5a7a85]">{completedStories}/{totalStories}</span>
        </div>
      </div>

      {/* Tips */}
      <div className="border-t border-[#2a3f48] mx-5" />
      <div className="px-5 pt-4 pb-5">
        <div className="bg-[#1a3040] rounded-xl p-4" style={{ boxShadow: "inset 0 0 0 1px #264050" }}>
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={14} className="text-[var(--color-duo-blue)]" />
            <span className="text-xs font-bold text-[var(--color-duo-blue)]">TIP</span>
          </div>
          <p className="text-xs text-[#8a9aa8] leading-relaxed">
            Click on any English word to hear its pronunciation. Practice saying it out loud!
          </p>
        </div>
      </div>
    </div>
  );
}
