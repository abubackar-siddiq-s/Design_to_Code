import React from 'react';
import './Navbar.css';

const Navbar = ({ currentView, onNavigate, onHomeClick }) => {
  return (
    <nav className="main-nav">
      <div className="nav-content">
        <button className="logo-button" onClick={onHomeClick}>
          <span className="logo-text">&lt;<strong>D2C</strong> /&gt;</span>
          <span className="logo-subtitle">Design to Code</span>
        </button>
        <div className="nav-links">
          <button
            className={`nav-link ${currentView === "ui" ? "active" : ""}`}
            onClick={() => onNavigate("ui")}
          >
            UI → Code
          </button>
          <button
            className={`nav-link ${currentView === "color" ? "active" : ""}`}
            onClick={() => onNavigate("color")}
          >
            Color
          </button>
          <button
            className={`nav-link ${currentView === "font" ? "active" : ""}`}
            onClick={() => onNavigate("font")}
          >
            Font
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

