import type { Metadata } from 'next';
import { CookieBanner } from '../components/CookieBanner';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Smile | Rovereto Aperitivo Bar',
  description: "The Smile is Rovereto's contemporary aperitivo bar for cocktails, brunch, social evenings and warm Italian moments.",
  metadataBase: new URL('https://www.thesmilerovereto.com'),
  openGraph: {
    title: 'The Smile | Rovereto Aperitivo Bar',
    description: 'A contemporary Italian aperitivo experience in Rovereto with cocktails, brunch and social evenings.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
