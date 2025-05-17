import React from 'react'
import Nav from '../components/nav'
import Header from '../components/header'
import Service from '../components/service'
import Footer from '../components/footer'
import Contact from '../components/Contact'
import AboutUs from '../components/AboutUs'

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Header />
      {/* <About /> */}
      <Service />
      <AboutUs />
      {/* <OurProject /> */}
      {/* <Services_Description/> */}

      {/* <Contact/> */}

      {/* <Divider mt="24" /> */}
      <Footer />
    </>
  )
}

export default Home
