import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowStorylandWorksSection } from "@/components/sections/HowStorylandWorksSection";
import { LanguagesSection } from "@/components/sections/LanguagesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { BackToTop } from "@/components/ui/BackToTop";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ExitIntentModal } from "@/components/ui/ExitIntentModal";
import { SEOHead } from "@/components/seo/SEOHead";

const Index = () => {
  return (
    <main id="main-content" className="min-h-screen overflow-x-hidden bg-background">
      <SEOHead
        title="Storyland - Be Part of Their Story | Personalized Family Stories"
        description="Create magical personalized stories with your own voice. Storyland brings families closer through AI-powered storytelling. Safe, private, and ad-free."
        canonicalUrl="https://storylandapp.ai/"
      />
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <LanguagesSection />
      <div id="how-it-works">
        <HowStorylandWorksSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="why-storyland">
        <TestimonialsSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <CTASection />
      <Footer />
      <BackToTop />
      <ExitIntentModal />
    </main>
  );
};

export default Index;
