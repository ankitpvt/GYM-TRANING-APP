import React from "react";
import VideoCard from "./VideoCard";

const ExerciseList = ({ exercises }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {exercises.map((exercise, index) => (
        <VideoCard key={index} video1={exercise} />
      ))}
    </div>
  );
};

export default ExerciseList;
