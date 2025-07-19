import React from 'react';
import { Box } from '@chakra-ui/react';
import Nav from './nav';
import Footer from './footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box display="grid" gridTemplateRows="auto 1fr auto" minHeight="100vh">
      <Nav />
      <Box as="main">{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
