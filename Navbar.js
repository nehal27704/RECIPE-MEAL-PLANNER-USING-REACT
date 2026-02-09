import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },          // ✅ New About link
    { name: "Add Recipe", path: "/add" },
    { name: "View Recipes", path: "/recipes" },
    { name: "Meal Planner", path: "/meal-planner" },
    { name: "Grocery List", path: "/grocery-list" },
  ];

  return (
    <div className="fixed">
      {navItems.map((item) => (
        <button
          key={item.name}
          onClick={() => navigate(item.path)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
