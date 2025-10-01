import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        {/* Left Side (Heading + Description + Stats) */}
        <div className="about-left">
          <h3 className="about-tagline">About us</h3>
          <h2 className="about-title">
            Inclusive Opportunities, <br /> Tailored for You.
          </h2>
          <div className="about-stats">
            <div className="about-stats-box">
              <h3>86M+</h3>
              <p>Available Jobs</p>
            </div>
            <div className="about-stats-box">
              <h3>546+</h3>
              <p>Free Courses</p>
            </div>
            <div className="about-stats-box">
              <h3>5.7M+</h3>
              <p>Alumni Has Worked</p>
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
