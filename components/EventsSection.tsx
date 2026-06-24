'use client';

import { motion } from 'framer-motion';
import { events } from '../lib/content';

export function EventsSection() {
  return (
    <section id="events" className="relative overflow-hidden bg-[#1A1A1A] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="motion-reveal mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#F4D6A6]">Informazioni</p>
          <h2 className="font-display text-4xl font-semibold leading-[1.02] text-white sm:text-6xl">
            Momenti pensati per colazione, aperitivo e serate in compagnia.
          </h2>
        </div>

        <div className="divide-y divide-white/12 border-y border-white/12">
          {events.map((event, index) => (
            <motion.article
              key={event.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group grid gap-6 py-9 transition duration-300 lg:grid-cols-[0.35fr_0.9fr_1fr] lg:items-center lg:py-12"
            >
              <div className="font-display text-5xl text-white/16 transition duration-300 group-hover:text-[#F4D6A6]/30">
                0{index + 1}
              </div>
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#F4D6A6]/80">{event.date}</p>
                <h3 className="font-display text-4xl font-semibold leading-none text-white sm:text-5xl">{event.title}</h3>
              </div>
              <p className="max-w-xl text-base leading-8 text-white/72">{event.subtitle}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
