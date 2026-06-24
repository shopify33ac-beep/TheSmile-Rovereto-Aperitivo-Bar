'use client';

import { motion } from 'framer-motion';
import { AmbientMotion } from './AmbientMotion';
import { MotionSystem } from './MotionSystem';
import { Navbar } from './Navbar';
import { HeroSection } from './HeroSection';
import { MenuSection } from './MenuSection';
import { FoodSection } from './FoodSection';
import { InstagramSection } from './InstagramSection';
import { EventsSection } from './EventsSection';
import { ReservationSection } from './ReservationSection';
import { ContactSection } from './ContactSection';
import { Footer } from './Footer';

export function HomePage() {
  return (
    <div className="relative bg-[#F8F5F0] text-[#1A1A1A]">
      <MotionSystem />
      <AmbientMotion />
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 overflow-hidden"
      >
        <HeroSection />
        <MenuSection />
        <FoodSection />
        <InstagramSection />
        <EventsSection />
        <ReservationSection />
        <ContactSection />
        <Footer />
      </motion.main>
    </div>
  );
}
