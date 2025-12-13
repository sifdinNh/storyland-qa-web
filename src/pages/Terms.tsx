import { Navigation } from '../components/layout/Navigation';
import TermsSection from '../components/TermsSection';
import { Footer } from '../components/layout/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1 pt-24">
        <TermsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
