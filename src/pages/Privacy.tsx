import React from 'react';
import Navbar from '../components/Navbar';
import PrivacySection from '../components/PrivacySection';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div className="items-stretch flex flex-col bg-[#FBF4F5]">
      <Navbar />
      <main>
        <PrivacySection />
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
