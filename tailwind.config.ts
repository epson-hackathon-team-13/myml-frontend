import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
    },
  },
  plugins: [],
};
export default config;
