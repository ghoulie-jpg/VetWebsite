import React from 'react'
import Nav from '../components/nav'
import Header from '../components/header'
import Service from '../components/service'
import Footer from '../components/footer'
import Contact from '../components/contact'
import AboutUs from '../components/AboutUs'
import { Box, Flex, Link, Button, Stack, Container } from '@chakra-ui/react'


const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Header />
      
      {/* Main content container with smaller margins */}
      <Container 
        maxW="1200px" 
        px={{ base: 2, md: 3, lg: 2 }}
        py={{ base: 2, md: 3,  lg: 8 }}
      >
        <AboutUs />
        <Service />
        <Box id="about-us">
        
        </Box>
        <Contact />
      </Container>

      <Footer />
    </>
  )
}

export default Home