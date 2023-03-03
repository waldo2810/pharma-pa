import Button from "../components/Button";
import Input from "../components/Input";

import { medicamentoFormInfo } from "../utils/form-info/gestion-form-info/medicamentoFormInfo";
import { useMediaQuery } from "@mui/material";

const GestionContent = ({ tab }) => {
  const isNotAPhone = useMediaQuery("(min-width: 1000px)");

  return (
    <div>
      <h2 className="text-2xl font-medium p-5">Agregar {tab}</h2>
      <div className="md:border md:border-lightblue md:mx-5 md:rounded-md md:max-w-[80%]">
        <form>
          <div>
            {medicamentoFormInfo.map(({ title, description, type }, index) => (
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