import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentTab } from "../state/state";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

import { gestionTabsItems } from "../utils/tabs-items/gestionTabsItems";

const Tabs = () => {
  const isNotAPhone = useMediaQuery("(min-width: 1000px)");
  const [toggleState, setToggleState] = useState(1);
  const currentTab = useSelector((state) => state.currentTab);
  const dispatch = useDispatch();

  const toggleTab = (tab) => {
    dispatch(setCurrentTab({ currentTab: tab }));
    console.log(tab);
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

      {/* <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Content 1</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Tabs;
