import React from 'react';
import {
  Grid,
  Flex,
  Heading,
  Text,
  Button,
  Box,
  Icon,
  Image,
  Container,
} from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';

const Service: React.FC = () => {
  return (
    <Box position="relative">
      <Box py={12}>
        <Container maxW="7xl" px={{ base: 0, md: 0 }}>
          {/* Heading */}
          <Heading
            as="h3"
            fontSize={['3xl', '3xl', '5xl']}
            fontWeight="medium"
            mb="32px"
            lineHeight="1.2"
            color="black"
          >
            Services
          </Heading>

          {/* Two-column layout */}
          <Grid templateColumns={{ base: '1fr', lg: 'repeat(12, 1fr)' }} gap={8}>
            {/* Left column: buttons */}
            <Flex
              flexDirection="column"
              alignItems="flex-start"
              gridColumn={{ lg: '1 / 8' }}
              gap={3}
            >
              {[
                {
                  label: 'In Home, Telemedicine and Virtual Visits',
                  href: '/inhome',
                },
                {
                  label: 'Examinations: Routine Care,\nDisease Prevention and Treatment',
                  href: '/examination',
                },
                {
                  label: 'Breeders Support',
                  href: '/breeders',
                },
                {
                  label: 'Client Resources',
                  href: '#',
                },
                 {
                  label: 'Palliative and End of Life Care',
                  href: '#',
                },
              ].map(({ label, href }, i) => (
                <Button
                  as="a"
                  href={href}
                  key={i}
                  colorScheme="blue"
                  borderRadius="0"
                  size="lg"
                  h="auto"
                  py={6}
                  px={0}
                  w="100%"
                  // bg="rgba(36,72,85, 1)"
                  bg = "#023020"
                  _hover={{ bg: "#333" }}
                >
                  <Flex w="100%" justifyContent="space-between" alignItems="center" px={6}>
                    <Text fontSize="xl" fontWeight="medium" color="white" whiteSpace="pre-line">
                      {label}
                    </Text>
                    <Icon as={FiArrowRight} boxSize={7} color="white" />
                  </Flex>
                </Button>
              ))}
            </Flex>

            {/* Right column: image */}
          <Flex
          flexDirection="column"
          gridColumn={{ lg: '8 / 13' }}
          justifyContent="center"
        >
          <Image
            src="DSC_0441-Edit.jpg"
            w="100%"
            h="100%"
            objectFit="cover"
            objectPosition="right center" // or "20% center", etc.
            boxShadow="lg"
          />
        </Flex>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Service;
