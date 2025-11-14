import React from 'react';
import { Navigation } from '../components/Navigation';
import SupportSection from '../components/SupportSection';
import { Footer } from '../components/Footer';

const Support = () => {
  return (
    <div className="items-stretch flex flex-col">
      <div className="bg-white">
        <Navigation />
      </div>
      <main className="bg-white">
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
};

export default Support;
