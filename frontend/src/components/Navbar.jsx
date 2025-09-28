import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Accupro Solutions</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Find Job</li>
          <li>Find Talent</li>
          <li>New & Insights</li>
          <li>Contact</li>
        </ul>
        <div className="nav-actions">
          <button className="btn-outline">Join Now</button>
          <button className="btn-primary">Hire Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
