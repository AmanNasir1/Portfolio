import React from "react";
import "./Home.css";
import Pic from "../Assets/test.png";

const Home = () => {
  return (
    <div id="Home">
      <div className="homeContent">
        <p>HELLO!</p>
        <h3>
          I'm <span> Aman Nasir</span>
        </h3>
        <h4>A MERN Stack Developer</h4>
        <div className="buttons">
          <button>HIRE ME</button>
          <button>MY WORKS</button>
        </div>
      </div>
      <div className="image">
        <img src={Pic} alt="" />
      </div>
    </div>
  );
};

export default Home;
