import React from 'react'

import { Heading, Text } from '@chakra-ui/react'

const Logo: React.FC = () => {
  return (
    <>
      {/* <Heading as="h1" size="lg" color="rgba(36,72,85, 1)" textTransform="uppercase"> */}
        <Heading as="h1" size="lg" color="#023020" textTransform="uppercase"> 

        <Text display="inline" fontWeight="medium">
          Montague Mobile
        </Text>{' '}
        <Text display="inline" fontWeight="extrabold">
          Veterinary Services
        </Text>
      </Heading>
    </>
  )
}

export default Logo
