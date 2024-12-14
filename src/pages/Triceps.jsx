import React from 'react'
import ExerciseList from '../components/ExerciseList';
const Triceps = () => {
    const tricepsVideos = [
        {
          name: "Tricep Workout By Jeet Selal",
          description: "This Is Big Tricep Workout For Beginners In Hindi.",
          focusArea: "Tricep",
          url:"https://www.youtube.com/embed/LowZYOihoC4?si=OtsPO1M0rY8IKapF",
        },
        {
          name: "Tricep Workout By Jeet (Intermediate)",
          description: "This Is The Sharp Tricep Workout For InterMediate Level In Hindi.",
          focusArea: "Tricep",
          url: "https://www.youtube.com/embed/HsrX4nAS9II?si=FbrFCuj5AoGTsuqg",
        },
        {
            name: "Tricep Workout With Dumbbel By Midas",
            description: "This Is 10 Minute Tricep Workout With Lightweight Dumbbel In English.",
            focusArea: "Tricep",
            url:"https://www.youtube.com/embed/JfSee0Q-vRQ?si=vof8LbT434H2GNnl",
          },
      ];
    
      return (
        <div>
          <h1 className="text-center text-2xl font-bold my-4">Triceps Workouts</h1>
          <ExerciseList exercises={tricepsVideos} />
        </div>
      );
}

export default Triceps
