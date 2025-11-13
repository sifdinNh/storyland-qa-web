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

      {/* Why Storyland Section */}
      <WhyStoryland />

      {/* Features Section */}
      <FeaturesSection />

      {/* Subscription Plans Section */}
      <SubscriptionPlansSection />

      {/* Footer CTA Section */}
      <FooterCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;