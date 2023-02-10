import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="menu">
          <div>
            <li className="logo">
              <a href="#">Form Generator</a>
            </li>
          </div>
          <div className="menu">
            <li className="item">
              <a href="#">Home</a>
            </li>
            <li className="item">
              <a href="#">About Us</a>
            </li>
            <li className="item">
              <a href="#">User</a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
