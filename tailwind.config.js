/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#FDFBF7',    // Warm Oatmeal / Cream
          secondary: '#F4F0EA',  // Soft Linen
          tertiary: '#EBE5DB',   // Muted Sand
        },
        surface: {
          DEFAULT: '#F4F0EA',
          elevated: '#FFFFFF',
          glass: 'rgba(253, 251, 247, 0.75)',
          dark: '#1E1E1E',
        },
        text: {
          primary: '#1E1E1E',    // Soft Charcoal
          muted: '#736B63',      // Warm Grey / Earth Tone
          subtle: '#A59D94',     // Faded Stone
        },
        accent: {
          DEFAULT: '#C25E3E',    // Muted Terracotta
          clay: '#8B5E3C',       // Warm Clay
          hover: '#AB4D2F',      // Deep Terracotta
          light: '#F5E6E0',      // Soft Terracotta Tint
        },
        border: {
          DEFAULT: '#E5DFD5',
          dark: '#383430',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cinzel"', 'Georgia', 'serif'],
        display: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px -2px rgba(139, 94, 60, 0.06)',
        'warm-md': '0 8px 24px -4px rgba(139, 94, 60, 0.08), 0 2px 6px -1px rgba(30, 30, 30, 0.04)',
        'warm-lg': '0 20px 40px -8px rgba(139, 94, 60, 0.12), 0 4px 12px -2px rgba(30, 30, 30, 0.05)',
        'warm-card': '0 10px 30px -5px rgba(30, 30, 30, 0.05), 0 0 1px 1px rgba(229, 223, 213, 0.6)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
