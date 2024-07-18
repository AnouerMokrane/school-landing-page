import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const NotificationBar = () => {
  return (
    <div className="relative py-2 px-4 mx-4 border-2 border-grey-15 bg-orange-80 rounded-md overflow-hidden md:mx-12">
      <Link
        to={"/contact"}
        className="flex justify-center items-center gap-2 text-sm font-medium relative z-50 md:text-base "
      >
        <span>Admission is Open, Grab your seat now</span>
        <ArrowRight />
      </Link>

      <img
        src="./assets/header-shape1.png"
        alt=""
        className=" absolute -bottom-2 -right-2"
      />

      <img
        src="./assets/header-shape2.png"
        alt=""
        className="w-10 absolute left-0 -top-1"
      />
    </div>
  );
};

export default NotificationBar;
