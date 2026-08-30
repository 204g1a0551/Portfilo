import React from 'react';
import { SectionHeading } from '../UI/SectionHeading';
import { FileDown, CheckCircle2, ExternalLink } from 'lucide-react';
import { profileData } from '../../data/profile';

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-20 relative bg-surface/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Curriculum Vitae"
          title="Want the complete picture?"
          subtitle="Download my detailed resume covering complete production delivery history, technical proficiencies, academic records, and certifications."
        />

        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden text-center shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px] mx-auto mb-6 shadow-xl shadow-cyan-500/20 flex items-center justify-center">
              <div className="w-full h-full bg-surface-card rounded-[15px] flex items-center justify-center text-cyan-400">
                <FileDown className="w-8 h-8" />
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {profileData.name} — Technical Resume
            </h3>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              Updated for 2026. Ready for Angular/Java Full-Stack and AI/ML Engineer opportunities across enterprise systems and cutting-edge startups.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-left">
              <div className="p-3 rounded-xl bg-surface/80 border border-white/5 flex items-center gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>1.5+ Years at TCS (AML &amp; Fraud Detection)</span>
              </div>
              <div className="p-3 rounded-xl bg-surface/80 border border-white/5 flex items-center gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Full-Stack Java, Spring Boot &amp; Angular</span>
              </div>
              <div className="p-3 rounded-xl bg-surface/80 border border-white/5 flex items-center gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Applied AI/ML, Computer Vision &amp; LLMs</span>
              </div>
              <div className="p-3 rounded-xl bg-surface/80 border border-white/5 flex items-center gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>AWS Certified &amp; Claude Certified Developer</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="./resume.pdf"
                download="Mahesh_Kumar_Godela_Resume.pdf"
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 flex items-center gap-2.5 transition-all transform hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="./resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl glass text-slate-300 hover:text-white font-medium text-sm border border-white/10 hover:border-white/20 flex items-center gap-2 transition-colors"
              >
                <span>Preview Document</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
