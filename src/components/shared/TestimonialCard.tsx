import { ITestimonial } from "@/data/constants";
import { FaStar } from "react-icons/fa6";

type TestimonialCardProps = {
  data: ITestimonial;
};

const TestimonialCard = ({ data }: TestimonialCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 text-center max-w-xs p-6 px-7 bg-white shadow-shadow2 border border-grey-10 rounded-md">
      <div className=" space-y-2">
        <div className="w-12 h-12 rounded-full border border-grey-10 mx-auto">
          <img src={data.image} alt={data.username} />
        </div>
        <h3 className="text-xl font-semibold">{data.username}</h3>
      </div>
      <div className="flex gap-1 ">
        {Array.from({ length: data.rate }).map((_, index) => (
          <FaStar key={index} className="text-orange-65" />
        ))}
      </div>
      <p className=" font-medium">{data.text}</p>
    </div>
  );
};

export default TestimonialCard;
