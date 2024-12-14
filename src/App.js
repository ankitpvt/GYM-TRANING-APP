import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Biceps from "./pages/Biceps";
import Triceps from "./pages/Triceps";
import Chest from "./pages/Chest";
import AllWorkout from "./pages/AllWorkout";
import Legs from "./pages/Legs";
import Shoulder from "./pages/Shoulder";
import Arm from "./pages/Arm";
import Contact from "./navbar/Contact";
import DietPlanCalculator from "./components/DietPlanCalculator";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biceps" element={<Biceps />} />
        <Route path="/triceps" element={<Triceps />} />
        <Route path="/chest" element={<Chest />} />
        <Route path="/allWorkout" element={<AllWorkout/>}/>
        <Route path="/legs" element={<Legs/>} />
        <Route path="/shoulder" element={<Shoulder/>} />
        <Route path="/arm" element={<Arm/>} />
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/DietPlanCalculator" element={<DietPlanCalculator/>}/>
      </Routes>
    </Router>

  );
};

export default App;
