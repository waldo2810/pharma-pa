import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleOff,
  toggleOn,
  setCurrentModule,
  setActiveModuleStyles,
} from "../state/state";
import { NavLink } from "react-router-dom";
import { menuItems } from "../utils/menuItems";

import { MdMenu as Toggle } from "react-icons/md";

const MobileNav = () => {
  const isOpen = useSelector((state) => state.isOpen);
  const currentTab = useSelector((state) => state.currentTab);
  const currentModule = useSelector((state) => state.currentModule);
  const activeModuleStyles = useSelector((state) => state.activeModuleStyles);
  const dispatch = useDispatch();

  const handleToggle = () =>
    isOpen ? dispatch(toggleOff()) : dispatch(toggleOn());

  const handleClick = (module) => {
    dispatch(setCurrentModule(module));
  };

  useEffect(() => {
    dispatch(
      setActiveModuleStyles(
        `flex gap-2 items-center w-full lg:w-[70%] px-5 py-3 rounded-md transition ease-in-out delay-50 bg-dark text-light`
      )
    );
  }, [currentModule]);

  return (
    // MOBILE NAV
    <div className="sidebar bg-lightblue p-5">
      <div className="flex items-center justify-between">
        <Toggle className="text-4xl cursor-pointer" onClick={handleToggle} />
        <NavLink to="/" className="title">
          pharma.pa
        </NavLink>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-2 items-center justify-center pt-5">
          {menuItems.map((item, index) => (
            <NavLink
              to={`/${item.name.toLowerCase()}/${
                item.name === "Gestion" ? `${currentTab}` : ""
              }`}
              className={
                currentModule == item.name
                  ? activeModuleStyles
                  : `flex gap-2 items-center w-full lg:w-[70%] px-5 py-3 rounded-md text-[#000] transition ease-in-out delay-50 hover:bg-dark hover:text-light`
              }
              // className={
              //   currentModule == item.name
              //     ? activeModuleStyles
              //     : `flex gap-2 items-center lg:w-full px-5 py-3 rounded-md text-[#000] transition ease-in-out delay-50
              // hover:bg-dark hover:text-light ${!isOpen && "justify-center"}`}
              key={index}
              onClick={() => handleClick(item.name)}
            >
              {item.icon}
              <p className="text-[0.9rem]">{item.name}</p>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNav;
