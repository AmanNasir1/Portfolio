import React from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./Components/Navigation";
const App = () => {
  return (
    <div className="app">
      <Home />
      <About />
      <Navigation />
    </div>
  );
};

export default App;
