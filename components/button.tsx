import React from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'

const Button: React.FC = ({ children }) => {
  return (
    <ChakraButton
      colorScheme="blue"
      color="white"
      textTransform="uppercase"
      width="fit-content"
      borderRadius="0"  
    >
      {children}
    </ChakraButton>
  )
}

export default Button
