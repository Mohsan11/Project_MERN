import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <a href="dashboard.html">
          {" "}
          <i className="fa fa-code"></i>DevConnector
        </a>
      </h1>
      <ul>
        <li>
          <a href="profiles.html">Developers</a>
        </li>
        <li>
          <a href="./register.html">Register</a>
        </li>
        <li>
          <a href="./login.html">login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
