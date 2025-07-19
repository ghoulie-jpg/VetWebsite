import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { Box, Flex, Button, Text } from '@chakra-ui/react';
import Logo from './logo';

const Nav = () => {
  const router = useRouter();
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  // Measure nav height
  const updateNavHeight = useCallback(() => {
    if (navRef.current) {
      const height = navRef.current.offsetHeight;
      setNavHeight(height);
      return height;
    }
    return 70; // fallback height
  }, []);

  useEffect(() => {
    updateNavHeight();
    const handleResize = () => updateNavHeight();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateNavHeight]);

  // Scroll to section (ONLY for same-page navigation)
  const scrollToSection = useCallback(
    (id) => {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;
        const currentNavHeight = updateNavHeight();
        const targetPosition = Math.max(0, elementTop - currentNavHeight - 10);

        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    },
    [updateNavHeight]
  );

  // Apply CSS scroll-padding for native anchor jumps
  useEffect(() => {
    document.documentElement.style.scrollPaddingTop = `${navHeight + 10}px`;
  }, [navHeight]);

  // Handle hash changes - ONLY for same-page smooth scrolling
  useEffect(() => {
    // Only handle hash scrolling if we're already on the homepage
    // and this is a same-page navigation (not initial load)
    if (
      router.pathname === '/' &&
      router.asPath.includes('#') &&
      document.readyState === 'complete'
    ) {
      const hash = router.asPath.split('#')[1];
      if (hash) {
        // Small delay to ensure this is not from initial page load
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            scrollToSection(hash);
          }
        }, 100);
      }
    }
  }, [router.asPath, scrollToSection]);

  const handleSection = (id) => {
    setIsOpen(false);

    if (router.pathname === '/') {
      // Same page: smooth scroll immediately
      scrollToSection(id);
    } else {
      // Cross-page: just navigate with hash, let browser handle positioning
      router.push(`/#${id}`);
    }
  };

  return (
    <Box
      as="nav"
      ref={navRef}
      w="100%"
      bg="white"
      boxShadow="md"
      pos="sticky"
      top="0"
      zIndex="999"
    >
      <Flex align="center" justify="space-between" px="5%" py="1.5em">
        <Box
          cursor="pointer"
          onClick={() => {
            setIsOpen(false);
            router.push('/');
          }}
        >
          <Logo />
        </Box>
        <Box
          display={{ base: 'block', xl: 'none' }}
          cursor="pointer"
          p={2}
          onClick={() => setIsOpen((o) => !o)}
        >
          {isOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </Box>
        <Flex
          display={{ base: 'none', xl: 'flex' }}
          align="center"
          ml={8}
          flexGrow={1}
        >
          {[
            ['header-box', 'Home'],
            ['about-us-box', 'About Us'],
            ['services-box', 'Services'],
          ].map(([id, label]) => (
            <Text
              key={id}
              onClick={() => handleSection(id)}
              cursor="pointer"
              fontWeight="medium"
              fontSize="lg"
              mr={6}
              _hover={{ color: '#0D74FF' }}
              whiteSpace="nowrap"
            >
              {label}
            </Text>
          ))}
          <Text
            onClick={() => router.push('/intake')}
            cursor="pointer"
            fontWeight="medium"
            fontSize="lg"
            mr={6}
            _hover={{ color: '#0D74FF' }}
            whiteSpace="nowrap"
          >
            New Clients: Contact Us
          </Text>
          <Button
            onClick={() => handleSection('leave-message-box')}
            bg="dark_green.500"
            _hover={{ bg: '#333' }}
            color="white"
            fontSize="lg"
          >
            EXISTING CLIENTS: LEAVE A MESSAGE
          </Button>
        </Flex>
      </Flex>
      {isOpen && (
        <Box
          display={{ base: 'block', xl: 'none' }}
          borderTop="1px solid"
          borderColor="gray.200"
          pb={4}
        >
          <Flex direction="column" align="center" px="1em">
            {[
              ['header-box', 'Home'],
              ['about-us-box', 'About Us'],
              ['services-box', 'Services'],
            ].map(([id, label]) => (
              <Text
                key={id}
                onClick={() => handleSection(id)}
                cursor="pointer"
                fontWeight="medium"
                fontSize="lg"
                py={2}
                mt={4}
                _hover={{ color: '#0D74FF' }}
              >
                {label}
              </Text>
            ))}
            <Text
              onClick={() => router.push('/intake')}
              cursor="pointer"
              fontWeight="medium"
              fontSize="lg"
              py={2}
              mt={4}
              _hover={{ color: '#0D74FF' }}
            >
              New Clients: Contact Us
            </Text>
            <Button
              onClick={() => handleSection('leave-message-box')}
              bg="dark_green.500"
              _hover={{ bg: '#333' }}
              color="white"
              fontSize="lg"
              width="full"
              mt={4}
            >
              EXISTING CLIENTS: LEAVE A MESSAGE
            </Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Nav;
