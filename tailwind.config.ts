import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#135f96',   // Blue
        "secondary": '#b10f17', // Red
        "accent": '#f5e900',    // Yellow
      },
    },
  },
  plugins: [],
};
export default config;
