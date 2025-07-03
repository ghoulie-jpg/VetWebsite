import { createSystem, defaultConfig } from '@chakra-ui/react';

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      breakpoints: {
        base: { value: '0px' },
        sm: { value: '360px' },
        md: { value: '768px' },
        lg: { value: '1024px' },
        xl: { value: '1440px' },
      },
      // fonts: {
      //   body: { value: "Montserrat, sans-serif" },
      //   heading: { value: "Montserrat, sans-serif" },
      //   mono: { value: "Montserrat, sans-serif" },
      // },
      fonts: {
        body: { value: 'Montserrat, sans-serif' },
        heading: { value: 'Montserrat, sans-serif' },

        // heading: { value: "Arvo, serif"},
        mono: { value: 'Montserrat, sans-serif' },
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
        sm: { value: '4px' },
        // We won't include the default radii here
      },
      fontSizes: {
        '5xl': { value: '40px' },
        '6xl': { value: '60px' },
        // We won't include the default font sizes here
      },
      colors: {
        dark_green: {
          500: { value: '#023020' },
        },
        light_green: {
          500: { value: '#C3D2A7' },
        },
        white: {
          500: { value: '#FFFFFF' },
        },
        black: {
          500: { value: '#000000' },
        },
        // You might want to include other default colors if needed
      },
    },
  },
});

export default system;
