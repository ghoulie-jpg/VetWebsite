'use client';
import React from 'react';
import { Image, Flex, Box, Heading, Text, Grid } from '@chakra-ui/react';

export default function Breeders() {
  return (
    <Box bg="white">
      {/* Main content section using single grid structure */}
      <Grid templateColumns="repeat(12, 1fr)">
        <Box
          py={12}
          gridColumn={['2 / 12', '2 / 12', '2 / 12', '2 / 13', '2 / 13']}
          mb={10}
        >
          {/* Heading */}
          <Heading
            as="h3"
            fontSize={['3xl', '3xl', '5xl', '5xl', '5xl']}
            fontWeight="medium"
            mb="18px"
            lineHeight="1.2"
          >
            Breeders Support
          </Heading>

          {/* Container for text box and image side by side */}
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            gap={0}
            alignItems="flex-start"
            mt={6}
          >
            {/* Text box container - now first in mobile, second in desktop */}
            <Box
              bg="white"
              borderRadius="0"
              width={{ base: '100%', lg: '700px' }}
              flex="0 0 auto"
              m={0}
              p={0}
              order={{ base: 1, lg: 2 }}
            >
              <Text
                fontSize={['xl']}
                fontWeight="normal"
                mb="18px"
                color="black"
              >
                We welcome breeders in our practice. Both Tiffany and Hester
                have experience in breeding, whelping and raising puppies.
                <br />
                <br />
                In home puppy exams and in first vaccinations can alleviate the
                stress of transporting a litter to the vet clinic.
                <br />
                <br />
                We will do our best to meet the individual needs of our
                breeders.
              </Text>
            </Box>

            {/* Image - now second in mobile, first in desktop */}
            <Box
              flex="0 0 auto"
              m={0}
              p={0}
              mr={{ base: 0, lg: 6 }}
              mb={{ base: 4, lg: 0 }}
              display="inline-block"
              order={{ base: 2, lg: 1 }}
            >
              <Image
                src="breeders.png"
                width="auto"
                height="400px"
                objectFit="cover"
                borderRadius="0px"
                boxShadow="0px 5px 15px rgba(0, 0, 0, 0.2)"
                m={0}
                p={0}
              />
            </Box>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
}
