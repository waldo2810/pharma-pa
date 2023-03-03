import { useParams } from "react-router-dom";

const GestionContent = ({ tabToRender }) => {
  const { tab } = useParams();
  return { tab };
};

export default GestionContent;
