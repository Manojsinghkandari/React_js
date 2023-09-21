import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./component/app";
import Appclass from "./component/class";
import StatefullComponent from "./component/StatefullComponent";
import Counter from "./component/Counter";
import FragmentAndFormHandling from "./component/FragmentAndFormHandling";
import ObjectAndArryInUseState from "./component/ObjectAndArryInUseState";
import Lifecycle from "./component/lifecycle/Lifecyle";
import APITesting from "./component/APITesting/APITesting";
import DummyApiTesting from "./component/APITesting/DummyApiTesting";
import CustomBackend from "./component/APITesting/CustomBackend";
import App from "./App";
import Appy from "./Appy";
// import Parent from "./component/PropDrilling/Parent";
import Parent from "./component/context/Parent";
import ReduxTesting from "./ReduxTesting";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import HomeFeatureTesting from "./HomeFeatureTesting";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    {/* <h1>hellow from React</h1> */}
    {/* <App /> */}
    {/* <Appclass msg={"I am Prop inside Class Comp"}  /> */}
    {/* <StatefullComponent /> */}
    {/* <Counter /> */}
    {/* <FragmentAndFormHandling /> */}
    {/* <ObjectAndArryInUseState /> */}
    {/* <Lifecycle /> */}
    {/* <APITesting /> */}
    {/* <DummyApiTesting /> */}
    {/* <CustomBackend /> */}
    {/* <App /> */}
    {/* <Appy /> */}
    {/* <Parent /> Context */}
    <Provider store={Store}>
      {/* <ReduxTesting /> */}
      <HomeFeatureTesting />
    </Provider>
  </div>
);
