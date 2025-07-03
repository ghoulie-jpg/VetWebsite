import React from 'react';
import {
  Box,
  Grid,
  Flex,
  Image,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';

const AboutUs: React.FC = () => {
  return (
    <Box>
      <Container maxW="7xl" px={{ base: 0, md: 0 }}>
        {/* — "Who we are" */}
        <Grid templateColumns="repeat(12, 1fr)">
          <Flex gridColumn="1 / 13" flexDirection="column">
            <Heading
              as="h3"
              fontSize={['3xl', '3xl', '5xl', '5xl', '5xl']}
              fontWeight="medium"
              mt="20px"
              mb="20px"
              lineHeight="1.2"
              color="black.500"
            >
              About Us
            </Heading>
          </Flex>
        </Grid>

        {/* — images & text (stacked vertically) */}
        <Grid templateColumns="repeat(12, 1fr)">
          <Box gridColumn="1 / 13">
            {/* First section: Image and Text */}
            <Flex
              direction={{ base: 'column', md: 'row' }}
              gap={{ base: 6, md: 0 }}
              alignItems="start"
              mb={10}
            >
              <Image
                src="About_us_hester.jpg"
                alt="Hester Grodde"
                w="350px"
                h="350px"
                objectFit="cover"
                boxShadow="lg"
                flexShrink={0}
              />

              <Box pl={{ base: 0, md: 4 }}>
                <Heading as="h2" size="2xl" mb={2}>
                  Hester Grodde
                </Heading>
                <Text mb={2} fontSize="xl" color="black">
                  Hester obtained her veterinary degree at the Ontario
                  Veterinary College. She began her career in 1996 in a small
                  mixed animal practice in the Ottawa Valley then spent a year
                  in New Zealand serving farmers and the rural community of
                  Morrinsville. She moved back to Canada as she has already put
                  down roots in the Smiths Falls area. She worked for the next
                  26 years serving the communities of Smiths Falls and
                  Merrickville where she raised her family. She continues to
                  farm and enjoys growing, raising and hunting her own food. Her
                  passion for healthy living through diet and lifestyle comes
                  through in her passion to do the same for her patients.
                </Text>
              </Box>
            </Flex>

            {/* Second section: Image and Text */}
            <Flex
              direction={{ base: 'column', md: 'row' }}
              gap={{ base: 6, md: 0 }}
              alignItems="start"
            >
              <Image
                src="newclutch.png"
                alt="Tiffany"
                w="350px"
                h="350px"
                objectFit="cover"
                boxShadow="lg"
                flexShrink={0}
              />

              <Box pl={{ base: 0, md: 4 }}>
                <Heading as="h2" size="2xl" mb={2}>
                  Tiffany McCann
                </Heading>
                <Text mb={2} fontSize="xl" color="black">
                  Tiffany graduated from St Lawrence College in 2009 as a
                  Registered Veterinary Technician. She and Dr. Grodde have
                  worked together for 10 years in the Merrickville area. Tiffany
                  is delighted to join Dr. Grodde and the Montague Mobile
                  Veterinary Services. She is looking forward to being part of a
                  compassionate practice that emphasizes lasting health for
                  patients and also meeting the goals and expectations of their
                  clients. She has a passion for anaesthesia and pain
                  management. She is also looking forward to becoming a breeder
                  of Chesapeake Bay Retrievers with her first litter in the
                  works! Her spare time in the last few years has been dedicated
                  to training and showing her two Chessies Calvin and Clutch to
                  the Canadian Grand Champion level. She lives with her husband,
                  Tyler, and their son Declan, and their pets Waylon, Pyper,
                  Calvin, Clutch and a flock of heritage hens.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
