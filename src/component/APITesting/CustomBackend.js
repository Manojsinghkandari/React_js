import React, { useState, useEffect } from "react";

const CustomBackend = () => {
  const [Product, setProduct] = useState([]);

  const FetchApi = async () => {
    try {
      const responseObj = await fetch(
        "https://jsonplaceholder.typicode.com/photos",
        {
          method: "GET",
        }
      );

      console.log(responseObj);

      const data = await responseObj.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchApi();
  }, []);

  return (
    <div>
      <h1>DummyApiCall</h1>
      {Product.map((item, idx) => {
        return (
          <div key={idx}>
            <h1>{item?.title}</h1>
            <img src={item?.thumbnailUrl} />
          </div>
        );
      })}
    </div>
  );
};

export default CustomBackend;
