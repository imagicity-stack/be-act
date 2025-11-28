'use client';

import { motion, AnimatePresence } from 'framer-motion';

export default function Modal({ open, onClose, title, pretitle = 'Impact Spotlight', children }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-act-green/70 text-xs uppercase tracking-widest">{pretitle}</p>
                <h3 className="font-heading text-2xl text-act-green">{title}</h3>
              </div>
              <button onClick={onClose} className="text-act-green font-bold text-xl">✕</button>
            </div>
            <div className="text-act-green/80 leading-relaxed space-y-3">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
