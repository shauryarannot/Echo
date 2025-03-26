// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'pulse-subtle': 'pulse 3s ease-in-out infinite',
        'glow': 'pulse 2s ease-in-out infinite',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(59, 130, 246, 0.5)',
        'glow-md': '0 0 15px rgba(59, 130, 246, 0.6)',
      },
      backgroundColor: {
        'card': 'white',
      },
      textColor: {
        'muted-foreground': '#6b7280',
      },
    },
  },
  plugins: [],
}