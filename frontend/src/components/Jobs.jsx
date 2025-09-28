import React from "react";
import "../styles/Jobs.css";

const jobData = [
  {
    title: "Data Scientist",
    type: "Full Time",
    location: "Remote",
    posted: "2 days ago",
    applicants: "4 applicants",
    salary: "₹25k - ₹80k",
  },
  {
    title: "Cybersecurity",
    type: "Full Time",
    location: "On-site",
    posted: "3 days ago",
    applicants: "12 applicants",
    salary: "₹25k - ₹95k",
  },
  {
    title: "AI Consultant",
    type: "Part Time",
    location: "Remote",
    posted: "4 days ago",
    applicants: "5 applicants",
    salary: "₹15k - ₹60k",
  },
  {
    title: "Full Stack Developer",
    type: "Full Time",
    location: "Hybrid",
    posted: "5 days ago",
    applicants: "20 applicants",
    salary: "₹25k - ₹85k",
  },
  {
    title: "Cloud Engineer",
    type: "Full Time",
    location: "Remote",
    posted: "1 week ago",
    applicants: "6 applicants",
    salary: "₹22k - ₹75k",
  },
  {
    title: "Machine Learning Engineer",
    type: "Full Time",
    location: "On-site",
    posted: "1 week ago",
    applicants: "10 applicants",
    salary: "₹30k - ₹90k",
  },
];

const Jobs = () => {
  return (
    <section className="jobs">
      <div className="jobs-container">
        <h2 className="jobs-title">Latest Job Opportunities</h2>

        {/* Category Tabs */}
        <div className="job-categories">
          <span className="active">IT & Technology</span>
          <span>Marketing</span>
          <span>Finance</span>
          <span>Healthcare</span>
          <span>Education</span>
          <span>Creative & Media</span>
          <span>Retail</span>
          <span>Human Resources</span>
        </div>

        {/* Job Cards */}
        <div className="job-grid">
          {jobData.map((job, index) => (
            <div className="job-card" key={index}>
              <h3>{job.title}</h3>
              <p className="job-type">
                {job.type} • {job.location}
              </p>
              <p className="job-info">
                {job.posted} • {job.applicants}
              </p>
              <p className="job-salary">{job.salary}</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>

        {/* Show More */}
        <div className="show-more">
          <button>See More Jobs</button>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
