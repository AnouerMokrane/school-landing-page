import Accordion from "../Accordion";
import HeadingSection from "../HeadingSection";

const FAQSection = () => {
  return (
    <section id="faq" className="mt-20 md:mt-28">
      <HeadingSection
        topText="Solutions For The Doubts"
        mainHeading="Frequently Asked Questions"
        description="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
      />

      <div className="grid md:grid-cols-2 gap-4 mt-20">
        <Accordion />
      </div>
    </section>
  );
};

export default FAQSection;
