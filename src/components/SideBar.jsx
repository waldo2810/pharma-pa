import { useState } from "react";
import { NavLink } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import Tabs from "../pages/Tabs";

import { MdManageSearch as GestionIcon } from "react-icons/md";
import { MdOutlineAccountBalanceWallet as CarteraIcon } from "react-icons/md";
import { MdOutlineReceiptLong as FacturacionIcon } from "react-icons/md";
import { MdMenu as Toggle } from "react-icons/md";

const SideBar = ({ children }) => {
  const menuItems = [
    { icon: <GestionIcon className="text-3xl" />, name: "Gestion" },
    { icon: <CarteraIcon className="text-3xl" />, name: "Cartera" },
    { icon: <FacturacionIcon className="text-3xl" />, name: "Facturacion" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  const isNotAPhone = useMediaQuery("(min-width: 1000px)");
  return (
    <div className={`container h-screen w-full ${isNotAPhone && "flex"}`}>
      {isNotAPhone ? (
        <div
          className={`sidebar bg-lightblue px-5 py-10 transition ease-in-out delay-75${
            isOpen ? "lg:w-[20%]" : "lg:w-[8%]"
          }`}
        >
          <Toggle className="text-4xl cursor-pointer" onClick={handleToggle} />
          <div className="nav-links flex flex-col gap-5 items-center justify-center h-full">
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
      ) : (
        // MOBILE NAV
        <div className="bg-lightblue p-5 transition ease-in-out delay-75">
          <div className="flex items-center justify-between">
            <Toggle
              className="text-4xl cursor-pointer"
              onClick={handleToggle}
            />
            <NavLink to="/" className="title">
              pharma.pa
            </NavLink>
          </div>
          {isOpen && (
            <div className="flex flex-col gap-5 items-center justify-center pt-5">
              {menuItems.map((item, index) => (
                <NavLink
                  to={`/${item.name.toLowerCase()}`}
                  className="flex gap-2 items-center w-full lg:w-[70%] px-5 py-3 rounded-md text-[#000] transition ease-in-out delay-50 hover:bg-dark hover:text-light"
                  key={index}
                >
                  {item.icon}
                  <p>{item.name}</p>
                </NavLink>
              ))}
            </div>
          )}
        </div>
      )}
      <main className="w-full">
        <Tabs />
        {children}
      </main>
    </div>
  );
};
export default SideBar;
