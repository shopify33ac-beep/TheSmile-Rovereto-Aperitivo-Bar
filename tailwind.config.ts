import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F8F5F0',
        text: '#1A1A1A',
        cream: '#F8F5F0',
        porcelain: '#FFFDF8',
        ink: '#1A1A1A',
        espresso: '#2D1E17',
        wine: '#733F34',
        beige: '#D9C7AE',
        prosecco: '#F4D6A6',
        terracotta: '#C47A5A',
        olive: '#7D8B6A',
        basil: '#506447'
      },
      boxShadow: {
        soft: '0 20px 70px rgba(26, 26, 26, 0.10)',
        glow: '0 28px 80px rgba(196, 122, 90, 0.14)',
        lift: '0 18px 42px rgba(45, 30, 23, 0.12)',
        inset: 'inset 0 1px 0 rgba(255, 255, 255, 0.42)'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif']
      },
      fontSize: {
        eyebrow: ['0.72rem', { lineHeight: '1rem', letterSpacing: '0.24em' }],
        lead: ['1.125rem', { lineHeight: '2rem' }]
      },
      spacing: {
        section: '6rem',
        'section-lg': '8rem',
        gutter: '1.5rem'
      },
      borderRadius: {
        card: '0.5rem',
        panel: '1.5rem',
        pill: '999px'
      },
      letterSpacing: {
        widest: '0.2em'
      },
      screens: {
        xs: '420px'
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(180deg, rgba(248,245,240,0.95), rgba(248,245,240,0.84)), radial-gradient(circle at top right, rgba(196,122,90,0.15), transparent 26%), radial-gradient(circle at 20% 20%, rgba(125,139,106,0.12), transparent 22%)',
        editorial: 'linear-gradient(135deg, rgba(255,253,248,0.96), rgba(248,245,240,0.82))'
      }
    }
  },
  plugins: []
};

export default config;
