'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const items = ['Menu', 'Food', 'Gallery', 'Events', 'Contact'];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed inset-x-0 top-0 z-40 flex items-center justify-center px-4 py-5 md:px-8"
      >
        <div className="hidden items-center gap-8 rounded-full border border-white/20 bg-black/15 px-6 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.14)] backdrop-blur-xl md:flex">
          {items.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-white/82 transition hover:text-prosecco"
            >
              {item}
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="ml-auto rounded-full border border-white/20 bg-black/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_60px_rgba(0,0,0,0.14)] backdrop-blur-xl md:hidden"
        >
          Menu
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed inset-0 z-50 bg-[#1A1A1A]/96 px-6 py-6 text-white backdrop-blur-2xl md:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.26em] text-prosecco">The Smile</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white"
              >
                Chiudi
              </button>
            </div>
            <div className="flex min-h-[78vh] flex-col justify-center gap-7">
              {items.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.45, ease: 'easeOut' }}
                  className="font-display text-5xl leading-none text-white transition hover:text-prosecco"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
