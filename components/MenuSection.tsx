'use client';

import { motion } from 'framer-motion';
import { menuItems } from '../lib/content';

export function MenuSection() {
  return (
    <section id="menu" className="relative overflow-hidden bg-[#F8F5F0] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="motion-reveal mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#7D8B6A]">Selezione dei nostri Cocktail</p>
          <h2 className="font-display text-[1.9125rem] font-semibold leading-[0.98] text-[#1A1A1A] sm:text-[3.1875rem] lg:text-[3.825rem]">
            Cocktail da aperitivo curati con eleganza, anche Analcolici.
          </h2>
        </div>

        <div className="space-y-20 lg:space-y-28">
          {menuItems.map((item, index) => {
            const imageLeft = index % 2 === 0;
            return (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-12% 0px' }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-8 md:grid-cols-12 md:items-center"
              >
                <div className={imageLeft ? 'md:col-span-6 md:row-start-1' : 'md:col-span-6 md:col-start-7 md:row-start-1'}>
                  <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.5rem] shadow-soft sm:rounded-[2rem] md:aspect-[5/6]">
                    <div
                      className="parallax-image h-full w-full bg-cover bg-center transition duration-700 group-hover:scale-[1.04]"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent" />
                  </div>
                </div>
                <div className={imageLeft ? 'md:col-span-5 md:col-start-8 md:row-start-1' : 'md:col-span-5 md:col-start-1 md:row-start-1'}>
                  <div className="flex items-end justify-between gap-5 border-b border-[#1A1A1A]/12 pb-5 md:flex-col md:items-start md:justify-start">
                    <h3 className="font-display text-[1.9125rem] font-semibold leading-none text-[#1A1A1A] sm:text-[3.1875rem] lg:text-[3.825rem]">{item.name}</h3>
                    <span className="shrink-0 text-base font-semibold text-[#C47A5A] sm:text-lg">{item.price}</span>
                  </div>
                  <p className="mt-6 max-w-lg text-xs font-semibold uppercase leading-7 tracking-[0.2em] text-[#7D8B6A] sm:text-sm">
                    {item.ingredients}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
