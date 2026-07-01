import { Flame, Zap, RotateCcw, GitBranch } from "lucide-react";

function GithubIcon({ size = 18, className = "" }) {
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

export default function Header({ progress, onReset }) {
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-duo-surface)] h-14 flex items-center"
      style={{ boxShadow: "0 1px 0 #2a3f48, 0 4px 12px rgba(0,0,0,0.25)" }}
    >
      <div className="w-full px-4 sm:px-6 flex items-center justify-between">
        {/* Logo with link to App Home */}
        <div className="flex items-center gap-2 shrink-0 select-none">
          <div className="w-8 h-8 rounded-lg bg-[var(--color-duo-green)] flex items-center justify-center"
            style={{ boxShadow: "0 2px 0 var(--color-duo-green-dark)" }}
          >
            <GitBranch size={17} className="text-white animate-pulse" />
          </div>
          <span className="text-[17px] font-extrabold tracking-tight text-white">
            Git<span className="text-[var(--color-duo-green)]">Lingo</span>
          </span>
        </div>

        {/* Stats & Actions */}
        <div className="flex items-center gap-4 sm:gap-5">
          {/* GitHub link button */}
          <a
            href="https://github.com/askofcc/gitlingo-tool"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#1f2d35] hover:bg-[#2a3f48] text-white border border-[#2a3f48] px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm group hover:scale-105"
          >
            <GithubIcon size={14} className="text-[#8a9aa0] group-hover:text-white transition-colors" />
            <span className="hidden sm:inline">Star on GitHub</span>
          </a>

          {/* Streak */}
          <div className="flex items-center gap-1" title={`${progress.streak} day streak`}>
            <Flame size={20} className="text-[var(--color-duo-orange)]" fill="var(--color-duo-orange)" />
            <span className="font-extrabold text-sm text-[var(--color-duo-orange)]">
              {progress.streak}
            </span>
          </div>

          {/* XP */}
          <div className="flex items-center gap-1" title={`${progress.xp} XP`}>
            <Zap size={20} className="text-[var(--color-duo-gold)]" fill="var(--color-duo-gold)" />
            <span className="font-extrabold text-sm text-[var(--color-duo-gold)]">
              {progress.xp}
            </span>
          </div>

          {/* Words pill — hidden on desktop since right sidebar shows it */}
          <div className="flex lg:hidden items-center gap-1.5 bg-[var(--color-duo-surface2)] px-2.5 py-1 rounded-lg"
            title={`${progress.wordsLearned} words learned`}
          >
            <span className="text-xs font-bold text-[#8a9aa0]">
              {progress.wordsLearned}<span className="text-[#5a6a70] ml-0.5 hidden sm:inline">words</span>
            </span>
          </div>

          {/* Reset */}
          <button
            onClick={() => { if (window.confirm("Reset all progress?")) onReset(); }}
            className="p-1.5 rounded-lg hover:bg-[var(--color-duo-surface2)] transition-colors shrink-0"
            title="Reset progress"
          >
            <RotateCcw size={15} className="text-[#5a6a70]" />
          </button>
        </div>
      </div>
    </header>
  );
}
