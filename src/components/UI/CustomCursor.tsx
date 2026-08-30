import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // Only enable on fine pointer (mouse/trackpad), not touch screens
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') !== null ||
        target.closest('a') !== null
      );
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, prefersReducedMotion]);

  if (prefersReducedMotion || !isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-screen"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isPointer ? 1.6 : 1,
          opacity: 0.8,
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 350, mass: 0.2 }}
        style={{
          width: 24,
          height: 24,
          background: 'radial-gradient(circle, rgba(6,182,212,0.8) 0%, rgba(99,102,241,0.2) 70%, transparent 100%)',
          boxShadow: '0 0 16px rgba(6, 182, 212, 0.6)'
        }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40 rounded-full"
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
        }}
        transition={{ type: 'spring', damping: 45, stiffness: 120, mass: 0.8 }}
        style={{
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, rgba(6,182,212,0.02) 50%, transparent 80%)',
        }}
      />
    </>
  );
};
