import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Header = () => (
  <Box
    pos="relative"
    w="100%"
    h="80vh" // Back to original 80vh
    bgImage="url(/DSC_0548-Edit3.jpg)"
    bgSize="cover"
    bgPos={{ base: 'center', smDown: '75%' }}
  >
    <Box
      pos="absolute"
      left={0}
      top={0}
      w="100%"
      h="100%" // Back to 100% of the 80vh container
      bgImage={{
        base: 'linear-gradient(to right, rgba(255,255,255,0.65) 20%, rgba(255,255,255,0) 70%)',
        smDown: 'none',
      }}
      bg={{ smDown: 'rgba(255,255,255,0.65)' }}
      p={{ base: 4, sm: 6, md: 8 }}
      display="flex"
      flexDirection="column"
      justifyContent="flex-start" // Back to flex-start
      gap={2}
    >
      <Box
        w={{ base: '100%', sm: '50%', md: '40%', lg: '30%' }}
        overflowWrap="break-word"
        display={'flex'}
        flexDirection={'column'}
        justifyContent={{ base: 'flex-start', smDown: 'space-between' }}
        gap={{ base: 2, sm: 3, md: 4 }}
        maxW="600px" // Added max width constraint
      >
        <Heading
          as="h1"
          fontSize={{
            base: 'clamp(1rem, 10vw, 2rem)', // Even more aggressive scaling
            sm: 'clamp(1.2rem, 8vw, 2.5rem)',
            md: 'clamp(1.5rem, 6vw, 3rem)',
            lg: 'clamp(2rem, 4vw, 3.5rem)',
          }}
          fontWeight="300"
          lineHeight="0.9"
          textAlign="left"
          color="rgb(39,30,30)"
          textShadow="2px 2px 4px rgba(0,0,0,0.2)"
          mb={{ base: 1, sm: 2, md: 3 }}
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

        <Box display="flex" flexDirection="column" gap={{ base: 1, sm: 2 }}>
          <Text
            fontSize={{
              base: 'clamp(0.8rem, 4vw, 1.2rem)', // Much more aggressive scaling
              sm: 'clamp(0.9rem, 3.5vw, 1.3rem)',
              md: 'clamp(1rem, 3vw, 1.4rem)',
              lg: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            }}
            fontWeight="500"
            lineHeight="1.3"
            color="rgb(39,30,30)"
          >
            Offering in-home, virtual and telemedicine care for dogs and cats.
          </Text>

          <Text
            fontSize={{
              base: 'clamp(0.8rem, 4vw, 1.2rem)', // Much more aggressive scaling
              sm: 'clamp(0.9rem, 3.5vw, 1.3rem)',
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
              base: 'clamp(0.8rem, 4vw, 1.2rem)', // Much more aggressive scaling
              sm: 'clamp(0.9rem, 3.5vw, 1.3rem)',
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
  </Box>
);

export default Header;
