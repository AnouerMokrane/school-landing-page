import HeadingSection from "../HeadingSection";
import { studentSupportData } from "@/data/constants";
import FeatureCard from "../FeatureCard";

const StudentSupport = () => {
  return (
    <section className="mt-20 md:mt-28">
      <HeadingSection
        topText="Our Achievements"
        mainHeading="Student Support"
        description="At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include"
      />
      <div className="grid gap-16 mt-24 md:grid-cols-2 lg:grid-cols-3 md:gap-10 md:gap-y-16">
        {studentSupportData.map((data, index) => (
          <FeatureCard
            key={index}
            icon={data.icon}
            heading={data.heading}
            text={data.text}
          />
        ))}
      </div>
    </section>
  );
};

export default StudentSupport;
