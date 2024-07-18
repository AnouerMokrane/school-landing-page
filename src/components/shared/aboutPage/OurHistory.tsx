import { timelineData } from "@/data/constants";
import HeadingSection from "../HeadingSection";

const OurHistory = () => {
  return (
    <section id="history" className="mt-20 md:mt-28 ">
      <HeadingSection
        topText="Our Progressive Journey"
        mainHeading="Our History"
        description="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
      />

      <div className="relative flex flex-col gap-12 bg-white py-12 px-4 border border-grey-10 shadow-shadow2 mt-12 rounded-md overflow-hidden lg:px-[100px] lg:py-28 lg:mt-20">
        <div className=" absolute top-[108px] left-5 w-0.5 h-[73%] bg-grey-10 shadow-[0px_2px_0px_5px_#FFBE99] lg:left-[85px] lg:h-[62%] lg:top-[180px]" />

        {timelineData.map((event, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row lg:gap-10 pl-10 pr-5 "
          >
            <div className="relative w-52 flex items-center gap-5 border-2 border-grey-10 px-6 py-5 rounded-lg shadow-shadow2 md:px-8 lg:min-w-64 ">
              <img
                src="./assets/history-shape.png"
                alt=""
                className="w-12 lg:w-16 "
              />

              <h3 className="text-[38px] font-bold font-Raleway">
                {event.year}
              </h3>

              <div className=" absolute -left-12 w-12 h-0.5 bg-grey-10 rounded-full shadow-[5px_-0px_0px_5px_#FFBE99] lg:w-16 lg:-left-16">
                <div className=" absolute -top-2.5 w-5 h-5 bg-white border-2 border-grey-10 rounded-full" />
                <div className=" absolute -top-2.5 -right-2.5 w-5 h-5 bg-white border-2 border-grey-10 rounded-full" />
              </div>
            </div>
            <div className="mt-7 lg:m-0">
              <h3 className="text-[22px] font-bold ">{event.title}</h3>
              <p className="mt-4 text-grey-20">{event.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurHistory;
