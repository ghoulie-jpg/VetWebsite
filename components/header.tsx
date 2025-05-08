import React from 'react';
import { Box, Flex, Grid, Heading , Text } from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <Box width="100vw" overflow="hidden">
      <Grid
        position="relative"
        width="100%"
        templateColumns={['1fr', '1fr', '1fr', '2fr 1fr']}
        height={['auto', 'auto', 'auto', '90vh']}
      >
        <Box
          backgroundImage="url(/realbarn.jpg)"
          backgroundSize="cover"
          backgroundPosition="center"
          height={['80vh', '80vh', '80vh', '100%']}
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-end"
            // Using the reduced padding from the previous step (e.g., 5% or 4em)
            // Let's keep 5% for this example, adjust if you used 4em
            paddingX={['2em', '3em', '4em', '5%']}
            paddingBottom="6"
            height="100%"
          >
            <Heading
              // --- MODIFIED FONT SIZE ---
              // Reduced largest size from 6xl to 5xl
              fontSize={['4xl', '5xl', '6xl']} // <-- Change here
              fontWeight="400"
              color="white"
              bg="rgba(36,72,85, 1)"
              width="fit-content"
              // --- Ensure maxWidth allows full use of available space ---
              maxWidth="100%" // <-- Change or remove if it was 80%
              px={['4px', '12px', '12px', '16px', '24px']}
              py={['8px', '8px', '16px', '16px', '24px']}
              lineHeight="1.3"
              mb="2"
            >
              Montague Mobile<br />
              Veterinary Services
            </Heading>

            {/* <Heading
              as="h3"
              fontSize={['lg', 'lg', '2xl', '2xl', '2xl']}
              textTransform="uppercase"
              color="blue.500"
              bg="white"
              width="fit-content"
              px={['24px', '24px', '30px', '30px', '30px']}
              py={['8px', '8px', '14px', '14px', '14px']}
              fontWeight="400"
            >
              Mobile & Travelling
            </Heading> */}
          </Flex>
        </Box>
        
        
        <Box
  // bg="rgb(144,174,173)"
  display="flex"
  flexDirection="column"
  alignItems="flex-start"
  justifyContent="flex-start"
  pt="30%"           // 20% down from the top
  px={['1em','2em','3em']}  // responsive left/right padding
  pb={['1em','2em','3em']}  // optional bottom padding to balance
>
  <Heading 
    fontSize={['2xl','3xl','4xl']} 
    textAlign="left" 
    color="black"
    textDecoration="underline"
  textDecorationColor="black"
  textDecorationThickness="2px"
  textUnderlineOffset="4px"
  >
    Our Mission
  </Heading>
  <Text 
    fontSize={['lg','xl','2xl']} 
    textAlign="left" 
    color="black" 
    mt="2"
    
  >
    This is the descriptive text that goes under the heading. You can adjust
    fontSize, color, margin, etc. as needed.
  </Text>
</Box>

    </Grid>
    </Box>
  );
};

export default Header;