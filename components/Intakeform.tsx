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

export default function Intake_form() {
  return (
    <Box bg="white" pt="175px">
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
            Appointment Request Form
          </Heading>
        </Flex>
      </Grid>

      {/* Separate grid for the "For Existing Clients" message that spans full width */}
      <Grid templateColumns="repeat(12, 1fr)" mb={6}>
        <Box
          gridColumn={['2 / -1', '2 / -1', '2 / -1', '2 / -1', '2 / -1']}
          px={{ base: 4, md: 8 }}
        >
          <Heading
            as="h4"
            fontSize={['lg', 'lg', 'xl', 'xl', 'xl']}
            fontWeight="normal"
            mb={4}
          >
            For new clients, please submit this intake form and we will do our best to respond within 3-5 business days.
          </Heading>
        </Box>
      </Grid>

      {/* Form and Image section using the same grid structure */}
      <Grid templateColumns="repeat(12, 1fr)">
        <Box
          gridColumn={['2 / 12', '2 / 12', '2 / 12', '2 / 13', '2 / 13']}
          px={{ base: 4, md: 8 }}
          mb={10}
        >
          {/* Container for form and image side by side */}
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            gap={6}
            alignItems="flex-start"
          >
            {/* Form container */}
            <Box 
              bg="white" 
              borderRadius="0" 
              width={{ base: "100%", lg: "700px" }}
              border="1px solid rgba(0, 0, 0, 0.1)" 
              boxShadow="0px 5px 15px rgba(0, 0, 0, 0.2)"
              flex="0 0 auto"
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
                      height="60px"
                      width="100%"
                    />
                  </FormControl>
                  
                  <FormControl id="email" width="100%">
                    <FormLabel fontSize="lg">Email</FormLabel>
                    <Input 
                      type="text" 
                      size="lg"
                      borderRadius="0" 
                      borderColor="#E0E1E7" 
                      height="60px"
                      width="100%"
                    />
                  </FormControl>

                   <FormControl id="phoneNumber" width="100%">
                    <FormLabel fontSize="lg">Phone Number</FormLabel>
                    <Input 
                      type="text" 
                      size="lg"
                      borderRadius="0" 
                      borderColor="#E0E1E7" 
                      height="60px"
                      width="100%"
                    />
                  </FormControl>

                  <FormControl id="address" width="100%">
                    <FormLabel fontSize="lg">Address</FormLabel>
                    <Input 
                      type="text" 
                      size="lg"
                      borderRadius="0" 
                      borderColor="#E0E1E7" 
                      height="60px"
                      width="100%"
                    />
                  </FormControl>
                  
                  <FormControl id="message" width="100%">
                    <FormLabel fontSize="lg">What can we help you with?</FormLabel>
                    <Textarea
                      borderColor="gray.300"
                      borderRadius="5"
                      _hover={{
                        borderRadius: '0',
                      }}
                      placeholder="message"
                      height="150px"
                      fontSize="lg"
                      width="100%"
                    />
                  </FormControl>
                  
                <FormControl id="submit" width="100%">
                    <Button 
                    variant="solid" 
                    bg="rgba(36,72,85, 1)"
                    color="white"
                    borderRadius="0"
                    _hover={{ bg: "#1C6FEB" }}
                    size="lg"
                    height="60px"
                    width="200px"
                    fontSize="lg"
                    >
                    Submit
                    </Button>
                </FormControl>


                </Box>
              </Box>
            </Box>

            {/* Image */}
            <Box flex="1" paddingLeft={20}>
              <Image
                src="DSC_2939-Edit.jpg"
                alt="Contact us image"
                width="auto"
                height="500px"
                objectFit="cover"
                borderRadius="0px"
                boxShadow="0px 5px 15px rgba(0, 0, 0, 0.1)"
              />
            </Box>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
}