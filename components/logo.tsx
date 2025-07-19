import React from 'react';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';

const Logo: React.FC = () => {
  return (
    <Box position="relative" height="100px" width="200px">
      <Image
        src="/LOGO.png"
        alt="Montague Mobile Veterinary Services Logo"
        fill
        style={{ objectFit: 'contain' }}
        sizes="200px"
        priority // Logo should load immediately
        quality={85}
      />
    </Box>
  );
};

export default Logo;
