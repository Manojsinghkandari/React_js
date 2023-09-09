import React, { useState } from "react";
import CounterValue from "./CounterValue";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  console.log(counter);
  return (
    <div>
      <CounterValue counter={counter} />
      <button
        onClick={() => {
          if(counter===10){
           alert("you are reach the limit")
          }else{
            setCounter(counter + 1);
          }
          
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          if(counter===0){
          alert("this is not decrease in minus")
          }else{
            setCounter(counter - 1);
          }
          
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;
