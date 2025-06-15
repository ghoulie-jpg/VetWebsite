// components/Nav.tsx
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Flex, Button, Stack, Text } from '@chakra-ui/react'
import Logo from './logo'

interface MenuItemProps {
  label: string
  href?: string        // for external routes like "/intake"
  sectionId?: string   // for in-page scrolling
  onClick?: () => void // for closing menu on mobile
}

const MenuItem: React.FC<MenuItemProps> = ({ label, href, sectionId, onClick }) => {
  const router = useRouter()

  const handleClick = () => {
    if (sectionId) {
      if (router.pathname === '/') {
        // Already on "/" — dispatch an event so Home will scroll smoothly
        window.dispatchEvent(
          new CustomEvent('scrollToSection', { detail: sectionId })
        )
      } else {
        // Navigate to "/" with ?scrollTo=sectionId (no auto‐scroll)
        router.push(
          {
            pathname: '/',
            query: { scrollTo: sectionId },
          },
          undefined,
          { scroll: false }
        )
      }
    } else if (href) {
      router.push(href)
    }
    
    // Close mobile menu after clicking
    if (onClick) {
      onClick()
    }
  }

  return (
    <Text
      as="span"
      onClick={handleClick}
      mt={[4, 4, 0, 0]}
      mr={[0, 0, "36px", "36px"]}
      display="block"
      fontWeight="medium"
      fontSize="md"
      cursor="pointer"
      _hover={{ color: '#0D74FF' }}
      textAlign={["center", "center", "left", "left"]}
      py={[2, 2, 0, 0]}
    >
      {label}
    </Text>
  )
}

const Nav: React.FC = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleButtonClick = () => {
    const sectionId = 'leave-message-box'
    if (router.pathname === '/') {
      window.dispatchEvent(
        new CustomEvent('scrollToSection', { detail: sectionId })
      )
    } else {
      router.push(
        {
          pathname: '/',
          query: { scrollTo: sectionId },
        },
        undefined,
        { scroll: false }
      )
    }
    handleClose() // Close menu on mobile
  }

  return (
    <Flex
      as="nav"
      position="fixed"
      top="0"
      zIndex="999"
      width="100%"
      align="center"
      justify="space-between"
      wrap="wrap"
      px={['1.5em', '1.5em', '1.5em', '15%']}
      py="1.5em"
      bg="white"
      color="black"
      boxShadow="md"
      textTransform="uppercase"
    >
      <Flex align="center" mr={5}>
        <Logo />
      </Flex>

      {/* Hamburger Icon - only visible on mobile/tablet */}
      <Box
        display={['block', 'block', 'none', 'none']}
        onClick={handleToggle}
        cursor="pointer"
        p={2}
      >
        {isOpen ? (
          // Close Icon (X)
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger Icon
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        )}
      </Box>

      {/* Navigation Items */}
      <Box
        display={[isOpen ? 'block' : 'none', isOpen ? 'block' : 'none', 'flex', 'flex']}
        width={['full', 'full', 'auto', 'auto']}
        mt={['20px', '20px', 'auto', 'auto']}
        textAlign="center"
        alignItems="center"
        position={['absolute', 'absolute', 'relative', 'relative']}
        top={['100%', '100%', 'auto', 'auto']}
        left="0"
        right="0"
        bg={['white', 'white', 'transparent', 'transparent']}
        boxShadow={[isOpen ? 'md' : 'none', isOpen ? 'md' : 'none', 'none', 'none']}
        px={['1.5em', '1.5em', 0, 0]}
        pb={[4, 4, 0, 0]}
      >
        <MenuItem label="Home" sectionId="header-box" onClick={handleClose} />
        <MenuItem label="About Us" sectionId="about-us-box" onClick={handleClose} />
        <MenuItem label="Services" sectionId="services-box" onClick={handleClose} />
        <MenuItem label="New Clients: Contact Us" href="/intake" onClick={handleClose} />

        <Stack 
          direction={["column", "column", "row", "row"]} 
          align="center" 
          ml={[0, 0, 20, 20]}
          mt={[4, 4, 0, 0]}
          width={["full", "full", "auto", "auto"]}
        >
          <Button
            bg="rgba(36,72,85, 1)"
            _hover={{ bg: "#333" }}
            onClick={handleButtonClick}
            colorScheme="blue"
            borderRadius="0"
            width={["full", "full", "auto", "auto"]}
          >
            EXISTING CLIENTS: LEAVE A MESSAGE
          </Button>
        </Stack>
      </Box>
    </Flex>
  )
}

export default Nav