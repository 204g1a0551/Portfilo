import React from 'react';
import { profileData } from '../../data/profile';
import { ArrowUp, Github, Linkedin, Mail, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 py-12 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 p-[1px]">
              <div className="w-full h-full bg-surface-card rounded-[7px] flex items-center justify-center font-mono text-xs text-cyan-400 font-bold">
                MG
              </div>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-mono">
                &copy; {new Date().getFullYear()} {profileData.name}. Built with React, TypeScript &amp; Three.js.
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Engineered for high performance, accessibility, and zero compromise.
              </p>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={profileData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass text-slate-400 hover:text-cyan-400 border border-white/5 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass text-slate-400 hover:text-cyan-400 border border-white/5 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profileData.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass text-slate-400 hover:text-amber-400 border border-white/5 transition-colors"
                aria-label="LeetCode Profile"
              >
                <Code2 className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-2 rounded-lg glass text-slate-400 hover:text-cyan-400 border border-white/5 transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="h-4 w-[1px] bg-white/10" />

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg glass text-slate-400 hover:text-white border border-white/10 hover:border-cyan-500/30 transition-all group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
