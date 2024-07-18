import { learningPathData } from "@/data/constants";
import HeadingSection from "../HeadingSection";

const LearingPathSection = () => {
  return (
    <section className="mt-20 md:mt-28">
      <HeadingSection
        topText="Our Features"
        mainHeading="What Students Learn"
        description="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
      />

      <div className="grid gap-10 mt-12 md:grid-cols-2 lg:grid-cols-3">
        {learningPathData.map((data, index) => (
          <div
            key={index}
            className="relative bg-white p-7 border border-grey-10 rounded-md shadow-shadow2 overflow-hidden"
          >
            <div className="w-[93px] h-[238px] absolute -top-1 left-1/2 -translate-x-1/2 bg-orange-95 border border-grey-10 rounded-b-lg" />
            <div className="relative flex justify-center w-72 h-48 z-10 mx-auto">
              <img src={data.imgUrl} alt={data.title} />
            </div>
            <div className="mt-5 text-center">
              <h3 className="text-xl font-bold">{data.title} </h3>
              <p className="text-grey-30 mt-2">{data.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearingPathSection;
