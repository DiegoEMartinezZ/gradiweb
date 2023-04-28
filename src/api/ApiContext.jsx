import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  const productsList = () => {
    axios
      .get("https://gradistore-spi.herokuapp.com/products/all")
      .then((res) => {
        return setProduct(res.data.products.nodes);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    productsList();
  }, []);

  return (
    <>
      <ApiContext.Provider value={product}>{children}</ApiContext.Provider>
    </>
  );
};
