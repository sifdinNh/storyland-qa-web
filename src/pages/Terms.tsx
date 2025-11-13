import React from 'react';
import Navbar from '../components/Navbar';
import TermsSection from '../components/TermsSection';
import { Footer } from '../components/Footer';

const Terms = () => {
  return (
    <div className="items-stretch flex flex-col bg-[#FBF4F5]">
      <Navbar />
      <main>
        <TermsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
