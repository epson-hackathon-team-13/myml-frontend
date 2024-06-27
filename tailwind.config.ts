import type { Config } from "tailwindcss";

import plugin from "tailwindcss/plugin";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
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
        web: "640px",
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
          "soft-yellow": "hsl(var(--etc-soft-yellow))",
        },
        error: "hsl(var(--error))",
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "6px",
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
      backgroundImage: {
        point: "linear-gradient(to right, #F2436D 32%, #DEBFF7 100%)",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".h1-36-r": {
          fontSize: "36px",
          lineHeight: "51.8px",
          fontWeight: "400",
        },
        ".h1-36-b": {
          fontSize: "36px",
          lineHeight: "51.8px",
          fontWeight: "700",
        },
        ".h2-28-r": {
          fontSize: "28px",
          lineHeight: "39.2px",
          fontWeight: "400",
        },
        ".h2-28-b": {
          fontSize: "28px",
          lineHeight: "39.2px",
          fontWeight: "700",
        },
        ".h3-24-r": {
          fontSize: "24px",
          lineHeight: "33.6px",
          fontWeight: "400",
        },
        ".h3-24-b": {
          fontSize: "24px",
          lineHeight: "33.6px",
          fontWeight: "700",
        },
        ".subtitle-20-r": {
          fontSize: "20px",
          lineHeight: "28px",
          fontWeight: "400",
        },
        ".subtitle-20-b": {
          fontSize: "20px",
          lineHeight: "28px",
          fontWeight: "700",
        },
        ".body1-16-r": {
          fontSize: "16px",
          lineHeight: "22.4px",
          fontWeight: "400",
        },
        ".body1-16-b": {
          fontSize: "16px",
          lineHeight: "22.4px",
          fontWeight: "700",
        },
        ".body2-14-r": {
          fontSize: "14px",
          lineHeight: "18.9px",
          fontWeight: "400",
        },
        ".body2-14-b": {
          fontSize: "14px",
          lineHeight: "18.9px",
          fontWeight: "700",
        },
        ".caption-12-r": {
          fontSize: "12px",
          lineHeight: "15.6px",
          fontWeight: "400",
        },
        ".caption-12-b": {
          fontSize: "12px",
          lineHeight: "15.6px",
          fontWeight: "700",
        },
        ".text-point-md": {
          background: "linear-gradient(86.42deg, #F2436D 32%, #DEBFF7 50%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "background-clip": "text",
          "text-fill-color": "transparent",
        },
        ".text-point-sm": {
          background: "linear-gradient(80.42deg, #F2436D 15%, #DEBFF7 50%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "background-clip": "text",
          "text-fill-color": "transparent",
        },
      });
    }),
  ],
} satisfies Config;
