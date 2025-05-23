import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import InHome from '../components/inhome_service'
import { Box, Flex, Link, Button, Stack, Container } from '@chakra-ui/react'

const inhome: React.FC = () => {
  return (
    <>
      <Nav />
      <InHome />
      <Footer />
    </>
  )
}

export default inhome
