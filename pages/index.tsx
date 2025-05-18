import React from 'react'
import Nav from '../components/nav'
import Header from '../components/header'
import Service from '../components/service'
import Footer from '../components/footer'
import Contact from '../components/contact'
import AboutUs from '../components/AboutUs'
import { Box, Flex, Link, Button, Stack } from '@chakra-ui/react'


const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Header />
      {/* <About /> */}
      <Service />
      <Box id ="about-us">
      <AboutUs />
      </Box>
      {/* <OurProject /> */}
      {/* <Services_Description/> */}

      <Contact/>

      {/* <Divider mt="24" /> */}
      <Footer />
    </>
  )
}

export default Home
