import React from 'react';
import { SectionHeading } from '../UI/SectionHeading';
import { githubRepositories, githubUsername, githubProfileUrl } from '../../data/github';
import { ContributionHeatmap } from './ContributionHeatmap';
import { Github, Star, GitFork, ExternalLink, Code2 } from 'lucide-react';
import { profileData } from '../../data/profile';

export const GitHubSection: React.FC = () => {
  return (
    <section id="github" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Open Source &amp; Code"
          title="Built in Public"
          subtitle="Explore code repositories, architectural templates, and active commits published on GitHub."
        />

        {/* Profile Card Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 glass-card rounded-2xl border border-white/10 mb-8">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-surface-card rounded-[15px] flex items-center justify-center text-white">
                <Github className="w-7 h-7" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">@{githubUsername}</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Active
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Full-Stack (Java / Angular) &amp; Applied AI/ML Projects
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profileData.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl glass text-slate-300 hover:text-amber-400 font-mono text-xs border border-white/10 hover:border-amber-500/30 flex items-center gap-1.5 transition-colors"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>LeetCode Profile</span>
            </a>

            <a
              href={githubProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-medium text-xs shadow-md shadow-cyan-500/20 flex items-center gap-1.5 transition-all"
            >
              <span>View GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {githubRepositories.map((repo, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-card border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                  >
                    <span>{repo.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface/90 text-cyan-400 border border-white/5">
                    {repo.language}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {repo.description}
                </p>

                {/* Topics / Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {repo.topics.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Repo Stats & Action */}
              <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 hover:text-amber-300 transition-colors">
                    <Star className="w-3.5 h-3.5" />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 hover:text-cyan-300 transition-colors">
                    <GitFork className="w-3.5 h-3.5" />
                    <span>{repo.forks}</span>
                  </div>
                </div>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Inspect &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Contribution Heatmap */}
        <ContributionHeatmap />
      </div>
    </section>
  );
};
