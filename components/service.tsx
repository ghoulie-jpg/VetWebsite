import React from 'react';
import { Grid, Flex, Heading, Button, Box, Image } from '@chakra-ui/react';
import Services_Description from './services_accordion';

const Service: React.FC = () => {
  return (
    <Box position="relative"       backgroundColor="black"
    >
      {/* full-height red sidebar containing the image */}
      <Box
        position="absolute"
        top="0"
        bottom="0"
        left="0"
        bg="red.500"
        p={2}
        borderRadius="0 0 0 0"
        display={['none', 'none', 'none', 'block', 'block']}
      >
        <Image
          w={['0%', '0%', '0%', '40%', '60%']}
          maxW="500px"
          h="100%"
          objectFit="cover"
          src="/orangecat.jpg"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        />
      </Box>

      <Grid
        backgroundColor="rgb(144,174,173)"
        templateColumns="repeat(12, 1fr)"
        templateRows="repeat(3, 1fr)"
      >
        <Flex
          flexDirection="column"
          flexWrap="nowrap"
          alignItems="center"
          maxW="850px"
          color="black"
          paddingY="88px"
          gridColumn={['2 / 12', '2 / 12', '2 / 12', '7 / 13', '7 / 13']}
          gridRow="1 / 4"
        >
          <Heading
            as="h3"
            textTransform="uppercase"
            fontSize={['3xl', '3xl', '5xl', '5xl', '5xl']}
            fontWeight="extrabold"
            mb="8px"
            alignSelf="flex-start"
          >
            Our Services
          </Heading>

          <Heading
            as="h4"
            fontSize={['lg', 'lg', 'xl', 'xl', 'xl']}
            fontWeight="normal"
            mb="20px"
            alignSelf="flex-start"
          >
            We Will Create Modern And First Class Interior.
          </Heading>

          <Box
            alignSelf="flex-start"
            w="100%"
            maxW="600px"
            mr={{ base: 0, md: 8, lg: 16 }}
          >
            <Services_Description />
          </Box>

          <Button
            alignSelf="flex-start"
            backgroundColor="#fff"
            color="blue.500"
            width="fit-content"
            mt={4}
          >
            Contact 
          </Button>
        </Flex>
      </Grid>
    </Box>
  );
};

export default Service;
