import React from 'react';
import { Image } from '@chakra-ui/react';

const Logo: React.FC = () => {
  return (
    <Image
      src="/LOGO.png"
      alt="Montague Mobile Veterinary Services Logo"
      height="100px"
      objectFit="contain"
      display="block"
    />
  );
};

export default Logo;
