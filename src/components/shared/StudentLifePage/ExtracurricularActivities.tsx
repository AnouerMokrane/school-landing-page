import { extracurricularActivities } from "@/data/constants";
import HeadingSection from "../HeadingSection";
import FeatureCard from "../FeatureCard";

const ExtracurricularActivities = () => {
  return (
    <section className="mt-20 md:mt-28">
      <HeadingSection
        topText="Our Featues"
        mainHeading="Extracurricular Activities"
        description="At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including"
      />
      <div className="grid gap-16 mt-24 md:grid-cols-2 lg:grid-cols-3 md:gap-10 md:gap-y-16">
        {extracurricularActivities.map((data, index) => (
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

export default ExtracurricularActivities;
