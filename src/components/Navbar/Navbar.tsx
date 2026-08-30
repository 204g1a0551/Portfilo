import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Github, Linkedin, FileDown } from 'lucide-react';
import { profileData } from '../../data/profile';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(['hero', 'about', 'skills', 'experience', 'projects', 'github', 'contact']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-2 text-white font-bold tracking-tight focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-[1px] shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all">
            <div className="w-full h-full bg-surface-card rounded-[11px] flex items-center justify-center font-mono text-sm text-cyan-400 font-bold">
              MG
            </div>
          </div>
          <span className="font-mono text-sm md:text-base font-semibold tracking-wide text-slate-100 group-hover:text-cyan-400 transition-colors">
            {profileData.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 glass px-3 py-1.5 rounded-full border border-white/5">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-300 font-semibold bg-white/5 shadow-inner'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons & CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="./resume.pdf"
            download="Mahesh_Kumar_Godela_Resume.pdf"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium text-slate-300 hover:text-white glass rounded-lg border border-white/10 hover:border-cyan-500/40 transition-colors"
          >
            <FileDown className="w-3.5 h-3.5 text-cyan-400" />
            Resume
          </a>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white rounded-lg overflow-hidden transition-all duration-300 bg-gradient-to-r from-cyan-500 via-indigo-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="./resume.pdf"
            download="Mahesh_Kumar_Godela_Resume.pdf"
            className="p-2 rounded-lg glass text-slate-300 hover:text-white border border-white/10"
            aria-label="Download Resume"
          >
            <FileDown className="w-4 h-4 text-cyan-400" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg glass text-slate-300 hover:text-white border border-white/10 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 glass-nav border-b border-white/10 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-1 py-2">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 font-semibold border-l-2 border-cyan-400'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center justify-between px-2 text-slate-400">
              <span className="text-xs font-mono">Quick Links</span>
              <div className="flex items-center gap-3">
                <a
                  href={profileData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profileData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full text-center py-2.5 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium text-sm shadow-md"
            >
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
