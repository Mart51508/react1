import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faGlobe} from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <>
      <footer className="bg-gray text-white text-center p-5">
        <div className="container m-3">
          <div className="row">
            <div className="col-md-4">
              <h2 className="fs-3 fw-bold">LOCATION</h2>
              <p>2215 John Daniel Drive</p>
              <span>Clark, MO 65243</span>
            </div>
            <div className="col-md-4">
              <h2 className="fs-3 fw-bold">AROUND THE WEB</h2>
              <FontAwesomeIcon icon={faFacebookF} className="border border-1 p-3 rounded-circle mx-1" />
              <FontAwesomeIcon icon={faTwitter} className="border border-1 p-3 rounded-circle mx-1"  />
              <FontAwesomeIcon icon={faLinkedinIn} className="border border-1 p-3 rounded-circle mx-1"  />
              <FontAwesomeIcon icon={faGlobe} className="border border-1 p-3 rounded-circle mx-1"  />
            </div>
            <div className="col-md-4">
              <h2 className="fs-3 fw-bold">ABOUT FREELANCER</h2>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg_semi_black p-2 text-white ">
        <p>Copyright © Your Website 2021</p>
      </footer>
    </>
  );
}

export default Footer;
