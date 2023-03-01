import React, { useState } from "react";
import "./navbar.css";
const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">AMAN</a>
      </div>
      <div className="navigations">
        <ul>
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#Resume">Resume</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
