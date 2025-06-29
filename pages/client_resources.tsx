import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import ClientResources from '../components/client_resourcse';

const Intake: React.FC = () => {
  return (
    <>
      <Nav />
      <ClientResources />
      <Footer />
    </>
  );
};

export default Intake;
