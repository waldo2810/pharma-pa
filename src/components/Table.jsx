import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";

const Table = ({ title }) => {
  const [products, setProducts] = useState([]);
  const endpoint = "https://fakestoreapi.com/products";

  const getData = async () => {
    await axios.get(endpoint).then((res) => {
      const data = res.data;
      console.log(data);
      setProducts(data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    { name: "id", label: "ID" },
    { name: "title", label: "Title" },
    { name: "category", label: "Category" },
  ];

  return <MUIDataTable title={title} columns={columns} data={products} />;
};

export default Table;
