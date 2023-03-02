import { NavLink, Link, useParams } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { gestionTabsItems } from "../utils/gestionTabsItems";

const Tabs = () => {
  const isNotAPhone = useMediaQuery("(min-width: 1000px)");

  return (
    <div>
      <NavLink to="/" className="title">
        {isNotAPhone && <div class="px-6">pharma.pa</div>}
      </NavLink>

      <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
        <ul class="flex flex-wrap -mb-px">
          <li class="mr-2">
            {gestionTabsItems.map((item) => (
              <Link
                to="#"
                className="inline-block p-4 hover:border-b-2 border-transparent hover:border-black px-10"
              >
                {item}
              </Link>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
