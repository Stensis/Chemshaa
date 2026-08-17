/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        chemYellow: '#ffda29',
        chemInk: '#000000',
      },
      fontFamily: {
        sans: ['Lato', 'Arial', 'Helvetica', 'sans-serif'],
      },
      keyframes: {
        livePulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '.45', transform: 'scale(.82)' },
        },
        gentleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-1px)' },
        },
        sheen: {
          '0%': { transform: 'translateX(-130%)' },
          '100%': { transform: 'translateX(230%)' },
        },
        modalIn: {
          '0%': { opacity: '0', transform: 'scale(.96) translateY(8px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
      },
      animation: {
        livePulse: 'livePulse 1.6s ease-in-out infinite',
        gentleFloat: 'gentleFloat 3s ease-in-out infinite',
        sheen: 'sheen 5s ease-in-out infinite',
        modalIn: 'modalIn .18s ease-out both',
      },
    },
  },
  plugins: [],
}
