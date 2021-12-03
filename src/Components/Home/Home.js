import React from "react";

import js from "./images/js.jpg";
import java from "./images/java.jpg";
import python from "./images/python.jpg";
import oracle from "./images/oracle.jpg";
import rwd from "./images/responsive-web.jpg";
import wd from "./images/web-dev.jpg";
import ma from "./images/mobile-apps.jpg";
import gd from "./images/graphic.jpg";
import dm from "./images/digital.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <div className="carousel">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="6"
              aria-label="Slide 7"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="7"
              aria-label="Slide 8"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="8"
              aria-label="Slide 9"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={js} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item ">
              <img src={java} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item ">
              <img src={python} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item ">
              <img src={oracle} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item ">
              <img src={rwd} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={wd} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={ma} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={gd} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={dm} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* courses section start */}
      <div className="container mt-5 mb-5">
        <h2>
          OUR <span className="text-danger">COURSES</span>
        </h2>
        <p className="mb-5 text-secondary">
          We provide some special programming course for any type of person that
          they can can learn programming with fun and acheive their goal.
        </p>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {courses.slice(0, 4).map((course) => (
            <div key={course.name} className="col text-start">
              <div className="card h-100">
                <img src={course.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-danger">{course.name}</h4>
                  <p
                    style={{ textAlign: "justify" }}
                    className="card-text text-secondary"
                  >
                    {course.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <NavLink to="/courses">
          <button className="btn btn-danger mt-5">SEE ALL COURSES</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
