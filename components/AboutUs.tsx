import React from 'react';
import { Box, Grid, Flex, Image, Heading, Text } from '@chakra-ui/react';

const AboutUs: React.FC = () => {
  return (
    <Box pt={{ base: 4, md: 8 }}>
      {/* — "Who we are" */}
      <Grid templateColumns="repeat(12, 1fr)" mb={6}>
        <Flex
          gridColumn={['2 / 12', '2 / 12', '2 / 12', '2 / 8', '2 / 8']}
          flexDirection="column"
          px={{ base: 4, md: 8 }}
        >
          <Heading
            as="h3"
            textTransform="uppercase"
            fontSize={['3xl', '3xl', '5xl', '5xl', '5xl']}
            fontWeight="extrabold"
            mb="10px"
          >
            About Us
          </Heading>
        </Flex>
      </Grid>

      {/* — images & text (stacked vertically) */}
      <Grid templateColumns="repeat(12, 1fr)">
        <Box
          gridColumn={['2 / 12', '2 / 12', '2 / 12', '2 / 13', '2 / 13']}
          px={{ base: 4, md: 8 }}
          mb={10}
        >
          {/* First section: Image and Text using Flexbox */}
          <Flex
            direction={{ base: 'column', md: 'row' }}
            gap={{ base: 6, md: 0 }}
            alignItems="start"
            mb={10}
          >
            <Image
              src="About_us_hester.jpg"
              alt="Hester Grodde"
              w="350px"
              h="350px"
              objectFit="cover"
              boxShadow="lg"
              flexShrink={0}
            />
            
            <Box pl={{ base: 0, md: 4 }} maxW="700px">
              <Heading as="h2" size="2xl" mb={2}>
                Hester Grodde
              </Heading>
              <Text mb={2} fontSize="xl">
                Hester obtained her veterinary degree at the Ontario Veterinary College. She began her career in 1996
                in a small mixed animal practice in the Ottawa Valley then spent a year in New Zealand serving farmers and the rural community of Morrinsville. She moved back to Canada as she has already 
                put down roots in the Smiths Falls area. She worked for the next 26 years serving the communities of Smiths Falls and Merrickville where she raised her family. 
                She continues to farm and enjoys growing, raising and hunting her own food. Her passion for healthy living through diet and lifestyle comes through in her 
                passion to do the same for her patients. 
              </Text>
            </Box>
          </Flex>

          {/* Second section: Image and Text using Flexbox */}
          <Flex
            direction={{ base: 'column', md: 'row' }}
            gap={{ base: 6, md: 0 }}
            alignItems="start"
          >
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3"
              alt="Tiffany"
              w="400px"
              h="250px"
              objectFit="cover"
              boxShadow="lg"
              flexShrink={0}
            />

            <Box pl={{ base: 0, md: 4 }}>
              <Heading as="h2" size="2xl" mb={2}>
                Tiffany
              </Heading>
              <Text mb={2} fontSize="lg">
                Perfect for modern tropical spaces and baroque-inspired interiors.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
};

export default AboutUs;