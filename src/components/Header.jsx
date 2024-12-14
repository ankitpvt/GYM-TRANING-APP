import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white shadow-md sticky top-0 z-10">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Gym Training App</h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/DietPlanCalculator"
              className="hover:text-yellow-400 transition duration-300"
            >
            DietPlanCalculator
            </Link>
          </li>
          <li>
            <Link
              to="/AllWorkout"
              className="hover:text-yellow-400 transition duration-300"
            >
            AllWorkout
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className="hover:text-yellow-400 transition duration-300"
            >
             Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
