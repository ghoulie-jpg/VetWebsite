// src/components/Service.tsx
import React from 'react';
import { Grid, Flex, Heading, Text, Button, Box } from '@chakra-ui/react';
import Services_Description from './services_accordion';

const Service: React.FC = () => {
  return (
    <Box position="relative" backgroundColor="black">
      <Grid
        backgroundColor="#FBE9D0"
        templateColumns="repeat(12, 1fr)"
        templateRows="repeat(3, 1fr)"
      >
        {/* — Services accordion on the left (6 cols wide) */}
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          gridColumn={['2 / 12', '2 / 12', '2 / 12', '2 / 8', '2 / 8']}
          gridRow="1 / 4"
          px={{ base: 4, md: 8 }}
          py="88px"
          color="black"
        >
          <Heading
            as="h3"
            textTransform="uppercase"
            fontSize={['3xl', '3xl', '5xl', '5xl', '5xl']}
            fontWeight="extrabold"
            mb="8px"
          >
            Our Services
          </Heading>

          <Heading
            as="h4"
            fontSize={['lg', 'lg', 'xl', 'xl', 'xl']}
            fontWeight="normal"
            mb="20px"
          >
            We offer the following services for dogs and cats:
          </Heading>

          <Box w="100%" maxW="700px" mb={4}>
            <Services_Description />
          </Box>

          <Button backgroundColor="#fff" color="blue.500">
            Contact
          </Button>
        </Flex>

        {/* — Static text on the right */}
        <Flex
          flexDirection="column"
          gridColumn={['2 / 12', '2 / 12', '2 / 12', '8 / 13', '8 / 13']}
          gridRow="1 / 4"
          px={{ base: 4, md: 8 }}
          py="88px"
          color="black"
        >
          <Heading as="h3" size="lg" mb={4}>
            We are a Telemedicine Clinic
          </Heading>
          <Text mb={4}>
            We offer video consultations as well as video appointments where you can show your pet.
          </Text>

          <Heading as="h3" size="lg" mb={4}>
            House calls
          </Heading>
          <Text mb={4}>
            We can also do house calls for an extra price if you are located in the Perth-BrockVille area. 
          </Text>

          <Heading as="h3" size="lg" mb={4}>
            Pricing
          </Heading>
          <Text mb={4}>
            After you request an apointment, we will get back to you with a tentative price.
            
            If you have multiple animals, we also may also offer to charge by the hour instead of per animal seen. 
          </Text>

        </Flex>
      </Grid>
    </Box>
  );
};

export default Service;
