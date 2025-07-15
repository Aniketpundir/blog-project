import React from "react";
import "./Footer.css";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneOutgoing } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-main-content">
          <div className="footer-left">
            <h1>Shristi Jainer</h1>
            <div className="some-links">
              <a>
                <p><FiPhoneOutgoing /> +91 9068708234</p>
              </a>
              <a href="" target="">
                <p><MdOutlineEmail /> shristijainer13@gmail.com </p>
              </a>
              <a
                href="https://www.instagram.com/_shristijainer/"
                target="_blank"
              >
                <p className="insta"><FaInstagram /> _shristijainer</p>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p className="copys">&copy; Shristi Jainer. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
