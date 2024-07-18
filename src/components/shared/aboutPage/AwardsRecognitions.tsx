import { achievementsData } from "@/data/constants";
import FeatureCard from "../FeatureCard";
import HeadingSection from "../HeadingSection";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";

const AwardsRecognitions = () => {
  return (
    <section id="awards" className="mt-20 md:mt-28">
      <HeadingSection
        topText="Our Achievements"
        mainHeading="Our Awards and Recognitions"
        description="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
      />
      <div className="slider-container mt-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="pt-10 pb-2">
            {achievementsData.map((data, index) => (
              <CarouselItem
                key={index}
                className=" basis-full pl-4 lg:pl-6 sm:basis-1/2 xl:basis-auto"
              >
                <FeatureCard
                  icon={data.icon}
                  heading={data.heading}
                  text={data.text}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-between items-center mt-8">
            <p className="font-medium ">{achievementsData.length} Award</p>
            <div className="space-x-4">
              <CarouselPrevious className=" w-12 h-12 rounded-md" />
              <CarouselNext className=" w-12 h-12 rounded-md" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default AwardsRecognitions;
