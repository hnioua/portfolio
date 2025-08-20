/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', /* slate-200 */
        input: 'var(--color-input)', /* white */
        ring: 'var(--color-ring)', /* cyan-600 */
        background: 'var(--color-background)', /* white */
        foreground: 'var(--color-foreground)', /* slate-800 */
        primary: {
          DEFAULT: 'var(--color-primary)', /* cyan-600 */
          foreground: 'var(--color-primary-foreground)', /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* slate-900 */
          foreground: 'var(--color-secondary-foreground)', /* white */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* red-500 */
          foreground: 'var(--color-destructive-foreground)', /* white */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* slate-50 */
          foreground: 'var(--color-muted-foreground)', /* slate-500 */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* orange-500 */
          foreground: 'var(--color-accent-foreground)', /* white */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* white */
          foreground: 'var(--color-popover-foreground)', /* slate-800 */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* white */
          foreground: 'var(--color-card-foreground)', /* slate-800 */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* emerald-500 */
          foreground: 'var(--color-success-foreground)', /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* amber-500 */
          foreground: 'var(--color-warning-foreground)', /* white */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* red-500 */
          foreground: 'var(--color-error-foreground)', /* white */
        },
        surface: 'var(--color-surface)', /* slate-50 */
        'surface-foreground': 'var(--color-surface-foreground)', /* slate-800 */
        'text-primary': 'var(--color-text-primary)', /* slate-800 */
        'text-secondary': 'var(--color-text-secondary)', /* slate-500 */
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-in': 'slideIn 250ms ease-in-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      zIndex: {
        '60': '60',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}