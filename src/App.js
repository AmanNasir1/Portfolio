import React from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Navigation from "./Components/Navigation";
const App = () => {
  return (
    <div className="app">
      <Home />
      <About />
      <Portfolio />
      <Navigation />
    </div>
  );
};

export default App;
