import AwardsRecognitions from "@/components/shared/aboutPage/AwardsRecognitions";
import MissionsVisions from "@/components/shared/aboutPage/MissionsVisions";
import OurHistory from "@/components/shared/aboutPage/OurHistory";
import TeamMembers from "@/components/shared/aboutPage/TeamMembers";
import OverviewSection from "@/components/shared/OverviewSection";

const AboutPage = () => {
  return (
    <>
      <OverviewSection
        smallText="Overview"
        heading="Welcome to Little Learners Academy"
        text="A leading kinder garden school dedicated to providing a nurturing
            and stimulating environment for young learners. With a commitment to
            excellence in early education, we believe in shaping curious minds
            and building a strong foundation for a lifelong love of learning.
            Our holistic approach fosters intellectual, social, emotional, and
            physical development, ensuring that each child reaches their full
            potential."
      />
      <MissionsVisions />
      <AwardsRecognitions />
      <OurHistory />
      <TeamMembers />
    </>
  );
};

export default AboutPage;
