import React from 'react';
import { Text, Flex, Grid, Box, Heading } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Grid
      as="footer"
      templateColumns="repeat(6, 1fr)"
      mt="16"
      bg="dark_green.500"
      minHeight="350px"
    >
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 4', '1 / 4', '1 / 4']} // Give more space
        pl={['8', '8', '8', '16', '20']} // Reduced padding on larger screens
        pt={['6', '6', '6', '8', '8']}
      >
        <Box color="white">
          <Heading 
            as="h1" 
            size={['3xl', '4xl', '4xl', '5xl', '5xl']} // Responsive sizing
            color="white" 
            textTransform="uppercase"
            lineHeight="1.1" // Tighter line height
          >
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
        
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mt="8"
        >
          {/* Social icons commented out */}
        </Flex>
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '4 / 7', '4 / 7', '4 / 7']} // Better spacing
        paddingX="8"
        mt={['12', '12', '12', '0', '0']}
        pt={['6', '6', '6', '16', '16']}
      >
        <Flex alignItems="center" mb="6px" fontSize="20px">
          <Text color="white" mr="8px" fontSize="20px">
            📍
          </Text>
          <Text color="white">SmithsFalls, Ontario</Text>
        </Flex>

        <Text color="white" mb="10px" fontSize="20px">
          Hours: Tues, Wed, Thurs 9:00 am - 3:00 pm
        </Text>
      </Flex>
    </Grid>
  );
};

export default Footer;