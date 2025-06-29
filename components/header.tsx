import React, { useEffect, useState } from 'react';
import { Box, Grid, Heading, Text, Button } from '@chakra-ui/react';

const Header: React.FC = () => {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    // Get the navbar height
    const updateNavHeight = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        setNavHeight(nav.offsetHeight);
      }
    };

    // Update on mount and window resize
    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);

    return () => window.removeEventListener('resize', updateNavHeight);
  }, []);

  return (
    <Box width="100vw" overflow="hidden" pt={`${navHeight}px`}>
      <Box
        position="relative"
        backgroundImage={`linear-gradient(
             to right,
             rgba(255, 255, 255, 0.65) 20%,
             rgba(255, 255, 255, 0)   70%
           ), url(/DSC_0548-Edit3.jpg)`}
        backgroundSize="cover"
        backgroundPosition="center"
        width="100%"
        height="80vh"
        display="flex"
        flexDirection="column"
        gap="0"
      >
        {/* 1) Montague heading box - 40% width, 1/2 height, 5% from left */}
        <Box
          width="40%"
          height="50%"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          px="6"
          ml="2%"
        >
          <Heading
            color="rgb(39, 30, 30)"
            fontSize="clamp(2rem, 8vw, 4rem)"
            fontWeight="normal"
            lineHeight="1.1"
            textAlign="left"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
            width="100%"
          >
            <Text as="span" fontWeight="thin">
              Montague
              <br />
              Mobile<br />
            </Text>
            <Text as="span" fontWeight="medium">
              Veterinary
              <br />
              Services
            </Text>
          </Heading>
        </Box>

        {/* 2) Clinic info box - 40% width, 1/2 height, 5% from left */}
        <Box
          width="40%"
          height="50%"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          px="6"
          ml="2%"
        >
          <Text 
            fontSize="clamp(1.1rem, 4.5vw, 1.5rem)"
            fontWeight="medium" 
            lineHeight="1.4"
            textAlign="left"
            display="flex"
            flexDirection="column"
            gap="4"
            width="100%"
          >
            <span>Offering in home, virtual and telemedicine care for dogs and cats.</span>
            <span>Serving the communities and residents of Lanark County.</span>
            <span>A focus on disease prevention and the use of conventional and alternative strategies to preserve health.</span>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;