import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Examinations from '../components/examinations';
import { Box } from '@chakra-ui/react';

const examination: React.FC = () => {
  return (
    <>
      <Box display="grid" gridTemplateRows="auto 1fr auto" minHeight="100vh">
      <Nav />
      <Examinations />
      <Footer />
      </Box>
    </>
  );
};

export default examination;
