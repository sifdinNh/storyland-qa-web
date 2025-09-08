import React from 'react';
import Navbar from '../components/Navbar';
import SupportSection from '../components/SupportSection';
import Footer from '../components/Footer';

const Support = () => {
  return (
    <div className="items-stretch flex flex-col bg-[#FBF4F5]">
      <Navbar />
      <main>
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
};

export default Support;
