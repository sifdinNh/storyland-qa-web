import { Navigation } from '../components/layout/Navigation';
import SupportSection from '../components/SupportSection';
import { Footer } from '../components/layout/Footer';

const Support = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1 pt-24">
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
};

export default Support;
