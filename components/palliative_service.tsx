'use client';

import React from 'react';
import { Image, Flex, Box, Heading, Text, Grid } from '@chakra-ui/react';

export default function PalliativeService(): JSX.Element {
  const images = ['sweater_dog_rotated.png', 'winter_dog.png'];

  return (
    <Box py={12}>
      <Grid templateColumns="repeat(12, 1fr)">
        <Box gridColumn={['2 / 12', '2 / 12', '2 / 12', '2 / 12', '2 / 12']}>
          {/* Heading */}
          <Heading
            as="h3"
            fontSize={['2xl', '5xl']}
            fontWeight="medium"
            mb="18px"
            lineHeight="1.2"
            color="black"
          >
            Palliative and End of Life Care
          </Heading>

          {/* Text Content */}
          <Box mb={6}>
            <Text
              fontSize={['lg', 'xl']}
              fontWeight="normal"
              mb="18px"
              color="black"
              lineHeight="1.6"
            >
              We can help you with end of life decisions and care for your pet.
              Having support and guidance when choosing the right time to say
              goodbye can help make this difficult time a little easier.
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

          {/* Images Container */}
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            gap={6}
            alignItems="flex-start"
            mt={6}
          >
            {images.map((src) => (
              <Box
                key={src}
                flex="0 0 auto"
                h={{ base: '200px', md: '300px' }}
                w="auto"
                overflow="hidden"
              >
                <Image
                  src={src}
                  alt="Palliative care pet image"
                  h="100%"
                  w="auto"
                  objectFit="contain"
                  borderRadius="0px"
                  boxShadow="0px 5px 15px rgba(0, 0, 0, 0.2)"
                />
              </Box>
            ))}
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
}
