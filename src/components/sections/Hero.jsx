import { motion } from 'framer-motion';
import { ArrowDown, FileText } from 'lucide-react';
import { profile } from '../../data/profile';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Greeting pill */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-navy-700 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Biochemistry × Computer Science
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6">
              <span className="text-navy-900">Decoding</span>{' '}
              <span className="text-gradient">Biology</span>
              <br />
              <span className="text-navy-900">with </span>
              <span className="text-gradient">Computation</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-500 max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0">
              {profile.tagline}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button href="#projects">
                <ArrowDown size={18} />
                View Projects
              </Button>
              <Button
                variant="secondary"
                href={`${import.meta.env.BASE_URL}resume/CV_Zaidi_Wira.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={18} />
                Download Resume
              </Button>
            </div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-ice-200 to-blush-200 opacity-50 blur-xl animate-pulse" />
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-ice-300/30 to-blush-300/30" />
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/80 shadow-2xl shadow-blush-200/40">
                <img
                  src={profile.headshot}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating accent badge */}
              <motion.div
                className="absolute -bottom-2 -right-2 glass rounded-xl px-3 py-2 shadow-lg"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-sm font-semibold text-navy-800">🧬 UCL London</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-blush-400"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
