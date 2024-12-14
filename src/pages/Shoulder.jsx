import React from 'react'
import ExerciseList from '../components/ExerciseList';

const Shoulder = () => {
    const ShoulderVideos = [
        {
          name: "Shoulder Workout By Jeet Selal",
          description: "This is Shoulder Workout For Beginner In Hindi.",
          focusArea: "Chest",
          url:"https://www.youtube.com/embed/hQrb2gghgd4?si=LvMmdjiAunZXD_JS",
        },
        {
          name: "Sholder Workout By Jeet Selal (Intermidiate)",
          description: "A Great workout for building shoulder strength For Intermediate Level In Hindi.",
          focusArea: "shoulder",
          url: "https://www.youtube.com/embed/mNnyBG8agxg?si=dU7Sp7DKM96H6_KT",
        },
        {
            name: "Sholder Workout By Midas",
            description: "10 MINUTE LIGHTWEIGHT DUMBBELL SHOULDER WORKOUT! In English.",
            focusArea: "shoulder",
            url: "https://www.youtube.com/embed/QVaijMZ2mp8?si=Jk7pm2pyslFVJyH8",
          },
      ];
    
      return (
        <div>
          <h1 className="text-center text-2xl font-bold my-4">Shoulder Workouts</h1>
          <ExerciseList exercises={ShoulderVideos} />
        </div>
      );
}

export default Shoulder
