import React from "react";
import "./About.css";
import profile_img from "../../assets/profileImag.jpg";

const About = () => {
  return (
    <>
      <div id="about" className="About">
        <h1>About</h1>
        <div className="about-content">
          <div className="About-img">
            <img src={profile_img} />
          </div>
          <div className="About-text">
            <p>
              Hello and welcome! I’m Shristi Jainer, a passionate Class 12
              student pursuing PCM (Physics, Chemistry, Mathematics) along with
              Psychology. With a strong drive to explore diverse domains, I’ve
              completed six certified diploma courses from CHS Florida,
              enriching my academic and practical knowledge across subjects that
              matter to the real world.
            </p>
            <p>
              My journey so far has been defined by hands-on internships across
              the environmental, social, and personal interest sectors. These
              experiences have deepened my understanding of how individual
              actions can drive meaningful change. I’m equally drawn to STEM and
              history/literature, finding balance between scientific curiosity
              and human stories.
            </p>
            <p>
              Looking ahead, I aspire to build a future that honors both my
              environmental values and personal skills, without compromising the
              demands of our rapidly evolving world. This website is a
              reflection of my journey, ideas, and the work I’ve done—and
              continue to do—with purpose
            </p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default About;
