import { Link } from "react-router-dom";

import Button from "../../components/Button";
import Input from "../../components/Input";

import { gestionFormInfo } from "../../utils/gestionFormInfo";
import { useMediaQuery } from "@mui/material";

const Gestion = () => {
  const isNotAPhone = useMediaQuery("(min-width: 1000px)");
  return <Link to="/gestion/medicamentos">Medicamentos</Link>;
};

export default Gestion;
