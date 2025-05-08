import React from 'react';
import { Box, Grid, Flex, Image, Heading, Text } from '@chakra-ui/react';

const CreativeDirector: React.FC = () => {
  return (
    // add pt for vertical padding above “Who We Are”
    // bg="rgb(144,174,173)"
    <Box bg="rgb(144,174,173)" pt={{ base: 4, md: 8 }}>
      {/* — “Who we are” */}
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
            Who We Are
          </Heading>
        </Flex>
      </Grid>

      {/* — images & text (images narrower, text wider) */}
      <Grid templateColumns="repeat(12, 1fr)">
        <Box
          gridColumn={['2 / 12', '2 / 12', '2 / 12', '2 / 13', '2 / 13']}
          px={{ base: 4, md: 8 }}
          mb={10}
        >
          <Grid
            templateColumns={{ base: '1fr', md: '1fr 2fr 1fr 2fr' }}
            columnGap={6}
            rowGap={{ base: 6, md: 0 }}
            alignItems="start"
          >
            {/* First Image */}
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3"
              alt="Living room sofa"
              w="100%"
              h="250px"
              objectFit="cover"
              boxShadow="lg"
            />

            {/* First Text Block */}
            <Box>
              <Heading as="h2" size="md" mb={2}>
                Hester Grodde
              </Heading>
              <Text mb={2}>
                Perfect for modern tropical spaces and baroque-inspired interiors.
              </Text>
            </Box>

            {/* Second Image */}
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3"
              alt="Living room sofa"
              w="100%"
              h="250px"
              objectFit="cover"
              boxShadow="lg"
            />

            {/* Second Text Block */}
            <Box>
              <Heading as="h2" size="md" mb={2}>
                Living Room Sofa
              </Heading>
              <Text mb={2}>
                Perfect for modern tropical spaces and baroque-inspired interiors.
              </Text>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default CreativeDirector;
