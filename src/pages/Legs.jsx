import React from 'react'
import ExerciseList from '../components/ExerciseList';

const Legs = () => {
    const LegsVideos = [
        {
          name: "Legs Workout By Jeet Selal",
          description: "This is Beginners Legs Workout By Jeet Selal In Hindi .",
          focusArea: "Legs",
          url:"https://www.youtube.com/embed/QKInsLdqitQ?si=36Jpk09rCeTOlESO",
        },
        {
          name: "Legs Workout By Jeet Selal (Intermediate)",
          description: "A Great workout for building Legs strength This is Intemidiate Level In Hindi.",
          focusArea: "Legs",
          url: "https://www.youtube.com/embed/IBp9TOCGIJI?si=yq6IaOqlK1f26l-S",
        },
        {
            name: "Legs Workout By Midas",
            description: "15 Minutes Lightweight workout By Midas In English",
            focusArea: "Legs",
            url: "https://www.youtube.com/embed/WA23NHfNq-s?si=eED8aZu26NP9vQHc",
          },
      ];
    
      return (
        <div>
          <h1 className="text-center text-2xl font-bold my-4">Legs Workouts</h1>
          <ExerciseList exercises={LegsVideos} />
        </div>
      );
}

export default Legs
