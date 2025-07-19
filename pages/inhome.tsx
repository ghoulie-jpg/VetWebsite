import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import InHome from '../components/inhome_service';
import { Box } from '@chakra-ui/react';

const inhome: React.FC = () => {
  return (
    <>
      <Box
        display="grid"
        gridTemplateRows="auto 1fr auto"
        minHeight="100vh"
        bg="white"
      >
        <Nav />
        <InHome />
        <Footer />
      </Box>
    </>
  );
};

export default inhome;
