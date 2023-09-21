import React, { useContext } from "react";
import { ContextObject } from "./Parent";

const Child3 = () => {
  const ctx = useContext(ContextObject);
  console.log(ctx);
  return (
    <div>
      <h1>Child3</h1>
      <h4>{ctx.data}</h4>
      {ctx.products.map((i) => {
        return <h1>{i?.title}</h1>;
      })}
    </div>
  );
};

export default Child3;
