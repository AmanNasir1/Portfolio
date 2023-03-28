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
          <Card
            src={project1}
            name="ChatGPT Landing Page using React"
            code="https://github.com/AmanNasir1/GPT-3-landing-page"
            link="https://chatgpt3webapp.netlify.app/"
          />
        </div>
        <div>
          <Card
            src={project2}
            name="TodoApp Using React"
            code="https://github.com/AmanNasir1/React-TodoApp"
            link="https://todoappusingreact.netlify.app/"
          />
        </div>
        <div>
          <Card
            src={project3}
            name="Attendance Management System using Vanilla Js"
            code="https://github.com/AmanNasir1/Attendance-Management-System"
            link="https://attendancesystem12.netlify.app/"
          />
        </div>
        <div>
          <Card
            src={project4}
            name="ChatApp Using Vanilla js"
            code="https://github.com/AmanNasir1/ChatApp"
            link="https://amannasir1.github.io/ChatApp/"
          />
        </div>
        <div>
          <Card
            src={project5}
            name="Blog Posting App using Vanilla js"
            code="https://github.com/AmanNasir1/PostingApp"
            link="https://blogpostingapp.netlify.app/"
          />
        </div>
        <div>
          <Card
            src={project7}
            name="Quizz App using Vanilla js"
            code="https://github.com/AmanNasir1/Quiz-App"
            link="https://amannasir1.github.io/Quiz-App/"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
