type OverviewSectionProps = {
  smallText: string;
  heading: string;
  text: string;
};

const OverviewSection = ({
  smallText,
  heading,
  text,
}: OverviewSectionProps) => {
  return (
    <section className="relative flex border-2 border-grey-10 rounded-lg shadow-shadow2 p-10 bg-white md:p-20">
      <img
        src="./assets/overview-shape.png"
        alt=""
        className="absolute top-0 left-0 max-sm:w-[100px] "
      />
      <div className="flex flex-col justify-between items-center text-center lg:flex-row lg:text-left">
        <div className="flex-1">
          <div className="w-fit p-1.5 px-3 font-medium border-2 border-grey-10 bg-white rounded-md max-lg:mx-auto ">
            {smallText}{" "}
          </div>
          <h1 className="text-[28px] text-grey-10 font-bold md:text-[38px]">
            {heading}
          </h1>
        </div>
        <div className="flex-1 max-lg:mt-2">
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
