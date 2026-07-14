import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        majorelle: "#5318EB", // primary purple accent
        ultraviolet: "#280F62", // dark purple bg
        lime: "#C4EE87", // lime green CTA
        mauve: "#C6A5FF", // light purple accent
        ink: "#0C021C", // near-black text
        muted: "#666666",
        lavender: "#EBE3FE",
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
