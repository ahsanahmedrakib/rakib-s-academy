import React from "react";

import p from './programming.jpg'

const About = () => {
  return (
    <div className="container">
        <hr style={{ width: '100px', margin: 'auto', height: '4px' }} className="bg-secondary mb-3" />
      <h2>
        ABOUT <span className="text-danger">RAKIB'S ACADEMY</span>
      </h2>
      <img src={p} width="100%" className="mt-3" alt="" />
      <h5 className="text-start mb-5 mt-3 text-secondary">
        Rakib's Academy will continue to share our knowledge for contributing to
        the success of individuals and to serve society with the best interest.
        <br /> <br />
        We are committed to providing our students with a platform where
        superiority is the mantra. We nurture the young talent by sharing
        knowledge, providing supports in learning techniques, co-operating them
        for international standard projects, making successful freelancers and
        driving our youth towards a world of entrepreneurship and thus reducing
        inequalities.
        <br /> <br />
        In this fast-paced digital world, achieving in career and reaching in
        targeted goal is depending on the proper execution of planning,
        implementing and sustaining changes. So getting there with an
        institution like us will be your wise choice. Your great experience of
        learning influences our way of training and thus we serve our students
        and engage with our commitments. Here we invite you to come and join us
        to have a change in the result of your life and thus we would be
        grateful to know you and to strengthen a long-lasting relationship.
      </h5>
    </div>
  );
};

export default About;
