import React from 'react';
import { Project } from '../../types';
import { Badge } from '../UI/Badge';
import { ExternalLink, Github, ArrowRight, ShieldAlert, Sprout, ShieldCheck, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const getProjectIcon = () => {
    if (project.id.includes('aml')) return <ShieldAlert className="w-5 h-5 text-indigo-400" />;
    if (project.id.includes('agri')) return <Sprout className="w-5 h-5 text-emerald-400" />;
    if (project.id.includes('ddos')) return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
    return <Layers className="w-5 h-5 text-cyan-400" />;
  };

  return (
    <div className="group relative rounded-2xl glass-card border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-xl hover:shadow-cyan-500/10">
      
      {/* Top Banner & Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-surface/90 border border-white/10 flex items-center justify-center shadow-inner">
              {getProjectIcon()}
            </div>
            <div>
              <Badge variant="cyan" size="sm">{project.category}</Badge>
            </div>
          </div>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl glass text-slate-400 hover:text-white border border-white/10 hover:border-cyan-500/30 transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Primary Metric Pill */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-4 p-2.5 rounded-xl bg-surface/80 border border-white/5 flex items-center gap-2 text-xs font-mono text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-semibold">{project.metrics[0]}</span>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          {project.technologies.slice(0, 5).map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Footer Action Buttons */}
      <div className="p-4 pt-3 border-t border-white/10 bg-surface/40 flex items-center justify-between">
        <button
          onClick={() => onSelect(project)}
          className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 group/btn transition-colors"
        >
          <span>View Architecture &amp; Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Code</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
};
