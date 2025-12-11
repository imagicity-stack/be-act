'use client';

import { motion } from 'framer-motion';

export default function CTAButton({ children, href = '#', onClick, variant = 'primary', className = '' }) {
  const baseStyle =
    variant === 'secondary'
      ? 'bg-white text-act-green border border-act-green/30 hover:border-act-green hover:shadow-card'
      : 'bg-act-green text-cream shadow-card hover:shadow-blob';

  return (
    <motion.a
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold tracking-tight transition-transform ${baseStyle} ${className}`}
    >
      {children}
    </motion.a>
  );
}
