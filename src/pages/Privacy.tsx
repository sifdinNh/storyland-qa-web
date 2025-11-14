import React from 'react';
import { Navigation } from '../components/Navigation';
import PrivacySection from '../components/PrivacySection';
import { Footer } from '../components/Footer';

const Privacy = () => {
  return (
    <div className="items-stretch flex flex-col">
      <div className="bg-white">
        <Navigation />
      </div>
      <main className="bg-white">
        <PrivacySection />
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
