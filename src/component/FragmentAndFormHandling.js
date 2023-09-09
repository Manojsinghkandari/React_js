import React, { Fragment, useState } from "react";

// const FragmentAndFormHandling = () => {
//   return (
//     <Fragment>
//       <div id="1">
//         <h1>FragmentAndFormHandling</h1>
//       </div>
//       <div id="2">
//         <h1>I am a Sibling</h1>
//       </div>
//     </Fragment>
//   );
// };

const FragmentAndFormHandling = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify({ username, email, password }));
    console.log(username, email, password);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            placeholder="Enter Username"
          />
        </div>
        <div>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Enter Email"
          />
        </div>
        <div>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="text"
            placeholder="Enter Password"
          />
        </div>
        <div>
          <button>Register</button>
        </div>
      </form>
    </Fragment>
  );
};

export default FragmentAndFormHandling;

// Container Tag => div, span, main, aside
// Fragment

// You provided a `value` prop to a form field without an `onChange` handler.
// This will render a read-only field.

// Note :- Whenever we try to submit the form, form has a default behaviour of page refreshing after submission
