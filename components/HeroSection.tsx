'use client';

import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { MouseEvent, ReactNode } from 'react';

const heroImage =
  'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=2400&q=90';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.35
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
  }
};

function HeroButton({
  href,
  children,
  variant = 'primary'
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  const isPrimary = variant === 'primary';

  return (
    <motion.a
      href={href}
      whileHover={{ y: -3, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 420, damping: 24 }}
      className={[
        'group inline-flex min-h-12 items-center justify-center rounded-full px-6 text-xs font-semibold uppercase tracking-[0.14em] sm:px-7 sm:text-sm sm:tracking-[0.18em]',
        'transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black',
        isPrimary
          ? 'bg-[#F4D6A6] text-[#21150f] shadow-[0_22px_70px_rgba(244,214,166,0.22)] hover:bg-white'
          : 'border border-white/30 bg-white/10 text-white shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl hover:border-white/60 hover:bg-white/20'
      ].join(' ')}
    >
      <span>{children}</span>
      <span className="ml-3 h-px w-6 bg-current opacity-55 transition-all duration-300 group-hover:w-9" />
    </motion.a>
  );
}

export function HeroSection() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 70, damping: 24, mass: 0.35 });
  const smoothY = useSpring(pointerY, { stiffness: 70, damping: 24, mass: 0.35 });
  const imageX = useTransform(smoothX, [-0.5, 0.5], ['-1.4%', '1.4%']);
  const imageY = useTransform(smoothY, [-0.5, 0.5], ['-1.2%', '1.2%']);
  const contentX = useTransform(smoothX, [-0.5, 0.5], ['10px', '-10px']);
  const contentY = useTransform(smoothY, [-0.5, 0.5], ['8px', '-8px']);

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function handleMouseLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative isolate min-h-screen overflow-hidden bg-[#160f0c] text-white"
    >
      <motion.div
        aria-hidden="true"
        className="absolute -inset-6 bg-cover bg-center will-change-transform"
        style={{
          x: imageX,
          y: imageY,
          backgroundImage: `url(${heroImage})`
        }}
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(244,214,166,0.18),transparent_28%),linear-gradient(90deg,rgba(18,11,8,0.72),rgba(18,11,8,0.32)_34%,rgba(18,11,8,0.44)_72%,rgba(18,11,8,0.78))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(to_bottom,rgba(248,245,240,0)_0%,rgba(248,245,240,0.08)_48%,rgba(248,245,240,0.26)_76%,rgba(248,245,240,0.58)_92%,#F8F5F0_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-5 pb-20 pt-28 text-center sm:px-8 sm:pb-24 sm:pt-32 lg:px-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          style={{ x: contentX, y: contentY }}
          className="mx-auto flex max-w-5xl flex-col items-center will-change-transform"
        >
          

          <motion.div
            variants={fadeUp}
            whileHover="hover"
            className="group relative mt-1 flex w-full justify-center"
          >
            <motion.div
              variants={{
                hover: {
                  y: -4,
                  scale: 1.018,
                  filter: 'drop-shadow(0 28px 54px rgba(0,0,0,0.38))'
                }
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="relative w-[min(88vw,430px)] xs:w-[min(82vw,480px)] sm:w-[min(62vw,620px)] lg:w-[min(48vw,720px)]"
            >
              <Image
                src="/images/the-smile-logo.png"
                alt="The Smile"
                width={1536}
                height={1024}
                priority
                className="h-auto w-full object-contain drop-shadow-[0_24px_58px_rgba(0,0,0,0.34)]"
              />
              <motion.span
                aria-hidden="true"
                variants={{
                  hover: {
                    scale: [1, 1.22, 1.08],
                    rotate: [0, -7, 4],
                    color: '#F4D6A6',
                    textShadow: '0 0 28px rgba(244,214,166,0.72)'
                  }
                }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-[15%] top-[16%] hidden text-2xl leading-none text-white/0 transition duration-300 group-hover:text-[#F4D6A6] sm:block"
              >
                &hearts;
              </motion.span>
            </motion.div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mb-7 mt-2 inline-flex max-w-full justify-center rounded-full border border-white/25 bg-white/10 px-3 py-2 text-center text-[0.58rem] font-medium uppercase tracking-[0.15em] text-[#F4D6A6] shadow-[0_14px_45px_rgba(0,0,0,0.18)] backdrop-blur-xl xs:px-4 xs:text-[0.64rem] xs:tracking-[0.2em] sm:mt-0 sm:px-5 sm:text-xs sm:tracking-[0.28em]"
          >
            Rovereto - Aperitivo Bar - Cucina
          </motion.p>


          <motion.div
            variants={fadeUp}
            className="mt-16 hidden items-center gap-4 text-[0.68rem] uppercase tracking-[0.26em] text-white/60 sm:flex"
          >
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.35, duration: 0.7, ease: 'easeOut' }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-[0.65rem] uppercase tracking-[0.24em] text-white/60 transition hover:text-white hidden"
      >
        <motion.span
          aria-hidden="true"
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="h-10 w-px bg-gradient-to-b from-white/70 to-white/0"
        />
      </motion.a>
    </section>
  );
}
