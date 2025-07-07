import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Header = () => (
  <Box
    pos="relative"
    w="100%"
    h="80vh"
    bgImage="linear-gradient(to right, rgba(255,255,255,0.65) 20%, rgba(255,255,255,0) 70%), url(/DSC_0548-Edit3.jpg)"
    bgSize="cover"
    bgPos="center"
  >
    <Box
      pos="absolute"
      inset={0}
      p={4}
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      gap={2}
      overflow="hidden"
    >
      {/* fluid, responsive width: nearly full on phones, then progressively narrower */}
      <Box
        w={{ base: '95%', sm: '80%', md: '60%', lg: '40%', xl: '30%' }}
        maxW="600px"
        overflowWrap="break-word"
      >
        <Heading
          as="h1"
          fontSize="clamp(1rem, min(8vw, 20vh), 4rem)"
          fontWeight="300"
          lineHeight="0.9"
          textAlign="left"
          color="rgb(39,30,30)"
          textShadow="2px 2px 4px rgba(0,0,0,0.2)"
          mb={1}
        >
          Montague<br />
          Mobile<br />
          <Text as="span" fontWeight="500" display="block">
            Veterinary<br />
            Services
          </Text>
        </Heading>

        <Text fontSize="clamp(0.75rem, min(3.5vw, 5vh), 1.5rem)" fontWeight="500" lineHeight="1.3">
          Offering in-home, virtual and telemedicine care for dogs and cats.
        </Text>

        <Text fontSize="clamp(0.75rem, min(3.5vw, 5vh), 1.5rem)" fontWeight="500" lineHeight="1.3">
          Serving the communities and residents of Lanark County.
        </Text>

        <Text fontSize="clamp(0.75rem, min(3.5vw, 5vh), 1.5rem)" fontWeight="500" lineHeight="1.3">
          A focus on disease prevention and the use of conventional and alternative strategies to preserve health.
        </Text>
      </Box>
    </Box>
  </Box>
);

export default Header;
