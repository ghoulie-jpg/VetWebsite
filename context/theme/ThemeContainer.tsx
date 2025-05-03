// src/components/ui/ThemeContainer.tsx
import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import system from '../../styles/theme'; // adjust if your theme lives elsewhere
import { ColorModeProvider } from "../../src/components/ui/color-mode";


interface ThemeContainerProps {
  children: React.ReactNode;
}

const ThemeContainer: React.FC<ThemeContainerProps> = ({ children }) => {
  return (
    <ChakraProvider value={system}>
      {/* Inject the initial color mode script */}
      <ColorModeProvider />

      <Box bg="#FBE9D0" p={4} color="black" minH="100vh"> {/* Ensure full viewport height */}
        {children}
      </Box>

    </ChakraProvider>
  );
};

export default ThemeContainer;
