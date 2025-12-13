import PartnerNavigation from "@/components/layout/PartnerNavigation";
import PartnerHeroSection from "@/components/sections/partner/PartnerHeroSection";
import PartnerIdeasSection from "@/components/sections/partner/PartnerIdeasSection";
import PartnerHowItWorksSection from "@/components/sections/partner/PartnerHowItWorksSection";
import PartnerValueSection from "@/components/sections/partner/PartnerValueSection";
import PartnerCTASection from "@/components/sections/partner/PartnerCTASection";
import PartnerFooter from "@/components/layout/PartnerFooter";

const Partner = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <PartnerNavigation />
      <main>
        <PartnerHeroSection />
        <PartnerIdeasSection />
        <PartnerHowItWorksSection />
        <PartnerValueSection />
        <PartnerCTASection />
      </main>
      <PartnerFooter />
    </div>
  );
};

export default Partner;
