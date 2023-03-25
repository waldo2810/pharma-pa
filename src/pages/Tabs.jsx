import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentGestionTab, setCurrentCarteraTab } from "../state/state";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

import {
  gestionTabsItems,
  carteraTabsItems,
} from "../utils/tabs-items/tabItems";

import _ from "lodash";

const Tabs = () => {
  const isNotAPhone = useMediaQuery("(min-width: 1000px)");
  const currentModule = useSelector((state) => state.currentModule);
  const [tabItems, setTabsItems] = useState([]);
  const [currentTab, setCurrentTab] = useState("");
  const dispatch = useDispatch();

  const toggleTab = (tab) => {
    if (currentModule === "gestion")
      dispatch(setCurrentGestionTab({ currentGestionTab: tab }));
    if (currentModule === "cartera")
      dispatch(setCurrentCarteraTab({ currentCarteraTab: tab }));
    setCurrentTab(tab);
  };

  useEffect(() => {
    if (currentModule === "gestion") {
      setTabsItems(gestionTabsItems);
    } else if (currentModule === "cartera") {
      setTabsItems(carteraTabsItems);
    }
  });

  return (
    <div className={isNotAPhone && `mt-10 mb-5`}>
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
            <Link
              key={item}
              to={`${currentModule}/${item}`}
              className={currentTab === item ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(item)}
            >
              {_.startCase(item)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
