import Table from "../../components/Table";

const CarteraContent = ({ tab }) => {
  return (
    <div className="pb-20">
      <div className="mx-auto w-[90%]">
        <Table title={tab} />
      </div>
    </div>
  );
};

export default CarteraContent;
