import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Breeders from '../components/breeders';

const breeders: React.FC = () => {
  return (
    <>
      <Nav />
      <Breeders />
      <Footer />
    </>
  );
};

export default breeders;
