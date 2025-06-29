import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Intakeform from '../components/Intakeform';
import { Box, Container } from '@chakra-ui/react';

const Intake: React.FC = () => {
  return (
    <>
      <Nav />
      <Container px={{ base: 1, md: 2, lg: 10 }} py={{ base: 1, md: 2, lg: 4 }}>
        <Intakeform />
      </Container>
      <Footer />
    </>
  );
};

export default Intake;
