import React from 'react'
import Nav from '../components/nav'
import Header from '../components/header'
import Service from '../components/service'
import Footer from '../components/footer'
import Contact from '../components/contact'
import AboutUs from '../components/AboutUs'
import ClientResources from '../components/client_resourcse'
import { Box, Container } from '@chakra-ui/react'


const Intake: React.FC = () => {
  return (
    <>
      <Nav />
      <ClientResources />
      <Footer />
    </>
  )
}

export default Intake
