import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        {currentUser ? (
          <>
            <li>
              <Link to={"/dashbord"}>Dashboard</Link>
            </li>
            <li>
              <button
                onClick={() => {
                  setCurrentUser(null);
                  navigate("/");
                }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={"/"}>Signin</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
