import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/navbar/Navbar";
import About from "./pages/About";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
