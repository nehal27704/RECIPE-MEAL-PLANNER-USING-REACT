import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <header className="about-hero">
        <h1>About Recipe Meal Planner</h1>
        <p>Helping you plan, cook, and shop smarter.</p>
      </header>

      <section className="about-content">
        <p>
          Recipe Meal Planner is a simple but powerful web app created to help
          food lovers organize their weekly meals, save their favorite recipes,
          and automatically generate grocery lists. Whether you're a busy
          professional or a home cook, this planner keeps your kitchen routine
          smooth and stress-free.
        </p>

        <h2>What You Can Do</h2>
        <ul>
          <li>✨ Save your favorite recipes with ingredients & instructions.</li>
          <li>📅 Plan meals for each day of the week.</li>
          <li>🛒 Automatically create grocery lists from your weekly plan.</li>
        </ul>

        <h2>The Developer</h2>
        <p>
          This project was built as part of a learning journey in React.js. It
          demonstrates component-based design, state management, and real-world
          features such as derived data (grocery list & nutrition summary).
        </p>
      </section>
    </div>
  );
}

export default About;
