import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-lato)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        red: {
          DEFAULT: "#FF4A57",
          light: "#FF6974",
        },
        blueGrey: {
          DEFAULT: "#23263A",
          light: "#2B2D41",
          dark: "#1D202F",
        },
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
