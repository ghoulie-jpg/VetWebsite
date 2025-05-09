import React from 'react'
import { Box, Grid, Flex, Image, Heading, Text } from '@chakra-ui/react'

const OurProject: React.FC = () => {
  return (
    <Box pt={{ base: 4, md: 8 }}>
      {/* — “About Our Clinic” heading, left-aligned in cols 2–8 */}
      <Grid templateColumns="repeat(12, 1fr)" mb={6}>
        <Flex
          gridColumn={['2 / 12', '2 / 12', '2 / 12', '2 / 8', '2 / 8']}
          flexDirection="column"
          px={{ base: 4, md: 8 }}
        >
          <Heading
            as="h3"
            textTransform="uppercase"
            fontSize={['3xl', '3xl', '5xl', '5xl', '5xl']}
            fontWeight="extrabold"
            m={7}
          >About Our Clinic
          </Heading>
        </Flex>
      </Grid>

      {/* — content grid, now spanning all the way to the right */}
      <Grid templateColumns="repeat(12, 1fr)">
        <Box
          gridColumn={['2 / 12', '2 / 12', '2 / 12', '2 / 13', '2 / 13']}
          px={{ base: 4, md: 8 }}
          mb={10}
        >
          <Grid
            templateColumns={{ base: '1fr', md: 'auto 1fr' }}
            columnGap={6}
            rowGap={{ base: 6, md: 0 }}
            alignItems="flex-start"
          >
            {/* Left: fixed-width image */}
            <Image
              src="/grid/1.png"
              alt="Project screenshot"
              w={{ base: '100%', md: '400px' }}
              h="400px"
              objectFit="cover"
              boxShadow="md"
            />

            {/* Right: text now fills all the way to the page’s right edge */}
            <Box>

            <Heading as="h3" size="xl" textAlign="left">
                Our Approach
              </Heading>


              <Text fontSize="16px" textAlign="left" mb={4}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
          
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Box>
  )
}

export default OurProject
