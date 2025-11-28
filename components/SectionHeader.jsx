"use client";

import { motion } from 'framer-motion';

export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
      <motion.div
        className="flex items-center justify-center gap-3"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="w-10 h-2 rounded-full bg-be-yellow/80" />
        <motion.h2
          className="font-heading text-3xl md:text-4xl text-act-green drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 140, damping: 15 }}
        >
          {title}
        </motion.h2>
        <span className="w-10 h-2 rounded-full bg-act-green/70" />
      </motion.div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-act-green/70"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
