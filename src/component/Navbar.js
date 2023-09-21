import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="/">Home</a>
          <br />
          <Link to={"/"}>Home</Link>
        </li>
        <hr />
        <li>
          <a href="/about">About</a>
          <br />
          <Link to={"/about"}>About</Link>
        </li>
        <hr />
        <li>
          <a href="/contact">Contact</a>
          <br />
          <Link to={"/contact"}>Contact</Link>
        </li>
        <hr />
        <li>
          <Link to={"/Courses"}>Courses</Link>
          <ol>
            <li>
              <Link to={"Courses/List"}>Courses/list</Link>
            </li>
            <li>
              <Link to={"Courses/Search"}>Courses/search</Link>
            </li>
          </ol>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

// Link from React-Router-Dom
