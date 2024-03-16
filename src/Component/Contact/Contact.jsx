import React from "react";
import style from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <>
      <div className="container m-5">
      <div className="text-center">
          <h2 className={`pt-5 fs-1 fw-bold ${style.bg_color}`}>CONATCT SECTION</h2>
          <span className={`${style.line}`}><FontAwesomeIcon icon={faStar} /></span>   
        </div>
        <div className="row w-50 m-auto ">
        <input type="text" class="form-control form-control-lg m-3" aria-describedby="passwordHelpBlock" placeholder="Username"/>
        <input type="password" class="form-control form-control-lg m-3" aria-describedby="passwordHelpBlock" placeholder="Userage"/>
        <input type="email" class="form-control form-control-lg m-3" aria-describedby="passwordHelpBlock" placeholder="Useremail"/>
        <input type="email" class="form-control form-control-lg m-3" aria-describedby="passwordHelpBlock" placeholder="Userpassword"/>
        </div>
<div className="w-50 m-auto ps-3">
<button type="button" class="btn btn-success">Send Message</button>

</div>
      </div>
    </>
  );
}

export default Contact;
