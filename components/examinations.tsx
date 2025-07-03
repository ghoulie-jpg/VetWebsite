'use client';
import React from 'react';
import { Flex, Box, Heading, Text, Image, Grid } from '@chakra-ui/react';

export default function Examinations() {
  return (
    <Box bg="white">
      {/* Main content section using single grid structure */}
      <Grid templateColumns="repeat(12, 1fr)">
        <Box
          gridColumn={['2 / 12', '2 / 12', '2 / 12', '2 / 13', '2 / 13']}
          py={12}
          //   px={{ base: 4, md: 8 }}
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
            Examinations: Routine Care,
            <br />
            Disease Prevention and Treatment
          </Heading>

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
                Routine health exams including vaccination and parasite
                prevention or treatment are part of an effective strategy to
                keep your pet healthy.
                <br />
                <br />
                When possible we enourage clients to consider the role of
                nutrition, exercise and lifestyle factors play in the health of
                their pet.
                <br />
                <br />
                We will employ both conventional and alternative strategies as
                directed by our clients to keep our patients or return our
                patients to health.
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
                src="Examinations.png"
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
