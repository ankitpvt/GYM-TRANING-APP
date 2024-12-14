import React from 'react'
import ExerciseList from '../components/ExerciseList';

const Arm = () => {
    const ArmVideos = [
        {
          name: "Arm Workout By Jeet Selal (Intermediate)",
          description: "This is Arm Workout For Intermediate Level In Hindi.",
          focusArea: "Arm",
          url:"https://www.youtube.com/embed/YcVELcqqVEg?si=dvUHnMhGUYeoUMfd",
        },
        {
          name: "Arm Workout By Wilson",
          description: "15 MINUTE ARM WORKOUT (DUMBBELLS ONLY).",
          focusArea: "Arm",
          url: "https://www.youtube.com/embed/UY6-JzdnHUM?si=Q2hGWp-BONjUrjC1",
        },
      ];
    
      return (
        <div>
          <h1 className="text-center text-2xl font-bold my-4">Arm Workouts</h1>
          <ExerciseList exercises={ArmVideos} />
        </div>
      );
}

export default Arm
