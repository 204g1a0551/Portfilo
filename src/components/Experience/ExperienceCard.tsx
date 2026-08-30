import React, { useState } from 'react';
import { Experience } from '../../types';
import { Badge } from '../UI/Badge';
import { ChevronDown, ChevronUp, MapPin, Calendar, CheckCircle2, TrendingUp, Cpu } from 'lucide-react';

interface ExperienceCardProps {
  exp: Experience;
  isFirst?: boolean;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, isFirst = false }) => {
  const [isExpanded, setIsExpanded] = useState(isFirst);

  return (
    <div className="relative group">
      {/* Timeline Node */}
      <div className="absolute -left-[35px] sm:-left-[43px] top-6 w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20">
        <div className="w-full h-full bg-surface-card rounded-[11px] flex items-center justify-center text-cyan-400">
          <Cpu className="w-4 h-4" />
        </div>
      </div>

      {/* Main Experience Container */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
        
        {/* Header: Role, Company, Period */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {exp.role}
              </h3>
              <Badge variant="indigo" size="sm">{exp.type}</Badge>
            </div>
            <div className="text-base font-semibold text-cyan-400">
              {exp.company}
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-1 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>{exp.period}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{exp.location}</span>
            </div>
          </div>
        </div>

        {/* Summary */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
          {exp.summary}
        </p>

        {/* Key Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {exp.metrics.map((m, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-surface/90 border border-white/5">
              <div className="text-lg sm:text-xl font-bold font-mono text-cyan-400">
                {m.value}
              </div>
              <div className="text-[11px] font-medium text-slate-300 mt-0.5 leading-tight">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies Pills */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6">
          {exp.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expand/Collapse Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <span>{isExpanded ? 'Hide Detailed Responsibilities & Achievements' : 'Show Detailed Responsibilities & Achievements'}</span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {/* Expandable Body */}
        {isExpanded && (
          <div className="pt-6 space-y-6 animate-in fade-in duration-300">
            {/* Responsibilities */}
            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Production Responsibilities &amp; Engineering Contributions</span>
              </h4>
              <ul className="space-y-2.5">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed">
                    <span className="text-cyan-400 mt-1 shrink-0">▸</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Achievements */}
            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>Measurable Impact &amp; Milestones</span>
              </h4>
              <ul className="space-y-2">
                {exp.achievements.map((ach, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                    <span className="text-emerald-400 mt-1 shrink-0">✔</span>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
