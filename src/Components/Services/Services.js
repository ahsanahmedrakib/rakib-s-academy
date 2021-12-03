import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container">
      <hr
        style={{ width: "100px", margin: "auto", height: "4px" }}
        className="bg-secondary mb-3"
      />
      <h2>
        <span className="text-danger">SERVICES</span> WE PROVIDED
      </h2>
      <p className="mb-5">
        Explore the weapons of Latest Information Technology!
      </p>

     

      {services.length === 0 ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
          {services.map((service) => (
            <div key={service.name} className="col text-start">
              <div className="card h-100">
                <img
                  src={service.image}
                  className="card-img-top p-3"
                  style={{ width: "30%", margin: "auto" }}
                  alt="..."
                />
                <div className="card-body">
                  <h4 className="card-title text-danger text-center">
                    {service.title}
                  </h4>
                  <p
                    style={{ textAlign: "justify" }}
                    className="card-text text-secondary"
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
