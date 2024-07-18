const HeroSection = () => {
  return (
    <section className="flex flex-col gap-7 lg:flex-row lg:items-center">
      <div className="flex-1 b">
        <img
          width={620}
          height={620}
          src="./assets/hero-image.png"
          alt=""
          className="w-full object-contain"
        />
      </div>
      <div className="flex-1 shrink text-center md:text-left">
        <p className=" w-fit font-medium pb-2 border-b-2 border-grey-10 mx-auto md:me-auto md:mx-0">
          Welcome to Little Learners Academy
        </p>
        <h1 className=" text-[30px] font-Raleway font-extrabold mt-3">
          Where Young Minds Blossom and{" "}
          <span className=" text-orange-65">Dreams Take Flight.</span>
        </h1>
        <p className=" font-medium mt-3">
          Our kinder garden school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a lifetime. Join
          us as we embark on an exciting educational journey together!
        </p>
        <div className="flex flex-col bg-orange-95 border-2 border-grey-10 px-6 py-12 mt-6 rounded-lg shadow-shadow1 ring-slate-950 md:flex-row md:py-4 md:gap-9">
          <div className="pb-3 md:p-0">
            <span className="text-[34px] font-extrabold">+7000</span>
            <p className="font-medium">Students Passed Out</p>
          </div>
          <div className="py-6 border-y-2 border-grey-10 md:p-0 md:border-0">
            <span className="text-[34px] font-extrabold">+37</span>
            <p className="font-medium">Awards & Recognitions</p>
          </div>
          <div className="pt-2 md:p-0">
            <span className="text-[34px] font-extrabold">+15</span>
            <p className="font-medium">Expercience Educators</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
