import { NavLink } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const Tabs = () => {
  const isNotAPhone = useMediaQuery("(min-width: 1000px)");
  return (
    isNotAPhone && (
      <NavLink to="/" className="title">
        pharma.pa
      </NavLink>
    )
  );
};

export default Tabs;
