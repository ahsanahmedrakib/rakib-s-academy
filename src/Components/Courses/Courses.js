import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const search = (e) => {
    const searchText = e.target.value;
    const matchCourses = courses.filter((course) =>
      course.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setCourses(matchCourses);
  };

  return (
    <div className="container">
      <hr
        style={{ width: "100px", margin: "auto", height: "4px" }}
        className="bg-secondary mb-3"
      />
      <h2>
        OUR <span className="text-danger">COURSES</span>
      </h2>
      <p className="mb-5">
        We provide some special programming course for any type of person that
        they can can learn programming with fun and acheive their goal.
      </p>

      <div className="w-50 m-auto">
        <input
          onChange={search}
          className="form-control mb-3"
          type="text"
          name=""
          id=""
          placeholder="Search your course"
        />
      </div>

      {courses.length === 0 ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
          {courses.map((course) => (
            <div key={course.name} className="col text-start">
              <div className="card h-100">
                <img src={course.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3 className="card-title text-danger">{course.name}</h3>
                  <p
                    style={{ textAlign: "justify" }}
                    className="card-text text-secondary"
                  >
                    {course.description}
                  </p>
                  <h5 className="text-primary">
                    Course Duration: {course.courseDuration}
                  </h5>
                </div>
                <div className="card-footer">
                  <h5 className="text-secondary d-flex justify-content-between align-items-center">
                    <span className="text-danger">
                      Course fee: {course.courseFee}
                    </span>
                    <span>
                      <button className="btn btn-danger">Apply Now</button>
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
