'use client'
import React from 'react';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { MdPhone } from 'react-icons/md';
import { Icon, Image } from '@chakra-ui/react';
import {
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/input"
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  Input,
  InputGroup,
  Textarea,
  Grid,
} from '@chakra-ui/react';
import { MdEmail, MdLocationOn, MdFacebook, MdOutlineEmail } from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

export default function ClientResources() {
  return (
    <Box bg="white" pt="175px">
      {/* Main content section using single grid structure */}
      <Grid templateColumns="repeat(12, 1fr)">
        <Box
          gridColumn={['2 / 12', '2 / 12', '2 / 12', '2 / 13', '2 / 13']}
        //   px={{ base: 4, md: 8 }}
          mb={10}
        >
          {/* Heading */}
<Heading
  as="h3"
  fontSize={['3xl', '3xl', '5xl', '5xl', '5xl']}
  fontWeight="medium"
  mb="18px"
  lineHeight="1.2"
>
Client Resources
</Heading>

          {/* Container for text box and image side by side */}
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            gap={0}
            alignItems="flex-start"
            mt = {6}
          >
            {/* Text box container */}
            <Box 
              bg="white" 
              borderRadius="0" 
              width={{ base: "100%", lg: "700px" }}
              flex="0 0 auto"
              m={0}
              p={0}
            > 
              <Text
                fontSize={['3xl', '3xl', '5xl', '5xl', 'xl']}
                fontWeight="normal"
                mb="18px"
              >
                Nothing to see here yet!

              </Text>
            </Box>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
}