import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import PalliativeService from '../components/palliative_service'; // Changed to 'Palliative'
import { Box } from '@chakra-ui/react';


const Intake: React.FC = () => {
  return (
    <>
    <Box display="grid" gridTemplateRows="auto 1fr auto" minHeight="100vh">
    
      <Nav />
      <PalliativeService /> {/* Changed to 'Palliative' */}
      <Footer />
      </Box>
    </>
  );
};

export default Intake;
