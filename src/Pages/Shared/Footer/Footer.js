import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="page-footer  blue pt-4 border mt-3 mb-0">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h2 className="text-uppercase">Web-Hunt</h2>
            <p>
              Here you can learn Web Development and you can gain skills for job
              market.
            </p>
            <p><span className="fw-bold">Email:</span> fakemail@gmail.com</p>
            <p><span className="fw-bold">Location:</span> Dhaka, Bangladesh.</p>
            <div className="fs-2"><FaFacebook className="me-3"></FaFacebook> 
            <FaLinkedin></FaLinkedin></div>
          </div>

          <hr className=" w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Some important Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link>Office</Link>
              </li>
              <li>
                <Link>Adviser</Link>
              </li>
              <li>
                <Link>Manager</Link>
              </li>
              <li>
                <Link>Teacher</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">some important Links</h5>
            <ul className="list-unstyled">
            <li>
                <Link>Office</Link>
              </li>
              <li>
                <Link>Adviser</Link>
              </li>
              <li>
                <Link>Manager</Link>
              </li>
              <li>
                <Link>Teacher</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2022 Copyright:
        <Link to="https://www.facebook.com/mohammod.hp/"> Mohammod Ali</Link>
      </div>
    </footer>
  );
};

export default Footer;
