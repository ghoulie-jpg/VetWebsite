// src/components/Service.tsx
import React from 'react';
import { Grid, Flex, Heading, Text, Button, Box, Icon, Image } from '@chakra-ui/react';
import Link from 'next/link';

import { FiArrowRight } from 'react-icons/fi';
import { Accordion, Span } from "@chakra-ui/react";

const Service: React.FC = () => {
  return (
    <Box position="relative" backgroundColor="black">
      <Grid
        backgroundColor = "white"
        templateColumns="repeat(12, 1fr)"
        templateRows="auto 1fr"
        gap={0}
      >
        {/* Full-width heading section that spans across both columns */}
        <Box
          gridColumn="1 / 13"
          pt="88px"
          pb={0}
          color="black"
        >
          <Heading
            as="h3"
            textTransform="uppercase"
            fontSize={['3xl', '3xl', '5xl', '5xl', '5xl']}
            fontWeight="normal"
            mb="15px"
          >
            Services
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
            gridColumn="1 / 8"
            pt={4}
            pb={{ base: 8, md: 12 }}
            color="black"
          >
            {/* Services accordion buttons */}
            <Box width="100%" maxW="700px">
              <Box width="100%">
                  <Button 
                 as="a" 
              href="/inhome"  // Add the URL here
              colorScheme="blue" 
              borderRadius="0" 
              size="lg"
              h={16} 
              px={0}
              w="90%"
              maxW="100%"
              bg="#111"
              _hover={{ bg: "#333" }}
            >
              <Flex w="100%" justifyContent="space-between" alignItems="center" px={6}>
                <Text fontSize="xl" fontWeight="medium" color="white">In Home, Telemedicine and Virtual Visits</Text>
                <Icon as={FiArrowRight} boxSize={7} color="white" />
              </Flex>
            </Button>
              </Box>

              <Box mt={3} width="100%">
                <Button 
                 as="a" 
                  href="/examination" 
                  colorScheme="blue" 
                  borderRadius="0" 
                  size="lg"
                  h={16}
                  px={0}
                  w="90%"
                  maxW="100%"
                  bg="#111"
                  _hover={{ bg: "#333" }}
                >
                <Flex 
  w="100%" 
  justifyContent="space-between" 
  alignItems="center" 
  px={6}
  py={4}  // Added vertical padding
  minHeight="80px"  // Set a minimum height for the button
>
  <Text 
    fontSize="xl" 
    fontWeight="medium" 
    color="white"
    textAlign="left"
  >
    Examinations: Routine Care,
    <br />
    Disease Prevention and Treatment
  </Text>
  <Box display="flex" alignItems="center" alignSelf="stretch">
    <Icon as={FiArrowRight} boxSize={7} color="white" />
  </Box>
</Flex>
                </Button>
              </Box>

              <Box mt={3} width="100%">
                <Button 
                  as="a" 
                  href="/breeders" 
                  colorScheme="blue" 
                  borderRadius="0" 
                  size="lg"
                  h={16}
                  px={0}
                  w="90%"
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
                  w="90%"
                  maxW="100%"
                  bg="#111"
                  _hover={{ bg: "#333" }}
                >
                  <Flex w="100%" justifyContent="space-between" alignItems="center" px={6}>
                    <Text fontSize="xl" fontWeight="medium" color="white">Client Resources</Text>
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
                  w="90%"
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
            gridColumn="8 / 13"
            pt={4}
            pb={{ base: 8, md: 12 }}
            color="black"
          >
            <Image
              src="DSC_0441-Edit.jpg"
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