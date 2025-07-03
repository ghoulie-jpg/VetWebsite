'use client';
import React from 'react';
import { Image, Flex, Box, Heading, Text, Grid } from '@chakra-ui/react';

export default function inHome() {
  return (
    <Box bg="white">
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
            mb="20px"
          >
            In Home, Telemedicine and Virtual Visits
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
                src="Car_notposed.png"
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
                We will travel to your house for routine health and vaccination
                appointments.
                <br />
                <br />
                Dignostics can be done right in your home including blood urine
                and fecal testing. Xrays or Ultrasound are available at a clinic
                we are partnered with in the area.
                <br />
                <br />
                Treatments including simple surgical procedures can be done when
                appropriate in the home. Sometimes a homevisit is not required
                to resolve simple issues or to relieve a concerned pet parent. A
                phone conversation or virtual visit using a mobile phone may be
                sufficient saving and money + relieving stress.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
}
