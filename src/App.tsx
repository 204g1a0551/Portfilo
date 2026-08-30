import React from 'react';
import { CustomCursor } from './components/UI/CustomCursor';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { GitHubSection } from './components/GitHub/GitHubSection';
import { ResumeSection } from './components/Resume/ResumeSection';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-slate-100 relative selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Interactive custom cursor for desktop */}
      <CustomCursor />

      {/* Persistent fine cyber grid background */}
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-40 z-0" />

      {/* Sticky glassmorphic navbar */}
      <Navbar />

      {/* Main sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GitHubSection />
        <ResumeSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
