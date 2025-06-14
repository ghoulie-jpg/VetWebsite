// components/Nav.tsx
import React from 'react'
import { useRouter } from 'next/router'
import { Box, Flex, Button, Stack, Text } from '@chakra-ui/react'
import Logo from './logo'

interface MenuItemProps {
  label: string
  href?: string        // for external routes like "/intake"
  sectionId?: string   // for in-page scrolling
}

const MenuItem: React.FC<MenuItemProps> = ({ label, href, sectionId }) => {
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
  }

  return (
    <Text
      as="span"
      onClick={handleClick}
      mt={[4, 4, 0, 0]}
      mr="36px"
      display="block"
      fontWeight="medium"
      fontSize="md"
      cursor="pointer"
      _hover={{ color: '#0D74FF' }}
    >
      {label}
    </Text>
  )
}

const Nav: React.FC = () => {
  const router = useRouter()

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

      <Box display={['block', 'block', 'none', 'none']} /* burger toggle here */>
        {/* …hamburger svg… */}
      </Box>

      <Box
        display={['block', 'block', 'flex', 'flex']}
        width={['full', 'full', 'auto', 'auto']}
        mt={['20px', '20px', 'auto', 'auto']}
        textAlign="center"
        alignItems="center"
      >
        <MenuItem label="Home" sectionId="header-box" />
        <MenuItem label="About Us" sectionId="about-us-box" />
        <MenuItem label="Services" sectionId="services-box" />
        <MenuItem label="New Clients: Contact Us" href="/intake" />

        <Stack direction="row" align="center" ml={20}>
          <Button
            bg="rgba(36,72,85, 1)"
            _hover={{ bg: "#333" }}

            onClick={handleButtonClick}
            colorScheme="blue"
            borderRadius="0"
          >
            EXISTING CLIENTS: LEAVE A MESSAGE
          </Button>
        </Stack>
      </Box>
    </Flex>
  )
}

export default Nav
