import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ setCurrentUser }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    if (!username && !password) {
      setCurrentUser(null);
    } else {
      setCurrentUser({
        username,
        password,
      });
      navigate("/dashbord");
    }
  };

  return (
    <div
    // style={{
    //   color: "red",
    //   backgroundColor: "blue",
    // }}
    // className="form"
    // class="form"
    >
      <h1>Home</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Home;
