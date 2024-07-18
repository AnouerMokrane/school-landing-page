import FAQSection from "@/components/shared/homePage/FAQSection";
import OurBenefits from "@/components/shared/homePage/OurBenefits";
import Testimonials from "@/components/shared/homePage/Testimonials";
import HeroSection from "@/components/shared/homePage/HeroSection";
import PageLinksSection from "@/components/shared/homePage/PageLinksSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <OurBenefits />
      <Testimonials />
      <FAQSection />
      <PageLinksSection />
    </>
  );
};

export default HomePage;
