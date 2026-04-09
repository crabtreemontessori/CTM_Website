/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Avenir Next"', 'Avenir', 'Segoe UI', 'sans-serif'],
        display: ['Georgia', 'Times New Roman', 'serif'],
      },
      boxShadow: {
        card: '0 18px 45px -24px rgba(15, 23, 42, 0.28)',
      },
    },
  },
  plugins: [],
};
