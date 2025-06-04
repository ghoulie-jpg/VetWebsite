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
          // maxW="1400px" 
        px={{ base: 1, md: 2, lg: 10 }}
        py={{ base: 1, md: 2, lg: 4 }}
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