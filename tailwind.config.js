/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sometype Mono', 'ui-monospace', 'monospace'],
        mono: ['Sometype Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#475569',
          light: '#64748b',
          dark: '#334155',
        },
      },
    }
  },
  plugins: [],
}
