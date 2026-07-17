import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#4266FF",
        },
        secondary: {
          100: "#FB532D",
          200: "#FFB420",
          300: "#4266FF",
        },
        neutral: {
          100: "#FFFFFF",
          200: "#FAFAFA",
          300: "#ECECEC",
          400: "#CCCCCC",
          500: "#7A7A7A",
          600: "#4D4D4D",
          700: "#202020",
          800: "#121212",
        }
      },
      maxWidth: {
        container: "1224px",
      },
      borderRadius: {
        xl2: "24px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 100s linear infinite",
        "marquee-fast": "marquee 50s linear infinite",
        "marquee-slow": "marquee 150s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
