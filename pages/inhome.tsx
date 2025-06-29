import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import InHome from '../components/inhome_service';

const inhome: React.FC = () => {
  return (
    <>
      <Nav />
      <InHome />
      <Footer />
    </>
  );
};

export default inhome;
