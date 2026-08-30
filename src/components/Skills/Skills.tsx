import React, { useState, useMemo } from 'react';
import { SectionHeading } from '../UI/SectionHeading';
import { skillCategories } from '../../data/skills';
import { SkillCard } from './SkillCard';
import { Search, Layers } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => {
    return ['All', ...skillCategories.map((c) => c.title)];
  }, []);

  const filteredCategories = useMemo(() => {
    return skillCategories
      .filter((cat) => selectedCategory === 'All' || cat.title === selectedCategory)
      .map((cat) => {
        const filteredSkills = cat.skills.filter((skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (skill.tag && skill.tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (skill.relatedProjects &&
            skill.relatedProjects.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase())))
        );
        return {
          ...cat,
          skills: filteredSkills
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-20 relative bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Arsenal"
          title="Skills &amp; Technologies"
          subtitle="A battle-tested technology stack spanning scalable Java/Spring backends, Angular client applications, and cutting-edge AI architectures."
        />

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl glass border border-white/5 w-full md:w-auto overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold shadow-sm border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl glass text-slate-200 placeholder-slate-500 border border-white/10 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Categories & Skills Grid */}
        <div className="space-y-12">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12 glass-card rounded-2xl">
              <Layers className="w-8 h-8 text-slate-500 mx-auto mb-2" />
              <p className="text-sm text-slate-400">No matching skills found for "{searchQuery}"</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-3 text-xs font-mono text-cyan-400 hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredCategories.map((category, cIdx) => (
              <div key={cIdx} className="space-y-4">
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-white/5 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-xs text-slate-400 font-mono mt-1 sm:mt-0">
                    {category.description}
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill, sIdx) => (
                    <SkillCard
                      key={sIdx}
                      skill={skill}
                    />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
