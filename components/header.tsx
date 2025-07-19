// Header.jsx
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Header = () => (
  <Box
    w="100%"
    minH="80vh"
    bgImage={{
      base: `linear-gradient(
               rgba(255,255,255,0.65),
               rgba(255,255,255,0.65)
             ),
             url(/DSC_0548-Edit3.jpg)`,
      md: `linear-gradient(
              to right,
              rgba(255,255,255,0.65) 20%,
              rgba(255,255,255,0)   70%
            ),
            url(/DSC_0548-Edit3.jpg)`,
    }}
    bgSize="cover"
    bgRepeat="no-repeat"
    bgPos={{ base: 'center', md: '75%' }}
    p={{ base: 4, sm: 6, md: 8 }}
    display="flex"
    alignItems="flex-start"
  >
    <Box
      w={{ base: '100%', sm: '100%', md: '50%', lg: '40%', xl: '30%' }}
      maxW="600px"
      display="flex"
      flexDirection="column"
      gap={{ base: 3, sm: 4, md: 4 }}
      overflowWrap="break-word"
    >
      <Heading
        as="h1"
        fontSize={{
          base: 'clamp(1.5rem, 12vw, 2.5rem)', // ↑ increased on mobile
          sm: 'clamp(1.8rem, 10vw, 3rem)', // ↑ a bit larger on sm
          md: 'clamp(1.5rem, 6vw, 3rem)',
          lg: 'clamp(2rem, 4vw, 3.5rem)',
        }}
        fontWeight="300"
        lineHeight="0.9"
        textAlign="left"
        color="rgb(39,30,30)"
        textShadow="2px 2px 4px rgba(0,0,0,0.2)"
        mb={{ base: 2, sm: 3, md: 3 }}
      >
        Montague
        <br />
        Mobile
        <br />
        <Text as="span" fontWeight="500" display="block">
          Veterinary
          <br />
          Services
        </Text>
      </Heading>

      <Box display="flex" flexDirection="column" gap={{ base: 2, sm: 3 }}>
        <Text
          fontSize={{
            base: 'clamp(1rem, 5vw, 1.6rem)', // ↑ increased on mobile
            sm: 'clamp(1.1rem, 4.5vw, 1.7rem)', // ↑ a bit larger on sm
            md: 'clamp(1rem, 3vw, 1.4rem)',
            lg: 'clamp(1.1rem, 2.5vw, 1.5rem)',
          }}
          fontWeight="500"
          lineHeight="1.3"
          color="rgb(39,30,30)"
        >
          Offering in‑home, virtual and telemedicine care for dogs and cats.
        </Text>
        <Text
          fontSize={{
            base: 'clamp(1rem, 5vw, 1.6rem)',
            sm: 'clamp(1.1rem, 4.5vw, 1.7rem)',
            md: 'clamp(1rem, 3vw, 1.4rem)',
            lg: 'clamp(1.1rem, 2.5vw, 1.5rem)',
          }}
          fontWeight="500"
          lineHeight="1.3"
          color="rgb(39,30,30)"
        >
          Serving the communities and residents of Lanark County.
        </Text>
        <Text
          fontSize={{
            base: 'clamp(1rem, 5vw, 1.6rem)',
            sm: 'clamp(1.1rem, 4.5vw, 1.7rem)',
            md: 'clamp(1rem, 3vw, 1.4rem)',
            lg: 'clamp(1.1rem, 2.5vw, 1.5rem)',
          }}
          fontWeight="500"
          lineHeight="1.3"
          color="rgb(39,30,30)"
        >
          A focus on disease prevention and the use of conventional and
          alternative strategies to preserve health.
        </Text>
      </Box>
    </Box>
  </Box>
);

export default Header;
