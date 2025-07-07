import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Header = () => (
  <Box
    pos="relative"
    w="100%"
    h="80vh"
    bgImage="url(/DSC_0548-Edit3.jpg)"
    bgSize="cover"
    bgPos={{ base: 'center', smDown: '75%' }}
  >
    <Box
      pos="absolute"
      left={0}
      top={0}
      w="100%"
      h="100%"
      bgImage={{
        base: 'linear-gradient(to right, rgba(255,255,255,0.65) 20%, rgba(255,255,255,0) 70%)',
        smDown: 'none',
      }}
      bg={{ smDown: 'rgba(255,255,255,0.65)' }}
      p={{ base: 4, sm: 6, md: 8 }}
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      gap={2}
    >
      <Box
        w={{ base: '100%', sm: '50%', md: '40%', lg: '30%' }}
        overflowWrap="break-word"
        display={'flex'}
        flexDirection={'column'}
        height={{
          base: '100%',
          // smDown: '70%',
        }}
        justifyContent={{ base: 'flex-start', smDown: 'space-between' }}
      >
        <Heading
          as="h1"
          fontSize={{
            base: 'clamp(2rem, 10vw, 3.5rem)',
            sm: 'clamp(2rem, 9vw, 3rem)',
            md: 'clamp(3rem, 7vw, 3.7rem)',
            lg: 'clamp(3.5rem, 3vw, 4.5rem)',
          }}
          fontWeight="300"
          lineHeight="0.9"
          textAlign="left"
          color="rgb(39,30,30)"
          textShadow="2px 2px 4px rgba(0,0,0,0.2)"
          mb={{ base: 2, sm: 3, md: 4 }}
          minWidth={'300px'}
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
              base: 'clamp(1.1rem, 5vw, 1.6rem)',
              sm: 'clamp(1.2rem, 4.5vw, 1.7rem)',
              md: 'clamp(1.3rem, 4vw, 1.8rem)',
              lg: 'clamp(1.4rem, 3.5vw, 1.9rem)',
            }}
            fontWeight="500"
            lineHeight="1.3"
            color="rgb(39,30,30)"
          >
            Offering in-home, virtual and telemedicine care for dogs and cats.
          </Text>

          <Text
            fontSize={{
              base: 'clamp(1.1rem, 5vw, 1.6rem)',
              sm: 'clamp(1.2rem, 4.5vw, 1.7rem)',
              md: 'clamp(1.3rem, 4vw, 1.8rem)',
              lg: 'clamp(1.4rem, 3.5vw, 1.9rem)',
            }}
            fontWeight="500"
            lineHeight="1.3"
            color="rgb(39,30,30)"
          >
            Serving the communities and residents of Lanark County.
          </Text>

          <Text
            fontSize={{
              base: 'clamp(1.1rem, 5vw, 1.6rem)',
              sm: 'clamp(1.2rem, 4.5vw, 1.7rem)',
              md: 'clamp(1.3rem, 4vw, 1.8rem)',
              lg: 'clamp(1.4rem, 3.5vw, 1.9rem)',
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
