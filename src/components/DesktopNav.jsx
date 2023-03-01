import { useDispatch, useSelector } from "react-redux";
import { toggleOff, toggleOn } from "../state/state";
import { NavLink } from "react-router-dom";
import { menuItems } from "../utils/menuItems";

import { MdMenu as Toggle } from "react-icons/md";

const DesktopNav = () => {
  const isOpen = useSelector((state) => state.isOpen);
  const dispatch = useDispatch();
  const handleToggle = () =>
    isOpen ? dispatch(toggleOff()) : dispatch(toggleOn());

  return (
    <div
      className={`sidebar bg-lightblue px-5 py-10 ${
        isOpen ? "lg:w-[20%]" : "lg:w-[6%]"
      }`}
    >
      <Toggle className="text-2xl cursor-pointer" onClick={handleToggle} />
      <div className="nav-links flex flex-col gap-5 items-center pt-10 h-full">
        {menuItems.map((item, index) => (
          <NavLink
            to={`/${item.name.toLowerCase()}`}
            className={`flex gap-2 items-center lg:w-full px-5 py-3 rounded-md text-[#000] transition ease-in-out delay-50
            hover:bg-dark hover:text-light
        ${!isOpen && "justify-center"}`}
            key={index}
          >
            <div className="icon">{item.icon}</div>
            {isOpen && (
              <div className="text">
                <p>{item.name}</p>
              </div>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default DesktopNav;
