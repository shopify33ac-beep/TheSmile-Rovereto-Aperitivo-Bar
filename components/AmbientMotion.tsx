'use client';

import { motion } from 'framer-motion';

export function AmbientMotion() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute inset-x-0 top-[18%] h-28 bg-gradient-to-r from-transparent via-terracotta/5 to-transparent blur-2xl"
        animate={{ x: ['-6%', '6%', '-6%'], opacity: [0.18, 0.3, 0.18] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-x-0 top-[62%] h-24 bg-gradient-to-r from-transparent via-olive/5 to-transparent blur-2xl"
        animate={{ x: ['5%', '-5%', '5%'], opacity: [0.14, 0.26, 0.14] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      />
    </div>
  );
}
