import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div >
    <div  className="container">
      <nav  className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 my-own-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  activeStyle={{
                    color: "red",
                  }}
                  aria-current="page"
                  to="/home"
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  activeStyle={{
                    color: "red",
                  }}
                  aria-current="page"
                  to="/about"
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  activeStyle={{
                    color: "red",
                  }}
                  aria-current="page"
                  to="/courses"
                >
                  COURSES
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  activeStyle={{
                    color: "red",
                  }}
                  aria-current="page"
                  to="/services"
                >
                  SERVICES
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
  );
};

export default Header;
