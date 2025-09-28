import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Jobs from "./components/Jobs";
import HowItWorks from "./components/HowItWorks";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div>
      <Hero />
      <Navbar />
      <About />
      <Jobs />
      <HowItWorks />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
