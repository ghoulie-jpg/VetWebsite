import React from 'react';
import { Text, Flex, Grid, Box, Heading } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Grid
      as="footer"
      templateColumns="repeat(12, 1fr)"
      mt="16"
      bg="dark_green.500"
      minHeight="350px"
      py={{ base: 8, md: 12 }}
      px={{ base: 4, md: 8 }}
    >
      {/* Company Name Section */}
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        gridColumn={['1 / 13', '1 / 13', '1 / 7', '1 / 6']}
        mb={{ base: 8, md: 0 }}
      >
        <Box color="white">
          <Heading
            as="h2"
            fontSize={['2xl', '3xl', '4xl', '5xl']}
            color="white"
            textTransform="uppercase"
            lineHeight="1.1"
            fontWeight="bold"
            fontFamily="heading"
          >
            <Text display="block">Montague</Text>
            <Text display="block">Mobile</Text>
            <Text display="block">Veterinary</Text>
            <Text display="block">Services</Text>
          </Heading>
        </Box>
      </Flex>

      {/* Contact Information Section */}
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        gridColumn={['1 / 13', '1 / 13', '8 / 13', '8 / 12']}
      >
        {/* Location */}
        <Box mb={6}>
          <Text
            color="white"
            fontSize={['md', 'lg', 'xl']}
            fontWeight="medium"
            mb={2}
            fontFamily="heading"
          >
            Location
          </Text>
          <Text
            color="white"
            fontSize={['sm', 'md', 'lg']}
            fontWeight="normal"
            opacity={0.9}
          >
            Smiths Falls, Ontario
          </Text>
        </Box>

        {/* Hours */}
        <Box>
          <Text
            color="white"
            fontSize={['md', 'lg', 'xl']}
            fontWeight="medium"
            mb={2}
            fontFamily="heading"
          >
            Office Hours
          </Text>
          <Text
            color="white"
            fontSize={['sm', 'md', 'lg']}
            fontWeight="normal"
            opacity={0.9}
            lineHeight="1.4"
          >
            Tuesday, Wednesday, Thursday
            <br />
            9:00 AM - 3:00 PM
          </Text>
        </Box>
      </Flex>
    </Grid>
  );
};

export default Footer;
