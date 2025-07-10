'use client';

import React from 'react';
import ServicePage from './service_page'; // Adjust path as needed

export default function Examinations() {
  return (
    <ServicePage
      title="Examinations: Routine Care, Disease Prevention and Treatment"
      content={`Routine health exams including vaccination and parasite prevention or treatment are part of an effective strategy to keep your pet healthy.

When possible we encourage clients to consider the role of nutrition, exercise and lifestyle factors play in the health of their pet.

We will employ both conventional and alternative strategies as directed by our clients to keep our patients or return our patients to health.`}
      imageSrc="Examinations.png"
      imageAlt="Pet examination and routine care"
    />
  );
}
