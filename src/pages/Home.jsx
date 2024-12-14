
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-blue-900 text-white text-center p-8">
      {/* Animated Heading with Glow */}
      <h1 className="text-5xl font-extrabold mb-6 animate-glow">
        Welcome to Gym Training App
      </h1>

      {/* Subtitle with Staggered Fade-In */}
      <div className="space-y-4">
        <p className="text-lg font-medium max-w-md animate-fade-in-up delay-150">
          Start your fitness journey with tailored workouts for different muscle
          groups.
        </p>
        <p className="text-lg font-medium max-w-md animate-fade-in-up delay-300">
          In this app, the best YouTube videos for workouts are displayed here.
        </p>
      </div>

      {/* Explore Button with Floating Animation */}
      <div className="mt-8">
        <button className="px-8 py-4 bg-yellow-400 text-blue-900 rounded-lg shadow-lg hover:bg-yellow-300 transform hover:scale-110 transition-all duration-300 font-semibold animate-float">
          <Link to="/AllWorkout">Explore Workouts</Link>
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-16 left-10 w-24 h-24 bg-yellow-400 bg-opacity-20 rounded-full blur-xl animate-bounce-slow"></div>
      <div className="absolute bottom-16 right-10 w-32 h-32 bg-yellow-400 bg-opacity-10 rounded-full blur-2xl animate-bounce-slow"></div>
    </div>
  );
};

export default Home;
