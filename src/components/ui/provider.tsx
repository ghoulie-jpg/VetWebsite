import { ChakraProvider, Box } from "@chakra-ui/react";
import customTheme from "../../../styles/theme";

export function Provider({ children }) {
  return (
    <ChakraProvider value={customTheme}>
      <Box bg="teal.500" p={4} color="black">
        This box has a teal background!
      </Box>
      {children}
    </ChakraProvider>
  );
}
