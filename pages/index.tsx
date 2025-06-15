// pages/index.tsx
import React, { useLayoutEffect, useEffect } from 'react'
import { useRouter } from 'next/router'
import Nav from '../components/nav'
import Header from '../components/header'
import Service from '../components/service'
import Footer from '../components/footer'
import Contact from '../components/contact'
import AboutUs from '../components/AboutUs'
import { Box, Container } from '@chakra-ui/react'

// Replace useLayoutEffect with an “isomorphic” version:
//  - On the server, this becomes useEffect (no warning, no DOM access).
//  - On the client, it becomes the real useLayoutEffect.
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

// Adjust this to match your actual <nav> height (in px, rem, etc.)
const NAV_HEIGHT = 150

const Home: React.FC = () => {
  const router = useRouter()

  // 1) Handle direct navigation from another page (via ?scrollTo=…).
  useIsomorphicLayoutEffect(() => {
    const scrollToVal = router.query.scrollTo
    if (typeof scrollToVal === 'string') {
      const el = document.getElementById(scrollToVal)
      if (el) {
        // Let the browser honor scrollMarginTop when scrolling into view
        el.scrollIntoView({ block: 'start', behavior: 'auto' })
      }
      // Remove the query param so it doesn’t trigger again on refresh
      router.replace('/', undefined, { shallow: true })
    }
  }, [router.query.scrollTo, router])

  // 2) Handle in‐page clicks (dispatched by Nav via CustomEvent)
  useIsomorphicLayoutEffect(() => {
    const listener = (e: Event) => {
      const sectionId = (e as CustomEvent).detail as string
      const el = document.getElementById(sectionId)
      if (el) {
        el.scrollIntoView({ block: 'start', behavior: 'smooth' })
      }
    }
    window.addEventListener('scrollToSection', listener)
    return () => window.removeEventListener('scrollToSection', listener)
  }, [])

  return (
    <>
      <Nav />

      {/* Give each section a matching scrollMarginTop to push it below the fixed nav */}
      <Box id="header-box" scrollMarginTop={`${NAV_HEIGHT}px`}>
        <Header />
      </Box>

      <Container px={{ base: 1, md: 2, lg: 10 }} py={{ base: 1, md: 2, lg: 4 }}>

        {/* <Box id="services-box" scrollMarginTop={`${NAV_HEIGHT}px`} mt="8">
          <Service />
        </Box> */}

          <Box
          id="services-box"
          scrollMarginTop={`${NAV_HEIGHT}px`}
          mt="8"
          // bg="#c3d2a7"
          w="100vw"
          position="relative"
          left="50%"
          right="50%"
          ml="-50vw"
          mr="-50vw"
        >
          <Service />
        </Box>





        

        {/* <Box id="leave-message-box" scrollMarginTop={`${NAV_HEIGHT}px`} mt="8" bg="#c3d2a7">
          <Contact />
        </Box> */}

        <Box
          id="leave-message-box"
          scrollMarginTop={`${NAV_HEIGHT}px`}
          // mt="8"
          bg="#c3d2a7"
          w="100vw"
          position="relative"
          left="50%"
          right="50%"
          ml="-50vw"
          mr="-50vw"
        >
          <Contact />
        </Box>


  

          <Box
          id="about-us-box"
          scrollMarginTop={`${NAV_HEIGHT}px`}
          // mt="8"
          // bg="#c3d2a7"
          w="100vw"
          position="relative"
          left="50%"
          right="50%"
          ml="-50vw"
          mr="-50vw"
        >
          <AboutUs />
        </Box>

      </Container>

      <Footer />
    </>
  )
}

export default Home
