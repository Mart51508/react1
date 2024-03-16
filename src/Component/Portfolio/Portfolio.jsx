import React, { useState } from "react";
import img2 from "../../images/poert1.png";
import img3 from "../../images/port2.png";
import img4 from "../../images/port3.png";
import mystyle from "./Portfolio.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus } from "@fortawesome/free-solid-svg-icons";

function Portfolio() {
  return (
    <>
      <div className="container p-5 ">
        <div className="text-center">
          <h2 className={` ${mystyle.bg_color} pt-5 fs-1 fw-bold `}>
            PORTFOLIO COMPONENT
          </h2>
          <span className={mystyle.line}>
            <FontAwesomeIcon icon={faStar} className="bg_color" />
          </span>
        </div>
        <div className="row g-5 mt-2">
        <div className={`col-md-4  ${mystyle.image} `}>
            <img
              src={img2}
              alt=""
              className={`w-100 rounded-2`}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            />
            <div>
              <FontAwesomeIcon
                icon={faPlus}
                className="fs-1 text-white text-center "
              />
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Modal title
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <img src={img2} className="w-100" alt=""></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-md-4  ${mystyle.image} `}>
            <img
              src={img3}
              alt=""
              className={`w-100 rounded-2`}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            />
            <div>
              <FontAwesomeIcon
                icon={faPlus}
                className="fs-1 text-white text-center "
              />
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Modal title
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <img src={img3} className="w-100" alt=""></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-md-4  ${mystyle.image} `}>
            <img
              src={img4}
              alt=""
              className={`w-100 rounded-2`}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            />
            <div>
              <FontAwesomeIcon
                icon={faPlus}
                className="fs-1 text-white text-center "
              />
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Modal title
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <img src={img4} className="w-100" alt=""></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-md-4  ${mystyle.image} `}>
            <img
              src={img2}
              alt=""
              className={`w-100 rounded-2`}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            />
            <div>
              <FontAwesomeIcon
                icon={faPlus}
                className="fs-1 text-white text-center "
              />
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Modal title
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <img src={img2} className="w-100" alt=""></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-md-4  ${mystyle.image} `}>
            <img
              src={img3}
              alt=""
              className={`w-100 rounded-2`}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            />
            <div>
              <FontAwesomeIcon
                icon={faPlus}
                className="fs-1 text-white text-center "
              />
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Modal title
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <img src={img3} className="w-100" alt=""></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-md-4  ${mystyle.image} `}>
            <img
              src={img4}
              alt=""
              className={`w-100 rounded-2`}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            />
            <div>
              <FontAwesomeIcon
                icon={faPlus}
                className="fs-1 text-white text-center "
              />
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Modal title
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <img src={img4} className="w-100" alt=""></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          
            </div>
          </div>
          
         
    </>
  );
}

export default Portfolio;
