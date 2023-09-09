import React, { useEffect, useState } from "react";

const Lifecycle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounting Phase");
  }, []); // Empty Array Will Make Sure useEffect will Run Once, When Component is Initially Rendered

  useEffect(() => {
    console.log("Updation Phase");
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("UnMounting Phase");
    };
  }, []);

  //   useEffect(() => {
  //     console.log(
  //       "Mounting Phase => We Major do API Call and Add Some Event Listeners"
  //     );

  //     console.log("Updation Phase");

  //     return () => {
  //       console.log(
  //         "UnMounting Phase => Used to Reset State and Remove Event Listeners"
  //       );
  //     };
  //   }, [count]);

  return (
    <div>
      <h1>Lifecycle</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default Lifecycle;
