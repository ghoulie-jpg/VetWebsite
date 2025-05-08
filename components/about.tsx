import React from 'react'
import { Box, Flex, Heading, Text, Image, Grid } from '@chakra-ui/react'
import Button from './button'

const About: React.FC = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" marginY="24" alignItems="center" gap="8"      >
      
      {/* Text on the Left */}
      <Flex
        marginLeft="200px"   // ⬅️ space from edge

        flexDirection="column"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '1 / 4', '1 / 4']}
        alignItems="flex-start"
        paddingX={['8', '8', '8', '16', '16']}
        marginX="auto"
        maxW="850px"
      >
        <Heading
          as="h3"
          textTransform="uppercase"
          fontSize="5xl"
          fontWeight="normal"
          mb="20px"
        >
          About usf
        </Heading>
        <Text fontSize="md" mb="20px" textAlign="left"  // ⬅️ space from edge
>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.

          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <Button>Learn More</Button>
      </Flex>

      {/* Image on the Right */}
      <Box
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '4 / 7', '4 / 7']}
        display="flex"
        justifyContent="flex-end"
        paddingRight="0"
      >
        <Image
  src="person.jpg"
  display={['none', 'none', 'none', 'block', 'block']}
  width="100%"
  maxW="350px"         // ⬅️ smaller max width
  marginRight="200px"   // ⬅️ space from edge
  borderRadius="0"
/>
      </Box>
    </Grid>
  )
}

export default About
