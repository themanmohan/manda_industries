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
        'primary': "#ECEEFF",
        "coral-red": "#0000FF",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "lightBlue":"#e8f0f2"
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        krona: ['Krona One', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0 0 10px rgba(51, 51, 51, 0.2)'
      },
      rotate: {
        '35': '35deg',
      }
    },
  },
  plugins: [],
};
export default config;
