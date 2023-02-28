import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = ({ children }) => {
  return (
    <div>
      <div className="sidebar">
        <h1>Logo</h1>
      </div>
      <NavLink to="/">Gestion</NavLink>
      <main>{children}</main>
    </div>
  );
};
export default SideBar;
