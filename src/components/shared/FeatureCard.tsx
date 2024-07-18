import { CardProps } from "@/data/constants";

const FeatureCard = ({ icon, heading, text }: CardProps) => {
  return (
    <div className="  h-full bg-white p-4 pb-6 px-10 text-left border-2 border-grey-10 rounded-md shadow-shadow2 md:max-w-[400px]">
      <div className="-mt-11 -ml-4 flex justify-between items-center w-[56px] h-[56px] bg-orange-90 border-2 border-grey-10 rounded-md">
        {icon}
      </div>
      <h3 className="text-[22px] font-bold font-Raleway mt-5 mb-3">
        {heading}
      </h3>
      <p className=" text-grey-30 font-medium">{text}</p>
    </div>
  );
};

export default FeatureCard;
