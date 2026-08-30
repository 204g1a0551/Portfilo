import React, { useEffect } from 'react';
import { Project } from '../../types';
import { X, ExternalLink, Github, Layers, AlertCircle, CheckCircle, Cpu, BarChart3 } from 'lucide-react';
import { Badge } from '../UI/Badge';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Blurred Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl glass-card border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 my-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl glass text-slate-400 hover:text-white border border-white/10 hover:border-white/20 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Badge variant="cyan">{project.category}</Badge>
            {project.featured && <Badge variant="indigo">Featured Project</Badge>}
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-surface/90 border border-white/5 flex items-center gap-2.5">
              <BarChart3 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-xs font-semibold text-slate-200">{metric}</span>
            </div>
          ))}
        </div>

        {/* Problem vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20">
            <div className="flex items-center gap-2 text-red-400 text-xs font-mono font-semibold uppercase mb-2">
              <AlertCircle className="w-4 h-4" />
              <span>The Problem</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold uppercase mb-2">
              <CheckCircle className="w-4 h-4" />
              <span>The Engineered Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture & Engineering Highlights */}
        {project.architecture && project.architecture.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>Architectural Breakdown</span>
            </h4>
            <div className="space-y-2">
              {project.architecture.map((arch, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-surface/80 border border-white/5 text-xs text-slate-300 flex items-start gap-2.5">
                  <span className="text-indigo-400 font-mono font-bold mt-0.5">{idx + 1}.</span>
                  <span>{arch}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Highlights */}
        <div className="mb-6">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>Key Capabilities &amp; Highlights</span>
          </h4>
          <ul className="space-y-2">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                <span className="text-cyan-400 mt-1 shrink-0">▸</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Badges */}
        <div className="mb-6 pt-4 border-t border-white/10">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
            Technology Stack:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-200 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl glass text-slate-200 hover:text-white font-medium text-xs border border-white/10 hover:border-cyan-500/40 flex items-center gap-2 transition-all"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>View Repository</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          )}
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-surface-card hover:bg-surface-hover text-white font-medium text-xs border border-white/10 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
