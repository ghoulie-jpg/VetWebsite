import React from 'react';
import { Box } from '@chakra-ui/react';
import Intakeform from '../components/Intakeform';
import Nav from '../components/nav';
import Footer from '../components/footer';

const Intake: React.FC = () => {
  return (
    <>
      <Box
        display="grid"
        gridTemplateRows="auto 1fr auto"
        minHeight="100vh"
        bg="white"
      >
        <Nav />
        <Intakeform />
        <Footer />
      </Box>
    </>
  );
};

export default Intake;
