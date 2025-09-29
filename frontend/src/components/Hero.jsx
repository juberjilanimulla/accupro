import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Side */}
        <div className="hero-content">
          <span className="hero-tagline">Inclusive workplaces for all.</span>
          <h1 className="hero-title">
            Job Finder with <span className="highlight">Diversity Focus.</span>
          </h1>
          <p className="hero-subtitle">
            Find jobs at companies focused on diversity and inclusion that match
            your values.
          </p>

          {/* Search Bar */}
          <div className="search-bar">
            <input type="text" placeholder="ex. graphic designer" />
            <select>
              <option>Country</option>
              <option>India</option>
              <option>USA</option>
            </select>
            <button>Find Your Job</button>
          </div>

          {/* Social Proof */}
          <p>
            <div className="people-join">
              100k+ <span>People Join</span>
            </div>
          </p>
          <div className="social-proof">
            <div className="avatars">
              <img src="/hero-main3.png" />
            </div>
            <div>
              <span className="stars">
                5.0 <span className="star-icons">★★★★★</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="hero-image-wrapper">
          <div className="hero-image-bg">
            <img src="/hero-main.png" alt="job seekers" />
            <div className="floating-card top-left">Free Create Resume</div>
            <div className="floating-card bottom-right">Job Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
