import React from "react";
import Navigation from "../Components/Navigation";
import Picture from "../Assets/test.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="image">
        <img className="image-pic" src={Picture} />
      </div>
      <div className="desc">
        <h1>- I'M Aman Nasir.</h1>
        <h1>Web Developer</h1>
        <p>
          I'm a Frontend Developer focused on crafting   clean and
          user-friendly <br />  experiences,I am passionate about building excellent
         software that  <br />  improves  the lives of those around me.
        </p>
        <button>More About Me</button>
      </div>
      <div className="navigation">
        <Navigation />
      </div>
    </div>
  );
};

export default Home;
