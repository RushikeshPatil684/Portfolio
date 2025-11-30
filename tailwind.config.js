/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft': '#0B0B0B',
        'surface': '#141414',
        'border-subtle': 'rgba(255,255,255,0.06)',
        'accent': '#0AEFFF',
        'text-primary': '#FFFFFF',
        'text-muted': '#C8C8C8',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        'breathing-glow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.08)', opacity: '1' },
        },
        'float-particle': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)', opacity: '0.4' },
          '50%': { transform: 'translateY(-18px) translateX(8px)', opacity: '0.9' },
        },
      },
      animation: {
        'breathing-glow': 'breathing-glow 6s ease-in-out infinite',
        'float-particle': 'float-particle 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

