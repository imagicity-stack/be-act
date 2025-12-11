"use client";

import { motion } from 'framer-motion';

export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
      <motion.div
        className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.28em] text-act-green/70"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="h-px w-8 bg-act-green/30" />
        <span>Be act foundation</span>
        <span className="h-px w-8 bg-be-yellow/60" />
      </motion.div>
      <motion.h2
        className="font-heading text-3xl md:text-4xl text-ink"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 140, damping: 16 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-act-green/80"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
