import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      screens: {
        tab: "768px",
        web: "1201px",
      },
      fontSize: {
        "12": ["12px", "1.6"],
        "14": ["14px", "1.4"],
        "16": ["16px", "1.4"],
        "17": ["16px", "1.4"],
        "18": ["18px", "1.4"],
        "20": ["20px", "1.4"],
        "23": ["22px", "1.4"],
        "24": ["24px", "1.4"],
        "28": ["28px", "1.4"],
        "32": ["32px", "1.4"],
        "36": ["36px", "1.4"],
        "38": ["38px", "1.4"],
        "40": ["40px", "1.4"],
        "44": ["44px", "1.4"],
        "48": ["48px", "1.4"],
      },
      fontFamily: {
        Pretendard: ["Pretendard", "ui-sans-serif", "system-ui"],
      },
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
        etc: {
          blue: "hsl(var(--etc-blue))",
          "soft-blue": "hsl(var(--etc-soft-blue))",
          green: "hsl(var(--etc-green))",
          "soft-green": "hsl(var(--etc-soft-green))",
          orange: "hsl(var(--etc-orange))",
          "soft-orange": "hsl(var(--etc-soft-orange))",
          red: "hsl(var(--etc-red))",
          "soft-red": "hsl(var(--etc-soft-red))",
        },
        error: "hsl(var(--error))",
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
