import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import InHome from '../components/inhome_service';
import { Box } from '@chakra-ui/react';

const inhome: React.FC = () => {
  return (
    <>
    <Nav/>
    <Box>
      <InHome />
      </Box>
      <Footer />
      
    </>
  );
};

export default inhome;
