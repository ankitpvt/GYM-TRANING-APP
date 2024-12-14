// import React from 'react';
// import { Link } from 'react-router-dom';

// const AllWorkout = () => {
//   const workouts = [
//     {link:'/Biceps', name: 'Bicep', image: 'https://i.pinimg.com/originals/48/10/8f/48108f24714a137c54ad30789e76da72.jpg', link: '/biceps' }, // Replace with your image URL
//     {link:'/Ticep', name: 'Tricep', image: 'https://i.pinimg.com/736x/8e/d5/7c/8ed57c63abd6344a8a60377dda5cb5a5.jpg', link: '/triceps' }, // Replace with your image URL
//     {link:'/Chest', name: 'Chest', image: 'https://i.pinimg.com/736x/64/6b/de/646bde71ae27d31cd31bc86c4ad4f387.jpg', link: '/chest' }, // Replace with your image URL
//     {link:'/Shoulder', name: 'Shoulder', image: 'https://i.pinimg.com/736x/15/7f/48/157f484a12c4ac8dac856b52aa275fa9.jpg', link: '/shoulder' }, // Replace with your image URL
//     { link:'/Legs', name: 'Legs', image: 'https://i.pinimg.com/736x/7e/ed/df/7eeddf15d6c2bb2edb7d16f79f8a07ba.jpg', link: '/legs' }, // Replace with your image URL
//     { link:'/Arm', name:'Arm', image: 'https://i.pinimg.com/736x/57/76/be/5776bea752e3024a170ec642bcc0d5a9.jpg', link: '/arm' }, // Replace image URL and link
//   ];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-center mb-8">All Workouts</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {workouts.map((workout) => (
//           <Link to={workout.link} key={workout.name} className="bg-white shadow-md rounded-lg overflow-hidden">
//             <img
//               className="w-full h-48 object-cover rounded-t-lg"
//               src={workout.image}
//               alt={workout.name}
//             />
//             <div className="p-4 text-center">
//               <h3 className="text-lg font-medium">{workout.name}</h3>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllWorkout;




import React from 'react';
import { Link } from 'react-router-dom';

const AllWorkout = () => {
  const workouts = [
    { link: '/Biceps', name: 'Biceps', image: 'https://i.pinimg.com/originals/48/10/8f/48108f24714a137c54ad30789e76da72.jpg' },
    { link: '/Triceps', name: 'Triceps', image: 'https://i.pinimg.com/736x/8e/d5/7c/8ed57c63abd6344a8a60377dda5cb5a5.jpg' },
    { link: '/Chest', name: 'Chest', image: 'https://i.pinimg.com/736x/64/6b/de/646bde71ae27d31cd31bc86c4ad4f387.jpg' },
    { link: '/Shoulder', name: 'Shoulder', image: 'https://i.pinimg.com/736x/15/7f/48/157f484a12c4ac8dac856b52aa275fa9.jpg' },
    { link: '/Legs', name: 'Legs', image: 'https://i.pinimg.com/736x/7e/ed/df/7eeddf15d6c2bb2edb7d16f79f8a07ba.jpg' },
    { link: '/Arm', name: 'Arm', image: 'https://i.pinimg.com/736x/57/76/be/5776bea752e3024a170ec642bcc0d5a9.jpg' },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-blue-900 text-white">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-white mb-8 animate-fade-in">
        Explore All Workouts
      </h1>

      {/* Workout Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-6 max-w-6xl">
        {workouts.map((workout, index) => (
          <Link
            to={workout.link}
            key={workout.name}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl group animate-slide-in-up delay-${index * 100}"
          >
            {/* Image */}
            <img
              className="w-full h-48 object-cover rounded-t-lg group-hover:opacity-90 transition-opacity duration-300"
              src={workout.image}
              alt={workout.name}
            />
            {/* Text */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-500 transition-colors duration-300">
                {workout.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllWorkout;
