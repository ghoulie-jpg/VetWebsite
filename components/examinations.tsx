'use client';
import React from 'react';
import { Flex, Box, Heading, Text, Image, Grid } from '@chakra-ui/react';

export default function Examinations() {
  return (
    <Box bg="white" pt="175px">
      {/* Main content section using single grid structure */}
      <Grid templateColumns="repeat(12, 1fr)">
        <Box
          gridColumn={['2 / 12', '2 / 12', '2 / 12', '2 / 13', '2 / 13']}
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

          {/* Container for text box and image side by side */}
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            gap={0}
            alignItems="flex-start"
            mt={6}
          >
            <Box flex="0 0 auto" m={0} p={0} mr={6} display="inline-block">
              <Image
                src="Examinations.png"
                alt="Contact us image"
                width="auto"
                height="400px"
                objectFit="cover"
                borderRadius="0px"
                boxShadow="0px 5px 15px rgba(0, 0, 0, 0.2)"
                m={0}
                p={0}
              />
            </Box>

            {/* Text box container */}
            <Box
              bg="white"
              borderRadius="0"
              width={{ base: '100%', lg: '700px' }}
              flex="0 0 auto"
              m={0}
              p={0}
            >
              <Text
                fontSize={['3xl', '3xl', '5xl', '5xl', 'xl']}
                fontWeight="normal"
                mb="18px"
              >
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
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
}
