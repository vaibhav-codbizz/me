import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00ff41',
        'dark-charcoal': '#1a1a1a',
        'matrix-green': '#00ff41',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'pulse-green': 'pulse-green 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink-caret': {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#00ff41' }
        },
        glow: {
          'from': { 'text-shadow': '0 0 20px #00ff41, 0 0 30px #00ff41, 0 0 40px #00ff41' },
          'to': { 'text-shadow': '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        'pulse-green': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' }
        }
      },
      boxShadow: {
        'neon': '0 0 20px #00ff41',
        'neon-lg': '0 0 30px #00ff41, 0 0 60px #00ff41',
      }
    },
  },
  plugins: [],
}
export default config