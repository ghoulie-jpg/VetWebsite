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
        <Container maxW="80%" px={{ base: 0, md: 0 }}>
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
          <Grid
            templateColumns={{ base: '1fr', lg: 'repeat(12, 1fr)' }}
            gap={8}
          >
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
                  href: '/services/in-home',
                },
                {
                  label:
                    'Examinations: Routine Care,\nDisease Prevention and Treatment',
                  href: '/services/examination',
                },
                {
                  label: 'Breeders Support',
                  href: '/services/breeders',
                },
                {
                  label: 'Client Resources',
                  href: '/services/client_resources',
                },
                {
                  label: 'Palliative and End of Life Care',
                  href: '/services/palliative_care',
                },
              ].map(({ label, href }, i) => (
                <Button
                  as="a"
                  {...({ href } as any)}
                  key={i}
                  colorScheme="blue"
                  borderRadius="0"
                  size="lg"
                  h="auto"
                  py={6}
                  px={0}
                  w="100%"
                  bg="dark_green.500"
                  _hover={{ bg: '#333' }}
                >
                  <Flex
                    w="100%"
                    justifyContent="space-between"
                    alignItems="center"
                    px={6}
                  >
                    <Text
                      fontSize="xl"
                      fontWeight="medium"
                      color="white"
                      whiteSpace="pre-line"
                    >
                      {label}
                    </Text>
                    <Box as="span" color="white" fontSize="50px">
                      →
                    </Box>
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
                src="/steth.png"
                w="100%"
                maxW="100%"
                h="auto"
                objectFit="contain"
                objectPosition="center"
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
