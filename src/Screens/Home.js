import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((responseObj) => {
        return responseObj.json();
        // We are Getting Reponse Object but we need actual data so we need to convert this Reponseobject into JSON in order to access data
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {products.map((item, idx) => {
        return (
          <div key={idx}>
            <Link to={`/product/${item?.id}`}>
              <h2>{item?.title}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
