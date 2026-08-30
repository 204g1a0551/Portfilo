import React, { useState } from 'react';
import { generateContributionData, ContributionDay } from '../../data/github';
import { Flame, CalendarCheck, GitCommit } from 'lucide-react';

export const ContributionHeatmap: React.FC = () => {
  const { days, totalContributions, longestStreak, currentStreak } = generateContributionData();
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);

  const getCellColor = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-cyan-950/60 border-cyan-900/40 hover:bg-cyan-900';
      case 2:
        return 'bg-cyan-800/80 border-cyan-700/50 hover:bg-cyan-700';
      case 3:
        return 'bg-cyan-600 border-cyan-500 hover:bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.4)]';
      case 4:
        return 'bg-cyan-400 border-cyan-300 hover:bg-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.7)]';
      default:
        return 'bg-surface/80 border-white/5 hover:border-white/20';
    }
  };

  return (
    <div className="glass-card p-6 rounded-2xl border border-white/10">
      {/* Header with Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h4 className="text-base font-bold text-white flex items-center gap-2">
            <GitCommit className="w-4 h-4 text-cyan-400" />
            <span>Activity &amp; Commit Heatmap</span>
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            Demonstrating active problem solving, project iterations, and open-source contributions
          </p>
        </div>

        {/* Quick Streak Pills */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface/90 border border-white/10 text-xs font-mono">
            <CalendarCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-slate-300">{totalContributions} contributions</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface/90 border border-white/10 text-xs font-mono">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-slate-300">{currentStreak}d streak ({longestStreak}d best)</span>
          </div>
        </div>
      </div>

      {/* Heatmap Grid Wrapper (horizontally scrollable on small mobile) */}
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[640px]">
          {/* Days Grid: 7 rows (Sun-Sat) */}
          <div className="grid grid-flow-col grid-rows-7 gap-1.5 justify-start">
            {days.map((day, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredDay(day)}
                onMouseLeave={() => setHoveredDay(null)}
                className={`w-3 h-3 rounded-[3px] border transition-all duration-150 cursor-pointer ${getCellColor(day.level)}`}
              />
            ))}
          </div>

          {/* Legend & Tooltip readout */}
          <div className="flex items-center justify-between mt-4 text-[11px] font-mono text-slate-400">
            <div>
              {hoveredDay ? (
                <span className="text-cyan-300 font-medium">
                  {hoveredDay.count} {hoveredDay.count === 1 ? 'commit' : 'commits'} on {hoveredDay.date}
                </span>
              ) : (
                <span className="text-slate-300">Hover over any cell for details</span>
              )}
            </div>

            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <div className="w-2.5 h-2.5 rounded-[2px] bg-surface/80 border border-white/5" />
              <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-950/60 border border-cyan-900/40" />
              <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-800/80 border border-cyan-700/50" />
              <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-600 border border-cyan-500" />
              <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-400 border border-cyan-300" />
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
