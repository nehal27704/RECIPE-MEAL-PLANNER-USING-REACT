import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay">
          <h1 className="hero-title">Recipe Meal Planner</h1>
          <p className="hero-subtitle">
            Plan meals, save recipes, and create grocery lists—everything in one place.
          </p>
          <Link to="/add" className="hero-btn">Get Started</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
