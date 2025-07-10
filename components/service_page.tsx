'use client';
import React from 'react';
import { Image, Flex, Box, Heading, Text, Grid } from '@chakra-ui/react';

interface ServicePageProps {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt?: string;
}

export default function ServicePage({
  title,
  content,
  imageSrc,
  imageAlt = 'Service image',
}: ServicePageProps): JSX.Element {
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
          >
            {title}
          </Heading>

          {/* Container for text and image side by side */}
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            gap={6}
            alignItems="flex-start"
            mt={6}
          >
            {/* Image - appears on left on desktop, below text on mobile */}
            <Box
              flex="0 0 auto"
              order={{ base: 2, lg: 1 }}
              mr={{ base: 0, lg: 6 }}
              mb={{ base: 4, lg: 0 }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                width="400px"
                objectFit="cover"
                borderRadius="0px"
                boxShadow="0px 5px 15px rgba(0, 0, 0, 0.2)"
              />
            </Box>

            {/* Text content - appears on right on desktop, above image on mobile */}
            <Box flex="1" order={{ base: 1, lg: 2 }}>
              <Text
                fontSize={['lg', 'xl']}
                fontWeight="normal"
                mb="18px"
                color="black"
                lineHeight="1.6"
                whiteSpace="pre-line"
              >
                {content}
              </Text>
            </Box>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
}
