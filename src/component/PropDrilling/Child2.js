import React from "react";
import Child3 from "./Child3";

const Child2 = ({ data }) => {
  console.log("Child 2");
  return (
    <div>
      <h1>Child2</h1>
      <Child3 data={data} />
    </div>
  );
};

export default Child2;
