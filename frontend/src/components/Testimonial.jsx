import React from "react";
import "../styles/Testimonial.css";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Software Engineer",
    photo: "/user1.png",
    feedback:
      "AccuPro Solutions made my job search so smooth. The platform really focuses on diversity and inclusivity which made me feel valued.",
  },
  {
    name: "Neha Verma",
    role: "Marketing Specialist",
    photo: "/user2.png",
    feedback:
      "I found my dream job within a week! The application process was very easy and transparent. Highly recommended.",
  },
  {
    name: "Rahul Singh",
    role: "Data Analyst",
    photo: "/user3.png",
    feedback:
      "The best job portal experience I’ve had. The interface is simple and the jobs are relevant. Loved the support from the team!",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="testimonial-container">
        <h2 className="section-title">What People Say About Us</h2>
        <p className="section-subtitle">
          Our users share their success stories and experiences.
        </p>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <img
                src={item.photo}
                alt={item.name}
                className="testimonial-photo"
              />
              <p className="testimonial-feedback">“{item.feedback}”</p>
              <h3 className="testimonial-name">{item.name}</h3>
              <span className="testimonial-role">{item.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
