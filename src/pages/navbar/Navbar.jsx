import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div className="navbar">
      <div className="logo">
        <a href="#">AMAN</a>
      </div>
      <div className="navigations" id={showMenu ? "hidden" : ""}>
        <ul>
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">RESUME</a>
          </li>
          <li>
            <a href="">PROJECTS</a>
          </li>
          <li>
            <a href="">SKILLS</a>
          </li>
          <li>
            <a href="">CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="hamburger-menu">
        <a href="#" onClick={() => setShowMenu(!showMenu)}>
          <GiHamburgerMenu />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
