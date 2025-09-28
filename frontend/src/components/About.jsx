import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <h2>
            Inclusive Opportunities, <br /> Tailored for You.
          </h2>
          <p>
            Jobs that embrace your uniqueness. Empowering individuals who thrive
            through diversity and differences.
          </p>
          <div className="about-stats">
            <div>
              <h3>86M+</h3>
              <p>Available Jobs</p>
            </div>
            <div>
              <h3>546+</h3>
              <p>Free Courses</p>
            </div>
            <div>
              <h3>5.7M+</h3>
              <p>Resumes Uploaded</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src="/about-img.png" alt="About section" />
        </div>
      </div>
    </section>
  );
};

export default About;
