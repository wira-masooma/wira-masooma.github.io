import { motion } from 'framer-motion';

export default function Section({ id, children, className = '', full = false }) {
  return (
    <motion.section
      id={id}
      className={`relative ${full ? '' : 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'} py-20 md:py-28 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}
