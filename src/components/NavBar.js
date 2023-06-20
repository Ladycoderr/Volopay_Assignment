import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import { FaBars, FaThLarge, FaVideo } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="top_header_container">
      <nav>
        <ul>
          <li>
            <NavLink
              exact
              activeClassName="active_navbar"
              className="navLink-1"
              to="/your"
            >
              Your
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeClassName="active_navbar"
              className="navLink"
              to="/"
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeClassName="active_navbar"
              className="navLink"
              to="/blocked"
            >
              Blocked
            </NavLink>
          </li>
        </ul>
        <div className="navBar_icon">
          <FaThLarge style={{ marginRight: "1.5rem", color: "grey" }} />
          <FaBars style={{ color: "grey" }} />
        </div>
      </nav>
      <div className="navbar_line"></div>
    </div>
  );
};

export default NavBar;
