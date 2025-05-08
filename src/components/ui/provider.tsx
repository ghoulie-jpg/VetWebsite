import { ChakraProvider, Box } from "@chakra-ui/react";
import customTheme from "../../../styles/theme";

export function Provider({ children }) {
  return (
    <ChakraProvider value={customTheme}>

      {children}
    </ChakraProvider>
  );
}
