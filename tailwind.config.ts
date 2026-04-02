import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: { DEFAULT: '#FAFAF8', alt: '#F5F0EB', card: '#FFFFFF' },
        fg: { DEFAULT: '#191919', muted: '#6B6B6B', faint: '#9B9B9B' },
        accent: { DEFAULT: '#CC785C', hover: '#B8674D', light: '#F5EDE8' },
        border: { DEFAULT: '#E8E5E0', light: '#F0EDEA' },
      },
    },
  },
  plugins: [],
}
export default config
