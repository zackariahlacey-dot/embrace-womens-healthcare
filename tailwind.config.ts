import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        embrace: {
          navy: "#1F2E4C",
          slate: "#3D4A66",
          teal: "#3AA5A0",
          lavender: "#B5A3D8",
          cream: "#EAE5D9",
          "cream-light": "#FAF8F5",
        },
      },
    },
  },
  plugins: [],
};

export default config;
