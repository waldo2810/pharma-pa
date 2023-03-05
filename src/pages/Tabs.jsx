import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentTab } from "../state/state";
import { Link, useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

import {
  gestionTabsItems,
  carteraTabsItems,
} from "../utils/tabs-items/tabItems";

const Tabs = () => {
  const isNotAPhone = useMediaQuery("(min-width: 1000px)");
  const currentTab = useSelector((state) => state.currentTab);
  const currentModule = useSelector((state) => state.currentModule);
  const [tabItems, setTabsItems] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleTab = (tab) => {
    dispatch(setCurrentTab({ currentTab: tab }));
    navigate(`gestion/${currentTab.toLowerCase()}`);
  };

  useEffect(() => {
    if (currentModule === "Gestion") {
      setTabsItems(gestionTabsItems);
    } else if (currentModule === "Cartera") {
      setTabsItems(carteraTabsItems);
    }
  }, [currentModule]);

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
          {tabItems.map((item) => (
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
