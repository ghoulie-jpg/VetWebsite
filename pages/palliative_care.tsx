import React from 'react'
import Nav from '../components/nav'
import Header from '../components/header'
import Service from '../components/service'
import Footer from '../components/footer'
import Contact from '../components/contact'
import AboutUs from '../components/AboutUs'
import Intake_form from '../components/Intakeform'
import Palliative from '../components/palliative_service'  // Changed to 'Palliative'
import { Box, Container } from '@chakra-ui/react'

const Intake: React.FC = () => {
  return (
    <>
      <Nav />
        <Palliative />  {/* Changed to 'Palliative' */}
      <Footer />
    </>
  )
}

export default Intake