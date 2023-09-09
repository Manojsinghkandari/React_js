import React, { useState } from "react";
import DisplayName from "./DisplayName";

const StatefullComponent = () => {
  const [fullName, setFullName] = useState("Ajay Sharma");
  const [count, setCount] = useState(0);

  // fullName is State Variable
  // setFullName is State Updation Function

  //   const studentName = "Manoj";

  //   console.log(fullName);

  const changeName = () => {
    setFullName("Manoj");
  };

  return (
    <div>
      <h1>StatefullComponent</h1>

      {/* <h1>What is 2 + 2 = {2 + 2}</h1> */}
      <DisplayName fullName={fullName} />

      {/* <button onClick={changeName}>Change Name</button> */}

      {/* <button onClick={changeName()}>Change Name</button>  this is wrong way */}

      {/* <button
        onClick={() => {
          //   console.log("Button is Clicked");
          //   alert("Why are you bothering me?????");
          changeName();
        }}
      >
        Change Name
      </button> */}
    </div>
  );
};

export default StatefullComponent;

// JSX is Powerfull Weapon in ReactJS
