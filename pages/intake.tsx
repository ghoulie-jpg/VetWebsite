import React from 'react'
import Nav from '../components/nav'
import Header from '../components/header'
import Service from '../components/service'
import Footer from '../components/footer'
import Contact from '../components/contact'
import AboutUs from '../components/AboutUs'
import Intake_form from '../components/Intakeform'
import { Box, Container } from '@chakra-ui/react'


const Intake: React.FC = () => {
  return (
    <>
      <Nav />
      <Container px={{ base: 1, md: 2, lg: 10 }} py={{ base: 1, md: 2, lg: 4 }}>
      <Intake_form />
      </Container>
      <Footer />
    </>
  )
}

export default Intake
