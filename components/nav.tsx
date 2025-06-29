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
      fontSize="xl"
      py={[2, 2, 0, 0]}
      mt={[4, 4, 0, 0]}
      mr={[0, 0, 8, 8]}
      display="block"
      _hover={{ color: '#0D74FF' }}
      textAlign={['center', 'center', 'left', 'left']}
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
    handleClose(); // Close mobile menu if open
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
      position="fixed"
      top="0"
      zIndex="999"
      width="100%"
      bg="white"
      boxShadow="md"
    >
      <Flex
        align="center"
        justify="flex-start"
        wrap="wrap"
        px="1em"
        pl="5%" // Logo starts 5% from the left edge
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

        {/* Hamburger Icon */}
        <Box
          display={['block', 'block', 'none', 'none']}
          onClick={handleToggle}
          cursor="pointer"
          ml="auto"
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

        {/* Menu Items and Button */}
        <Flex
          direction={['column', 'column', 'row', 'row']}
          align="center"
          ml={[0, 0, 8, 8]} // Increased spacing between logo and menu items
          flexWrap="wrap"
          flexGrow={1}
          justify={['center', 'center', 'flex-start', 'flex-start']}
          display={[
            isOpen ? 'flex' : 'none',
            isOpen ? 'flex' : 'none',
            'flex',
            'flex',
          ]}
          mt={[isOpen ? 4 : 0, isOpen ? 4 : 0, 0, 0]}
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

          <Stack
            direction={['column', 'column', 'row', 'row']}
            align="center"
            ml={[0, 0, 6, 6]}
            mt={[4, 4, 0, 0]}
            width={['full', 'full', 'auto', 'auto']}
          >
            <Button
              bg="#023020"
              _hover={{ bg: '#333' }}
              onClick={handleButtonClick}
              colorScheme="blue"
              borderRadius="0"
              width={['full', 'full', 'auto', 'auto']}
              fontSize="xl"
            >
              EXISTING CLIENTS: LEAVE A MESSAGE
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Nav;
