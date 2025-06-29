'use client'
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import React, { useState, FormEvent } from 'react';
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

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      try {
        if (!formData.name || !formData.email) {
          alert('Please fill in your name and email address.');
          setIsSubmitting(false);
          return;
        }
  
        const res = await fetch('/api/intake', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
  
        if (!res.ok) throw new Error('Network response was not ok');
  
        alert('Thank you for your message. We\'ll get back to you soon.');
  
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
    <Box bg="white" pt="175px">
      {/* "Contact Us" heading with same grid structure */}
      <Grid templateColumns="repeat(12, 1fr)" mb={6}>
        <Flex
          gridColumn="1 / 13"
          flexDirection="column"
        >
          <Heading
              as="h3"
              fontSize={['3xl', '3xl', '5xl', '5xl', '5xl']}
              fontWeight="medium"
              mb="18px"
              lineHeight="1.2"
          >
            New Clients : Contact Us
          </Heading>
        </Flex>
      </Grid>

      {/* Separate grid for the "For Existing Clients" message that spans full width */}
      <Grid templateColumns="repeat(12, 1fr)" mb={6}>
        <Box
          gridColumn="1 / 13"
          // px={{ base: 4, md: 8 }}
        >
          <Heading
            as="h3"
            fontSize={['lg', 'lg', 'xl', 'xl', 'xl']}
            fontWeight="normal"
            mb={4}
          >
      We check our messages in the mornings of Tuesday, Wednesday, and Thursday. We will check the messages through the rest of the week daily.          </Heading>
        </Box>
      </Grid>

      {/* Form and Image section using the same grid structure */}
      <Grid templateColumns="repeat(12, 1fr)">
              <Box gridColumn="1 / 13" mb={10}>
                <Flex direction={{ base: 'column', lg: 'row' }} gap={6} alignItems="flex-start">
                  {/* Form container */}
                  <Box
                    bg="white"
                    width={{ base: "100%", lg: "700px" }}
                    border="1px solid rgba(0, 0, 0, 0.1)"
                    boxShadow="0px 5px 15px rgba(0, 0, 0, 0.2)"
                    flex="0 0 auto"
                  >
                    <Box m={{ base: 4, md: 8, lg: 10 }} color="#0B0E3F">
                      <form onSubmit={handleSubmit}>
                        <Box display="flex" flexDirection="column" gap={5} alignItems="flex-start">
                          {/* Name + Email */}
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
      
                          {/* Message */}
                          <FormControl id="message" width="100%">
                            <FormLabel fontSize="lg">What can we help you with?</FormLabel>
                            <Textarea
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              borderColor="gray.300"
                              borderRadius="5"
                              _hover={{ borderRadius: '0' }}
                              height="75px"
                              fontSize="lg"
                              width="100%"
                            />
                          </FormControl>
      
                          {/* Submit Button */}
                          <FormControl id="submit" width="100%">
                            <Button
                              type="submit"
                              variant="solid"
                              bg="#023020"
                              color="white"
                              borderRadius="0"
                              _hover={{ bg: "#111" }}
                              size="lg"
                              height="50px"
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
                      src="Archie.jpg"
                      alt="Contact us image"
                      width="auto"
                      height="300"
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