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

// Replace useLayoutEffect with an "isomorphic" version:
//  - On the server, this becomes useEffect (no warning, no DOM access).
//  - On the client, it becomes the real useLayoutEffect.
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const Home: React.FC = () => {
  const router = useRouter();
  const [navHeight, setNavHeight] = React.useState(150); // Default fallback

  // Get the actual nav height dynamically
  useIsomorphicLayoutEffect(() => {
    const updateNavHeight = () => {
      const navElement = document.querySelector('nav');
      if (navElement) {
        const height = navElement.offsetHeight;
        setNavHeight(height);
      }
    };

    // Initial measurement
    updateNavHeight();

    // Update on window resize
    window.addEventListener('resize', updateNavHeight);
    
    return () => window.removeEventListener('resize', updateNavHeight);
  }, []);

  // 1) Handle direct navigation from another page (via ?scrollTo=…).
  useIsomorphicLayoutEffect(() => {
    const scrollToVal = router.query.scrollTo;
    if (typeof scrollToVal === 'string') {
      const el = document.getElementById(scrollToVal);
      if (el) {
        // Calculate position accounting for nav height
        const elementPosition = el.offsetTop;
        const offsetPosition = elementPosition - navHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'auto',
        });
      }
      // Remove the query param so it doesn't trigger again on refresh
      router.replace('/', undefined, { shallow: true });
    }
  }, [router.query.scrollTo, router, navHeight]);

  // 2) Handle in‐page clicks (dispatched by Nav via CustomEvent)
  useIsomorphicLayoutEffect(() => {
    const listener = (e: Event) => {
      const sectionId = (e as CustomEvent).detail as string;
      const el = document.getElementById(sectionId);
      if (el) {
        // Calculate position accounting for nav height
        const elementPosition = el.offsetTop;
        const offsetPosition = elementPosition - navHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };
    window.addEventListener('scrollToSection', listener);
    return () => window.removeEventListener('scrollToSection', listener);
  }, [navHeight]);

  return (
    <>
      {/* Navigation */}
      <Nav />
      {/* Header/Hero section - full width */}
      <Box id="header-box" scrollMarginTop={`${navHeight}px`}>
        <Header />
      </Box>

      {/* Full-width sections outside the container */}
      <Box
        id="services-box"
        scrollMarginTop={`${navHeight}px`}
        bg="white.500"
        // mt="8"
        w="100%"
        overflow="hidden"
      >
        <Service />
      </Box>

      <Box
        id="leave-message-box"
        scrollMarginTop={`${navHeight}px`}
        bg="light_green.500"
        w="100%"
        overflow="hidden"
      >
        <Contact />
      </Box>

      <Box
        id="about-us-box"
        scrollMarginTop={`${navHeight}px`}
        w="100%"
        bg="white.500"
        overflow="hidden"
      >
        <AboutUs />
      </Box>

      <Footer />
    </>
  );
};

export default Home;
