// pages/index.tsx
import React from 'react';
import Header from '../components/header';
import Service from '../components/service';
import Contact from '../components/contact';
import AboutUs from '../components/AboutUs';
import { Box } from '@chakra-ui/react';

const Home: React.FC = () => {
  return (
    <Box>
      {/* Header/Hero section - full width */}
      <Box id="header-box">
        <Header />
      </Box>

      {/* Services section */}
      <Box id="services-box" bg="white" w="100%">
        <Service />
      </Box>

      {/* Contact section */}
      <Box id="leave-message-box" bg="light_green.500" w="100%">
        <Contact />
      </Box>

      {/* About Us section */}
      <Box id="about-us-box" bg="white" w="100%">
        <AboutUs />
      </Box>
    </Box>
  );
};

export default Home;
