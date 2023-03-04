import useMediaQuery from "@mui/material/useMediaQuery";

import Tabs from "../pages/Tabs";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const SideBar = ({ children }) => {
  const isNotAPhone = useMediaQuery("(min-width: 1000px)");
  return (
    <div className={`h-full ${isNotAPhone && "flex"}`}>
      {isNotAPhone ? <DesktopNav /> : <MobileNav />}
      <main className="w-full">
        <Tabs />
        {children}
      </main>
    </div>
  );
};
export default SideBar;
