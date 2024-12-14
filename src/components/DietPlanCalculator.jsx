import React, { useState } from "react";

const DietPlanCalculator = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [calories, setCalories] = useState(null);
  const [protein, setProtein] = useState(null);

  const calculateDiet = () => {
    const weightInKg = parseFloat(weight);
    const heightInCm = parseFloat(height);

    const bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age + 5;

    const activityMultiplier = {
      sedentary: 1.2,
      lightly_active: 1.375,
      moderately_active: 1.55,
      very_active: 1.725,
      extra_active: 1.9,
    };

    const dailyCalories = bmr * activityMultiplier[activityLevel];
    const dailyProtein = weightInKg * 1.6;

    setCalories(Math.round(dailyCalories));
    setProtein(Math.round(dailyProtein));
  };

  return (
    <div
      className="flex flex-col items-center bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-500 text-white overflow-hidden"
      style={{ height: "calc(100vh - 80px)", paddingTop: "20px" }}
    >
      <h1 className="text-4xl font-bold mb-4 animate-pulse">Diet Plan Calculator</h1>
      <div className="w-full max-w-4xl flex flex-col lg:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex-1 p-5 bg-gradient-to-b from-indigo-500 to-purple-500 text-white overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4">Enter Your Details</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Age (years)</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-300 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-300 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-300 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Activity Level</label>
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              className="w-full p-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-300 text-black"
            >
              <option value="sedentary">Sedentary</option>
              <option value="lightly_active">Lightly Active</option>
              <option value="moderately_active">Moderately Active</option>
              <option value="very_active">Very Active</option>
              <option value="extra_active">Extra Active</option>
            </select>
          </div>
          <button
            onClick={calculateDiet}
            className="w-full py-3 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white rounded-lg shadow-lg text-lg font-bold hover:scale-105 transform transition"
          >
            Calculate
          </button>
        </div>

        {calories && protein && (
          <div className="flex-1 p-5 bg-gray-100 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold text-blue-500 mb-4">Your Daily Needs</h2>
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-6 rounded-lg shadow-xl text-center">
              <p className="text-xl font-semibold text-white mb-2">
                Calories: <span className="font-bold">{calories} kcal/day</span>
              </p>
              <p className="text-xl font-semibold text-white">
                Protein: <span className="font-bold">{protein} g/day</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DietPlanCalculator;
