import React from 'react';
import { Navigation } from './Navigation';
import { HeroSection } from './HeroSection';
import { WhyStoryland } from './WhyStoryland';
import { FeaturesSection } from './FeaturesSection';
import { SubscriptionPlansSection } from './SubscriptionPlansSection';
import { FooterCTA } from './FooterCTA';
import { Footer } from './Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen font-omnes">
      {/* Navigation & Hero Container */}
      <div className="bg-white">
        <Navigation />
        <HeroSection />
      </div>

      <WhyStoryland />
      <FeaturesSection />
      <SubscriptionPlansSection />
      <FooterCTA />
      <Footer />
    </div>
  );
};

export default LandingPage;