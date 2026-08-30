import React from 'react';

export const SceneFallback: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center">
      {/* Background glow discs */}
      <div className="absolute w-72 h-72 rounded-full bg-brand-indigo/20 filter blur-3xl animate-pulse-slow" />
      <div className="absolute w-60 h-60 rounded-full bg-brand-cyan/15 filter blur-2xl animate-glow-pulse" />

      {/* Cybernetic geometric circles */}
      <div className="relative w-64 h-64 border border-cyan-500/30 rounded-full animate-[spin_20s_linear_infinite] flex items-center justify-center">
        <div className="absolute w-4 h-4 -top-2 left-1/2 -translate-x-1/2 bg-cyan-400 rounded-full shadow-[0_0_12px_#06b6d4]" />
        
        <div className="w-48 h-48 border border-indigo-500/40 rounded-full animate-[spin_12s_linear_infinite_reverse] flex items-center justify-center">
          <div className="absolute w-3 h-3 -bottom-1.5 left-1/2 -translate-x-1/2 bg-indigo-400 rounded-full shadow-[0_0_12px_#6366f1]" />
          
          <div className="w-32 h-32 border border-violet-500/50 rounded-2xl rotate-45 flex items-center justify-center bg-surface-card/60 backdrop-blur-md shadow-[0_0_30px_rgba(99,102,241,0.25)]">
            <span className="font-mono text-cyan-400 font-bold text-xl tracking-wider">&lt;MG/&gt;</span>
          </div>
        </div>
      </div>

      {/* Floating micro-badges */}
      <div className="absolute top-10 left-10 px-3 py-1.5 rounded-lg glass text-xs font-mono text-cyan-300 border border-cyan-500/30 animate-float shadow-lg">
        ⚡ Spring Boot &amp; Java
      </div>
      <div className="absolute bottom-12 right-8 px-3 py-1.5 rounded-lg glass text-xs font-mono text-indigo-300 border border-indigo-500/30 animate-float [animation-delay:2s] shadow-lg">
        ✦ Angular &amp; AI/ML
      </div>
    </div>
  );
};
