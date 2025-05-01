import type { Config } from "tailwindcss"
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "pixel-blue": "#1E00FF",
        "pixel-red": "#FF0004",
        "pixel-black": "#000000",
        "pixel-white": "#FFFFFF",
        "pixel-yellow": "#FFCC00",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "cursive"],
        mono: ['"VT323"', "monospace"],
      },
      animation: {
        glitch: "glitch 2s infinite",
        blink: "blink 1s infinite",
      },
      keyframes: {
        glitch: {
          "0%": {
            textShadow: "2px 0 0 #FF0004, -2px 0 0 #1E00FF",
          },
          "25%": {
            textShadow: "-2px 0 0 #FF0004, 2px 0 0 #1E00FF",
          },
          "50%": {
            textShadow: "2px 0 0 #FF0004, -2px 0 0 #1E00FF",
          },
          "75%": {
            textShadow: "-2px 0 0 #FF0004, 2px 0 0 #1E00FF",
          },
          "100%": {
            textShadow: "2px 0 0 #FF0004, -2px 0 0 #1E00FF",
          },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
