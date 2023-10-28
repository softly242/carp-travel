import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        hero: 'url(/hero.jpg)',
        'hero-768': 'url(/hero-768.jpg)',
        'hero-1280': 'url(/hero-1280.jpg)',
        contacts: 'url(/contacts.jpg)',
        'contacts-768': 'url(/contacts-768.jpg)',
        'contacts-1280': 'url(/contacts-1280.jpg)',
        gallery: 'url(/gallery.jpg)',
        about: 'url(/about.jpg)',
        'about-480': 'url(/about-480.jpg)',
        'about-768': 'url(/about-768.jpg)',
        'about-1280': 'url(/about-1280.jpg)',
        career: 'url(/career.jpeg)',
        'career-768': 'url(/career-768.jpg)',
        'career-1280': 'url(/career-1280.jpg)',
        'bg-gradient': 'linear-gradient(180deg, #001826 0%, rgba(0, 37, 49, 0.00) 100%)',
      },
      backgroundColor: {
        overlay: 'rgb(2,15,8)'
      },
      screens: {
        'xs': '480px',
      },
      width: {
        'mobile': '480px',
        'tablet': '768px',
        'desktop': '1280px',
      },
      maxWidth: {
        'mobile': '480px',
        'tablet': '768px',
        'desktop': '1280px',
      },
      fontFamily: {
        'heading': 'Inter, sans-serif',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          md: '32px',
          xl: '24px',
        },
        screens: {
          xs: '480px',
          md: '768px',
          xl: '1280px',
        }
      },
      fontSize: {
        xxs: '10px',
        xl4: '40px'
      },
      fontWeight: {

      }

    },
  },
  plugins: [],
}
export default config
