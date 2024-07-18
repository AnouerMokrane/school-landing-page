import { ILinkData } from "@/data/constants";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type LinkCardProps = {
  data: ILinkData;
};

const LinkCard = ({ data }: LinkCardProps) => {
  return (
    <div className="py-8 px-10 text-center border border-grey-10 bg-white rounded-md shadow-shadow2 ">
      <h3 className="text-[28px] font-bold">{data.title}</h3>
      <div className="relative flex gap-3 w-[272px] h-10 mx-auto mt-6">
        <span className="relative w-9 h-3 bg-orange-80 before:absolute before:left-0 before:top-[3px] before:bg-grey-10 before:w-[80%] before:h-0.5"></span>
        <span className="relative w-9 h-3 bg-orange-80 before:absolute before:left-0 before:top-[3px] before:bg-grey-10 before:w-[80%] before:h-0.5"></span>
        <span className="relative w-9 h-3 bg-orange-80 before:absolute before:left-0 before:top-[3px] before:bg-grey-10 before:w-[80%] before:h-0.5"></span>
        <span className="relative w-9 h-3 bg-orange-80 before:absolute before:left-0 before:top-[3px] before:bg-grey-10 before:w-[80%] before:h-0.5"></span>
        <span className="relative w-9 h-3 bg-orange-80 before:absolute before:left-0 before:top-[3px] before:bg-grey-10 before:w-[80%] before:h-0.5"></span>
        <span className="relative w-9 h-3 bg-orange-80 before:absolute before:left-0 before:top-[3px] before:bg-grey-10 before:w-[80%] before:h-0.5"></span>
        <div className="w-5 h-5 absolute -top-1 -left-2 bg-white border-2 border-grey-10 rounded-full"></div>
        <div className="w-5 h-5 absolute -top-1 -right-2 bg-white border-2 border-grey-10 rounded-full"></div>
      </div>
      <p className="font-medium text-grey-30 mt-5">{data.desc}</p>
      <Link
        to={data.path}
        className="group w-full flex justify-center items-center gap-2 p-4 font-medium bg-orange-90 border-2 border-grey-10 rounded-sm shadow-shadow2 mt-6"
      >
        Learn More
        <ArrowRight className="-mb-1 group-hover:animate-move-right" />
      </Link>
    </div>
  );
};

export default LinkCard;
