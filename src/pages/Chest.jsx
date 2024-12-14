import React from 'react'
import ExerciseList from '../components/ExerciseList';
const Chest = () => {
    const ChestVideos = [
        {
          name: "Chest Workout By Jeet Selal",
          description: "This is Big Chest Workout For Beginners In hindi.",
          focusArea: "Chest",
          url:"https://www.youtube.com/embed/lvk2PMsuS88?si=1Ald_TmYZNWAINJx",
        },
        {
            name: "Chest Workout By Jeet Selal (Intermediate)",
            description: "This is Big Chest Workout For Intermediate In hindi.",
            focusArea: "Chest",
            url:"https://www.youtube.com/embed/lnDZnMmIO8I?si=nkqOtSTnSi5jswPF",
          },
          {
            name: "Chest Workout By Midas",
            description: "This is 15 Minute Dumbbell Chest Workout In English.",
            focusArea: "Chest",
            url:"https://www.youtube.com/embed/4o1YzksPuqg?si=WVvIyJ-gTYokuLH3",
          },
      ];
    
      return (
        <div>
          <h1 className="text-center text-2xl font-bold my-4">Chest Workouts</h1>
          <ExerciseList exercises={ChestVideos} />
        </div>
      );
};

export default Chest
