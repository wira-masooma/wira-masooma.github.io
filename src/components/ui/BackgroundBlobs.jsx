import { motion, useReducedMotion } from 'framer-motion';

const blobs = [
  {
    size: 'w-72 h-72',
    color: 'bg-ice-200/40',
    position: 'top-20 -left-36',
    delay: 0,
  },
  {
    size: 'w-96 h-96',
    color: 'bg-blush-200/30',
    position: 'top-60 -right-48',
    delay: 2,
  },
  {
    size: 'w-64 h-64',
    color: 'bg-ice-300/20',
    position: 'bottom-20 left-1/4',
    delay: 4,
  },
  {
    size: 'w-80 h-80',
    color: 'bg-blush-100/40',
    position: '-bottom-40 right-1/4',
    delay: 1,
  },
  {
    size: 'w-56 h-56',
    color: 'bg-ice-100/50',
    position: 'top-1/3 left-1/2',
    delay: 3,
  },
];

export default function BackgroundBlobs() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${blob.size} ${blob.color} ${blob.position}`}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  x: [0, 30, -20, 0],
                  y: [0, -25, 15, 0],
                  scale: [1, 1.08, 0.95, 1],
                }
          }
          transition={{
            duration: 18 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: blob.delay,
          }}
        />
      ))}

      {/* Neural-node decorative dots */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" aria-hidden="true">
        <pattern id="neural-dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="30" cy="30" r="1.5" fill="#1E293B" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#neural-dots)" />
      </svg>
    </div>
  );
}
