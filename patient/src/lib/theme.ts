// lib/theme.ts
import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react";

const config = defineConfig({
  // Keep Chakra's reset (helps Chakra components look right)
  preflight: false,
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
    },
  },
  theme: {
    breakpoints: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    tokens: {
      fonts: {
        body: { value: "var(--font-readex), sans-serif" },
        heading: { value: "var(--font-chillax), sans-serif" },
      },
      colors: {
        accentBlue: { value: "oklch(0.56 0.2331 266.05)" },
        accentLime: { value: "oklch(0.94 0.2103 118.83)" },
        accentGreen: { value: "oklch(0.77 0.2044 130.85)" },
        dimGray: { value: "oklch(0.67 0 0)" },
        success: { value: "rgba(34,197,94,0.16)" },
        error: { value: "rgba(239,68,68,0.16)" },
        info: { value: "rgba(59,130,246,0.16)" },
      },
    },
    semanticTokens: {
      colors: {
        whiteAlpha: {
          default: { value: "{colors.whiteAlpha.300}" },
          _dark: { value: "{colors.whiteAlpha.700}" },
        },
        blackAlpha: {
          default: { value: "{colors.blackAlpha.300}" },
          _dark: { value: "{colors.blackAlpha.700}" },
        },
      },
    },
    keyframes: {
      blob: {
        "0%": { transform: "scale(1) translate(0,0)" },
        "33%": { transform: "scale(1.1) translate(10px,-10px)" },
        "66%": { transform: "scale(0.9) translate(-10px,10px)" },
        "100%": { transform: "scale(1) translate(0,0)" },
      },
    },
    layerStyles: {
      "soft-white-shadow": {
        boxShadow: "0 0 15px rgba(225,225,225,0.3)",
      },
    },
    animationStyles: {
      blob: {
        animation: "blob 7s infinite",
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
