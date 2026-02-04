import React from 'react';
import './Home.css';

const Home = ({ onNavigate }) => {
  return (
    <div className="home-view">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Design</span>
            <span className="two">2</span>
            <span className="gradient-text">Code</span>
          </h1>
          <p className="hero-subtitle">
            Turn design into production-ready code. Instantly.
          </p>
          <p className="hero-description">
            D2C is a next-generation AI platform that transforms UI designs
            and screenshots into clean, structured, production-ready
            frontend code. From a single visual input, D2C understands
            layout, components, and intent — and outputs real code
            developers can ship.
          </p>
          <div className="hero-cta">
            <button
              className="cta-primary"
              onClick={() => onNavigate("ui")}
            >
              Start Converting
            </button>
            <button
              className="cta-secondary"
              onClick={() => onNavigate("color")}
            >
              Extract Colors
            </button>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="features-grid">
          <div
            className="feature-card"
            onClick={() => onNavigate("ui")}
          >
            <h3 className="feature-title">UI → Frontend Code</h3>
            <p className="feature-description">
              Convert UI screenshots into HTML, CSS, or React components.
              Supports internal CSS, separate files, and JSX output.
            </p>
          </div>
          <div
            className="feature-card"
            onClick={() => onNavigate("color")}
          >
            <h3 className="feature-title">Image → Color Codes</h3>
            <p className="feature-description">
              Extract dominant colors from images and get ready-to-use CSS
              color codes. Perfect for design system development.
            </p>
          </div>
          <div
            className="feature-card"
            onClick={() => onNavigate("font")}
          >
            <h3 className="feature-title">Font Detection</h3>
            <p className="feature-description">
              Identify fonts from text images. Get font-family CSS
              declarations for accurate design replication.
            </p>
          </div>
        </div>
      </section>

      <section className="value-props">
        <h2 className="section-title">What Makes D2C Different</h2>
        <div className="props-grid">
          <div className="prop-item">
            <h4>Production-Ready Code</h4>
            <p>
              Not mockups or prototypes. Real, editable code that follows
              modern frontend practices.
            </p>
          </div>
          <div className="prop-item">
            <h4>Semantic Structure</h4>
            <p>
              Clean component hierarchy with semantic HTML and organized
              CSS.
            </p>
          </div>
          <div className="prop-item">
            <h4>Multiple Formats</h4>
            <p>
              HTML with internal CSS, separate files, or React components —
              choose what fits your workflow.
            </p>
          </div>
          <div className="prop-item">
            <h4>Engineered, Not Exported</h4>
            <p>
              Built with multi-pass AI architecture for accurate, scalable
              output.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

