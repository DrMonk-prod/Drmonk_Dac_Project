/** @type {import('tailwindcss').Config} */

export const config = {
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "soft-white": "0px 0px 15px 0px rgba(225, 225, 225, 0.3)",
      },
      backgroundImage: {
        radial: "radial-gradient(var(--tw-gradient-stops))",
        "radial-center":
          "radial-gradient(circle at center, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit,minmax(15rem,1fr))", //to automatic adjust grid layout
      },
      animation: {
        blob: "bolb 7s infinite",
      },
      keyframes: {
        bolb: {
          "0%": {
            transform: "scale(1) translate(0px,0px)",
          },
          "33%": {
            transform: "scale(1.1) translate(10px,-10px)",
          },
          "66%": {
            transform: "scale(0.9) translate(-10px,10px)",
          },
          "100%": {
            transform: "scale(1) translate(0px,0px)",
          },
        },
      },
      colors: {
        accentBlue: "oklch(0.56 0.2331 266.05)",
        accentLime: "oklch(0.94 0.2103 118.83)",
        accentGreen: "oklch(0.77 0.2044 130.85)",
        dimGray: "oklch(0.67 0 0)",
        success: "rgba(34, 197, 94, 0.16)",
        error: "rgba(239, 68, 68, 0.16)",
        info: "rgba(59, 130, 246, 0.16)",
        header: "rgba(255, 255, 255, 0.4)",
        whiteAlpha: {
          200: "rgba(255, 255, 255, 0.08)",
          300: "rgba(255, 255, 255, 0.16)",
          400: "rgba(255, 255, 255, 0.24)",
          500: "rgba(255, 255, 255, 0.36)",
          600: "rgba(255, 255, 255, 0.48)",
          700: "rgba(255, 255, 255, 0.64)",
          800: "rgba(255, 255, 255, 0.80)",
          900: "rgba(255, 255, 255, 0.92)",
        },
        blackAlpha: {
          100: "rgba(0, 0, 0, 0.06)",
          200: "rgba(0, 0, 0, 0.08)",
          300: "rgba(0, 0, 0, 0.16)",
          400: "rgba(0, 0, 0, 0.24)",
          500: "rgba(0, 0, 0, 0.36)",
          600: "rgba(0, 0, 0, 0.48)",
          700: "rgba(0, 0, 0, 0.64)",
          800: "rgba(0, 0, 0, 0.80)",
          900: "rgba(0, 0, 0, 0.90)",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        chillax: ["Chillax", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
