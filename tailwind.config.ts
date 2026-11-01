import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#12243A",
          50: "#E8EDF3",
          100: "#C5D0DE",
          200: "#9EAFC5",
          300: "#778EAC",
          400: "#506D93",
          500: "#2A4C7A",
          600: "#1E3B62",
          700: "#12243A",
          800: "#0B1726",
          900: "#050B13",
        },
        bluestone: {
          DEFAULT: "#356B94",
          50: "#EBF2F7",
          100: "#D0E1ED",
          200: "#A1C3DB",
          300: "#72A5C9",
          400: "#4388B7",
          500: "#356B94",
          600: "#2A5676",
          700: "#1F4059",
          800: "#142B3B",
          900: "#0A151E",
        },
        slate: {
          DEFAULT: "#657586",
          350: "#8A97A6",
        },
        "light-bg": "#F5F7FA",
        accent: "#D9E5EF",
        amber: "#D99A45",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
