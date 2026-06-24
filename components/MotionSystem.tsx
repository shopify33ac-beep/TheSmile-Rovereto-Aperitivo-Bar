'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function MotionSystem() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      gsap.set('.motion-reveal, .stagger-group > *, .parallax-image', {
        clearProps: 'all'
      });
      return undefined;
    }

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.motion-reveal').forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 34, filter: 'blur(10px)' },
          {
            autoAlpha: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.95,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 84%',
              once: true
            }
          }
        );
      });

      gsap.utils.toArray<HTMLElement>('.stagger-group').forEach((group) => {
        const children = Array.from(group.children);

        gsap.fromTo(
          children,
          { autoAlpha: 0, y: 28, scale: 0.98 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.09,
            scrollTrigger: {
              trigger: group,
              start: 'top 82%',
              once: true
            }
          }
        );
      });

      gsap.utils.toArray<HTMLElement>('.parallax-image').forEach((image) => {
        gsap.fromTo(
          image,
          { yPercent: -5, scale: 1.08 },
          {
            yPercent: 5,
            scale: 1.12,
            ease: 'none',
            scrollTrigger: {
              trigger: image,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8
            }
          }
        );
      });
    });

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      const id = link?.getAttribute('href');

      if (!id || id === '#') {
        return;
      }

      const element = document.querySelector(id);

      if (!element) {
        return;
      }

      event.preventDefault();
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      context.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
