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
              <Text fontSize={['xl']} fontWeight="normal" mb="18px">
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
                src="Oscar_cropped.png"
                alt="Oscar - Contact us image"
                width="auto"
                height="400px"
                objectFit="cover"
                borderRadius="0px"
                boxShadow="0px 5px 15px rgba(0, 0, 0, 0.2)"
                m={0}
                p={0}
                placeholder="blur"
                // fill
              />
            </Box>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
}
