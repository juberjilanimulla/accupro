import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about-wrapper">
      <div className="about-container">
        {/* Left Side (Heading + Description + Stats) */}
        <div className="about-left">
          <h3 className="about-left-tagline">About us</h3>
          <h2 className="about-left-title">
            Inclusive Opportunities, <br /> Tailored for You.
          </h2>
          <div className="about-stats">
            <div className="about-stats-box1">
              <h3>86M+</h3>
              <p>Available Jobs</p>
            </div>
            <div className="about-stats-box2">
              <h3>546+</h3>
              <p>Free Courses</p>
            </div>
            <div className="about-stats-box3">
              <h3>5.7M+</h3>
              <p>Alumni Has Worked</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="about-right">
          <h3 className="about-subtitle">
            {" "}
            Jobs That Embrace Your Uniquesness.
          </h3>
          <p className="about-desc">
            Empowering individuals to find workplaces that value diversity and
            uniquesness.
          </p>
          <span className="about-join">100k+ People Join</span>
          <div className="about-people">
            <img src="/about-img.png" alt="About section" />
          </div>
          <button className="about-button">Tracer Study</button>
        </div>
      </div>
    </section>
  );
};

export default About;
