'use client';

import React from 'react';
import ServicePage from './service_page'; // Adjust path as needed

export default function Breeders() {
  return (
    <ServicePage
      title="Breeders Support"
      content={`We welcome breeders in our practice. Both Tiffany and Hester have experience in breeding, whelping and raising puppies.

In home puppy exams and in first vaccinations can alleviate the stress of transporting a litter to the vet clinic.

We will do our best to meet the individual needs of our breeders.`}
      imageSrc="puppies.jpg"
      imageAlt="Puppies being examined by veterinarian"
    />
  );
}
