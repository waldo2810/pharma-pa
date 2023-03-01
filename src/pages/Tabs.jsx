import useMediaQuery from "@mui/material/useMediaQuery";

const Tabs = () => {
  const isNotAPhone = useMediaQuery("(min-width: 1000px)");
  return isNotAPhone && <h2 className="title">pharma.pa</h2>;
};

export default Tabs;
