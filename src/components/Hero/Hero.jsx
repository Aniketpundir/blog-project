import React from "react";
import "./Hero.css";
import profile from "../../assets/profileImag.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <>
      <div id="home" className="Hero-section">
        <div className="hero-section-content">
          <div className="hero-image">
            <img src={profile} />
          </div>
          <div className="hero-text-section">
            <div className="hero-text">
              <h1>I'm Shristi Jainer <br /> I am an Article w riter</h1>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Hero;
