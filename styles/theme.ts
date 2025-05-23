import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      breakpoints: {
        base: { value: "0px" },
        sm: { value: "360px" },
        md: { value: "768px" },
        lg: { value: "1024px" },
        xl: { value: "1440px" },
      },
      // fonts: {
      //   body: { value: "Montserrat, sans-serif" },
      //   heading: { value: "Montserrat, sans-serif" },
      //   mono: { value: "Montserrat, sans-serif" },
      // },
      fonts: {
        body: { value: "Montserrat, sans-serif" },
        heading: { value: "Montserrat, sans-serif" },

        // heading: { value: "Arvo, serif"},
        mono: { value: "Montserrat, sans-serif" },
      },
      fontWeights: {
        thin: { value: 300 },
        normal: { value: 400 },
        medium: { value: 500 },
        bold: { value: 700 },
        extrabold: { value: 800 },
        // We won't include the default font weights here as this is a new system
      },
      radii: {
        sm: { value: "4px" },
        // We won't include the default radii here
      },
      fontSizes: {
        "5xl": { value: "40px" },
        "6xl": { value: "60px" },
        // We won't include the default font sizes here
      },
      colors: {
        orange: {
          50: { value: "#fff5ed" },
          100: { value: "#ffe0b8" },
          200: { value: "#ffc980" },
          300: { value: "#ffb147" },
          400: { value: "#ff980f" },
          500: { value: "#FBA442" }, // Your custom value
          600: { value: "#e68a00" },
          700: { value: "#c96e00" },
          800: { value: "#ac5200" },
          900: { value: "#8f3600" },
        },
        blue: {
          50: { value: "#e6f0fa" },
          100: { value: "#c2d9f0" },
          200: { value: "#9bbde5" },
          300: { value: "#73a1da" },
          400: { value: "#4d86cf" },
          500: { value: "#5072A7" }, // Your custom value
          600: { value: "#3d5c94" },
          700: { value: "#2e4680" },
          800: { value: "#1e306b" },
          900: { value: "#0f1a57" },
        },
        // You might want to include other default colors if needed
      },
    },
  },
});

export default system;