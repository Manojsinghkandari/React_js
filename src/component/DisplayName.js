import React from "react";

// const DisplayName = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>My Name is {props.fullName}</h1>
//       {props.a}
//       {props.b}
//       {props.c}
//     </div>
//   );
// };

const DisplayName = ({ fullName }) => {
  return (
    <div>
      <h1>My Name is {fullName}</h1>
    </div>
  );
};

export default DisplayName;
