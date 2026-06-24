'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ButtonLink } from './ui';

const mapsUrl =
  'https://www.google.com/maps/place/Piazza+Erbe,+12,+38068+Rovereto+TN/@45.888557,11.0420709,17z/data=!3m1!4b1!4m6!3m5!1s0x47820eb6dfe2db4d:0x93db2ace09160e44!8m2!3d45.8885533!4d11.0446458!16s%2Fg%2F11tnd3k0lb?entry=ttu&g_ep=EgoyMDI2MDUzMS4wIKXMDSoASAFQAw%3D%3D';

export function ContactSection() {
  return (
    <section id="contact" className="relative bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <motion.div className="motion-reveal" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="ds-eyebrow">Contatti & Map</p>
            <div className="mt-8 space-y-6 text-sm leading-7 text-ink/90 sm:text-base">
              <div>
                <p className="font-semibold text-ink">Locazione</p>
                <p>Piazza Erbe 12, 38068 Rovereto TN.</p>
              </div>
              <div>
                <p className="font-semibold text-ink">Orario di apertura</p>
                <p>Tutti i giorni</p>
                <p>08:30 - 23:00</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="motion-reveal overflow-hidden rounded-[1.25rem] border border-beige/25 bg-cream/90 p-2 shadow-soft sm:rounded-panel"
          >
            <div className="relative h-72 w-full overflow-hidden rounded-[1rem] border border-beige/15 xs:h-80 sm:h-96 sm:rounded-[1.25rem]">
              <Image
                src="/images/Maps.jpeg"
                alt="Mappa della posizione di The Smile a Rovereto"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 32rem, 100vw"
              />
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto mt-4 block w-fit cursor-pointer text-xs font-semibold uppercase tracking-[0.14em] text-terracotta transition duration-300 hover:text-ink sm:text-sm sm:tracking-[0.16em]"
            >
              Apri in Maps →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
