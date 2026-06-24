'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'the-smile-cookie-consent';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem(STORAGE_KEY) !== 'accepted') {
      setIsVisible(true);
    }
  }, []);

  function acceptCookies() {
    window.localStorage.setItem(STORAGE_KEY, 'accepted');
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <aside
      aria-label="Informativa cookie"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-[420px] rounded-card border border-beige/45 bg-porcelain px-5 py-4 text-ink shadow-[0_22px_70px_rgba(26,26,26,0.18)] sm:inset-x-auto sm:bottom-6 sm:right-6 sm:mx-0 sm:px-6 sm:py-5"
    >
      <div className="flex flex-col gap-4 sm:gap-5">
        <p className="text-sm font-light leading-6 text-ink/78">
          Questo sito utilizza esclusivamente cookie tecnici necessari al corretto funzionamento del sito.
        </p>

        <button
          type="button"
          aria-label="Accetta l'informativa sui cookie tecnici"
          onClick={acceptCookies}
          className="inline-flex min-h-11 items-center justify-center rounded-pill bg-terracotta px-5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-glow transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-wine focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/70 focus-visible:ring-offset-2 focus-visible:ring-offset-porcelain"
        >
          Accetta
        </button>
      </div>
    </aside>
  );
}
