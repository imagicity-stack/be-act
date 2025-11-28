'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GalleryGrid({ items }) {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(null);

  const filters = ['All', 'Events', 'Volunteers', 'Kids', 'Community Work'];
  const filtered = filter === 'All' ? items : items.filter((item) => item.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {filters.map((label) => (
          <button
            key={label}
            onClick={() => setFilter(label)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
              filter === label ? 'bg-act-green text-cream border-act-green' : 'bg-be-yellow/40 text-act-green border-be-yellow'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="masonry-columns">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className="mb-4 overflow-hidden rounded-3xl shadow-card cursor-pointer"
            onClick={() => setActive(item)}
          >
            <motion.img
              src={item.src}
              alt={item.alt}
              className="w-full object-cover hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        ))}
      </div>
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.img
              src={active.src}
              alt={active.alt}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-h-[80vh] rounded-3xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
