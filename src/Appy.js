import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashbord from "./Screens/PrivateRouting/Dashbord";
import Navbar from "./Screens/PrivateRouting/Navbar";
import Home from "./Screens/PrivateRouting/Home";
import PrivateRoute from "./Screens/PrivateRouting/PrivateRoute";
import "./Appy.css";

const Appy = () => {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <div>
      <>
        <BrowserRouter>
          <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
          <Routes>
            <Route
              path="/"
              element={<Home setCurrentUser={setCurrentUser} />}
            />
            <Route
              path="/dashbord"
              element={
                <PrivateRoute user={currentUser}>
                  <Dashbord />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
};

export default Appy;
