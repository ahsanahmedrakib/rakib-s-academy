import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ borderTop: '2px solid red', marginTop: '10px' }}>
      <div className="container text-start">
        <div className="row">
          <div className="col-lg-4 mt-2">
            <h5>
              ABOUT <span className="text-danger">RAKIB'S ACADEMY</span>
            </h5>
            <p style={{ textAlign: 'justify' }}>
            Rakib's Academy will continue to share our knowledge for contributing to the success of individuals and to serve society with the best interest.
            </p>
          </div>
          <div className="col-lg-2 mt-2">
            <h5 className="text-danger">INFORMATION</h5>
            <div className="">
              <NavLink
                className="d-block text-dark text-decoration-none"
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className="d-block text-dark text-decoration-none"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className="d-block text-dark text-decoration-none"
                to="/courses"
              >
                Courses
              </NavLink>
              <NavLink
                className="d-block text-dark text-decoration-none"
                to="/services"
              >
                Services
              </NavLink>
            </div>
          </div>
          <div className="col-lg-2 mt-2">
            <h5 className="text-danger">SERVICES</h5>
            <p>24/7 Online Support <br />
            Lifetime Support <br />
            Practice Lab Support <br />
            Class Video <br />
            Review Class <br />
            Job Placement</p>
          </div>
          <div className="col-lg-4 mt-2">
            <h5>
              GET OUR <span className="text-danger">NEWSLETTER</span>
            </h5>
            <div className="d-flex mb-3">
              <input className="form-control w-50 me-2" type="text" />
              <button className="btn btn-outline-danger">SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

