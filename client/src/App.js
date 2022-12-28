import "./App.css";
import React, { Fragment, useEffect } from "react";
import Navbar from "./Components/layout/Navbar.js";
import Landing from "./Components/layout/Landing.js";
import Register from "./Components/Auth/Register.js";
import Login from "./Components/Auth/Login";
import Alert from "./Components/layout/Alert";
import Dashboard from "./Components/dashboard/Dashboard";
import PrivateRoute from "./Components/routing/PrivateRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { loadUser } from "./actions/auth";
import setAuthToken from "./ulits/setAuthToken";
//Redux
import { Provider } from "react-redux";
import store from "./store";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Landing />} />
          </Routes>
          <section className="container">
            <Alert />
            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route
                path="dashboard"
                element={<PrivateRoute component={Dashboard} />}
              />
            </Routes>
          </section>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
