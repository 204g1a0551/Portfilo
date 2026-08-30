import React from 'react';
import { GraduationCap, Code, Briefcase, Award } from 'lucide-react';

interface JourneyStep {
  year: string;
  title: string;
  organization: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const journeySteps: JourneyStep[] = [
  {
    year: "2020 — 2024",
    title: "B.Tech in Computer Science",
    organization: "Srinivasa Ramanujan Institute of Tech",
    description: "Deep fundamental study in Data Structures, Algorithms, Java, and Python. Active coordinator for national technical fests and academic seminars.",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500"
  },
  {
    year: "Jun 2024 — Jan 2025",
    title: "Technical Trainer & Mentor",
    organization: "SRIT Technical Training Cell",
    description: "Trained 500+ engineering students in Java, Python, and Django web development. Guided 200 student full-stack projects to completion.",
    icon: Code,
    color: "from-cyan-500 to-teal-500"
  },
  {
    year: "Feb 2025 — Present",
    title: "Full Stack AI Engineer",
    organization: "Tata Consultancy Services (TCS)",
    description: "Engineered 12+ enterprise AML banking compliance features across 6 sprints using Spring Boot, Angular, and LLM-assisted workflow automation.",
    icon: Briefcase,
    color: "from-indigo-500 to-violet-500"
  },
  {
    year: "2024 — Present",
    title: "Industry Certifications",
    organization: "AWS & Anthropic",
    description: "Certified AWS Developer – Associate (DVA-C02) and Claude Certified Developer, deploying resilient cloud & modern LLM agent architectures.",
    icon: Award,
    color: "from-amber-500 to-orange-500"
  }
];

export const JourneyTimeline: React.FC = () => {
  return (
    <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-8 my-6">
      {journeySteps.map((step, idx) => {
        const Icon = step.icon;
        return (
          <div key={idx} className="relative group">
            {/* Dot / Icon on the timeline */}
            <div className={`absolute -left-[35px] sm:-left-[43px] top-1 w-8 h-8 rounded-xl bg-gradient-to-br ${step.color} p-[1px] shadow-lg`}>
              <div className="w-full h-full bg-surface-card rounded-[11px] flex items-center justify-center text-white">
                <Icon className="w-4 h-4" />
              </div>
            </div>

            {/* Content card */}
            <div className="glass-card p-4 sm:p-5 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <span className="text-xs font-mono font-semibold text-cyan-400">
                  {step.year}
                </span>
                <span className="text-xs font-medium text-slate-300">
                  {step.organization}
                </span>
              </div>
              <h4 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                {step.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
