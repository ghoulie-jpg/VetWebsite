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
  message: string;
}

export default function IntakeForm(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    pets: [{ id: '1', name: '', gender: '', age: '' }],
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
      alert('Name and email are required.');
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
          <Heading as="h3" fontSize={['2xl', '5xl']} mb={4}>
            New Clients: Contact Us
          </Heading>
          <Heading as="h4" fontSize={['lg', 'xl']} mb={6}>
            We check our messages in the mornings of Tuesday, Wednesday, and
            Thursday. We will check messages through the rest of the week daily.
          </Heading>

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
                        <FormLabel>Your Name</FormLabel>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </FormControl>
                      <FormControl id="email" isRequired flex="1">
                        <FormLabel>Email</FormLabel>
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
                      <FormControl id="phone" flex="1">
                        <FormLabel>Phone Number</FormLabel>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </FormControl>
                      <FormControl id="address" flex="1">
                        <FormLabel>Address</FormLabel>
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
                          <FormControl id={`petName-${pet.id}`} flex="2">
                            <FormLabel mb={2} ml={30}>
                              Pet Name
                            </FormLabel>
                            <Flex align="center">
                              <Icon
                                as={FaCircleMinus}
                                boxSize={6}
                                mr={2}
                                cursor="pointer"
                                onClick={() => removePet(pet.id)}
                              />
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

                          <FormControl id={`petAge-${pet.id}`} flex="1">
                            <FormLabel mb={2}>Age (years)</FormLabel>
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
                      <Icon as={FaPlusCircle} boxSize={5} />
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
                src="/Archie.jpg"
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
