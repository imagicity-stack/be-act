'use client';

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Counter({ target = 100, label }) {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(interval);
  }, [target, controls]);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={controls} className="text-center">
      <div className="text-4xl font-heading text-act-green">{count}+</div>
      <p className="text-act-green/80">{label}</p>
    </motion.div>
  );
}
