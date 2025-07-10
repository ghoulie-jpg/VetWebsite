'use client';
import React from 'react';
import { Flex, Box, Heading, Text, Grid } from '@chakra-ui/react';

export default function ClientResources() {
  return (
    <Box bg="white">
      {/* Main content section using single grid structure */}
      <Grid templateColumns="repeat(12, 1fr)">
        <Box
          py={12}
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
            Client Resources
          </Heading>

          {/* Container for text box and image side by side */}
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            gap={0}
            alignItems="flex-start"
            mt={6}
          >
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
                fontSize={['xl']}
                fontWeight="normal"
                mb="18px"
                color="black"
              >
                Nothing to see here yet!
              </Text>
            </Box>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
}
