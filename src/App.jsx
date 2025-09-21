import React from "react";
import "./index.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Home />
    </div>
  );
}
