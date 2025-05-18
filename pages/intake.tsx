import React from 'react'
import Nav from '../components/nav'
import Header from '../components/header'
import Service from '../components/service'
import Footer from '../components/footer'
import Contact from '../components/contact'
import AboutUs from '../components/AboutUs'
import Intake_form from '../components/Intakeform'

const Intake: React.FC = () => {
  return (
    <>
      <Nav />
      <Intake_form />
      <Footer />
    </>
  )
}

export default Intake
