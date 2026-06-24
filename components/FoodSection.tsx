'use client';

import { motion } from 'framer-motion';
import { foodItems } from '../lib/content';

export function FoodSection() {
  return (
    <section id="food" className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="motion-reveal mb-16 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#7D8B6A]">Specialita Culinarie</p>
          <h2 className="mt-5 font-display text-[1.9125rem] font-semibold leading-[1.02] text-[#1A1A1A] sm:text-[3.1875rem]">
            Piatti caldi e freddi per accompagnare il tuo aperitivo.
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-3 lg:gap-6">
          {foodItems.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={index === 1 ? 'lg:mt-24' : index === 2 ? 'lg:mt-10' : ''}
            >
              <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.5rem] shadow-soft sm:rounded-[2rem]">
                <div
                  className="parallax-image h-full w-full bg-cover bg-center transition duration-700 group-hover:scale-[1.05]"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
              </div>
              <div className="mt-7 flex items-end justify-between gap-4 border-b border-[#1A1A1A]/10 pb-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7D8B6A]">{item.name}</h3>
                <span className="shrink-0 text-lg font-semibold text-[#C47A5A]">{item.price}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
