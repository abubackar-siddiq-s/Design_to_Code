import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import UIToCode from "./components/UIToCode/UIToCode";
import ColorExtraction from "./components/ColorExtraction/ColorExtraction";
import FontDetection from "./components/FontDetection/FontDetection";
import "./App.css";

function App() {
  const [currentView, setCurrentView] = useState("home");

  const navigateToFeature = (feature) => {
    setCurrentView(feature);
  };

  const handleHomeClick = () => {
    setCurrentView("home");
  };

  return (
    <div className="App">
      <Navbar
        currentView={currentView}
        onNavigate={navigateToFeature}
        onHomeClick={handleHomeClick}
      />

      {currentView === "home" && <Home onNavigate={navigateToFeature} />}

      {currentView === "ui" && <UIToCode />}
      {currentView === "color" && <ColorExtraction />}
      {currentView === "font" && <FontDetection />}
    </div>
  );
}

export default App;
