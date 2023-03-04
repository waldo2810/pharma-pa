import { useSelector, useDispatch } from "react-redux";
import { setCurrentTab } from "../state/state";
import { Link, useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

import { gestionTabsItems } from "../utils/tabs-items/gestionTabsItems";

const Tabs = () => {
  const isNotAPhone = useMediaQuery("(min-width: 1000px)");
  const currentTab = useSelector((state) => state.currentTab);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleTab = (tab) => {
    dispatch(setCurrentTab({ currentTab: tab }));
    navigate(`gestion/${currentTab.toLowerCase()}`);
  };

  return (
    <div className={isNotAPhone && `my-10`}>
      {isNotAPhone && (
        <div className="px-5">
          <Link to="/" className="title">
            pharma.pa
          </Link>
        </div>
      )}
      <div className={`border-b border-dark ${isNotAPhone && "pt-3"}`}>
        <div className="flex gap-3 overflow-auto no-scrollbar text-sm font-medium">
          {gestionTabsItems.map((item) => (
            <button
              key={item}
              className={currentTab == item ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
