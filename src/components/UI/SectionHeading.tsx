import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center'
}) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-mono tracking-wider uppercase font-semibold border ${
          align === 'center' ? 'mx-auto' : ''
        } bg-indigo-500/10 text-indigo-300 border-indigo-500/20`}>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-slate-400 text-base md:text-lg max-w-2xl ${
          align === 'center' ? 'mx-auto' : ''
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
