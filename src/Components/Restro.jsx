import React from "react";
import Header from "./Header";
// import Body from "./Body";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

const Restro = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

export default Restro;

// Reconsiliation Algorithm (React Fiber)...
//Virtual Dom is a representation of actual DOM...
// DIF Algorithm differenciate btwn virtual and actual DOM...
// React is fast because it can do efficient dom manipulation...
