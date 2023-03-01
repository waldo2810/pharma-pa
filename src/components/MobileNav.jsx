import { useDispatch, useSelector } from "react-redux";
import { toggleOff, toggleOn } from "../state/state";
import { NavLink } from "react-router-dom";

import { MdMenu as Toggle } from "react-icons/md";
import { MdManageSearch as GestionIcon } from "react-icons/md";
import { MdOutlineAccountBalanceWallet as CarteraIcon } from "react-icons/md";
import { MdOutlineReceiptLong as FacturacionIcon } from "react-icons/md";

const MobileNav = () => {
  const menuItems = [
    { icon: <GestionIcon className="icon" />, name: "Gestion" },
    { icon: <CarteraIcon className="icon" />, name: "Cartera" },
    { icon: <FacturacionIcon className="icon" />, name: "Facturacion" },
  ];
  const isOpen = useSelector((state) => state.isOpen);
  const dispatch = useDispatch();
  const handleToggle = () =>
    isOpen ? dispatch(toggleOff()) : dispatch(toggleOn());

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
  );
};

export default MobileNav;
