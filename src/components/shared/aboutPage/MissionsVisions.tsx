import HeadingSection from "../HeadingSection";

const MissionsVisions = () => {
  return (
    <section id="mission" className="mt-20 md:mt-28">
      <HeadingSection
        topText="Mission & vision"
        mainHeading=" Our Mission & Visions"
        description="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
      />
      <div className="grid md:grid-cols-2 gap-7  mt-10 md:gap-12">
        <div className="p-10 border-2 border-grey-10 rounded-lg shadow-shadow2 bg-white md:p-12">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-3xl font-bold md:text-[38px]">Mission</h3>
            <div className="flex-shrink-0 w-[50px] h-[50px] mr-3 md:w-[60px] md:h-[60px]">
              <img src="./assets/mission-icon.png" alt="Mission Icon" />
            </div>
          </div>
          <p className=" text-grey-20 font-medium mt-10 md:mt-12">
            At Little Learners Academy, our mission is to inspire a passion for
            learning and empower young minds to become confident, compassionate,
            and creative individuals. We strive to create a safe and inclusive
            space where children thrive academically, socially, and emotionally,
            setting the stage for a successful educational journey.
          </p>
        </div>
        <div className="p-10 border-2 border-grey-10 rounded-lg shadow-shadow2 bg-white md:p-12">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-3xl font-bold md:text-[38px]">Vision</h3>
            <div className="flex-shrink-0 w-[50px] h-[50px] mr-3 md:w-[60px] md:h-[60px]">
              <img src="./assets/vission-icon.png" alt="Vision Icon" />
            </div>
          </div>
          <p className=" text-grey-20 font-medium mt-10 md:mt-12">
            Our vision is to be a beacon of educational excellence, where
            children are encouraged to explore, discover, and express their
            unique talents. We aim to foster a generation of lifelong learners
            equipped with critical thinking, empathy, and a deep appreciation
            for diversity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionsVisions;
