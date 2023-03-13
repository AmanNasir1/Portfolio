import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-header">
        <h1>
          ABOUT <span> ME </span>
        </h1>
      </div>
      <div className="info">
        <div className="personal-info">
          <h1>PERSONAL INFO</h1>
          <div className="personal-info-content">
            <div>
              <h4>
                First Name: <span>Aman</span>
              </h4>
              <h4>
                Last Name: <span>Nasir</span>
              </h4>
            </div>
            <div>
              <h4>
                Age: <span>27 Years</span>
              </h4>
              <h4>
                Nationality: <span>Pakistan</span>
              </h4>
            </div>
            <div>
              <h4>
                Freelance: <span>Available</span>
              </h4>
              <h4>
                Address: <span>Block-16 F.B Area Karachi</span>
              </h4>
            </div>
            <div>
              <h4>
                Phone Number: <span>+923212163426</span>
              </h4>
              <h4>
                Email:<span> aman.nasir231@gmail.com </span>
              </h4>
            </div>
            <div>
              <h4>
                Languages: <span>Urdu, English</span>
              </h4>
            </div>
            <div>
              <button className="about-btn">Download CV</button>
            </div>
          </div>
        </div>
        <div className="experience">
          <div className="experience-box">
            <h1>0 </h1>
            <span>
              - YEARS OF <br /> EXPERIENCE
            </span>
          </div>
          <div className="experience-box">
            <h1>12+</h1>
            <span>
              - COMPLETED <br /> PROJECTS
            </span>
          </div>
        </div>
      </div>
      <hr style={{ margin: "1.2rem 30rem 0 30rem", opacity: "0.1" }} />
      <div className="skills">
        <h1>MY SKILLS</h1>
      </div>
    </div>
  );
};

export default About;
