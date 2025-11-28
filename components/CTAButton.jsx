'use client';

import { motion } from 'framer-motion';

export default function CTAButton({ children, href = '#', onClick, variant = 'primary', className = '' }) {
  const baseStyle =
    variant === 'secondary'
      ? 'bg-cream text-act-green border-2 border-act-green hover:-translate-y-0.5'
      : 'bg-act-green text-cream hover:-translate-y-0.5';

  return (
    <motion.a
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center px-5 py-3 rounded-full font-bold shadow-card transition-transform ${baseStyle} ${className}`}
    >
      {children}
    </motion.a>
  );
}
