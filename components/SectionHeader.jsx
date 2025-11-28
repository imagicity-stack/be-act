import { motion } from 'framer-motion';

export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl text-act-green mb-3"
      >
        {title}
      </motion.h2>
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
