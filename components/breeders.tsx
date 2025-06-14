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

export default function Breeders() {
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
  Breeders Support
</Heading>

          {/* Container for text box and image side by side */}
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            gap={0}
            alignItems="flex-start"
            mt = {6}
          >

             <Box flex="0 0 auto" m={0} p={0}   mr={6} display="inline-block">
              <Image
                src="dogs.png"
                alt="Contact us image"
                width="auto"
                height = "400px"    
                objectFit="cover"
                borderRadius="0px"
                boxShadow="0px 5px 15px rgba(0, 0, 0, 0.2)"
                m={0}
                p={0}
              />
            </Box>


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
                We welcome breeders in our practice. Both Tiffany and Hester have experience in breeding, whelping and raising puppies. 

                <br/>
                <br/>

                In home puppy exams and in first vaccinations can alleviate the stress of transporting a litter to the vet clinic. 

                <br/>
                <br/>

                We will do our best to meet the individual needs of our breeders. 
              </Text>
            </Box>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
}