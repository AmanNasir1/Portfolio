import React from "react";
import "./portfolio.css";
import Card from "../Components/Card";
import project1 from "../Assets/project1.PNG";
import project2 from "../Assets/project2.PNG";
import project3 from "../Assets/project3.PNG";
import project4 from "../Assets/project4.PNG";
import project5 from "../Assets/project5.PNG";
import project7 from "../Assets/project7.PNG";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio-header">
        <h1>
          My <span> Portfolio</span>
        </h1>
      </div>
      <div className="portfolio-content">
        <div>
          <Card src={project1} name="ChatGPT Landing Page using React" />
        </div>
        <div>
          <Card src={project2} name="TodoApp Using React" />
        </div>
        <div>
          <Card src={project3} name="Attendance Management System using Vanilla Js" />
        </div>
        <div>
          <Card src={project4} name="ChatApp Using Vanilla js" />
        </div>
        <div>
          <Card src={project5} name="Blog Posting App using Vanilla js" />
        </div>
        <div>
          <Card src={project7} name="Quizz App using Vanilla js" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
