import "./App.css";
import React, { Fragment } from "react";
import Navbar from "./Components/layout/Navbar";
import Landing from "./Components/layout/Landing";
const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Landing />
    </Fragment>
  );
};

export default App;
