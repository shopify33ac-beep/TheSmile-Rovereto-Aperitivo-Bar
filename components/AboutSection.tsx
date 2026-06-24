'use client';

import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,transparent_0px,transparent_28px,rgba(196,122,90,0.1)_96px,transparent_100%)]" />
      <div className="relative mx-auto max-w-5xl">
        <motion.div className="motion-reveal" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p className="text-xs uppercase tracking-[0.22em] text-[#7D8B6A] sm:text-sm sm:tracking-[0.28em]">The Smile - Su di noi</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#1A1A1A] sm:text-5xl">
            Un punto d'incontro accogliente per la cultura dell'aperitivo contemporaneo di Rovereto.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
