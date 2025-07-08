'use client';

import React from 'react';
import { Image, Flex, Box, Heading, Text, Grid } from '@chakra-ui/react';

export default function PalliativeService(): JSX.Element {
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
            mb="20px"
          >
            Palliative and End of Life Care
          </Heading>

          {/* Text content */}
          <Box
            bg="white"
            borderRadius="0"
            width="100%"
            m={0}
            p={0}
            mt={6}
            mb={8}
          >
            <Text fontSize={['xl']} fontWeight="normal" mb="18px" color="black">
              We can help you with end of life decisions and care for your
              pet. Having support and guidance when choosing the right time to
              say goodbye can help make this difficult time a little easier.
              <br />
              <br />
              At home this can be peaceful and without the stress of a trip to
              the vet clinic.
              <br />
              <br />
              We will help you with after care if you wish. Ashes can be
              returned in an urn to keep with you or to scatter on their
              favourite walk or under their favourite tree.
            </Text>
          </Box>

          {/* Images container - displayed below the text */}
          <Flex
            direction={{ base: 'column', md: 'row' }}
            gap={6}
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Box flex="0 0 auto">
              <Image
                src="sweater_dog_rotated.png"
                alt="Oscar - Contact us image"
                width="auto"
                height="300px"
                objectFit="cover"
                borderRadius="0px"
                boxShadow="0px 5px 15px rgba(0, 0, 0, 0.2)"
                m={0}
                p={0}
                placeholder="blur"
              />
            </Box>
            <Box flex="0 0 auto">
              <Image
                src="winter_dog.png"
                alt="Oscar - Contact us image"
                width="auto"
                height="300px"
                objectFit="cover"
                borderRadius="0px"
                boxShadow="0px 5px 15px rgba(0, 0, 0, 0.2)"
                m={0}
                p={0}
                placeholder="blur"
              />
            </Box>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
}
