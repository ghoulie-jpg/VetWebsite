import React, { useEffect, useState } from 'react';
import { Box, Grid, Heading, Text, Button } from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <Box width="100%" overflow="hidden">
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
        minHeight="500px" // Prevents it from getting too small
        display="flex"
        flexDirection="column"
        gap="0"
      >
        {/* Title box - responsive width for smaller screens */}
        <Box
          width={{ base: "100%", md: "100%", lg: "100%", xl:"100%" }}
          height="50%"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          px="6"
          ml="2%"
        >
          <Heading
            color="rgb(39, 30, 30)"
            fontSize={{ 
              base: "clamp(1.5rem, 8vw, 2.5rem)", 
              md: "clamp(2rem, 6vw, 3rem)", 
              lg: "clamp(2.5rem, 5vw, 3.5rem)",
              xl: "clamp(3rem, 4vw, 4rem)" 
            }}
            fontWeight="normal"
            lineHeight="1.1"
            textAlign="left"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
            width="100%"
          >
            <Text as="span" fontWeight="thin">
              Montague
              <br />
              Mobile
              <br />
            </Text>
            <Text as="span" fontWeight="medium">
              Veterinary
              <br />
              Services
            </Text>
          </Heading>
        </Box>

        {/* Clinic info box - responsive width for smaller screens */}
        <Box
          width={{ base: "50%", md: "60%", lg: "60%", xl: "40%" }}
          height="50%"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          px="6"
          ml="2%"
        >
          <Text
            fontSize={{ 
              base: "clamp(0.9rem, 4vw, 1.1rem)", 
              md: "clamp(1rem, 3vw, 1.3rem)", 
              lg: "clamp(1.1rem, 2.5vw, 1.4rem)",
              xl: "clamp(1.2rem, 2vw, 1.5rem)" 
            }}
            fontWeight="medium"
            lineHeight="1.4"
            textAlign="left"
            display="flex"
            flexDirection="column"
            gap="4"
            width="100%"
            color="black"
          >
            <span>
              Offering in home, virtual and telemedicine care for dogs and cats.
            </span>
            <span>Serving the communities and residents of Lanark County.</span>
            <span>
              A focus on disease prevention and the use of conventional and
              alternative strategies to preserve health.
            </span>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
