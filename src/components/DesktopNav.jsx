import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  toggleOff,
  toggleOn,
  setCurrentModule,
  setActiveModuleStyles,
} from "../state/state";
import { menuItems } from "../utils/menuItems";
import { MdMenu as Toggle } from "react-icons/md";

const DesktopNav = () => {
  const dispatch = useDispatch();
  const currentModule = useSelector((state) => state.currentModule);
  const isOpen = useSelector((state) => state.isOpen);
  const currentGestionTab = useSelector((state) => state.currentGestionTab);
  const currentCarteraTab = useSelector((state) => state.currentCarteraTab);
  const activeModuleStyles = useSelector((state) => state.activeModuleStyles);

  const tabMapping = {
    dashboard: "",
    gestion: `/${currentGestionTab}`,
    cartera: `/${currentCarteraTab}`,
    facturacion: "",
    // add more modules and their corresponding tabs as needed
  };

  const handleToggle = () =>
    isOpen ? dispatch(toggleOff()) : dispatch(toggleOn());
  const handleClick = (module) => {
    dispatch(setCurrentModule(module));
  };

  useEffect(() => {
    dispatch(
      setActiveModuleStyles(
        `flex gap-2 lg:w-full px-5 py-3 rounded-md transition ease-in-out delay-50 bg-dark text-light`
      )
    );
  }, [currentModule]);

  return (
    <div
      className={`sidebar bg-lightblue px-5 py-10 ${
        isOpen ? "lg:w-[20%]" : "lg:w-[6%]"
      }`}
    >
      <div className={!isOpen && `flex flex-col items-center`}>
        <Toggle className="text-2xl cursor-pointer" onClick={handleToggle} />
        <div className="nav-links flex flex-col gap-5 items-center pt-10 h-full">
          {menuItems.map((item) => (
            <NavLink
              to={`/${item.name}${tabMapping[item.name]}`}
              className={
                currentModule == item.name
                  ? activeModuleStyles
                  : `flex gap-2 lg:w-full px-5 py-3 rounded-md text-[#000] transition ease-in-out delay-50 hover:bg-dark hover:text-light`
              }
              key={item.name}
              onClick={() => handleClick(item.name)}
            >
              <div className="text-[1.5rem]">{item.icon}</div>
              {isOpen && (
                <div className="text">
                  <p className="text-[0.9rem]">{item.label}</p>
                </div>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
