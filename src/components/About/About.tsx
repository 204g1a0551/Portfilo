import React from 'react';
import { SectionHeading } from '../UI/SectionHeading';
import { profileData } from '../../data/profile';
import { JourneyTimeline } from './JourneyTimeline';
import { Badge } from '../UI/Badge';
import { Award, GraduationCap, Users, Cpu, ShieldCheck, Sparkles, Terminal } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Profile &amp; Background"
          title="Bridging Enterprise Scale &amp; Intelligent AI"
          subtitle="A disciplined full-stack engineer building resilient backend microservices, responsive web portals, and applied machine learning models."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Philosophy, Objective, and Credentials */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Objective & Bio Card */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Engineering Philosophy</h3>
                  <p className="text-xs font-mono text-cyan-400">Clean Architecture • Scalability • Impact</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                {profileData.objective}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-surface/80 border border-white/5">
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    <Cpu className="w-4 h-4" />
                    <span>Backend Microservices</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Java, Spring Boot, REST APIs, high-concurrency transaction processing, and PostgreSQL.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-surface/80 border border-white/5">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span>Applied AI &amp; LLMs</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Computer Vision (95% accuracy), LSTM anomaly detection, LangChain, and RAG systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Verified Certifications</h3>
                </div>
                <Badge variant="amber">Industry Validated</Badge>
              </div>

              <div className="space-y-3">
                {profileData.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-surface/80 border border-white/5 flex items-start justify-between gap-3 hover:border-amber-500/30 transition-all"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                        {cert.name}
                        {cert.code && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/25">
                            {cert.code}
                          </span>
                        )}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1">
                        Issued by <span className="text-slate-200 font-medium">{cert.issuer}</span>
                      </p>
                    </div>
                    <span className="text-xs font-mono text-slate-300 whitespace-nowrap">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Cards */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Academic Background</h3>
              </div>

              <div className="space-y-3">
                {profileData.education.map((edu, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-surface/80 border border-white/5">
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                      <h4 className="text-sm font-semibold text-white">{edu.degree}</h4>
                      <span className="text-xs font-mono text-cyan-400">{edu.period}</span>
                    </div>
                    <p className="text-xs text-slate-300">{edu.institution} • {edu.location}</p>
                    {edu.highlights && (
                      <ul className="mt-2 space-y-1">
                        {edu.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="text-xs text-slate-300 flex items-start gap-1.5">
                            <span className="text-cyan-400 mt-1">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Extracurricular Leadership Card */}
            <div className="glass-card p-5 sm:p-6 rounded-2xl border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300 uppercase tracking-wider mb-3">
                <Users className="w-4 h-4 text-cyan-400" />
                <span>Leadership &amp; Campus Engagement</span>
              </div>
              <ul className="space-y-2">
                {profileData.extraCurricular.map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Interactive Journey Timeline */}
          <div className="lg:col-span-6">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Career &amp; Growth Trajectory</h3>
                  <p className="text-xs text-slate-400">Milestones from academic foundation to enterprise shipping</p>
                </div>
                <Badge variant="cyan">Milestones</Badge>
              </div>

              <JourneyTimeline />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
