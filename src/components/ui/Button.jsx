import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-gradient-to-r from-blush-300 to-blush-400 text-navy-900 font-semibold shadow-lg shadow-blush-200/50 hover:shadow-xl hover:shadow-blush-300/50 hover:scale-105',
  secondary:
    'glass text-navy-800 font-semibold hover:bg-white/70 hover:scale-105',
  outline:
    'border-2 border-blush-300 text-navy-800 font-semibold hover:bg-blush-50 hover:scale-105',
};

export default function Button({ children, variant = 'primary', href, onClick, className = '', ...props }) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer';
  const styles = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={styles}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={styles}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
