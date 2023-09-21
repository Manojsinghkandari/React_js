import React from "react";
import Child2 from "./Child2";

const Child1 = ({ data }) => {
  console.log("Child 1");
  return (
    <div>
      <h1>Child1</h1>
      <Child2 data={data} />
    </div>
  );
};

export default Child1;
