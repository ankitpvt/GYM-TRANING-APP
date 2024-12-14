import React from "react";
import ExerciseList from "../components/ExerciseList";

const Biceps = () => {
  const bicepsVideos = [
    {
      name: "Bicep Video By Jeet Selal",
      description: "This is Big Bicep Workout for Intermediate in Hindi , Across 1.1 Million View .",
      focusArea: "Biceps",
      url:"https://www.youtube.com/embed/YcVELcqqVEg?si=ldRMGc53cBbKFJn9",
    },
    {
      name: "Bicep Video By Midas",
      description: "This is 10 MINUTE LIGHTWEIGHT DUMBBELL BICEP & FOREARM WORKOUT!, Across 1.1 Million View.",
      focusArea: "Biceps and Forarm",
      url: "https://www.youtube.com/embed/JyV7mUFSpXs?si=Z1V1T5q4Tn492Ti2",
    },
    {
    name: "Bicep Video Animated",
      description: "This is the Biceps Animeted Video, This Video Best For Understanding Which Part Are Use In Workout.",
      focusArea: "Biceps",
      url: "https://www.youtube.com/embed/Zjv0tiMjkJU?si=XYQVmOyRfDVuYh-5",
    },
    {
        name: "Bicep Video By Jeet Selal",
          description: "In This Video Jeet Selal Analyze 5 Biggest Mistakes During Bicep Workout",
          focusArea: "Biceps",
          url: "https://www.youtube.com/embed/bMhkG_kJVJs?si=bOZ-cmP9BS00Eimh",
        },
  ];

  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-4">Biceps Workouts</h1>
      <ExerciseList exercises={bicepsVideos} />
    </div>
  );
};

export default Biceps;
