// pages/index.tsx
import React, { useLayoutEffect, useEffect } from 'react';
import { useRouter } from 'next/router';
import Nav from '../components/nav';
import Header from '../components/header';
import Service from '../components/service';
import Footer from '../components/footer';
import Contact from '../components/contact';
import AboutUs from '../components/AboutUs';
import { Box, Container } from '@chakra-ui/react';

// Replace useLayoutEffect with an “isomorphic” version:
//  - On the server, this becomes useEffect (no warning, no DOM access).
//  - On the client, it becomes the real useLayoutEffect.
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// Adjust this to match your actual <nav> height (in px, rem, etc.)
const NAV_HEIGHT = 150;

const Home: React.FC = () => {
  const router = useRouter();

  // 1) Handle direct navigation from another page (via ?scrollTo=…).
  useIsomorphicLayoutEffect(() => {
    const scrollToVal = router.query.scrollTo;
    if (typeof scrollToVal === 'string') {
      const el = document.getElementById(scrollToVal);
      if (el) {
        // Let the browser honor scrollMarginTop when scrolling into view
        el.scrollIntoView({ block: 'start', behavior: 'auto' });
      }
      // Remove the query param so it doesn’t trigger again on refresh
      router.replace('/', undefined, { shallow: true });
    }
  }, [router.query.scrollTo, router]);

  // 2) Handle in‐page clicks (dispatched by Nav via CustomEvent)
  useIsomorphicLayoutEffect(() => {
    const listener = (e: Event) => {
      const sectionId = (e as CustomEvent).detail as string;
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    };
    window.addEventListener('scrollToSection', listener);
    return () => window.removeEventListener('scrollToSection', listener);
  }, []);

  return (
    <>
      <Box display="grid" gridTemplateRows="auto 1fr" minHeight="100vh">
        <Nav />

        <Box id="header-box" scrollMarginTop={`${NAV_HEIGHT}px`}>
          <Header />
        </Box>

        <Box
          id="services-box"
          scrollMarginTop={`${NAV_HEIGHT}px`}
          bg="white.500"
          mt="8"
          w="100vw"
          position="relative"
          left="50%"
          right="50%"
          ml="-50vw"
          mr="-50vw"
        >
          <Service />
        </Box>

        <Box
          id="leave-message-box"
          scrollMarginTop={`${NAV_HEIGHT}px`}
          // mt="8"
          bg="light_green.500"
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
          w="100vw"
          bg="white.500"
          position="relative"
          left="50%"
          right="50%"
          ml="-50vw"
          mr="-50vw"
        >
          <AboutUs />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
