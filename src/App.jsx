import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Projects from "./pages/project";
import Process from "./pages/process";
import Experience from "./pages/experience";
import Contact from "./pages/contact";
import CustomCursor from "./components/cursor";

export default function App() {
  return (
    <Router>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/process" element={<Process />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
