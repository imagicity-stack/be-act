'use client';

import { motion } from 'framer-motion';

export default function ProgramCard({ program, onOpen }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="card-hover bg-white/90 rounded-2xl p-5 shadow-card border border-act-green/10 cursor-pointer"
      onClick={() => onOpen(program)}
    >
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-12 h-12 rounded-2xl bg-be-yellow flex items-center justify-center text-xl">{program.icon}</div>
        <div>
          <h3 className="font-heading text-xl text-ink">{program.title}</h3>
          <p className="text-act-green/80 text-sm">{program.tagline}</p>
        </div>
      </div>
      <p className="text-ink/80 leading-relaxed">{program.preview}</p>
    </motion.div>
  );
}
