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
      <Grid
        position="relative"
        width="100%"
        templateColumns="1fr"
        height={['80vh', '80vh', '80vh', '80vh']}
      >
        {/* Full-width hero with gradient overlay - moved to right */}
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
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          p={['4%', '5%', '5%', '5%']}
          pt={['4%', '4%', '2%', '2%']} // Much less top padding on desktop
        >
          {/* 1) Montague heading in top */}
          <Box
            flex="0 0 auto"
            mb={["6", "0"]}
          >
            <Heading
              color="rgb(39, 30, 30)"
              fontSize={['6xl', '6xl', '6xl', '6xl']}
              fontWeight="normal"
              lineHeight="1.2"
              m={0}
              textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
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

          {/* 2) Clinic info - fills entire remaining space on mobile */}
          <Box
            flex="1"
            bg="rgba(255, 255, 255, 0)"
            color="black" 
            width={["40%", "40%", "35%", "35%"]}
            display="flex"
            alignItems="stretch"
          >
            <Text 
              fontSize={['3xl', '3xl', '2xl', '2xl']} 
              fontWeight="medium" 
              lineHeight="1.3"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <span>Offering in home, virtual and telemedicine care for dogs and cats.</span>
              <span>Serving the communities and residents of Lanark County.</span>
              <span>A focus on disease prevention and the use of conventional and alternative strategies to preserve health.</span>
            </Text>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Header;