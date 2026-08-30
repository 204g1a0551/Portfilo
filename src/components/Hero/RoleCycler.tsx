import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RoleCyclerProps {
  roles: string[];
}

export const RoleCycler: React.FC<RoleCyclerProps> = ({ roles }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <span className="inline-block relative h-[1.3em] overflow-hidden align-top min-w-[260px] sm:min-w-[340px] text-left">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: 28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -28, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent font-bold"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
