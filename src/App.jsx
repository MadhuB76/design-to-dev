import React from "react";
import "./index.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import CustomCursor from "./components/cursor";

export default function App() {
  return (
    <div className="app-wrapper">
      <CustomCursor />
      <Navbar />
      <Home />
    </div>
  );
}
