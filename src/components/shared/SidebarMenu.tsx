import { NavLink } from "react-router-dom";

type SidebarMenuProps = {
  opensideBar: boolean;
};

const SidebarMenu = ({ opensideBar }: SidebarMenuProps) => {
  return (
    <div
      className={`absolute top-full  mt-2 bg-white w-full border-2 border-grey-10 rounded-sm z-50 py-10 duration-300 ${
        opensideBar ? "left-0" : "left-[150%]"
      }`}
    >
      <ul className="flex flex-col gap-5">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `block w-full p-2 border-grey-10 duration-300 hover:bg-orange-95 ${
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
              `block w-full p-2 border-grey-10 duration-300 hover:bg-orange-95 ${
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
              ` block w-full p-2 border-grey-10 duration-300 hover:bg-orange-95 ${
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
              `block w-full p-2 border-grey-10 duration-300 hover:bg-orange-95 ${
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
              `block w-full p-2 border-grey-10 duration-300 hover:bg-orange-95 ${
                isActive && "bg-orange-95"
              }`
            }
          >
            Students Life
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              `block w-full p-2 border-grey-10 duration-300 hover:bg-orange-95 ${
                isActive && "bg-orange-95"
              }`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
