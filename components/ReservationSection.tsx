'use client';

import { motion } from 'framer-motion';
import type { FormEvent } from 'react';
import { Button, ButtonLink, Field, Section, TextArea } from './ui';

const whatsappUrl = 'https://wa.me/393515624726';

export function ReservationSection() {
  function handleReservationSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const date = String(formData.get('date') ?? '').trim();
    const time = String(formData.get('time') ?? '').trim();
    const guests = String(formData.get('guests') ?? '').trim();
    const description = String(formData.get('notes') ?? '').trim();
    const message = [
      '🍸 THE SMILE - TABLE REQUEST',
      '',
      `Name: ${name}`,
      '',
      `Date: ${date}`,
      '',
      `Time: ${time}`,
      '',
      `Guests: ${guests}`,
      '',
      'Notes:',
      description
    ].join('\n');

    window.open(`${whatsappUrl}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <Section id="reservation" className="bg-cream">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[1.25rem] border border-beige/20 bg-white/90 p-5 shadow-glow backdrop-blur-xl sm:rounded-panel sm:p-10 md:flex md:items-center md:justify-center md:text-center lg:p-12">
        <motion.div className="motion-reveal md:flex md:flex-col md:items-center md:justify-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="mb-8">
            <p className="ds-eyebrow">Vieni a Trovarci</p>
          </div>
          <div className="stagger-group grid gap-8 md:place-items-center">
            <div className="md:flex md:flex-col md:items-center">
              <p className="ds-lead max-w-xl md:mx-auto">
                Che sia un compleanno, un anniversario o semplicemente una serata speciale non esitare a contattarci
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row md:justify-center lg:flex-col">
                <ButtonLink href="https://wa.me/393515624726" className="w-full md:w-fit">Prenota via WhatsApp</ButtonLink>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
