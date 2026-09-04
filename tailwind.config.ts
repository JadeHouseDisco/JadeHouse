import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

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
          600: '#3d9b52',
          700: '#2d8437',
          800: '#207227',
          900: '#0d5e13',
        },
        'custom-white': 'rgb(240, 242, 242)'
      },
      animation: {
        spinRecord: 'spin 20s linear infinite forwards',
        marquee: 'marquee 8s linear infinite',
        marquee2: 'marquee2 8s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-105%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(105%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
  
};
export default config;
