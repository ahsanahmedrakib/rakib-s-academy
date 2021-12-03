import React from "react";
import './css/style.css';
import './css/font-awesome.min.css';
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div id="notfound">
        <div class="notfound-bg"></div>
        <div class="notfound">
          <div class="notfound-404">
            <h1>404</h1>
          </div>
          <h2>we are sorry, but the page you requested was not found</h2>
          <NavLink to="/" class="home-btn">
            Go Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
