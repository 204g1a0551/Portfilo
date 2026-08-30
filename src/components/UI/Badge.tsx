import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'indigo' | 'emerald' | 'amber' | 'neutral';
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  className,
  size = 'sm'
}) => {
  const variantStyles = {
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:border-cyan-500/40',
    indigo: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20 hover:border-indigo-500/40',
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:border-emerald-500/40',
    amber: 'bg-amber-500/10 text-amber-300 border-amber-500/20 hover:border-amber-500/40',
    neutral: 'bg-slate-800/60 text-slate-300 border-slate-700/60 hover:border-slate-600',
  };

  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-medium rounded-full border transition-colors',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
};
