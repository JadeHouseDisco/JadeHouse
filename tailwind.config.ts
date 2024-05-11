import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        jade: {
          100: '#f0f5f4',
          200: '#c8e6c9',
          300: '#a1d6a3',
          400: '#7ac67d',
          500: '#54b567',
          600: '#3d9b52', // <-- This is the shade used for the hover background
          700: '#2d8437', // <-- This is the shade used for the initial text color
          800: '#207227',
          900: '#0d5e13',
        },
        'custom-white': 'rgb(240, 242, 242)'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
