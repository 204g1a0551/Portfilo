import React from 'react';
import { Github, Linkedin, Mail, Code2, Sparkles, FileDown, ExternalLink } from 'lucide-react';
import { profileData } from '../../data/profile';
import { RoleCycler } from './RoleCycler';
import { HeroScene } from '../3D/HeroScene';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-indigo/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="font-semibold tracking-wider uppercase">Full Stack &amp; AI Systems Engineer</span>
            </div>

            {/* Main Greeting and Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  {profileData.name}
                </span>
              </h1>
              
              {/* Animated Role Cycling Subheading */}
              <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-300 flex flex-wrap items-center gap-x-2 pt-1">
                <span>Building</span>
                <RoleCycler roles={profileData.titles} />
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              {profileData.about}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => handleScrollTo('projects')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-cyan-500/35 transition-all duration-300 flex items-center gap-2 group"
              >
                <span>View My Work</span>
                <Sparkles className="w-4 h-4 text-cyan-200 group-hover:rotate-12 transition-transform" />
              </button>

              <a
                href={profileData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl glass text-slate-200 hover:text-white font-medium text-sm border border-white/10 hover:border-cyan-500/40 hover:bg-white/5 transition-all flex items-center gap-2"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href="./resume.pdf"
                download="Mahesh_Kumar_Godela_Resume.pdf"
                className="px-5 py-3 rounded-xl glass text-slate-200 hover:text-white font-medium text-sm border border-white/10 hover:border-indigo-500/40 hover:bg-white/5 transition-all flex items-center gap-2"
              >
                <FileDown className="w-4 h-4 text-indigo-400" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Icons & Coding Links */}
            <div className="flex items-center gap-4 pt-2 text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={profileData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg glass hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profileData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg glass hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={profileData.social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg glass hover:text-amber-400 hover:border-amber-500/30 transition-colors"
                  aria-label="LeetCode Profile"
                >
                  <Code2 className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className="p-2 rounded-lg glass hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Highlights Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
              {profileData.stats.map((stat, idx) => (
                <div key={idx} className="glass-card p-3 rounded-xl">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-300 leading-snug mt-1 truncate">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Interactive Scene */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full">
              <HeroScene />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 text-center flex flex-col items-center justify-center">
          <button
            onClick={() => handleScrollTo('about')}
            className="group flex flex-col items-center gap-2 text-xs font-mono text-slate-300 hover:text-cyan-400 transition-colors"
            aria-label="Scroll to explore"
          >
            <span>SCROLL TO EXPLORE ↓</span>
            <div className="w-6 h-10 rounded-full border border-slate-700 flex items-start justify-center p-1 group-hover:border-cyan-500/50 transition-colors">
              <div className="w-1.5 h-2.5 bg-cyan-400 rounded-full animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
