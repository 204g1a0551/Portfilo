import React, { useState, useMemo } from 'react';
import { SectionHeading } from '../UI/SectionHeading';
import { projectsData } from '../../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Project } from '../../types';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filterOptions = [
    'ALL',
    'AGENTIC AI',
    'FULL STACK',
    'JAVA & SPRING BOOT',
    'ANGULAR',
    'AI/ML & SECURITY'
  ];

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'ALL') return projectsData;
    if (selectedFilter === 'AGENTIC AI') {
      return projectsData.filter((p) =>
        p.category === 'Agentic AI' ||
        p.technologies.some((t) =>
          t.toLowerCase().includes('langgraph') ||
          t.toLowerCase().includes('qdrant') ||
          t.toLowerCase().includes('rag') ||
          t.toLowerCase().includes('gemini')
        )
      );
    }
    if (selectedFilter === 'FULL STACK') {
      return projectsData.filter((p) =>
        p.category === 'Full Stack' ||
        p.technologies.some((t) => t.toLowerCase().includes('angular') || t.toLowerCase().includes('spring'))
      );
    }
    if (selectedFilter === 'JAVA & SPRING BOOT') {
      return projectsData.filter((p) =>
        p.technologies.some((t) =>
          t.toLowerCase().includes('java') ||
          t.toLowerCase().includes('spring') ||
          t.toLowerCase().includes('jdbc') ||
          t.toLowerCase().includes('poi')
        )
      );
    }
    if (selectedFilter === 'ANGULAR') {
      return projectsData.filter((p) =>
        p.technologies.some((t) => t.toLowerCase().includes('angular') || t.toLowerCase().includes('signals'))
      );
    }
    if (selectedFilter === 'AI/ML & SECURITY') {
      return projectsData.filter((p) =>
        p.category === 'AI/ML' ||
        p.category === 'Security' ||
        p.category === 'Agentic AI' ||
        p.technologies.some((t) =>
          t.toLowerCase().includes('ai') ||
          t.toLowerCase().includes('ml') ||
          t.toLowerCase().includes('opencv') ||
          t.toLowerCase().includes('scikit') ||
          t.toLowerCase().includes('smote') ||
          t.toLowerCase().includes('security')
        )
      );
    }
    return projectsData;
  }, [selectedFilter]);

  return (
    <section id="projects" className="py-20 relative bg-surface/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Production &amp; Research"
          title="Featured Projects"
          subtitle="Enterprise banking modernization, high-trust agentic AI architectures, reactive Angular applications, and cloud microservices."
        />

        {/* Filter Buttons Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider font-semibold transition-all duration-200 ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20 scale-105'
                  : 'glass text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
