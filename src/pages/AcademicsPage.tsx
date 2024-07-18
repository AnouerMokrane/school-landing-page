import Gallery from "@/components/shared/academicsPage/Gallery";
import OurFeatures from "@/components/shared/academicsPage/OurFeatures";
import OverviewSection from "@/components/shared/OverviewSection";
import LearingPathSection from "@/components/shared/academicsPage/LearingPathSection";

const AcademicsPage = () => {
  return (
    <>
      <OverviewSection
        smallText="Academics"
        heading="Nurturing Young Minds for Success"
        text="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."
      />
      <OurFeatures />
      <LearingPathSection />
      <Gallery />
    </>
  );
};

export default AcademicsPage;
