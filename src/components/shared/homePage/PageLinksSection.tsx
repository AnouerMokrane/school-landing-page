import { linksdata } from "@/data/constants";
import HeadingSection from "../HeadingSection";
import LinkCard from "../LinkCard";

const PageLinksSection = () => {
  return (
    <section className="px-0 mt-20 md:mt-28">
      <HeadingSection
        topText="Explore More"
        mainHeading="Navigate through our Pages"
        description="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
      />
      <div className="grid grid-cols-1 gap-10 mt-12 place-items-center md:grid-cols-2">
        {linksdata.map((data, index) => (
          <LinkCard key={index} data={data} />
        ))}
      </div>
    </section>
  );
};

export default PageLinksSection;
