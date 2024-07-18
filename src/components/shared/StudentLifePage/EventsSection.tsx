import { eventsData } from "@/data/constants";
import HeadingSection from "../HeadingSection";

const EventsSection = () => {
  return (
    <section className="mt-20 md:mt-28">
      <HeadingSection
        topText="Our Features"
        mainHeading="Events & Celebrations"
        description="At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include"
      />
      <div className="grid gap-10 mt-24 md:grid-cols-2 lg:grid-cols-3 ">
        {eventsData.map((data, index) => (
          <div
            key={index}
            className="relative p-8 text-center bg-white border border-grey-10 shadow-shadow2 rounded-md overflow-hidden"
          >
            <div className="absolute top-[25%] -left-4 w-[110%] h-24 bg-orange-95 border border-grey-10" />
            <div className="relative flex justify-center">
              <img src={data.imgUrl} alt={data.title} />
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-Raleway font-bold text-grey-10">
                {data.title}{" "}
              </h3>
              <p className="text-grey-30 font-medium mt-2">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
