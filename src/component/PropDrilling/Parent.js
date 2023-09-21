import React, { useState } from "react";
import Child1 from "./Child1";

const Parent = () => {
  const [data, setData] = useState("Manoj is very Good Student");
  return (
    <div>
      <h1>Parent</h1>
      <Child1 data={data} />
    </div>
  );
};

export default Parent;
