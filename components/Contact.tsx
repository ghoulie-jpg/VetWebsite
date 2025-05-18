'use client'
import React from 'react';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { MdPhone } from 'react-icons/md';
import { Icon } from '@chakra-ui/react';
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

export default function Contact() {
  return (
    <Box bg="white" pt={{ base: 4, md: 8 }}>
      {/* "Contact Us" heading with same grid structure */}
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
            mb="18px"
          >
            Contact Us
          </Heading>
        </Flex>
      </Grid>

      {/* Separate grid for the "For Existing Clients" message that spans full width */}
      <Grid templateColumns="repeat(12, 1fr)" mb={6}>
        <Box
          gridColumn={['2 / -1', '2 / -1', '2 / -1', '2 / -1', '2 / -1']} /* Extends to the full width of the grid */
          px={{ base: 4, md: 8 }}
        >
          <Heading
            as="h4"
            fontSize={['lg', 'lg', 'xl', 'xl', 'xl']}
            fontWeight="normal"
            mb={4}
          >
            For Existing Clients, please leave your message and we will do our best to respond within 3-5 business days!
          </Heading>
        </Box>
      </Grid>

      {/* Form section using the same grid structure */}
      <Grid templateColumns="repeat(12, 1fr)">
        <Box
          gridColumn={['2 / 12', '2 / 12', '2 / 12', '2 / 13', '2 / 13']}
          px={{ base: 4, md: 8 }}
          mb={10}
        >
          {/* Form container */}
          <Box 
            bg="white" 
            borderRadius="0" 
            width="700px"
            border="1px solid rgba(0, 0, 0, 0.1)" 
            boxShadow="0px 5px 15px rgba(0, 0, 0, 0.2)"
          > 
            <Box m={{ base: 4, md: 8, lg: 10 }} color="#0B0E3F">
              <Box display="flex" flexDirection="column" gap={5} alignItems="flex-start">
                <FormControl id="name" width="100%">
                  <FormLabel fontSize="lg">Your Name</FormLabel>
                  <Input 
                    type="text" 
                    size="lg"
                    borderRadius="0" 
                    borderColor="#E0E1E7" 
                    placeholder="Your name" 
                    height="60px"
                    width="100%"
                  />
                </FormControl>
                
                <FormControl id="email" width="100%">
                  <FormLabel fontSize="lg">Your Email</FormLabel>
                  <Input 
                    type="text" 
                    size="lg"
                    borderRadius="0" 
                    borderColor="#E0E1E7" 
                    placeholder="Your email" 
                    height="60px"
                    width="100%"
                  />
                </FormControl>
                
                <FormControl id="message" width="100%">
                  <FormLabel fontSize="lg">What can we help you with today?</FormLabel>
                  <Textarea
                    borderColor="gray.300"
                    borderRadius="5"
                    _hover={{
                      borderRadius: '0',
                    }}
                    placeholder="message"
                    height="200px"
                    fontSize="lg"
                    width="100%"
                  />
                </FormControl>
                
                <FormControl id="submit" width="100%">
                  <Button 
                    variant="solid" 
                    bg="#0D74FF" 
                    color="white"
                    borderRadius="0"
                    _hover={{ bg: "#1C6FEB" }}
                    size="lg"
                    height="60px"
                    width="100%"
                    fontSize="lg"
                  >
                    Submit
                  </Button>
                </FormControl>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}