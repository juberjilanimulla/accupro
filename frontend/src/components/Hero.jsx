import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-contanier">
        {/*Left content*/}
        <div className="hero-content">
          <span className="hero-tagline">Inclusive workplaces for all.</span>
          <h1 className="hero-title">
            Job Finder with <span className="highlight">Diversity Focus.</span>
          </h1>
          <p className="hero-subtitle">
            Find jobs at companies focused on diversity and inclusion that match
            your values.
          </p>
          {/**Search bar */}
          <div className="search-box">
            <input type="text" placeholder="ex. graphic designer" />
            <select>
              <option value="">Country</option>
              <option value="">India</option>
              <option value="">USA</option>
            </select>
            <button>Find Your Job</button>
          </div>
        </div>
        {/* Right image */}
        <div className="hero-image">
          <img src="/hero-main.png" alt="job seekers" />
          <div className="floating-card">Free Create Resume</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
