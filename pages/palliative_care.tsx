import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import PalliativeService from '../components/palliative_service'; // Changed to 'Palliative'

const Intake: React.FC = () => {
  return (
    <>
      <Nav />
      <PalliativeService /> {/* Changed to 'Palliative' */}
      <Footer />
    </>
  );
};

export default Intake;
