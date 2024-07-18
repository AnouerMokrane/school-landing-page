import { testimonialsData } from "@/data/constants";
import HeadingSection from "../HeadingSection";
import TestimonialCard from "../TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";

const Testimonials = () => {
  return (
    <section id="testimonials" className="mt-20 md:mt-28">
      <HeadingSection
        topText="Their Happy Words"
        mainHeading="Our Testimonials"
        description="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
      />
      <div className="relative mt-16 px-3 md:px-28">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="p-2">
            {testimonialsData.map((data, index) => (
              <CarouselItem key={index} className=" basis-auto">
                <TestimonialCard data={data} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-6">
            <CarouselPrevious className=" w-12 h-12 rounded-md" />
            <CarouselNext className=" w-12 h-12 rounded-md" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
