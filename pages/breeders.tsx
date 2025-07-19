import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Breeders from '../components/breeders';
import { Box } from '@chakra-ui/react';

const breeders: React.FC = () => {
  return (
    <>
      <Box
        display="grid"
        gridTemplateRows="auto 1fr auto"
        minHeight="100vh"
        bg="white"
      >
        <Nav />
        <Breeders />
        <Footer />
      </Box>
    </>
  );
};

export default breeders;
