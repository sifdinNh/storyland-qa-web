import React from 'react';
import { Navigation } from '../components/Navigation';
import TermsSection from '../components/TermsSection';
import { Footer } from '../components/Footer';

const Terms = () => {
  return (
    <div className="items-stretch flex flex-col">
      <div className="bg-white">
        <Navigation />
      </div>
      <main className="bg-white">
        <TermsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
