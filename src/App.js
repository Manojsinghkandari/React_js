import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Navbar from "./component/Navbar";
import ProductDetail from "./Screens/ProductDetail";
import Courses from "./Screens/NestedRouting/Courses";
import List from "./Screens/NestedRouting/List";
import Search from "./Screens/NestedRouting/Search";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/Courses" element={<Courses />}>
            <Route path="List" element={<List />} />
            <Route path="Search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
