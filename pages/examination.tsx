import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Examinations from '../components/examinations';

const examination: React.FC = () => {
  return (
    <>
      <Nav />
      <Examinations />
      <Footer />
    </>
  );
};

export default examination;
