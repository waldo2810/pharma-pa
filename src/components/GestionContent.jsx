import { useEffect, useState } from "react";

import Button from "../components/Button";
import Input from "../components/Input";

import {
  medicamentosFormInfo,
  personasFormInfo,
  bodegaFormInfo,
  seccionesFormInfo,
  correosFormInfo,
} from "../utils/form-info/gestionFormInfo";

import { useMediaQuery } from "@mui/material";

const GestionContent = ({ tab }) => {
  const [formInfo, setFormInfo] = useState([]);
  const isNotAPhone = useMediaQuery("(min-width: 1000px)");

  useEffect(() => {
    if (tab.toLowerCase() === "medicamentos") {
      setFormInfo(medicamentosFormInfo);
    } else if (tab.toLowerCase() === "personas") {
      setFormInfo(personasFormInfo);
    } else if (tab.toLowerCase() === "bodega") {
      setFormInfo(bodegaFormInfo);
    } else if (tab.toLowerCase() === "secciones") {
      setFormInfo(seccionesFormInfo);
    } else if (tab.toLowerCase() === "correos") {
      setFormInfo(correosFormInfo);
    }
  }, [formInfo]);

  return (
    <div className="pb-20">
      <h2 className="text-2xl font-medium p-5">Agregar {tab}</h2>
      <div className="md:border md:border-lightblue md:mx-5 md:rounded-md md:max-w-[80%]">
        <form>
          <div>
            {formInfo.map(({ title, description, type }, index) => (
              <Input
                type={type}
                key={index}
                title={title}
                description={description}
              />
            ))}
          </div>
          <div
            className={`${
              !isNotAPhone && "fixed"
            } bottom-0 flex justify-end items-center p-5 w-full h-12 bg-lightblue`}
          >
            <Button text="Guardar" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default GestionContent;
