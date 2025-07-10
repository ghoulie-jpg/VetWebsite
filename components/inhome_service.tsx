'use client';

import React from 'react';
import ServicePage from './service_page';

export default function PalliativeService(): JSX.Element {
  return (
    <ServicePage
      title="In Home, Telemedicine and Virtual Visits"
      content={`We will travel to your house for routine health and vaccination appointments.

Dignostics can be done right in your home including blood urine and fecal testing. Xrays or Ultrasound are available at a clinic we are partnered with in the area.

Treatments including simple surgical procedures can be done when appropriate in the home. Sometimes a homevisit is not required to resolve simple issues or to relieve a concerned pet parent. A phone conversation or virtual visit using a mobile phone may be sufficient saving and money + relieving stress.`}
      imageSrc="Car_notposed.png"
      imageAlt="Mobile veterinary service car"
    />
  );
}
