// components/Intakeform.tsx
import React, { useState, FormEvent } from 'react';
import Image from 'next/image';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import {
  Box,
  Grid,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
  Button,
  Icon,
} from '@chakra-ui/react';
import { FaCircleMinus } from 'react-icons/fa6';
import { FaPlusCircle } from 'react-icons/fa';

interface Pet {
  id: string;
  name: string;
  gender: string;
  age: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  pets: Pet[];
  preferredCommunication: string;
  message: string;
}

export default function IntakeForm(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    pets: [{ id: '1', name: '', gender: '', age: '' }],
    preferredCommunication: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePetChange = (petId: string, field: keyof Pet, value: string) => {
    setFormData((prev) => ({
      ...prev,
      pets: prev.pets.map((pet) =>
        pet.id === petId ? { ...pet, [field]: value } : pet
      ),
    }));
  };

  const addPet = () => {
    const newPet: Pet = {
      id: Date.now().toString(),
      name: '',
      gender: '',
      age: '',
    };
    setFormData((prev) => ({
      ...prev,
      pets: [...prev.pets, newPet],
    }));
  };

  const removePet = (petId: string) => {
    if (formData.pets.length > 1) {
      setFormData((prev) => ({
        ...prev,
        pets: prev.pets.filter((pet) => pet.id !== petId),
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name.trim() || !formData.email.trim()) {
      alert('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Network response not ok');
      alert("Thank you! We'll be in touch soon.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        pets: [{ id: '1', name: '', gender: '', age: '' }],
        preferredCommunication: '',
        message: '',
      });
    } catch (err) {
      console.error(err);
      alert('Error sending message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box bg="white" py={12}>
      <Grid templateColumns="repeat(12, 1fr)">
        <Box gridColumn="2 / 12">
          <Heading
            as="h3"
            fontSize="5xl"
            fontWeight="medium"
            lineHeight="1.2"
            mt="20px"
            mb="20px"
            color="black"
          >
            New Clients: Contact Us
          </Heading>
          <Text fontSize={['lg', 'lg', 'xl']} mb={4} color="black">
            We check our messages in the mornings of Tuesday, Wednesday, and
            Thursday. We will check messages through the rest of the week daily.
          </Text>

          <Flex direction={{ base: 'column', lg: 'row' }} gap={6}>
            {/* Form */}
            <Box
              w={{ base: '100%', lg: '700px' }}
              border="1px solid rgba(0,0,0,0.1)"
              boxShadow="0 5px 15px rgba(0,0,0,0.2)"
            >
              <Box p={{ base: 4, md: 8 }}>
                <form onSubmit={handleSubmit}>
                  <Flex direction="column" gap={5}>
                    {/* Name & Email */}
                    <Flex direction={{ base: 'column', md: 'row' }} gap={4}>
                      <FormControl id="name" isRequired flex="1">
                        <FormLabel requiredIndicator={<></>}>
                          Your Name
                        </FormLabel>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </FormControl>
                      <FormControl id="email" isRequired flex="1">
                        <FormLabel requiredIndicator={<></>}>Email</FormLabel>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </FormControl>
                    </Flex>

                    {/* Phone & Address */}
                    <Flex direction={{ base: 'column', md: 'row' }} gap={4}>
                      <FormControl id="phone" flex="1" isRequired>
                        <FormLabel requiredIndicator={<></>}>
                          Phone Number
                        </FormLabel>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </FormControl>
                      <FormControl id="address" flex="1" isRequired>
                        <FormLabel requiredIndicator={<></>}>Address</FormLabel>
                        <Input
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                        />
                      </FormControl>
                    </Flex>

                    {/* Dynamic Pet Rows */}
                    {formData.pets.map((pet) => (
                      <Box key={pet.id}>
                        <Flex direction={{ base: 'column', md: 'row' }} gap={4}>
                          <FormControl
                            id={`petName-${pet.id}`}
                            flex="2"
                            isRequired
                          >
                            <FormLabel mb={2} ml={30} requiredIndicator={<></>}>
                              Pet Name
                            </FormLabel>
                            <Flex align="center">
                              <Box
                                mr={2}
                                cursor="pointer"
                                fontSize="24px"
                                display="flex"
                                alignItems="center"
                                onClick={() => removePet(pet.id)}
                              >
                                {React.createElement(FaCircleMinus as any)}
                              </Box>
                              <Input
                                value={pet.name}
                                onChange={(e) =>
                                  handlePetChange(
                                    pet.id,
                                    'name',
                                    e.target.value
                                  )
                                }
                              />
                            </Flex>
                          </FormControl>

                          <FormControl id={`pet-gender-${pet.id}`} flex="1">
                            <FormLabel mb={2}>Gender</FormLabel>
                            <Flex direction="row" gap={4}>
                              {[
                                { value: 'male', label: 'M' },
                                { value: 'female', label: 'F' },
                              ].map((opt) => (
                                <Box
                                  key={opt.value}
                                  display="flex"
                                  alignItems="center"
                                >
                                  <input
                                    type="radio"
                                    id={`${opt.value}-${pet.id}`}
                                    name={`petGender-${pet.id}`}
                                    value={opt.value}
                                    checked={pet.gender === opt.value}
                                    onChange={(e) =>
                                      handlePetChange(
                                        pet.id,
                                        'gender',
                                        e.target.value
                                      )
                                    }
                                    style={{
                                      marginRight: '8px',
                                      width: '16px',
                                      height: '16px',
                                      backgroundColor: 'white',
                                    }}
                                  />
                                  <FormLabel
                                    htmlFor={`${opt.value}-${pet.id}`}
                                    mb={0}
                                  >
                                    {opt.label}
                                  </FormLabel>
                                </Box>
                              ))}
                            </Flex>
                          </FormControl>

                          <FormControl
                            id={`petAge-${pet.id}`}
                            flex="1"
                            isRequired
                          >
                            <FormLabel mb={2} requiredIndicator={<></>}>
                              Age (years)
                            </FormLabel>
                            <Input
                              type="number"
                              min="0"
                              value={pet.age}
                              onChange={(e) =>
                                handlePetChange(pet.id, 'age', e.target.value)
                              }
                            />
                          </FormControl>
                        </Flex>
                      </Box>
                    ))}

                    {/* Add Pet Row - always at the bottom */}
                    <Flex
                      align="center"
                      gap={2}
                      cursor="pointer"
                      onClick={addPet}
                    >
                      <Box fontSize="20px" display="flex" alignItems="center">
                        {React.createElement(FaPlusCircle as any)}
                      </Box>
                      <Box>Add Pet</Box>
                    </Flex>

                    {/* Message */}
                    <FormControl id="message">
                      <FormLabel>How can we help?</FormLabel>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </FormControl>

                    {/* Preferred Communication */}
                    <FormControl id="preferredCommunication">
                      <FormLabel mb={2}>Preferred Communication</FormLabel>
                      <Flex direction="row" gap={4}>
                        {[
                          { value: 'email', label: 'Email' },
                          { value: 'phone', label: 'Phone' },
                        ].map((opt) => (
                          <Box
                            key={opt.value}
                            display="flex"
                            alignItems="center"
                          >
                            <input
                              type="radio"
                              id={opt.value}
                              name="preferredCommunication"
                              value={opt.value}
                              checked={
                                formData.preferredCommunication === opt.value
                              }
                              onChange={handleInputChange}
                              style={{
                                marginRight: '8px',
                                width: '16px',
                                height: '16px',
                                backgroundColor: 'white',
                              }}
                            />
                            <FormLabel htmlFor={opt.value} mb={0}>
                              {opt.label}
                            </FormLabel>
                          </Box>
                        ))}
                      </Flex>
                    </FormControl>

                    {/* Submit */}
                    <Button
                      mt={4}
                      type="submit"
                      colorScheme="green"
                      loading={isSubmitting}
                    >
                      Submit
                    </Button>
                  </Flex>
                </form>
              </Box>
            </Box>

            {/* Image - centered when stacked */}
            <Box
              flex="1"
              paddingLeft={{ base: 0, lg: 20 }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
              position="relative"
              height="300px"
            >
              <Image
                src="/Archie.webp"
                alt="Contact us image"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={75}
              />
            </Box>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
}
