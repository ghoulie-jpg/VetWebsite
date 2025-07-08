import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Breeders from '../components/breeders';
import { Box } from '@chakra-ui/react';


const breeders: React.FC = () => {
  return (
    <>
    <Nav/>
    <Box
      // scrollMarginTop={`${navHeight}px`}
      bg="white"
      w="100%"
      overflow="hidden"
    >
      <Breeders />
      </Box>
      <Footer />
      
    </>
  );
};

export default breeders;
