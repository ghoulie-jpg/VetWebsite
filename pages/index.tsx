import React from 'react'
import Nav from '../components/nav'
import Header from '../components/header'
import DreamHome from '../components/dream-home'
import About from '../components/about'
import Service from '../components/service'
import Footer from '../components/footer'
import OurProject from '../components/our-projects'
import CreativeDirector from '../components/creative-director'
import Services_Description from '../components/services_accordion'
// import { Divider } from '@chakra-ui/react'

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Header />
      <DreamHome />
      {/* <About /> */}
      <Service />
      <CreativeDirector />
      <OurProject />
      <Services_Description/>

      {/* <Divider mt="24" /> */}
      <Footer />
    </>
  )
}

export default Home
