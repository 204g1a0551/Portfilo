import React from 'react';
import { SkillItem } from '../../types';

interface SkillCardProps {
  skill: SkillItem;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="group relative p-4 rounded-xl glass-card hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between h-full">
      {/* Top row */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <h4 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
            {skill.name}
          </h4>
          {skill.level && (
            <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border ${
              skill.level === 'Advanced'
                ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20'
                : 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20'
            }`}>
              {skill.level}
            </span>
          )}
        </div>

        {skill.tag && (
          <p className="text-xs text-slate-300 mb-3">
            {skill.tag}
          </p>
        )}
      </div>

      {/* Bottom row: Related projects */}
      {skill.relatedProjects && skill.relatedProjects.length > 0 && (
        <div className="pt-2 border-t border-white/5 mt-auto">
          <div className="text-[10px] font-mono text-slate-300 uppercase tracking-wider mb-1 flex items-center gap-1">
            <span>Applied in:</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {skill.relatedProjects.map((proj, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface/90 text-cyan-300/90 border border-cyan-500/20 flex items-center gap-1"
              >
                <span>{proj}</span>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
