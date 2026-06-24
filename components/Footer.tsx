'use client';

export function Footer() {
  return (
    <footer className="bg-ink px-5 pb-5 pt-14 text-white sm:px-8 sm:pb-6 sm:pt-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        <a
          href="#"
          aria-label="The Smile home"
          className="text-sm font-semibold uppercase tracking-[0.26em] text-white transition duration-300 hover:opacity-75 sm:text-base"
        >
          The Smile
        </a>

        <div className="mt-7 flex items-center justify-center gap-6">
          <a
            href="https://www.instagram.com/_thesmile_12?igsh=MW42Znl5NGxkdzNmMg=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit The Smile on Instagram"
            className="flex h-11 w-11 items-center justify-center text-white/90 transition duration-300 ease-out hover:-translate-y-0.5 hover:text-white hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" stroke="none" />
            </svg>
          </a>

          <a
            href="https://wa.me/393515624726"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact The Smile on WhatsApp"
            className="flex h-11 w-11 items-center justify-center text-white/90 transition duration-300 ease-out hover:-translate-y-0.5 hover:text-white hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M12.04 2.25A9.67 9.67 0 0 0 3.7 16.78l-1.15 4.22 4.32-1.13a9.66 9.66 0 0 0 5.17 1.48h.01a9.55 9.55 0 0 0 6.82-2.83 9.6 9.6 0 0 0 2.83-6.83 9.67 9.67 0 0 0-9.66-9.44Zm.01 17.46h-.01a8.02 8.02 0 0 1-4.08-1.12l-.29-.17-2.56.67.68-2.49-.19-.31a8.03 8.03 0 1 1 6.45 3.42Zm4.41-6.01c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2a7.24 7.24 0 0 1-1.34-1.67c-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.83-.84 2.02 0 1.19.86 2.34.98 2.5.12.16 1.7 2.59 4.12 3.63.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.43-.58 1.63-1.15.2-.56.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28Z" />
            </svg>
          </a>
        </div>

        <p className="text-center text-xs text-zinc-500">
  <span className="block md:inline">
    Copyright © 2026 The Smile. All rights reserved.
  </span>
  <span className="block whitespace-nowrap md:inline md:ml-2">
    Part. IVA 02807650227
  </span>
</p>
      </div>
    </footer>
  );
}
