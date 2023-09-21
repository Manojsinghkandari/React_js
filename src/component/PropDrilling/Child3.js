import React from "react";

const Child3 = ({ data }) => {
  console.log("Child 3");
  return (
    <div>
      <h1>Child3</h1>
      <h2>{data}</h2>
    </div>
  );
};

export default Child3;
