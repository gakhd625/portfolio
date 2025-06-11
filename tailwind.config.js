/** @type { import('tailwindcss').Config } */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: 'hsl(var(--secondary))',
        accent: 'hsl(var(--accent))',
        neutral: 'hsl(var(--neutral))',
        dark:{
           100: '#1a1a1a',
           200: '#121212',
        },
        'base-100': 'hsl(var(--base-100))',
        'base-200': 'hsl(var(--base-200))',
        'base-300': 'hsl(var(--base-300))',
        'base-content': 'hsl(var(--base-content))',

      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "hsl(var(--primary))",
          "secondary": "hsl(var(--secondary))",
          "accent": "hsl(var(--accent))",
          "neutral": "hsl(var(--neutral))",
          "base-100": "hsl(var(--base-100))",
          "base-200": "hsl(var(--base-200))",
          "base-300": "hsl(var(--base-300))",
          "base-content": "hsl(var(--base-content))",
        },
      },
    ],
  },
}

