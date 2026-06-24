'use client';

import { motion } from 'framer-motion';

const highlights = [
  { title: 'Live Aperitivo', description: 'Daily drinks and light bites for after-work gatherings.' },
  { title: 'Brunch Edit', description: 'Weekend brunch moments infused with Italian warmth.' },
  { title: 'Vinyl Stories', description: 'Soft music evenings with a cozy social atmosphere.' },
  { title: 'Cocktail Craft', description: 'Modern cocktails with seasonal Italian ingredients.' }
];

export function StoryHighlightsSection() {
  return (
    <section id="stories" className="relative bg-[#F8F5F0] px-6 py-24 sm:px-8 lg:px-12">
      <div className="relative mx-auto max-w-6xl">
        <div className="motion-reveal mb-12">
          <p className="text-sm uppercase tracking-[0.28em] text-[#7D8B6A]">Storie in evidenza</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight text-[#1A1A1A] sm:text-5xl">
            Momenti di vita autentici, pensati per scorrere come un racconto di storie.
          </h2>
        </div>
        <div className="stagger-group grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[2rem] border border-[#D9C7AE]/20 bg-white shadow-soft transition-shadow duration-300 hover:shadow-lift"
            >
              <div className="overflow-hidden">
                <div className="parallax-image h-72 bg-cover bg-center transition duration-700 group-hover:scale-105" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1000&q=80')` }} />
              </div>
              <div className="p-7">
                <p className="text-sm uppercase tracking-[0.22em] text-[#7D8B6A]">{item.title}</p>
                <p className="mt-4 text-base leading-7 text-[#1A1A1A]/85">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
