import React from 'react'

import { Heading, Text } from '@chakra-ui/react'

const Logo: React.FC = () => {
  return (
    <>
      {/* <Heading as="h1" size="lg" color="rgba(36,72,85, 1)" textTransform="uppercase"> */}
        <Heading as="h1" size="lg" color="black" textTransform="uppercase"> 

        <Text display="inline" fontWeight="extrabold">
          Montague Mobile
        </Text>{' '}
        <Text display="inline" fontWeight="medium">
          Veterinary Services
        </Text>
      </Heading>
    </>
  )
}

export default Logo
