import { ITeam } from "@/data/constants";
import { MdEmail } from "react-icons/md";

type TeamCardProps = {
  data: ITeam;
};

const TeamCard = ({ data }: TeamCardProps) => {
  return (
    <div className="bg-white p-7 rounded-lg border border-grey-10 shadow-shadow2 lg:p-10 ">
      <div className="flex items-center gap-2 ">
        <div className="w-[60px] h-[60px]  bg-orange-97 rounded-lg">
          <img src={data.imageUrl} alt={data.username} />
        </div>
        <h3 className="text-xl font-extrabold font-Raleway">
          {data.username}{" "}
        </h3>
        <button className="w-12 h-12 flex justify-center items-center bg-orange-90 border border-grey-10 rounded-md ms-auto">
          <MdEmail className="text-xl" />
        </button>
      </div>
      <div className="p-5 bg-orange-97 border border-grey-10 rounded-md mt-5">
        <h4 className="text-xl text-grey-20 font-semibold">
          Qualification: {data.qualification}{" "}
        </h4>
        <p className="text-grey-20 mt-2">{data.desc}</p>
      </div>
    </div>
  );
};

export default TeamCard;
