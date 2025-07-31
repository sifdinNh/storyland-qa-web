import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import PrivacySection from '../components/PrivacySection';
import TermsSection from '../components/TermsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="items-stretch flex flex-col bg-[#FBF4F5]">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PrivacySection />
        <TermsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
