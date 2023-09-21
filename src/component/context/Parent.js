import React, { createContext, useState, useEffect } from "react";
import Child1 from "./Child1";

export const ContextObject = createContext();

const Parent = () => {
  const [data, setData] = useState(
    "I am Context API and I Solve Prop Drilling Problem"
  );
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const resp = await fetch("https://fakestoreapi.com/products");
    const data = await resp.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ContextObject.Provider value={{ data, products }}>
      <Child1 />
    </ContextObject.Provider>
  );
};

export default Parent;
