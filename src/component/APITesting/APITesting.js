import React, { useEffect, useState } from "react";

const APITesting = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts1 = () => {
    fetch("https://fakestoreapi.com/products")
      .then((responseObj) => {
        console.log(responseObj);
        return responseObj.json();
        // We are Getting Reponse Object but we need actual data so we need to convert this Reponseobject into JSON in order to access data
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchProducts2 = async () => {
    try {
      const responseObj = await fetch("https://fakestoreapi.com/products", {
        method: "GET",
      });
      console.log(responseObj);

      const data = await responseObj.json();

      console.log(data);

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts2();
  }, []);

  return (
    <div>
      <h1>APITesting</h1>
      {products.map((item, idx) => {
        return (
          <div key={idx}>
            <h2>{item?.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default APITesting;
