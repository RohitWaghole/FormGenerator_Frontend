import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-root">
      <nav className="navbar">
        <ul className="menu">
          <div>
            <li className="logo">
              <a className="navigate" href="#">
                Form Generator
              </a>
            </li>
          </div>
          <div className="menu">
            <li className="item">
              <a className="navigate" href="#">
                Home
              </a>
            </li>
            <li className="item">
              <a className="navigate" href="#">
                About Us
              </a>
            </li>
            <li className="item">
              <a className="navigate" href="#">
                User
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
