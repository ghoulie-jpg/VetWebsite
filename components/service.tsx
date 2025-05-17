// src/components/Service.tsx
import React from 'react';
import { Grid, Flex, Heading, Text, Button, Box, Icon, Image } from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';
import { Accordion, Span } from "@chakra-ui/react";

const Service: React.FC = () => {
  return (
    <Box position="relative" backgroundColor="black">
      <Grid
        backgroundColor="#FBE9D0"
        templateColumns="repeat(12, 1fr)"
        templateRows="auto 1fr"
        gap={0}
      >
        {/* Full-width heading section that spans across both columns */}
        <Box
          gridColumn={['2 / 12', '2 / 12', '2 / 12', '2 / 13', '2 / 13']}
          px={{ base: 4, md: 8 }}
          pt="88px"
          pb={0} // No bottom padding to eliminate the gap
          color="black"
        >
          <Heading
            as="h3"
            textTransform="uppercase"
            fontSize={['3xl', '3xl', '5xl', '5xl', '5xl']}
            fontWeight="extrabold"
            mb="15px"
          >
            Our Services
          </Heading>

          <Heading
            as="h4"
            fontSize={['lg', 'lg', 'xl', 'xl', 'xl']}
            fontWeight="normal"
            mb={0} // Remove bottom margin to eliminate the gap
          >
            Serving the Ottawa-Brockville corridor with a focus in and around the communities of Smith Falls, MerrickVille, and Perth.
          </Heading>
        </Box>

        {/* Content row with no gap at the top */}
        <Grid 
          templateColumns="repeat(12, 1fr)"
          gridColumn="1 / 13"
          gridRow="2 / 3"
          gap={0}
        >
          {/* — Services accordion on the left (6 cols wide) */}
          <Flex
            flexDirection="column"
            alignItems="flex-start"
            gridColumn={['2 / 12', '2 / 12', '2 / 12', '2 / 8', '2 / 8']}
            px={{ base: 4, md: 8 }}
            pt={4} // Minimal top padding to provide just enough breathing room
            pb={{ base: 8, md: 12 }}
            color="black"
          >
            {/* Services accordion buttons */}
            <Box width="100%" maxW="700px">
              <Box width="100%">
                <Button 
                  colorScheme="blue" 
                  borderRadius="0" 
                  size="lg"
                  h={16} 
                  px={0}
                  w="100%"
                  maxW="100%"
                  bg="#111"
                  _hover={{ bg: "#333" }}
                >
                  <Flex w="100%" justifyContent="space-between" alignItems="center" px={6}>
                    <Text fontSize="xl" fontWeight="medium" color="white">Telemedicine, In Home and Virtual Visits</Text>
                    <Icon as={FiArrowRight} boxSize={7} color="white" />
                  </Flex>
                </Button>
              </Box>

              <Box mt={3} width="100%">
                <Button 
                  colorScheme="blue" 
                  borderRadius="0" 
                  size="lg"
                  h={16}
                  px={0}
                  w="100%"
                  maxW="100%"
                  bg="#111"
                  _hover={{ bg: "#333" }}
                >
                  <Flex w="100%" justifyContent="space-between" alignItems="center" px={6}>
                    <Text fontSize="xl" fontWeight="medium" color="white">Routine Health Exams</Text>
                    <Icon as={FiArrowRight} boxSize={7} color="white" />
                  </Flex>
                </Button>
              </Box>

              <Box mt={3} width="100%">
                <Button 
                  colorScheme="blue" 
                  borderRadius="0" 
                  size="lg"
                  h={16}
                  px={0}
                  w="100%"
                  maxW="100%"
                  bg="#111"
                  _hover={{ bg: "#333" }}
                >
                  <Flex w="100%" justifyContent="space-between" alignItems="center" px={6}>
                    <Text fontSize="xl" fontWeight="medium" color="white">Treatment and Prevention of Disease</Text>
                    <Icon as={FiArrowRight} boxSize={7} color="white" />
                  </Flex>
                </Button>
              </Box>

              <Box mt={3} width="100%">
                <Button 
                  colorScheme="blue" 
                  borderRadius="0" 
                  size="lg"
                  h={16}
                  px={0}
                  w="100%"
                  maxW="100%"
                  bg="#111"
                  _hover={{ bg: "#333" }}
                >
                  <Flex w="100%" justifyContent="space-between" alignItems="center" px={6}>
                    <Text fontSize="xl" fontWeight="medium" color="white">Breeders Support</Text>
                    <Icon as={FiArrowRight} boxSize={7} color="white" />
                  </Flex>
                </Button>
              </Box>

              <Box mt={3} width="100%">
                <Button 
                  colorScheme="blue" 
                  borderRadius="0" 
                  size="lg"
                  h={16}
                  px={0}
                  w="100%"
                  maxW="100%"
                  bg="#111"
                  _hover={{ bg: "#333" }}
                >
                  <Flex w="100%" justifyContent="space-between" alignItems="center" px={6}>
                    <Text fontSize="xl" fontWeight="medium" color="white">Referrals</Text>
                    <Icon as={FiArrowRight} boxSize={7} color="white" />
                  </Flex>
                </Button>
              </Box>

              <Box mt={3} width="100%">
                <Button 
                  colorScheme="blue" 
                  borderRadius="0" 
                  size="lg"
                  h={16}
                  px={0}
                  w="100%"
                  maxW="100%"
                  bg="#111"
                  _hover={{ bg: "#333" }}
                >
                  <Flex w="100%" justifyContent="space-between" alignItems="center" px={6}>
                    <Text fontSize="xl" fontWeight="medium" color="white">Palliative and End of Life Care</Text>
                    <Icon as={FiArrowRight} boxSize={7} color="white" />
                  </Flex>
                </Button>
              </Box>
            </Box>
          </Flex>

          {/* — Static text on the right */}
          <Flex
            flexDirection="column"
            gridColumn={['2 / 12', '2 / 12', '2 / 12', '8 / 13', '8 / 13']}
            px={{ base: 4, md: 8 }}
            pt={4} // Minimal top padding to match the left column
            pb={{ base: 8, md: 12 }}
            color="black"
          >
            <Image
                          src="DSC_0441-Edit.jpg"
                          // alt="Living room sofa"
                          w="100%"
                          h="100%"
                          objectFit="cover"
                          boxShadow="lg"
                        />

          </Flex>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Service;