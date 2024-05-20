import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        'main-pattern': "url('/background.png')",
        'glorysmith': "url('/glorysmith_background.gif')",
      },
      colors: {
        primary: {
          50: "#F6EFF4",
          100: "#ECDFE9",
          200: "#D9BFD2",
          300: "#CF78C2",
          400: "#B47EA5",
          500: "#59344F",
          600: "#814B72",
          700: "#613856",
          800: "#402639",
          900: "#360821",
      },
        secondary: {
          50: "#FCF5E9",
          100: "#F9ECD2",
          200: "#F3D9A5",
          300: "#ECC679",
          400: "#E6B34C",
          500: "#F5E0B7",
          600: "#B38019",
          700: "#866013",
          800: "#5A400C",
          900: "#2D2006",
      },
  },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  plugins: [require("tailwindcss-animate"),
            require('@tailwindcss/typography'),
  ],
} satisfies Config

export default config