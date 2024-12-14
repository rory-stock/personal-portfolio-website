/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      animation: {
        'scroll-right-to-left': 'scroll-right-to-left 25s linear infinite',
      },
      fontFamily: {
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
        'neue-haas-grotesk-display': ['neue-haas-grotesk-display', 'sans-serif'],
        'neue-haas-grotesk-text': ['neue-haas-grotesk-text', 'sans-serif'],
        georgia: ['Georgia', 'serif']
      },
      colors: {
        blue: {
          '499': '#2068FF',
        }
      },
      keyframes: {
        'scroll-right-to-left': {
          '0%': {
            transform: 'translate3d(0, 0, 0)'
          },
          '100%': {
            transform: 'translate3d(-50%, 0, 0)'
          },
        },
      },
    },
  },
  plugins: [],
}

