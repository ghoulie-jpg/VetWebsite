import React from 'react'
import { Flex, Grid, Heading } from '@chakra-ui/react'

const Header: React.FC = () => {
  return (
    <Grid
    width="100vw"
    backgroundImage="url(/cat.jpg)"
    backgroundSize="cover"
    height={['80vh', '80vh', '80vh', '90vh']}
    templateRows="1fr 1fr 1fr"
    >
      <Flex
        flexDirection="column"
        gridRow="3 / 3"
        paddingX={['1.5em', '1.5em', '1.5em', '15%']}
      >
        <Heading
  fontSize={['4xl', '5xl', '6xl', '6xl', '6xl']}
  fontWeight="400"
  color="white"
  bg="rgb(36,72,85)"
  width="fit-content"
  px={['4px', '12px', '12px', '16px', '24px']}
  py={['8px', '8px', '16px', '16px', '24px']}
  lineHeight="1.3"   // keep a bit of vertical breathing-room
  mb="6"              // gap before the white pill
>
  Montague&nbsp;Mobile<br />Veterinary&nbsp;Services
</Heading>

<Heading
  as="h3"
  fontSize={['lg', 'lg', '2xl', '2xl', '2xl']}
  textTransform="uppercase"
  color="blue.500"
  bg="white"
  width="fit-content"
  px={['24px', '24px', '30px', '30px', '30px']}
  py={['8px', '8px', '14px', '14px', '14px']}
  fontWeight="400"
>
  Mobile & Travelling
</Heading>
      </Flex>
    </Grid>
  )
}

export default Header
