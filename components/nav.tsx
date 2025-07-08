import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Flex, Button, Stack, Text } from '@chakra-ui/react';
import Logo from './logo';

interface MenuItemProps {
  label: string;
  href?: string;
  sectionId?: string;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  label,
  href,
  sectionId,
  onClick,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (sectionId) {
      if (router.pathname === '/') {
        window.dispatchEvent(
          new CustomEvent('scrollToSection', { detail: sectionId })
        );
      } else {
        router.push(
          { pathname: '/', query: { scrollTo: sectionId } },
          undefined,
          { scroll: false }
        );
      }
    } else if (href) {
      router.push(href);
    }

    if (onClick) onClick();
  };

  return (
    <Text
      as="span"
      onClick={handleClick}
      cursor="pointer"
      fontWeight="medium"
      fontSize="lg"
      py={2}
      mt={4}
      mr={6}
      display="block"
      _hover={{ color: '#0D74FF' }}
      textAlign="center"
      whiteSpace="nowrap"
    >
      {label}
    </Text>
  );
};

const Nav: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  const handleLogoClick = () => {
    router.push('/');
    handleClose();
  };

  const handleButtonClick = () => {
    const sectionId = 'leave-message-box';
    if (router.pathname === '/') {
      window.dispatchEvent(
        new CustomEvent('scrollToSection', { detail: sectionId })
      );
    } else {
      router.push(
        { pathname: '/', query: { scrollTo: sectionId } },
        undefined,
        { scroll: false }
      );
    }
    handleClose();
  };

  return (
    <Box
      as="nav"
      width="100%"
      bg="white"
      boxShadow="md"
      position="sticky"
      top="0"
      zIndex="999"
    >
      <Flex
        align="center"
        justify="space-between"
        px="1em"
        pl="5%"
        py="1.5em"
        color="black"
        textTransform="uppercase"
      >
        {/* Logo */}
        <Box
          flexShrink={0}
          onClick={handleLogoClick}
          cursor="pointer"
          _hover={{ opacity: 0.8 }}
        >
          <Logo />
        </Box>

        {/* Hamburger Icon - Show on screens smaller than xl (1280px) */}
        <Box
          display={['block', 'block', 'block', 'block', 'none']}
          onClick={handleToggle}
          cursor="pointer"
          p={2}
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

        {/* Desktop Menu - Only show on xl screens and larger (1280px+) */}
        <Flex
          align="center"
          ml={8}
          flexGrow={1}
          justify="flex-start"
          display={['none', 'none', 'none', 'none', 'flex']}
        >
          <Text
            as="span"
            onClick={() => {
              const sectionId = 'header-box';
              if (router.pathname === '/') {
                window.dispatchEvent(
                  new CustomEvent('scrollToSection', { detail: sectionId })
                );
              } else {
                router.push(
                  { pathname: '/', query: { scrollTo: sectionId } },
                  undefined,
                  { scroll: false }
                );
              }
            }}
            cursor="pointer"
            fontWeight="medium"
            fontSize="lg"
            mr={6}
            _hover={{ color: '#0D74FF' }}
            whiteSpace="nowrap"
          >
            Home
          </Text>
          
          <Text
            as="span"
            onClick={() => {
              const sectionId = 'about-us-box';
              if (router.pathname === '/') {
                window.dispatchEvent(
                  new CustomEvent('scrollToSection', { detail: sectionId })
                );
              } else {
                router.push(
                  { pathname: '/', query: { scrollTo: sectionId } },
                  undefined,
                  { scroll: false }
                );
              }
            }}
            cursor="pointer"
            fontWeight="medium"
            fontSize="lg"
            mr={6}
            _hover={{ color: '#0D74FF' }}
            whiteSpace="nowrap"
          >
            About Us
          </Text>
          
          <Text
            as="span"
            onClick={() => {
              const sectionId = 'services-box';
              if (router.pathname === '/') {
                window.dispatchEvent(
                  new CustomEvent('scrollToSection', { detail: sectionId })
                );
              } else {
                router.push(
                  { pathname: '/', query: { scrollTo: sectionId } },
                  undefined,
                  { scroll: false }
                );
              }
            }}
            cursor="pointer"
            fontWeight="medium"
            fontSize="lg"
            mr={6}
            _hover={{ color: '#0D74FF' }}
            whiteSpace="nowrap"
          >
            Services  
          </Text>
          
          <Text
            as="span"
            onClick={() => router.push('/intake')}
            cursor="pointer"
            fontWeight="medium"
            fontSize="lg"
            mr={6}
            _hover={{ color: '#0D74FF' }}
            whiteSpace="nowrap"
          >
            New Clients : Contact Us
          </Text>

          <Button
            bg="dark_green.500"
            _hover={{ bg: '#333' }}
            onClick={handleButtonClick}
            colorScheme="blue"
            borderRadius="0"
            fontSize="lg"
            color="white"
            whiteSpace="nowrap"
            flexShrink={0}
          >
            EXISTING CLIENTS: LEAVE A MESSAGE
          </Button>
        </Flex>
      </Flex>

      {/* Mobile/Collapsed Menu */}
      {isOpen && (
        <Box
          bg="white"
          borderTop="1px solid"
          borderColor="gray.200"
          pb={4}
          display={['block', 'block', 'block', 'block', 'none']}
        >
          <Flex
            direction="column"
            align="center"
            px="1em"
          >
            <MenuItem label="Home" sectionId="header-box" onClick={handleClose} />
            <MenuItem
              label="About Us"
              sectionId="about-us-box"
              onClick={handleClose}
            />
            <MenuItem
              label="Services"
              sectionId="services-box"
              onClick={handleClose}
            />
            <MenuItem
              label="New Clients : Contact Us"
              href="/intake"
              onClick={handleClose}
            />

            <Button
              bg="dark_green.500"
              _hover={{ bg: '#333' }}
              onClick={handleButtonClick}
              colorScheme="blue"
              borderRadius="0"
              width="full"
              fontSize="lg"
              color="white"
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
