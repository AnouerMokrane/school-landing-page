import { benefitsCards } from "@/data/constants";
import FeatureCard from "../FeatureCard";
import HeadingSection from "../HeadingSection";

const OurBenefits = () => {
  return (
    <section id="featues" className="mt-20 text-center md:mt-28">
      <HeadingSection
        topText="Children Deserve Bright Future"
        mainHeading="OurBenefits"
        description="With a dedicated team of experienced educators, state-of-the-art
          facilities, and a comprehensive curriculum, we aim to lay a strong
          foundation for your child's future."
      />

      <div className="grid gap-14 mt-24 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 md:gap-10 md:gap-y-14">
        {benefitsCards.map((card, index) => (
          <FeatureCard
            key={index}
            icon={card.icon}
            heading={card.heading}
            text={card.text}
          />
        ))}
      </div>
    </section>
  );
};

export default OurBenefits;
