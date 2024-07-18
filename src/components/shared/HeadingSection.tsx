interface HeadingSectionProps {
  topText: string;
  mainHeading: string;
  description: string;
}

const HeadingSection = ({
  topText,
  mainHeading,
  description,
}: HeadingSectionProps) => {
  return (
    <div className=" max-w-4xl mx-auto text-center">
      <div className="w-fit text-sm font-medium bg-white border-2 border-grey-10 p-2 px-3 mx-auto rounded-md">
        {topText}
      </div>
      <h2 className=" text-[38px] font-Raleway font-bold mt-2">
        {mainHeading}{" "}
      </h2>
      <p className="font-medium mt-1">{description}</p>
    </div>
  );
};

export default HeadingSection;
