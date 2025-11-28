'use client';

import { motion } from 'framer-motion';

export default function ProgramCard({ program, onOpen }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="card-hover bg-white rounded-3xl p-5 shadow-card border border-act-green/10 cursor-pointer"
      onClick={() => onOpen(program)}
    >
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-12 h-12 rounded-2xl bg-be-yellow flex items-center justify-center text-xl">{program.icon}</div>
        <div>
          <h3 className="font-heading text-xl text-act-green">{program.title}</h3>
          <p className="text-act-green/70 text-sm">{program.tagline}</p>
        </div>
      </div>
      <p className="text-act-green/80">{program.preview}</p>
    </motion.div>
  );
}
