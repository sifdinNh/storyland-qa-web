import { Navigation } from '../components/layout/Navigation';
import PrivacySection from '../components/PrivacySection';
import { Footer } from '../components/layout/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1 pt-24">
        <PrivacySection />
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
