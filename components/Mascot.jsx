'use client';

import { motion } from 'framer-motion';

export default function Mascot({ className = '' }) {
  return (
    <motion.div
      className={`w-8 h-8 rounded-full bg-be-yellow shadow-card mascot-dot ${className}`}
      animate={{ y: [0, -10, 0], rotate: [0, -8, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}
