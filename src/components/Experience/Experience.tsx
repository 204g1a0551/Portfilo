import React from 'react';
import { SectionHeading } from '../UI/SectionHeading';
import { experienceData } from '../../data/experience';
import { ExperienceCard } from './ExperienceCard';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Work History"
          title="Professional Experience"
          subtitle="A track record of shipping production-grade banking compliance software at TCS and mentoring the next generation of software engineers."
        />

        {/* Timeline Stream */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-12">
          {experienceData.map((exp, idx) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              isFirst={idx === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
