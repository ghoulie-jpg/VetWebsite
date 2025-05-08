import React from 'react';
import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <Box width="100vw" overflow="hidden">
      <Grid
        position="relative"
        width="100%"
        templateColumns="1fr"
        height={['80vh', '80vh', '80vh', '90vh']}
      >
        {/* Full-width hero with gradient overlay */}
        <Box
          position="relative"
          backgroundImage={`linear-gradient(
            to left,
            rgba(255, 255, 255, 0.90) 20%,
            rgba(255, 255, 255, 0)   70%
          ), url(/realbarn.jpg)`}
          backgroundSize="cover"
          backgroundPosition="center"
          width="100%"
          height="100%"
        >
          {/* Translucent overlay box with black text */}
          <Box
            position="absolute"
            top={['10%', '10%', '15%', '20%']}
            right={['5%', '5%', '5%', '2%']}
            bg="rgba(255, 255, 255, 0)"
            color="black"
            p={[2, 4, 6]}
            maxW={["80%", "60%", "40%", "30%"]}
            borderRadius="md"
          >
            <Text fontSize={['sm', 'md', 'lg', 'xl']}>
              We are a telemedicine Veterinary Clinic located in Perth, Ontario.
              Our team consists of a veterinarian and a veterinary technician.
            </Text>
          </Box>

          {/* Main heading at bottom left with cast shadow */}
          <Flex
            flexDirection="column"
            justifyContent="flex-end"
            p={['2em', '3em', '4em', '5%']}
            height="100%"
          >
            <Flex
              direction="column"
              display="inline-flex"
              width="fit-content"
              bg="rgba(36, 72, 85, 100)"
              boxShadow="0 8px 16px rgba(0, 0, 0, 0.4)"
              px={['4px', '12px', '16px', '24px']}
              py={['8px', '16px', '24px']}
            >
              <Heading
                color="white"
                fontSize={['4xl', '5xl', '6xl']}
                fontWeight="400"
                lineHeight="1.3"
                m={0}
                bg="transparent"
              >
                Montague Mobile
                <br />
                Veterinary Services
              </Heading>
            </Flex>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
};

export default Header;
