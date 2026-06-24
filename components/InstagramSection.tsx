'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { galleryPhotos } from '../lib/content';

export function InstagramSection() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-[#F8F5F0] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="motion-reveal mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#7D8B6A]">Galleria</p>
            <h2 className="mt-5 font-display text-[1.9125rem] font-semibold leading-[1.02] text-[#1A1A1A] sm:text-[3.1875rem]">
  <span className="block">Ogni scatto racconta un momento.</span>
  <span className="block">Il resto va vissuto di persona.</span>
</h2>
          </div>
          <a
            href="https://www.instagram.com/_thesmile_12?igsh=MW42Znl5NGxkdzNmMg=="
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 w-fit items-center justify-center rounded-full border border-[#C47A5A] bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#C47A5A] transition hover:bg-[#C47A5A]/10 sm:text-sm sm:tracking-[0.18em]"
          >
            Follow on Instagram
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-6 sm:grid-rows-[18rem_14rem_18rem] lg:grid-rows-[24rem_18rem]">
          {galleryPhotos.map((photo, index) => (
            <motion.div
              key={photo}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={[
                'group relative min-h-72 overflow-hidden rounded-[1.5rem] bg-white shadow-soft sm:min-h-0 sm:rounded-[2rem]',
                index === 0 ? 'sm:col-span-3 sm:row-span-2' : '',
                index === 1 ? 'sm:col-span-3' : '',
                index === 2 ? 'sm:col-span-2' : '',
                index === 3 ? 'sm:col-span-2' : '',
                index === 4 ? 'sm:col-span-2' : '',
                index === 5 ? 'sm:col-span-3 lg:col-span-3' : ''
              ].join(' ')}
            >
              <Image
                src={photo}
                alt="The Smile atmosphere"
                fill
                className="parallax-image object-cover transition duration-700 group-hover:scale-105"
                priority={index < 2}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
