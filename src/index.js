import React from "react";
import ReactDOM from "react-dom/client";
import App from "./component/app";
import Appclass from "./component/class";
import StatefullComponent from "./component/StatefullComponent";
import Counter from "./component/Counter";
import FragmentAndFormHandling from "./component/FragmentAndFormHandling";
import ObjectAndArryInUseState from "./component/ObjectAndArryInUseState";
import Lifecycle from "./component/lifecycle/Lifecyle";
import APITesting from "./component/APITesting/APITesting";
import DummyApiTesting from "./component/APITesting/DummyApiTesting";
import CustomBackend from "./component/APITesting/CustomBackend";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <h1>hellow from React</h1>
    {/* <App /> */}
    {/* <Appclass msg={"I am Prop inside Class Comp"}  /> */}
    {/* <StatefullComponent /> */}
    {/* <Counter /> */}
    {/* <FragmentAndFormHandling /> */}
    {/* <ObjectAndArryInUseState /> */}
    {/* <Lifecycle /> */}
    {/* <APITesting /> */}
    {/* <DummyApiTesting /> */}
    <CustomBackend />
  </div>
);
