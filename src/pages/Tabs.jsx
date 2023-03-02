import { NavLink, Link, useParams } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { gestionTabsItems } from "../utils/gestionTabsItems";

const Tabs = () => {
  const isNotAPhone = useMediaQuery("(min-width: 1000px)");

  return (
    <div className={isNotAPhone && `my-10`}>
      <NavLink to="/" className="title">
        {isNotAPhone && <div className="px-5">pharma.pa</div>}
      </NavLink>

      <div
        className={`text-sm font-medium border-b border-dark ${
          isNotAPhone && "pt-3"
        }`}
      >
        <div className="flex gap-2 overflow-auto no-scrollbar">
          {gestionTabsItems.map((item) => (
            <Link
              to="#"
              className="inline-block p-4 hover:border-b-2 border-transparent hover:border-accent"
              key={item}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
