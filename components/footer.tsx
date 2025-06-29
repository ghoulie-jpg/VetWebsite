import React from 'react';
import { Text, Flex, Grid, Box, Heading } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Grid
      as="footer"
      templateColumns="repeat(6, 1fr)"
      mt="16"
      bg="#023020"
      minHeight="350px" // Set minimum height
    >
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '1 / 3', '1 / 3']}
        pl={['8', '8', '8', '24', '24']}
        pt={['6', '6', '6', '8', '8']} // Added padding-top
      >
        <Box color="white">
          <Heading as="h1" size="5xl" color="white" textTransform="uppercase">
            <Text display="block" fontWeight="bold">
              Montague
            </Text>
            <Text display="block" fontWeight="bold">
              Mobile
            </Text>
            <Text display="block" fontWeight="bold">
              Veterinary
            </Text>
            <Text display="block" fontWeight="bold">
              Services
            </Text>
          </Heading>
        </Box>
        {/* <Text fontSize="sm" mt="4" textAlign="left" lineHeight="22px">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Text> */}
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mt="8"
        >
          {/* <Icon as={FaFacebookF} size="22px" color="orange.500" mr="12px" />
          <Icon as={FaTwitter} size="22px" color="orange.500" mr="12px" />
          <Box as={FaGoogle} size="22px" color="orange.500" mr="12px" />
          <Box as={FaInstagram} size="22px" color="orange.500" mr="12px" />
          <Box as={FaYoutube} size="22px" color="orange.500" /> */}
        </Flex>
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '3 / 5', '3 / 5']} // Changed from 3/4 to 3/5
        paddingX="8"
        mt={['12', '12', '12', '0', '0']}
        pt={['6', '6', '6', '16', '16']} // Added padding-top
      >
        {/* <Heading color="white" fontWeight="bold" mb="20px" fontSize="30px">
        Contact Us
      </Heading> */}

        <Flex alignItems="center" mb="6px" fontSize="20px">
          <Text color="white" mr="8px" fontSize="20px">
            📍
          </Text>
          <Text color="white">SmithsFalls, Ontario</Text>
        </Flex>

        <Text color="white" mb="10px" fontSize="20px">
          Hours: Tues, Wed, Thurs 9:00 am -3:00 pm{' '}
        </Text>
      </Flex>
    </Grid>
  );
};

export default Footer;
