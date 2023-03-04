import React from "react";
import Navbar from "./pages/navbar/Navbar";
import Home from "./pages/Home";
import "./App.css"


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
