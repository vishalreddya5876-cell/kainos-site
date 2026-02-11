/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        kainos: {
          black: "#000000",
          dark: "#111111",
          gray: "#222222",
          red: "#ff0000",
          coral: "#ff6b6b",
        },

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
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
      },

      fontFamily: {
        "serif-jp": ['"Noto Serif JP"', "serif"],
        sans: ["Inter", "sans-serif"],
        cinzel: ["Cinzel", "serif"],
      },

      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },

      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "glow-red": "0 0 20px rgba(255, 0, 0, 0.3)",
        "glow-red-strong": "0 0 30px rgba(255, 0, 0, 0.5)",
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "glow-pulse": {
          "0%, 100%": { textShadow: "0 0 20px rgba(255, 0, 0, 0.5)" },
          "50%": { textShadow: "0 0 40px rgba(255, 0, 0, 0.8)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
};

