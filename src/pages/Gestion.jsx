import { useSelector } from "react-redux";
import GestionContent from "../components/GestionContent";

const Gestion = () => {
  const currentTab = useSelector((state) => state.currentTab);
  return <GestionContent tab={currentTab} />;
};

export default Gestion;
