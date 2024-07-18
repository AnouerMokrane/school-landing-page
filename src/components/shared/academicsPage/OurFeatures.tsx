import { featuresData } from "@/data/constants";
import HeadingSection from "../HeadingSection";
import FeatureCard from "../FeatureCard";

const OurFeatures = () => {
  return (
    <section id="special-features" className="mt-20 md:mt-28">
      <HeadingSection
        topText="Our Features"
        mainHeading="Our Special Features"
        description="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
      />
      <div className="grid gap-16 mt-24 md:grid-cols-2 lg:grid-cols-3 md:gap-10 md:gap-y-16">
        {featuresData.map((data, index) => (
          <FeatureCard
            key={index}
            text={data.text}
            heading={data.heading}
            icon={data.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default OurFeatures;
