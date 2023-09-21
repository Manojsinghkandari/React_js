import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "./redux/features/homeSlice";

const HomeFeatureTesting = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <div>
      <h1>HomeFeatureTesting</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        products?.map((p) => {
          return <h5>{p?.title}</h5>;
        })
      )}
    </div>
  );
};

export default HomeFeatureTesting;
