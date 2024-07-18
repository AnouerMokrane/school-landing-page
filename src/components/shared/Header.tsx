import { AlignRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import { useState } from "react";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [opensideBar, setOpenSideBar] = useState(false);
  return (
    <header className="relative flex justify-between items-center h-16 mx-4 border-2 border-grey-15 rounded-md mt-2  md:mx-12">
      <div className="bg-orange-65 h-full flex items-center px-4">
        <img src="/assets/Logo.png" alt="" className="w-36" />
      </div>
      <nav className="hidden  lg:block">
        <ul className="flex ">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `px-4 py-5 border-r-2 border-l-2 border-grey-10 duration-300 hover:bg-orange-95 ${
                  isActive && "bg-orange-95"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about-us"}
              className={({ isActive }) =>
                `px-4 py-5 border-r-2 border-l-2 border-grey-10 duration-300 hover:bg-orange-95 ${
                  isActive && "bg-orange-95"
                }`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/academics"}
              className={({ isActive }) =>
                `px-4 py-5 border-r-2 border-l-2 border-grey-10 duration-300 hover:bg-orange-95 ${
                  isActive && "bg-orange-95"
                }`
              }
            >
              Academics
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/admissions"}
              className={({ isActive }) =>
                `px-4 py-5 border-r-2 border-l-2 border-grey-10 duration-300 hover:bg-orange-95 ${
                  isActive && "bg-orange-95"
                }`
              }
            >
              Admissions
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/student-life"}
              className={({ isActive }) =>
                `px-4 py-5 border-r-2 border-l-2 border-grey-10 duration-300 hover:bg-orange-95 ${
                  isActive && "bg-orange-95"
                }`
              }
            >
              Students Life
            </NavLink>
          </li>
          <li>
            <Link to={"/contact"} className="px-4 py-5 bg-orange-70">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className="bg-orange-95 border-l-2 border-grey-10 py-[18px] px-6 lg:hidden overflow-hidden"
        onClick={() => {
          setOpenSideBar(!opensideBar);
        }}
      >
        {opensideBar ? <MdClose className="text-2xl" /> : <AlignRight />}
      </button>
      <SidebarMenu opensideBar={opensideBar} />
    </header>
  );
};

export default Header;
