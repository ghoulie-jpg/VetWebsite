import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Intakeform from '../components/Intakeform';
import { Container } from '@chakra-ui/react';

const Intake: React.FC = () => {
  return (
    <>
      <Nav/>
      <Container>
        <Intakeform />
      </Container>
      <Footer />
    </>
  );
};

export default Intake;
