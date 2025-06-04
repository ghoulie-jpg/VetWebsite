'use client'
import React, { useState } from 'react';
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    appointment_request: '',
    appointment_type: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyl_68q_7LDD-10U17g1HCAmk3V53S6GNBB2RDl2LthRIo8qLFVxwUvsgQnUeshuhmjbg/exec';


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!formData.name || !formData.email) {
        alert('Please fill in your name and email address.');
        setIsSubmitting(false);
        return;
      }

      // Send data to Google Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'no-cors' // Required for Google Apps Script
      });

      // Since we're using no-cors, we can't read the response
      // But if we get here without an error, it likely worked
      alert('Thank you for your message. We\'ll get back to you soon.');

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
        appointment_request: '',
        appointment_type: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was a problem sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box bg="white">
      {/* "Contact Us" heading with same grid structure */}
      <Grid templateColumns="repeat(12, 1fr)" mb={0}>
        <Flex
          gridColumn="1 / 13"
          flexDirection="column"
        >
          <Heading
            as="h3"
            fontSize={['3xl', '3xl', '5xl', '5xl', '5xl']}
            fontWeight="normal"
            mb="18px"
          >
            Leave a Message
          </Heading>
        </Flex>
      </Grid>

      {/* Separate grid for the "For Existing Clients" message that spans full width */}
      <Grid templateColumns="repeat(12, 1fr)" mb={6}>
        <Box gridColumn="1 / 13">
          <Text
            as="h4"
            fontSize={['lg', 'lg', 'xl', 'xl', 'xl']}
            fontWeight="normal"
            mb={2}
          >
          We check our messages in the mornings of Tuesday, Wednesday, and Thursday. We will check the messages through the 
          rest of the week daily. 
          </Text>
        </Box>
      </Grid>

      {/* Form and Image section using the same grid structure */}
      <Grid templateColumns="repeat(12, 1fr)">
        <Box
          gridColumn="1 / 13"
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
                <form onSubmit={handleSubmit}>
                  <Box display="flex" flexDirection="column" gap={5} alignItems="flex-start">
                    {/* Name and Email side by side */}
                    <Flex gap={4} width="100%" direction={{ base: 'column', md: 'row' }}>
                      <FormControl id="name" flex="1" isRequired>
                        <FormLabel fontSize="lg">Your Name</FormLabel>
                        <Input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          size="lg"
                          borderRadius="0" 
                          borderColor="#E0E1E7" 
                          height="40px"
                          width="100%"
                        />
                      </FormControl>
                      
                      <FormControl id="email" flex="1" isRequired>
                        <FormLabel fontSize="lg">Email</FormLabel>
                        <Input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          size="lg"
                          borderRadius="0" 
                          borderColor="#E0E1E7" 
                          height="40px"
                          width="100%"
                        />
                      </FormControl>
                    </Flex>
                    
                   <FormControl id="message" width="100%">
                      <FormLabel fontSize="lg">What can we help you with?</FormLabel>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        borderColor="gray.300"
                        borderRadius="5"
                        _hover={{
                          borderRadius: '0',
                        }}
                        height="75px"
                        fontSize="lg"
                        width="100%"
                      />
                    </FormControl>

                    <FormControl id="appointment_request" width="100%">
                      <FormLabel fontSize="lg">Request an Appointment</FormLabel>
                      <Textarea
                        name="appointment_request"
                        value={formData.appointment_request}
                        onChange={handleInputChange}
                        borderColor="gray.300"
                        borderRadius="5"
                        _hover={{
                          borderRadius: '0',
                        }}
                        height="75px"
                        fontSize="lg"
                        width="100%"
                      />
                    </FormControl>

                    <FormControl id="appointment-type" width="100%">
                      <FormLabel fontSize="lg" mb={3}>Appointment Type:</FormLabel>
                      <Flex gap={6} direction={{ base: 'column', sm: 'row' }}>
                        <Box display="flex" alignItems="center">
                          <input 
                            type="radio" 
                            id="telemedicine" 
                            name="appointment_type"
                            value="telemedicine"
                            checked={formData.appointment_type === 'telemedicine'}
                            onChange={handleInputChange}
                            style={{ marginRight: '8px', width: '16px', height: '16px' }}
                          />
                          <FormLabel htmlFor="telemedicine" fontSize="md" mb={0} cursor="pointer">
                            Telemedicine/Virtual
                          </FormLabel>
                        </Box>
                        <Box display="flex" alignItems="center">
                          <input 
                            type="radio" 
                            id="in-home" 
                            name="appointment_type"
                            value="in-home"
                            checked={formData.appointment_type === 'in-home'}
                            onChange={handleInputChange}
                            style={{ marginRight: '8px', width: '16px', height: '16px' }}
                          />
                          <FormLabel htmlFor="in-home" fontSize="md" mb={0} cursor="pointer">
                            In Home
                          </FormLabel>
                        </Box>
                      </Flex>
                    </FormControl>
                    
                    <FormControl id="submit" width="100%">
                      <Button 
                        type="submit"
                        variant="solid" 
                        bg="rgba(36,72,85, 1)" 
                        color="white"
                        borderRadius="0"
                        _hover={{ bg: "#1C6FEB" }}
                        size="lg"
                        height="60px"
                        width="100%"
                        fontSize="lg"
                        isLoading={isSubmitting}
                        loadingText="Sending..."
                      >
                        Submit
                      </Button>
                    </FormControl>
                  </Box>
                </form>
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