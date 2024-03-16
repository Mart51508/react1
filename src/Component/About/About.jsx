import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <>
      <div className="bg-babyblue">
      <div className="container d-flex justify-content-center align-items-center">
      <div className="text-center">
          <h2 className="pt-5 fs-1 fw-bold text-white">ABOUT COMPONENT</h2>
          <span className="line d-inline-block"><FontAwesomeIcon icon={faStar} className="text-white" /></span>   
        </div>
      </div>
      <div className="container">
        <div className="row text-white">
            <div className="col-md-6">
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </div>
            <div className="col-md-6">
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default About;
