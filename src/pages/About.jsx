import React from "react";
import "./about.css";
import Circle from "react-circle";

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
        <div className="circle">
          <div className="circle1">
            <div>
              <Circle
                progress={98}
                size={150}
                progressColor="#FFB912"
                bgColor="#252525"
                textColor="#fff"
                roundedStroke={true}
                showPercentage={true}
              />
              <span>HTML</span>
            </div>
            <div>
              <Circle
                progress={75}
                size={150}
                progressColor="#FFB912"
                bgColor="#252525"
                textColor="#fff"
                roundedStroke={true}
                showPercentage={true}
              />

              <span>CSS</span>
            </div>
            <div>
              <Circle
                progress={70}
                size={150}
                progressColor="#FFB912"
                bgColor="#252525"
                textColor="#fff"
                roundedStroke={true}
                showPercentage={true}
              />

              <span>javaScript</span>
            </div>
            <div>
              <Circle
                progress={65}
                size={150}
                progressColor="#FFB912"
                bgColor="#252525"
                textColor="#fff"
                roundedStroke={true}
                showPercentage={true}
              />

              <span>React</span>
            </div>
          </div>
          <div className="circle1">
            <div>
              <Circle
                progress={55}
                size={150}
                progressColor="#FFB912"
                bgColor="#252525"
                textColor="#fff"
                roundedStroke={true}
                showPercentage={true}
              />

              <span>Node</span>
            </div>
            <div>
              <Circle
                progress={50}
                size={150}
                progressColor="#FFB912"
                bgColor="#252525"
                textColor="#fff"
                roundedStroke={true}
                showPercentage={true}
              />

              <span>MongoDB</span>
            </div>
            <div>
              <Circle
                progress={50}
                size={150}
                progressColor="#FFB912"
                bgColor="#252525"
                textColor="#fff"
                roundedStroke={true}
                showPercentage={true}
              />

              <span>React Native</span>
            </div>
            <div>
              <Circle
                progress={85}
                size={150}
                progressColor="#FFB912"
                bgColor="#252525"
                textColor="#fff"
                roundedStroke={true}
                showPercentage={true}
              />

              <span>Firebase</span>
            </div>
          </div>
        </div>
      </div>
      <div className="education">
        <h1
          style={{
            color: "#fff",
            textTransform: "uppercase",
            fontSize: "30px",
            textAlign: "center",
          }}
        >
          Experience & Educations
        </h1>
        <div className="education-content">
          <div className="experience-info">
            <div>
              <span>2022-PRESENT</span>
              <h3>Web Developer Intern - The Spark Foundation</h3>
              <p>Been Selected for a rotational internship  </p>
            </div>
            <div>
              <span>2022-PRESENT</span>
              <h3>Web Developer Intern - The Spark Foundation</h3>
              <p>Been Selected for a rotational internship  </p>
            </div>
            <div>
              <span>2022-PRESENT</span>
              <h3>Web Developer Intern - The Spark Foundation</h3>
              <p>Been Selected for a rotational internship  </p>
            </div>
          </div>
          <div className="education-info">
          <div>
              <span>2022-PRESENT</span>
              <h3>Web Developer Intern - The Spark Foundation</h3>
              <p>Been Selected for a rotational internship  </p>
            </div>
          <div>
              <span>2022-PRESENT</span>
              <h3>Web Developer Intern - The Spark Foundation</h3>
              <p>Been Selected for a rotational internship  </p>
            </div>
          <div>
              <span>2022-PRESENT</span>
              <h3>Web Developer Intern - The Spark Foundation</h3>
              <p>Been Selected for a rotational internship  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
