import React from 'react';
import { SectionHeading } from '../UI/SectionHeading';
import { profileData } from '../../data/profile';
import { JourneyTimeline } from './JourneyTimeline';
import { Badge } from '../UI/Badge';
import { Award, GraduationCap, Users, Cpu, ShieldCheck, Sparkles, Terminal, Info } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Profile &amp; Architecture"
          title="Full Stack Modernization &amp; High-Trust AI"
          subtitle="Engineering resilient enterprise banking microservices at TCS, reactive Angular SPAs, and zero-hallucination agentic intelligence systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Bio, Quick Facts, and Credentials */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Bio Card */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">About Me &amp; Technical Mission</h3>
                  <p className="text-xs font-mono text-cyan-400">Enterprise Systems • Reactive Frontend • Agentic AI</p>
                </div>
              </div>

              <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-3.5">
                <p>
                  I am an <strong className="text-white">Enterprise Full-Stack Software Engineer</strong> with 2+ years of experience designing, modernizing, and scaling mission-critical web applications, microservices, and applied AI systems.
                </p>
                <p>
                  At <strong className="text-white">Tata Consultancy Services (TCS)</strong>, I engineer banking solutions for an enterprise Anti-Money Laundering (AML) and Fraud Detection platform. My work centers on modernizing legacy C++, Spring MVC, and JSP monoliths into scalable Spring Boot REST APIs and reactive Angular SPAs, implementing enterprise Single Sign-On (SSO) with Spring Security, remediating Broken Access Control (OWASP Top 10), and integrating AWS cloud banking endpoints.
                </p>
                <p>
                  Beyond enterprise banking, I specialize in <strong className="text-white">Agentic AI and Advanced RAG architectures</strong>. I build production-grade intelligent systems that eliminate LLM hallucinations through deterministic calculation hierarchies, AST-sandboxed computation, and multi-agent workflow orchestration.
                </p>
              </div>

              {/* Dual Pillars Callout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 mt-4 border-t border-white/10">
                <div className="p-3.5 rounded-xl bg-surface/80 border border-white/5">
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    <Cpu className="w-4 h-4" />
                    <span>Enterprise Modernization</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Java 17, Spring Boot, Spring Security (SSO/RBAC), Reactive Angular (Signals/RxJS), AWS Cloud Banking.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-surface/80 border border-white/5">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span>High-Trust Agentic AI</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    LangGraph Multi-Agent Workflows, Qdrant/Chroma Vector RAG, AST Math Verification, Gemini LLMs.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Profile Facts Card */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Info className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Quick Profile Facts</h3>
                </div>
                <Badge variant="cyan">Fast Facts</Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {profileData.quickFacts.map((fact, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-surface/80 border border-white/5 flex flex-col justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-1">
                      {fact.label}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Card */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Verified Certifications &amp; Badges</h3>
                </div>
                <Badge variant="amber">Industry Credentials</Badge>
              </div>

              <div className="space-y-2.5">
                {profileData.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-surface/80 border border-white/5 flex items-center justify-between gap-3 hover:border-amber-500/30 transition-all"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Issued by <span className="text-slate-200 font-medium">{cert.issuer}</span>
                      </p>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/25">
                      Verified
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Background */}
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
                <span>Leadership &amp; Community Engagement</span>
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
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Career Trajectory</h3>
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
